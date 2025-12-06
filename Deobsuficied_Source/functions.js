game.onDeleteObject = function (e) {
  if (e.type == objectType.PLAYER) {
    var t = discordAsksArr.indexOf(e.id);
    -1 !== t && (discordAsksArr.splice(t, 1), refreshDiscordMenu());
  }
}, game.beforeDrawObject = function (e) {
  if (e.type != objectType.TILE && e.type != objectType.BACKGROUND) {
    if (null != e.hitEffect) if (game.time - e.hitEffect <= 500) {
      var t = abs(125 - (game.time - e.hitEffect)) / 250 * 1.5;
      t < 0.2 && (t = 0.2), e.opacity = t;
    } else e.opacity = 1, e.hitEffect = null;
    e.type != objectType.PLAYER && e.type != objectType.FOOD && e.type != objectType.EFFECT && e.type != objectType.BOSS || animateObject(e);
  }
};
var flags = [], canEatArr = [], isFriendOnScreen = false;
game.beforeDrawAllObjects = function () {
  isFriendOnScreen = false, canEatArr = [], drawSpawnTimer(1);
}, game.afterDrawAllObjects = function () {
  let e = game.me;
  if (!e.deleted) {
    if (e.hp < 100 || e.armor > 0) {
      var t = e.outlineWeight || 0, a = 2 * game.scaleY, i = 9 * game.scaleY * game.zoom, n = 1.5 * game.scaleY * game.zoom, o = game.getRenderPosition(e.position.x, e.position.y), l = 0;
      (g = game.dynamicContext).save(), g.fillStyle = "black", g.fillRect(l + o.x + e.width * game.scaleX * game.zoom * 0.1 - n, o.y - e.height * game.scaleY * game.zoom - t - a - i - n, 0.8 * e.width * game.scaleX * game.zoom + 2 * n, i + 2 * n);
      var r = "#00cc00";
      e.hp <= 50 && (r = "#ffff00"), e.hp <= 25 && (r = "#ff0000"), g.fillStyle = r, g.fillRect(l + o.x + e.width * game.scaleX * game.zoom * 0.1, o.y - e.height * game.scaleY * game.zoom - t - a - i, 0.8 * e.width * game.scaleX * game.zoom * e.hp / 100, i), g.restore();
    }
    if (e.armor > 0) {
      t = e.outlineWeight || 0, a = 12 * game.scaleY * game.zoom, i = 9 * game.scaleY * game.zoom, n = 1.5 * game.scaleY * game.zoom, o = game.getRenderPosition(e.position.x, e.position.y), l = 0;
      (g = game.dynamicContext).save(), g.fillStyle = "black", g.fillRect(l + o.x + e.width * game.scaleX * game.zoom * 0.1 - n, o.y - e.height * game.scaleY * game.zoom - t - a - i - n, 0.8 * e.width * game.scaleX * game.zoom + 2 * n, i + 2 * n);
      r = "#00acff";
      g.fillStyle = r, g.fillRect(l + o.x + e.width * game.scaleX * game.zoom * 0.1, o.y - e.height * game.scaleY * game.zoom - t - a - i, 0.8 * e.width * game.scaleX * game.zoom * e.armor / 100, i);
      for (let n = 1; n < 4 * e.armor / 100; n++) {
        let r = l + o.x + e.width * game.scaleX * game.zoom * 0.1 + 0.8 * e.width * game.scaleX * game.zoom * (0.25 * n);
        g.fillStyle = "black", g.fillRect(r - 1, o.y - e.height * game.scaleY * game.zoom - t - a - i, 2, i);
      }
      g.restore();
    }
    if (e.shurikens > 0) {
      var m = 0, s = 0;
      -1 == e.direction ? (m = -800, e.moveSpeed.x < 0 && (m += e.moveSpeed.x), e.moveSpeed.x < -1e3 && (m = -1e3), s = 20 + 2 * e.moveSpeed.y) : (m = 800, e.moveSpeed.x > 0 && (m += e.moveSpeed.x), e.moveSpeed.x > 1e3 && (m = 1e3), s = 20 + 2 * e.moveSpeed.y);
      var c = e.positionCenter.x, d = e.positionCenter.y, g = game.dynamicContext, p = [], f = game.gravity || 1800, h = m, y = s;
      let t = 0, a = c, i = d;
      for (let e = 0; e <= 20; e++) {
        let n = 0.04 * e, o = c + h * n, l = d + y * n - 0.5 * f * n * n;
        t += Math.sqrt((o - a) * (o - a) + (l - i) * (l - i)), p.push(game.getRenderPosition(o, l)), a = o, i = l;
      }
      g.save(), g.lineWidth = 3;
      for (let e = 1; e < p.length; e++) {
        const t = e / p.length * 0.6;
        g.strokeStyle = `rgba(255, 0, 0, ${t})`, g.beginPath(), g.moveTo(p[e - 1].x, p[e - 1].y), g.lineTo(p[e].x, p[e].y), g.stroke();
      }
      g.restore();
    }
  }
  drawSpawnTimer(2), drawTextEffects(), drawHints(), emotesMenuOpened && isFriendOnScreen && $(chatInput).show();
}, game.afterDrawObject = function (e) {
  var t = 0, a = 0, i = e.outlineWeight || 0, n = 0, o = e == game.me, l = 0;
  if (e.type != objectType.TILE && e.type != objectType.TILE) {
    if ((e.hp < 100 || e.armor > 0) && e.opacity > 0) {
      n = 2 * game.scaleY * game.zoom;
      t = 9 * game.scaleY * game.zoom, a = 1.5 * game.scaleY * game.zoom;
      if (!o) {
        var r = game.getRenderPosition(e.position.x, e.position.y);
        (E = game.dynamicContext).save(), E.globalAlpha = e.opacity, E.fillStyle = "black", E.fillRect(r.x + e.width * game.scaleX * game.zoom * 0.1 - a, r.y - e.height * game.scaleY * game.zoom - i - n - t - a, 0.8 * e.width * game.scaleX * game.zoom + 2 * a, t + 2 * a);
        var m = "#00cc00";
        e.hp <= 50 && (m = "#ffff00"), e.hp <= 25 && (m = "#ff0000"), E.fillStyle = m, E.fillRect(r.x + e.width * game.scaleX * game.zoom * 0.1, r.y - e.height * game.scaleY * game.zoom - i - n - t, 0.8 * e.width * game.scaleX * game.zoom * e.hp / 100, t), E.restore();
      }
    }
    if (e.armor > 0 && e.opacity > 0) {
      n = 13 * game.scaleY * game.zoom;
      t = 9 * game.scaleY * game.zoom, a = 1.5 * game.scaleY * game.zoom;
      if (!o) {
        r = game.getRenderPosition(e.position.x, e.position.y);
        (E = game.dynamicContext).save(), E.globalAlpha = e.opacity, E.fillStyle = "black", E.fillRect(r.x + e.width * game.scaleX * game.zoom * 0.1 - a, r.y - e.height * game.scaleY * game.zoom - i - n - t - a, 0.8 * e.width * game.scaleX * game.zoom + 2 * a, t + 2 * a);
        m = "#00acff";
        E.fillStyle = m, E.fillRect(l + r.x + e.width * game.scaleX * game.zoom * 0.1, r.y - e.height * game.scaleY * game.zoom - i - n - t, 0.8 * e.width * game.scaleX * game.zoom * e.armor / 100, t);
        for (let a = 1; a < 4 * e.armor / 100; a++) {
          let o = l + r.x + e.width * game.scaleX * game.zoom * 0.1 + 0.8 * e.width * game.scaleX * game.zoom * (0.25 * a);
          E.fillStyle = "black", E.fillRect(o - 1, r.y - e.height * game.scaleY * game.zoom - i - n - t, 2, t);
        }
        E.restore();
      }
    }
  }
  if (e.type == objectType.PLAYER || e.type == objectType.PET || e.type == objectType.MISC) {
    var s = 0;
    if (e.nick && e.opacity > 0 && (true !== e.inBattleRoyaleZone || e == game.me)) {
      var c, d = {};
      e.premium >= 1 ? (d.fillStyle = "black", d.font = "bold " + 13 * game.fontScale * game.zoom + "pt monospace") : (d.fillStyle = "black", d.font = 11 * game.fontScale * game.zoom + "pt monospace"), d.textAlign = "center", s = game.drawText(e.nick, e.position.x + e.width / 2, e.position.y + e.height + 1 * (t + 2 * a + i + n + 3) / game.scaleY / game.zoom, d, e.opacity).width, (s *= 1 / game.scaleX / game.zoom) > 300 && (e.nick = e.nick.slice(0, -1));
      var g = e.level;
      if (g <= 0) c = "grey"; else if (g <= 3) c = "#10abff"; else if (g <= 6) c = "#038f01"; else if (g <= 9) c = "#e8cf46"; else if (g <= 12) c = "#e67300"; else if (g <= 15) c = "red"; else if (g < 20) c = "#6633cc"; else if (g < 25) c = "#ff00ff"; else if (g < 30) c = "white"; else if (g < 35) {
        var p = Date.now() / 400, f = 127 * Math.sin(p) + 128, h = 127 * Math.sin(p + 2) + 128, y = 127 * Math.sin(p + 4) + 128;
        c = "rgb(" + Math.round(f) + "," + Math.round(h) + "," + Math.round(y) + ")";
      } else if (g < 40) {
        p = Date.now() / 600, f = 110 * Math.sin(p) + 130, h = 110 * Math.sin(p) + 130, y = 110 * Math.sin(p) + 130;
        c = "rgb(" + Math.round(f) + "," + Math.round(h) + "," + Math.round(y) + ")";
        var b = "rgb(" + Math.round(abs(f - 200)) + "," + Math.round(abs(h - 200)) + "," + Math.round(abs(y - 200)) + ")", u = 2 * Math.random() - 1;
      } else if (g < 45) {
        p = Date.now() / 800, f = 255, h = 255 * abs(Math.sin(p)), y = 0;
        c = "rgb(" + Math.round(f) + "," + Math.round(h) + "," + Math.round(y) + ")";
        b = "rgba(" + Math.round(f) + ",0," + Math.round(y) + ", 1)", u = 2 * Math.random() - 1;
      } else if (g < 50) {
        p = Date.now() / 300, f = 110 * Math.sin(p) + 140, h = 130 * -Math.sin(p) + 82, y = 0 * Math.sin(p) + 255;
        c = "rgb(" + Math.round(f) + "," + Math.round(h) + "," + Math.round(y) + ")";
        b = "rgba(" + Math.round(abs(f / 3)) + "," + Math.round(abs(h / 3)) + "," + Math.round(abs(y / 3)) + ", 0.9)", u = 2 * Math.random() - 1;
      } else if (g < 55) {
        p = Date.now() / 300, f = 0, h = 255 * Math.sin(p) + 200, y = 0;
        c = "rgb(" + Math.round(f) + "," + Math.round(h) + "," + Math.round(y) + ")";
        b = "rgba(" + Math.round(f / 2) + "," + Math.round(h / 3) + "," + Math.round(y / 3) + ", 0.9)", u = 2 * Math.random() - 1;
      } else if (g < 999) {
        p = Date.now() / 200, f = 255 * Math.sin(p) + 200, h = 0, y = 0;
        c = "rgb(" + Math.round(f) + "," + Math.round(h) + "," + Math.round(y) + ")";
        b = "rgba(" + Math.round(f / 2) + "," + Math.round(h / 3) + "," + Math.round(y / 3) + ", 0.9)", u = 2 * Math.random() - 1;
      } else {
        p = Date.now() / 65, f = 55 * Math.sin(p) + 200, h = 55 * Math.sin(p) + 200, y = 0;
        c = "rgb(" + Math.round(f) + "," + Math.round(h) + "," + Math.round(y) + ")";
        b = "rgb(" + Math.round(abs(f - 155)) + "," + Math.round(abs(h - 155)) + ",0)", u = 2 * Math.random() - 1;
      }
      (d = {}).font = g >= 35 ? "900 " + 7.5 * game.fontScale * game.zoom + "pt arial" : "bold " + 7.5 * game.fontScale * game.zoom + "pt arial", d.textAlign = "right", d.fillStyle = c, g >= 35 && (game.dynamicContext.save(), game.dynamicContext.shadowColor = b, game.dynamicContext.shadowOffsetY = u, game.dynamicContext.shadowBlur = randomInteger(4, 6));
      var O = game.drawText("[" + g + "]", e.position.x + e.width / 2 - s / 2 - 1, 1 + e.position.y + e.height + 1 * (t + 2 * a + i + n + 3) / game.scaleY / game.zoom, d, e.opacity).width;
      g >= 35 && game.dynamicContext.restore(), O *= 1 / game.scaleX / game.zoom;
      for (var x = 0; x < leaderboard.length && x < 3; x++) e.id == leaderboard[x].objectId && game.drawSprite(leaderboardStars[x + 1], e.position.x + e.width / 2 - s / 2 - 1 - O - 12 / game.fontScale, 1 + e.position.y + e.height + 1 * (t + 2 * a + i + n + 1) / game.scaleY / game.zoom, 12 / game.fontScale, 12 / game.fontScale, {opacity: e.opacity, ignoreOffset: o});
      if (e.countryCode && e.opacity > 0 && (flags[e.countryCode] || (flags[e.countryCode] = new Image, flags[e.countryCode].crossOrigin = "Anonymous", flags[e.countryCode].src = cdnServer + "/flags/" + e.countryCode.toLowerCase() + ".png"), flags[e.countryCode].width > 0)) {
        var S = e.opacity;
        S > 0.5 && (S -= 0.2), game.drawSprite(flags[e.countryCode], e.position.x + e.width / 2 + s / 2 + 4, 1 + e.position.y + e.height + 1 * (t + 2 * a + i + n + 1) / game.scaleY / game.zoom, 9 / game.fontScale, 13 / game.fontScale, {opacity: S, ignoreOffset: o}), l += 15 / game.fontScale;
      }
      1 == e.userId && (isFriendOnScreen = true), friendsArr[e.userId] && (game.drawSprite(friendImage, e.position.x + e.width / 2 + s / 2 + 4 + l, 1 + e.position.y + e.height + 1 * (t + 2 * a + i + n) / game.scaleY / game.zoom - 3 / game.fontScale, 16 / game.fontScale, 16 / game.fontScale, {opacity: e.opacity, ignoreOffset: o}), l += 18 / game.fontScale, isFriendOnScreen = true), e.premium && (game.drawSprite(premiumImage, e.position.x + e.width / 2 + s / 2 + 4 + l, 1 + e.position.y + e.height + 1 * (t + 2 * a + i + n + 1) / game.scaleY / game.zoom - 3 / game.fontScale, 18 / game.fontScale, 18 / game.fontScale, {opacity: e.opacity, ignoreOffset: o}), l += 20 / game.fontScale), e.spawnTimer && (l -= 1, game.drawSprite(spawnTimerImage, e.position.x + e.width / 2 + s / 2 + 4 + l, 1 + e.position.y + e.height + 1 * (t + 2 * a + i + n) / game.scaleY / game.zoom - 3 / game.fontScale, 20 / game.fontScale, 20 / game.fontScale, {opacity: e.opacity, ignoreOffset: o}), l += 22 / game.fontScale, l -= 1), true === e.askedDiscord && (game.drawSprite(discordAskImage, e.position.x + e.width / 2 + s / 2 + 4 + l, 1 + e.position.y + e.height + 1 * (t + 2 * a + i + n) / game.scaleY / game.zoom - 3 / game.fontScale, 16 / game.fontScale, 16 / game.fontScale, {opacity: e.opacity, ignoreOffset: o}), l += 18 / game.fontScale);
    }
    if (e.arenaFrags && e.opacity > 0) (d = {}).font = "bold " + 13 * game.fontScale * game.zoom + "pt arial", d.fillStyle = "red", true !== e.inBattleRoyaleZone || e == game.me ? l += 5 : (n += 5, l -= 25), l += 1 * game.drawText(e.arenaFrags, e.position.x + e.width / 2 + s / 2 + 4 + l, 1 + e.position.y + e.height + 1 * (t + 2 * a + i + n) / game.scaleY / game.zoom, d, e.opacity).width / game.fontScale / game.zoom, game.drawSprite(arenaFragImage, e.position.x + e.width / 2 + s / 2 + 6 + l, 1 + e.position.y + e.height + 1 * (t + 2 * a + i + n - 2) / game.scaleY / game.zoom - 3 / game.fontScale, 28 / game.fontScale, 28 / game.fontScale, {opacity: e.opacity, ignoreOffset: o});
    if (e.emote && e.opacity > 0 && e.emoteStartTime < game.time) {
      d = {};
      if ((T = game.time - e.emoteStartTime) >= 4e3) delete e.emote; else {
        var _ = 1;
        T <= 500 ? _ = T / 500 : T >= 3500 && (_ = (4e3 - T) / 500), game.drawSprite(e.emote, e.position.x + e.width / 2 - 18 / game.fontScale, e.position.y + e.height + t + 2 * a + i + n + 3 + 25, 36 / game.fontScale, 36 / game.fontScale, {opacity: _, ignoreOffset: o}), n += 45;
      }
    } else if (e.chat && e.opacity > 0) {
      d = {};
      var T = game.time - e.chatStartTime;
      d.fillStyle = "black", d.font = "bold " + 13 * game.fontScale * game.zoom + "pt monospace", d.textAlign = "center", isArabic(e.chat) && (d.direction = "rtl");
      var v = game.measureText(e.chat, d).width, w = 4e3 + 10 * v;
      if (T >= w) delete e.chat; else {
        _ = 1;
        T <= 500 ? _ = T / 500 : T >= w - 500 && (_ = (w - T) / 500), v = 10 + 1.05 * v;
        var E;
        r = game.getRenderPosition(e.position.x, e.position.y);
        (E = game.dynamicContext).save(), E.fillStyle = "white", e.chatCustom && (E.fillStyle = "#ffff6a"), E.globalAlpha = _, E.roundRect(r.x + e.width / 2 * game.scaleX * game.zoom - v / 2, r.y - (30 + (t + 2 * a + i + n + 3 + 25) + e.height) * game.scaleY * game.zoom, v, 30 * game.scaleY * game.zoom, 10).fill(), E.roundRect(r.x + e.width / 2 * game.scaleX * game.zoom - v / 2, r.y - (30 + (t + 2 * a + i + n + 3 + 25) + e.height) * game.scaleY * game.zoom, v, 30 * game.scaleY * game.zoom, 10).stroke(), E.restore(), game.drawText(e.chat, e.position.x + e.width / 2, e.position.y + e.height + (t + 2 * a + i + n + 3 + 25 + 15 - 5), d, _), n += 40;
      }
    } else if (e.typing && e.opacity > 0 && friendsArr[e.userId] && true !== e.inBattleRoyaleZone) {
      (d = {}).font = "bold " + 13 * game.fontScale * game.zoom + "pt arial", d.fillStyle = "red";
      let l = 1 + floor(game.time / 80) % 19, r = game.sprites["chat_bubble_" + l];
      game.drawSprite(r, e.position.x + e.width / 2 - 15, 1 + e.position.y + e.height + 25 + 1 * (t + 2 * a + i + n - 2) / game.scaleY / game.zoom - 3 / game.fontScale, 45 / game.fontScale, 50 / game.fontScale, {opacity: e.opacity, ignoreOffset: o}), n += 55;
    }
    if (e.lootInfo && e.lootInfo.length > 0 && e.opacity > 0) {
      let l = 0, r = 6 / game.fontScale, m = e.position.x + e.width / 2, s = 1 + e.position.y + e.height + 25 + 1 * (t + 2 * a + i + n - 2) / game.scaleY / game.zoom - 3 * game.fontScale;
      for (let t = 0; t < e.lootInfo.length; t++) {
        let a = e.lootInfo[t], i = game.time - a.startTime;
        if (i >= 5e3) {
          e.lootInfo.splice(t, 1), t--;
          continue;
        }
        let n = 1;
        i < 1e3 ? n = i / 1e3 : i >= 4e3 && (n = (5e3 - i) / 1e3), n < 0 && (n = 0), n > 1 && (n = 1);
        let c = 32 / game.fontScale, d = m - c / 2, g = s + l * (c + r), p = g + c / 2 - 5, f = {};
        f.font = "bold " + 13 * game.fontScale * game.zoom + "pt arial", f.fillStyle = "black", f.textAlign = "right", game.drawText(a.amount + "x", d - 4, p, f, n), game.drawSprite(a.image, d, g, c, c, {opacity: n, ignoreOffset: o}), l++;
      }
    }
    if (e.shurikens > 0 && e.opacity > 0) {
      var R = e.animations[e.animation].sprites, A = R[e.animationFrame % R.length], j = {x: 0, y: 0};
      charactersHandOffsets[e.name] && charactersHandOffsets[e.name][A] && (j = charactersHandOffsets[e.name][A]);
      let t = -10, a = -24, i = 24, n = -1 !== A.indexOf("_right") ? 1 : -1;
      -1 == n && (t = -14);
      for (let l = e.shurikens - 1; l >= 0; l--) {
        let r = l * (0.08 * i), m = t + (-1 === n ? -r : r), s = a - r, c = i;
        game.drawSprite(game.sprites.shuriken, e.position.x + j.x * e.width + m, e.position.y + j.y * e.height + s, c, c, {opacity: e.opacity, ignoreOffset: o});
      }
    }
  }
};
var charactersHandOffsets = {grimReaper: {grimReaper_1_idle_right: {x: 0.4015957446808511, y: 0.34935897435897434}, grimReaper_2_idle_right: {x: 0.4015957446808511, y: 0.34935897435897434}, grimReaper_3_idle_right: {x: 0.4015957446808511, y: 0.3525641025641026}, grimReaper_4_idle_right: {x: 0.39893617021276595, y: 0.3557692307692308}, grimReaper_5_idle_right: {x: 0.3962765957446808, y: 0.358974358974359}, grimReaper_6_idle_right: {x: 0.39361702127659576, y: 0.36217948717948717}, grimReaper_1_flying_right: {x: 0.39361702127659576, y: 0.3814102564102564}, grimReaper_2_flying_right: {x: 0.39095744680851063, y: 0.3814102564102564}, grimReaper_3_flying_right: {x: 0.3882978723404255, y: 0.3782051282051282}, grimReaper_4_flying_right: {x: 0.38563829787234044, y: 0.3782051282051282}, grimReaper_5_flying_right: {x: 0.3829787234042553, y: 0.3782051282051282}, grimReaper_1_attack_right: {x: 0.40691489361702127, y: 0.358974358974359}, grimReaper_2_attack_right: {x: 0.4015957446808511, y: 0.3525641025641026}, grimReaper_3_attack_right: {x: 0.3962765957446808, y: 0.34935897435897434}, grimReaper_4_attack_right: {x: 0.39095744680851063, y: 0.3557692307692308}, grimReaper_5_attack_right: {x: 0.39095744680851063, y: 0.3717948717948718}, grimReaper_6_attack_right: {x: 0.39095744680851063, y: 0.3782051282051282}, grimReaper_7_attack_right: {x: 0.3962765957446808, y: 0.3717948717948718}, grimReaper_8_attack_right: {x: 0.4015957446808511, y: 0.36538461538461536}, grimReaper_1_idle_left: {x: 0.5984042553191489, y: 0.34935897435897434}, grimReaper_2_idle_left: {x: 0.5984042553191489, y: 0.34935897435897434}, grimReaper_3_idle_left: {x: 0.5984042553191489, y: 0.3525641025641026}, grimReaper_4_idle_left: {x: 0.601063829787234, y: 0.3557692307692308}, grimReaper_5_idle_left: {x: 0.6037234042553192, y: 0.358974358974359}, grimReaper_6_idle_left: {x: 0.6063829787234043, y: 0.36217948717948717}, grimReaper_1_flying_left: {x: 0.6063829787234043, y: 0.3814102564102564}, grimReaper_2_flying_left: {x: 0.6090425531914894, y: 0.3814102564102564}, grimReaper_3_flying_left: {x: 0.6117021276595744, y: 0.3782051282051282}, grimReaper_4_flying_left: {x: 0.6143617021276595, y: 0.3782051282051282}, grimReaper_5_flying_left: {x: 0.6170212765957447, y: 0.3782051282051282}, grimReaper_1_attack_left: {x: 0.5930851063829787, y: 0.358974358974359}, grimReaper_2_attack_left: {x: 0.5984042553191489, y: 0.3525641025641026}, grimReaper_3_attack_left: {x: 0.6037234042553192, y: 0.34935897435897434}, grimReaper_4_attack_left: {x: 0.6090425531914894, y: 0.3557692307692308}, grimReaper_5_attack_left: {x: 0.6090425531914894, y: 0.3717948717948718}, grimReaper_6_attack_left: {x: 0.6090425531914894, y: 0.3782051282051282}, grimReaper_7_attack_left: {x: 0.6037234042553192, y: 0.3717948717948718}, grimReaper_8_attack_left: {x: 0.5984042553191489, y: 0.36538461538461536}}};
game.onCreateObject = function (e) {
  if (0 == e.zIndex) switch (e.type) {
    case objectType.PLAYER:
      e.zIndex = 15;
      break;
    case objectType.PET:
      e.zIndex = 14;
      break;
    case objectType.EFFECT:
      e.zIndex = 12;
      break;
    case objectType.FOOD:
      e.moveable ? e.zIndex = 11 : e.zIndex = 10;
      break;
    case objectType.TILE:
    case objectType.BACKGROUND:
      e.zIndex = 5;
  }
  if (e.type == objectType.BACKGROUND ? e.collisionPriority = 255 : e.type == objectType.TILE && (e.collisionPriority = 200), e.type == objectType.EFFECT && (e.addHandler(objectHandlerFunc_EFFECT), 0 == e.name.indexOf("armor_breaking_effect") && (e.originalHeight = e.height, e.originalWidth = e.width, e.width = 0, e.height = 0, e.addHandler(objectHandlerFunc_ARMOR_BREAKING_EFFECT))), e.stickTo && e.addHandler(objectHandlerFunc_STICK), e.type == objectType.PLAYER && (e.canSleep = false, e.inHide = false, e.inHideTime = 0, e.addHandler(objectHandlerFunc_PLAYER), e.addOnScreenHandler(objectOnScreenHandlerFunc_PLAYER)), "skull" == e.name && (e.moveSpeed.y = 30, e.moveSpeed.x = 0, e.addHandler(objectHandlerFunc_SKULL)), "water" != e.name && "water2" != e.name && "water2_fill" != e.name && "ocean" != e.name && "arctic" != e.name || e.addCollisionOnObtain(collisionOnObtain_WATER), "ectoplasm_fire" == e.name && e.addCollisionOnObtain(collisionOnObtain_ECTOPLASM), "waterDrop" == e.name && e.addCollisionOnObtain(collisionOnObtain_WATERDROP), "roots" == e.name && e.addCollisionOnObtain(collisionOnObtain_ROOTS), "bear_trap" == e.name && (e.trapState = 0, e.addOnScreenHandler(objectOnScreenHandlerFunc_BEARTRAP), e.addCollisionOnObtain(collisionOnObtain_BEARTRAP)), "wall_spikes" == e.name && e.addCollisionOnObtain(collisionOnObtain_WALLSPIKES), "swamp" == e.name && e.addCollisionOnObtain(collisionOnObtain_SWAMP), "toxic_water" == e.name && e.addCollisionOnObtain(collisionOnObtain_TOXICWATER), "volleyball" == e.name && (e.addCollisionOnObtain(collision_VOLLEYBALL), e.addCollisionOnTrigger(collision_VOLLEYBALL), e.addHandler(objectHandlerFunc_ROTATEBALL)), "shuriken" == e.name && (e.addCollisionOnObtain(collision_SHURIKEN), e.addCollisionOnTrigger(collision_SHURIKEN), e.rotateSpeed = 2, e.addHandler(objectHandlerFunc_ROTATEBALL)), "bomb" == e.name && e.addHandler(objectHandlerFunc_ROTATEBALL), "spike_trap_saw" == e.name && (e.rotateSpeed = 400, e.addHandler(objectHandlerFunc_ROTATE), e.addCollisionOnTrigger(collisionOnTrigger_SAW)), "lava" != e.name && "lava_rising" != e.name || (e.addCollisionOnObtain(collisionOnObtain_LAVA), e.addOnScreenHandler(objectOnScreenHandlerFunc_LAVA, {interval: 1e3})), "lava_bubble" == e.name && e.addHandler(objectHandlerFunc_EFFECT), 1 == e.safeZone && e.addCollisionOnObtain(collisionOnObtain_SAFEZONE), 1 == e.arenaZone && e.addCollisionOnObtain(collisionOnObtain_ARENAZONE), 1 == e.battleRoyaleZone && e.addCollisionOnObtain(collisionOnObtain_BATTLEROYALEZONE), "gem" == e.name && e.addCollisionOnObtain(collisionOnObtain_GEM), "br_portal" == e.name && e.addCollisionOnObtain(collisionOnObtain_BATTLEROYALEPORTAL), "potion_armor" == e.name && (e.originalPosition = {x: e.position.x, y: e.position.y}, e.addOnScreenHandler(objectOnScreenHandlerFunc_POTION), e.addCollisionOnObtain(collisionOnObtain_POTION)), "parchment_info" == e.name && (e.originalPosition = {x: e.position.x, y: e.position.y}, e.addCollisionOnObtain(collisionOnObtain_PARCHMENTINFO), e.addOnScreenHandler(objectOnScreenHandlerFunc_PARCHMENTINFO)), "currant" != e.name && "ladybug" != e.name && "cherry" != e.name && "strawberry" != e.name && "woodpecker" != e.name && "starFruit" != e.name && "star" != e.name && "starfish" != e.name && "beehive" != e.name && "egg" != e.name && "halloweenGhost" != e.name && "halloweenPumpkin" != e.name && 0 != e.name.indexOf("alienFruit") || e.addCollisionOnObtain(collisionOnObtain_IGNOREFOOD), "spiderweb_1" != e.name && "spiderweb_2" != e.name && "spiderweb_3" != e.name || e.addCollisionOnObtain(collisionOnObtain_SPIDERWEB), "background_lightblue_to_purple" == e.name && e.addCollisionOnObtain(collisionOnObtain_SPACEBOTTOM), 0 == e.name.indexOf("background_space_") && e.addCollisionOnObtain(collisionOnObtain_SPACE), "undefined" != typeof christmasTime && christmasTime) {
    if (("background_lightblue" == e.name || "background_lightblue_to_purple" == e.name || "background_graveyard_1" == e.name || "background_graveyard_2" == e.name || "background_graveyard_3" == e.name || "background_graveyard_top" == e.name) && e.position.y >= 2304 && e.position.x < 73664 && e.position.x > 7800) {
      var t = game.newObject(game.objectsDef.snow_animation);
      t.id = null, t.position.x = e.position.x, t.position.y = e.position.y, e.position.x > 72664 || e.position.x < 8800 ? t.opacity /= 3 : e.position.x > 71664 || e.position.x < 9800 ? t.opacity /= 2 : e.position.x > 70664 || e.position.x < 10800 ? t.opacity /= 1.5 : (e.position.x > 69664 || e.position.x < 11800) && (t.opacity /= 1.2), e.position.y > 3e3 && (t.opacity /= 1.5), 1 != snowAnimationSpots[t.position.x + "_" + t.position.y] && (t.addHandler(objectHandlerFunc_SNOWANIMATION), game.addObject(t), snowAnimationSpots[t.position.x + "_" + t.position.y] = true);
    }
    0 == e.name.indexOf("dirt_grass") && e.position.y < 4300 && (Object.assign(e, game.objectsDef.dirt_snow), e.animation = randomInteger(1, 2).toString());
  }
  e.type == objectType.HIDE && e.addCollisionOnObtain(collisionOnObtain_HIDE), "crocodile" != e.name && "giantRat" != e.name && "mammoth" != e.name && "tyrannosaurus" != e.name && "blackWidow" != e.name && "turtle" != e.name || e.addCollisionOnTrigger(collisionOnTrigger_IGNOREFOOD), "fireball" == e.name && (e.addCollisionOnTrigger(collisionOnObtainTrigger_FIREBALL), e.addCollisionOnObtain(collisionOnObtainTrigger_FIREBALL)), e.type == objectType.TOMBSTONE && (game.loadObjectLazySprites(e.name), e.addHandler(objectHandlerFunc_TOMBSTONE), e.addCollisionOnTrigger(collisionOnTrigger_TOMBSTONE), e.addCollisionOnObtain(collisionOnObtain_TOMBSTONE)), e.type == objectType.TELEPORT && e.addCollisionOnObtain(collisionOnObtain_TELEPORT), e.type == objectType.PLAYER && (e.addCollisionOnTrigger(collisionOnTrigger_PLAYER), e.addCollisionOnObtain(collisionOnObtain_PLAYER)), (e.moveable && e.type != objectType.EFFECT || e.type == objectType.PLAYER) && (e.lastInFluidTime = 0, e.moveDirection = 0, e.addHandler(objectHandlerFunc_MOVEABLE), null != e.lockSpeedX && e.addHandler(objectHandlerFunc_LOCKMOVESPEEDX)), "halloweenGhost" == e.name && e.addHandler(objectHandlerFunc_HALLOWEENGHOST), e.type == objectType.PET && (e.canSleep = false, e.addHandler(objectHandlerFunc_PET)), "kingJustice" == e.name && (e.sentence = 1, e.lastShowLink = 0, e.addHandler(objectHandlerFunc_KINGJUSTICE, {interval: 5e3}), e.addCollisionOnObtain(collisionOnObtain_KINGJUSTICE)), "executioner" == e.name && (e.sentence = 1, e.addHandler(objectHandlerFunc_EXECUTIONER, {interval: 12e3}), e.addCollisionOnObtain(collisionOnObtain_EXECUTIONER)), e.needBeSynced && e.addHandler(objectHandlerFunc_NEEDBESYNCED);
};
var snowAnimationSpots = [];
function checkFoodChain(e, t) {
  return e.id == t.id ? {check: 0} : e.eatsSouls && (t.type == objectType.PLAYER || t.hasSoul || t.type == objectType.BOSS) && true !== t.immortal ? {check: 1, dmg: 0, exp: 0} : t.eatsSouls && (e.type == objectType.PLAYER || e.hasSoul || e.type == objectType.BOSS) && true !== e.immortal ? {check: -1, dmg: 0, exp: 0} : foodChain[e.name] && foodChain[e.name].eats[t.name] ? {check: 1, dmg: foodChain[e.name].eats[t.name].dmg, exp: foodChain[e.name].eats[t.name].exp || 0} : foodChain[t.name] && foodChain[t.name].eats[e.name] ? {check: -1, dmg: foodChain[t.name].eats[e.name].dmg, exp: foodChain[t.name].eats[e.name].exp || 0} : {check: 0};
}
function doAttack(e, t) {
  if (1 == t) var a = "attacking_right"; else a = "attacking_left";
  e.animations[a] && (e.animationFrame = 0, e.animation = a);
}
function getExpFromTable(e) {
  for (var t = 0, a = 0, i = 0; i < Object.keys(expTable).length; i++) {
    var n = Object.keys(expTable)[i];
    if (a += expTable[n].exp, n == e) break;
    if ("alienBat" == n && "overfedAlienBat" == e) break;
    t = a;
  }
  return {fromExp: t, toExp: a};
}
function checkDistance(e, t, a, i) {
  var n = e - a, o = t - i;
  return Math.sqrt(n * n + o * o);
}
function drawHints() {
  if (0 == user.level && myExperience < 1600 && canEatArr.length > 0 && !imDead) {
    for (var e = game.me.getAllPositions(), t = null, a = 600, i = 0; i < canEatArr.length; i++) {
      var n = canEatArr[i];
      if (!n.deleted && n.type == objectType.FOOD) {
        var o = n.getAllPositions(), l = checkDistance(e.center.x, e.center.y, o.center.x, o.center.y);
        l < 600 && l < a && (a = l, t = canEatArr[i]);
      }
    }
    if (null != t && a < 600 && a > 90) {
      var r = 40 / a, m = (o = t.getAllPositions(), e.center.x - o.center.x), s = e.center.y - o.center.y, c = 10;
      myExperience > 1300 && (c = parseInt((1600 - myExperience) / 400 * c)), c < 1 && (c = 1);
      game.drawArrow(e.center.x - m * r, e.center.y - s * r, o.center.x + m * r, o.center.y + s * r, c, "red");
    }
  }
}
function drawSpawnTimer(e) {
  if (spawnTimerData) for (var t = 0; t < spawnTimerData.length; t++) {
    let n = spawnTimerData[t], o = n.a, l = n.b, r = n.c, m = n.d;
    if (game.objectsDef[r]) {
      let t = game.objectsDef[r];
      if (t.type == objectType.BOSS && "boss1" == t.name && 0 == showBossTimer) continue;
      let n = t.zIndex || 0;
      if (1 == e && n > 15) continue;
      if (2 == e && n <= 15) continue;
      let s = game.sprites[game.objectsDef[t.name].animations[t.animation].sprites[0]];
      game.drawSprite(s, o, l, t.height, t.width, {opacity: 0.25});
      var a = "0" + m % 60, i = ("0" + Math.floor(m / 60) % 60).substr(-2) + ":" + a.substr(-2);
      let c = {fillStyle: "#f24500"};
      c.font = 15 * game.fontScale * game.zoom + "pt monospace", c.textAlign = "center", game.drawText(i, o + t.width / 2, l + t.height / 2, c);
    }
  }
}
function drawTextEffects() {
  for (var e = 0; e < textEffects.length; e++) {
    var t, a = textEffects[e], i = {};
    a.bold ? i.font = "800 " + a.fontSize * game.fontScale * game.zoom + "pt monospace" : i.font = a.fontSize * game.fontScale * game.zoom + "pt monospace", i.fillStyle = a.color, i.textAlign = "center", game.drawText(a.text, a.posX, a.posY, i), true !== a.static ? (a.posY += 60 / game.gameLoopOPS, t = 1400) : t = 4e3, game.time - a.startTime > t && (textEffects.splice(e, 1), e--);
  }
}
function animateObject(e) {
  if (setAnimations(e), game.me.inSafeZone || e.inSafeZone) e.outline = null; else {
    var t = checkFoodChain(game.me, e);
    1 == t.check ? (e.outline = "#00cc44", canEatArr.push(e), 1 == checkFoodChain(e, game.me).check && (e.outline = "orange", canEatArr.push(e)), e.outlineWeight = 3) : -1 == t.check ? (e.outline = "red", e.outlineWeight = 2) : e.outline = null;
  }
}
function objectHandlerFunc_PLAYER(e) {
  if (e.inBattleRoyaleZone && e != game.me && (e.petID = null), petFunc(e), 0 == e.inHide && (e.moveSpeed.x += 300 * game.deltaTime * e.flySide, e.moveSpeed.x > 500 ? e.moveSpeed.x -= abs(350 * game.deltaTime * e.flySide) : e.moveSpeed.x < -500 && (e.moveSpeed.x += abs(350 * game.deltaTime * e.flySide)), e.moveSpeed.y > 500 && (e.moveSpeed.y = 500)), 0 == e.flySide) {
    var t = 0.7 * abs(e.moveSpeed.x) * game.deltaTime;
    e.moveSpeed.x < 0 ? e.moveSpeed.x += t : e.moveSpeed.x -= t;
  }
  if (e.inHide ? (game.time - e.inHideTime > 500 && (e.visible = false, e.pet && (e.pet.visible = false)), e.moveSpeed.x = 0, e.moveSpeed.y = 0) : (e.visible = true, e.pet && (e.pet.visible = true)), e.invisibleTime > game.time) {
    var a = checkFoodChain(game.me, e);
    1 == a.check || -1 == a.check ? e.opacity = 0 : e.opacity = 0.2;
  } else e.opacity = 1;
  if (e.interpolateSpeed = 0.015, e.grabbed && (e.interpolateSpeed = 0.1), 1 == e.inHide) return null == e.interpolateTo.x && null == e.interpolateTo.y || (e.interpolateSpeed = 0.05, game.interpolatePosition(e)), false;
  if (1 == e.armorBreakingEffect) {
    e.armorBreakingEffect = false;
    var i = game.newObject(game.objectsDef.armor_breaking_effect);
    i.id = null, i.stickTo = e, i.position.x = e.position.x, i.position.y = e.position.y, i.width = Math.max(e.width, e.height), i.height = Math.max(e.width, e.height), game.addObject(i).objectHandlers;
  }
}
function objectOnScreenHandlerFunc_PLAYER(e) {
  e.inBattleRoyaleZone && e != game.me && (e.skin = 0);
}
function petFunc(e) {
  if (e.petID && (null == e.pet || e.pet.deleted) && game.objectsDef["pet_" + e.petID]) {
    var t = game.newObject(game.objectsDef["pet_" + e.petID]), a = e.getAllPositions();
    if (e.inHide) var i = a.center; else {
      var n = e.petOffset.x * -e.direction;
      i = {x: a.center.x + n - t.width / 2, y: e.position.y + e.petOffset.y - t.height / 2};
    }
    t.id = 0, t.petID = e.petID, t.position.x = i.x, t.position.y = i.y, t.owner = e, t.moveSpeed.x = e.moveSpeed.x, t.moveSpeed.y = e.moveSpeed.y, e.pet = game.addObject(t);
  }
}
function objectHandlerFunc_SNOWANIMATION(e) {
  if (lowPerformanceMode) return game.deleteObject(e), false;
}
function objectHandlerFunc_ROTATEBALL(e) {
  let t = e.rotateSpeed || 1;
  e.rotation += e.moveSpeed.x * game.deltaTime * t, e.rotation > 360 && (e.rotation -= 360), e.rotation < 0 && (e.rotation += 360);
}
function objectHandlerFunc_ROTATE(e) {
  let t = e.rotateSpeed || 200;
  e.rotation += t * game.deltaTime, e.rotation > 360 && (e.rotation -= 360), e.rotation < 0 && (e.rotation += 360);
}
function objectHandlerFunc_SKULL(e) {
  var t = (3500 - (game.time - e.createTime)) / 1500;
  t < 1 && (e.opacity = t), game.time - e.createTime > 3500 && game.deleteObject(e);
}
function objectHandlerFunc_EFFECT(e) {
  game.isVisible(game.me, e, game.canvas.width / 2, game.canvas.height / 2) ? "skull" == e.name || e.animationFrame % e.animations[e.animation].sprites.length == e.animations[e.animation].sprites.length - 1 && 0 != e.animationFrame && game.deleteObject(e) : game.deleteObject(e);
}
function objectHandlerFunc_ARMOR_BREAKING_EFFECT(e) {
  const t = 150, a = game.time - e.createTime;
  if (a > 1050) game.deleteObject(e); else if (a < t) {
    const i = a / t;
    e.opacity = 0.7 * i, e.width = e.originalWidth * i, e.height = e.originalHeight * i;
  } else if (a < 450) e.opacity = 0.7, e.width = e.originalWidth, e.height = e.originalHeight; else {
    const i = (a - t - 300) / 600;
    e.opacity = 0.7 * (1 - i);
  }
}
function objectHandlerFunc_TOMBSTONE(e) {
  var t = (1e4 - (game.time - e.createTime)) / 1500;
  t < 1 && (e.opacity = t), game.time - e.createTime > 1e4 ? game.deleteObject(e) : "start" == e.animation && e.animationFrame % e.animations[e.animation].sprites.length == e.animations[e.animation].sprites.length - 1 && 0 != e.animationFrame && e.animations.end && (e.animationFrame = 0, e.animation = "end");
}
function objectOnScreenHandlerFunc_BEARTRAP(e) {
  game.isVisible(game.me, e, game.canvas.width / 2, game.canvas.height / 2) ? 0 == e.trapState ? "closed" == e.animation ? (e.trapState = 1, e.animation = "closing") : e.animation = "open" : 1 == e.trapState ? e.animationFrame % e.animations[e.animation].sprites.length == e.animations[e.animation].sprites.length - 1 && 0 != e.animationFrame ? (e.trapState = 2, e.animation = "closed") : e.animation = "closing" : 2 == e.trapState ? "open" == e.animation ? (e.trapState = 3, e.animation = "opening") : e.animation = "closed" : 3 == e.trapState && (e.animationFrame % e.animations[e.animation].sprites.length == e.animations[e.animation].sprites.length - 1 && 0 != e.animationFrame ? (e.trapState = 0, e.animation = "open") : e.animation = "opening") : "open" == e.animation ? e.trapState = 0 : "closed" == e.animation && (e.trapState = 2);
}
function objectHandlerFunc_KINGJUSTICE(e) {
  mySkins.ghostlyReaper && mySkins.ghostlyReaper[17] || getDistance(e.position.x + e.width, e.position.y, game.me.position.x, game.me.position.y) > 600 || (e.sentence > 0 && (e.chat = getTranslation("kingjustice_" + e.sentence, ["King Justice"]).capitalize(), e.chatStartTime = game.time), e.sentence++, e.sentence > 3 && (e.sentence = -2));
}
function objectHandlerFunc_EXECUTIONER(e) {
  if (getDistance(e.position.x + e.width, e.position.y, game.me.position.x, game.me.position.y) > 600) return;
  let t;
  e.lastSentences || (e.lastSentences = []);
  let a = 0;
  do {
    t = Math.floor(20 * Math.random()) + 1, a++;
  } while (e.lastSentences.includes(t) && a < 50);
  e.lastSentences.push(t), e.lastSentences.length > 10 && e.lastSentences.shift(), e.chat = getTranslation("executioner_" + t).capitalize(), e.chatStartTime = game.time;
}
var askGiftBoxTime = 0;
function objectHandlerFunc_HALLOWEENGHOST(e) {
  game.me.getAllPositions().center.x > e.getAllPositions().center.x ? e.animation = "idle_right" : e.animation = "idle_left";
  var t = game.me.getAllPositions().center.x - e.getAllPositions().center.x, a = game.me.getAllPositions().center.y - e.getAllPositions().center.y, i = Math.sqrt(t * t + a * a);
  e.opacity = i < 500 ? abs(501 - i) / 500 : 0;
}
function objectHandlerFunc_STICK(e) {
  e.stickTo && !e.stickTo.deleted && (e.position.x = e.stickTo.getAllPositions().center.x - e.width / 2, e.position.y = e.stickTo.getAllPositions().center.y - e.height / 2);
}
function objectHandlerFunc_PET(e) {
  var t = e.owner;
  if (t.deleted || t.petID != e.petID) {
    if (t.killed || t.petID != e.petID && e.createTime + 100 < game.time) {
      var a = game.newObject(game.objectsDef.dust);
      a.width = e.width, a.height = e.width, a.animation = "standard", a.id = null, a.position.x = e.position.x + e.width / 2 - a.width / 2, a.position.y = e.position.y + e.height / 2 - a.height / 2, game.addObject(a);
    }
    return game.deleteObject(e), false;
  }
  if (e.interpolateSpeed = 0.12, e.moveSpeed.x = 0, e.moveSpeed.y = 0, e.victim) {
    var i = e.victim, n = i.getAllPositions();
    e.interpolateTo.x = n.center.x, e.interpolateTo.y = n.center.y, n.center.x > e.position.x + e.width / 2 ? e.animation = "flapping_right" : e.animation = "flapping_left", (game.time - e.attackTime > 1050 || i.deleted) && (e.victim = undefined);
  } else {
    var o = t.getAllPositions();
    if (t.inHide) var l = o.center; else {
      var r = t.petOffset.x * -t.direction;
      l = {x: o.center.x + r - e.width / 2, y: t.position.y + t.petOffset.y - e.height / 2};
    }
    if (game.isVisible(t, e, game.canvas.width / 2, game.canvas.height / 2) || (e.position.x = l.x, e.position.y = l.y), e.interpolateTo = l, o.center.x > e.position.x + e.width / 2) {
      let t = "flapping_right";
      e.emote && "pet_22" == e.name && (e.animationFrame % e.animations[e.animation].sprites.length != 0 && "blink_right" != e.animation && "blink_left" != e.animation || (t = "blink_right")), e.animation = t;
    } else {
      let t = "flapping_left";
      t = "flapping_left", e.emote && "pet_22" == e.name && (e.animationFrame % e.animations[e.animation].sprites.length != 0 && "blink_right" != e.animation && "blink_left" != e.animation || (t = "blink_left")), e.animation = t;
    }
  }
}
function objectHandlerFunc_NEEDBESYNCED(e) {
  if (e.syncTick < syncTick) return game.deleteObject(e), false;
}
function objectHandlerFunc_MOVEABLE(e) {
  if (e.syncTick < syncTick && e.type != objectType.PET) return game.deleteObject(e), false;
  1 != e.ignoreMovementReduction && (e.inWater ? "duck" == e.name || "pelican" == e.name || "seagull" == e.name ? (e.moveSpeed.y -= 5 * e.moveSpeed.y * game.deltaTime, e.moveSpeed.x -= 0.5 * e.moveSpeed.x * game.deltaTime) : (e.moveSpeed.y -= 10 * e.moveSpeed.y * game.deltaTime, e.moveSpeed.x -= 2 * e.moveSpeed.x * game.deltaTime) : e.inSwamp ? "swampMonster" == e.name ? (e.moveSpeed.y -= 10 * e.moveSpeed.y * game.deltaTime, e.moveSpeed.x -= 2 * e.moveSpeed.x * game.deltaTime) : (e.moveSpeed.y -= 25 * e.moveSpeed.y * game.deltaTime, e.moveSpeed.x -= 10 * e.moveSpeed.x * game.deltaTime) : e.inLava ? true === e.lavaResistance ? (e.moveSpeed.y -= 15 * e.moveSpeed.y * game.deltaTime, e.moveSpeed.x -= 3 * e.moveSpeed.x * game.deltaTime) : (e.moveSpeed.y -= 25 * e.moveSpeed.y * game.deltaTime, e.moveSpeed.x -= 15 * e.moveSpeed.x * game.deltaTime) : e.inToxic && (e.moveSpeed.y -= 10 * e.moveSpeed.y * game.deltaTime, e.moveSpeed.x -= 2 * e.moveSpeed.x * game.deltaTime)), e.inSpace && true !== e.spaceResistance && (e.moveSpeed.y += 0.7 * game.gravity * e.inSpaceScale / 100 * game.deltaTime), e.inWater = false, e.inToxic = false, e.inSwamp = false, e.inLava = false, e.inSpace = false, e.inEctoplasm = false, e.inSafeZone = false, e.inArenaZone = false, e.inBattleRoyaleZone = false, e.ignoreTiles > 0 && (e.ignoreTiles -= 1);
}
function collisionOnObtain_WATER(e, t, a) {
  if (t.moveable && game.time - t.lastInFluidTime > 500) {
    var i = Math.max(abs(t.moveSpeed.x), abs(t.moveSpeed.y)) / 800;
    if (i > 1 && (i = 1), i > 0.4) {
      i *= 2;
      var n = game.newObject(game.objectsDef.water_splash);
      n.id = null, n.height = n.height * (t.width * (1 - (t.colliderRectangleOffset.left + t.colliderRectangleOffset.right)) / n.width) * i, n.width = t.width * (1 - (t.colliderRectangleOffset.left + t.colliderRectangleOffset.right)) * i, n.position.x = t.position.x + t.width / 2 - n.width / 2, n.position.y = e.position.y + e.height * (1 - e.colliderRectangleOffset.top), game.addObject(n);
    }
  }
  return t.lastInFluidTime = game.time, t.inWater = true, false;
}
function collisionOnObtain_TOXICWATER(e, t, a) {
  if (t.moveable && game.time - t.lastInFluidTime > 500) {
    var i = Math.max(abs(t.moveSpeed.x), abs(t.moveSpeed.y)) / 800;
    if (i > 1 && (i = 1), i > 0.2) {
      var n = game.newObject(game.objectsDef.bubble_splash);
      n.id = null, n.height = n.height * (t.width * (1 - (e.colliderRectangleOffset.left + e.colliderRectangleOffset.right)) / n.width) * i, n.width = t.width * (1 - (e.colliderRectangleOffset.left + e.colliderRectangleOffset.right)) * i, n.position.x = t.position.x + t.width / 2 - n.width / 2, n.position.y = e.position.y + e.height * (1 - e.colliderRectangleOffset.top), game.addObject(n);
    }
  }
  return t.lastInFluidTime = game.time, t.inToxic = true, false;
}
function collisionOnObtain_LAVA(e, t, a) {
  if (t.moveable && game.time - t.lastInFluidTime > 500) {
    var i = Math.max(abs(t.moveSpeed.x), abs(t.moveSpeed.y)) / 800;
    if (i > 1 && (i = 1), i > 0.2) {
      i *= 0.85;
      var n = game.newObject(game.objectsDef.lava_splash);
      n.id = null, n.height = n.height * (t.width * (1 - (e.colliderRectangleOffset.left + e.colliderRectangleOffset.right)) / n.width) * i, n.width = t.width * (1 - (e.colliderRectangleOffset.left + e.colliderRectangleOffset.right)) * i, n.position.x = t.position.x + t.width / 2 - n.width / 2, n.position.y = e.position.y + e.height * (1 - e.colliderRectangleOffset.top), game.addObject(n);
    }
  }
  return t.lastInFluidTime = game.time, t.inLava = true, false;
}
var brJoinMessageLastTime = 0;
function collisionOnObtain_BATTLEROYALEPORTAL(e, t, a) {
  if (!joinedGame || imDead) return false;
  if (t != game.me) return false;
  if ("active" != e.animation) return false;
  if ("grimReaper" != game.me.name) return textMsg(lang.only_grim_reapers_can_join_battle_royale, "red", 1e3), false;
  if (game.me.level < 15) return textMsg(lang.battle_royale_min_level, "red", 1e3), false;
  if (game.time - brJoinMessageLastTime > 1e3) {
    if (document.getElementById("br-join-popup")) return;
    let e = document.createElement("div");
    e.style.position = "fixed", e.style.top = "0", e.style.left = "0", e.style.width = "100vw", e.style.height = "100vh", e.style.background = "rgba(0,0,0,0.5)", e.style.display = "flex", e.style.alignItems = "center", e.style.justifyContent = "center", e.style.zIndex = "9999";
    let t = document.createElement("div");
    t.id = "br-join-popup", t.style.background = "#fff", t.style.padding = "32px 24px", t.style.borderRadius = "12px", t.style.boxShadow = "0 2px 16px rgba(0,0,0,0.2)", t.style.textAlign = "center", t.style.minWidth = "320px";
    let a = document.createElement("div");
    a.innerHTML = getTranslation("ask_join_battle_royale", "20"), a.style.marginBottom = "24px", a.style.fontSize = "18px", a.style.color = "#222";
    let i = document.createElement("button");
    i.textContent = capitalizeFirstLetter(lang.yes), i.style.margin = "0 12px", i.style.padding = "8px 24px", i.style.fontSize = "16px", i.style.background = "#28a745", i.style.color = "#fff", i.style.border = "none", i.style.borderRadius = "6px", i.style.cursor = "pointer";
    let n = document.createElement("button");
    n.textContent = capitalizeFirstLetter(lang.no), n.style.margin = "0 12px", n.style.padding = "8px 24px", n.style.fontSize = "16px", n.style.background = "#dc3545", n.style.color = "#fff", n.style.border = "none", n.style.borderRadius = "6px", n.style.cursor = "pointer", i.onclick = function () {
      e.remove(), gameServer.emit("game:joinBR"), brJoinMessageLastTime = game.time + 5e3;
    }, n.onclick = function () {
      e.remove();
    }, t.appendChild(a), t.appendChild(i), t.appendChild(n), e.appendChild(t), document.body.appendChild(e);
  }
  return brJoinMessageLastTime = Math.max(brJoinMessageLastTime, game.time), false;
}
function collisionOnObtain_PARCHMENTINFO(e, t, a) {
  let i = e.customData;
  if (t != game.me) return false;
  if (!i) return false;
  if (imDead) return false;
  if (e.requestTime && game.time - e.requestTime < 1e3) return false;
  if (document.getElementById("parchment-info-popup")) return false;
  if (e._parchmentMustBeAway) {
    if (!e._parchmentLastCollisionTime) return e._parchmentLastCollisionTime = game.time, false;
    if (!(game.time - e._parchmentLastCollisionTime >= 2e3)) return e._parchmentLastCollisionTime = game.time, false;
    e._parchmentMustBeAway = false, e._parchmentLastCollisionTime = null;
  }
  if (e._parchmentActive) return e._parchmentLastTouch = game.time, false;
  e._parchmentActive = true, e._parchmentStart = game.time, e._parchmentLastTouch = game.time;
  const n = 2300;
  let o = document.createElement("div");
  o.id = "parchment-info-overlay", Object.assign(o.style, {position: "fixed", inset: "0", display: "none", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.6)", zIndex: "10000", padding: "20px"});
  let l = document.createElement("div");
  l.id = "parchment-info-popup", Object.assign(l.style, {background: "#fff", color: "#111", fontFamily: "inherit", fontSize: "16px", lineHeight: "1.45", maxWidth: "1000px", width: "90%", maxHeight: "90vh", overflow: "hidden", padding: "0", borderRadius: "12px", boxShadow: "0 10px 40px rgba(0,0,0,0.5)", position: "relative", display: "flex", flexDirection: "column", transform: "scale(0.96)", opacity: "0", transition: "all 0.3s ease-out"});
  let r = document.createElement("button");
  r.textContent = "x", Object.assign(r.style, {position: "absolute", right: "5px", top: "0px", background: "transparent", border: "none", color: "#ff1515", fontSize: "34px", cursor: "pointer", lineHeight: "1", zIndex: "10001", textShadow: "-1px -1px 2px rgba(0,0,0,0.8), 0 -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), 1px 0 2px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8), -1px 0 2px rgba(0,0,0,0.8)"});
  let m = document.createElement("iframe");
  function s() {
    o && o.parentNode && o.parentNode.removeChild(o), e._parchmentMustBeAway = true, e._parchmentLastCollisionTime = game.time, e._parchmentAwaySince = null, document.removeEventListener("keydown", c);
  }
  function c(e) {
    "Escape" === e.key && s();
  }
  m.id = "parchment-info-iframe", m.src = siteUrl + "/api/parchment-info/" + encodeURIComponent(i) + "?lang=" + userLang + "&cdn=" + encodeURIComponent(cdnServer), Object.assign(m.style, {width: "100%", height: "80vh", border: "none", borderRadius: "8px", background: "#f0e7d1", flex: "1 1 auto"}), m.setAttribute("sandbox", "allow-same-origin allow-scripts allow-forms allow-popups allow-autoplay"), m.setAttribute("allow", "autoplay"), l.appendChild(r), l.appendChild(m), o.appendChild(l), document.body.appendChild(o), r.onclick = s, document.addEventListener("keydown", c), o.addEventListener("click", e => {
    e.target === o && s();
  });
  let d = document.createElement("div");
  d.id = "parchment-progress-overlay", Object.assign(d.style, {position: "fixed", inset: "0", display: "flex", alignItems: "center", justifyContent: "center", background: "radial-gradient(circle at center, rgba(255,255,240,0.25), rgba(0,0,0,0.4))", zIndex: "10000", backdropFilter: "blur(3px)", pointerEvents: "none", animation: "pulseBg 2.4s ease-in-out infinite"});
  let g = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  g.setAttribute("viewBox", "0 0 100 100"), Object.assign(g.style, {width: "120px", height: "120px", transform: "rotate(-90deg)"});
  let p = document.createElementNS("http://www.w3.org/2000/svg", "defs"), f = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
  f.setAttribute("id", "goldGradient"), f.setAttribute("x1", "0%"), f.setAttribute("y1", "0%"), f.setAttribute("x2", "100%"), f.setAttribute("y2", "0%");
  let h = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  h.setAttribute("offset", "0%"), h.setAttribute("stop-color", "#f6d365");
  let y = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  y.setAttribute("offset", "100%"), y.setAttribute("stop-color", "#fda085"), f.appendChild(h), f.appendChild(y), p.appendChild(f), g.appendChild(p);
  let b = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  b.setAttribute("cx", "50"), b.setAttribute("cy", "50"), b.setAttribute("r", "42"), Object.assign(b.style, {fill: "none", stroke: "rgba(255,255,200,0.15)", strokeWidth: "6"});
  let u = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  u.setAttribute("cx", "50"), u.setAttribute("cy", "50"), u.setAttribute("r", "42"), Object.assign(u.style, {fill: "none", stroke: "url(#goldGradient)", strokeWidth: "6", strokeLinecap: "round", strokeDasharray: 2 * Math.PI * 42, strokeDashoffset: 2 * Math.PI * 42, filter: "drop-shadow(0 0 6px rgba(255,200,80,0.8))"}), g.appendChild(b), g.appendChild(u);
  let O = document.createElement("div");
  Object.assign(O.style, {position: "absolute", inset: "10px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,220,0.6), rgba(255,255,200,0.0))", filter: "blur(8px)", animation: "pulseGlow 1.5s ease-in-out infinite"});
  let x = document.createElement("div");
  Object.assign(x.style, {position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", width: "120px"});
  let S = document.createElement("div");
  Object.assign(S.style, {position: "relative", width: "120px", height: "120px"}), S.appendChild(O), S.appendChild(g);
  let _ = document.createElement("div");
  if (_.textContent = lang.reading_parchment, Object.assign(_.style, {fontSize: "14px", color: "#fef7d1", textShadow: "0 0 6px rgba(0,0,0,0.8)", fontFamily: "serif", letterSpacing: "0.5px", textAlign: "center"}), x.appendChild(S), x.appendChild(_), d.appendChild(x), document.body.appendChild(d), !document.getElementById("parchment-pretty-styles")) {
    let e = document.createElement("style");
    e.id = "parchment-pretty-styles", e.textContent = "\n			@keyframes pulseGlow { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; transform: scale(1.05); } }\n			@keyframes pulseBg { 0%, 100% { opacity: 1; } 50% { opacity: 0.85; } }\n			@keyframes fadeOut { to { opacity: 0; transform: scale(1.1); } }\n			@keyframes fadeIn { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }\n		", document.head.appendChild(e);
  }
  const T = 2 * Math.PI * 42;
  let v = setInterval(() => {
    let t = game.time - e._parchmentStart, a = Math.min(t / n, 1);
    u.style.strokeDashoffset = T * (1 - a);
  }, 30), w = setInterval(() => {
    if (!game.isCollision2Rectangles(e, game.me)) return void E(false);
    game.time - e._parchmentStart >= n && E(true);
  }, 23);
  function E(t) {
    clearInterval(w), clearInterval(v), d && (d.style.animation = "fadeOut 0.5s ease forwards", setTimeout(() => {
      d && d.parentNode && d.parentNode.removeChild(d);
    }, 500), e._parchmentActive = false, e.requestTime = game.time, t ? (o.style.display = "flex", setTimeout(() => {
      l.style.opacity = "1", l.style.transform = "scale(1)";
    }, 10)) : o && o.parentNode && o.parentNode.removeChild(o));
  }
  return false;
}
function objectOnScreenHandlerFunc_POTION(e) {
  e.position.y = e.originalPosition.y + 4 * Math.sin(game.time / 500);
}
function objectOnScreenHandlerFunc_PARCHMENTINFO(e) {
  e.position.y = e.originalPosition.y + 4 * Math.sin(game.time / 500);
}
function objectHandlerFunc_LOCKMOVESPEEDX(e) {
  e.groundedBottom && abs(e.moveSpeed.x) < e.lockSpeedX && (e.moveSpeed.x = e.lockSpeedX * e.moveDirection);
}
function collisionOnObtain_HIDE(e, t, a) {
  if (t.type == objectType.PLAYER) return false;
}
function collisionOnObtain_SPACEBOTTOM(e, t, a) {
  var i = e.height / (e.position.y + e.height - t.position.y);
  return (i *= 10) > 100 && (i = 100), t.inSpace = true, t.inSpaceScale = i, false;
}
function collisionOnTrigger_SAW(e, t, a) {
  if (!t.moveable) return false;
}
function collisionOnTrigger_PIG(e, t, a) {
  if (a == game.collisionOn.BOTTOM && null != e.moveRangeX) {
    var i = 100, n = i * (380 / game.gravity);
    e.position.x <= e.moveRangeX.from + n ? e.moveSpeed.x = i : e.position.x >= e.moveRangeX.to - e.width - n ? e.moveSpeed.x = -100 : abs(e.moveSpeed.x) != i && (e.moveSpeed.x = i * (e.moveSpeed.x >= 0 ? 1 : -1)), e.moveSpeed.y = 380;
  }
}
function collisionOnTrigger_IGNOREFOOD(e, t, a) {
  if (t.type == objectType.FOOD && !t.moveable) return false;
}
function collisionOnTrigger_TOMBSTONE(e, t, a) {
  if (t.moveable) return false;
  1 != e.startedAnimation && a == game.collisionOn.BOTTOM && e.moveSpeed.y <= 0 && e.animations.start && game.objectsDef[e.name].lazySpritesLoaded && (e.startedAnimation = true, e.animationFrame = 0, e.animation = "start");
}
function collisionOnObtain_TOMBSTONE(e, t, a) {
  if (t.moveable) return false;
}
function collision_VOLLEYBALL(e, t, a) {
  if (t.type == objectType.PLAYER && "grimReaper" != t.name && "ghostlyReaper" != t.name && "pumpkinGhost" != t.name) return false;
}
function objectOnScreenHandlerFunc_LAVA(e) {
  if (1 != e.cantSpawnBubble && 1 == randomInteger(1, 20)) {
    var t = game.newObject(game.objectsDef.lava_bubble);
    t.id = null, t.position.x = e.position.x + e.width / 2 - t.width / 2 + 3, t.position.y = e.position.y + e.height - 1;
    for (var a = game.hashMap.retrieve(t), i = 0; i < a.length; i++) {
      var n = a[i];
      if (n.type == objectType.TILE && n != e && game.isCollision2Rectangles(t, n)) return void (0 == n.moveable && (e.cantSpawnBubble = true));
    }
    game.addObject(t);
  }
}
game.skills.flowerLove.func = skill_FLOWERLOVE;
