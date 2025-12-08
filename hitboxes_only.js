// ==UserScript==
// @name         EvoWars AutoAttack Hitbox Module
// @namespace    https://tampermonkey.net/
// @version      0.1
// @description  Stand-alone auto-attack with scythe hitbox detection & red-square overlay. Requires MoonBlast! to be loaded before.
// @author       Cascade
// @grant        unsafeWindow
// @run-at       document-end
// ==/UserScript==

(function(){
    'use strict';

    const uw = (typeof unsafeWindow !== 'undefined') ? unsafeWindow : window;

    // --- CONFIG -----------------------------------------------------------------
    const HITBOXES = {
        ghostlyReaper : { left: 32, top: 16.5, width: 43, height: 98.5 },
        pumpkinGhost  : { left: 43, top: 68,   width: 62, height: 150   },
        grimReaper    : { left: 42, top: 63,   width: 52, height: 141   },
    };
    const TARGETS = Object.keys(HITBOXES);
    const LOOP_INTERVAL = 16; // ms

    // Local toggle for auto-attack. Hotkey: P
    let autoAttackEnabled = true;
    document.addEventListener('keydown',e=>{ if(e.key==='p' || e.key==='р') autoAttackEnabled=!autoAttackEnabled; });

    // Simple helper to trigger skill via synthetic key events
    function triggerSkill(){
        ['keydown','keyup'].forEach(type=>{
            document.dispatchEvent(new KeyboardEvent(type,{key:'e',code:'KeyE',keyCode:69,which:69,bubbles:true}));
        });
    }

    // -----------------------------------------------------------------------------
    let installed = false;
    let overlayCanvas, overlayCtx;

    const waitId = setInterval(() => {
        if (uw.game && uw.game.drawObject && !installed) {
            install();
            installed = true;
            clearInterval(waitId);
        }
    }, 250);

    function install(){
        createOverlay();
        hookDraw();
    }

    function createOverlay(){
        overlayCanvas = document.createElement('canvas');
        overlayCanvas.style.position = 'absolute';
        overlayCanvas.style.pointerEvents = 'none';
        overlayCanvas.style.top = '0';
        overlayCanvas.style.left = '0';
        overlayCanvas.style.zIndex = '9999';
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        document.body.appendChild(overlayCanvas);
        overlayCtx = overlayCanvas.getContext('2d');
    }
    function resizeCanvas(){
        overlayCanvas.width  = window.innerWidth;
        overlayCanvas.height = window.innerHeight;
    }

    // Hook engine.drawObject to render extra visuals & run auto-attack ----------------------------------
    function hookDraw(){
        const proto = Object.getPrototypeOf(uw.game);
        const original = proto.drawObject || uw.game.drawObject;
        proto.drawObject = function(entity, ...args){
            original.apply(this, [entity, ...args]);
            try { runLogic(this, entity); } catch(e) {}
        }
    }

    // Main per-entity logic -----------------------------------------------------------------------------
    function runLogic(engine, obj){
        if(!obj || !obj.position || !engine.me) return;
        if(!TARGETS.includes(obj.name)) return;

        // Draw red hitbox of enemy scythe
        drawEnemyScythe(engine, obj);

        // Auto-attack if our scythe rectangle overlaps enemy collider
        autoAttackIfNeeded(engine, obj);
    }

    // Drawing helpers ----------------------------------------------------------------------------------
    function drawEnemyScythe(engine, obj){
        const hb = HITBOXES[obj.name];
        const dir = (obj.flySide ?? 1);
        const pivotX = obj.position.x + obj.width/2;
        const worldRect = dir>=0 ?
            { left: pivotX + hb.left, top: obj.position.y + hb.top, width: hb.width, height: hb.height } :
            { left: pivotX - hb.left - hb.width, top: obj.position.y + hb.top, width: hb.width, height: hb.height };

        const start = engine.getRenderPosition(worldRect.left, worldRect.top);
        const scaleX = engine.zoom * engine.scaleX;
        const scaleY = engine.zoom * engine.scaleY;

        overlayCtx.save();
        overlayCtx.lineWidth = 2;
        overlayCtx.strokeStyle = 'red';
        overlayCtx.globalAlpha = 0.8;
        overlayCtx.strokeRect(start.x, start.y, worldRect.width*scaleX, worldRect.height*scaleY);
        overlayCtx.restore();
    }

    // Simple rectangle collision detection (canvas y-axis flipped handled by using same coords) ----------
    function rectsOverlap(a,b){
        return !(a.left >= b.right || b.left >= a.right || a.top >= b.bottom || b.top >= a.bottom);
    }

    function autoAttackIfNeeded(engine, enemy){
        const me = engine.me;
        if(!autoAttackEnabled) return;

        const hb = HITBOXES[enemy.name];
        const dir = (enemy.flySide ?? 1);
        const pivotX = enemy.position.x + enemy.width/2;
        const eRect = dir>=0 ?
            { left: pivotX + hb.left, right: pivotX + hb.left + hb.width,
              top: enemy.position.y + hb.top, bottom: enemy.position.y + hb.top + hb.height } :
            { left: pivotX - hb.left - hb.width, right: pivotX - hb.left,
              top: enemy.position.y + hb.top, bottom: enemy.position.y + hb.top + hb.height };

        // Our collider (simplified AABB)
        const mRect = {
            left: me.position.x + me.width  * me.colliderRectangleOffset.left,
            right: me.position.x + me.width  - me.width  * me.colliderRectangleOffset.right,
            top:  me.position.y + me.height * me.colliderRectangleOffset.top,
            bottom: me.position.y + me.height - me.height * me.colliderRectangleOffset.bottom,
        };

        if(rectsOverlap(eRect, mRect)){
            triggerSkill();
        }
    }
})();

