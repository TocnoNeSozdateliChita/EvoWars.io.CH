var user = {};
var loadedScripts = [];
var userDataResult;
function afterSuccessGetUserData(e) {
  startCharacter = user.level;
  loadAvatarByLevel($("#avatar"), startCharacter);
  reloadUserPanel();
  reloadDailyQuests(e.dailyQuests);
  showPopups(e.popups);
  reloadImages();
  generateCharactersSelect();
  reloadEmotes();
  afterUserDataLoad(e);
  changeCharacter(0);
  reloadServerSelect();
  translatePage();
  refreshFriends();
  $(".selectServer").trigger("change");
  if (1 == e.showRules) {
    showRules();
  }
  if (user.loadFiles) {
    for (var t = 0; t < user.loadFiles.length; t++) {
      var a = user.loadFiles[t];
      if (-1 == loadedScripts.indexOf(a)) {
        loadedScripts.push(a);
        var s = document.createElement("script");
        s.src = cdnServer + a;
        document.head.appendChild(s);
      }
    }
  }
}
function loadUserData(e = true) {
  $.ajax({
    type: "GET",
    url: siteUrl + "api/userData.php",
    dataType: "json",
    xhrFields: {
      withCredentials: true
    },
    success: function (t) {
      if (t.success) {
        userDataResult = t;
        user = t.user;
        serversList = t.servers;
        if (e) {
          afterSuccessGetUserData(t);
        }
      } else {
        var a = t.msg;
        var s = a;
        if (undefined !== lang[s]) {
          s = lang[a];
        }
        if (isJsonString(a)) {
          a = JSON.parse(a);
          s = getTranslation("account_banned_bad_nickname", [a.nickname, a.date + " CET"]) + " ";
          if ("0000-00-00 00:00:00" == a.until) {
            s += lang.account_banned_perm;
          } else {
            s += getTranslation("account_unbanned_on", [a.until + " CET"]);
          }
        }
        if (t.banned) {
          newPopup(0, 6, s);
        } else {
          newPopup(0, 8, s);
        }
        loadUserData();
      }
    }
  });
}
function getUserRevivalTokens(e) {
  $.ajax({
    type: "GET",
    url: siteUrl + "api/getRevivalBalance.php",
    dataType: "json",
    xhrFields: {
      withCredentials: true
    },
    success: function (t) {
      if (t.success) {
        e(t);
      }
    }
  });
}
var popupsFirstTime = true;
function showPopups(e) {
  for (var t = 0; t < e.length; t++) {
    var a = e[t];
    newPopup(a.id, a.type, a.parm);
  }
  popupsFirstTime = false;
}
function reloadEmotes() {
  $(".emotesMenu [data-emote-id]").each(function () {
    $(this).html("<img src=\"" + cdnServer + "emotes/" + $(this).data("emote-id") + ".png\">");
  });
  shortcutsManager.reload();
}
function reloadDailyQuests(e) {
  var t = "";
  var a = [];
  a.QUEST_TYPE_KILL = 1;
  a.QUEST_TYPE_EVOLVE = 2;
  a.QUEST_TYPE_PLAYTIME = 3;
  a.QUEST_TYPE_REACH = 4;
  a.QUEST_TYPE_EAT = 5;
  var s = 0;
  for (var n = 1; n <= 3; n++) {
    var i = e[n];
    if (undefined === i.startTime) {
      var o = "";
      switch (i.type) {
        case a.QUEST_TYPE_KILL:
          if ("player" == i.what) {
            o += "<span class='title' data-translate='kill_x_players' data-translate-vars='[" + i.amount + "]'></span><br><img class='object-image' data-trim-background=true data-name='skull'>";
          } else {
            o += "<span class='title' data-translate='kill_x' data-translate-vars='[" + i.amount + "]'></span><br><img class='object-image' data-trim-background=true data-name='" + i.what + "'>";
          }
          break;
        case a.QUEST_TYPE_EVOLVE:
          o += "<span class='title' data-translate='evolve_x_times' data-translate-vars='[" + i.amount + "]'></span><br><img class='object-image' src='" + cdnServer + "images/lvlup.png'>";
          break;
        case a.QUEST_TYPE_PLAYTIME:
          o += "<span class='title' data-translate='play_for_x_minutes' data-translate-vars='[" + i.amount + "]'></span><br><img class='object-image' src='" + cdnServer + "images/timer.png'>";
          break;
        case a.QUEST_TYPE_REACH:
          o += "<span class='title' data-translate='evolve_to' data-translate-vars='[\"\"]'></span><br><img class='object-image' data-trim-background=true data-name='" + i.what + "'>";
          break;
        case a.QUEST_TYPE_EAT:
          o += "<span class='title' data-translate='eat_x' data-translate-vars='[" + i.amount + "]'></span><br><img class='object-image' data-trim-background=true data-name='" + i.what + "'>";
      }
      var r = i.progress / i.amount * 100;
      var l = "";
      if (r < 100) {
        l = "disabled";
      }
      if (3 != n || user.premium) {
        t += "<div class=\"daily-quest\" data-id=\"" + i.id + "\">" + o + "<div class=\"progressBar\" style=\"background:linear-gradient(90deg, " + (r >= 100 ? "#00f513" : "#ff9059") + " " + r + "%, #e6e6e6 " + r + "%)\">" + i.progress + "/" + i.amount + "</div>+" + i.reward + " exp<button class=\"claim\" onClick=\"claimDailyQuest(" + i.id + ")\" " + l + ">&#127873;</button></div>";
        if ("" == l) {
          s++;
        }
      } else {
        t += "<div class=\"daily-quest\" data-id=\"" + i.id + "\">" + o + "<div class=\"progressBar\" style=\"background:linear-gradient(90deg, " + (r >= 100 ? "#00f513" : "#ff9059") + " " + r + "%, #e6e6e6 " + r + "%)\">" + i.progress + "/" + i.amount + "</div>+" + i.reward + " exp<button class=\"claim\" onClick=\"openShop()\" " + l + ">&#128722;</button></div>";
      }
    } else {
      t += "<div class=\"daily-quest\"><span data-translate=\"new_quest_in\"></span><br><span class=\"timer\" data-timer=\"" + i.startTime + "\" data-timer-action=\"loadUserData()\"></span></div>";
    }
  }
  if (s > 0) {
    $("#quests-button .attention").show();
  } else {
    $("#quests-button .attention").hide();
  }
  $(".daily-quests").html(t);
  timers();
}
function reloadServerSelect() {
  var e = document.getElementById("selectServer");
  e.innerHTML = "";
  var t = 0;
  for (var a = 0; a < serversList.length; a++) {
    var s = serversList[a];
    var n = document.createElement("option");
    n.value = s.ip + ":" + s.port;
    n.innerHTML = s.name + " (" + s.players + "/" + s.maxPlayers + ")";
    if (!user.premium && s.players >= s.maxPlayers && true !== s.connected) {
      n.disabled = true;
    }
    e.appendChild(n);
    t += s.players;
  }
  e.innerHTML += "<option disabled data-translate=\"total_players\" data-translate-vars=\"[" + t + "]\"></option>";
  translate($("[data-translate='total_players']"));
}
function reloadLanguageSelect(e) {
  var t = document.getElementById("selectLanguage");
  t.innerHTML = "";
  for (var a = 0; a < e.length; a++) {
    var s = e[a];
    var n = document.createElement("option");
    n.value = s.code;
    n.innerHTML = s.name;
    t.appendChild(n);
  }
}
function reloadUserPanel() {
  var e = user.loginDisplay;
  e += " <span style='font-size:85%;color:#949494;position:relative;bottom:1px;' onClick='copyToClipboard(" + user.id + ");'>#" + user.id + "</span>";
  $("#uiContainer > div.top div.username").html("<span>" + e + "</span>");
  $("#uiContainer > div.top div.level").html("<span data-translate=\"level\"></span> " + user.level);
  $("#uiContainer > div.top .accountExperienceBar .exp").text(user.experience.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "/" + user.experienceNextLevel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
  $("#uiContainer > div.top .accountExperienceBar .bar").css({
    width: user.experiencePercents + "%"
  });
  $("#uiContainer > div.top div.exp-bonus .value").html(user.bonusExp + "%");
  $("#uiContainer > div.top div.exp-bonus .level-bonus").html(10 * user.level + "%");
  $("#uiContainer > div.top div.exp-bonus .premium-bonus").html((undefined !== user.premiumBonus ? user.premiumBonus : 0) + "%");
  if (undefined !== user.specialCodeBonus && user.specialCodeBonus > 0) {
    $("#uiContainer > div.top div.exp-bonus .code-bonus").html(user.specialCodeBonus + "%<br><br><span style=\"color: #fff700\"><span data-translate=\"code_valid_until\" data-translate-vars='[\"" + user.specialCode + "\",\"<br>" + user.specialCodeValid + "\"]'></span></span>");
    $("#uiContainer > div.top .bonus-code").css({
      filter: "grayscale(100%)",
      opacity: "0.5"
    });
  } else {
    $("#uiContainer > div.top div.exp-bonus .code-bonus").html("0%");
    $("#uiContainer > div.top .bonus-code").css({
      filter: "",
      opacity: "1"
    });
  }
  if (user.guest) {
    $("#uiContainer > div.top .login-logout").html("<span data-translate=\"login\" onClick='$(\"#login-popup\").fadeIn();$(\".popups>.overlay\").fadeIn();hidePokiAd()'></span>");
    $("#uiContainer > div.top .login-logout").off("click");
    $("#logout-all-button").hide();
  } else {
    $("#uiContainer > div.top .login-logout").html("<span data-translate=\"logout\"></span>");
    $("#uiContainer > div.top .login-logout").off("click").click(function () {
      logout();
    });
    $("#logout-all-button").show();
  }
  $(".premium-points .amount").html(user.premiumPoints);
  if (0 == user.guest && 0 == user.accountType) {
    $("#change-password-button").show();
    $("#change-email-button").show();
  } else {
    $("#change-password-button").hide();
    $("#change-email-button").hide();
  }
  if (user.newEmail) {
    $("#change-email-button").hide();
    $("#change-email-form").hide();
    $("#change-email-confirm").show();
    $("[id=\"settings-button\"]").html("<div class='attention'></div>");
    if (Date.parse(user.newEmailDate) / 1e3 <= serverTime) {
      $("#change-email-confirm-msg").html("<span data-translate=\"change_email_confirm_msg\" data-translate-vars='[\"" + user.newEmail + "\"]' style=\"color:green\"></span>");
      $("#change-email-confirm .orange-button").show();
    } else {
      $("#change-email-confirm-msg").html("<span data-translate=\"change_email_warning\" data-translate-vars='[\"" + user.newEmail + "\",\"" + user.newEmailDate + " CET\"]' style=\"color:red\"></span>");
      $("#change-email-confirm .orange-button").hide();
    }
  } else {
    $("#change-email-confirm").hide();
  }
  $("#uiContainer > div.top .user-panel .avatar").on("click", function () {
    getUserProfile(user.id, user.profileKey);
  });
}
function loadAvatarByLevel(e, t) {
  if (t < 0) {
    t = 0;
  }
  if (t >= Object.keys(expTable).length - 1) {
    t = Object.keys(expTable).length - 2;
  }
  var a = Object.keys(expTable)[t];
  var s = game.objectsDef[a].animation;
  var n = game.objectsDef[a].animations[s].sprites[0];
  var i = game.sprites[n];
  $(e).attr("src", trimImageBackground(i));
}
function reloadImages() {
  $(".object-image").each(function () {
    var e = $(this).data("name");
    if (undefined === e) {
      return true;
    }
    var t = game.objectsDef[e].animation;
    var a = game.objectsDef[e].animations[t].sprites[0];
    var s = game.sprites[a];
    if (1 == $(this).data("trim-background")) {
      $(this).attr("src", trimImageBackground(s));
    } else if (s instanceof HTMLCanvasElement || s.toURL) {
      if (undefined === s.toURL) {
        s.toURL = s.toDataURL();
      }
      $(this).attr("src", s.toURL);
    } else if (-1 !== s.src.indexOf("blob:")) {
      var n = document.createElement("canvas");
      n.width = s.width;
      n.height = s.height;
      n.getContext("2d").drawImage(s, 0, 0);
      var i = n.toDataURL("image/png");
      $(this).attr("src", i);
      s.toURL = i;
    } else {
      $(this).attr("src", s.src);
    }
  });
  $(".character-image").each(function () {
    var e = $(this).data("id");
    if (e < 0) {
      e = 0;
    }
    if (e >= Object.keys(expTable).length - 1) {
      e = Object.keys(expTable).length - 2;
    }
    var t = Object.keys(expTable)[e];
    if (undefined === t) {
      return true;
    }
    var a = game.objectsDef[t].animation;
    var s = game.objectsDef[t].animations[a].sprites[0];
    var n = game.sprites[s];
    if (n instanceof HTMLCanvasElement || n.toURL) {
      if (undefined === n.toURL) {
        n.toURL = n.toDataURL();
      }
      $(this).attr("src", n.toURL);
    } else if (-1 !== n.src.indexOf("blob:")) {
      var i = document.createElement("canvas");
      i.width = n.width;
      i.height = n.height;
      i.getContext("2d").drawImage(n, 0, 0);
      var o = i.toDataURL("image/png");
      $(this).attr("src", o);
      n.toURL = o;
    } else {
      $(this).attr("src", n.src);
    }
  });
  $(".sprite-image").each(function () {
    var e = $(this).data("name");
    var t = this;
    var a = function () {
      var a = game.sprites[e];
      if (1 == $(t).data("trim-background")) {
        $(t).attr("src", trimImageBackground(a));
      } else if (a instanceof HTMLCanvasElement || a.toURL) {
        if (undefined === a.toURL) {
          a.toURL = a.toDataURL();
        }
        $(t).attr("src", a.toURL);
      } else if (-1 !== a.src.indexOf("blob:")) {
        var s = document.createElement("canvas");
        s.width = a.width;
        s.height = a.height;
        s.getContext("2d").drawImage(a, 0, 0);
        var n = s.toDataURL("image/png");
        $(t).attr("src", n);
        a.toURL = n;
      } else {
        $(t).attr("src", a.src);
      }
    };
    if (undefined !== game.spritesToDownload[e]) {
      var s = game.spritesToDownload[e];
      game.downloadSprite(e, s.url, s.params, a);
    } else {
      a();
    }
  });
}
function registerAccount() {
  var e = $("#registerUsername").val();
  var t = $("#registerEmail").val();
  var a = $("#registerPassword").val();
  var s = $("#registerRePassword").val();
  $.ajax({
    type: "POST",
    data: {
      login: e,
      email: t,
      password: a,
      repassword: s
    },
    url: siteUrl + "api/registerAccount.php",
    dataType: "json",
    xhrFields: {
      withCredentials: true
    },
    success: function (e) {
      if (e.success) {
        $("#register-popup").fadeOut();
        $(".popups>.overlay").fadeOut();
        loadUserData();
        $("#registerUsername").val("");
        $("#registerEmail").val("");
        $("#registerPassword").val("");
        $("#registerRePassword").val("");
        $("#registerBox .loginButton").hide();
      } else {
        var t = lang[e.msg] || e.msg;
        $("#register-msg").html("<font color=red>" + t + "</font>");
      }
    }
  });
}
function gLoginByToken(e) {
  $.ajax({
    type: "POST",
    data: {
      access_token: e
    },
    url: siteUrl + "glogin",
    dataType: "json",
    xhrFields: {
      withCredentials: true
    },
    success: function (e) {
      if (e.success) {
        $("#login-popup").fadeOut();
        $(".popups>.overlay").fadeOut();
        loadUserData();
      }
    }
  });
}
function fbLoginByToken(e) {
  $.ajax({
    type: "POST",
    data: {
      access_token: e
    },
    url: siteUrl + "fblogin",
    dataType: "json",
    xhrFields: {
      withCredentials: true
    },
    success: function (e) {
      if (e.success) {
        $("#login-popup").fadeOut();
        $(".popups>.overlay").fadeOut();
        loadUserData();
      }
    }
  });
}
function changePassword() {
  var e = $("#changePasswordCurrent").val();
  var t = $("#changePasswordNew").val();
  var a = $("#changeRePassword").val();
  $.ajax({
    type: "POST",
    data: {
      cpassword: e,
      password: t,
      repassword: a
    },
    url: siteUrl + "api/changePassword.php",
    dataType: "json",
    xhrFields: {
      withCredentials: true
    },
    success: function (e) {
      if (e.success) {
        $("#changePasswordCurrent").val("");
        $("#changePasswordNew").val("");
        $("#changeRePassword").val("");
        $("#change-password-msg").html("<font color=gree>" + lang.password_changed + "</font>");
      } else {
        var t = lang[e.msg] || e.msg;
        $("#change-password-msg").html("<font color=red>" + t + "</font>");
      }
    }
  });
}
function changeEmail() {
  var e = $("#changeEmailCurrentPassword").val();
  var t = $("#changeEmailNew").val();
  $.ajax({
    type: "POST",
    data: {
      cpassword: e,
      newEmail: t
    },
    url: siteUrl + "api/changeEmail.php",
    dataType: "json",
    xhrFields: {
      withCredentials: true
    },
    success: function (e) {
      if (e.success) {
        $("#changeEmailCurrentPassword").val("");
        $("#changeEmailNew").val("");
        $("#settings-popup").hide();
        popupsFirstTime = true;
        loadUserData();
        $("#change-email-msg").html("");
      } else {
        var t = lang[e.msg] || e.msg;
        $("#change-email-msg").html("<font color=red>" + t + "</font>");
      }
    }
  });
}
function changeDisplayName() {
  var e = $("#changeDisplayName").val();
  $.ajax({
    type: "POST",
    data: {
      name: e
    },
    url: siteUrl + "api/changeDisplayName.php",
    dataType: "json",
    xhrFields: {
      withCredentials: true
    },
    success: function (e) {
      if (e.success) {
        $("#changeDisplayName").val("");
        $("#change-display-name-msg").html("<font color=gree>" + lang.display_name_changed + "</font>");
        loadUserData();
      } else {
        var t = lang[e.msg] || e.msg;
        $("#change-display-name-msg").html("<font color=red>" + t + "</font>");
      }
    }
  });
}
function confirmChangeEmail() {
  $.ajax({
    type: "POST",
    url: siteUrl + "api/confirmChangeEmail.php",
    dataType: "json",
    xhrFields: {
      withCredentials: true
    },
    success: function (e) {
      loadUserData();
      if (e.success) {
        $("#settings-popup").hide();
        newPopup(0, 8, lang.change_email_success);
      }
    }
  });
}
function cancelChangeEmail() {
  $.ajax({
    type: "POST",
    url: siteUrl + "api/cancelChangeEmail.php",
    dataType: "json",
    xhrFields: {
      withCredentials: true
    },
    success: function (e) {
      loadUserData();
    }
  });
}
function login() {
  var e = $("#loginUsername").val();
  var t = $("#loginPassword").val();
  $.ajax({
    type: "POST",
    data: {
      login: e,
      password: t
    },
    url: siteUrl + "api/login.php",
    dataType: "json",
    xhrFields: {
      withCredentials: true
    },
    success: function (e) {
      if (e.success) {
        $("#login-popup").fadeOut();
        $(".popups>.overlay").fadeOut();
        popupsFirstTime = true;
        loadUserData();
        $("#loginUsername").val("");
        $("#loginPassword").val("");
      } else {
        var t = lang[e.msg] || e.msg;
        $("#login-msg").html("<font color=#ff2323>" + t + "</font>");
      }
    }
  });
}
function logout() {
  $.ajax({
    type: "POST",
    url: siteUrl + "api/logout.php",
    dataType: "json",
    xhrFields: {
      withCredentials: true
    },
    success: function (e) {
      if (e.success) {
        loadUserData();
      }
    }
  });
}
function logoutAll() {
  $.ajax({
    type: "POST",
    url: siteUrl + "api/logoutAll.php",
    dataType: "json",
    xhrFields: {
      withCredentials: true
    },
    success: function (e) {
      if (e.success) {
        loadUserData();
      }
    }
  });
}
function claimDailyQuest(e) {
  $.ajax({
    type: "POST",
    data: {
      id: e
    },
    url: siteUrl + "api/claimDailyQuest.php",
    dataType: "json",
    xhrFields: {
      withCredentials: true
    },
    success: function (t) {
      if (t.success) {
        $(".accountExperienceBar .exp").text(t.newExperience + "/" + t.experienceToLevel);
        $(".accountExperienceBar .bar").css({
          transition: "width 1.5s ease-out",
          width: t.experiencePercent + "%"
        });
        if (t.refresh) {
          setTimeout(loadUserData, 2e3);
        }
        $(".daily-quest[data-id=\"" + e + "\"]").css({
          opacity: 0
        });
        $(".daily-quest[data-id=\"" + e + "\"]").html("<br>" + lang.reward_gained);
        $(".daily-quest[data-id=\"" + e + "\"]").css({
          transition: "opacity 2s linear",
          opacity: 1
        });
        $("#quests-button .attention").hide();
      }
    }
  });
}
var lockButton = false;
function buyPremium(e) {
  if (!lockButton) {
    if (1 == confirm(getTranslation("are_you_sure_buy"))) {
      lockButton = true;
      $.ajax({
        type: "POST",
        data: {
          id: e
        },
        url: siteUrl + "api/buyPremium.php",
        dataType: "json",
        xhrFields: {
          withCredentials: true
        },
        success: function (e) {
          if (e.success) {
            if (0 == $(".skinSelected[data-skin='grimReaper']").length) {
              selectSkin($("[data-skin='grimReaper'][data-skin-id='1']"));
            }
            if (0 == $(".skinSelected[data-skin='pets']").length) {
              selectSkin($("[data-skin='pets'][data-skin-id='1']"));
            }
            loadUserData();
            $("#shop").hide();
            lockButton = false;
          }
        }
      });
    }
  }
}
function buyMisc(e) {
  if (!lockButton) {
    if (1 == confirm(getTranslation("are_you_sure_buy"))) {
      lockButton = true;
      $.ajax({
        type: "POST",
        data: {
          id: e
        },
        url: siteUrl + "api/buyMisc.php",
        dataType: "json",
        xhrFields: {
          withCredentials: true
        },
        success: function (e) {
          if (e.success) {
            loadUserData();
            $("#shop").hide();
            lockButton = false;
          }
        }
      });
    }
  }
}
var buyStartCharacter = false;
function buyStartPoint() {
  var e = $(".buy-start-points");
  if (buyStartCharacter) {
    $(e).css("background", "#dc0000");
    buyStartCharacter = false;
  } else {
    if (1 != confirm(getTranslation("are_you_sure_buy"))) {
      return;
    }
    $(e).css("background", "#1abb00");
    buyStartCharacter = true;
  }
}
function buySkin(e, t, a) {
  if (1 != confirm(getTranslation("are_you_sure_buy"))) {
    return;
  }
  if (lockButton) {
    return;
  }
  lockButton = true;
  let s = $(e).html();
  let n = parseInt(s);
  $.ajax({
    type: "POST",
    data: {
      skinName: t,
      skinId: a,
      price: n
    },
    url: siteUrl + "api/buySkin.php",
    dataType: "json",
    xhrFields: {
      withCredentials: true
    },
    success: function (t) {
      if (t.success) {
        selectSkin($(e).parent());
        loadUserData();
        $("#shop").hide();
      } else {
        alert("Something went wrong");
      }
      lockButton = false;
    }
  });
}
function reportPlayer(e, t, a, s) {
  if (!lockButton) {
    if ($("#reportCheckBox").prop("checked")) {
      lockButton = true;
      $.ajax({
        type: "POST",
        data: {
          id: e,
          nick: t,
          token: a,
          tokenTime: s,
          info: $("#reportPlayerText").val()
        },
        url: siteUrl + "api/reportPlayer.php",
        dataType: "json",
        xhrFields: {
          withCredentials: true
        },
        success: function (e) {
          if (e.success) {
            $("#scanPlayers .reportBox").html("<br><font color=green>" + lang.report_thank_you + "</font>");
          } else {
            $("##scanPlayers .reportBox").html("<br><font color=red>" + lang.report_error + "</font>");
          }
          lockButton = false;
        }
      });
    }
  }
}
function bonusCode() {
  var e = $("#bonusCode").val();
  $.ajax({
    type: "POST",
    data: {
      code: e
    },
    url: siteUrl + "api/bonusCode.php",
    dataType: "json",
    xhrFields: {
      withCredentials: true
    },
    success: function (t) {
      if (t.success) {
        $("#bonusCodeDiv .loginButton").hide();
        $("#bonus-code-popup").fadeOut();
        $(".popups>.overlay").fadeOut();
        loadUserData();
        $("#bonusCode").val("");
        gtag("event", e, {
          event_category: "bonusCode"
        });
        $("#bonus-msg").html("");
      } else {
        $("#bonus-msg").html("<font color=red>" + t.msg + "</font>");
      }
    }
  });
}
function useGiftCode() {
  var e = $("#gift-code-use").val();
  $.ajax({
    type: "POST",
    data: {
      code: e
    },
    url: siteUrl + "api/giftCode.php",
    dataType: "json",
    xhrFields: {
      withCredentials: true
    },
    success: function (e) {
      if (e.success) {
        $("#gift-code-msg").html("");
        newPopup(0, 10, e.msg);
        loadUserData();
        $("#shop").hide();
      } else {
        $("#gift-code-msg").html("<font color=red>" + e.msg + "</font><br>");
      }
    }
  });
}
function showHighscores(e, t) {
  var a;
  var s;
  var n;
  s = document.getElementsByClassName("tabcontenthighscores");
  for (a = 0; a < s.length; a++) {
    s[a].style.display = "none";
  }
  n = document.getElementsByClassName("tablinkshighscores");
  for (a = 0; a < n.length; a++) {
    n[a].className = n[a].className.replace(" orange-button", " grey-button");
  }
  document.getElementById(t).style.display = "block";
  e.currentTarget.className = e.currentTarget.className.replace(" grey-button", " orange-button");
}
var currentShopTab = null;
function showShopTab(e) {
  var t;
  var a;
  var s;
  a = document.getElementsByClassName("tabcontentshop");
  for (t = 0; t < a.length; t++) {
    a[t].style.display = "none";
  }
  s = document.getElementsByClassName("tablinkshop");
  for (t = 0; t < s.length; t++) {
    s[t].className = s[t].className.replace(" active", "");
    if (s[t].dataset.what == e) {
      s[t].className += " active";
      currentShopTab = e;
    }
  }
  document.getElementById(e).style.display = "block";
}
var selectedSkins = [];
function selectSkin(e) {
  var t = $(e).data("skin");
  var a = $(e).data("skin-id");
  selectedSkins[t] = a;
  if ($(e).hasClass("skinSelected")) {
    $("[data-skin='" + t + "']").removeClass("skinSelected");
    delete selectedSkins[t];
  } else {
    $("[data-skin='" + t + "']").removeClass("skinSelected");
    $(e).addClass("skinSelected");
  }
  str = "";
  for (var s = 0; s < Object.keys(selectedSkins).length; s++) {
    var n = Object.keys(selectedSkins)[s];
    var i = selectedSkins[Object.keys(selectedSkins)[s]];
    str += n + ":" + i + ",";
  }
  if (str.length > 0) {
    str = str.slice(0, -1);
  }
  user.selectedSkins = str;
  setCookie("selectedSkins", str, 365);
  if (-1 === t.indexOf("_effects") && "pets" != t && "tombstones" != t) {
    game.loadSkin(t, a);
  }
  if (joinedGame && !imDead) {
    gameServer.emit(socketMsgType.CHANGESKIN, {
      skinId: a,
      skinName: t
    });
  }
}
function setCookie(e, t, a) {
  var s = "";
  if (a) {
    var n = new Date();
    n.setTime(n.getTime() + 24 * a * 60 * 60 * 1e3);
    s = "; expires=" + n.toUTCString();
  }
  document.cookie = e + "=" + (t || "") + s + "; path=/;Secure;SameSite=None";
}
function getCookie(e) {
  var t = e + "=";
  var a = document.cookie.split(";");
  for (var s = 0; s < a.length; s++) {
    for (var n = a[s]; " " == n.charAt(0);) {
      n = n.substring(1, n.length);
    }
    if (0 == n.indexOf(t)) {
      return n.substring(t.length, n.length);
    }
  }
  return null;
}
function eraseCookie(e) {
  document.cookie = e + "=; Max-Age=-99999999;";
}
var overlayLock = false;
function pageLoaded() {
  $("div.accountExperienceBar").mouseover(function () {
    expShowTimeout = setTimeout(function () {
      var e = $("div.accountExperienceBar > .exp").text();
      var t = parseInt(e.split("/")[0].replace(/ /g, ""));
      var a = (parseInt(e.split("/")[1].replace(/ /g, "")) - t).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      $("div.accountExperienceBar > .exp-left").text(a + " EXP " + lang.to_the_next_level);
      $("div.accountExperienceBar > .exp").fadeOut("slow");
      $("div.accountExperienceBar > .exp-left").fadeIn("slow");
    }, 200);
  });
  $("div.accountExperienceBar").mouseout(function () {
    clearTimeout(expShowTimeout);
    $("div.accountExperienceBar > .exp").fadeIn("slow");
    $("div.accountExperienceBar > .exp-left").fadeOut("slow");
  });
  $(".popups .popup .close").click(function () {
    $(this).parent().fadeOut();
    $(".popups>.overlay").fadeOut();
  });
  $(".popups>.overlay").click(function () {
    if (!overlayLock) {
      $(this).fadeOut();
      $(".popup").fadeOut();
    }
  });
  setInterval(function () {
    if (gameServer.connected) {
      gtag("event", "online", {
        event_category: "online"
      });
    }
  }, 6e4);
  $(".selectLanguage").on("change", function () {
    setCookie("lang", this.value, 365);
    changeLanguage(this.value);
  });
  if (null != getCookie("quality")) {
    $(".selectQuality").val(getCookie("quality"));
  }
  $(".selectQuality").on("change", function () {
    setCookie("quality", this.value, 365);
    qualityMode = this.value;
    if ("auto" == qualityMode) {
      setQuality(1);
    }
  });
  $("#selectCharacter").on("change", function () {
    changeCharacter(this.value - startCharacter);
  });
  chatmenu.init("chatmenu", "menuhover");
  $(".chatmenu [data-chat-id]").click(function () {
    var e = $(this).data("chat-id");
    sendChat(e);
  });
  $(".emotesMenu [data-emote-id]").click(function () {
    var e = $(this).data("emote-id");
    sendEmote(e);
  });
  if (isMobile) {
    $(".mobileControls").show();
    $(".skinChangerButton").css({
      top: "18px",
      right: "7vw"
    });
    $(".petChangerButton").css({
      top: "calc(20px + 6vw)",
      right: "9vw"
    });
    $("#gameContainer>.conditions").css({
      top: "18px",
      right: "15vw"
    });
    var e = $("<style>#gameContainer>.conditions .condition { width:100% } #gameContainer .conditions .condition .timer{font-size:1.6vw;}</style>");
    $("html > head").append(e);
    $("#gameContainer>.status").css({
      width: "60vw",
      "font-size": "9px"
    });
    $("#gameContainer>.status .experienceBar").css({
      height: "12px",
      "font-size": "10px"
    });
    $("#gameContainer>.status .oxygenBar").css({
      height: "12px",
      "font-size": "10px"
    });
    $("#gameContainer>.status .waterBar").css({
      height: "12px",
      "font-size": "10px"
    });
    $("#gameContainer>.leaderboard").css({
      width: "17vw",
      "font-size": "1.2vw"
    });
    $("#gameContainer > div.mobileControls").css({
      top: "calc(" + window.innerHeight + "px - 15vw)"
    });
  }
  $("#guideButton").on("click", function () {
    $("#uiContainer>.main .welcome").fadeOut(function () {
      $("#uiContainer>.main .gameStartBox").fadeIn();
    });
    $("#guide").fadeIn();
    $(".popups>.overlay").fadeIn();
    localStorage.setItem("guide", "1");
  });
  $("#uiContainer .welcome").click(function () {
    $("#uiContainer .main .center").animate({
      scrollTop: $("#guideButton").offset().top
    }, 2e3);
  });
  if (isMobile) {
    $("#uiContainer .main .center .info>.left span[data-translate='skill_use']").remove();
    $("#uiContainer .main .center .info>.left span[data-translate='controls']").remove();
  }
}
function selectShopSkins() {
  if (null != getCookie("selectedSkins")) {
    var e = getCookie("selectedSkins");
    if (e.length > 0) {
      user.selectedSkins = e;
      var t = e.split(",");
      for (var a = 0; a < t.length; a++) {
        var s = t[a].split(":");
        var n = s[0];
        var i = s[1];
        $(".offer[data-unblocked=1][data-skin=\"" + n + "\"][data-skin-id=" + i + "]").addClass("skinSelected");
        selectedSkins[n] = parseInt(i);
      }
    }
  }
}
var mySkins = [];
var mySkinsCount = 0;
var expShowTimeout;
function afterUserDataLoad(e) {
  $(".selectLanguage").val(userLang);
  var t = user.skins.split(";");
  mySkins = [];
  mySkinsCount = 0;
  for (var a = 0; a < t.length; a++) {
    var s = t[a].split(",");
    var n = s[0];
    mySkins[n] = [];
    for (var i = 1; i < s.length; i++) {
      mySkins[n][s[i]] = true;
      mySkinsCount++;
    }
  }
  if (1 == user.showPremiumOffer) {
    $("#premiumOffer3days").show().css({
      display: "block",
      margin: "0 auto"
    });
  }
  var o = $("#newOffer");
  if (user.level <= 0) {
    $(o).hide();
  } else {
    $(o).show();
  }
  if (null != $(o)) {
    if (null != $(o).data("end-time") && $(o).data("end-time") <= serverTime) {
      $(o).hide();
    } else if (null != $(o).data("skin") && null != $(o).data("skin-id")) {
      var r = $(o).data("skin");
      var l = $(o).data("skin-id");
      if (undefined !== mySkins[r] && undefined !== mySkins[r][l] && 1 == mySkins[r][l]) {
        $(o).hide();
      }
    }
  }
  var d = cdnServer + "flags/" + user.countryCode.toLowerCase() + ".png";
  $(".showFlag img").on("error", function () {
    $(".showFlag").hide();
    $(".yourNameInput").css("width", "45%");
  }).attr("src", d);
  if (0 == getCookie("showFlag")) {
    user.hideFlag = true;
    $(".showFlag input").prop("checked", false);
  }
  if (null == getCookie("chatDisabled") || 0 == getCookie("chatDisabled")) {
    $("#disableChat").prop("checked", false);
  } else {
    chatDisabled = true;
    $(".mobileControls .emotes").hide();
  }
  $.ajax({
    type: "GET",
    url: siteUrl + "api/getShop.php",
    xhrFields: {
      withCredentials: true
    },
    success: function (e) {
      $("#shop .content").html(e);
      $("#shop [data-unblocked=0]").remove();
      reloadImages();
      selectShopSkins();
    }
  });
  if (user.guest) {
    $(".yourNameInput").val(user.login).attr("readonly", true).css({
      cursor: "not-allowed"
    }).off("click").on("click", function () {
      $("#login-popup").fadeIn();
      $(".popups>.overlay").fadeIn();
      hidePokiAd();
    });
  } else {
    if (null != getCookie("playname")) {
      $(".yourNameInput").val(getCookie("playname"));
      setInputDirection($(".yourNameInput")[0]);
    } else {
      $(".yourNameInput").val("");
    }
    $(".yourNameInput").attr("readonly", false).off("click").css({
      cursor: "auto"
    });
  }
  if (user.premium) {
    $("#uiContainer>.main>.center .info>.left").css("width", "100%");
    $("#uiContainer>.main>.center .info>.right").remove();
    $("#ac1").remove();
    $("#ac2").remove();
  }
  if (user.level > 0) {
    localStorage.setItem("guide", 1);
  }
  if ("poki" == partner) {
    localStorage.setItem("guide", 1);
  }
  if (e.serversRestarting) {
    $("#uiContainer .news").html("<span data-translate='servers_restarting'></span>");
    $("#uiContainer .news").show();
  }
  if (user.level < 3) {
    $("#addFriendMsg").html("<span data-translate='add_friend_min_level' style='color:red'></span>");
    $("#buttonAddFriend").disabled = true;
    $("#buttonAddFriend").css("filter", "grayscale(100%)");
  } else {
    $("#addFriendMsg").html("");
    $("#buttonAddFriend").disabled = false;
    $("#buttonAddFriend").css("filter", "grayscale(0%)");
  }
}
function showFlag(e) {
  var t = !e.checked;
  user.hideFlag = t;
  setCookie("showFlag", e.checked, 365);
}
function disableChat(e) {
  var t = e.checked;
  chatDisabled = t;
  setCookie("chatDisabled", t, 365);
  if (t) {
    $(".mobileControls .emotes").hide();
  } else {
    $(".mobileControls .emotes").show();
  }
}
function timers() {
  if (!("undefined" != typeof joinedGame && joinedGame)) {
    $("[data-timer]").each(function () {
      var timeleft = parseInt($(this).data("timer")) - 1;
      if (timeleft < 0) {
        timeleft = 0;
        if ("undefined" != $(this).data("timer-action")) {
          eval($(this).data("timer-action"));
          $(this).removeData("timer-action");
        }
      }
      $(this).data("timer", timeleft);
      var minutes = "0" + Math.floor(timeleft / 60) % 60;
      var seconds = "0" + timeleft % 60;
      var hours = Math.floor(timeleft / 3600);
      if (hours < 10) {
        hours = "0" + hours;
      }
      var formattedTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
      $(this).text(formattedTime);
    });
  }
}
function initJoin() {
  if (joinedGame) {
    return;
  }
  name = $(".yourNameInput").val();
  name = name.trim().replace(/  +/g, " ");
  name = name.replace(/</g, "");
  name = name.replace(/>/g, "");
  name = name.replace(/'/g, "");
  name = name.replace(/"/g, "");
  name = name.replace(/\\/g, "");
  name = name.replace(/&#/g, "");
  name = name.replace(/hitler/gi, "");
  name = name.replace(/卐/g, "");
  name = name.replace(/卍/g, "");
  if (!user.guest) {
    name = name.replace(/guest_/gi, "");
  }
  if (name.length > 5) {
    name = name.replace(/https:\/\//g, "");
    name = name.replace(/https/g, "");
    name = name.replace(/http:\/\//g, "");
    name = name.replace(/http/g, "");
    name = name.replace(/www./g, "");
    name = name.replace(/www/g, "");
  }
  name = removeEmojis(name);
  if (name.replace(/ /g, "").length <= 0 || name.length > 20) {
    var e = $(".yourNameInput").css("background-color");
    $(".yourNameInput").css("background-color", "red");
    setTimeout(function () {
      $(".yourNameInput").css("background-color", e);
    }, 50);
    setTimeout(function () {
      $(".yourNameInput").css("background-color", "red");
    }, 100);
    setTimeout(function () {
      $(".yourNameInput").css("background-color", e);
    }, 150);
    setTimeout(function () {
      $(".yourNameInput").css("background-color", "red");
    }, 200);
    setTimeout(function () {
      $(".yourNameInput").css("background-color", e);
    }, 250);
    return void $(".yourNameInput").focus();
  }
  let t = checkBadWords(name);
  if (t) {
    newPopup(0, 8, getTranslation("bad_nickname_found", "<font color=red>" + t + "</font>"));
  } else {
    generateCharactersSelect();
    changeCharacter(0);
    $(".btnStartGame").blur();
    if (user.level <= 0) {
      if (user.premium) {
        return void join();
      }
      if ("gdsub" == partner) {
        return void join();
      }
      if ("undefined" != typeof gdsdk && "undefined" !== gdsdk.showAd) {
        return void gdsdk.showAd();
      }
      $("#join-popup .select-character").hide();
      $("#join-popup .play").hide();
      $("#join-popup .select-exp-bonus").show();
    } else {
      $("#join-popup .select-character").show();
      $("#join-popup .play").show();
      if (user.premium || "gdsub" == typeof partner) {
        $("#join-popup .select-exp-bonus").hide();
        $("#join-popup .play").show();
      } else {
        $("#join-popup .play").hide();
        $("#join-popup .select-exp-bonus").show();
      }
    }
    $("#join-popup").fadeIn();
    $(".popups>.overlay").fadeIn();
  }
}
function hidePokiAd() {
  if ("poki" == partner) {
    var e = document.getElementById("ac1");
    PokiSDK.destroyAd(e);
    showPokiDisplayAd = false;
  }
}
function adJoin() {
  if (user.premium || "" == partner) {
    join();
  } else if (1 == pokiEnabled) {
    if (1 == pokiEnabled) {
      var e = document.getElementById("ac1");
      PokiSDK.destroyAd(e);
      return void PokiSDK.commercialBreak().then(function () {
        join();
      });
    }
    if ("undefined" == typeof gdsdk || "undefined" === gdsdk.showAd) {
      join();
    } else {
      gdsdk.showAd();
    }
  } else {
    join();
  }
}
setInterval(timers, 1e3);
var startBonus = false;
function adStatusCallback(e) {
  if ("ad-blocker" != e) {
    if (!("sys-closing" != e && "network-error" != e)) {
      startBonus = true;
      fullScreen(true);
      join();
    }
  } else {
    alert(lang.watch_ad_bonus_adblock);
  }
}
var playerPro = window.playerPro || [];
function initPlayerPro(e) {
  if (e) {
    e.on("AdStarted", function () {
      gtag("event", "AdStarted", {
        event_category: "startBonus"
      });
    });
    e.on("AdVideoComplete", function () {
      rewardedAdFunction();
      gtag("event", "AdVideoComplete", {
        event_category: "startBonus"
      });
    });
    e.on("AdError", function (e, t) {
      rewardedAdFunction();
    });
  } else {
    alert("blank");
  }
}
var rewardedAdFunction = function () {};
function showRewardedAd(e) {
  $(".qc-cmp2-persistent-link").remove();
  if ("freegem" == e) {
    if (!adblockDisabled || "undefined" == typeof adplayer && "undefined" == typeof CrazyGames && "undefined" == typeof PokiSDK) {
      gtag("event", "adblock", {
        event_category: "freeGem"
      });
      return void alert(lang.watch_ad_bonus_adblock);
    }
    gtag("event", "yes", {
      event_category: "freeGem"
    });
    rewardedAdFunction = function (e) {
      if ("canceled" !== e && "closed" !== e) {
        $.ajax({
          type: "POST",
          data: {
            token: freeGemToken
          },
          url: siteUrl + "api/freeGem.php",
          dataType: "json",
          xhrFields: {
            withCredentials: true
          },
          success: function (e) {
            if (e.success) {
              alert(lang.you_got_1_gem);
              loadUserData();
              $("#shop").hide();
              $(".popups .overlay").hide();
            }
          }
        });
      }
    };
    if ("undefined" != typeof adplayer) {
      aiptag.cmd.player.push(function () {
        adplayer.startRewardedAd({
          preload: false,
          showLoading: true
        });
      });
    } else if ("undefined" != typeof CrazyGames) {
      const e = {
        adFinished: () => rewardedAdFunction(),
        adError: e => console.log("Error rewarded ad", e)
      };
      window.CrazyGames.SDK.ad.requestAd("rewarded", e);
    } else if (1 == pokiEnabled) {
      PokiSDK.rewardedBreak(() => {}).then(e => {
        rewardedAdFunction();
      });
    }
  } else {
    if (!adblockDisabled || "undefined" == typeof adplayer && "undefined" == typeof CrazyGames && 1 != pokiEnabled) {
      gtag("event", "adblock", {
        event_category: "startBonus"
      });
      return void alert(lang.watch_ad_bonus_adblock);
    }
    rewardedAdFunction = function (e) {
      if ("canceled" !== e && "closed" !== e) {
        startBonus = true;
      }
      fullScreen(true);
      join();
    };
    gtag("event", "yes", {
      event_category: "startBonus"
    });
    if ("undefined" != typeof adplayer) {
      aiptag.cmd.player.push(function () {
        adplayer.startRewardedAd({
          preload: false,
          showLoading: true
        });
      });
    } else if ("undefined" != typeof CrazyGames) {
      const e = {
        adFinished: () => rewardedAdFunction(),
        adError: e => {
          fullScreen(true);
          join();
          console.log("Error rewarded ad", e);
        }
      };
      window.CrazyGames.SDK.ad.requestAd("rewarded", e);
    } else if (1 == pokiEnabled) {
      PokiSDK.rewardedBreak(() => {}).then(e => {
        rewardedAdFunction();
      });
    }
    $("#initJoin").fadeOut("slow");
  }
}
var loginWindow = null;
function openLoginWindow(e) {
  e = siteUrl + e;
  if (null == loginWindow || loginWindow.closed) {
    loginWindow = window.open(e, "_blank", "width=700,height=700");
  } else {
    loginWindow.location.href = e;
    loginWindow.focus();
  }
}
function receiveMessage(e) {
  if (!("https://evoworld.io" !== e.origin && "https://flyordie.io" !== e.origin)) {
    if ("reload" == e.data) {
      loadUserData();
      $(".popups .popup").fadeOut();
      $(".popups>.overlay").fadeOut();
    } else if ("setdiscord" == e.data.type) {
      user.discordLogged = e.data.logged;
      user.discordId = e.data.id;
      user.discordName = e.data.name;
      user.discordToken = e.data.token;
      refreshDiscordMenu();
    } else if ("logoutdiscord" == e.data.type) {
      user.discordLogged = false;
      refreshDiscordMenu();
    }
  }
}
function refreshDiscordMenu() {
  var e = "";
  if (user.level < 5) {
    e += "<a href=\"#\" style=\"color:grey; cursor:not-allowed;\">Discord (lvl 5+)</a>";
    return void $("#myDiscordMenu").html(e);
  }
  e += "<a href=\"#\" class=\"sub\">Discord</a>";
  if (1 != user.discordLogged) {
    e += "<ul><li class=\"topline\"><a href=\"#\" style=\"color:grey; cursor:not-allowed;\">" + getTranslation("ask_discord").capitalize() + "</a></li><li><a href=\"#\" style=\"color:grey;cursor:not-allowed;\">" + getTranslation("send_discord").capitalize() + "</a></li><li><a onClick=\"window.open('https://evoworld.io/setdiscord?action=login','set discord','resizable,height=800,width=370'); return false;\" target=\"_blank\">" + getTranslation("add_discord").capitalize() + "</a></li></ul>";
  } else {
    e += "<ul>";
    var t = "<ul style=\"\">";
    for (var a = 0; a < discordAsksArr.length; a++) {
      var s = discordAsksArr[a];
      var n = game.gameObjects[s];
      if (undefined !== n) {
        t += "<li " + (0 == a ? "class=\"topline\"" : "") + "><a onClick=\"sendDiscord(" + s + ")\">" + n.nick + "</a></li>";
      }
    }
    t += "</ul>";
    e += "<li class=\"topline\"><a onClick=\"askForDiscord()\">" + getTranslation("ask_discord").capitalize() + "</a></li><li><a href=\"#\" " + (0 == discordAsksArr.length ? "style=\"color:grey; cursor:not-allowed;\"" : "class=\"sub\"") + ">" + getTranslation("send_discord").capitalize() + "</a>" + t + "</li><li><center><a href=\"#\" style=\"color:grey; cursor:not-allowed;\">------------------</a></center></li><li><a onClick=\"window.open('https://evoworld.io/setdiscord?action=logout','set discord','resizable,height=1,width=1'); return false;\" target=\"_blank\">" + getTranslation("logout").capitalize() + "</a></li>";
    e += "</ul>";
  }
  $("#myDiscordMenu").html(e);
  chatmenu.init("chatmenu", "menuhover");
}
function removeURLParameter(e, t) {
  var a = e.split("?");
  if (a.length >= 2) {
    var s = encodeURIComponent(t) + "=";
    var n = a[1].split(/[&;]/g);
    for (var i = n.length; i-- > 0;) {
      if (-1 !== n[i].lastIndexOf(s, 0)) {
        n.splice(i, 1);
      }
    }
    return a[0] + (n.length > 0 ? "?" + n.join("&") : "");
  }
  return e;
}
function replaceUrlParam(e, t, a) {
  if (null == a) {
    a = "";
  }
  var s = new RegExp("\\b(" + t + "=).*?(&|#|$)");
  return e.search(s) >= 0 ? e.replace(s, "$1" + a + "$2") : (e = e.replace(/[?#]$/, "")) + (e.indexOf("?") > 0 ? "&" : "?") + t + "=" + a;
}
window.addEventListener("message", receiveMessage, false);
var showPokiDisplayAd = true;
function gdprAds() {
  if (!user.premium) {
    if (!(isMobile || "poki" != partner)) {
      if (window.innerWidth === screen.width) {
        $("#ac1").show();
        $("#ac2").show();
        $("#uiContainer>.main>.center .info>.left").removeClass("fullWidth");
      } else {
        $("#ac1").hide();
        $("#ac2").hide();
        $("#uiContainer>.main>.center .info>.left").addClass("fullWidth");
      }
    }
    if ($(".qc-cmp2-consent-info").length > 0 || $("#forceLandscape").is(":visible")) {
      setTimeout(gdprAds, 200);
    } else {
      if (!isMobile || $(window).height() >= 550) {
        if ("poki" == partner) {
          $("#ac1").css({
            margin: "0 auto",
            "margin-top": "0px",
            float: "right"
          });
          $("#ac2").css({
            margin: "0 auto",
            "margin-bottom": "10px",
            left: "50%"
          });
        } else {
          $("#ac1").css({
            width: "336px",
            "max-width": "100%",
            height: "280px",
            margin: "0 auto",
            float: "right"
          });
        }
        $("#ac2").css({
          width: "100%",
          "max-width": "728px",
          height: "90px",
          margin: "0 auto",
          "margin-bottom": "10px",
          left: "50%"
        });
      } else {
        $("#ac1").css({
          width: "100%",
          height: "min(250px," + (window.innerHeight - 190) + "px)",
          "margin-top": "2px"
        });
      }
      if ("" == partner) {
        if (isMobile) {
          $("#ac1").html("<ins class=\"adsbygoogle\" style=\"display:inline-block; width:100%; height:100%;\" data-ad-client=\"ca-pub-1691583331684279\" data-ad-slot=\"8961489987\"></ins>");
          if ($(window).height() >= 550) {
            $("#ac2").html("<ins class=\"adsbygoogle\" style=\"display:block; width:100%; height:100%;\" data-ad-client=\"ca-pub-1691583331684279\" data-ad-slot=\"1984806645\"></ins>");
          }
        } else {
          $("#ac1").html("<ins class=\"adsbygoogle\" style=\"display:block; width:100%; height:100%;\" data-ad-client=\"ca-pub-1691583331684279\" data-ad-slot=\"3747997809\"></ins>");
          if ($(window).height() >= 550) {
            $("#ac2").html("<ins class=\"adsbygoogle\" style=\"display:block; width:100%; height:100%;\" data-ad-client=\"ca-pub-1691583331684279\" data-ad-slot=\"6582216145\"></ins>");
          }
        }
        for (var e = 0; e < $("[class=\"adsbygoogle\"]").length; e++) {
          (adsbygoogle = window.adsbygoogle || []).push({});
        }
      } else if ("xiaomi" == partner) {
        if (isMobile) {
          $("#ac1").html("<ins class=\"adsbygoogle\" style=\"display:inline-block; width:100%; height:100%;\" data-ad-client=\"ca-pub-7151632855683728\" data-ad-slot=\"3867077255\"></ins>");
          if ($(window).height() >= 550) {
            $("#ac2").html("<ins class=\"adsbygoogle\" style=\"display:block; width:100%; height:100%;\" data-ad-client=\"ca-pub-7151632855683728\" data-ad-slot=\"3867077255\"></ins>");
          }
        } else {
          $("#ac1").html("<ins class=\"adsbygoogle\" style=\"display:block; width:100%; height:100%;\" data-ad-client=\"ca-pub-7151632855683728\" data-ad-slot=\"3867077255\"></ins>");
          if ($(window).height() >= 550) {
            $("#ac2").html("<ins class=\"adsbygoogle\" style=\"display:block; width:100%; height:100%;\" data-ad-client=\"ca-pub-7151632855683728\" data-ad-slot=\"3867077255\"></ins>");
          }
        }
        for (e = 0; e < $("[class=\"adsbygoogle\"]").length; e++) {
          (adsbygoogle = window.adsbygoogle || []).push({});
        }
      } else if ("crazygames" == partner && "undefined" != typeof CrazyGames) {
        try {
          window.CrazyGames.SDK.banner.requestResponsiveBanner(["ac1"]);
          window.CrazyGames.SDK.banner.requestResponsiveBanner(["ac2"]);
        } catch (e) {}
      } else if ("gd" == partner && "undefined" != typeof gdsdk) {
        window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: "ac1"
        }).then(() => console.info("showAd(window.gdsdk.AdType.Display) resolved.")).catch(e => console.info(e));
        window.gdsdk.showAd(window.gdsdk.AdType.Display, {
          containerId: "ac2"
        }).then(() => console.info("showAd(window.gdsdk.AdType.Display) resolved.")).catch(e => console.info(e));
      } else if (showPokiDisplayAd && 1 == pokiEnabled) {
        if ("poki" == partner && !wasSync) {
          return;
        }
        var t = document.getElementById("ac1");
        if (isMobile) {
          $("#ac1").css({
            width: "320px",
            height: "50px",
            margin: "0 auto"
          });
          PokiSDK.displayAd(t, "320x50");
          console.log("Displaying ad 320x50");
        } else {
          PokiSDK.displayAd(t, "300x250");
          console.log("Displaying ad 320x250");
        }
        if ("" == partner && $(window).height() >= 550) {
          var a = document.getElementById("ac2");
          PokiSDK.displayAd(a, "728x90");
          console.log("Displaying ad 728x90");
        }
        if ("poki" == partner) {
          if ($(window).height() >= 550 && $(window).width() >= 1135) {
            a = document.getElementById("ac2");
            PokiSDK.displayAd(a, "728x90");
            console.log("Displaying ad 728x90");
          } else if ($(window).height() >= 550 && $(window).width() >= 730) {
            a = document.getElementById("ac2");
            PokiSDK.displayAd(a, "320x50");
            console.log("Displaying ad 320x50");
          }
        }
      }
    }
  }
}
if ("poki" == partner) {
  window.addEventListener("resize", gdprAds);
}
var mapButtonRotation = 0;
function hideShowMap() {
  if (mapButtonRotation / 180 % 2 != 0) {
    $(".minimap").css("transform", "translate(0,100%)");
  } else {
    $(".minimap").css("transform", "translate(0,0%)");
  }
  mapButtonRotation += 180;
  $(".minimap .button img").css("transform", "rotate(" + mapButtonRotation + "deg)");
}
var previewAnimationsIntervals = [];
var previewAnimationsSteps = [];
function showEffectAnimation(e, t) {
  var a = $(e).data("name");
  clearInterval(previewAnimationsIntervals[a]);
  previewAnimationsSteps[a] = 0;
  var s = game.objectsDef[t].animations[game.objectsDef[t].animation].animationFrameTime;
  previewAnimationsIntervals[a] = setInterval(function () {
    if (game.objectsDef[t].animations[game.objectsDef[t].animation].sprites.length <= previewAnimationsSteps[a]) {
      $(e).attr("src", "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==");
    } else {
      var s = game.objectsDef[t].animations[game.objectsDef[t].animation].sprites[previewAnimationsSteps[a]++ % game.objectsDef[t].animations[game.objectsDef[t].animation].sprites.length];
      $(e).attr("src", game.sprites[s].src);
    }
  }, s);
}
function showTombstoneAnimation(e, t) {
  var a = $(e).data("name");
  if (true !== game.objectsDef[t].lazySpritesLoaded) {
    game.loadObjectLazySprites(t);
    return void (previewAnimationsIntervals[a] = setTimeout(function () {
      showTombstoneAnimation(e, t);
    }, 100));
  }
  if (!e.falling) {
    e.falling = true;
    $(e).css({
      position: "relative",
      bottom: "85px"
    });
    $(e).animate({
      bottom: "0px"
    }, 600, "swing", function () {
      showTombstoneAnimation(e, t);
    });
    let s = game.objectsDef[t].animations.none.animationFrameTime;
    return void (s && (previewAnimationsIntervals[a] = setInterval(function () {
      var s = game.objectsDef[t].animations.none.sprites[previewAnimationsSteps[a]++ % game.objectsDef[t].animations.none.sprites.length];
      $(e).attr("src", game.sprites[s].src);
    }, s)));
  }
  if (!game.objectsDef[t].animations.start) {
    return;
  }
  clearInterval(previewAnimationsIntervals[a]);
  previewAnimationsSteps[a] = 0;
  let s = game.objectsDef[t].animations.start.animationFrameTime;
  previewAnimationsIntervals[a] = setInterval(function () {
    if (true !== e.ended && game.objectsDef[t].animations.start.sprites.length <= previewAnimationsSteps[a] && game.objectsDef[t].animations.end) {
      e.ended = true;
      return void (previewAnimationsSteps[a] = 0);
    }
    if (e.ended) {
      var s = game.objectsDef[t].animations.end.sprites[previewAnimationsSteps[a]++ % game.objectsDef[t].animations.end.sprites.length];
      $(e).attr("src", game.sprites[s].src);
    } else {
      s = game.objectsDef[t].animations.start.sprites[previewAnimationsSteps[a]++ % game.objectsDef[t].animations.start.sprites.length];
      $(e).attr("src", game.sprites[s].src);
    }
  }, s);
}
function showSkinAnimation(e, t, a) {
  if (undefined === a) {
    a = 0;
  }
  game.convertToImageProcessing++;
  if (a > 0) {
    game.loadSkin(t, a);
  }
  var s = "flapping_right";
  if ("grimReaper" == t) {
    s = "flying_right";
  }
  var n = $(e).data("name");
  clearInterval(previewAnimationsIntervals[n]);
  previewAnimationsSteps[n] = 0;
  var i = 0;
  var o = 0;
  previewAnimationsIntervals[n] = setInterval(function () {
    if (0 == a || 1 == game.objectsDef[t].skinsLoaded[a]) {
      var r = game.objectsDef[t].animations[s].animationFrameTime;
      if (game.objectsDef[t].animations[s].sprites.length <= previewAnimationsSteps[n]) {
        if ("attacking_right" == s) {
          i -= 300;
        }
        if (++o >= 3) {
          o = 0;
          if ("grimReaper" == t) {
            s = "flying_right" == s ? "flapping_right" : "flapping_right" == s ? "attacking_right" : "flying_right";
          }
          if (!("pumpkinGhost" != t && "ghostlyReaper" != t)) {
            s = "flapping_right" == s ? "attacking_right" : "flapping_right";
          }
        }
        previewAnimationsSteps[n] = 0;
      }
      if ((i += 10) >= r) {
        var l = game.objectsDef[t].animations[s].sprites[previewAnimationsSteps[n]++ % game.objectsDef[t].animations[s].sprites.length];
        if (a > 0) {
          l = l + "_" + a;
        }
        i = 0;
        if ((l = game.sprites[l]).toURL) {
          $(e).attr("src", l.toURL);
        } else if (l.src) {
          if (-1 !== l.src.indexOf("blob:")) {
            var d = document.createElement("canvas");
            d.width = l.width;
            d.height = l.height;
            d.getContext("2d").drawImage(l, 0, 0);
            var c = d.toDataURL("image/png");
            $(e).attr("src", c);
            l.toURL = c;
          } else {
            $(e).attr("src", l.src);
          }
        } else {
          if (undefined === l.toURL) {
            l.toURL = l.toDataURL();
          }
          $(e).attr("src", l.toURL);
        }
      }
    }
  }, 10);
}
function stopEffectAnimation(e) {
  var t = $(e).data("name");
  clearInterval(previewAnimationsIntervals[t]);
  $(e).attr("src", game.sprites[t].toURL || game.sprites[t].src);
}
function stopTombstoneAnimation(e) {
  var t = $(e).data("name");
  e.falling = false;
  $(e).finish();
  clearInterval(previewAnimationsIntervals[t]);
  $(e).attr("src", game.sprites[t].toURL || game.sprites[t].src);
}
function stopSkinAnimation(e) {
  game.convertToImageProcessing--;
  var t = $(e).data("name");
  clearInterval(previewAnimationsIntervals[t]);
  $(e).attr("src", game.sprites[t].toURL || game.sprites[t].src);
}
var chatmenufunc = function () {
  var e;
  var t = 50;
  function a(e) {
    this.n = e;
    this.h = [];
    this.c = [];
  }
  function s(e, t) {
    var a = e.offsetHeight;
    if (a <= 0 && 1 != t || a >= e.mh && 1 == t) {
      if (1 == t) {
        e.style.filter = "";
        e.style.opacity = 1;
        e.style.overflow = "visible";
      }
      return void clearInterval(e.t);
    }
    var s = 1 == t ? Math.ceil((e.mh - a) / 1) : Math.ceil(a / 1);
    var n = a / e.mh;
    e.style.opacity = n;
    e.style.filter = "alpha(opacity=" + 100 * n + ")";
    e.style.height = a + s * t + "px";
  }
  a.prototype.init = function (t, a) {
    e = a;
    var s = document.getElementById(t).getElementsByTagName("ul");
    var n = s.length;
    for (var i = 0; i < n; i++) {
      var o = s[i].parentNode;
      this.h[i] = o;
      this.c[i] = s[i];
      o.onmouseover = new Function(this.n + ".st(" + i + ",true)");
      o.onmouseout = new Function(this.n + ".st(" + i + ")");
    }
  };
  a.prototype.st = function (a, n) {
    var i = this.c[a];
    var o = this.h[a].getElementsByTagName("a")[0];
    clearInterval(i.t);
    i.style.overflow = "hidden";
    if (n) {
      o.className += " " + e;
      if (!i.mh) {
        i.style.display = "block";
        i.style.height = "";
        i.mh = i.offsetHeight;
        i.style.height = 0;
      }
      if (i.mh == i.offsetHeight) {
        i.style.overflow = "visible";
      } else {
        i.style.zIndex = t;
        t++;
        i.t = setInterval(function () {
          s(i, 1);
        }, 0);
      }
    } else {
      o.className = o.className.replace(e, "");
      i.t = setInterval(function () {
        s(i, -1);
      }, 0);
    }
  };
  return {
    dd: a
  };
}();
var chatmenu = new chatmenufunc.dd("chatmenu");
function HtmlEncode(e) {
  return $("<div>").text(e).html();
}
function fullScreen(e) {
  if ((true !== e || isMobile) && !(document.fullscreen || window.innerWidth == screen.width && window.innerHeight == screen.height)) {
    var t = document.documentElement;
    if (t.requestFullscreen) {
      t.requestFullscreen();
    } else if (t.mozRequestFullScreen) {
      t.mozRequestFullScreen();
    } else if (t.webkitRequestFullScreen) {
      t.webkitRequestFullScreen();
    } else if (t.msRequestFullscreen) {
      t.msRequestFullscreen();
    }
  }
}
function changeCharacter(e) {
  buyStartCharacter = false;
  startCharacter += e;
  if (-1 == e && startCharacter < 0) {
    startCharacter = Object.keys(expTable).length - 2;
  }
  if (startCharacter < 0) {
    startCharacter = 0;
  }
  if (1 == e && startCharacter >= Object.keys(expTable).length - 1) {
    startCharacter = 0;
  } else if (startCharacter >= Object.keys(expTable).length - 1) {
    startCharacter = Object.keys(expTable).length - 2;
  }
  var t = Object.keys(expTable)[startCharacter];
  var a = game.objectsDef[t].animation;
  var s = game.objectsDef[t].animations[a].sprites[0];
  var n = game.sprites[s];
  console.log(startCharacter);
  $("#startCharacter").attr("src", trimImageBackground(n));
  if (0 == startCharacter) {
    $("#startCharacterInfo").html("");
  } else if (undefined === user.level || startCharacter > user.level) {
    var i = expTable[t].startCost;
    $("#startCharacterInfo").html("<font color=red>" + lang.too_low_level + "</font>");
    $("#startCharacterInfo").append("<br><span style='font-size:70%' data-translate='start_points_low_level'></span>");
    $("#startCharacterInfo").append("<br><button class=\"buy-start-points red-button\" " + (user.premiumPoints < i ? "disabled style=\"background: grey;opacity: 0.4; cursor: not-allowed;\"" : "") + " class=\"buy-start-points\" onClick=\"buyStartPoint()\">" + i + "<img src=\"" + cdnServer + "images/shop/gem.png\"></button>");
    translate($("[data-translate='start_points_low_level']"));
  } else {
    $("#startCharacterInfo").html(getTranslation("you_have_x_uses_left", [user.startPoints > 0 ? "<font color=green>" + user.startPoints + "</font>" : "<font color=red>" + user.startPoints + "</font>"]));
    if (user.startPoints <= 0) {
      $("#startCharacterInfo").append("<br><span style='font-size:70%' data-translate='start_points_renew_info'></span>");
      i = expTable[t].startCost;
      $("#startCharacterInfo").append("<br><button class=\"buy-start-points red-button\" " + (user.premiumPoints < i ? "disabled style=\"background: grey;opacity: 0.4; cursor: not-allowed;\"" : "") + " class=\"buy-start-points\" onClick=\"buyStartPoint()\">" + i + "<img src=\"" + cdnServer + "images/shop/gem.png\"></button>");
      translate($("[data-translate='start_points_renew_info']"));
    }
  }
  $("#selectCharacter").val(startCharacter);
}
function generateCharactersSelect() {
  var e = document.getElementById("selectCharacter");
  e.innerHTML = "";
  for (var t = 0; t < Object.keys(expTable).length; t++) {
    var a = Object.keys(expTable)[t];
    if ("overfedAlienBat" != a) {
      if (undefined !== game.objectsDef[a].fullName) {
        a = game.objectsDef[a].fullName;
      }
      a = undefined !== lang[a.replace(/ /g, "_").toLowerCase()] ? lang[a.replace(/ /g, "_").toLowerCase()].capitalize() : a.capitalize();
      var s = document.createElement("option");
      s.text = a;
      s.value = t;
      e.add(s);
    }
  }
  e.value = startCharacter;
}
function showVideos() {
  $("#videos").fadeIn();
  $(".popups>.overlay").fadeIn();
  $("#videos .content").html("<span class=\"fly-loader\"></span>");
  $.ajax({
    type: "GET",
    url: siteUrl + "api/videos.php",
    dataType: "json",
    xhrFields: {
      withCredentials: true
    },
    success: function (e) {
      if (e.success) {
        reloadVideos(e);
      }
    }
  });
}
function reloadVideos(e) {
  var t = "";
  t += "<div class=\"title\">" + getTranslation("official_videos") + "</div>";
  for (var a = 0; a < e.official.length; a++) {
    let s = e.official[a];
    let n = "";
    if (a % 2 != 0) {
      n = " even";
    }
    t += "<div class=\"video" + n + "\"><a href=\"https://www.youtube.com/watch?v=" + s.id + "\" target=\"_blank\" rel=\"nofollow\" onClick=\"gtag('event', 'official-" + (a + 1) + "', {'event_category' : 'ytVideoPlay'});\"><img src=\"https://i.ytimg.com/vi/" + s.id + "/mqdefault.jpg\"><div class=\"videoTitle\">" + s.title + "</div></a></div>";
  }
  t += "<br><span>" + getTranslation("sub_to_stay_up_date") + "</span>";
  t += "<script src=\"https://apis.google.com/js/platform.js\"></script><br><div class=\"g-ytsubscribe\" data-channelid=\"UC0WfUy6ARUlpzsg4kixdL4w\" data-layout=\"default\" data-count=\"default\"></div><br><br>";
  t += "<div class=\"title\">" + getTranslation("30d_videos") + "</div>";
  for (a = 0; a < e["30days"].length; a++) {
    let s = e["30days"][a];
    let n = "";
    if (a % 2 != 0) {
      n = " even";
    }
    t += "<div class=\"video" + n + "\"><a href=\"https://www.youtube.com/watch?v=" + s.id + "\" target=\"_blank\" rel=\"nofollow\" onClick=\"gtag('event', 'top30-" + (a + 1) + "', {'event_category' : 'ytVideoPlay'});\"><img src=\"https://i.ytimg.com/vi/" + s.id + "/mqdefault.jpg\"><div class=\"videoViews\">&#128065;" + s.views + "</div><div class=\"author\">" + s.author + "</div><div class=\"videoTitle\">" + s.title + "</div></a></div>";
  }
  t += "<div class=\"title\">" + getTranslation("7d_videos") + "</div>";
  for (a = 0; a < e["7days"].length; a++) {
    let s = e["7days"][a];
    let n = "";
    if (a % 2 != 0) {
      n = " even";
    }
    t += "<div class=\"video" + n + "\"><a href=\"https://www.youtube.com/watch?v=" + s.id + "\" target=\"_blank\" rel=\"nofollow\" onClick=\"gtag('event', 'top7-" + (a + 1) + "', {'event_category' : 'ytVideoPlay'});\"><img src=\"https://i.ytimg.com/vi/" + s.id + "/mqdefault.jpg\"><div class=\"videoViews\">&#128065;" + s.views + "</div><div class=\"author\">" + s.author + "</div><div class=\"videoTitle\">" + s.title + "</div></a></div>";
  }
  t += "<div class=\"title\">" + getTranslation("latest_videos") + "</div>";
  for (a = 0; a < e.latest.length; a++) {
    let s = e.latest[a];
    let n = "";
    if (a % 2 != 0) {
      n = " even";
    }
    t += "<div class=\"video" + n + "\"><a href=\"https://www.youtube.com/watch?v=" + s.id + "\" target=\"_blank\" rel=\"nofollow\" onClick=\"gtag('event', 'latest-" + (a + 1) + "', {'event_category' : 'ytVideoPlay'});\"><img src=\"https://i.ytimg.com/vi/" + s.id + "/mqdefault.jpg\"><div class=\"videoViews\">&#128065;" + s.views + "</div><div class=\"author\">" + s.author + "</div><div class=\"videoTitle\">" + s.title + "</div></a></div>";
  }
  $("#videos .content").html(t);
}
function openShop(e) {
  $(".popups>.overlay").hide();
  $(".popups>.popup").hide();
  $("#shop").fadeIn();
  $(".popups>.overlay").fadeIn();
  $("#shop .content").html("<span class=\"fly-loader\"></span>");
  $.ajax({
    type: "GET",
    url: siteUrl + "api/getShop.php" + (siteHide.premiumFeatures ? "?allowBuyGems=0" : ""),
    xhrFields: {
      withCredentials: true
    },
    success: function (t) {
      $("#shop .content").html(t);
      translatePage();
      reloadImages();
      selectShopSkins();
      if ("newOffer" == e) {
        var a = $("#newOffer").data("open");
        showShopTab(a);
        var s = $("#newOffer").data("skin");
        var n = $("#newOffer").data("skin-id");
        if (null != s && null != n) {
          var i = $("#" + a + " [data-skin=" + s + "][data-skin-id=" + n + "]");
          $(i).css({
            background: "#ffe772"
          }).addClass("blinkBorder");
          $("#shop").scrollTop($(i).offset().top + $(i).height() / 2 - window.innerHeight / 2);
        }
      } else if ("premium" == e) {
        showShopTab("premium");
      } else if (null != currentShopTab) {
        showShopTab(currentShopTab);
      }
    }
  });
}
function showRules() {
  hidePokiAd();
  overlayLock = true;
  $("#rules").fadeIn();
  $(".popups>.overlay").fadeIn();
}
function acceptRules() {
  overlayLock = false;
  $(".popups .overlay").fadeOut();
  $("#rules").fadeOut();
  $.ajax({
    type: "POST",
    url: siteUrl + "api/acceptRules.php",
    dataType: "json",
    xhrFields: {
      withCredentials: true
    }
  });
}
!function () {
  var e = {
    ele: "body",
    type: "info",
    offset: {
      from: "top",
      amount: 10
    },
    align: "right",
    width: 250,
    delay: 4e3,
    allow_dismiss: true,
    stackup_spacing: 10
  };
  $.notify = function (t, a, s, n) {
    var i;
    var o;
    var r;
    n = $.extend({}, e, n);
    i = $("<div class=\"notify notify-" + t + "\"></div>");
    if (n.allow_dismiss) {
      i.append("<span class=\"close\" data-dismiss=\"alert\">&times;</span>");
    }
    if (undefined !== s) {
      i.append("<div style='height:100%;float:left'><img style='width: 60px;' src='" + s + "'></div>");
    }
    i.append("<div style='float:right;width:calc(100% - 66px)'>" + a + "</div>");
    if (n.top_offset) {
      n.offset = {
        from: "top",
        amount: n.top_offset
      };
    }
    r = n.offset.amount;
    $(".notify").each(function () {
      return r = Math.max(r, parseInt($(this).css(n.offset.from)) + $(this).outerHeight() + n.stackup_spacing);
    });
    (o = {
      position: "body" === n.ele ? "fixed" : "absolute",
      margin: 0,
      "z-index": "9999",
      display: "none"
    })[n.offset.from] = r + "px";
    i.css(o);
    if ("auto" !== n.width) {
      i.css("width", n.width + "px");
    }
    $(n.ele).append(i);
    switch (n.align) {
      case "center":
        i.css({
          left: "50%",
          "margin-left": "-" + i.outerWidth() / 2 + "px"
        });
        break;
      case "left":
        i.css("left", "20px");
        break;
      default:
        i.css("right", "20px");
    }
    function l() {
      i.fadeOut(function () {
        return i.remove();
      });
    }
    i.fadeIn();
    if (n.delay > 0) {
      setTimeout(l, n.delay);
    }
    i.find("[data-dismiss=\"alert\"]").click(l);
    return i;
  };
}();
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
}, true);
var lastChangelogDate = null;
function loadChangelog() {
  $.ajax({
    type: "GET",
    url: siteUrl + "api/getChangelog.php",
    xhrFields: {
      withCredentials: true
    },
    success: function (e) {
      $("#changelog .content").html(e);
      var t = e.match(/\d{2}([\/.-])\d{2}\1\d{4}/);
      if (null != (lastChangelogDate = t[0])) {
        if (null == getCookie("lastChangelogDate")) {
          setCookie("lastChangelogDate", lastChangelogDate, 365);
        } else if (getCookie("lastChangelogDate") != lastChangelogDate) {
          $("[id=\"changelog-button\"]").html("<div class='attention'></div>");
        }
      }
    }
  });
}
function openChangelog() {
  $("#changelog").fadeIn();
  $(".popups>.overlay").fadeIn();
  $("[id=\"changelog-button\"]").html("");
  if (null != lastChangelogDate) {
    setCookie("lastChangelogDate", lastChangelogDate, 365);
  }
  hideElements();
}
function openHighscores() {
  $("#highscores").fadeIn();
  $(".popups>.overlay").fadeIn();
  $("#highscores .content").html("<span class=\"fly-loader\"></span>");
  $.ajax({
    type: "GET",
    url: siteUrl + "api/highscores.html",
    success: function (e) {
      $("#highscores .content").html(e);
      translatePage();
    }
  });
}
function newPopup(e, t, a) {
  if (0 == e) {
    e = "temp" + Math.floor(1e6 * Math.random());
  }
  var s = "OK";
  overlayLock = true;
  var n = true;
  var i = 0;
  var o = "";
  o += "<div class=\"popup\" data-id=\"" + e + "\">";
  if (1 == t) {
    s = "&#127873;";
    var r = a.split(",")[0];
    var l = a.split(",")[1];
    o += "<div class=\"title\" data-translate=\"congratulations\"></div>";
    o += "<div data-translate=\"you_reached_level\" data-translate-vars=\"[" + r + "]\"></div>";
    o += "<img class=\"character-image\" data-id=\"" + r + "\" style=\"height:100px\"></center><br>";
    o += "<img src=\"" + cdnServer + "images/shop/gem.png\" style=\"height:15px\"> <span data-translate=\"you_received_for_level\" data-translate-vars=\"[" + l + "]\"></span> <img src=\"" + cdnServer + "images/shop/gem.png\" style=\"height:15px\">";
  } else if (2 == t) {
    o += "<div class=\"title\" data-translate=\"premium_account\"></div>";
    o += "<span data-translate=\"premium_expired\"></span>";
  } else if (3 == t) {
    o += "<div class=\"title\" data-translate=\"purchase_completed\"></div>";
    o += "<span data-translate=\"purchase_completed_long\"></span>";
  } else if (4 == t) {
    s = "&#127873;";
    l = a;
    o += "<div class=\"title\" data-translate=\"reward_for_help\"></div>";
    o += "<img src=\"" + cdnServer + "images/shop/gem.png\" style=\"height:15px\"> <span data-translate=\"you_received_for_help\" data-translate-vars=\"[" + l + "]\"></span> <img src=\"" + cdnServer + "images/shop/gem.png\" style=\"height:15px\">";
  } else if (5 == t && popupsFirstTime) {
    i = 60;
    n = false;
    o += "<div class=\"title\" data-translate=\"warning\"></div>";
    o += "<span data-translate=\"account_share_warning\"></span>";
  } else if (6 == t) {
    n = false;
    o += "<div class=\"title\">" + (lang.account_banned.charAt(0).toUpperCase() + lang.account_banned.slice(1)) + "</div>";
    o += "<span>" + lang.account_banned_text + "</span><br>";
    o += "<span>" + a + "</span>";
  } else if (7 == t) {
    n = false;
    i = 60;
    o += "<div class=\"title\" data-translate=\"warning\"></div>";
    o += "<span data-translate=\"bad_nickname_warning\" data-translate-vars='[\"" + a.split(",")[0] + "\", \"" + (c = a.split(",")[1]) + "\"]'></span>";
  } else if (8 == t) {
    n = false;
    o += "<span>" + a + "</span>";
  } else if (9 == t) {
    s = "&#127873;";
    l = a;
    o += "<div class=\"title\">&#127881;<span data-translate=\"evoworld_birthday\"></span>&#127881;</div>";
    o += "<img src=\"" + cdnServer + "images/shop/crown_4.png\" style=\"height:15px\"> <span data-translate=\"evoworld_birthday_text\"></span> <img src=\"" + cdnServer + "images/shop/crown_4.png\" style=\"height:15px\">";
  } else if (10 == t) {
    s = "&#127873;";
    l = a;
    o += "<div class=\"title\" data-translate=\"you_used_gift_code\"></div>";
    o += "<img src=\"" + cdnServer + "images/shop/gem.png\" style=\"height:15px\"> <span data-translate=\"you_received_gems\" data-translate-vars=\"[" + l + "]\"></span> <img src=\"" + cdnServer + "images/shop/gem.png\" style=\"height:15px\">";
  } else {
    if (11 != t || !popupsFirstTime) {
      return;
    }
    var d = a.split(",")[0];
    var c = a.split(",")[1];
    n = false;
    o += "<div class=\"title\" data-translate=\"email _changing\"></div>";
    if (Date.parse(user.newEmailDate) / 1e3 > serverTime) {
      o += "<span data-translate=\"change_email_warning\" data-translate-vars='[\"" + d + "\",\"" + c + " CET\"]'></span>";
    } else {
      o += "<span data-translate=\"change_email_ready\" data-translate-vars='[\"" + d + "\"]'></span>";
    }
  }
  if ($(".popups .popup[data-id]").length >= 1) {
    n = false;
  }
  o += "<br><button data-button-popup-id=" + e + " class=\"orange-button\" style=\"margin-top:5px\" onClick=\"$('.popups .popup[data-id=\\'" + e + "\\']').fadeOut(300, function(){$(this).remove();}); if($('.popups .popup[data-id]').length<=1) {$('.popups .overlay').fadeOut();overlayLock=false;} $.ajax({type: 'POST',data: {id:'" + e + "'},xhrFields: {withCredentials: true},url: '" + siteUrl + "api/closePopup.php'}); " + (n ? "openShop();" : "") + "\">" + s + "</button>";
  o += "</div>";
  $(".popups").append(o);
  $(".popups .overlay").show();
  $(".popups .popup[data-id=" + e + "]").show();
  if (i > 0) {
    buttonCountdown(e, i, s);
  }
  hidePokiAd();
  translatePage();
}
function buttonCountdown(e, t, a) {
  if (t > 0) {
    $("button[data-button-popup-id='" + e + "'").attr("disabled", true).css({
      filter: "grayscale(1)"
    }).text(t);
    t -= 1;
    setTimeout(buttonCountdown, 1e3, e, t, a);
  } else {
    $("button[data-button-popup-id='" + e + "'").attr("disabled", false).css({
      filter: "grayscale(0)"
    }).text(a);
  }
}
function afterTranslatePage(e) {
  $(".logo-container").width(1.7 * $(".logo-text").width());
}
function scanPlayers() {
  if (1 != game.me.inBattleRoyaleZone) {
    var e = $("#scan-players-icon");
    if ("empty" == $(e).data("status")) {
      $(e).fadeOut(500);
      $(e).data("status", "waiting");
      setTimeout(function () {
        gameServer.emit(socketMsgType.SCANPLAYERS);
      }, 500);
    } else if ("ready" == $(e).data("status") && scanPlayersArr.length > 0) {
      hideEmotesMenu();
      showPlayersScans();
    }
  }
}
loadChangelog();
var scanPlayersOpened = false;
function showPlayersScans() {
  scanPlayersOpened = true;
  var e = $("#scanPlayers");
  $(e).empty();
  $(e).append("<div class='close' onClick='$(\"#scanPlayers\").hide();scanPlayersOpened=false;'></div>");
  $(e).append("<div class='title'>" + (lang.scan_results.charAt(0).toUpperCase() + lang.scan_results.slice(1)) + "</div><br>");
  var t = "<div style='margin: 0 auto;display: block;width: fit-content;'>";
  for (var a = 0; a < scanPlayersArr.length; a++) {
    var s = scanPlayersArr[a];
    var n = s.evolution;
    var i = s.skin;
    if (true !== game.objectsDef[n].skinsLoaded[i]) {
      i = 0;
    }
    var o = game.objectsDef[n].animations.flying_right;
    var r = o.sprites[Object.keys(o.sprites)[0]];
    if (0 != i) {
      r += "_" + i;
    }
    var l = game.objectsDef[n].width;
    var d = game.objectsDef[n].height;
    t += "<div class='player' onClick='scanPlayer(" + a + ")'><div class='nick'>[" + s.level + "] " + s.nick + "</div><img class='sprite-image' data-name='" + r + "' style='width:" + l + ";height:" + d + "'></div>";
  }
  t += "</div>";
  $(e).append(t);
  $(e).append("<div style='clear:both'></div><br><br><center><button class='orange-button' onClick='$(\"#scanPlayers\").empty().hide();scanPlayersOpened=false;$(\"#scan-players-icon\").data(\"status\",\"empty\").attr(\"src\",cdnServer+\"images/scan-players.png\").css(\"background\",\"rgba(255, 255, 255, 0.562)\");'>" + (lang.clear_results.charAt(0).toUpperCase() + lang.clear_results.slice(1)) + "</button></center>");
  $(e).show();
  reloadImages();
}
function scanPlayer(e) {
  scanPlayersOpened = true;
  var t = false;
  if ("object" == typeof e) {
    (s = e).skin = 0;
    var a = s.level;
    if (a < 0) {
      a = 0;
    }
    if (a >= Object.keys(expTable).length - 1) {
      a = Object.keys(expTable).length - 2;
    }
    s.evolution = Object.keys(expTable)[a];
    $(".popups>.overlay").fadeIn();
  } else {
    var s = scanPlayersArr[e];
    t = true;
  }
  var n = s.evolution;
  var i = s.skin;
  if (true !== game.objectsDef[n].skinsLoaded[i]) {
    i = 0;
  }
  var o = game.objectsDef[n].animations.flying_right;
  var r = o.sprites[Object.keys(o.sprites)[0]];
  if (0 != i) {
    r += "_" + i;
  }
  var l = game.objectsDef[n].width;
  var d = game.objectsDef[n].height;
  var c = s.skins.split(";");
  var u = "";
  var p = [];
  var g = 0;
  for (var h = 0; h < c.length; h++) {
    var f = c[h].split(",");
    p[y = f[0]] = [];
    for (var m = 1; m < f.length; m++) {
      i = f[m];
      p[y].push(i);
    }
    if (0 == p[y].length) {
      delete p[y];
    }
  }
  let v = ["grimReaper", "ghostlyReaper", "pumpkinGhost", "ghost", "pets", "evolution_effects", "kill_effects", "tombstones"];
  for (e = 0; e < v.length; e++) {
    var y;
    if (p[y = v[e]] && 0 != p[y].length) {
      var b = "";
      switch (y) {
        case "grimReaper":
        case "grimReaper":
          b = lang.grim_reaper;
          break;
        case "ghostlyReaper":
          b = lang.ghostly_reaper;
          break;
        case "pumpkinGhost":
          b = lang.pumpkin_ghost;
          break;
        case "ghost":
          b = lang.ghost;
          break;
        default:
          b = lang[y];
      }
      u += "<div class='skins'>" + (b = b.charAt(0).toUpperCase() + b.slice(1)) + "<br>";
      for (var q = 0; q < p[y].length; q++) {
        g++;
        i = p[y][q];
        if (skinsPreview[y]) {
          if ("pets" == y) {
            if (skinsPreview[y][i]) {
              var k = skinsPreview[y][i];
            } else {
              k = skinsPreview[y][0].replace("(id)", i);
            }
            u += "<img class='sprite-image' data-name='" + k + "' style='height:7vh'>";
          } else {
            if (skinsPreview[y][i]) {
              k = skinsPreview[y][i];
            } else {
              k = skinsPreview[y][0] + "_" + i;
            }
            u += "<img class='sprite-image' data-name='" + k + "'>";
          }
        }
      }
      u += "</div>";
    }
  }
  var A = $("#scanPlayers");
  $(A).empty();
  if (t) {
    $(A).append("<div class='close' onClick='showPlayersScans();'></div>");
  } else {
    $(A).append("<div class='close' onClick='$(\"#scanPlayers\").fadeOut();$(\".popups>.overlay\").fadeOut();'></div>");
  }
  $(A).append("<div class='title'>" + lang.player_info + "</div><br>");
  $(A).append("<div class='player' style='float:none; margin:0 auto; cursor: auto;'><div class='nick'>[" + s.level + "] " + s.nick + "</div><img class='sprite-image' data-name='" + r + "' style='width:" + l + ";height:" + d + "'></div>");
  if (t && user.id != s.id && !s.guest) {
    $(A).append("<center><button class='btnReport' onClick='$(this).hide(); $(\"#scanPlayers .reportBox\").show();'>" + lang.report_name + "</button><div class='reportBox' style='display:none;'><font color=red>[ENGLISH ONLY]</font> What does the player's name mean in English language? What language is this name in? <font color=red>[ENGLISH ONLY]</font><br><textarea id='reportPlayerText' rows='4' cols='50' maxlength='256'></textarea><br><input id='reportCheckBox' type='checkbox' onClick='$(\"#reportPlayerBtn\").css(\"filter\",(this.checked)?\"none\":\"grayscale(100)\")'> " + lang.report_accept + "<br><button class='btnReport' id='reportPlayerBtn' style='filter: grayscale(100%);' onClick=\"reportPlayer('" + s.id + "','" + s.nick + "','" + s.token + "','" + s.tokenTime + "')\">" + lang.report_name + "</button></div></center>");
  }
  if (friendsArr[s.id]) {
    $(A).append("<center><button class='red-button' style='margin-top:5px' onClick='if (confirm(getTranslation(\"are_you_sure\")) != true) return; $(this).remove(); deleteFriend(" + s.id + ");'>" + lang.remove_from_friends + "</button></center>");
  }
  var w = "<br><center>";
  w += "ID: #" + s.id + " <span onClick='copyToClipboard(\"" + s.id + "\"); $(this).html(\"(" + lang.copied.toLowerCase() + ")\")' style='color:#7289DA;cursor:pointer;'>(" + lang.copy.toLowerCase() + ")</span><br>";
  w += lang.level.charAt(0).toUpperCase() + lang.level.slice(1) + ": " + s.level + "<br><div class='experienceBar'><div class='bar' style='width:" + s.accountExperiencePercents + "%'></div><span class='exp'>" + s.accountExperience.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "/" + s.accountExperienceNextLevel.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "</span><span class='exp-left'></span></div><br>";
  w += lang.registered.charAt(0).toUpperCase() + lang.registered.slice(1) + ": " + (s.guest ? "<font color=red>" + lang.no + "</font>" : "<font color=green>" + lang.yes + "</font>") + "<br>";
  w += lang.join_date.charAt(0).toUpperCase() + lang.join_date.slice(1) + ": " + s.registerDate + "<br>";
  w += lang.premium_account.charAt(0).toUpperCase() + lang.premium_account.slice(1) + ": " + (s.premium ? "<font color=green>" + lang.yes + "</font>" : "<font color=red>" + lang.no + "</font>") + "<br>";
  if (null != s.playTime) {
    w += lang.total_time_in_game.charAt(0).toUpperCase() + lang.total_time_in_game.slice(1) + " " + formatDuration(s.playTime) + "<br>";
  }
  if (null != s.gemsFound) {
    w += lang.gems_found_ingame.charAt(0).toUpperCase() + lang.gems_found_ingame.slice(1) + " " + s.gemsFound + "<br>";
  }
  if (null != s.bossCount) {
    w += lang.number_of_killed_demonic_angels.charAt(0).toUpperCase() + lang.number_of_killed_demonic_angels.slice(1) + " " + s.bossCount + "<br>";
  }
  if (Object.keys(p).length > 0) {
    w += "<br><span style='font-size:200%'>" + (lang.skins.charAt(0).toUpperCase() + lang.skins.slice(1)) + ":</span></center>";
    if (g) {
      w += "<center>" + (lang.number_of_unlocked_skins.charAt(0).toUpperCase() + lang.number_of_unlocked_skins.slice(1)) + " " + g + "</center><br>";
    }
  }
  $(A).append(w);
  $(A).append(u);
  reloadImages();
  $("#scanPlayers .experienceBar").mouseover(function () {
    expShowTimeout = setTimeout(function () {
      var e = $("#scanPlayers .experienceBar > .exp").text();
      var t = parseInt(e.split("/")[0].replace(/ /g, ""));
      var a = (parseInt(e.split("/")[1].replace(/ /g, "")) - t).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      $("#scanPlayers .experienceBar > .exp-left").text(a + " EXP " + lang.to_the_next_level);
      $("#scanPlayers .experienceBar > .exp").fadeOut("slow");
      $("#scanPlayers .experienceBar > .exp-left").fadeIn("slow");
    }, 200);
  });
  $("#scanPlayers .experienceBar").mouseout(function () {
    clearTimeout(expShowTimeout);
    $("#scanPlayers .experienceBar > .exp").fadeIn("slow");
    $("#scanPlayers .experienceBar > .exp-left").fadeOut("slow");
  });
  $(A).fadeIn();
}
function getUserProfile(e, t) {
  if (!$("#scanPlayers").is(":visible")) {
    $.ajax({
      type: "GET",
      url: siteUrl + "api/getUserProfile.php?id=" + e + "&key=" + t,
      success: function (e) {
        if (e.success) {
          scanPlayer(e);
        }
      }
    });
  }
}
function capitalizeFirstLetter(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function isJsonString(e) {
  try {
    JSON.parse(e);
  } catch (e) {
    return false;
  }
  return true;
}
var trimedImagesArr = [];
function trimImageBackground(e) {
  if (undefined !== e.name && "" !== e.name && undefined !== trimedImagesArr[e.name]) {
    return trimedImagesArr[e.name];
  }
  var t = document.createElement("canvas").getContext("2d", {
    willReadFrequently: true
  });
  var a = e.width;
  var s = e.height;
  if (a > 150) {
    s *= 150 / a;
    a = 150;
  }
  if (s > 150) {
    a *= 150 / s;
    s = 150;
  }
  a = ceil(a);
  s = ceil(s);
  t.canvas.width = a;
  t.canvas.height = s;
  t.drawImage(e, 0, 0, a, s);
  var i;
  var o;
  var r;
  var l = document.createElement("canvas").getContext("2d");
  var d = t.getImageData(0, 0, a, s);
  var c = d.data.length;
  var u = {
    top: null,
    left: null,
    right: null,
    bottom: null
  };
  for (i = 0; i < c; i += 4) {
    if (0 !== d.data[i + 3]) {
      o = i / 4 % a;
      r = ~~(i / 4 / a);
      u.top = r;
      if (true || o < null) {
        u.left = o;
      }
      if (true || null < o) {
        u.right = o;
      }
      if (true || null < r) {
        u.bottom = r;
      }
    }
  }
  l.canvas.width = 1;
  l.canvas.height = 1;
  l.drawImage(t.canvas, null, null, 1, 1, 0, 0, 1, 1);
  var h = l.canvas.toDataURL();
  if (undefined !== e.name) {
    trimedImagesArr[e.name] = h;
  }
  return h;
}
function ShortcutsManager() {
  this.shortcuts = [];
  this.changingKey = null;
  this.init = function () {
    var e = this;
    $(document).on("keydown", function (t) {
      e.handleShortcut(t.key);
    });
    $("#keyboard-shortcuts .key").each(function () {
      var t = $(this).data("key");
      $(this).on("click", function () {
        if (e.changingKey == t) {
          e.changingKey = null;
          $(this).removeClass("changing");
          return void $("#keyboard-shortcuts .clear").hide();
        }
        e.changingKey = t;
        if (e.shortcuts[t] && "none" != e.shortcuts[t].action) {
          $("#keyboard-shortcuts .clear").show();
        }
        $("#keyboard-shortcuts .key").each(function () {
          $(this).removeClass("changing");
        });
        $(this).addClass("changing");
      });
    });
    $("#keyboard-shortcuts .clear").on("click", function () {
      e.setKeyAction({
        action: "none"
      }, true);
      $(this).hide();
    });
    this.reload();
  };
  this.addShortcut = function (e, t) {
    this.shortcuts[e] = t;
  };
  this.removeShortcut = function (e) {
    delete this.shortcuts[e];
  };
  this.handleShortcut = function (e) {
    if (undefined !== e && "text" != document.activeElement.type && "textarea" != document.activeElement.type && (e = e.toLowerCase(), undefined !== this.shortcuts[e])) {
      this.changingKey = null;
      var t = this.shortcuts[e];
      if ("sendEmote" == t.action) {
        sendEmote(t.emoteId);
      }
      if ("sendChat" == t.action) {
        sendChat(t.chatId);
      }
    }
  };
  this.setShortcutToEmote = function (e, t) {
    this.addShortcut(e, {
      action: "sendEmote",
      emoteId: t
    });
    var a = $(".emotesMenu [data-emote-id='" + t + "']").find("img").attr("src");
    $("#keyboard-shortcuts .key[data-key='" + this.changingKey + "'] .action").html("<img class='emote' src='" + a + "'/>");
  };
  this.setShortcutToChat = function (e, t) {
    this.addShortcut(e, {
      action: "sendChat",
      chatId: t
    });
    var a = $(".chatmenu [data-chat-id='" + t.toString().replace(/'/g, "\\'") + "']").text() || t;
    if (0 === a.indexOf("text_")) {
      a = a.substr(5);
    }
    $("#keyboard-shortcuts .key[data-key='" + this.changingKey + "'] .action").html("<span class='text'>" + a + "</span>");
  };
  this.setKeyAction = function (e, t = true) {
    if (e) {
      var a = e.action;
      if ("none" == a) {
        this.removeShortcut(this.changingKey);
        $("#keyboard-shortcuts .key[data-key='" + this.changingKey + "'] .action").html("");
      }
      if ("sendEmote" == a) {
        var s = e.emoteId;
        this.setShortcutToEmote(this.changingKey, s);
      }
      if ("sendChat" == a) {
        var n = e.chatId;
        this.setShortcutToChat(this.changingKey, n);
      }
      this.changingKey = null;
      this.saveKeysToLocalStorage();
      if (t) {
        $("#keyboard-shortcuts .key").each(function () {
          $(this).removeClass("changing");
        });
        $("#keyboard-shortcuts .clear").hide();
      }
    }
  };
  this.saveKeysToLocalStorage = function () {
    var e = [];
    for (var t in this.shortcuts) e.push({
      key: t,
      data: this.shortcuts[t]
    });
    localStorage.setItem("shortcuts_" + user.id, JSON.stringify(e));
  };
  this.loadKeysFromLocalStorage = function () {
    var e = localStorage.getItem("shortcuts_" + user.id);
    if (e) {
      e = JSON.parse(e);
      for (var t = 0; t < e.length; t++) {
        this.changingKey = e[t].key;
        this.setKeyAction(e[t].data, false);
      }
    }
  };
  this.reload = function () {
    this.shortcuts = [];
    $("#keyboard-shortcuts .key").each(function () {
      var e = $(this).data("key").toString().toUpperCase();
      $(this).html("<span class='name'>" + e + "</span><span class='action'></span>");
    });
    this.loadKeysFromLocalStorage();
  };
  this.hide = function () {
    $("#keyboard-shortcuts").fadeOut();
    shortcutsManager.changingKey = null;
  };
  this.show = function () {
    shortcutsManager.changingKey = null;
    $("#keyboard-shortcuts .key").each(function () {
      $(this).removeClass("changing");
    });
    $("#keyboard-shortcuts").fadeIn();
    $("#keyboard-shortcuts .clear").hide();
  };
}
var shortcutsManager = new ShortcutsManager();
function showFriendsTab(e) {
  document.querySelector(".tabs-buttons .tab-button.active").classList.remove("active");
  document.querySelector(".tabs-buttons .tab-button:nth-child(" + (e + 1) + ")").classList.add("active");
  document.querySelector(".tabs .friends-list").style.display = 0 == e ? "block" : "none";
  document.querySelector(".tabs .requests-list").style.display = 1 == e ? "block" : "none";
}
shortcutsManager.init();
$(function () {
  $("input[name='onlynumbers']").on("input", function (e) {
    $(this).val($(this).val().replace(/[^0-9]/g, ""));
  });
});
$("#friends .title-buttons .add-friend").on("click", function () {
  $("#friends .add-friend-box").toggle();
});
var wasChatBoxVisible = false;
function openFriends() {
  $("#friends").fadeIn();
  $("#open-friends-icon").hide();
  $("#open-friends-icon").removeClass("notification-blink");
  refreshFriends();
  if (wasChatBoxVisible) {
    $("#chat-box").fadeIn();
    getChatMessages();
    wasChatBoxVisible = false;
  }
}
function closeFriends() {
  $("#friends").fadeOut();
  $("#open-friends-icon").show();
  if ($("#chat-box").is(":visible")) {
    $("#chat-box").fadeOut();
    wasChatBoxVisible = true;
  }
}
function addFriend(e) {
  $.ajax({
    type: "POST",
    url: siteUrl + "api/addFriend.php",
    data: {
      id: e
    },
    dataType: "json",
    xhrFields: {
      withCredentials: true
    },
    success: function (e) {
      if (e.success) {
        refreshFriends().then(() => {
          $("#addFriendMsg").data("translate", "invitation_sent").css("color", "green");
          translate($("#addFriendMsg"));
        });
      } else {
        if (0 === e.msg.indexOf("friends_limit_reached")) {
          var t = e.msg.split(",");
          $("#addFriendMsg").data("translate", t[0]).data("translate-vars", [t[1], t[2]]).css("color", "red");
        } else if (lang[e.msg]) {
          $("#addFriendMsg").data("translate", e.msg).css("color", "red");
        }
        translate($("#addFriendMsg"));
      }
    }
  });
}
function acceptFriend(e) {
  $.ajax({
    type: "POST",
    url: siteUrl + "api/addFriend.php",
    data: {
      id: e
    },
    dataType: "json",
    xhrFields: {
      withCredentials: true
    },
    success: function (e) {
      if (!e.success && 0 === e.msg.indexOf("friends_limit_reached")) {
        var t = e.msg.split(",");
        alert(getTranslation(t[0], [t[1], t[2]]));
      }
      refreshFriends();
    }
  });
}
function deleteFriend(e) {
  $.ajax({
    type: "POST",
    url: siteUrl + "api/deleteFriend.php",
    data: {
      id: e
    },
    dataType: "json",
    xhrFields: {
      withCredentials: true
    },
    success: function (e) {
      if (e.success) {
        refreshFriends();
      }
    }
  });
}
$("#friends .title-buttons .minimize").on("click", function () {
  closeFriends();
});
$("#open-friends-icon").on("click", function () {
  if (user.guest) {
    alert(lang.guest_cant_use_friends);
  } else {
    openFriends();
  }
});
$("#canvasGame").on("click", function () {
  if ($("#friends").is(":visible")) {
    closeFriends();
  }
});
$(document).on("keydown", function (e) {
  if ("text" != document.activeElement.type && "textarea" != document.activeElement.type) {
    if (!("f" != e.key && "F" != e.key)) {
      if ($("#friends").is(":visible")) {
        closeFriends();
      } else if (!user.guest) {
        openFriends();
      }
    }
  }
});
$("#buttonAddFriend").on("click", function () {
  var e = $("#addFriendInput").val();
  if (!(e.length <= 0)) {
    addFriend(e);
    $("#addFriendInput").val("");
  }
});
setInterval(function () {
  if (!(user.guest || document.hidden)) {
    if ($("#friends").is(":visible")) {
      refreshFriends();
    } else {
      $.ajax({
        type: "GET",
        url: siteUrl + "api/alive.php",
        dataType: "json",
        xhrFields: {
          withCredentials: true
        }
      });
    }
  }
}, 1e4);
document.addEventListener("visibilitychange", function () {
  if (!document.hidden) {
    if ($("#friends").is(":visible")) {
      refreshFriends();
    }
  }
});
var friendsData = {};
var friendsArr = [];
function refreshFriends() {
  if (!user.guest) {
    return new Promise((e, t) => {
      $.ajax({
        type: "GET",
        url: siteUrl + "api/getFriends.php",
        dataType: "json",
        xhrFields: {
          withCredentials: true
        },
        success: function (a) {
          if (a.success) {
            if (a.yourId != user.id) {
              return;
            }
            let t = JSON.stringify(friendsData);
            if (a.friendsIds && a.friendsToken) {
              friendsData.ids = a.friendsIds;
              friendsData.token = a.friendsToken;
            } else {
              friendsData = {};
            }
            if (joinedGame && t != JSON.stringify(friendsData)) {
              gameServer.emit("game:friends", friendsData);
            }
            let d = a.friends;
            d.sort(function (e, t) {
              return "online" == e.status && "online" != t.status ? -1 : "online" != e.status && "online" == t.status || "offline" == e.status && "offline" != t.status ? 1 : "offline" != e.status && "offline" == t.status ? -1 : 0;
            });
            d.sort(function (e, t) {
              return e.server && !t.server ? -1 : !e.server && t.server ? 1 : 0;
            });
            d.sort(function (e, t) {
              if ("offline" == e.status && "offline" == t.status) {
                var a = e.lastSeen;
                var s = t.lastSeen;
                var n = parseInt(a.substring(0, a.length - 1));
                var i = parseInt(s.substring(0, s.length - 1));
                var o = a.substring(a.length - 1);
                var r = s.substring(s.length - 1);
                if ("m" == o) {
                  n *= 60;
                }
                if ("h" == o) {
                  n *= 3600;
                }
                if ("d" == o) {
                  n *= 86400;
                }
                if ("m" == r) {
                  i *= 60;
                }
                if ("h" == r) {
                  i *= 3600;
                }
                if ("d" == r) {
                  i *= 86400;
                }
                if (n < i) {
                  return -1;
                }
                if (n > i) {
                  return 1;
                }
              }
              return 0;
            });
            newFriendsArr = [];
            var s = "";
            var n = "";
            var i = 0;
            var o = "";
            for (var r = 0; r < d.length; r++) {
              var l = d[r];
              if (friendsArr[l.id] && friendsArr[l.id].status != l.status) {
                reloadChatFriendInfo(l.id, l);
              }
              if ("received" == l.status) {
                i++;
                n += "<div class=\"request\">\n\t\t\t\t\t\t\t\t\t<div class=\"avatar\" style=\"cursor:pointer\" onClick=\"getUserProfile(" + l.id + ",'" + l.profileKey + "')\"><img data-avatar-level=" + l.level + "><div class=\"level\">" + l.level + "</div></div>\n\t\t\t\t\t\t\t\t\t<div style=\"direction: ltr;display: inline-block;\">\n\t\t\t\t\t\t\t\t\t<div class=\"name\" style=\"cursor:pointer\" onClick=\"getUserProfile(" + l.id + ",'" + l.profileKey + "')\">" + l.name + "</div>\n\t\t\t\t\t\t\t\t\t<span class='friend-id'>#" + l.id + "</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<div style=\"direction: ltr;display: inline-block;\">\n\t\t\t\t\t\t\t\t\t<img class=\"add-img\" src=\"" + cdnServer + "images/add.png\" onClick=\"acceptFriend(" + l.id + ")\">\n\t\t\t\t\t\t\t\t\t<img class=\"remove-img\" src=\"" + cdnServer + "images/remove.png\" onClick=\"deleteFriend(" + l.id + ")\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>";
              }
              if ("online" == l.status) {
                if (null == l.server) {
                  s += "<div class=\"friend lobby\" data-id=" + l.id + ">\n\t\t\t\t\t\t\t\t\t<div class=\"avatar\" style=\"cursor:pointer\" onClick=\"getUserProfile(" + l.id + ",'" + l.profileKey + "')\"><img data-avatar-level=" + l.level + "><div class=\"level\">" + l.level + "</div></div>\n\t\t\t\t\t\t\t\t\t<div style=\"direction: ltr;display: inline-block;\">\n\t\t\t\t\t\t\t\t\t<div class=\"name\" style=\"cursor:pointer\" onClick=\"getUserProfile(" + l.id + ",'" + l.profileKey + "')\">" + l.name + "</div>\n\t\t\t\t\t\t\t\t\t<span class='friend-id'>#" + l.id + "</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"chat-bubble\" onClick=\"openChat(" + l.id + ")\">\n\t\t\t\t\t\t\t\t\t<span class=\"unread-count\" " + (0 == l.msgCount ? "style=\"display:none\"" : "") + ">" + (l.msgCount > 0 ? l.msgCount < 100 ? l.msgCount : "99+" : "") + "</span>\n\t\t\t\t\t\t\t\t\t<img class=\"chat-img\" data-cdn-load=\"images/chat_bubbles.png\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<div class=\"status\" data-translate=\"lobby\" style=\"cursor:pointer\" onClick=\"getUserProfile(" + l.id + ",'" + l.profileKey + "')\"></div>\n\t\t\t\t\t\t\t\t</div>";
                } else {
                  s += "<div class=\"friend online\" data-id=" + l.id + ">\n\t\t\t\t\t\t\t\t\t<div class=\"avatar\" style=\"cursor:pointer\" onClick=\"getUserProfile(" + l.id + ",'" + l.profileKey + "')\"><img data-avatar-level=" + l.level + "><div class=\"level\">" + l.level + "</div></div>\n\t\t\t\t\t\t\t\t\t<div style=\"direction: ltr;display: inline-block;\">\n\t\t\t\t\t\t\t\t\t<div class=\"name\" style=\"cursor:pointer\" onClick=\"getUserProfile(" + l.id + ",'" + l.profileKey + "')\">" + l.name + "</div>\n\t\t\t\t\t\t\t\t\t<span class='friend-id'>#" + l.id + "</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"chat-bubble\" onClick=\"openChat(" + l.id + ")\">\n\t\t\t\t\t\t\t\t\t<span class=\"unread-count\" " + (0 == l.msgCount ? "style=\"display:none\"" : "") + ">" + (l.msgCount > 0 ? l.msgCount < 100 ? l.msgCount : "99+" : "") + "</span>\n\t\t\t\t\t\t\t\t\t<img class=\"chat-img\" data-cdn-load=\"images/chat_bubbles.png\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<div class=\"status\" style=\"cursor:pointer\" onClick=\"getUserProfile(" + l.id + ",'" + l.profileKey + "')\">" + l.server + "</div>\n\t\t\t\t\t\t\t\t</div>";
                }
                newFriendsArr[l.id] = l;
              }
              if ("offline" == l.status) {
                s += "<div class=\"friend offline\" data-id=" + l.id + ">\n\t\t\t\t\t\t\t\t\t<div class=\"avatar\" style=\"cursor:pointer\" onClick=\"getUserProfile(" + l.id + ",'" + l.profileKey + "')\"><img data-avatar-level=" + l.level + "><div class=\"level\">" + l.level + "</div></div>\n\t\t\t\t\t\t\t\t\t<div style=\"direction: ltr;display: inline-block;\">\n\t\t\t\t\t\t\t\t\t<div class=\"name\" style=\"cursor:pointer\" onClick=\"getUserProfile(" + l.id + ",'" + l.profileKey + "')\">" + l.name + "</div>\n\t\t\t\t\t\t\t\t\t<span class='friend-id'>#" + l.id + "</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"chat-bubble\" onClick=\"openChat(" + l.id + ")\">\n\t\t\t\t\t\t\t\t\t<span class=\"unread-count\" " + (0 == l.msgCount ? "style=\"display:none\"" : "") + ">" + (l.msgCount > 0 ? l.msgCount < 100 ? l.msgCount : "99+" : "") + "</span>\n\t\t\t\t\t\t\t\t\t<img class=\"chat-img\" data-cdn-load=\"images/chat_bubbles.png\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t<div class=\"status\" style=\"cursor:pointer\" onClick=\"getUserProfile(" + l.id + ",'" + l.profileKey + "')\"><span data-translate=\"last_seen\"></span> <span class=\"when\" data-translate-time-ago=\"" + l.lastSeen + "\"></span></div>\n\t\t\t\t\t\t\t\t</div>";
                newFriendsArr[l.id] = l;
              }
              if ("sent" == l.status) {
                o += "<div class=\"request\">\n\t\t\t\t\t\t\t\t\t<div class=\"name\">#" + l.id + "</div>\n\t\t\t\t\t\t\t\t\t<img class=\"remove-img\" src=\"" + cdnServer + "images/remove.png\" onClick=\"deleteFriend(" + l.id + ")\">\n\t\t\t\t\t\t\t\t</div>";
              }
              if (l.msgCount > 0 && $("#open-friends-icon").is(":visible")) {
                $("#open-friends-icon").addClass("notification-blink");
              }
            }
            if (0 == d.length) {
              s = "<div data-translate=\"you_dont_have_friends\" style=\"position:absolute;width:100%;top:50%;text-align:center;transform: translate(0, -50%);color:grey;\"></div>";
            }
            $("#friends .friends-list .content").html(s);
            $("#friends .requests-list .content").html(n);
            $("#friends .sent-requests .content").html(o);
            if (0 == i) {
              $("#friends .requests-list").hide();
            } else {
              $("#friends .requests-list").show();
            }
            if (i < 2) {
              $("#friends .requests-list .cancel-all").hide();
            } else {
              $("#friends .requests-list .cancel-all").show();
            }
            if (0 == o.length) {
              $("#friends .sent-requests").hide();
            } else {
              $("#friends .sent-requests").show();
            }
            translate($("#friends [data-translate]"));
            translate($("#friends [data-translate-time-ago]"));
            $("#friends [data-avatar-level]").each(function () {
              loadAvatarByLevel($(this), $(this).data("avatar-level"));
            });
            friendsArr = newFriendsArr;
            loadCdnImages();
            e();
          } else {
            t(new Error("Failed to fetch friends data"));
          }
        },
        error: function (e, a, s) {
          t(new Error("AJAX request failed: " + s));
        }
      });
    });
  }
}
function openChat(e) {
  if (friendsArr[e]) {
    friendsArr[e];
    let t = $("#chat-box");
    if (!isMobile) {
      $(t).find("input").attr("placeholder", getTranslation("press_tab"));
    }
    if (t.data("id") == e && t.is(":visible")) {
      return void t.hide();
    }
    t.data("id", e);
    $(t).find(".messages").html("<span class=\"fly-loader\"></span>");
    reloadChatFriendInfo(e);
    $(t).find("input").val("");
    t.fadeIn();
    oldestChatMessage = null;
    newestChatMessage = null;
    getChatMessages();
  }
}
function reloadChatFriendInfo(e, t = null) {
  let a = $("#chat-box");
  if (a.data("id") != e) {
    return;
  }
  if (null == t) {
    t = friendsArr[e];
  }
  let s = $(a).find(".user");
  $(s).html("<div class='avatar' style=\"cursor:pointer\" onClick=\"getUserProfile(" + t.id + ",'" + t.profileKey + "')\"></div><div style=\"cursor:pointer\" class='name' onClick=\"getUserProfile(" + t.id + ",'" + t.profileKey + "')\"></div><br><div style=\"cursor:pointer\" class='status' onClick=\"getUserProfile(" + t.id + ",'" + t.profileKey + "')\"></div><div style='clear:both'></div>");
  $(s).find(".name").text(t.name);
  $(s).find(".avatar").html("<img data-avatar-level=" + t.level + "><div class='level'>" + t.level + "</div>");
  $(s).removeClass("online offline lobby");
  if ("online" == t.status) {
    if (null == t.server) {
      $(s).find(".status").html("<span data-translate='lobby'></span>");
      $(s).addClass("lobby");
    } else {
      $(s).find(".status").text(t.server);
      $(s).addClass("online");
    }
  } else if ("offline" == t.status) {
    $(s).find(".status").html("<span data-translate='last_seen'></span> <span class='when' data-translate-time-ago='" + t.lastSeen + "'></span>");
    $(s).addClass("offline");
  }
  translate($(s).find("[data-translate]"));
  translate($(s).find("[data-translate-time-ago]"));
  loadAvatarByLevel($(s).find(".avatar img"), t.level);
  let n = $(s).attr("class").split(" ");
  let i = $(a).find(".messages");
  for (let e = 0; e < n.length; e++) {
    if ("online" == n[e] || "lobby" == n[e] || "offline" == n[e]) {
      $(i).find(".message .name").parent().removeClass("online offline lobby").addClass(n[e]);
      break;
    }
  }
}
function sendChatMessage() {
  let e = $("#chat-box");
  let t = e.data("id");
  let a = $(e).find("input");
  let s = $(a).val();
  $(a).val("");
  if (!isMobile) {
    a.focus();
  }
  if (0 == s.length) {
    return;
  }
  let n = null;
  if (null != newestChatMessage) {
    n = newestChatMessage.id;
  }
  $.ajax({
    type: "POST",
    url: siteUrl + "api/chat.php",
    data: {
      id: t,
      action: "send",
      message: s,
      lastId: n
    },
    dataType: "json",
    xhrFields: {
      withCredentials: true
    },
    success: function (e) {
      if (e.success && e.messages) {
        handleChatMessages(e.messages);
      }
    },
    complete: function () {}
  });
}
function gotNewChatMessage(e) {
  if ($("#chat-box").data("id") == e && $("#chat-box").is(":visible")) {
    getChatMessages();
  } else {
    if (!wasChatBoxVisible || $("#chat-box").data("id") != e) {
      let t = $("#friends .friends-list .friend[data-id='" + e + "'] .chat-bubble");
      let a = $(t).find(".unread-count");
      let s = 0;
      if ($(a).is(":visible")) {
        s = parseInt($(a).text());
      }
      s++;
      if (s > 99) {
        s = "99+";
      }
      $(a).text(s).show();
      $(t).stop().animate({
        marginTop: -1
      }, 100).animate({
        marginTop: 4
      }, 100).animate({
        marginTop: -1
      }, 100).animate({
        marginTop: 4
      }, 100);
    }
    if ($("#open-friends-icon").is(":visible")) {
      $("#open-friends-icon").addClass("notification-blink");
    }
  }
  beepSound.volume = .2;
  beepSound.play();
}
var oldestChatMessage = null;
var newestChatMessage = null;
function getChatMessages(e = "down") {
  let t = $("#chat-box");
  let a = $(t).find(".messages");
  let s = t.data("id");
  let n = $("#friends .friends-list .friend[data-id='" + s + "'] .chat-bubble");
  let i = $(n).find(".unread-count");
  $(i).text("").hide();
  a.off("scroll");
  if (null != s && $(t).is(":visible")) {
    var o = {
      id: s,
      action: "get"
    };
    if ("up" == e && null != oldestChatMessage) {
      o.direction = "up";
      o.lastId = oldestChatMessage.id;
    } else if (null != newestChatMessage) {
      o.lastId = newestChatMessage.id;
    }
    $.ajax({
      type: "POST",
      url: siteUrl + "api/chat.php",
      data: o,
      dataType: "json",
      xhrFields: {
        withCredentials: true
      },
      success: function (t) {
        if (t.success) {
          handleChatMessages(t.messages, e);
        }
      }
    });
  }
}
function handleChatMessages(e, t = "down") {
  let a = $("#chat-box");
  let s = $(a).find(".messages");
  if (null == oldestChatMessage && null == newestChatMessage) {
    $(s).empty();
  }
  if (0 == e.length) {
    return void ($(s).is(":empty") && ($(s).html("<div class='no-messages' data-translate='no_chat_messages'></div>"), translate($(s).find("[data-translate]"))));
  }
  if ("up" == t && null != oldestChatMessage && e.length > 0) {
    let t = new Date(oldestChatMessage.date);
    let a = new Date(e[0].date);
    if (t.getDate() == a.getDate() && t.getMonth() == a.getMonth() && t.getFullYear() == a.getFullYear()) {
      $(s).find(".date").first().remove();
    }
  }
  e.sort(function (e, t) {
    return e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
  });
  let n = "";
  let i = null;
  if (null != oldestChatMessage) {
    i = oldestChatMessage.id;
  }
  let o = null;
  if (null != newestChatMessage) {
    o = newestChatMessage.id;
  }
  for (let a = 0; a < e.length; a++) {
    let s = e[a];
    if (newestChatMessage && "down" == t && o >= s.id) {
      continue;
    }
    if (oldestChatMessage && "up" == t && i <= s.id) {
      continue;
    }
    s.date = s.date.replace(" ", "T") + "Z";
    let r = new Date(s.date);
    let l = r.getDate().toString().padStart(2, "0") + "." + (r.getMonth() + 1).toString().padStart(2, "0") + "." + r.getFullYear();
    let d = null;
    let c = false;
    if (a > 0) {
      d = e[a - 1];
    } else if ("down" == t) {
      d = newestChatMessage;
    }
    if (null != d) {
      let e = new Date(d.date);
      if (!(e.getDate() == r.getDate() && e.getMonth() == r.getMonth() && e.getFullYear() == r.getFullYear())) {
        c = true;
      }
    }
    if (0 == a && null == d) {
      c = true;
    }
    if (c) {
      n += "<div class='date'>" + l + "</div>";
    }
    let u = "";
    if (s.sender == user.id) {
      u += "<div class='message' style='text-align:right'>";
    } else {
      u += "<div class='message'>";
    }
    if (s.sender != user.id && (c || null == d || d.sender != s.sender)) {
      u += "<div class='name'>" + $("#chat-box .user .name").text() + "</div>";
      u += "<div class='avatar'><img src='" + $("#chat-box .user .avatar img").attr("src") + "'></div>";
    }
    let p = "";
    if (/[ء-ي]/.test(s.content)) {
      p = " style=\"direction: rtl;\"";
    }
    if (s.sender == user.id) {
      u += "<div class='text you' title='" + l + "'" + p + ">" + s.content + "</div>";
    } else {
      u += "<div class='text' title='" + l + "'" + p + ">" + s.content + "</div>";
    }
    u += "</div>";
    n += u;
    if (null == oldestChatMessage || s.id < oldestChatMessage.id) {
      oldestChatMessage = s;
    }
    if (null == newestChatMessage || s.id > newestChatMessage.id) {
      newestChatMessage = s;
    }
  }
  if ("up" == t) {
    let e = $(s)[0].scrollHeight;
    $(s).prepend(n);
    $(s).scrollTop($(s)[0].scrollHeight - e);
  } else {
    $(s).append(n);
    $(s).scrollTop($(s)[0].scrollHeight);
  }
  let r = $(a).find(".user");
  let l = $(r).attr("class").split(" ");
  for (let e = 0; e < l.length; e++) {
    if ("online" == l[e] || "lobby" == l[e] || "offline" == l[e]) {
      $(s).find(".message .name").parent().removeClass("online offline lobby").addClass(l[e]);
      break;
    }
  }
  s.off("scroll").on("scroll", function () {
    if (0 == $(this).scrollTop()) {
      getChatMessages("up");
    }
  });
}
var dragLists = [".skinChanger", ".petChanger"];
for (var i = 0; i < dragLists.length; i++) {
  let e = document.querySelector(dragLists[i]);
  let t = null;
  let a = null;
  function handleDragStart(e) {
    t = null;
    if (e.target.classList.contains("drag-item")) {
      t = e.target;
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/html", t.innerHTML);
      e.target.style.opacity = "0.5";
    }
  }
  function handleDragOver(e) {
    e.preventDefault();
    if (null == t) {
      return;
    }
    if (null !== a && a !== e.target) {
      a.style.borderLeft = "";
      a.style.borderRight = "";
    }
    a = e.target;
    e.dataTransfer.dropEffect = "move";
    const s = e.target;
    if (s !== t && s.classList.contains("drag-item")) {
      const t = s.getBoundingClientRect();
      const a = t.x + t.width / 2;
      if (e.clientX - a < 0) {
        s.style.borderLeft = "dotted 6px yellow";
        s.style.borderRight = "";
      } else {
        s.style.borderRight = "dotted 6px yellow";
        s.style.borderLeft = "";
      }
    }
  }
  function handleDrop(e) {
    e.preventDefault();
    if (null == t) {
      return;
    }
    const a = e.target;
    if (a !== t && a.classList.contains("drag-item") && (e.clientX > a.getBoundingClientRect().left + a.offsetWidth / 2 ? null == a.nextSibling ? a.parentNode.appendChild(t) : a.parentNode.insertBefore(t, a.nextSibling) : a.parentNode.insertBefore(t, a), $(this).data("custom-order"))) {
      let e = [];
      $(this).find("[data-skin-id]").each(function () {
        e.push($(this).data("skin-id"));
      });
      localStorage.setItem("customOrder_" + user.id + "_" + $(this).data("custom-order"), JSON.stringify(e));
    }
    a.style.borderLeft = "";
    a.style.borderRight = "";
    t.style.opacity = "";
    t = null;
  }
  e.addEventListener("dragstart", handleDragStart);
  e.addEventListener("dragover", handleDragOver);
  e.addEventListener("drop", handleDrop);
  e.addEventListener("dragend", function (e) {
    if (t) {
      t.style.opacity = "";
    }
  });
}
allowDrag = function (e) {
  return "true" == e.target.getAttribute("draggable");
};
document.body.ondragstart = function (e) {
  if (!allowDrag(e)) {
    e.preventDefault();
  }
};
document.body.ondrop = function (e) {
  if (!allowDrag(e)) {
    e.preventDefault();
  }
};
var beepSound = new Audio("data:audio/ogg;base64,SUQzBAAAAAAAcFRQRTEAAAAOAAADTWFyayBUZWFjaGV5AFRDT04AAAAOAAADU291bmQgRWZmZWN0AFRQVUIAAAAUAAADQXBwbGUgSGlsbCBTdHVkaW9zAFRTU0UAAAAOAAADTGF2ZjYwLjMuMTAwAAAAAAAAAAAAAAD/+1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJbmZvAAAADwAAAB8AABb0ABAQEBgYGCAgICgoKDAwMDA4ODhAQEBISEhQUFBQWFhYYGBgaGhocHBweHh4eICAgIiIiJCQkJiYmJigoKCoqKiwsLC4uLjAwMDAyMjI0NDQ2NjY4ODg4Ojo6PDw8Pj4+P///wAAAABMYXZjNjAuMy4AAAAAAAAAAAAAAAAkAkAAAAAAAAAW9DsXZaIAAAAAAAAAAAAAAAAAAAAA//tAZAAP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEA+OQAGwQDmTXNmYqQdzbqw4A2fodrSz+j/Nu/6TIAAAFQqbsGA/0ag2+aNH+h3d0vzX/9nmP9A6iEODpKJ62f8yOeOPIG3NkCh91y7i5YiHhwDQBQFitRYu95Yfn/aUQKV8i9xvy9fy91y7vaJTmV7lnxWLi7vEnw78i4dnpjDJPjLFxcPERyFmP/8ugRC7bD1n/+0JkSQCA7QC5UAEYABpgF20AIgAKMQEIFGQACUSeIQKMgAAJTdMgUFFDs+Re5ZbFBS93ffDsFgNA8MGnoKA0EdFF7p4S5inhKkUoXPv0lJfmDJeuKe/yAaDuYIFDD44IBQCw1yxc8EAHxOD6Ao0G46HP4HI9GQBAQA8UKCbbGgB6AKh0AKyAqeuCPilexosLmwt7Ja/ZbjNmp8nPvs4e4VyCDgMP7eIADyWzQtJf/Q2rJ86XiCf/+0JkJQAC2EvS7kogADAHugDDnAAFhLtwHNEACF6XrYOEUAD//kQUaFtE3JM8b///+T5fN/VPIEPCMX+E5D8bg7EH+AYJBNv/DDkDjP/7z1H//9zFG7DhD//8S1EsSyovP//QH/1mARcFbIJwvOsxYvMYxjgLGBBAwoKJYUKKg6lYxlCuVqGl//////zB3HTTf4cDanREzyET+iuGjn6K3///////xfQumrUDMiMUBPQAJ+tK6OH/+0JkBwERpS9aeygq0hpA+74MA0AFrF1lzSxpoF6J7JAHlIhRvUAkA4T27U6H6Wpqx7MZYwJhEaUiLrMHv//7fyf9n//L3AQXEy1d0AOZkagAB3c7hQ7BYEKhOwsoRc0f////1TLmBGpKLmS6Ny9/4YduIOGy0TtB06eW3GsnZjlZY4YDCm1/WCEOBytej+SdicAQBkAZqPdvezZn66Ogo/1jA1LrP///L5IAAAAAmAar4bpI3Uf/+0JkBoURoC7YY0YSYBdBy54BIxUFiHFmAWUGwE2fLoBwC5FsLMAPKFpEAMOADbe/HvYcAw7+MvQOhFdCRDHt9winQlS////+EeoAygBERWEAANUisdHz4TsmW+lpwOUO5vmAFYOSTFrqWyosPAqim5bcWha1qGUIpNaROSOFj2KJMhlW1hpr5DIfCUsir05UP4Lznq3//svb/9R9H//mDgQ5ZQESQRFBAAA/UIfQuFSZwyOyCVH/+0JkCoCRmxxZeygTwBtDy700BZQGhHN5p6CtMFyErSwDpBAVgJrR89MEhVM8QIqOf24FF7CY75EYeyA+Jlf/6j0D8AeRgAdgADrOtqP5DCYEdrM/r/8aCiqxWn9W9oYbkbicQA0uF5ZL6sM5oJIaipRUpAasaMHXV8NbBy3hMnqYVEVu9qHnhg9v91v5b/9GTPCCKBIbjCmUqAYcaJL79e1X9H/////RusEDtiZkrQGpELYE88f/+0JkBwABeRzeaeVDbBwjnAwoAoOFwHFzozym8GiOa0AcCNDn5chrI24MicVewqeLSyg3RtB7pT/+MBJ//OW///UphkgBs2HAL8BDxaLTBkGjJGNsv06J3//oJT/////jrIwxHY4oAABhS9EoWCGecLEv4EycELeN5+IkRkJqo7QCKUg3r/uJCzxf////+vw5RMmDhi+wj43wl1Nf/7bF6//wQn/////y6rthA7o4kKAAqiYVjMf/+0BkBoARRxDcaC8wXBaA+vgALxIFRPt7o4BcsGKOLnRQFh43CzR5NlRKEJyBXg651z2NbH/LVHgXX453/6PSHmGICFgM9CcbbQjaVfZ3f/zn/////Xf8ILdZtQAwGmFx4biIAGOg0NEYQFwKlzEXO9+reexpu2vNooLwy//9mHAoCDYAEY8/Gj3qALko3N60UJgrv////8rVuyECu0CYAQDIcePBFoRmBETk7AVhoTtNMPTSYf/7QmQOABEqPtxpQBcsFKDrvQAmEYR0b0QA7EUAUA4pQAwUmBUVf///Vv/+GYDY0DDAVgAALBNw6RvAtr8o3/2IMLYB0jphZmMxGmGukOBpjH+OALxUNRh2/E9fN//8Id/////5XVdwBc2fZaBzpQhrO/+3+v//sNDFLUBAcbgAAAHZpVrg0kghaEsHlqw0bUxEcCvDw0xSpZQP10iJRRtnkP6wyQWUiojwMmRY0E//Bjf////+of/7QmQegPFAE1RpmSmkFIOaYEwCeATIcWmgMKGwWw4ogA0I0KwMO/7RABAPZtLnCYMUT9AFKF9Li5HryBLq/Cnarf/j2/////5UlDDwy9tsQUgLWCp///T//4Ub/////oUXw4XfzCgAAO9p80H5+IsN1GiRSgk3pPmuA6dzRkO4Bv+rIit//IuBaYHRRDAAANjzRIOGUXE7nuFuV+z+SEkLCw2tgnt6Q0QDvSJ1KGMBgNZZn0pF9v/7QmQrARE5HNjoDzh8FqELDQFpFYS0cVugPOHwWgSnAANoEOg+obfR0ZinVv/RhsMdniwRBGGQezCh5qtocDjFfAM9Ps/tJgnAgEIbAAazsV30XeODR5muqC3QM/CQgA5Dh8h28gh/+rf/jQwAUQOigOAAAaxDq5LgosXf/T////IOJaKHR9pRodJK30RvlKUSYZCCZHaw6/1XRYuRO9wDVb6v1b/7CkVrMcGjzu1beQnLkzAGkP/7QmQ3gREoHFJgGihcFeOK/QGCJ4TIb1Wg4ON4Vo4mgA0cmD1/2////yheA1OEo+2oAADxXqwb5QBlEHBexgghtisS7IwSyZ8qDX/m9W/9UGpMAZ0bjgSgAAQm0ZWZxPAB8Bl2n/+RCUCCYkCQ1jjCt5YHJ0NBZ2yA09pChTd/I3G5Zbw9An9Tf//QUAGIJQAHB/PQmOIUAcJh6dm//BPVBhHKMAAfMEbaYISIakErVKhgHMd7wP/7QmRFgRE2HFVoDzjsFUErLQFmI4SUcUGg6EVwTg4qtKAKHkYqmhm5RP1FZ75ffr/pV7JKEl1dKpZAZAsjZoekIPUGzzlsLf//IAhIHMNkmCOmkYTCM4IG3AFgCDhseqSBRvygSrfcSITdy78f/+SXrOkGSCcSMwYOgJmF6W3fyV1Ay7//0JPcp7FukrsgAMCbcVpbCoOYECEag08Y0BoAAxCDTV6ojxMh/+hoAYINAAoAAAoTNf/7QmRUgfFAG81IOylcFOEpUAQaAgSsOSKjcEVAWoSlABzsiLuqsSAEC/qXqg3//6iBALye7ck4g3nRCtPTeAgamRMYmMgPoBnBuWZdZtf/m+cAEdDoAEo9CrOGRV6L06DxZ8C3//iKG+vRZ9hyzCFcjohYCQsGh8fOFQlzyYWKTcSITdy7//7P////+1VAADw2AAwAAAKZufiiwV4CEaCBp//2t1PnutXwp4YWHMIGDsRB0hGBmP/7QGRhiREtC0gDfXqMFyEZzQB5IQQwLSLE66YgVgUpNAeYngAmGm9zGLQdGEaXjO4fik/Y/9IBG/cV0GdNKWRGerCxYJXwlQu+EWJqBWMXDMli7pbowAEMzTocySCkDAE12tZl1kOejr///////sWjueFd0BotjG10HlbDUQXqHws3/oC8sWmFSQI7AHiUStAOHZ6QqgLRjwkT7cSGKepd/TX/2bv//r/68aCwsOQoJSJg0cAV//tCZHCPMTULRwGb4SAXATqdAYkzhIgtGg33CgBDBGUVDRkP3jlAOJd/29VKBOhvuOBUoE7WuINggPDM+bDCgKi3bDHbl8stu2fFf/to///ff6nUaCAAAqiIw9dIz0QaJTtrn/yQb52bSMmBU8F+uql8YEE5r/rmfgqXydW1dtWQp7Ov/////9PjLUMQqZp2uHjENISO9mf/8l//////6Au6OorxAlGKDbFlwAoLnREuBpONUZu7//tCZICPEUEKxoF66YAUYSkAB0wnhNwtGAXrhgBNBCUYBeiUkoldy7/2q//4vop/d/9lUV5cEBsV3HlUTAf14gRcGf/R////qBO9F5Pijom+4SfooLDQfoMAB5Pd0I3T2Lf9Ub//YtH+v/9zZTHlGrLkVLHGZWVGskDSKdtf/u//////5Z0E+25QtZDjFSq3AQKmo6iZeAoEZQz1hBL/tejfff7//+rGb6EnmeghvCx+padg++h5//tCZI6P0UAKxgFa6SAQoSkiAfozBKwrGAZnhgBUBKREB+TKiL2Mwt/6P/3//1//yAd3544ASlG3UQBnsPoGs1qOvFKSuEfnu3/+7suuu26v/YueLFtxxR8Kb2U0gkT/6P///9X/9mgNFAIS78iA9nO0/G0woVkGJ7MgiMormqttVttfdtvHW3/+/+v0Ua7EDtIuUcFg8dIXs/9D//d//q/r+wTgCmAGsPTSZREIQ6wIKA5ueyDn//tCZJ6P8TwLRYF8wTAUQSjwB0Y0BOQrFgVnhEBYBGOAF+jI2GpDaxFSHRVr7tvpjn/+rWr/5veWHjECOADfoQsl4Jkv/RX/93/6//7FDs3u3oRsejTuAWvOiew6DYo/cspAtxT//+j9vX7qNee3ReNoxI+cDkZNjIKbOZdtzf/ds/5f3/5n/3VG9QNTmSj7BYk9YjBhiGIEIEXXcr28Or8kj7v21+zqfd++npq13Ifqyo4QSy2a//tCZKuP8TgKRYFceTAXISjQADkgBDwpFgVjZgBUBCNAAOiA/+j////V//I1qgRjIANIayVxIB631EIvvMmFq3QadqjrGt2bSVfrj7K/55L/9//zKM/Blh4YNGBUAOf/u///f78f7/94N2gFRm/LVbzzawiGvyfpLG2P/2+O68t5jrZR7vY+iphP01dv7uQCVcXFljv/aQ//v//X7dv0tVTVCeGsnSNSmnpEQIBdAu87Na6S1Avq//tCZLqA8SkJSWBB0CgXQQjQBNkyBLwnFqOHYIBZBCNAFOTI4eIkaI/9Z7JIxR7dF/JK6apu01ij7h6QyNhFCpC//VkN6/+xFn/KGuh3brTXSOAARUB+asMGU1LEk6Tfxx5q906bZsYL0IrdbR1Poo6DdGlnnDeW6SVZZwoABNQtEIAPN53dQGmhy26pVWS5D1Lsfot//V6NFnSqFwBvJZQHu61igziH3NylM+kBxmSe14TIaNmq//tAZMeP8SAJxQF42YAZIRjABToyBEQpFAODgEBLhCNAEGBI79/1lfp2N/2joBNEggSbOUilQkMYqKt9KPbU74p02p//t/5bWAgE4SMgM6GolARRV5EOhYwk57RSLF0XVo7zSkkyjiTlvT6rSPtKIsHCEqroKs5AmJCNN3qpEmnIFobYoAtQv06ndchk8WKOR/1TNO+z6w9lbeeNkKek/+yLF86XNAtJUt58kGD9gGMSxyK5wwj/+0Jk1wDxMwlK+PhKiBRA+MAAWQgESCkUA4NCQFkEIwAQZBAs8GXC24ulxB7SaBorZuYSXsCrJgAJThUQDu4CqcgE84FE66Du6p1f3r636/+z09PWxANOzUoFu5GtmogoHgAdtPRHqtU31jPybvaN2hBVCE6WDbWv/mI6S77iVAAUVCBAPKqp8SUstcvSxFfU7q+rT/p8X5yxn10OIAAkJqqA8+7aLgOCirg42NylFlG7dF1D2Iv/+0Jk5oABQwlEgSHYIBpBCLAE2DIFPCMVA4dAgH6EI7QQ4CAS7EVWpHorShKx1rB+pzHdigiwAIllKgCmbM8MBAbOsxDzxardbuv6P/omf2MT1hOAAoqp6gcqls70G+aqEdzHWd3AHe/mL8bd+3b7U04SXkTI8p6BNQKM3/pW/6N/r//7LT/f6tWi8F7f9ZYMAAhZRAeVoUDgj5ki/YJ0EEDTycVj3JYpsbJBBb3C5alC0qe406v/+0Jk6YARGwhGyEbJkBxBGNkHA1AGACUVI+jKAHmD4yAQvCD49bDk9NpGSTBoBKChAHdZ3LInLip+40txHkLrMjoci+ryH1u9bfw0JAAMEOyMeZCdZoqybbOfvc0Lvi0yUJS17HDGTyJ4IIfSpdXlSYRnGFbhV76MDoIFHWBAAsjuc5UBD1lkQL17O7tc/u/3bFqLfT80EnPWYEbFob3qSShZRVYdSswJgaY8MBZFdxYQJVQQrH7/+0Jk7AUBjQlDgObJkB5A+NwELwgFNFUQouhKAHSD4zAQ4CBlJuOUfdAwjajqXIgEekFYNaAampSw0CSJ0pUnXfIdNDtG83/9IEfLY/Y3oMEJiMKMJXRz0BLubELFHLhawp9ZCV+1dqQMq+l27o7/6zZcVgSipCQSAcc1JgrC17x8zqZU5vqZ+2j/2WUavVXVP+LjSYQc1KFjSxok9Fq97rP1pQTsunPxnhj+n9QywsaKIAdSKqb/+0Jk6gABYAjF4EPJkB3g+OwAKggEGB8dgIXhAHGYYoAXiUANU96E2trWSrfX0ad69Vf+u7vpQGk6fQEAIAADH2mcn7Ws1mZvr7aW22q/k9FGf+b9+HTv+jby6O1vsf/2154Lhy/0H8U1zyF+GAEKghTmDON8nVIVaZmSmlbIvfJylJHOyuVqChMsKLMyxivLOwgl967oRXjLGCGAgDLIg1c8iJrioznVFZKe1w61YzuLPiIGnQ7/+0Jk8AABfgfEyEHAQB8hCLkF4FAF1CERAI8BAHGEIuQUhUDt6vR/UsTYAIAIO1hMO8JFZUFVnRFZyztx5C3Q1+S4isEQdqd9cqPdEohLSpgq6oNEW4l21dYK1nqgaDn95UBA0HSXOq+In3Z4JHcko8JTBUAIgg66VvKzx4SllediI8rnqCv/KgIFQ1TyMRB2WPfEss/JKkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+0Bk7IABcgjDACBoIB2A6KgEKQgERCETAIWBAHkD47QQiBiqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7QmTvAADnAEXIQRAAIIAIqQQjEgY4AwsDDGAIs6FhQBCKeKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7QmTqgRESAMJAIAAAJuAYSAQjAARMAtwAhEAAkoBcJBCIAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==");
function checkBadWords(e) {
  const t = ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "gay", "gays", "chuj", "kurwa", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sexy", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "testical", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx"];
  for (let a of t) {
    if (new RegExp(`\\b${a}\\b`, "i").test(e)) {
      return a;
    }
  }
  return null;
}
function isArabic(e) {
  return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/.test(e);
}
function setInputDirection(e) {
  if (/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/.test(e.value)) {
    e.style.direction = "rtl";
  } else {
    e.style.direction = "ltr";
  }
}
document.querySelectorAll("input[type=\"text\"], textarea").forEach(e => {
  e.addEventListener("input", function () {
    setInputDirection(e);
  });
});
const controls = document.querySelector(".mobileControls");
const zoomBtn = controls.querySelector(".zoom");
const emotesBtn = controls.querySelector(".emotes");
const leftBtn = controls.querySelector(".left");
const rightBtn = controls.querySelector(".right");
const upBtn = controls.querySelector(".up");
const skillBtn = controls.querySelector("#skillButton");
const swipeButtons = [leftBtn, rightBtn];
let activeTouches = new Map();
let swipeTouches = new Map();
function zoomAction() {
  fullScreen(true);
  if (1 == gameZoom) {
    gameZoom = 1.5;
  } else if (1.5 == gameZoom) {
    gameZoom = 2;
  } else {
    gameZoom = 1;
  }
}
function emotesAction() {
  if (emotesMenuOpened) {
    hideEmotesMenu();
  } else {
    showEmotesMenu();
  }
}
function flyLeftStart() {
  gameServer.emit(socketMsgType.FLY, -1);
  mouseActive = false;
  game.me.flySide = -1;
}
function flyLeftEnd() {
  if (-1 == game.me.flySide) {
    gameServer.emit(socketMsgType.FLY, 0);
    game.me.flySide = 0;
  }
}
function flyRightStart() {
  gameServer.emit(socketMsgType.FLY, 1);
  mouseActive = false;
  game.me.flySide = 1;
}
function flyRightEnd() {
  if (1 == game.me.flySide) {
    gameServer.emit(socketMsgType.FLY, 0);
    game.me.flySide = 0;
  }
}
function boostStart() {
  boost();
}
function skillStart() {
  skillUse();
}
function skillEnd() {
  skillStop();
}
function getSwipeButtonAtTouch(e) {
  const t = e.clientX;
  const a = e.clientY;
  return swipeButtons.find(e => {
    const s = e.getBoundingClientRect();
    return t >= s.left && t <= s.right && a >= s.top && a <= s.bottom;
  }) || null;
}
controls.querySelectorAll("button").forEach(e => {
  e.addEventListener("touchend", t => {
    t.preventDefault();
    e.click();
  });
});
controls.addEventListener("touchstart", e => {
  for (const t of e.changedTouches) {
    const e = getSwipeButtonAtTouch(t);
    if (e) {
      swipeTouches.set(t.identifier, true);
      activeTouches.set(t.identifier, e);
      if (e === leftBtn) {
        flyLeftStart();
      } else if (e === rightBtn) {
        flyRightStart();
      }
    } else {
      const e = document.elementFromPoint(t.clientX, t.clientY);
      if (!e || !e.closest(".mobileControls button")) {
        continue;
      }
      activeTouches.set(t.identifier, e);
      if (e === zoomBtn) {
        zoomAction();
      } else if (e === emotesBtn) {
        emotesAction();
      } else if (e === skillBtn) {
        skillStart();
      } else if (e === upBtn) {
        boostStart();
      }
    }
  }
}, {
  passive: false
});
controls.addEventListener("touchmove", e => {
  e.preventDefault();
  for (const t of e.changedTouches) {
    if (!swipeTouches.get(t.identifier)) {
      continue;
    }
    const e = activeTouches.get(t.identifier);
    const a = getSwipeButtonAtTouch(t);
    if (a !== e) {
      if (e === leftBtn) {
        flyLeftEnd();
      } else if (e === rightBtn) {
        flyRightEnd();
      }
      if (a === leftBtn) {
        flyLeftStart();
      } else if (a === rightBtn) {
        flyRightStart();
      } else if (a === upBtn) {
        boostStart();
      }
      activeTouches.set(t.identifier, a);
    }
  }
}, {
  passive: false
});
controls.addEventListener("touchend", e => {
  for (const t of e.changedTouches) {
    const e = activeTouches.get(t.identifier);
    if (e) {
      if (e === leftBtn) {
        flyLeftEnd();
      } else if (e === rightBtn) {
        flyRightEnd();
      } else if (e === skillBtn) {
        skillEnd();
      }
      activeTouches.delete(t.identifier);
      swipeTouches.delete(t.identifier);
    }
  }
});