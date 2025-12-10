// @name         EvoWorld Cheat Menu
// @namespace    http://tampermonkey.net/
// @version      0.3.0
// @description  Cheat menu for EvoWorld with Auto Attack, HitBox Colors, FPS Unlock, Anti-Lag
// @author       TocnoNeSozdateliChita
// @match        https://evoworld.io/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // ==================== CONSTANTS ====================
    const STORAGE_KEY = 'evoworld_cheat_menu_settings';

    const DEFAULT_SETTINGS = {
        menu: {
            position: { x: 10, y: 10 },
            visible: true,
            activeTab: 'aim'
        },
        hitbox: {
            enabled: false,
            playerColor: '#00ff00',
            enemyColor: '#ff0000'
        },
        fps: {
            enabled: false,
            targetFPS: 144
        },
        antiLag: {
            enabled: false,
            disableTextEffects: true,
            reduceQuality: true,
            limitObjects: false
        },
        esp: {
            enabled: false,
            lineColor: '#ff00ff'
        },
        iceParticles: {
            enabled: true
        },
        autoAttack: {
            showHitbox: true,
            enableTurns: false
        },
        zoom: {
            enabled: false,
            level: 1.0
        },
        nightVision: {
            enabled: false
        },
        fakeProfile: {
            enabled: false,
            nickname: '',
            level: ''
        },
        keybinds: {
            toggleMenu: 'Insert',
            toggleAutoAttack: 'KeyX',
            toggleHitbox: '',
            toggleESP: '',
            toggleFPS: '',
            toggleAntiLag: '',
            toggleIceParticles: ''
        }
    };

    // ==================== UTILITY FUNCTIONS ====================

    function safeLocalStorageGet(key, defaultValue) {
        try {
            const value = localStorage.getItem(key);
            if (value === null) return defaultValue;
            return JSON.parse(value);
        } catch (e) {
            console.warn(`[CheatMenu] Failed to read ${key}:`, e);
            return defaultValue;
        }
    }

    function safeLocalStorageSet(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (e) {
            console.error(`[CheatMenu] Failed to save ${key}:`, e);
            return false;
        }
    }

    // ==================== VALIDATION FUNCTIONS ====================

    function isValidHexColor(color) {
        return /^#[0-9A-Fa-f]{6}$/.test(color);
    }

    function sanitizeColor(color, defaultColor = '#ffffff') {
        return isValidHexColor(color) ? color : defaultColor;
    }

    function validateFPSTarget(fps) {
        const MIN_FPS = 30;
        const MAX_FPS = 300;
        const numFps = parseInt(fps, 10);
        if (isNaN(numFps)) return 60;
        return Math.max(MIN_FPS, Math.min(MAX_FPS, numFps));
    }

    function deepMerge(target, source) {
        const result = { ...target };
        for (const key in source) {
            if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                result[key] = deepMerge(target[key] || {}, source[key]);
            } else {
                result[key] = source[key];
            }
        }
        return result;
    }

    function validateSettings(settings) {
        if (!settings || typeof settings !== 'object') {
            return JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
        }
        const validated = deepMerge(DEFAULT_SETTINGS, settings);
        if (validated.hitbox) {
            validated.hitbox.playerColor = sanitizeColor(validated.hitbox.playerColor, DEFAULT_SETTINGS.hitbox.playerColor);
            validated.hitbox.enemyColor = sanitizeColor(validated.hitbox.enemyColor, DEFAULT_SETTINGS.hitbox.enemyColor);
        }
        if (validated.fps) {
            validated.fps.targetFPS = validateFPSTarget(validated.fps.targetFPS);
        }
        if (validated.menu && validated.menu.position) {
            validated.menu.position.x = typeof validated.menu.position.x === 'number' ? validated.menu.position.x : DEFAULT_SETTINGS.menu.position.x;
            validated.menu.position.y = typeof validated.menu.position.y === 'number' ? validated.menu.position.y : DEFAULT_SETTINGS.menu.position.y;
        }
        return validated;
    }

    // ==================== SETTINGS MANAGER ====================

    const SettingsManager = {
        _settings: null,

        load() {
            const stored = safeLocalStorageGet(STORAGE_KEY, null);
            if (stored === null) {
                this._settings = JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
            } else {
                this._settings = validateSettings(stored);
            }
            return this._settings;
        },

        save() {
            if (!this._settings) {
                this._settings = JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
            }
            return safeLocalStorageSet(STORAGE_KEY, this._settings);
        },

        get(key) {
            if (!this._settings) this.load();
            if (!key) return this._settings;
            const keys = key.split('.');
            let value = this._settings;
            for (const k of keys) {
                if (value && typeof value === 'object' && k in value) {
                    value = value[k];
                } else {
                    return undefined;
                }
            }
            return value;
        },

        set(key, value) {
            if (!this._settings) this.load();
            if (!key) return false;
            const keys = key.split('.');
            let target = this._settings;
            for (let i = 0; i < keys.length - 1; i++) {
                const k = keys[i];
                if (!(k in target) || typeof target[k] !== 'object') {
                    target[k] = {};
                }
                target = target[k];
            }
            target[keys[keys.length - 1]] = value;
            return this.save();
        },

        reset() {
            this._settings = JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
            return this.save();
        }
    };

    // ==================== ICE PARTICLES SYSTEM ====================

    const IceParticlesModule = {
        enabled: true,
        particles: [],
        canvas: null,
        ctx: null,
        animationId: null,

        init() {
            this.canvas = document.createElement('canvas');
            this.canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9998;';
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            document.body.appendChild(this.canvas);
            this.ctx = this.canvas.getContext('2d');

            window.addEventListener('resize', () => {
                this.canvas.width = window.innerWidth;
                this.canvas.height = window.innerHeight;
            });

            const settings = SettingsManager.get('iceParticles');
            this.enabled = settings ? settings.enabled !== false : true;

            if (this.enabled) {
                this.start();
            }
        },

        createParticle() {
            const shapes = ['diamond', 'triangle', 'star', 'hexagon'];
            return {
                x: Math.random() * this.canvas.width,
                y: -10,
                size: Math.random() * 6 + 3,
                speedY: Math.random() * 1.5 + 0.5,
                speedX: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.6 + 0.3,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.05,
                shape: shapes[Math.floor(Math.random() * shapes.length)]
            };
        },

        drawParticle(p) {
            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate(p.rotation);
            this.ctx.globalAlpha = p.opacity;
            this.ctx.fillStyle = '#ffffff';
            this.ctx.strokeStyle = 'rgba(200, 220, 255, 0.8)';
            this.ctx.lineWidth = 1;

            const s = p.size;
            this.ctx.beginPath();

            switch (p.shape) {
                case 'diamond':
                    this.ctx.moveTo(0, -s);
                    this.ctx.lineTo(s * 0.6, 0);
                    this.ctx.lineTo(0, s);
                    this.ctx.lineTo(-s * 0.6, 0);
                    break;
                case 'triangle':
                    this.ctx.moveTo(0, -s);
                    this.ctx.lineTo(s * 0.866, s * 0.5);
                    this.ctx.lineTo(-s * 0.866, s * 0.5);
                    break;
                case 'star':
                    for (let i = 0; i < 5; i++) {
                        const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
                        const x = Math.cos(angle) * s;
                        const y = Math.sin(angle) * s;
                        i === 0 ? this.ctx.moveTo(x, y) : this.ctx.lineTo(x, y);
                    }
                    break;
                case 'hexagon':
                    for (let i = 0; i < 6; i++) {
                        const angle = (i * Math.PI) / 3;
                        const x = Math.cos(angle) * s;
                        const y = Math.sin(angle) * s;
                        i === 0 ? this.ctx.moveTo(x, y) : this.ctx.lineTo(x, y);
                    }
                    break;
            }

            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.stroke();
            this.ctx.restore();
        },

        update() {
            if (!this.enabled) {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                return;
            }

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            // Add new particles
            if (this.particles.length < 50 && Math.random() < 0.3) {
                this.particles.push(this.createParticle());
            }

            // Update and draw particles
            for (let i = this.particles.length - 1; i >= 0; i--) {
                const p = this.particles[i];
                p.y += p.speedY;
                p.x += p.speedX;
                p.rotation += p.rotationSpeed;

                if (p.y > this.canvas.height + 10) {
                    this.particles.splice(i, 1);
                } else {
                    this.drawParticle(p);
                }
            }

            this.animationId = requestAnimationFrame(() => this.update());
        },

        start() {
            this.enabled = true;
            SettingsManager.set('iceParticles.enabled', true);
            // FIX: Always restart animation loop
            if (this.animationId) {
                cancelAnimationFrame(this.animationId);
            }
            this.update();
        },

        stop() {
            this.enabled = false;
            SettingsManager.set('iceParticles.enabled', false);
            this.particles = [];
            // FIX: Cancel animation and reset ID
            if (this.animationId) {
                cancelAnimationFrame(this.animationId);
                this.animationId = null;
            }
            if (this.ctx) {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }
        },

        toggle() {
            this.enabled ? this.stop() : this.start();
        }
    };

    // ==================== FEATURE MODULES ====================

    const HitboxColorModule = {
        enabled: false,
        playerColor: '#00ff00',
        enemyColor: '#ff0000',
        originalDrawColliders: false,

        enable() {
            this.enabled = true;
            // Don't use game.drawColliders - it draws ALL hitboxes
            // We'll draw only player/NPC hitboxes manually in overlay
            SettingsManager.set('hitbox.enabled', true);
        },

        disable() {
            this.enabled = false;
            SettingsManager.set('hitbox.enabled', false);
        },

        toggle() {
            this.enabled ? this.disable() : this.enable();
            return this.enabled;
        },

        setPlayerColor(color) {
            if (isValidHexColor(color)) {
                this.playerColor = color;
                SettingsManager.set('hitbox.playerColor', color);
            }
        },

        setEnemyColor(color) {
            if (isValidHexColor(color)) {
                this.enemyColor = color;
                SettingsManager.set('hitbox.enemyColor', color);
            }
        },

        // Draw hitboxes only for players and NPCs (type 1 = PLAYER)
        drawCustomHitboxes(ctx, gameRef) {
            if (!this.enabled || !gameRef || !gameRef.me) return;

            const player = gameRef.me;

            for (const id in gameRef.gameObjects) {
                const obj = gameRef.gameObjects[id];
                if (!obj || obj.deleted || !obj.colliderRectangleOffset) continue;

                // Only draw for players (type 1) and food/NPCs with souls
                const isPlayer = obj.type === 1;
                const isNPC = obj.type === 3 && obj.hasSoul; // FOOD with soul

                if (isPlayer || isNPC) {
                    const collider = {
                        left: obj.position.x + obj.width * obj.colliderRectangleOffset.left,
                        right: obj.position.x + obj.width - obj.width * obj.colliderRectangleOffset.right,
                        top: obj.position.y + obj.height - obj.height * obj.colliderRectangleOffset.top,
                        bottom: obj.position.y + obj.height * obj.colliderRectangleOffset.bottom
                    };

                    const rp = gameRef.getRenderPosition(collider.left, collider.bottom);
                    const w = (collider.right - collider.left) * gameRef.scaleX * gameRef.zoom;
                    const h = (collider.top - collider.bottom) * gameRef.scaleY * gameRef.zoom;

                    ctx.lineWidth = 2;
                    ctx.strokeStyle = (obj === player) ? this.playerColor : this.enemyColor;
                    ctx.strokeRect(rp.x, rp.y - h, w, h);
                }
            }
        },

        applySettings(settings) {
            if (settings) {
                this.enabled = settings.enabled || false;
                this.playerColor = settings.playerColor || '#00ff00';
                this.enemyColor = settings.enemyColor || '#ff0000';
            }
        }
    };

    const ESPModule = {
        enabled: false,
        lineColor: '#ff00ff',

        enable() {
            this.enabled = true;
            SettingsManager.set('esp.enabled', true);
        },

        disable() {
            this.enabled = false;
            SettingsManager.set('esp.enabled', false);
        },

        toggle() {
            this.enabled ? this.disable() : this.enable();
            return this.enabled;
        },

        setLineColor(color) {
            if (isValidHexColor(color)) {
                this.lineColor = color;
                SettingsManager.set('esp.lineColor', color);
            }
        },

        applySettings(settings) {
            if (settings) {
                this.enabled = settings.enabled || false;
                this.lineColor = settings.lineColor || '#ff00ff';
            }
        }
    };

    const FPSUnlockModule = {
        enabled: false,
        targetFPS: 144,
        originalGameLoopOPS: null,
        fpsInterval: null,

        enable() {
            if (this.originalGameLoopOPS === null && window.gameLoopOPS !== undefined) {
                this.originalGameLoopOPS = window.gameLoopOPS;
            }
            
            // Force set FPS values
            this.forceSetFPS(this.targetFPS);
            
            // Keep forcing FPS every 100ms to override any game resets
            if (this.fpsInterval) clearInterval(this.fpsInterval);
            this.fpsInterval = setInterval(() => {
                if (this.enabled) {
                    this.forceSetFPS(this.targetFPS);
                }
            }, 100);
            
            this.enabled = true;
            SettingsManager.set('fps.enabled', true);
        },

        forceSetFPS(fps) {
            window.gameLoopOPS = fps;
            if (window.game) {
                window.game.gameLoopOPS = fps;
                // Try to modify game loop timing directly
                if (window.game.gameLoopInterval) {
                    window.game.gameLoopInterval = 1000 / fps;
                }
            }
        },

        disable() {
            if (this.fpsInterval) {
                clearInterval(this.fpsInterval);
                this.fpsInterval = null;
            }
            if (this.originalGameLoopOPS !== null) {
                window.gameLoopOPS = this.originalGameLoopOPS;
                if (window.game) {
                    window.game.gameLoopOPS = this.originalGameLoopOPS;
                }
            }
            this.enabled = false;
            SettingsManager.set('fps.enabled', false);
        },

        toggle() {
            this.enabled ? this.disable() : this.enable();
            return this.enabled;
        },

        setTargetFPS(fps) {
            this.targetFPS = validateFPSTarget(fps);
            SettingsManager.set('fps.targetFPS', this.targetFPS);
            if (this.enabled) {
                window.gameLoopOPS = this.targetFPS;
                if (window.game) {
                    window.game.gameLoopOPS = this.targetFPS;
                }
            }
        },

        getCurrentFPS() {
            if (window.game && typeof window.game.fps === 'number') {
                return Math.round(window.game.fps);
            }
            return 0;
        },

        applySettings(settings) {
            if (settings) {
                this.targetFPS = settings.targetFPS || 144;
                if (settings.enabled) this.enable();
            }
        }
    };

    const AntiLagModule = {
        enabled: false,
        disableTextEffects: true,
        reduceQuality: true,
        limitObjects: false,
        originalSettings: {},

        enable() {
            this.saveOriginalSettings();
            this.applyOptimizations();
            this.enabled = true;
            SettingsManager.set('antiLag.enabled', true);
        },

        disable() {
            this.restoreOriginalSettings();
            this.enabled = false;
            SettingsManager.set('antiLag.enabled', false);
        },

        toggle() {
            this.enabled ? this.disable() : this.enable();
            return this.enabled;
        },

        saveOriginalSettings() {
            if (window.game) {
                this.originalSettings = {
                    textEffects: window.game.textEffects,
                    qualityMode: window.game.qualityMode,
                    hashMapRefreshInterval: window.game.hashMapRefreshInterval
                };
            }
        },

        applyOptimizations() {
            if (window.game) {
                // Disable text effects (floating damage numbers, etc.)
                if (this.disableTextEffects) {
                    window.game.textEffects = false;
                    if (window.textEffects) window.textEffects = [];
                }
                // Reduce quality
                if (this.reduceQuality) {
                    window.game.qualityMode = 'low';
                }
                // Reduce hashmap refresh rate for better performance
                window.game.hashMapRefreshInterval = 200;
                // Disable static canvas for faster rendering
                if (window.game.staticCanvasObjects) {
                    window.game.clearStaticObjects();
                }
            }
        },

        restoreOriginalSettings() {
            if (window.game && this.originalSettings) {
                if (this.originalSettings.textEffects !== undefined) {
                    window.game.textEffects = this.originalSettings.textEffects;
                }
                if (this.originalSettings.qualityMode !== undefined) {
                    window.game.qualityMode = this.originalSettings.qualityMode;
                }
                if (this.originalSettings.hashMapRefreshInterval !== undefined) {
                    window.game.hashMapRefreshInterval = this.originalSettings.hashMapRefreshInterval;
                }
            }
        },

        setOption(option, value) {
            this[option] = value;
            SettingsManager.set(`antiLag.${option}`, value);
            if (this.enabled) this.applyOptimizations();
        },

        getPerformanceMetrics() {
            return {
                fps: FPSUnlockModule.getCurrentFPS(),
                latency: window.game && typeof window.game.latency === 'number' ? Math.round(window.game.latency) : (window.latency || 0)
            };
        },

        applySettings(settings) {
            if (settings) {
                this.disableTextEffects = settings.disableTextEffects !== false;
                this.reduceQuality = settings.reduceQuality !== false;
                this.limitObjects = settings.limitObjects || false;
                if (settings.enabled) this.enable();
            }
        }
    };

    // Zoom Module - Custom camera zoom with mouse wheel support
    const ZoomModule = {
        enabled: false,
        level: 1.0,
        minZoom: 0.05,
        maxZoom: 5.0,
        wheelHandler: null,
        originalSetZoom: null,

        init() {
            const self = this;
            
            // Intercept Engine.prototype.setZoom to remove limits
            if (window.game) {
                const proto = Object.getPrototypeOf(window.game);
                if (proto && proto.setZoom && !this.originalSetZoom) {
                    this.originalSetZoom = proto.setZoom;
                    proto.setZoom = function(t) {
                        if (self.enabled) {
                            // Use our custom zoom level, ignore the passed value
                            t = self.level;
                        }
                        // Apply with our limits or original limits
                        if (self.enabled) {
                            if (t < self.minZoom) t = self.minZoom;
                            if (t > self.maxZoom) t = self.maxZoom;
                        } else {
                            if (t > 2) t = 2;
                            if (t < 1) t = 1;
                        }
                        // Original setZoom logic
                        if (this.zoom !== t) {
                            this.zoom = t;
                            this.staticCanvasRenderOffset.restX = 0;
                            this.staticCanvasRenderOffset.restY = 0;
                            this.staticCanvasRenderOffset.x = 0;
                            this.staticCanvasRenderOffset.y = 0;
                            this.staticCanvasRenderPosition.x = 0;
                            this.staticCanvasRenderPosition.y = 0;
                            this.clearStaticObjects();
                        }
                    };
                }
            }

            // Setup mouse wheel handler
            this.wheelHandler = (e) => {
                if (!this.enabled) return;
                e.preventDefault();
                // Scroll down = zoom out (smaller), scroll up = zoom in (bigger)
                const delta = e.deltaY > 0 ? -0.1 : 0.1;
                this.level = Math.max(this.minZoom, Math.min(this.maxZoom, this.level + delta));
                SettingsManager.set('zoom.level', this.level);
                // Force immediate zoom update
                if (window.game) {
                    window.game.setZoom(this.level);
                }
                // Update slider if visible
                const slider = document.querySelector('[data-setting="zoom.level"]');
                if (slider) {
                    slider.value = this.level;
                    const valueDisplay = slider.parentElement.querySelector('.cheat-menu-slider-value');
                    if (valueDisplay) valueDisplay.textContent = this.level.toFixed(1);
                }
            };
        },

        enable() {
            this.enabled = true;
            SettingsManager.set('zoom.enabled', true);
            // Add wheel listener to game canvas
            if (window.game && window.game.canvas) {
                window.game.canvas.addEventListener('wheel', this.wheelHandler, { passive: false });
            }
            // Apply zoom immediately
            if (window.game) {
                window.game.setZoom(this.level);
            }
        },

        disable() {
            this.enabled = false;
            SettingsManager.set('zoom.enabled', false);
            // Reset to default zoom
            if (window.game) {
                window.game.setZoom(1);
            }
            // Remove wheel listener
            if (window.game && window.game.canvas) {
                window.game.canvas.removeEventListener('wheel', this.wheelHandler);
            }
        },

        toggle() {
            this.enabled ? this.disable() : this.enable();
            return this.enabled;
        },

        setLevel(level) {
            this.level = Math.max(this.minZoom, Math.min(this.maxZoom, parseFloat(level)));
            SettingsManager.set('zoom.level', this.level);
            if (this.enabled && window.game) {
                window.game.setZoom(this.level);
            }
        },

        applySettings(settings) {
            if (settings) {
                this.level = settings.level || 1.0;
                if (settings.enabled) this.enable();
            }
        }
    };

    // Night Vision Module - See through darkness
    // Works by intercepting drawImage calls that draw darknessCanvas
    const NightVisionModule = {
        enabled: false,
        originalDrawImage: null,

        init() {
            // Intercept CanvasRenderingContext2D.drawImage to block darkness
            if (!this.originalDrawImage) {
                this.originalDrawImage = CanvasRenderingContext2D.prototype.drawImage;
                const self = this;
                CanvasRenderingContext2D.prototype.drawImage = function(img, ...args) {
                    // If night vision enabled and this is the darknessCanvas, skip drawing
                    if (self.enabled && img === window.darknessCanvas) {
                        return; // Don't draw darkness
                    }
                    return self.originalDrawImage.call(this, img, ...args);
                };
            }
        },

        enable() {
            this.enabled = true;
            SettingsManager.set('nightVision.enabled', true);
        },

        disable() {
            this.enabled = false;
            SettingsManager.set('nightVision.enabled', false);
        },

        toggle() {
            this.enabled ? this.disable() : this.enable();
            return this.enabled;
        },

        applySettings(settings) {
            if (settings && settings.enabled) {
                this.enable();
            }
        }
    };

    // ==================== MENU STYLES ====================

    const MENU_STYLES = `
        .cheat-menu {
            position: fixed;
            width: 320px;
            background: rgba(15, 15, 25, 0.95);
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
            z-index: 10000;
            font-family: 'Segoe UI', Arial, sans-serif;
            color: #fff;
            user-select: none;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .cheat-menu.hidden { opacity: 0; transform: scale(0.95); pointer-events: none; }
        .cheat-menu-header {
            padding: 12px 16px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 12px 12px 0 0;
            cursor: move;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .cheat-menu-title { font-size: 16px; font-weight: 600; margin: 0; }
        .cheat-menu-close { background: none; border: none; color: #fff; font-size: 20px; cursor: pointer; opacity: 0.8; }
        .cheat-menu-close:hover { opacity: 1; }
        .cheat-menu-tabs { display: flex; background: rgba(0, 0, 0, 0.3); border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
        .cheat-menu-tab {
            flex: 1; padding: 10px; text-align: center; cursor: pointer; font-size: 13px;
            color: rgba(255, 255, 255, 0.6); transition: all 0.2s; border: none; background: none;
        }
        .cheat-menu-tab:hover { color: rgba(255, 255, 255, 0.9); background: rgba(255, 255, 255, 0.05); }
        .cheat-menu-tab.active { color: #fff; background: rgba(102, 126, 234, 0.3); border-bottom: 2px solid #667eea; }
        .cheat-menu-content { padding: 16px; max-height: 400px; overflow-y: auto; }
        .cheat-menu-panel { display: none; }
        .cheat-menu-panel.active { display: block; }
        .cheat-menu-section { margin-bottom: 16px; }
        .cheat-menu-section-title { font-size: 12px; color: rgba(255, 255, 255, 0.5); text-transform: uppercase; margin-bottom: 8px; letter-spacing: 1px; }
        .cheat-menu-row { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; }
        .cheat-menu-label { font-size: 14px; color: rgba(255, 255, 255, 0.9); }
        .cheat-menu-toggle {
            position: relative; width: 44px; height: 24px; background: rgba(255, 255, 255, 0.1);
            border-radius: 12px; cursor: pointer; transition: background 0.2s;
        }
        .cheat-menu-toggle.active { background: #667eea; }
        .cheat-menu-toggle::after {
            content: ''; position: absolute; width: 18px; height: 18px; background: #fff;
            border-radius: 50%; top: 3px; left: 3px; transition: transform 0.2s;
        }
        .cheat-menu-toggle.active::after { transform: translateX(20px); }
        .cheat-menu-color { width: 36px; height: 24px; border: none; border-radius: 4px; cursor: pointer; padding: 0; }
        .cheat-menu-slider-container { display: flex; align-items: center; gap: 10px; }
        .cheat-menu-slider {
            flex: 1; height: 6px; -webkit-appearance: none; background: rgba(255, 255, 255, 0.1);
            border-radius: 3px; outline: none;
        }
        .cheat-menu-slider::-webkit-slider-thumb {
            -webkit-appearance: none; width: 16px; height: 16px; background: #667eea; border-radius: 50%; cursor: pointer;
        }
        .cheat-menu-slider-value { min-width: 40px; text-align: right; font-size: 13px; color: rgba(255, 255, 255, 0.7); }
        .cheat-menu-btn {
            width: 100%; padding: 10px; background: rgba(255, 255, 255, 0.1); border: none;
            border-radius: 6px; color: #fff; font-size: 14px; cursor: pointer; transition: background 0.2s;
        }
        .cheat-menu-btn:hover { background: rgba(255, 255, 255, 0.2); }
        .cheat-menu-btn.danger { background: rgba(234, 102, 102, 0.3); }
        .cheat-menu-btn.danger:hover { background: rgba(234, 102, 102, 0.5); }
        .cheat-menu-value { font-size: 14px; color: #667eea; font-weight: 500; cursor: pointer; }
        .cheat-menu-value.editable:hover { text-decoration: underline; }
        .cheat-menu-value-input {
            background: rgba(102, 126, 234, 0.2); border: 1px solid #667eea; border-radius: 4px;
            color: #667eea; font-size: 14px; padding: 2px 6px; width: 100px; outline: none;
        }
        .cheat-menu-keybind {
            padding: 6px 12px; background: rgba(102, 126, 234, 0.2); border: 1px solid rgba(102, 126, 234, 0.5);
            border-radius: 4px; color: #667eea; font-size: 12px; cursor: pointer; min-width: 60px; text-align: center;
        }
        .cheat-menu-keybind:hover { background: rgba(102, 126, 234, 0.3); }
        .cheat-menu-keybind.listening { background: rgba(234, 102, 102, 0.3); border-color: rgba(234, 102, 102, 0.5); color: #ea6666; }
        .cheat-menu-keybind-small {
            padding: 2px 6px; background: rgba(102, 126, 234, 0.15); border: 1px solid rgba(102, 126, 234, 0.3);
            border-radius: 3px; color: rgba(102, 126, 234, 0.8); font-size: 10px; cursor: pointer; margin-left: 8px;
        }
        .cheat-menu-keybind-small:hover { background: rgba(102, 126, 234, 0.25); }
        .cheat-menu-metrics { display: flex; gap: 16px; padding: 12px; background: rgba(0, 0, 0, 0.2); border-radius: 8px; margin-top: 8px; }
        .cheat-menu-metric { text-align: center; flex: 1; }
        .cheat-menu-metric-value { font-size: 20px; font-weight: 600; color: #667eea; }
        .cheat-menu-metric-label { font-size: 11px; color: rgba(255, 255, 255, 0.5); text-transform: uppercase; }
        .cheat-menu-profile-section { cursor: pointer; padding: 8px; border-radius: 6px; transition: background 0.2s; }
        .cheat-menu-profile-section:hover { background: rgba(255, 255, 255, 0.05); }
        .cheat-menu-profile-hint { font-size: 10px; color: rgba(255,255,255,0.3); text-align: center; margin-top: 4px; }
        .cheat-menu-settings-icon {
            padding: 2px 6px; background: rgba(255, 255, 255, 0.1); border: none;
            border-radius: 3px; color: rgba(255, 255, 255, 0.6); font-size: 12px; cursor: pointer; margin-left: 8px;
        }
        .cheat-menu-settings-icon:hover { background: rgba(255, 255, 255, 0.2); color: #fff; }
        .cheat-menu-submenu {
            display: none; margin-top: 8px; padding: 10px; background: rgba(0, 0, 0, 0.3);
            border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .cheat-menu-submenu.open { display: block; }
        .cheat-menu-submenu-title { font-size: 11px; color: rgba(255, 255, 255, 0.4); margin-bottom: 8px; text-transform: uppercase; }
    `;


    // ==================== MENU MANAGER ====================

    const MenuManager = {
        menuElement: null,
        isVisible: true,
        activeTab: 'aim',
        position: { x: 10, y: 10 },
        isDragging: false,
        dragOffset: { x: 0, y: 0 },
        fakeProfile: { enabled: false, nickname: '', level: '' },

        init() {
            this.injectStyles();
            this.createMenu();
            this.setupHotkey();
            this.loadPosition();
            this.applyModuleSettings();
            this.startMetricsUpdate();
            this.loadFakeProfile();
        },

        injectStyles() {
            const style = document.createElement('style');
            style.textContent = MENU_STYLES;
            document.head.appendChild(style);
        },

        loadFakeProfile() {
            const fp = SettingsManager.get('fakeProfile');
            if (fp) {
                this.fakeProfile = fp;
            }
        },

        createMenu() {
            const menu = document.createElement('div');
            menu.className = 'cheat-menu';
            menu.innerHTML = this.getMenuHTML();
            document.body.appendChild(menu);
            this.menuElement = menu;
            this.setupEventListeners();
            this.updateUIFromSettings();
        },

        getMenuHTML() {
            return `
                <div class="cheat-menu-header">
                    <h3 class="cheat-menu-title">EvoWorld Cheat Menu</h3>
                    <button class="cheat-menu-close">&times;</button>
                </div>
                <div class="cheat-menu-tabs">
                    <button class="cheat-menu-tab active" data-tab="aim">Aim</button>
                    <button class="cheat-menu-tab" data-tab="player">Player</button>
                    <button class="cheat-menu-tab" data-tab="more">More</button>
                    <button class="cheat-menu-tab" data-tab="settings">Settings</button>
                </div>
                <div class="cheat-menu-content">
                    <div class="cheat-menu-panel active" data-panel="aim">
                        <div class="cheat-menu-section">
                            <div class="cheat-menu-section-title">Auto Attack</div>
                            <div class="cheat-menu-row">
                                <span class="cheat-menu-label">Enable Auto Attack</span>
                                <div style="display:flex;align-items:center;">
                                    <div class="cheat-menu-toggle" data-setting="autoAttack"></div>
                                    <button class="cheat-menu-keybind-small" data-keybind-for="toggleAutoAttack">⌨</button>
                                    <button class="cheat-menu-settings-icon" id="autoattack-settings-btn">⚙</button>
                                </div>
                            </div>
                            <div class="cheat-menu-submenu" id="autoattack-submenu">
                                <div class="cheat-menu-submenu-title">Auto Attack Settings</div>
                                <div class="cheat-menu-row">
                                    <span class="cheat-menu-label">Enable Attack Turns</span>
                                    <div class="cheat-menu-toggle" data-setting="autoAttack.enableTurns"></div>
                                </div>
                                <div class="cheat-menu-row">
                                    <span class="cheat-menu-label">Show Hitbox Visuals</span>
                                    <div class="cheat-menu-toggle" data-setting="autoAttack.showHitbox"></div>
                                </div>
                            </div>
                        </div>
                        <div class="cheat-menu-section">
                            <div class="cheat-menu-section-title">HitBox Colors</div>
                            <div class="cheat-menu-row">
                                <span class="cheat-menu-label">Enable HitBox</span>
                                <div style="display:flex;align-items:center;">
                                    <div class="cheat-menu-toggle" data-setting="hitbox.enabled"></div>
                                    <button class="cheat-menu-keybind-small" data-keybind-for="toggleHitbox">⌨</button>
                                </div>
                            </div>
                            <div class="cheat-menu-row">
                                <span class="cheat-menu-label">Player Color</span>
                                <input type="color" class="cheat-menu-color" data-setting="hitbox.playerColor" value="#00ff00">
                            </div>
                            <div class="cheat-menu-row">
                                <span class="cheat-menu-label">Enemy Color</span>
                                <input type="color" class="cheat-menu-color" data-setting="hitbox.enemyColor" value="#ff0000">
                            </div>
                        </div>
                    </div>
                    <div class="cheat-menu-panel" data-panel="player">
                        <div class="cheat-menu-section">
                            <div class="cheat-menu-section-title">ESP (Players Only)</div>
                            <div class="cheat-menu-row">
                                <span class="cheat-menu-label">Enable ESP Lines</span>
                                <div style="display:flex;align-items:center;">
                                    <div class="cheat-menu-toggle" data-setting="esp.enabled"></div>
                                    <button class="cheat-menu-keybind-small" data-keybind-for="toggleESP">⌨</button>
                                </div>
                            </div>
                            <div class="cheat-menu-row">
                                <span class="cheat-menu-label">Line Color</span>
                                <input type="color" class="cheat-menu-color" data-setting="esp.lineColor" value="#ff00ff">
                            </div>
                        </div>
                    </div>
                    <div class="cheat-menu-panel" data-panel="more">
                        <div class="cheat-menu-section">
                            <div class="cheat-menu-section-title">FPS Unlock</div>
                            <div class="cheat-menu-row">
                                <span class="cheat-menu-label">Enable FPS Unlock</span>
                                <div style="display:flex;align-items:center;">
                                    <div class="cheat-menu-toggle" data-setting="fps.enabled"></div>
                                    <button class="cheat-menu-keybind-small" data-keybind-for="toggleFPS">⌨</button>
                                </div>
                            </div>
                            <div class="cheat-menu-row">
                                <span class="cheat-menu-label">Target FPS</span>
                                <div class="cheat-menu-slider-container">
                                    <input type="range" class="cheat-menu-slider" data-setting="fps.targetFPS" min="30" max="300" value="144">
                                    <span class="cheat-menu-slider-value">144</span>
                                </div>
                            </div>
                            <p style="color: rgba(255,255,255,0.4); font-size: 11px; margin-top: 4px;">Note: FPS limited by monitor refresh rate</p>
                        </div>
                        <div class="cheat-menu-section">
                            <div class="cheat-menu-section-title">Anti-Lag</div>
                            <div class="cheat-menu-row">
                                <span class="cheat-menu-label">Enable Anti-Lag</span>
                                <div style="display:flex;align-items:center;">
                                    <div class="cheat-menu-toggle" data-setting="antiLag.enabled"></div>
                                    <button class="cheat-menu-keybind-small" data-keybind-for="toggleAntiLag">⌨</button>
                                </div>
                            </div>
                            <div class="cheat-menu-row">
                                <span class="cheat-menu-label">Disable Text Effects</span>
                                <div class="cheat-menu-toggle" data-setting="antiLag.disableTextEffects"></div>
                            </div>
                            <div class="cheat-menu-row">
                                <span class="cheat-menu-label">Reduce Quality</span>
                                <div class="cheat-menu-toggle" data-setting="antiLag.reduceQuality"></div>
                            </div>
                        </div>
                        <div class="cheat-menu-section">
                            <div class="cheat-menu-section-title">Camera Zoom</div>
                            <div class="cheat-menu-row">
                                <span class="cheat-menu-label">Enable Custom Zoom</span>
                                <div class="cheat-menu-toggle" data-setting="zoom.enabled"></div>
                            </div>
                            <div class="cheat-menu-row">
                                <span class="cheat-menu-label">Zoom Level</span>
                                <div class="cheat-menu-slider-container">
                                    <input type="range" class="cheat-menu-slider" data-setting="zoom.level" min="0.3" max="3.0" step="0.1" value="1.0">
                                    <span class="cheat-menu-slider-value">1.0</span>
                                </div>
                            </div>
                            <p style="color: rgba(255,255,255,0.4); font-size: 11px; margin-top: 4px;">Lower = zoom out, Higher = zoom in</p>
                        </div>
                        <div class="cheat-menu-section">
                            <div class="cheat-menu-section-title">Night Vision</div>
                            <div class="cheat-menu-row">
                                <span class="cheat-menu-label">Enable Night Vision</span>
                                <div class="cheat-menu-toggle" data-setting="nightVision.enabled"></div>
                            </div>
                            <p style="color: rgba(255,255,255,0.4); font-size: 11px; margin-top: 4px;">See through darkness in caves</p>
                        </div>
                    </div>
                    <div class="cheat-menu-panel" data-panel="settings">
                        <div class="cheat-menu-section">
                            <div class="cheat-menu-section-title">Player Info <span style="font-size:9px;color:rgba(255,255,255,0.3)">(double-click to edit)</span></div>
                            <div class="cheat-menu-profile-section" id="profile-section">
                                <div class="cheat-menu-row">
                                    <span class="cheat-menu-label">Nickname</span>
                                    <span class="cheat-menu-value editable" id="player-nickname">Loading...</span>
                                </div>
                                <div class="cheat-menu-row">
                                    <span class="cheat-menu-label">Level</span>
                                    <span class="cheat-menu-value editable" id="player-level">Loading...</span>
                                </div>
                                <div class="cheat-menu-row">
                                    <span class="cheat-menu-label">Premium</span>
                                    <span class="cheat-menu-value" id="player-premium">Loading...</span>
                                </div>
                            </div>
                        </div>
                        <div class="cheat-menu-section">
                            <div class="cheat-menu-section-title">Performance</div>
                            <div class="cheat-menu-metrics">
                                <div class="cheat-menu-metric">
                                    <div class="cheat-menu-metric-value" id="fps-display">0</div>
                                    <div class="cheat-menu-metric-label">FPS</div>
                                </div>
                                <div class="cheat-menu-metric">
                                    <div class="cheat-menu-metric-value" id="latency-display">0</div>
                                    <div class="cheat-menu-metric-label">Latency</div>
                                </div>
                            </div>
                        </div>
                        <div class="cheat-menu-section">
                            <div class="cheat-menu-section-title">Visual Effects</div>
                            <div class="cheat-menu-row">
                                <span class="cheat-menu-label">Ice Particles</span>
                                <div style="display:flex;align-items:center;">
                                    <div class="cheat-menu-toggle" data-setting="iceParticles.enabled"></div>
                                    <button class="cheat-menu-keybind-small" data-keybind-for="toggleIceParticles">⌨</button>
                                </div>
                            </div>
                        </div>
                        <div class="cheat-menu-section">
                            <div class="cheat-menu-section-title">Keybinds</div>
                            <div class="cheat-menu-row">
                                <span class="cheat-menu-label">Toggle Menu</span>
                                <button class="cheat-menu-keybind" data-keybind="toggleMenu">Insert</button>
                            </div>
                            <div id="keybinds-list"></div>
                        </div>
                        <div class="cheat-menu-section">
                            <button class="cheat-menu-btn danger" id="reset-settings">Reset All Settings</button>
                        </div>
                    </div>
                </div>
            `;
        },

        setupEventListeners() {
            const header = this.menuElement.querySelector('.cheat-menu-header');
            const closeBtn = this.menuElement.querySelector('.cheat-menu-close');
            const tabs = this.menuElement.querySelectorAll('.cheat-menu-tab');
            const toggles = this.menuElement.querySelectorAll('.cheat-menu-toggle');
            const colors = this.menuElement.querySelectorAll('.cheat-menu-color');
            const sliders = this.menuElement.querySelectorAll('.cheat-menu-slider');
            const resetBtn = this.menuElement.querySelector('#reset-settings');

            // Drag functionality
            header.addEventListener('mousedown', (e) => {
                if (e.target === closeBtn) return;
                this.isDragging = true;
                this.dragOffset.x = e.clientX - this.menuElement.offsetLeft;
                this.dragOffset.y = e.clientY - this.menuElement.offsetTop;
            });

            document.addEventListener('mousemove', (e) => {
                if (!this.isDragging) return;
                const x = e.clientX - this.dragOffset.x;
                const y = e.clientY - this.dragOffset.y;
                this.menuElement.style.left = x + 'px';
                this.menuElement.style.top = y + 'px';
                this.position = { x, y };
            });

            document.addEventListener('mouseup', () => {
                if (this.isDragging) {
                    this.isDragging = false;
                    this.savePosition();
                }
            });

            closeBtn.addEventListener('click', () => this.hide());

            tabs.forEach(tab => {
                tab.addEventListener('click', () => this.switchTab(tab.dataset.tab));
            });

            toggles.forEach(toggle => {
                toggle.addEventListener('click', () => {
                    const setting = toggle.dataset.setting;
                    const isActive = toggle.classList.toggle('active');
                    this.handleSettingChange(setting, isActive);
                });
            });

            colors.forEach(color => {
                color.addEventListener('input', (e) => {
                    this.handleSettingChange(color.dataset.setting, e.target.value);
                });
            });

            sliders.forEach(slider => {
                slider.addEventListener('input', (e) => {
                    const value = parseInt(e.target.value, 10);
                    const valueDisplay = slider.parentElement.querySelector('.cheat-menu-slider-value');
                    if (valueDisplay) valueDisplay.textContent = value;
                    this.handleSettingChange(slider.dataset.setting, value);
                });
            });

            resetBtn.addEventListener('click', () => {
                SettingsManager.reset();
                this.updateUIFromSettings();
                this.applyModuleSettings();
                autoAttackEnabled = false;
                this.fakeProfile = { enabled: false, nickname: '', level: '' };
            });

            // Setup keybind buttons for each feature
            this.setupFeatureKeybinds();

            // Setup profile editing (double-click)
            this.setupProfileEditing();

            // Update keybinds list in settings
            this.updateKeybindsList();

            // Setup Auto-Attack settings submenu
            const aaSettingsBtn = this.menuElement.querySelector('#autoattack-settings-btn');
            const aaSubmenu = this.menuElement.querySelector('#autoattack-submenu');
            if (aaSettingsBtn && aaSubmenu) {
                aaSettingsBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    aaSubmenu.classList.toggle('open');
                });
            }
        },

        setupFeatureKeybinds() {
            const keybindBtns = this.menuElement.querySelectorAll('.cheat-menu-keybind-small');
            keybindBtns.forEach(btn => {
                // Show current keybind on hover via title
                const keybindName = btn.dataset.keybindFor;
                const currentKey = SettingsManager.get(`keybinds.${keybindName}`);
                if (currentKey) {
                    btn.title = this.formatKeyName(currentKey);
                }

                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const kbName = btn.dataset.keybindFor;
                    btn.textContent = '...';
                    btn.classList.add('listening');

                    const handler = (ev) => {
                        ev.preventDefault();
                        ev.stopPropagation();
                        let keyName = '';
                        if (ev.key !== 'Escape') {
                            keyName = ev.key === ' ' ? 'Space' : (ev.code || ev.key);
                        }
                        SettingsManager.set(`keybinds.${kbName}`, keyName);
                        btn.textContent = '\u2328'; // Keyboard symbol
                        btn.title = keyName ? this.formatKeyName(keyName) : 'Click to set';
                        btn.classList.remove('listening');
                        document.removeEventListener('keydown', handler, true);
                        this.updateKeybindsList();
                    };

                    document.addEventListener('keydown', handler, true);
                });
            });
        },

        setupProfileEditing() {
            const nickEl = this.menuElement.querySelector('#player-nickname');
            const levelEl = this.menuElement.querySelector('#player-level');

            const makeEditable = (el, field) => {
                el.addEventListener('dblclick', () => {
                    const currentValue = el.textContent;
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.className = 'cheat-menu-value-input';
                    input.value = currentValue === '-' || currentValue === 'Loading...' ? '' : currentValue;
                    el.replaceWith(input);
                    input.focus();

                    const save = () => {
                        const newValue = input.value.trim();
                        const newEl = document.createElement('span');
                        newEl.className = 'cheat-menu-value editable';
                        newEl.id = el.id;
                        
                        if (newValue) {
                            this.fakeProfile.enabled = true;
                            this.fakeProfile[field] = newValue;
                            newEl.textContent = newValue;
                            newEl.style.color = '#ea6666';
                        } else {
                            this.fakeProfile[field] = '';
                            if (!this.fakeProfile.nickname && !this.fakeProfile.level) {
                                this.fakeProfile.enabled = false;
                            }
                            newEl.textContent = this.getRealPlayerValue(field);
                        }
                        
                        SettingsManager.set('fakeProfile', this.fakeProfile);
                        input.replaceWith(newEl);
                        makeEditable(newEl, field);
                    };

                    input.addEventListener('blur', save);
                    input.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter') save();
                        if (e.key === 'Escape') {
                            const newEl = document.createElement('span');
                            newEl.className = 'cheat-menu-value editable';
                            newEl.id = el.id;
                            newEl.textContent = currentValue;
                            input.replaceWith(newEl);
                            makeEditable(newEl, field);
                        }
                    });
                });
            };

            makeEditable(nickEl, 'nickname');
            makeEditable(levelEl, 'level');
        },

        getRealPlayerValue(field) {
            if (!window.game || !window.game.me) return '-';
            if (field === 'nickname') return window.game.me.nick || '-';
            if (field === 'level') return window.game.me.level || '0';
            return '-';
        },

        updateKeybindsList() {
            const container = this.menuElement.querySelector('#keybinds-list');
            if (!container) return;

            const keybinds = SettingsManager.get('keybinds') || DEFAULT_SETTINGS.keybinds;
            const keybindLabels = {
                toggleAutoAttack: 'Auto Attack',
                toggleHitbox: 'HitBox',
                toggleESP: 'ESP',
                toggleFPS: 'FPS Unlock',
                toggleAntiLag: 'Anti-Lag',
                toggleIceParticles: 'Ice Particles'
            };

            let html = '';
            for (const [key, label] of Object.entries(keybindLabels)) {
                const value = keybinds[key] || '';
                const displayValue = value ? this.formatKeyName(value) : 'None';
                html += `
                    <div class="cheat-menu-row">
                        <span class="cheat-menu-label">${label}</span>
                        <button class="cheat-menu-keybind" data-keybind="${key}">${displayValue}</button>
                    </div>
                `;
            }
            container.innerHTML = html;

            // Setup listeners for new keybind buttons
            container.querySelectorAll('.cheat-menu-keybind').forEach(btn => {
                btn.addEventListener('click', () => {
                    const allBtns = this.menuElement.querySelectorAll('.cheat-menu-keybind');
                    allBtns.forEach(b => b.classList.remove('listening'));
                    btn.classList.add('listening');
                    btn.textContent = 'Press key...';

                    const handler = (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const keybind = btn.dataset.keybind;
                        let keyName = '';
                        if (e.key !== 'Escape') {
                            keyName = e.key === ' ' ? 'Space' : (e.code || e.key);
                        }
                        SettingsManager.set(`keybinds.${keybind}`, keyName);
                        btn.textContent = keyName ? this.formatKeyName(keyName) : 'None';
                        btn.classList.remove('listening');
                        document.removeEventListener('keydown', handler, true);
                    };

                    document.addEventListener('keydown', handler, true);
                });
            });
        },

        handleSettingChange(setting, value) {
            if (setting === 'autoAttack') {
                autoAttackEnabled = value;
                return;
            }

            SettingsManager.set(setting, value);

            if (setting === 'hitbox.enabled') {
                value ? HitboxColorModule.enable() : HitboxColorModule.disable();
            } else if (setting === 'hitbox.playerColor') {
                HitboxColorModule.setPlayerColor(value);
            } else if (setting === 'hitbox.enemyColor') {
                HitboxColorModule.setEnemyColor(value);
            } else if (setting === 'fps.enabled') {
                value ? FPSUnlockModule.enable() : FPSUnlockModule.disable();
            } else if (setting === 'fps.targetFPS') {
                FPSUnlockModule.setTargetFPS(value);
            } else if (setting === 'antiLag.enabled') {
                value ? AntiLagModule.enable() : AntiLagModule.disable();
            } else if (setting.startsWith('antiLag.')) {
                AntiLagModule.setOption(setting.split('.')[1], value);
            } else if (setting === 'esp.enabled') {
                value ? ESPModule.enable() : ESPModule.disable();
            } else if (setting === 'esp.lineColor') {
                ESPModule.setLineColor(value);
            } else if (setting === 'iceParticles.enabled') {
                value ? IceParticlesModule.start() : IceParticlesModule.stop();
            } else if (setting === 'autoAttack.showHitbox') {
                autoAttackShowHitbox = value;
            } else if (setting === 'autoAttack.enableTurns') {
                autoAttackEnableTurns = value;
            } else if (setting === 'zoom.enabled') {
                value ? ZoomModule.enable() : ZoomModule.disable();
            } else if (setting === 'zoom.level') {
                ZoomModule.setLevel(parseFloat(value));
            } else if (setting === 'nightVision.enabled') {
                value ? NightVisionModule.enable() : NightVisionModule.disable();
            }
        },

        updateUIFromSettings() {
            const settings = SettingsManager.load();

            this.menuElement.querySelectorAll('.cheat-menu-toggle').forEach(toggle => {
                const setting = toggle.dataset.setting;
                if (setting === 'autoAttack') {
                    toggle.classList.toggle('active', autoAttackEnabled);
                } else {
                    const value = SettingsManager.get(setting);
                    toggle.classList.toggle('active', !!value);
                }
            });

            this.menuElement.querySelectorAll('.cheat-menu-color').forEach(color => {
                const value = SettingsManager.get(color.dataset.setting);
                if (value) color.value = value;
            });

            this.menuElement.querySelectorAll('.cheat-menu-slider').forEach(slider => {
                const value = SettingsManager.get(slider.dataset.setting);
                if (value !== undefined) {
                    slider.value = value;
                    const valueDisplay = slider.parentElement.querySelector('.cheat-menu-slider-value');
                    if (valueDisplay) valueDisplay.textContent = value;
                }
            });

            if (settings.menu && settings.menu.activeTab) {
                this.switchTab(settings.menu.activeTab);
            }

            this.updateKeybindsList();
        },

        applyModuleSettings() {
            const settings = SettingsManager.load();
            HitboxColorModule.applySettings(settings.hitbox);
            FPSUnlockModule.applySettings(settings.fps);
            AntiLagModule.applySettings(settings.antiLag);
            ESPModule.applySettings(settings.esp);
            ZoomModule.applySettings(settings.zoom);
            NightVisionModule.applySettings(settings.nightVision);
        },

        switchTab(tabName) {
            this.activeTab = tabName;
            SettingsManager.set('menu.activeTab', tabName);

            this.menuElement.querySelectorAll('.cheat-menu-tab').forEach(tab => {
                tab.classList.toggle('active', tab.dataset.tab === tabName);
            });

            this.menuElement.querySelectorAll('.cheat-menu-panel').forEach(panel => {
                panel.classList.toggle('active', panel.dataset.panel === tabName);
            });
        },

        toggle() { this.isVisible ? this.hide() : this.show(); },

        show() {
            this.isVisible = true;
            this.menuElement.classList.remove('hidden');
            SettingsManager.set('menu.visible', true);
        },

        hide() {
            this.isVisible = false;
            this.menuElement.classList.add('hidden');
            SettingsManager.set('menu.visible', false);
        },

        setupHotkey() {
            document.addEventListener('keydown', (e) => {
                if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

                const keybinds = SettingsManager.get('keybinds') || DEFAULT_SETTINGS.keybinds;

                // Toggle menu
                if (e.key === keybinds.toggleMenu || e.code === keybinds.toggleMenu) {
                    this.toggle();
                }

                // Toggle auto attack
                if (keybinds.toggleAutoAttack && (e.code === keybinds.toggleAutoAttack || e.key.toUpperCase() === keybinds.toggleAutoAttack.replace('Key', ''))) {
                    autoAttackEnabled = !autoAttackEnabled;
                    this.updateToggleUI('autoAttack', autoAttackEnabled);
                }

                // Toggle hitbox
                if (keybinds.toggleHitbox && (e.code === keybinds.toggleHitbox || e.key.toUpperCase() === keybinds.toggleHitbox.replace('Key', ''))) {
                    const newState = HitboxColorModule.toggle();
                    this.updateToggleUI('hitbox.enabled', newState);
                }

                // Toggle ESP
                if (keybinds.toggleESP && (e.code === keybinds.toggleESP || e.key.toUpperCase() === keybinds.toggleESP.replace('Key', ''))) {
                    const newState = ESPModule.toggle();
                    this.updateToggleUI('esp.enabled', newState);
                }

                // Toggle FPS
                if (keybinds.toggleFPS && (e.code === keybinds.toggleFPS || e.key.toUpperCase() === keybinds.toggleFPS.replace('Key', ''))) {
                    const newState = FPSUnlockModule.toggle();
                    this.updateToggleUI('fps.enabled', newState);
                }

                // Toggle Anti-Lag
                if (keybinds.toggleAntiLag && (e.code === keybinds.toggleAntiLag || e.key.toUpperCase() === keybinds.toggleAntiLag.replace('Key', ''))) {
                    const newState = AntiLagModule.toggle();
                    this.updateToggleUI('antiLag.enabled', newState);
                }

                // Toggle Ice Particles
                if (keybinds.toggleIceParticles && (e.code === keybinds.toggleIceParticles || e.key.toUpperCase() === keybinds.toggleIceParticles.replace('Key', ''))) {
                    IceParticlesModule.toggle();
                    this.updateToggleUI('iceParticles.enabled', IceParticlesModule.enabled);
                }
            });
        },

        updateToggleUI(setting, state) {
            const toggle = this.menuElement.querySelector(`[data-setting="${setting}"]`);
            if (toggle) {
                toggle.classList.toggle('active', state);
            }
        },

        formatKeyName(key) {
            if (!key) return 'None';
            if (key.startsWith('Key')) return key.replace('Key', '');
            if (key.startsWith('Digit')) return key.replace('Digit', '');
            return key;
        },

        loadPosition() {
            const settings = SettingsManager.load();
            if (settings.menu && settings.menu.position) {
                this.position = settings.menu.position;
                this.menuElement.style.left = this.position.x + 'px';
                this.menuElement.style.top = this.position.y + 'px';
            }
            if (settings.menu && settings.menu.visible === false) {
                this.hide();
            }
        },

        savePosition() { SettingsManager.set('menu.position', this.position); },

        startMetricsUpdate() {
            const updateMetrics = () => {
                const metrics = AntiLagModule.getPerformanceMetrics();
                const fpsDisplay = document.getElementById('fps-display');
                const latencyDisplay = document.getElementById('latency-display');
                if (fpsDisplay) fpsDisplay.textContent = metrics.fps || '0';
                if (latencyDisplay) latencyDisplay.textContent = (metrics.latency || '0') + 'ms';

                // Update player info
                const nickDisplay = document.getElementById('player-nickname');
                const levelDisplay = document.getElementById('player-level');
                const premiumDisplay = document.getElementById('player-premium');

                if (window.game && window.game.me) {
                    const player = window.game.me;
                    
                    // Check if fake profile is active
                    if (this.fakeProfile.enabled) {
                        if (nickDisplay && nickDisplay.tagName !== 'INPUT') {
                            if (this.fakeProfile.nickname) {
                                nickDisplay.textContent = this.fakeProfile.nickname;
                                nickDisplay.style.color = '#ea6666';
                            } else {
                                nickDisplay.textContent = player.nick || '-';
                                nickDisplay.style.color = '';
                            }
                        }
                        if (levelDisplay && levelDisplay.tagName !== 'INPUT') {
                            if (this.fakeProfile.level) {
                                levelDisplay.textContent = this.fakeProfile.level;
                                levelDisplay.style.color = '#ea6666';
                            } else {
                                levelDisplay.textContent = player.level || '0';
                                levelDisplay.style.color = '';
                            }
                        }
                    } else {
                        if (nickDisplay && nickDisplay.tagName !== 'INPUT') {
                            nickDisplay.textContent = player.nick || '-';
                            nickDisplay.style.color = '';
                        }
                        if (levelDisplay && levelDisplay.tagName !== 'INPUT') {
                            levelDisplay.textContent = player.level || '0';
                            levelDisplay.style.color = '';
                        }
                    }
                    
                    if (premiumDisplay) premiumDisplay.textContent = player.premium ? 'Yes ⭐' : 'No';
                }
            };

            // Initial update
            updateMetrics();
            // Update every 500ms
            setInterval(updateMetrics, 500);
        }
    };


    // ==================== AUTO ATTACK SYSTEM ====================

    let autoAttackEnabled = false;
    let autoAttackShowHitbox = true;  // Show hitbox visuals
    let autoAttackEnableTurns = false; // Enable attack turns (auto-rotate to enemy)
    let lastAttackTime = 0;
    const ATTACK_COOLDOWN = 50;
    let game = null;
    let originalDrawObjectsProto = null;
    let overlayCanvas, overlayCtx;

    const targetEnemyNames = ['ghost', 'ghostlyReaper', 'grimReaper', 'pumpkinGhost'];

    // Load auto-attack settings
    function loadAutoAttackSettings() {
        const settings = SettingsManager.get('autoAttack');
        if (settings) {
            autoAttackShowHitbox = settings.showHitbox !== false;
            autoAttackEnableTurns = settings.enableTurns || false;
        }
    }

    function rectToPoly(rect) {
        return [
            { x: rect.left, y: rect.bottom },
            { x: rect.left, y: rect.top },
            { x: rect.right, y: rect.top },
            { x: rect.right, y: rect.bottom }
        ];
    }

    function rotatePoint(pt, pivot, rad) {
        const s = Math.sin(rad), c = Math.cos(rad);
        const x = pt.x - pivot.x, y = pt.y - pivot.y;
        return { x: pivot.x + x * c - y * s, y: pivot.y + x * s + y * c };
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
                if (projA.max < projB.min || projB.max < projA.min) return false;
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

    // Check if any enemies exist in the game - FIX for auto-attack bug
    function hasEnemiesInRange() {
        if (!game || !game.me) return false;
        
        const player = game.me;
        const playerCollider = getColliderRect(player);
        const BAR_WIDTH = 45;
        const playerAngleRad = (player.moveDirection || 0) * Math.PI / 180;
        const side = (typeof player.direction === 'number' ? player.direction : (player.flySide || 1));

        const playerStripeRect = side >= 0
            ? { left: playerCollider.right, right: playerCollider.right + BAR_WIDTH, top: playerCollider.top, bottom: playerCollider.bottom }
            : { left: playerCollider.left - BAR_WIDTH, right: playerCollider.left, top: playerCollider.top, bottom: playerCollider.bottom };
        const playerPivot = { x: player.position.x + player.width / 2, y: player.position.y + player.height / 2 };
        const playerStripePoly = rotatePoly(rectToPoly(playerStripeRect), playerPivot, playerAngleRad);

        for (const id in game.gameObjects) {
            const obj = game.gameObjects[id];
            if (obj && targetEnemyNames.includes(obj.name) && !obj.deleted) {
                const enemyCollider = getColliderRect(obj);
                const barW = BAR_WIDTH;
                const pivot = { x: obj.position.x + obj.width / 2, y: obj.position.y + obj.height / 2 };
                const angleRad = (obj.rotation || 0) * Math.PI / 180;

                const leftBarRect = { left: enemyCollider.left - barW, right: enemyCollider.left, top: enemyCollider.top, bottom: enemyCollider.bottom };
                const rightBarRect = { left: enemyCollider.right, right: enemyCollider.right + barW, top: enemyCollider.top, bottom: enemyCollider.bottom };

                const leftBarPoly = rotatePoly(rectToPoly(leftBarRect), pivot, angleRad);
                const rightBarPoly = rotatePoly(rectToPoly(rightBarRect), pivot, angleRad);

                if (polygonsIntersect(playerStripePoly, leftBarPoly) || polygonsIntersect(playerStripePoly, rightBarPoly)) {
                    return true;
                }
            }
        }
        return false;
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

        const playerPivot = { x: player.position.x + player.width / 2, y: player.position.y + player.height / 2 };
        const playerStripePoly = rotatePoly(rectToPoly(playerStripeRect), playerPivot, playerAngleRad);

        ctx.save();

        const oldPlayerColor = player.colliderColor;
        player.colliderColor = HitboxColorModule.enabled ? HitboxColorModule.playerColor : '#00ff00';
        engine.drawCollider(player);
        player.colliderColor = oldPlayerColor;

        ctx.restore();
    }

    function overlayLoop() {
        if (!game || !overlayCtx) { return requestAnimationFrame(overlayLoop); }
        const rect = game.canvas.getBoundingClientRect();
        overlayCanvas.style.left = rect.left + 'px';
        overlayCanvas.style.top = rect.top + 'px';
        overlayCanvas.style.width = rect.width + 'px';
        overlayCanvas.style.height = rect.height + 'px';
        if (overlayCanvas.width !== game.canvas.width || overlayCanvas.height !== game.canvas.height) {
            overlayCanvas.width = game.canvas.width;
            overlayCanvas.height = game.canvas.height;
        }
        overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);

        // Draw custom hitboxes (only players/NPCs) if enabled
        if (HitboxColorModule.enabled && game.me) {
            HitboxColorModule.drawCustomHitboxes(overlayCtx, game);
        }

        // Draw ESP lines if enabled
        if (ESPModule.enabled && game.me) {
            drawESP();
        }

        // If auto attack is disabled, still continue the loop for ESP and hitboxes
        if (!autoAttackEnabled || !game.me) {
            requestAnimationFrame(overlayLoop);
            return;
        }

        const player = game.me;
        const playerCollider = getColliderRect(player);
        const BAR_WIDTH = 45;
        const playerAngleRad = (player.moveDirection || 0) * Math.PI / 180;
        const side = (typeof player.direction === 'number' ? player.direction : (player.flySide || 1));

        const playerStripeRect = side >= 0
            ? { left: playerCollider.right, right: playerCollider.right + BAR_WIDTH, top: playerCollider.top, bottom: playerCollider.bottom }
            : { left: playerCollider.left - BAR_WIDTH, right: playerCollider.left, top: playerCollider.top, bottom: playerCollider.bottom };
        const playerPivot = { x: player.position.x + player.width / 2, y: player.position.y + player.height / 2 };
        const playerStripePoly = rotatePoly(rectToPoly(playerStripeRect), playerPivot, playerAngleRad);

        let anyHit = false;
        overlayCtx.save();

        for (const id in game.gameObjects) {
            const obj = game.gameObjects[id];
            // FIX: Check if object exists and is not deleted
            if (obj && targetEnemyNames.includes(obj.name) && !obj.deleted) {
                const enemyCollider = getColliderRect(obj);
                
                // Only draw visuals if showHitbox is enabled
                if (autoAttackShowHitbox) {
                    const rp = game.getRenderPosition(enemyCollider.left, enemyCollider.bottom);
                    const w = (enemyCollider.right - enemyCollider.left) * game.scaleX * game.zoom;
                    const h = (enemyCollider.top - enemyCollider.bottom) * game.scaleY * game.zoom;
                    overlayCtx.lineWidth = 2;
                    overlayCtx.strokeStyle = HitboxColorModule.enabled ? HitboxColorModule.enemyColor : '#07345a';
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
                    if (fillColor) { overlayCtx.fillStyle = fillColor; overlayCtx.fill(); }
                    overlayCtx.strokeStyle = strokeColor;
                    overlayCtx.stroke();
                    overlayCtx.restore();
                }

                if (polygonsIntersect(playerStripePoly, leftBarPoly)) {
                    anyHit = true;
                    if (autoAttackShowHitbox) drawOverlayPoly(leftBarPoly, '#ff0000', 'rgba(255,0,0,0.22)');
                } else {
                    if (autoAttackShowHitbox) drawOverlayPoly(leftBarPoly, '#ff0000', null, 0.85);
                }
                if (polygonsIntersect(playerStripePoly, rightBarPoly)) {
                    anyHit = true;
                    if (autoAttackShowHitbox) drawOverlayPoly(rightBarPoly, '#ff0000', 'rgba(255,0,0,0.22)');
                } else {
                    if (autoAttackShowHitbox) drawOverlayPoly(rightBarPoly, '#ff0000', null, 0.85);
                }
            }
        }

        // Only draw visuals if showHitbox is enabled
        if (autoAttackShowHitbox) {
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
            overlayCtx.strokeStyle = HitboxColorModule.enabled ? HitboxColorModule.playerColor : '#00ff00';
            overlayCtx.strokeRect(playerRp.x, playerRp.y - ph, pw, ph);
        }

        overlayCtx.restore();

        // FIX: Only attack if there are actually enemies in range
        if (anyHit && hasEnemiesInRange() && Date.now() - lastAttackTime >= ATTACK_COOLDOWN) {
            if (typeof skillStart === 'function') {
                lastAttackTime = Date.now();
                skillStart();
            }
        }
        requestAnimationFrame(overlayLoop);
    }

    // ESP Drawing function - draws lines from player to OTHER PLAYERS ONLY
    function drawESP() {
        if (!game || !overlayCtx || !game.me || !ESPModule.enabled) return;

        const player = game.me;
        const playerCenter = {
            x: player.position.x + player.width / 2,
            y: player.position.y + player.height / 2
        };
        const playerRp = game.getRenderPosition(playerCenter.x, playerCenter.y);

        overlayCtx.save();
        overlayCtx.lineWidth = 1;
        overlayCtx.strokeStyle = ESPModule.lineColor;
        overlayCtx.globalAlpha = 0.6;

        for (const id in game.gameObjects) {
            const obj = game.gameObjects[id];
            if (obj && obj !== player && obj.type !== undefined && !obj.deleted) {
                // Draw lines to PLAYERS ONLY (objectType.PLAYER = 1)
                if (obj.type === 1) {
                    const objCenter = {
                        x: obj.position.x + obj.width / 2,
                        y: obj.position.y + obj.height / 2
                    };
                    const objRp = game.getRenderPosition(objCenter.x, objCenter.y);

                    overlayCtx.beginPath();
                    overlayCtx.moveTo(playerRp.x, playerRp.y);
                    overlayCtx.lineTo(objRp.x, objRp.y);
                    overlayCtx.stroke();
                }
            }
        }

        overlayCtx.restore();
    }

    function setupOverlay() {
        overlayCanvas = document.createElement('canvas');
        overlayCanvas.style.position = 'absolute';
        overlayCanvas.style.left = '0';
        overlayCanvas.style.top = '0';
        overlayCanvas.style.pointerEvents = 'none';
        overlayCanvas.style.zIndex = '9999';
        document.body.appendChild(overlayCanvas);
        overlayCtx = overlayCanvas.getContext('2d');
    }

    // ==================== INITIALIZATION ====================

    const waitForGame = setInterval(() => {
        if (window.game && window.game.getRenderPosition && window.game.drawCollider) {
            game = window.game;
            setupOverlay();
            const proto = Object.getPrototypeOf(game);
            originalDrawObjectsProto = proto.drawObjects;
            proto.drawObjects = function() {
                originalDrawObjectsProto.apply(this, arguments);
                try { performAutoAttackDraw(this); } catch (e) {}
            };
            requestAnimationFrame(overlayLoop);
            clearInterval(waitForGame);

            // Load auto-attack settings
            loadAutoAttackSettings();

            // Initialize Ice Particles
            IceParticlesModule.init();

            // Initialize Zoom Module (override setZoom limits)
            ZoomModule.init();

            // Initialize Night Vision Module (intercept drawImage)
            NightVisionModule.init();

            // Initialize menu after game is ready
            MenuManager.init();
        }
    }, 500);

})();

