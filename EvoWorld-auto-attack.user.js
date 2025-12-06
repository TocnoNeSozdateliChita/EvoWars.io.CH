// ==UserScript==
// @name         EvoWorld Auto Attack
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto attack for EvoWorld
// @author       You
// @match        https://evoworld.io/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // --- UI --- //
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

        // --- Main Logic --- //
    let autoAttackEnabled = false;
    let game = null;
    let originalDrawObjects = null;
    // overlay canvas for our drawings
    let overlayCanvas, overlayCtx;

    const targetEnemyNames = ['ghost', 'ghostlyReaper', 'grimReaper', 'pumpkinGhost'];

    autoAttackCheckbox.addEventListener('change', (e) => {
        autoAttackEnabled = e.target.checked;
    });

    function getColliderRect(obj) {
        return {
            left: obj.position.x + obj.width * obj.colliderRectangleOffset.left,
            right: obj.position.x + obj.width - obj.width * obj.colliderRectangleOffset.right,
            top: obj.position.y + obj.height - obj.height * obj.colliderRectangleOffset.top,
            bottom: obj.position.y + obj.height * obj.colliderRectangleOffset.bottom
        };
    }

    function checkCollision(rect1, rect2) {
        return rect1.left < rect2.right && rect1.right > rect2.left && rect1.bottom < rect2.top && rect1.top > rect2.bottom;
    }

    function customDrawObjects() {
        if (!game || !game.me || !originalDrawObjects) {
            return;
        }

        originalDrawObjects.apply(game, arguments);

        if (!autoAttackEnabled || !game.me) {
            return;
        }

        const ctx = game.dynamicContext || game.context;
        const player = game.me;

        // Define trigger zones
        const triggerZoneWidth = 100;
        const triggerZoneHeight = player.height;
        const leftTrigger = {
            left: player.position.x - triggerZoneWidth,
            right: player.position.x,
            top: player.position.y + triggerZoneHeight,
            bottom: player.position.y
        };
        const rightTrigger = {
            left: player.position.x + player.width,
            right: player.position.x + player.width + triggerZoneWidth,
            top: player.position.y + triggerZoneHeight,
            bottom: player.position.y
        };

        // Draw trigger zones for debugging
        ctx.save();
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = 'red';
        const pLeft = game.getRenderPosition(leftTrigger.left, leftTrigger.bottom);
        const zoneWidth = triggerZoneWidth * game.scaleX * game.zoom;
        const zoneHeight = triggerZoneHeight * game.scaleY * game.zoom;
        ctx.fillRect(pLeft.x, pLeft.y - zoneHeight, zoneWidth, zoneHeight);
        const pRight = game.getRenderPosition(rightTrigger.left, rightTrigger.bottom);
        ctx.fillRect(pRight.x, pRight.y - zoneHeight, zoneWidth, zoneHeight);
        ctx.restore();

        // Check for enemies
        let enemyDetected = false;
        for (const id in game.gameObjects) {
            const obj = game.gameObjects[id];
            if (obj && targetEnemyNames.includes(obj.name)) {
                const enemyCollider = getColliderRect(obj);
                // draw enemy hitbox in white
                const oldColor = obj.colliderColor;
                obj.colliderColor = 'white';
                game.drawCollider(obj);
                obj.colliderColor = oldColor;
                if (checkCollision(leftTrigger, enemyCollider) || checkCollision(rightTrigger, enemyCollider)) {
                    enemyDetected = true;
                    // we can break here, but continue drawing others
                }
            }
        }

        if (enemyDetected) {
            if (typeof skillStart === 'function') {
                skillStart();
            }
        }
    }

    function overlayLoop(){
        if(!game || !overlayCtx){return requestAnimationFrame(overlayLoop);}        
        // sync overlay position & size to game canvas bounding rect
        const rect=game.canvas.getBoundingClientRect();
        overlayCanvas.style.left=rect.left+'px';
        overlayCanvas.style.top=rect.top+'px';
        overlayCanvas.style.width=rect.width+'px';
        overlayCanvas.style.height=rect.height+'px';
        // internal resolution sync
        if(overlayCanvas.width!==game.canvas.width||overlayCanvas.height!==game.canvas.height){
            overlayCanvas.width=game.canvas.width;
            overlayCanvas.height=game.canvas.height;
        }
        overlayCtx.clearRect(0,0,overlayCanvas.width,overlayCanvas.height);
        if(!autoAttackEnabled||!game.me){return requestAnimationFrame(overlayLoop);}        
        const player=game.me;
        const triggerZoneWidth=player.width*0.8;
        const triggerZoneHeight=player.height;
        const leftTrigger={left:player.position.x-triggerZoneWidth,right:player.position.x,top:player.position.y+triggerZoneHeight,bottom:player.position.y};
        const rightTrigger={left:player.position.x+player.width,right:player.position.x+player.width+triggerZoneWidth,top:player.position.y+triggerZoneHeight,bottom:player.position.y};
        let leftHit=false, rightHit=false;
        // draw red trigger zones
        overlayCtx.save();
        overlayCtx.globalAlpha=0.3;
        overlayCtx.fillStyle='red';
        const zoneW=triggerZoneWidth*game.scaleX*game.zoom;
        const zoneH=triggerZoneHeight*game.scaleY*game.zoom;
        const pLeft=game.getRenderPosition(leftTrigger.left,leftTrigger.bottom);
        overlayCtx.fillRect(pLeft.x,pLeft.y-zoneH,zoneW,zoneH);
        const pRight=game.getRenderPosition(rightTrigger.left,rightTrigger.bottom);
        overlayCtx.fillRect(pRight.x,pRight.y-zoneH,zoneW,zoneH);
        overlayCtx.restore();
        // detect enemies and draw their hitboxes
        let enemyDetected=false;
        for(const id in game.gameObjects){
            const obj=game.gameObjects[id];
            if(obj&&targetEnemyNames.includes(obj.name)){
                const enemyCollider=getColliderRect(obj);
                // draw full sprite hitbox (slightly larger)
                const pSprite=game.getRenderPosition(obj.position.x,obj.position.y);
                let sW=obj.width*game.scaleX*game.zoom;
                let sH=obj.height*game.scaleY*game.zoom;
                let factor=1;
                if(obj.name==='ghostlyReaper'||obj.name==='pumpkinGhost') factor=0.8;
                else if(obj.name==='grimReaper') factor=0.93;
                const dx=sW*(1-factor)/2;
                const dy=sH*(1-factor)/2;
                sW*=factor;
                sH*=factor;
                overlayCtx.save();
                overlayCtx.globalAlpha=0.4;
                overlayCtx.strokeStyle='white';
                overlayCtx.strokeRect(pSprite.x+dx,pSprite.y-sH-dy,sW,sH);
                overlayCtx.restore();
                if(checkCollision(leftTrigger,enemyCollider)){leftHit=true; enemyDetected=true;}
                if(checkCollision(rightTrigger,enemyCollider)){rightHit=true; enemyDetected=true;}
            }
        }
        // draw triggers with bright opacity if hit
        overlayCtx.save();
        const zoneW2=triggerZoneWidth*game.scaleX*game.zoom;
        const zoneH2=triggerZoneHeight*game.scaleY*game.zoom;
        const pLeft2=game.getRenderPosition(leftTrigger.left,leftTrigger.bottom);
        const pRight2=game.getRenderPosition(rightTrigger.left,rightTrigger.bottom);
        overlayCtx.fillStyle='red';
        overlayCtx.globalAlpha=leftHit?0.6:0.3;
        overlayCtx.fillRect(pLeft2.x,pLeft2.y-zoneH2,zoneW2,zoneH2);
        overlayCtx.globalAlpha=rightHit?0.6:0.3;
        overlayCtx.fillRect(pRight2.x,pRight2.y-zoneH2,zoneW2,zoneH2);
        overlayCtx.restore();

        if(enemyDetected && typeof skillStart==='function') {
            console.log('[AutoAttack] skillStart()');
            skillStart();
        }
        requestAnimationFrame(overlayLoop);
    }
    function setupOverlay(){
        overlayCanvas=document.createElement('canvas');
        overlayCanvas.style.position='absolute';
        overlayCanvas.style.left='0';
        overlayCanvas.style.top='0';
        overlayCanvas.style.pointerEvents='none';
        overlayCanvas.style.zIndex='9999';
        document.body.appendChild(overlayCanvas);
        overlayCtx=overlayCanvas.getContext('2d');
    }
    const waitForGame=setInterval(()=>{
        if(window.game&&window.game.getRenderPosition){
            game=window.game;
            setupOverlay();
            requestAnimationFrame(overlayLoop);
            clearInterval(waitForGame);
        }
    },500);

})();
