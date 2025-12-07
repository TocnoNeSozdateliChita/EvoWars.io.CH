// ==UserScript==
// @name         EvoWorld Auto Attack
// @namespace    http://tampermonkey.net/
// @version      0.1.5
// @description  Auto attack for EvoWorld
// @author       You
// @match        https://evoworld.io/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const menu = document.createElement('div');
    menu.style.position = 'fixed';
    menu.style.top = '10px';
    menu.style.left = '10px';
    menu.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    menu.style.color = 'white';
    menu.style.padding = '10px';
    menu.style.borderRadius = '5px';
    menu.style.zIndex = '10000';
    document.body.appendChild(menu);

    const title = document.createElement('h3');
    title.textContent = 'Auto Attack Script';
    menu.appendChild(title);

    const autoAttackCheckbox = document.createElement('input');
    autoAttackCheckbox.type = 'checkbox';
    autoAttackCheckbox.id = 'autoAttack';
    const autoAttackLabel = document.createElement('label');
    autoAttackLabel.htmlFor = 'autoAttack';
    autoAttackLabel.textContent = 'Enable Auto Attack';
    menu.appendChild(autoAttackCheckbox);
    menu.appendChild(autoAttackLabel);

    let autoAttackEnabled = false;
    let lastAttackTime = 0;
    const ATTACK_COOLDOWN = 50;
    let game = null;
    let originalDrawObjectsProto = null;
    let overlayCanvas, overlayCtx;

    const targetEnemyNames = ['ghost', 'ghostlyReaper', 'grimReaper', 'pumpkinGhost'];

    autoAttackCheckbox.addEventListener('change', (e) => {
        autoAttackEnabled = e.target.checked;
    });

    function rectToPoly(rect) {
        return [
            { x: rect.left,  y: rect.bottom },
            { x: rect.left,  y: rect.top },
            { x: rect.right, y: rect.top },
            { x: rect.right, y: rect.bottom }
        ];
    }

    function rotatePoint(pt, pivot, rad) {
        const s = Math.sin(rad), c = Math.cos(rad);
        const x = pt.x - pivot.x, y = pt.y - pivot.y;
        return {
            x: pivot.x + x * c - y * s,
            y: pivot.y + x * s + y * c
        };
    }

    function rotatePoly(poly, pivot, rad) {
        return poly.map(p => rotatePoint(p, pivot, rad));
    }

    function projectPolygon(axis, poly) {
        let min = axis.x * poly[0].x + axis.y * poly[0].y;
        let max = min;
        for (let i = 1; i < poly.length; i++) {
            const p = axis.x * poly[i].x + axis.y * poly[i].y;
            if (p < min) min = p;
            if (p > max) max = p;
        }
        return { min, max };
    }

    function polygonsIntersect(polyA, polyB) {
        const polys = [polyA, polyB];
        for (let k = 0; k < 2; k++) {
            const poly = polys[k];
            for (let i = 0; i < poly.length; i++) {
                const p1 = poly[i];
                const p2 = poly[(i + 1) % poly.length];
                const edge = { x: p2.x - p1.x, y: p2.y - p1.y };
                let axis = { x: -edge.y, y: edge.x };
                const len = Math.sqrt(axis.x * axis.x + axis.y * axis.y) || 1;
                axis.x /= len; axis.y /= len;
                const projA = projectPolygon(axis, polyA);
                const projB = projectPolygon(axis, polyB);
                if (projA.max < projB.min || projB.max < projA.min) {
                    return false;
                }
            }
        }
        return true;
    }

    function getColliderRect(obj) {
        return {
            left: obj.position.x + obj.width * obj.colliderRectangleOffset.left,
            right: obj.position.x + obj.width - obj.width * obj.colliderRectangleOffset.right,
            top: obj.position.y + obj.height - obj.height * obj.colliderRectangleOffset.top,
            bottom: obj.position.y + obj.height * obj.colliderRectangleOffset.bottom
        };
    }

    function performAutoAttackDraw(engine) {
        if (!engine || !engine.me) return;
        if (!autoAttackEnabled) return;

        const ctx = engine.dynamicContext || engine.context;
        const player = engine.me;
        const playerCollider = getColliderRect(player);

        const BAR_WIDTH = 100;

        const playerAngleRad = (player.moveDirection || 0) * Math.PI / 180;
        const side = (typeof player.direction === 'number' ? player.direction : (player.flySide || 1));

        const playerStripeRect = side >= 0
            ? { left: playerCollider.right, right: playerCollider.right + BAR_WIDTH, top: playerCollider.top, bottom: playerCollider.bottom }
            : { left: playerCollider.left - BAR_WIDTH, right: playerCollider.left, top: playerCollider.top, bottom: playerCollider.bottom };

        const playerPivot = {
            x: player.position.x + player.width / 2,
            y: player.position.y + player.height / 2
        };
        const playerStripePoly = rotatePoly(rectToPoly(playerStripeRect), playerPivot, playerAngleRad);

        ctx.save();
        const oldPlayerColor = player.colliderColor;
        player.colliderColor = '#00ff00';
        engine.drawCollider(player);
        player.colliderColor = oldPlayerColor;

        function engineDrawPoly(poly, strokeStyle, fillStyle) {
            ctx.save();
            ctx.beginPath();
            const p0 = engine.getRenderPosition(poly[0].x, poly[0].y);
            ctx.moveTo(p0.x, p0.y);
            for (let i = 1; i < poly.length; i++) {
                const p = engine.getRenderPosition(poly[i].x, poly[i].y);
                ctx.lineTo(p.x, p.y);
            }
            ctx.closePath();
            ctx.lineWidth = 3;
            if (fillStyle) {
                ctx.fillStyle = fillStyle;
                ctx.fill();
            }
            ctx.strokeStyle = strokeStyle;
            ctx.stroke();
            ctx.restore();
        }

        engineDrawPoly(playerStripePoly, '#ff0000', null);

        let hitDetected = false;

        for (const id in engine.gameObjects) {
            const obj = engine.gameObjects[id];
            if (obj && targetEnemyNames.includes(obj.name)) {
                const enemyCollider = getColliderRect(obj);
                const oldColor = obj.colliderColor;
                obj.colliderColor = '#052a57';
                engine.drawCollider(obj);
                obj.colliderColor = oldColor;

                const barW = BAR_WIDTH;
                const enemyPivot = {
                    x: obj.position.x + obj.width / 2,
                    y: obj.position.y + obj.height / 2
                };
                const angleRad = (obj.rotation || 0) * Math.PI / 180;

                const leftBarRect = { left: enemyCollider.left - barW, right: enemyCollider.left, top: enemyCollider.top, bottom: enemyCollider.bottom };
                const rightBarRect = { left: enemyCollider.right, right: enemyCollider.right + barW, top: enemyCollider.top, bottom: enemyCollider.bottom };

                const leftBarPoly = rotatePoly(rectToPoly(leftBarRect), enemyPivot, angleRad);
                const rightBarPoly = rotatePoly(rectToPoly(rightBarRect), enemyPivot, angleRad);

                if (polygonsIntersect(playerStripePoly, leftBarPoly)) {
                    hitDetected = true;
                    console.log('AutoAttack: playerStripe <-> enemy left stripe', obj.id || id, 'rot', obj.rotation);
                    engineDrawPoly(leftBarPoly, '#ff0000', 'rgba(255,0,0,0.22)');
                } else if (polygonsIntersect(playerStripePoly, rightBarPoly)) {
                    hitDetected = true;
                    console.log('AutoAttack: playerStripe <-> enemy right stripe', obj.id || id, 'rot', obj.rotation);
                    engineDrawPoly(rightBarPoly, '#ff0000', 'rgba(255,0,0,0.22)');
                } else {
                    engineDrawPoly(leftBarPoly, '#ff0000', null);
                    engineDrawPoly(rightBarPoly, '#ff0000', null);
                }
            }
        }

        if (hitDetected) {
            ctx.save();
            ctx.shadowColor = 'rgba(255,0,0,0.9)';
            ctx.shadowBlur = 20;
            ctx.beginPath();
            const q0 = engine.getRenderPosition(playerStripePoly[0].x, playerStripePoly[0].y);
            ctx.moveTo(q0.x, q0.y);
            for (let i = 1; i < playerStripePoly.length; i++) {
                const q = engine.getRenderPosition(playerStripePoly[i].x, playerStripePoly[i].y);
                ctx.lineTo(q.x, q.y);
            }
            ctx.closePath();
            ctx.fillStyle = 'rgba(255,0,0,0.35)';
            ctx.fill();
            ctx.lineWidth = 4;
            ctx.strokeStyle = '#ff0000';
            ctx.stroke();
            ctx.restore();
        }

        ctx.restore();

        if (hitDetected && Date.now() - lastAttackTime >= ATTACK_COOLDOWN) {
            if (typeof skillStart === 'function') {
                lastAttackTime = Date.now();
                console.log('AutoAttack: ATTACK');
                skillStart();
            }
        }
    }

    function overlayLoop(){
        if(!game || !overlayCtx){return requestAnimationFrame(overlayLoop);}
        const rect = game.canvas.getBoundingClientRect();
        overlayCanvas.style.left = rect.left + 'px';
        overlayCanvas.style.top = rect.top + 'px';
        overlayCanvas.style.width = rect.width + 'px';
        overlayCanvas.style.height = rect.height + 'px';
        if(overlayCanvas.width !== game.canvas.width || overlayCanvas.height !== game.canvas.height){
            overlayCanvas.width = game.canvas.width;
            overlayCanvas.height = game.canvas.height;
        }
        overlayCtx.clearRect(0,0,overlayCanvas.width,overlayCanvas.height);
        if(!autoAttackEnabled || !game.me){return requestAnimationFrame(overlayLoop);}
        const player = game.me;
        const playerCollider = getColliderRect(player);
        const BAR_WIDTH = 45;
        const playerAngleRad = (player.moveDirection || 0) * Math.PI / 180;
        const side = (typeof player.direction === 'number' ? player.direction : (player.flySide || 1));

        const playerStripeRect = side >= 0
            ? { left: playerCollider.right, right: playerCollider.right + BAR_WIDTH, top: playerCollider.top, bottom: playerCollider.bottom }
            : { left: playerCollider.left - BAR_WIDTH, right: playerCollider.left, top: playerCollider.top, bottom: playerCollider.bottom };
        const playerPivot = { x: player.position.x + player.width/2, y: player.position.y + player.height/2 };
        const playerStripePoly = rotatePoly(rectToPoly(playerStripeRect), playerPivot, playerAngleRad);

        let anyHit = false;

        overlayCtx.save();

        for(const id in game.gameObjects){
            const obj = game.gameObjects[id];
            if(obj && targetEnemyNames.includes(obj.name)){
                const enemyCollider = getColliderRect(obj);

                const rp = game.getRenderPosition(enemyCollider.left, enemyCollider.bottom);
                const w = (enemyCollider.right - enemyCollider.left) * game.scaleX * game.zoom;
                const h = (enemyCollider.top - enemyCollider.bottom) * game.scaleY * game.zoom;
                overlayCtx.lineWidth = 2;
                overlayCtx.strokeStyle = '#07345a';
                overlayCtx.strokeRect(rp.x, rp.y - h, w, h);

                const barW = BAR_WIDTH;
                const pivot = { x: obj.position.x + obj.width / 2, y: obj.position.y + obj.height / 2 };
                const angleRad = (obj.rotation || 0) * Math.PI / 180;

                const leftBarRect = { left: enemyCollider.left - barW, right: enemyCollider.left, top: enemyCollider.top, bottom: enemyCollider.bottom };
                const rightBarRect = { left: enemyCollider.right, right: enemyCollider.right + barW, top: enemyCollider.top, bottom: enemyCollider.bottom };

                const leftBarPoly = rotatePoly(rectToPoly(leftBarRect), pivot, angleRad);
                const rightBarPoly = rotatePoly(rectToPoly(rightBarRect), pivot, angleRad);

                function drawOverlayPoly(poly, strokeColor, fillColor, alpha = 1) {
                    overlayCtx.save();
                    overlayCtx.globalAlpha = alpha;
                    overlayCtx.beginPath();
                    const p0 = game.getRenderPosition(poly[0].x, poly[0].y);
                    overlayCtx.moveTo(p0.x, p0.y);
                    for (let i = 1; i < poly.length; i++) {
                        const p = game.getRenderPosition(poly[i].x, poly[i].y);
                        overlayCtx.lineTo(p.x, p.y);
                    }
                    overlayCtx.closePath();
                    overlayCtx.lineWidth = 3;
                    if (fillColor) {
                        overlayCtx.fillStyle = fillColor;
                        overlayCtx.fill();
                    }
                    overlayCtx.strokeStyle = strokeColor;
                    overlayCtx.stroke();
                    overlayCtx.restore();
                }

                const playerLeftPoly = playerStripePoly;
                if (polygonsIntersect(playerLeftPoly, leftBarPoly)) {
                    anyHit = true;
                    drawOverlayPoly(leftBarPoly, '#ff0000', 'rgba(255,0,0,0.22)');
                } else {
                    drawOverlayPoly(leftBarPoly, '#ff0000', null, 0.85);
                }
                if (polygonsIntersect(playerLeftPoly, rightBarPoly)) {
                    anyHit = true;
                    drawOverlayPoly(rightBarPoly, '#ff0000', 'rgba(255,0,0,0.22)');
                } else {
                    drawOverlayPoly(rightBarPoly, '#ff0000', null, 0.85);
                }
            }
        }

        overlayCtx.lineWidth = 3;
        overlayCtx.strokeStyle = '#ff0000';
        if (anyHit) {
            overlayCtx.save();
            overlayCtx.shadowColor = 'rgba(255,0,0,0.9)';
            overlayCtx.shadowBlur = 20;
            overlayCtx.fillStyle = 'rgba(255,0,0,0.35)';
            overlayCtx.beginPath();
            const p0 = game.getRenderPosition(playerStripePoly[0].x, playerStripePoly[0].y);
            overlayCtx.moveTo(p0.x, p0.y);
            for (let i = 1; i < playerStripePoly.length; i++) {
                const p = game.getRenderPosition(playerStripePoly[i].x, playerStripePoly[i].y);
                overlayCtx.lineTo(p.x, p.y);
            }
            overlayCtx.closePath();
            overlayCtx.fill();
            overlayCtx.lineWidth = 4;
            overlayCtx.stroke();
            overlayCtx.restore();
        } else {
            overlayCtx.beginPath();
            const p0 = game.getRenderPosition(playerStripePoly[0].x, playerStripePoly[0].y);
            overlayCtx.moveTo(p0.x, p0.y);
            for (let i = 1; i < playerStripePoly.length; i++) {
                const p = game.getRenderPosition(playerStripePoly[i].x, playerStripePoly[i].y);
                overlayCtx.lineTo(p.x, p.y);
            }
            overlayCtx.closePath();
            overlayCtx.globalAlpha = 0.6;
            overlayCtx.stroke();
            overlayCtx.globalAlpha = 1;
        }

        const playerRp = game.getRenderPosition(playerCollider.left, playerCollider.bottom);
        const pw = (playerCollider.right - playerCollider.left) * game.scaleX * game.zoom;
        const ph = (playerCollider.top - playerCollider.bottom) * game.scaleY * game.zoom;
        overlayCtx.lineWidth = 3;
        overlayCtx.strokeStyle = '#00ff00';
        overlayCtx.strokeRect(playerRp.x, playerRp.y - ph, pw, ph);

        overlayCtx.restore();

        if(anyHit && Date.now() - lastAttackTime >= ATTACK_COOLDOWN){
            if(typeof skillStart === 'function'){
                lastAttackTime = Date.now();
                console.log('AutoAttack: ATTACK');
                skillStart();
            }
        }
        requestAnimationFrame(overlayLoop);
    }

    function setupOverlay(){
        overlayCanvas = document.createElement('canvas');
        overlayCanvas.style.position = 'absolute';
        overlayCanvas.style.left = '0';
        overlayCanvas.style.top = '0';
        overlayCanvas.style.pointerEvents = 'none';
        overlayCanvas.style.zIndex = '9999';
        document.body.appendChild(overlayCanvas);
        overlayCtx = overlayCanvas.getContext('2d');
    }

    const waitForGame = setInterval(()=>{
        if(window.game && window.game.getRenderPosition && window.game.drawCollider){
            game = window.game;
            setupOverlay();
            const proto = Object.getPrototypeOf(game);
            originalDrawObjectsProto = proto.drawObjects;
            proto.drawObjects = function() {
                originalDrawObjectsProto.apply(this, arguments);
                try {
                    performAutoAttackDraw(this);
                } catch(e) {}
            };
            requestAnimationFrame(overlayLoop);
            clearInterval(waitForGame);
        }
    },500);

})();
