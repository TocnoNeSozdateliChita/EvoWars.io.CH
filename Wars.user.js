// ==UserScript==
// @name         MoonBlast!
// @namespace    http://tampermonkey.net/
// @version      0.1.5
// @description  Auto attack for EvoWorld
// @author       You
// @match        https://evoworld.io/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Inject CSS for menu styling
    const styles = `
        @keyframes gradient-border {
            0% { border-color: red; }
            50% { border-color: yellow; }
            100% { border-color: red; }
        }
        .moonblast-menu {
            position: fixed;
            top: 10px;
            left: 10px;
            background-color: rgba(20, 20, 20, 0.85);
            color: white;
            border-radius: 8px;
            z-index: 10000;
            border: 2px solid red;
            animation: gradient-border 3s linear infinite;
            font-family: Arial, sans-serif;
            backdrop-filter: blur(5px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.5);
        }
        .moonblast-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 12px;
            background-color: rgba(0, 0, 0, 0.5);
            cursor: move;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
        }
        .moonblast-header h3 {
            margin: 0;
            font-size: 16px;
        }
        .moonblast-close-btn {
            background: transparent;
            border: none;
            color: white;
            font-size: 18px;
            cursor: pointer;
            padding: 0 5px;
            line-height: 1;
        }
        .moonblast-close-btn:hover {
            color: red;
        }
        .moonblast-body {
            padding: 12px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .moonblast-control {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .moonblast-control label {
            margin-right: 10px;
        }
        .moonblast-control input[type='checkbox'] {
            margin-right: 5px;
        }
        .moonblast-control input[type='number'] {
            width: 60px;
        }
        .moonblast-fps-group {
             display: flex; align-items: center; gap: 5px;
        }
        .moonblast-settings-btn{
             background: transparent;
             border: none;
             color: white;
             font-size: 14px;
             cursor: pointer;
             padding: 0 4px;
        }
        .moonblast-settings-btn:hover{
             color: #ffbc00;
        }
        .moonblast-submenu{
             margin-top:4px;
             display: flex;
             flex-direction: column;
             gap: 5px;
             margin-left: 25px;
             margin-top: 5px;
        }
        .moonblast-submenu button{
             background-color: rgba(50,50,50,0.8);
             border: 1px solid #444;
             color: white;
             padding: 4px 6px;
             border-radius: 4px;
             cursor: pointer;
             font-size: 12px;
        }
        .moonblast-menu.collapsed .moonblast-body{display:none;}
        .moonblast-menu.collapsed .moonblast-header{display:none;}
        .moonblast-submenu button.active{
             background-color: rgba(200,50,50,0.9);
        }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);


    // Create Menu Structure
    const menu = document.createElement('div');
    menu.className = 'moonblast-menu';

    const header = document.createElement('div');
    header.className = 'moonblast-header';
    
    // Tabs -------------------------------------------------------------
    const tabs = document.createElement('div');
    tabs.style.display = 'flex';
    tabs.style.gap = '6px';
    const mainTab = document.createElement('button');
    mainTab.textContent = 'Main';
    mainTab.className = 'moonblast-settings-btn';
    const visTab  = document.createElement('button');
    visTab.textContent  = 'Visuals';
    visTab.className = 'moonblast-settings-btn';
    tabs.appendChild(mainTab);
    tabs.appendChild(visTab);

    const title = document.createElement('h3');
    title.textContent = 'MoonBlast!';

    const expandBtn = document.createElement('button');
    expandBtn.className='moonblast-close-btn';
    expandBtn.innerHTML='&#x25A1;'; // square icon

    const closeBtn = document.createElement('button');
    closeBtn.className = 'moonblast-close-btn';
    closeBtn.innerHTML = '&times;'; // Use HTML entity for a better 'X'
    closeBtn.addEventListener('click', closeScript);

    const headerTop=document.createElement('div'); headerTop.style.display='flex'; headerTop.style.justifyContent='space-between'; headerTop.style.alignItems='center';
    headerTop.appendChild(title);
        const headerBtnBar=document.createElement('div');
    headerBtnBar.style.display='flex';
    headerBtnBar.style.gap='4px';
    headerBtnBar.appendChild(expandBtn);
    headerBtnBar.appendChild(closeBtn);
    headerTop.appendChild(headerBtnBar);
    header.appendChild(headerTop);
    header.appendChild(tabs);

    const body = document.createElement('div');
    body.className = 'moonblast-body';

    const mainSection   = document.createElement('div');
    mainSection.style.display = 'flex';
    mainSection.style.flexDirection='column';
    mainSection.style.gap='10px';

    const visualSection = document.createElement('div');
    visualSection.style.display='none';
    visualSection.style.flexDirection='column';
    visualSection.style.gap='10px';

    // -- Controls --
    // Auto Attack
    const aaControl = document.createElement('div');
    aaControl.className = 'moonblast-control';
    const autoAttackLabel = document.createElement('label');
    autoAttackLabel.htmlFor = 'autoAttack';
    autoAttackLabel.textContent = 'Auto Attack';
    const autoAttackCheckbox = document.createElement('input');
    autoAttackCheckbox.type = 'checkbox';
    autoAttackCheckbox.id = 'autoAttack';
    aaControl.appendChild(autoAttackLabel);
    aaControl.appendChild(autoAttackCheckbox);

    // HDR Graphics
    const hdrControl = document.createElement('div');
    hdrControl.className = 'moonblast-control';
    const hdrLabel = document.createElement('label');
    hdrLabel.htmlFor = 'hdrToggle';
    hdrLabel.textContent = 'Boost FPS';
    const hdrCheckbox = document.createElement('input');
    hdrCheckbox.type = 'checkbox';
    hdrCheckbox.id = 'hdrToggle';
    hdrControl.appendChild(hdrLabel);
    hdrControl.appendChild(hdrCheckbox);

    // Hitbox Control -------------------------------------------------------
    const hbControl = document.createElement('div');
    hbControl.className = 'moonblast-control';
    const hbLabel = document.createElement('label');
    hbLabel.htmlFor = 'hitboxToggle';
    hbLabel.textContent = 'Hitbox';
    const hbCheckbox = document.createElement('input');
    hbCheckbox.type = 'checkbox';
    hbCheckbox.id = 'hitboxToggle';
    const hbSettingsBtn = document.createElement('button');
    hbSettingsBtn.className = 'moonblast-settings-btn';
    hbSettingsBtn.textContent = '⚙';
    hbControl.appendChild(hbLabel);
    const hbRightGroup = document.createElement('div');
    hbRightGroup.style.display = 'flex';
    hbRightGroup.style.alignItems = 'center';
    hbRightGroup.style.gap = '4px';
    hbRightGroup.appendChild(hbCheckbox);
    hbRightGroup.appendChild(hbSettingsBtn);
    hbControl.appendChild(hbRightGroup);

    // Hitbox Submenu
    const hbSubmenu = document.createElement('div');
    hbSubmenu.className = 'moonblast-submenu';
    hbSubmenu.style.display = 'none';
    const hbModes = ['Scythe','Everyone','NPC','canEat','Only Enemy'];
    const hbModeButtons = {};
    hbModes.forEach(text=>{
        const btn = document.createElement('button');
        btn.textContent = text;
        const key = (text==='Only Enemy') ? 'enemy' : (text==='NPC'?'npc': (text==='canEat'?'caneat': text.toLowerCase()));
        hbModeButtons[key] = btn;
        hbSubmenu.appendChild(btn);
    });

    // Unlock FPS
    const fpsControl = document.createElement('div');
    fpsControl.className = 'moonblast-control';
    const fpsLabel = document.createElement('label');
    fpsLabel.textContent = 'Unlock FPS';
    const fpsGroup = document.createElement('div');
    fpsGroup.className = 'moonblast-fps-group';
    const fpsInput = document.createElement('input');
    fpsInput.type = 'number';
    fpsInput.min = '30';
    fpsInput.value = '144';
    const fpsBtn = document.createElement('button');
    fpsBtn.textContent = 'Set';
    fpsGroup.appendChild(fpsInput);
    fpsGroup.appendChild(fpsBtn);
    fpsControl.appendChild(fpsLabel);
    fpsControl.appendChild(fpsGroup);

    mainSection.appendChild(aaControl);
    mainSection.appendChild(fpsControl);

    visualSection.appendChild(hdrControl);
    visualSection.appendChild(hbControl);
    visualSection.appendChild(hbSubmenu);

    // -- Visual customizations --------------------------------------
    const lvlControl=document.createElement('div'); lvlControl.className='moonblast-control';
    const lvlLabel=document.createElement('label'); lvlLabel.textContent='Change LVL';
    const lvlInput=document.createElement('input'); lvlInput.type='number'; lvlInput.value='1'; lvlInput.min='1';
    lvlControl.appendChild(lvlLabel); lvlControl.appendChild(lvlInput);

    const nickControl=document.createElement('div'); nickControl.className='moonblast-control';
    const nickLabel=document.createElement('label'); nickLabel.textContent='Change Nickname';
    const nickInput=document.createElement('input'); nickInput.type='text'; nickInput.placeholder='nickname';
    nickControl.appendChild(nickLabel); nickControl.appendChild(nickInput);

    const premControl=document.createElement('div'); premControl.className='moonblast-control';
    const premLabel=document.createElement('label'); premLabel.textContent='Premium';
    const premCheckbox=document.createElement('input'); premCheckbox.type='checkbox';
    premControl.appendChild(premLabel); premControl.appendChild(premCheckbox);

    visualSection.appendChild(lvlControl);
    visualSection.appendChild(nickControl);
    visualSection.appendChild(premControl);

    // Cloud toggle
    const cloudControl=document.createElement('div'); cloudControl.className='moonblast-control';
    const cloudLabel=document.createElement('label'); cloudLabel.textContent='Clouds';
    const cloudCheckbox=document.createElement('input'); cloudCheckbox.type='checkbox'; cloudCheckbox.checked=false;
    cloudControl.appendChild(cloudLabel); cloudControl.appendChild(cloudCheckbox);
    visualSection.appendChild(cloudControl);

    // Brushes toggle
    const bushControl=document.createElement('div'); bushControl.className='moonblast-control';
    const bushLabel=document.createElement('label'); bushLabel.textContent='Brushes';
    const bushCheckbox=document.createElement('input'); bushCheckbox.type='checkbox'; bushCheckbox.checked=false;
    bushControl.appendChild(bushLabel); bushControl.appendChild(bushCheckbox);
    visualSection.appendChild(bushControl);

    // Hitbox color picker
    const colorControl=document.createElement('div'); colorControl.className='moonblast-control';
    const colorLabel=document.createElement('label'); colorLabel.textContent='HB Color';
    const colorInput=document.createElement('input'); colorInput.type='color'; colorInput.value='#00ffff';
    colorControl.appendChild(colorLabel); colorControl.appendChild(colorInput);
    visualSection.appendChild(colorControl);

    // apply visuals changes
    function applyVisuals(){
        if(!game||!game.me) return;
        const me=game.me;
        const lvl=parseInt(lvlInput.value,10); if(lvl) me.level=lvl;
        if(nickInput.value) me.nick=nickInput.value;
        me.premium=premCheckbox.checked;
    }
    [lvlInput,nickInput,premCheckbox].forEach(el=>el.addEventListener('input',applyVisuals));

    // cloud / bush vars
    let cloudsHidden=false, bushesHidden=false;
    cloudCheckbox.addEventListener('change',e=>{cloudsHidden=e.target.checked;});
    bushCheckbox.addEventListener('change',e=>{bushesHidden=e.target.checked;});

    body.appendChild(mainSection);
    body.appendChild(visualSection);

    menu.appendChild(header);
    menu.appendChild(body);

    function activateTab(which){
        if(which==='main'){
            mainSection.style.display='flex';
            visualSection.style.display='none';
            mainTab.classList.add('active');
            visTab.classList.remove('active');
        }else{
            mainSection.style.display='none';
            visualSection.style.display='flex';
            mainTab.classList.remove('active');
            visTab.classList.add('active');
        }
    }
    mainTab.addEventListener('click',()=>activateTab('main'));
    visTab.addEventListener('click',()=>activateTab('visual'));
    activateTab('main');
    document.body.appendChild(menu);

    // Collapse/expand logic --------------------------------------------
    function setCollapsed(col){
        menu.classList.toggle('collapsed',col);
    }
    expandBtn.addEventListener('click',()=>setCollapsed(!menu.classList.contains('collapsed')));
    document.addEventListener('keydown',e=>{if(e.key.toLowerCase()==='k') setCollapsed(!menu.classList.contains('collapsed'));});


    let autoAttackEnabled = false;
    let lastAttackTime = 0;
    const ATTACK_COOLDOWN = 50;
    let game = null;
    let originalDrawObjectsProto = null;
    let overlayCanvas, overlayCtx;
    // Scythe hitbox definitions for specific enemies
    const scytheHitboxes = {
        ghostlyReaper: { left: 32, top: 16.5, width: 43, height: 98.5 },
        pumpkinGhost:  { left: 43, top: 68,   width: 62, height: 150   },
        grimReaper:    { left: 42, top: 63,   width: 52, height: 141   },
    };
    let scriptClosed = false;
    let lastAALoop = 0;

// Hitbox feature toggles
let hitboxEnabled = false; // main toggle via checkbox
let hitboxMode = 'scythe'; // scythe | everyone | enemy

    // Drag to move logic
    let isDragging = false;
    let offsetX, offsetY;

    header.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - menu.getBoundingClientRect().left;
        offsetY = e.clientY - menu.getBoundingClientRect().top;
        menu.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        menu.style.left = `${e.clientX - offsetX}px`;
        menu.style.top = `${e.clientY - offsetY}px`;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        menu.style.cursor = 'default';
    });

    const targetEnemyNames = ['ghost', 'ghostlyReaper', 'grimReaper', 'pumpkinGhost'];

    autoAttackCheckbox.addEventListener('change', (e) => {
        autoAttackEnabled = e.target.checked;
    });

    let hdrEnabled = false;
    hdrCheckbox.addEventListener('change', (e)=>{
        hdrEnabled = e.target.checked;
        applyHdrGraphics(hdrEnabled);
    });

    fpsBtn.addEventListener('click', updateFpsLimit);

    // Hitbox listeners ------------------------------------------------------
    hbCheckbox.addEventListener('change', (e)=>{
        hitboxEnabled = e.target.checked;
});
    hbSettingsBtn.addEventListener('click', ()=>{
        hbSubmenu.style.display = (hbSubmenu.style.display==='none'?'flex':'none');
    });
    Object.entries(hbModeButtons).forEach(([mode,btn])=>{
        btn.addEventListener('click', ()=>{
            hitboxMode = mode; // scythe | everyone | npc | caneat | enemy
            // highlight active
            Object.entries(hbModeButtons).forEach(([m,b])=>b.classList.toggle('active', m===mode));
        });
    });

    function closeScript() {
        scriptClosed = true;
        autoAttackEnabled = false;
        if (game && originalDrawObjectsProto) {
            const proto = Object.getPrototypeOf(game);
            if (proto && originalDrawObjectsProto) {
                proto.drawObjects = originalDrawObjectsProto;
            }
        }
        if (overlayCanvas && overlayCanvas.parentNode) {
            overlayCanvas.parentNode.removeChild(overlayCanvas);
        }
        if (menu && menu.parentNode) {
            menu.parentNode.removeChild(menu);
        }
    }


    function applyHdrGraphics(on){
        // This will now be used to hide non-essential objects for an FPS boost
        // The actual logic will be in the rendering loop.
    }

    function updateFpsLimit(){
        const val = parseInt(fpsInput.value, 10) || 0;
        if(!game || !val) return;
        if(typeof window.gameLoopOPS === 'number') window.gameLoopOPS = val;
        if(typeof game.setMaxFPS === 'function') {
            game.setMaxFPS(val);
        } else if ('maxFPS' in game) {
            game.maxFPS = val;
        } else if ('targetFPS' in game) {
            game.targetFPS = val;
        }
    }

    // Periodically ensure FPS limit/unlock is applied
    setInterval(updateFpsLimit, 2000);
    
    // --------------------------------------

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
        if (Date.now() - lastAALoop < 30) return;
        lastAALoop = Date.now();

        const ctx = engine.dynamicContext || engine.context;
        const player = engine.me;
        const playerCollider = getColliderRect(player);

        const BAR_WIDTH = 100;
        // Rotate towards nearest target enemy
        let nearestTarget = null;
        let minDist = Infinity;
        for(const id in engine.gameObjects){
            const obj = engine.gameObjects[id];
            if(!obj) continue;
            if(!obj.position) continue;
            if(!targetEnemyNames.includes(obj.name)) continue;
            const dx = obj.position.x - player.position.x;
            const dist = Math.abs(dx);
            if(dist < minDist){ minDist = dist; nearestTarget = obj; }
        }
        if(nearestTarget){
            const desired = (nearestTarget.position.x > player.position.x) ? 1 : -1;
            if(desired !== (player.flySide ?? player.direction ?? 1)){
                player.flySide = desired;
                player.direction = desired;
                player.moveDirection = desired===1?0:180;
                        if(typeof gameServer !== 'undefined' && gameServer.emit && typeof socketMsgType !== 'undefined'){
                            try { gameServer.emit(socketMsgType.FLY, desired); } catch(e) {}
                        }
            }
        }

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
        const playerOppositeStripeRect = side >= 0
            ? { left: playerCollider.left - BAR_WIDTH, right: playerCollider.left, top: playerCollider.top, bottom: playerCollider.bottom }
            : { left: playerCollider.right, right: playerCollider.right + BAR_WIDTH, top: playerCollider.top, bottom: playerCollider.bottom };
        const playerOppositeStripePoly = rotatePoly(rectToPoly(playerOppositeStripeRect), playerPivot, playerAngleRad);

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

        if(hitboxEnabled && hitboxMode==='scythe'){
        engineDrawPoly(playerStripePoly, '#ff0000', null);
        engineDrawPoly(playerOppositeStripePoly, '#ff0000', null);
}

        let hitDetected = false;

        for (const id in engine.gameObjects) {
            const obj = engine.gameObjects[id];
            if (obj === player) continue;
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

                let enemyBarPoly;
                if (scytheHitboxes[obj.name]){
                    const hb = scytheHitboxes[obj.name];
                    const dir = (obj.flySide ?? 1);
                    const hbRect = dir>=0 ?
                        { left: enemyPivot.x + hb.left, right: enemyPivot.x + hb.left + hb.width, top: obj.position.y + hb.top, bottom: obj.position.y + hb.top + hb.height } :
                        { left: enemyPivot.x - hb.left - hb.width, right: enemyPivot.x - hb.left, top: obj.position.y + hb.top, bottom: obj.position.y + hb.top + hb.height };
                    enemyBarPoly = rectToPoly(hbRect);
                } else {
                    const leftBarRect = { left: enemyCollider.left - barW, right: enemyCollider.left, top: enemyCollider.top, bottom: enemyCollider.bottom };
                    const rightBarRect = { left: enemyCollider.right, right: enemyCollider.right + barW, top: enemyCollider.top, bottom: enemyCollider.bottom };

                    const leftBarPoly = rotatePoly(rectToPoly(leftBarRect), enemyPivot, angleRad);
                    const rightBarPoly = rotatePoly(rectToPoly(rightBarRect), enemyPivot, angleRad);
                    enemyBarPoly = ((obj.flySide ?? 1) >= 0) ? rightBarPoly : leftBarPoly;
                }

                const collided = polygonsIntersect(playerStripePoly, enemyBarPoly) || polygonsIntersect(playerOppositeStripePoly, enemyBarPoly);
                if(collided){
                    hitDetected = true;
                    engineDrawPoly(enemyBarPoly, '#ff0000', 'rgba(255,0,0,0.22)');
                    // Auto-rotation logic: always face the enemy
                    if (player.position.x < obj.position.x) { // if enemy is to the right
                        player.direction = 1;
                        player.flySide = 1;
                        player.moveDirection = 0;
                    } else { // if enemy is to the left
                        player.direction = -1;
                        player.flySide = -1;
                        player.moveDirection = 180;
                    }
                } else {
                    engineDrawPoly(enemyBarPoly, '#ff0000', null);
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
        if(scriptClosed) return;
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
        if(!hitboxEnabled && !autoAttackEnabled){return requestAnimationFrame(overlayLoop);}
        if(!game.me){return requestAnimationFrame(overlayLoop);} 
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
        const playerOppositeStripeRect = side >= 0
            ? { left: playerCollider.left - BAR_WIDTH, right: playerCollider.left, top: playerCollider.top, bottom: playerCollider.bottom }
            : { left: playerCollider.right, right: playerCollider.right + BAR_WIDTH, top: playerCollider.top, bottom: playerCollider.bottom };
        const playerOppositeStripePoly = rotatePoly(rectToPoly(playerOppositeStripeRect), playerPivot, playerAngleRad);

        let anyHit = false;
        let frameHit=false;
        const getHBColor=()=>colorInput?colorInput.value:'#00ffff';

        overlayCtx.save();

        for(const id in game.gameObjects){
            const obj = game.gameObjects[id];
            if(!obj || !obj.position) continue;

            if(hdrEnabled && obj.type !== 'player' && obj !== player){
                // FPS boost: skip rendering non-player objects if enabled
                continue;
            }

            // Draw generic collider rectangles depending on mode
            if(hitboxEnabled){
                let drawRect = false;
                switch(hitboxMode){
                    case 'everyone':
                        drawRect = true;
                        break;
                    case 'npc':
                        drawRect = obj.hasSoul;
                        break;
                    case 'caneat':
                        const iEat = (typeof checkFoodChain==='function' && checkFoodChain(player, obj)?.check===1);
                        drawRect = iEat;
                        break;
                    case 'enemy':
                        const eatsMe = (typeof checkFoodChain==='function' && checkFoodChain(obj, player)?.check===-1);
                        drawRect = eatsMe || (obj.type==='player' && obj!==player);
                        break;
                }
                // Always draw player's collider
                if(obj===player) drawRect=true;
                if(drawRect){
                    const col = getColliderRect(obj);
                    const rp  = game.getRenderPosition(col.left, col.bottom);
                    const w   = (col.right - col.left) * game.scaleX * game.zoom;
                    const h   = (col.top   - col.bottom) * game.scaleY * game.zoom;
                    overlayCtx.lineWidth = 2;
                    overlayCtx.strokeStyle = getHBColor();
                    overlayCtx.strokeRect(rp.x, rp.y - h, w, h);
                }
            }

            // Existing scythe / enemy wall logic
            if(obj && targetEnemyNames.includes(obj.name) && (hitboxMode !== 'scythe' || scytheHitboxes[obj.name])){
                const enemyCollider = getColliderRect(obj);

                if(hitboxEnabled && hitboxMode!=='scythe'){
                    const rp = game.getRenderPosition(enemyCollider.left, enemyCollider.bottom);
                    const w = (enemyCollider.right - enemyCollider.left) * game.scaleX * game.zoom;
                    const h = (enemyCollider.top - enemyCollider.bottom) * game.scaleY * game.zoom;
                    overlayCtx.lineWidth = 2;
                    overlayCtx.strokeStyle = '#07345a';
                    overlayCtx.strokeRect(rp.x, rp.y - h, w, h);
                }

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

                const enemyBarPoly = ((obj.flySide ?? 1) >= 0) ? rightBarPoly : leftBarPoly;

                const hit = polygonsIntersect(playerStripePoly, enemyBarPoly) || polygonsIntersect(playerOppositeStripePoly, enemyBarPoly);

                if (hit) {
                    anyHit = true;
                    frameHit=true;
                    drawOverlayPoly(enemyBarPoly, '#ff0000', 'rgba(255,0,0,0.22)');
                } else {
                    drawOverlayPoly(enemyBarPoly, '#ff0000', null, 0.85);
                }
            }
        }

        overlayCtx.lineWidth = 3;
        overlayCtx.strokeStyle = '#ff0000';
        if (hitboxEnabled && anyHit) {
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
        } else if(hitboxEnabled && hitboxMode==='scythe') {
            // Draw both player walls when not hitting
            overlayCtx.globalAlpha = 0.6;
            function drawPlayerWall(poly) {
                overlayCtx.beginPath();
                const p0 = game.getRenderPosition(poly[0].x, poly[0].y);
                overlayCtx.moveTo(p0.x, p0.y);
                for (let i = 1; i < poly.length; i++) {
                    const p = game.getRenderPosition(poly[i].x, poly[i].y);
                    overlayCtx.lineTo(p.x, p.y);
                }
                overlayCtx.closePath();
                overlayCtx.stroke();
            }
            drawPlayerWall(playerStripePoly);
            drawPlayerWall(playerOppositeStripePoly);
            overlayCtx.globalAlpha = 1;
        }

        const playerRp = game.getRenderPosition(playerCollider.left, playerCollider.bottom);
        const pw = (playerCollider.right - playerCollider.left) * game.scaleX * game.zoom;
        const ph = (playerCollider.top - playerCollider.bottom) * game.scaleY * game.zoom;
        if(hitboxEnabled && hitboxMode==='everyone'){
        overlayCtx.lineWidth = 3;
        overlayCtx.strokeStyle = '#00ff00';
        overlayCtx.strokeRect(playerRp.x, playerRp.y - ph, pw, ph);
}

        overlayCtx.restore();

        if(frameHit && Date.now() - lastAttackTime >= ATTACK_COOLDOWN){
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
                // Persistently apply FPS limit
                updateFpsLimit();

                const filterDecor = (obj)=>{
                    if(!obj||!obj.name) return true;
                    const n = String(obj.name);
                    if(cloudsHidden && n.includes('cloud')) return false;
                    if(bushesHidden && n.includes('bush')) return false;
                    return true;
                };
                if (hdrEnabled) {
                    const newArgs = [...arguments];
                    const originalObjects = newArgs[0];
                    newArgs[0] = originalObjects.filter(obj =>
                        filterDecor(obj) && (obj.isPlayer || obj.isMyPlayer || obj.type === 'player' || (targetEnemyNames.includes(obj.name) && obj.id !== this.me.id))
                    );
                    originalDrawObjectsProto.apply(this, newArgs);
                } else {
                    if(cloudsHidden || bushesHidden){
                        const newAll=[...arguments];
                        const origObjs=newAll[0];
                        newAll[0]=origObjs.filter(filterDecor);
                        originalDrawObjectsProto.apply(this,newAll);
                    }else {
                        originalDrawObjectsProto.apply(this, arguments);
                    }
                }

                try {
                    if(!scriptClosed) performAutoAttackDraw(this);
                } catch(e) {}
            };
            requestAnimationFrame(overlayLoop);
            clearInterval(waitForGame);
        }
    },500);

})();
