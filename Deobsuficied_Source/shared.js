var objectType = {
  'PLAYER': 0x1,
  'TILE': 0x2,
  'FOOD': 0x3,
  'SPAWN': 0x4,
  'HIDE': 0x5,
  'PLAYER_SPAWN': 0x6,
  'EFFECT': 0x7,
  'TELEPORT': 0x8,
  'MISC': 0x9,
  'BOSS': 0xa,
  'PET': 0xb,
  'TOMBSTONE': 0xc,
  'BACKGROUND': 0xd
};
var skillEvent = {
  'none': 0x0,
  'onAttack': 0x1,
  'onObtainAttack': 0x2,
  'action': 0x3,
  'onCollideTrigger': 0x4
};
var socketMsgType = {
  'SYNC': 0x1,
  'FLY': 0x2,
  'BOOST': 0x3,
  'SKILL': 0x4,
  'REMOVEOBJECT': 0x5,
  'PING': 0x6,
  'PONG': 0x7,
  'TEXTMSG': 0x8,
  'TEXTEFFECT': 0x9,
  'DOATTACK': 0xa,
  'EFFECT': 0xb,
  'EMOTE': 0xc,
  'LEADERBOARD': 0xd,
  'CHANGESKIN': 0xe,
  'CHAT': 0xf,
  'ASKDISCORD': 0x10,
  'SENDDISCORD': 0x11,
  'DOPETATTACK': 0x12,
  'SCANPLAYERS': 0x13,
  'TOMBSTONE': 0x14,
  'NEWCHATMSG': 0x15,
  'RELOADFRIENDS': 0x16,
  'TYPING': 0x17,
  'LOOTINFO': 0x18
};
var questType = {
  'KILL': 0x1,
  'EVOLVE': 0x2,
  'PLAYTIME': 0x3,
  'REACH': 0x4,
  'EAT': 0x5
};
game.skills = {
  'beginnersLuck': {
    'fullName': "beginners luck",
    'params': [0x32],
    'icon': 'skill_beginnersLuck',
    'active': false,
    'event': 0x2
  },
  'flowerLove': {
    'fullName': "flower love",
    'icon': "skill_flowerLove",
    'active': false,
    'event': 0x4
  },
  'infection': {
    'fullName': "infection",
    'params': [0x14, 0x1],
    'icon': "skill_infection",
    'active': false,
    'event': 0x2
  },
  'poisonWasp': {
    'fullName': "sting",
    'params': [0x19, 0x2],
    'icon': "skill_poisonWasp",
    'active': false,
    'event': 0x1
  },
  'poisonSwampMonster': {
    'fullName': 'poison',
    'params': [0x64, 0x3],
    'icon': "skill_poisonSwampMonster",
    'active': false,
    'event': 0x1
  },
  'grabPrey': {
    'fullName': "grab prey",
    'params': [0x4],
    'cooldown': 0x4e20,
    'icon': 'skill_grabPrey',
    'active': false,
    'event': 0x1
  },
  'hunger': {
    'fullName': "hunger",
    'cooldown': 0x4e20,
    'icon': 'skill_hunger',
    'active': false,
    'event': 0x1
  },
  'diving': {
    'fullName': 'diving',
    'icon': 'skill_diving',
    'active': false,
    'event': 0x0
  },
  'swoop': {
    'fullName': "swoop",
    'cooldown': 0x1f40,
    'icon': 'skill_swoop',
    'active': true,
    'event': 0x3
  },
  'fruitEater': {
    'fullName': "fruit eater",
    'params': [0x19],
    'icon': 'skill_fruitEater',
    'active': false,
    'event': 0x1
  },
  'frogHunter': {
    'fullName': "frog hunter",
    'params': [0x23],
    'cooldown': 0x7d0,
    'icon': "skill_frogHunter",
    'active': false,
    'event': 0x0
  },
  'echolocation': {
    'fullName': "echolocation",
    'icon': "skill_echolocation",
    'active': false,
    'event': 0x0
  },
  'dig': {
    'fullName': 'dig',
    'params': [0x28],
    'cooldown': 0x2710,
    'icon': "skill_dig",
    'active': false,
    'event': 0x4
  },
  'excellentHunter': {
    'fullName': "excellent hunter",
    'params': [0xa, 0x32],
    'icon': "skill_excellentHunter",
    'active': false,
    'event': 0x1
  },
  'speedUp': {
    'fullName': "speed up",
    'cooldown': 0x1b58,
    'icon': 'skill_speedUp',
    'active': true,
    'event': 0x3
  },
  'layEgg': {
    'fullName': "lay egg",
    'cooldown': 0x1770,
    'icon': "skill_layEgg",
    'active': false,
    'event': 0x4
  },
  'bloodthirsty': {
    'fullName': 'bloodthirsty',
    'cooldown': 0x1388,
    'icon': "skill_bloodthirsty",
    'active': false,
    'event': 0x1
  },
  'rage': {
    'fullName': "rage",
    'params': [0x19],
    'icon': "skill_rage",
    'active': false,
    'event': 0x1
  },
  'scytheAttack1': {
    'fullName': "scythe attack",
    'params': [0x23],
    'cooldown': 0x1f4,
    'icon': "skill_scytheAttack",
    'active': true,
    'event': 0x3
  },
  'scytheAttack2': {
    'fullName': "scythe attack",
    'params': [0x1e],
    'cooldown': 0x1f4,
    'icon': 'skill_scytheAttack',
    'active': true,
    'event': 0x3
  },
  'scytheAttack3': {
    'fullName': "scythe attack",
    'params': [0x19],
    'cooldown': 0x1f4,
    'icon': "skill_scytheAttack",
    'active': true,
    'event': 0x3
  },
  'thickSkin': {
    'fullName': "thick skin",
    'cooldown': 0x61a8,
    'icon': "skill_thickSkin",
    'active': false,
    'event': 0x2
  },
  'stoneSkin': {
    'fullName': "stone skin",
    'params': [0x4b],
    'icon': "skill_stoneSkin",
    'active': false,
    'event': 0x2
  },
  'toTheMoon': {
    'fullName': "to the moon",
    'icon': "skill_toTheMoon",
    'active': false,
    'event': 0x0
  },
  'immortality': {
    'fullName': "immortality",
    'icon': "skill_immortality",
    'active': false,
    'event': 0x0
  },
  'hotBath': {
    'fullName': "hot bath",
    'icon': "skill_hotBath",
    'active': false,
    'event': 0x0
  },
  'fear': {
    'fullName': "fear",
    'params': [0x4],
    'cooldown': 0x4e20,
    'icon': 'skill_fear',
    'active': false,
    'event': 0x1
  },
  'burnInHell': {
    'fullName': "burn in hell",
    'icon': "skill_burnInHell",
    'active': false,
    'event': 0x1
  },
  'fireball': {
    'fullName': 'fireball',
    'params': [0x19, 0x3],
    'cooldown': 0x1f40,
    'icon': "skill_fireball",
    'active': true,
    'event': 0x3
  },
  'flame': {
    'fullName': "flame",
    'cooldown': 0x1f40,
    'icon': 'skill_flame',
    'active': true,
    'event': 0x3
  }
};
game.objectsDef = {
  'eagle': {
    'name': "eagle",
    'type': 0x1,
    'width': 0x64,
    'height': 0x40,
    'colliderRectangleOffset': {
      'left': 0.07,
      'right': 0.07,
      'top': 0.22,
      'bottom': 0x0
    },
    'animations': {
      'flying_right': {
        'sprites': ["eagle_1_right"]
      },
      'flying_left': {
        'sprites': ["eagle_1_left"]
      },
      'flapping_right': {
        'sprites': ["eagle_1_right", "eagle_2_right", "eagle_3_right", "eagle_4_right", 'eagle_3_right', "eagle_2_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["eagle_1_left", "eagle_2_left", "eagle_3_left", "eagle_4_left", "eagle_3_left", "eagle_2_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flying_right",
    'skill': game.skills.speedUp,
    'petOffset': {
      'x': 0x5a,
      'y': 0x46
    }
  },
  'falcon': {
    'name': "falcon",
    'type': 0x1,
    'width': 0x50,
    'height': 0x34,
    'colliderRectangleOffset': {
      'left': 0.07,
      'right': 0.07,
      'top': 0.22,
      'bottom': 0x0
    },
    'animations': {
      'flying_right': {
        'sprites': ['falcon_1_right']
      },
      'flying_left': {
        'sprites': ["falcon_1_left"]
      },
      'flapping_right': {
        'sprites': ["falcon_1_right", 'falcon_2_right', "falcon_3_right", 'falcon_4_right', 'falcon_3_right', "falcon_2_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["falcon_1_left", "falcon_2_left", "falcon_3_left", 'falcon_4_left', 'falcon_3_left', "falcon_2_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': 'flying_right',
    'skill': game.skills.speedUp,
    'petOffset': {
      'x': 0x50,
      'y': 0x46
    }
  },
  'bat': {
    'name': 'bat',
    'type': 0x1,
    'width': 0x64,
    'height': 0x40,
    'colliderRectangleOffset': {
      'left': 0.07,
      'right': 0.07,
      'top': 0.22,
      'bottom': 0.15
    },
    'animations': {
      'flying_right': {
        'sprites': ["bat_1_right"]
      },
      'flying_left': {
        'sprites': ["bat_1_left"]
      },
      'flapping_right': {
        'sprites': ["bat_1_right", "bat_2_right", "bat_3_right", 'bat_2_right'],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["bat_1_left", "bat_2_left", 'bat_3_left', "bat_2_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flying_right",
    'skill': game.skills.echolocation,
    'petOffset': {
      'x': 0x5a,
      'y': 0x50
    }
  },
  'madBat': {
    'name': "madBat",
    'fullName': "Mad Bat",
    'type': 0x1,
    'width': 0x64,
    'height': 0x64,
    'colliderRectangleOffset': {
      'left': 0.09,
      'right': 0.09,
      'top': 0.22,
      'bottom': 0.35
    },
    'animations': {
      'flying_right': {
        'sprites': ["madBat_2_right"]
      },
      'flying_left': {
        'sprites': ["madBat_2_left"]
      },
      'flapping_right': {
        'sprites': ['madBat_1_right', "madBat_2_right", "madBat_3_right", 'madBat_4_right', "madBat_5_right", 'madBat_6_right', "madBat_5_right", 'madBat_4_right', "madBat_3_right", "madBat_2_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ['madBat_1_left', "madBat_2_left", 'madBat_3_left', "madBat_4_left", "madBat_5_left", "madBat_6_left", "madBat_5_left", "madBat_4_left", "madBat_3_left", 'madBat_2_left'],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flying_right",
    'skill': game.skills.rage,
    'petOffset': {
      'x': 0x4b,
      'y': 0x5a
    }
  },
  'fly': {
    'name': "fly",
    'type': 0x1,
    'width': 0x2d,
    'height': 0x23,
    'colliderRectangleOffset': {
      'left': 0.08,
      'right': 0.08,
      'top': 0.3,
      'bottom': 0.03
    },
    'animations': {
      'flying_right': {
        'sprites': ["fly_1_right"]
      },
      'flying_left': {
        'sprites': ["fly_1_left"]
      },
      'flapping_right': {
        'sprites': ["fly_1_right", "fly_2_right", "fly_3_right", "fly_4_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["fly_1_left", 'fly_2_left', "fly_3_left", "fly_4_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': 'flying_right',
    'skill': game.skills.beginnersLuck,
    'petOffset': {
      'x': 0x46,
      'y': 0x46
    },
    'reapersIgnoreCollision': true
  },
  'pumpkinCharacter': {
    'name': "pumpkinCharacter",
    'fullName': "Pumpkin",
    'type': 0x1,
    'width': 0x7b,
    'height': 0x45,
    'moveable': true,
    'colliderRectangleOffset': {
      'left': 0.25,
      'right': 0.25,
      'top': 0.25,
      'bottom': 0.01
    },
    'animations': {
      'flying_right': {
        'sprites': ['pumpkin_2_right']
      },
      'flying_left': {
        'sprites': ["pumpkin_2_left"]
      },
      'flapping_right': {
        'sprites': ["pumpkin_1_right", 'pumpkin_2_right', "pumpkin_3_right", "pumpkin_4_right", 'pumpkin_3_right', "pumpkin_2_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["pumpkin_1_left", "pumpkin_2_left", "pumpkin_3_left", 'pumpkin_4_left', 'pumpkin_3_left', "pumpkin_2_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': 'flying_right',
    'skill': game.skills.speedUp,
    'canEnterBoss': true,
    'customSpawn': "cemetery_spawn",
    'petOffset': {
      'x': 0x5a,
      'y': 0x46
    }
  },
  'alienBug': {
    'name': 'alienBug',
    'fullName': "Cosmic Insect",
    'type': 0x1,
    'width': 0x3c,
    'height': 0x3c,
    'colliderRectangleOffset': {
      'left': 0.25,
      'right': 0.25,
      'top': 0.35,
      'bottom': 0.09
    },
    'animations': {
      'flying_right': {
        'sprites': ["alienBug_1_right"]
      },
      'flying_left': {
        'sprites': ["alienBug_1_left"]
      },
      'flapping_right': {
        'sprites': ["alienBug_1_right", 'alienBug_2_right', 'alienBug_3_right', "alienBug_4_right", "alienBug_5_right", "alienBug_6_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ['alienBug_1_left', "alienBug_2_left", 'alienBug_3_left', 'alienBug_4_left', 'alienBug_5_left', 'alienBug_6_left'],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flying_right",
    'spaceResistance': true,
    'skill': game.skills.toTheMoon,
    'petOffset': {
      'x': 0x46,
      'y': 0x46
    }
  },
  'ghost': {
    'name': 'ghost',
    'type': 0x1,
    'width': 0x54,
    'height': 0x62,
    'moveable': true,
    'colliderRectangleOffset': {
      'left': 0.25,
      'right': 0.25,
      'top': 0.28,
      'bottom': 0.15
    },
    'animations': {
      'flying_right': {
        'sprites': ['ghost_1_right']
      },
      'flying_left': {
        'sprites': ['ghost_1_left']
      },
      'flapping_right': {
        'sprites': ["ghost_1_right", 'ghost_2_right', "ghost_3_right", 'ghost_4_right', 'ghost_5_right', "ghost_6_right", "ghost_7_right", "ghost_6_right", "ghost_5_right", "ghost_4_right", 'ghost_3_right', "ghost_2_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ['ghost_1_left', "ghost_2_left", "ghost_3_left", "ghost_4_left", "ghost_5_left", "ghost_6_left", "ghost_7_left", 'ghost_6_left', 'ghost_5_left', 'ghost_4_left', "ghost_3_left", "ghost_2_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': 'flying_right',
    'skill': game.skills.immortality,
    'immortal': true,
    'canEnterBoss': true,
    'customSpawn': "cemetery_spawn",
    'petOffset': {
      'x': 0x46,
      'y': 0x46
    }
  },
  'ghostlyReaper': {
    'name': "ghostlyReaper",
    'fullName': "Ghostly Reaper",
    'type': 0x1,
    'width': 0x96,
    'height': 0xa5,
    'moveable': true,
    'colliderRectangleOffset': {
      'left': 0.29,
      'right': 0.29,
      'top': 0.4,
      'bottom': 0.1
    },
    'animations': {
      'flying_right': {
        'sprites': ["ghostlyReaper_1_right"]
      },
      'flying_left': {
        'sprites': ['ghostlyReaper_1_left']
      },
      'flapping_right': {
        'sprites': ["ghostlyReaper_1_right", "ghostlyReaper_2_right", "ghostlyReaper_3_right", 'ghostlyReaper_4_right', 'ghostlyReaper_5_right', 'ghostlyReaper_6_right', "ghostlyReaper_7_right", "ghostlyReaper_8_right", "ghostlyReaper_9_right", "ghostlyReaper_10_right", "ghostlyReaper_11_right", "ghostlyReaper_12_right", "ghostlyReaper_13_right", 'ghostlyReaper_14_right', "ghostlyReaper_15_right", "ghostlyReaper_16_right", "ghostlyReaper_17_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["ghostlyReaper_1_left", "ghostlyReaper_2_left", 'ghostlyReaper_3_left', 'ghostlyReaper_4_left', 'ghostlyReaper_5_left', 'ghostlyReaper_6_left', 'ghostlyReaper_7_left', "ghostlyReaper_8_left", "ghostlyReaper_9_left", "ghostlyReaper_10_left", "ghostlyReaper_11_left", "ghostlyReaper_12_left", "ghostlyReaper_13_left", 'ghostlyReaper_14_left', "ghostlyReaper_15_left", "ghostlyReaper_16_left", 'ghostlyReaper_17_left'],
        'animationFrameTime': 0x50
      },
      'attacking_right': {
        'sprites': ["ghostlyReaper_1_attack_right", "ghostlyReaper_2_attack_right", "ghostlyReaper_3_attack_right", "ghostlyReaper_4_attack_right", "ghostlyReaper_5_attack_right", "ghostlyReaper_6_attack_right", "ghostlyReaper_7_attack_right", 'ghostlyReaper_8_attack_right', "ghostlyReaper_9_attack_right", "ghostlyReaper_10_attack_right", "ghostlyReaper_11_attack_right", "ghostlyReaper_12_attack_right", 'ghostlyReaper_13_attack_right', "ghostlyReaper_14_attack_right", "ghostlyReaper_15_attack_right", "ghostlyReaper_16_attack_right"],
        'animationFrameTime': 0x14
      },
      'attacking_left': {
        'sprites': ['ghostlyReaper_1_attack_left', "ghostlyReaper_2_attack_left", 'ghostlyReaper_3_attack_left', "ghostlyReaper_4_attack_left", "ghostlyReaper_5_attack_left", "ghostlyReaper_6_attack_left", "ghostlyReaper_7_attack_left", "ghostlyReaper_8_attack_left", "ghostlyReaper_9_attack_left", "ghostlyReaper_10_attack_left", "ghostlyReaper_11_attack_left", "ghostlyReaper_12_attack_left", "ghostlyReaper_13_attack_left", "ghostlyReaper_14_attack_left", 'ghostlyReaper_15_attack_left', "ghostlyReaper_16_attack_left"],
        'animationFrameTime': 0x14
      }
    },
    'animation': "flying_right",
    'eatsSouls': true,
    'canEnterBoss': true,
    'canEnterArena': true,
    'skill': game.skills.scytheAttack3,
    'petOffset': {
      'x': 0x5a,
      'y': 0x82
    }
  },
  'butterfly': {
    'name': "butterfly",
    'type': 0x1,
    'width': 0x5d,
    'height': 0x86,
    'colliderRectangleOffset': {
      'left': 0.25,
      'right': 0.25,
      'top': 0.4,
      'bottom': 0.45
    },
    'animations': {
      'flying_right': {
        'sprites': ["butterfly_3_right"]
      },
      'flying_left': {
        'sprites': ['butterfly_3_left']
      },
      'flapping_right': {
        'sprites': ["butterfly_1_right", "butterfly_2_right", "butterfly_3_right", "butterfly_4_right", "butterfly_5_right", "butterfly_6_right", "butterfly_7_right", "butterfly_8_right", "butterfly_9_right", 'butterfly_10_right', 'butterfly_11_right', "butterfly_12_right"],
        'animationFrameTime': 0x1e
      },
      'flapping_left': {
        'sprites': ["butterfly_1_left", "butterfly_2_left", "butterfly_3_left", "butterfly_4_left", "butterfly_5_left", "butterfly_6_left", "butterfly_7_left", "butterfly_8_left", 'butterfly_9_left', "butterfly_10_left", 'butterfly_11_left', "butterfly_12_left"],
        'animationFrameTime': 0x1e
      }
    },
    'animation': "flying_right",
    'skill': game.skills.flowerLove,
    'petOffset': {
      'x': 0x4b,
      'y': 0x73
    },
    'reapersIgnoreCollision': true
  },
  'pelican': {
    'name': "pelican",
    'type': 0x1,
    'width': 0xa3,
    'height': 0x82,
    'colliderRectangleOffset': {
      'left': 0.16,
      'right': 0.16,
      'top': 0.3,
      'bottom': 0.48
    },
    'animations': {
      'flying_right': {
        'sprites': ['pelican_3_right']
      },
      'flying_left': {
        'sprites': ["pelican_3_left"]
      },
      'flapping_right': {
        'sprites': ['pelican_1_right', "pelican_2_right", 'pelican_3_right', "pelican_4_right", 'pelican_5_right', "pelican_6_right", 'pelican_7_right', "pelican_8_right", "pelican_9_right", 'pelican_10_right', "pelican_11_right", 'pelican_12_right'],
        'animationFrameTime': 0x28
      },
      'flapping_left': {
        'sprites': ['pelican_1_left', "pelican_2_left", "pelican_3_left", "pelican_4_left", "pelican_5_left", 'pelican_6_left', 'pelican_7_left', "pelican_8_left", 'pelican_9_left', 'pelican_10_left', "pelican_11_left", "pelican_12_left"],
        'animationFrameTime': 0x28
      }
    },
    'animation': "flying_right",
    'skill': game.skills.diving,
    'petOffset': {
      'x': 0x64,
      'y': 0x73
    }
  },
  'pterodactyl': {
    'name': "pterodactyl",
    'type': 0x1,
    'width': 0x125,
    'height': 0x149,
    'colliderRectangleOffset': {
      'left': 0.13,
      'right': 0.13,
      'top': 0.42,
      'bottom': 0.3
    },
    'animations': {
      'flying_right': {
        'sprites': ['pterodactyl_3_right']
      },
      'flying_left': {
        'sprites': ['pterodactyl_3_left']
      },
      'flapping_right': {
        'sprites': ["pterodactyl_1_right", "pterodactyl_2_right", 'pterodactyl_3_right', "pterodactyl_4_right", "pterodactyl_5_right", "pterodactyl_6_right", "pterodactyl_5_right", 'pterodactyl_4_right', "pterodactyl_3_right", 'pterodactyl_2_right'],
        'animationFrameTime': 0x28
      },
      'flapping_left': {
        'sprites': ["pterodactyl_1_left", "pterodactyl_2_left", "pterodactyl_3_left", "pterodactyl_4_left", "pterodactyl_5_left", "pterodactyl_6_left", 'pterodactyl_5_left', "pterodactyl_4_left", "pterodactyl_3_left", "pterodactyl_2_left"],
        'animationFrameTime': 0x28
      }
    },
    'animation': "flying_right",
    'skill': game.skills.thickSkin,
    'petOffset': {
      'x': 0x64,
      'y': 0xc8
    }
  },
  'pterodactylChild': {
    'name': "pterodactylChild",
    'fullName': "Pterodactyl Child",
    'type': 0x1,
    'width': 0x92,
    'height': 0xa4,
    'colliderRectangleOffset': {
      'left': 0.13,
      'right': 0.13,
      'top': 0.42,
      'bottom': 0.3
    },
    'animations': {
      'flying_right': {
        'sprites': ["pterodactylChild_3_right"]
      },
      'flying_left': {
        'sprites': ["pterodactylChild_3_left"]
      },
      'flapping_right': {
        'sprites': ["pterodactylChild_1_right", "pterodactylChild_2_right", "pterodactylChild_3_right", 'pterodactylChild_4_right', "pterodactylChild_5_right", "pterodactylChild_6_right", "pterodactylChild_5_right", 'pterodactylChild_4_right', "pterodactylChild_3_right", 'pterodactylChild_2_right'],
        'animationFrameTime': 0x28
      },
      'flapping_left': {
        'sprites': ["pterodactylChild_1_left", "pterodactylChild_2_left", "pterodactylChild_3_left", "pterodactylChild_4_left", 'pterodactylChild_5_left', "pterodactylChild_6_left", "pterodactylChild_5_left", "pterodactylChild_4_left", "pterodactylChild_3_left", "pterodactylChild_2_left"],
        'animationFrameTime': 0x28
      }
    },
    'animation': 'flying_right',
    'skill': game.skills.thickSkin,
    'customSpawn': "jungle_spawn",
    'petOffset': {
      'x': 0x50,
      'y': 0x82
    }
  },
  'dragon': {
    'name': "dragon",
    'type': 0x1,
    'width': 0x71,
    'height': 0x6a,
    'colliderRectangleOffset': {
      'left': 0.1,
      'right': 0.1,
      'top': 0.33,
      'bottom': 0.18
    },
    'animations': {
      'flying_right': {
        'sprites': ["dragon_3_right"]
      },
      'flying_left': {
        'sprites': ["dragon_3_left"]
      },
      'flapping_right': {
        'sprites': ["dragon_1_right", "dragon_2_right", "dragon_3_right", "dragon_4_right", "dragon_3_right", "dragon_2_right"],
        'animationFrameTime': 0x64
      },
      'flapping_left': {
        'sprites': ["dragon_1_left", "dragon_2_left", "dragon_3_left", 'dragon_4_left', 'dragon_3_left', 'dragon_2_left'],
        'animationFrameTime': 0x64
      },
      'attacking_right': {
        'sprites': ["dragon_1_attack_right", "dragon_2_attack_right", "dragon_3_attack_right", "dragon_4_attack_right"],
        'animationFrameTime': 0x82
      },
      'attacking_left': {
        'sprites': ["dragon_1_attack_left", "dragon_2_attack_left", "dragon_3_attack_left", "dragon_4_attack_left"],
        'animationFrameTime': 0x82
      }
    },
    'animation': "flying_right",
    'skill': game.skills.fireball,
    'petOffset': {
      'x': 0x50,
      'y': 0x64
    }
  },
  'phoenix': {
    'name': "phoenix",
    'type': 0x1,
    'width': 0x85,
    'height': 0x74,
    'colliderRectangleOffset': {
      'left': 0.1,
      'right': 0.1,
      'top': 0.22,
      'bottom': 0.35
    },
    'animations': {
      'flying_right': {
        'sprites': ['phoenix_idle_1_right', "phoenix_idle_2_right", 'phoenix_idle_3_right', 'phoenix_idle_4_right'],
        'animationFrameTime': 0x64
      },
      'flying_left': {
        'sprites': ["phoenix_idle_1_left", 'phoenix_idle_2_left', "phoenix_idle_3_left", "phoenix_idle_4_left"],
        'animationFrameTime': 0x64
      },
      'flapping_right': {
        'sprites': ["phoenix_1_right", "phoenix_2_right", "phoenix_3_right", "phoenix_4_right", "phoenix_5_right", "phoenix_6_right", "phoenix_7_right", 'phoenix_8_right'],
        'animationFrameTime': 0x64
      },
      'flapping_left': {
        'sprites': ["phoenix_1_left", "phoenix_2_left", "phoenix_3_left", 'phoenix_4_left', 'phoenix_5_left', 'phoenix_6_left', 'phoenix_7_left', "phoenix_8_left"],
        'animationFrameTime': 0x64
      }
    },
    'animation': "flying_right",
    'skill': game.skills.flame,
    'lavaResistance': true,
    'petOffset': {
      'x': 0x5f,
      'y': 0x6e
    }
  },
  'stoneEater': {
    'name': "stoneEater",
    'fullName': "Stone Eater",
    'type': 0x1,
    'width': 0x89,
    'height': 0x9b,
    'colliderRectangleOffset': {
      'left': 0.2,
      'right': 0.2,
      'top': 0.38,
      'bottom': 0.23
    },
    'animations': {
      'flying_right': {
        'sprites': ["stoneEater_3_right"]
      },
      'flying_left': {
        'sprites': ["stoneEater_3_left"]
      },
      'flapping_right': {
        'sprites': ["stoneEater_1_right", "stoneEater_2_right", "stoneEater_3_right", "stoneEater_4_right", "stoneEater_5_right", "stoneEater_6_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["stoneEater_1_left", "stoneEater_2_left", "stoneEater_3_left", "stoneEater_4_left", "stoneEater_5_left", 'stoneEater_6_left'],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flying_right",
    'skill': game.skills.stoneSkin,
    'petOffset': {
      'x': 0x46,
      'y': 0x78
    }
  },
  'demonicEggEater': {
    'name': "demonicEggEater",
    'fullName': "Demonic Egg Eater",
    'type': 0x1,
    'width': 0x89,
    'height': 0x9b,
    'colliderRectangleOffset': {
      'left': 0.2,
      'right': 0.2,
      'top': 0.38,
      'bottom': 0.23
    },
    'animations': {
      'flying_right': {
        'sprites': ["demonicEggEater_3_right"]
      },
      'flying_left': {
        'sprites': ["demonicEggEater_3_left"]
      },
      'flapping_right': {
        'sprites': ['demonicEggEater_1_right', "demonicEggEater_2_right", "demonicEggEater_3_right", "demonicEggEater_4_right", "demonicEggEater_5_right", "demonicEggEater_6_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["demonicEggEater_1_left", "demonicEggEater_2_left", "demonicEggEater_3_left", "demonicEggEater_4_left", "demonicEggEater_5_left", "demonicEggEater_6_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': 'flying_right',
    'skill': game.skills.hotBath,
    'lavaResistance': true,
    'customSpawn': 'hell_spawn',
    'petOffset': {
      'x': 0x46,
      'y': 0x78
    }
  },
  'demonicBat': {
    'name': "demonicBat",
    'fullName': "Demonic Bat",
    'type': 0x1,
    'width': 0x99,
    'height': 0x82,
    'colliderRectangleOffset': {
      'left': 0.25,
      'right': 0.25,
      'top': 0.33,
      'bottom': 0.26
    },
    'animations': {
      'flying_right': {
        'sprites': ["demonicBat_3_right"]
      },
      'flying_left': {
        'sprites': ["demonicBat_3_left"]
      },
      'flapping_right': {
        'sprites': ["demonicBat_1_right", "demonicBat_2_right", "demonicBat_3_right", "demonicBat_4_right", "demonicBat_5_right", 'demonicBat_6_right'],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ['demonicBat_1_left', "demonicBat_2_left", "demonicBat_3_left", 'demonicBat_4_left', "demonicBat_5_left", "demonicBat_6_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flying_right",
    'skill': game.skills.fear,
    'lavaResistance': true,
    'petOffset': {
      'x': 0x3c,
      'y': 0x6e
    }
  },
  'demonicImp': {
    'name': "demonicImp",
    'fullName': "Demonic Imp",
    'type': 0x1,
    'width': 0x80,
    'height': 0x64,
    'colliderRectangleOffset': {
      'left': 0.26,
      'right': 0.26,
      'top': 0.37,
      'bottom': 0.11
    },
    'animations': {
      'flying_right': {
        'sprites': ["demonicImp_1_right"]
      },
      'flying_left': {
        'sprites': ['demonicImp_1_left']
      },
      'flapping_right': {
        'sprites': ['demonicImp_1_right', "demonicImp_2_right", "demonicImp_3_right", "demonicImp_4_right", "demonicImp_5_right", 'demonicImp_6_right', "demonicImp_7_right", "demonicImp_8_right", 'demonicImp_9_right', "demonicImp_10_right", "demonicImp_11_right", 'demonicImp_12_right', 'demonicImp_13_right', "demonicImp_14_right", "demonicImp_15_right", "demonicImp_16_right", "demonicImp_17_right", "demonicImp_18_right"],
        'animationFrameTime': 0x28
      },
      'flapping_left': {
        'sprites': ['demonicImp_1_left', "demonicImp_2_left", 'demonicImp_3_left', "demonicImp_4_left", "demonicImp_5_left", "demonicImp_6_left", "demonicImp_7_left", "demonicImp_8_left", 'demonicImp_9_left', 'demonicImp_10_left', "demonicImp_11_left", 'demonicImp_12_left', "demonicImp_13_left", 'demonicImp_14_left', "demonicImp_15_left", "demonicImp_16_left", 'demonicImp_17_left', 'demonicImp_18_left'],
        'animationFrameTime': 0x28
      }
    },
    'animation': "flying_right",
    'skill': game.skills.burnInHell,
    'lavaResistance': true,
    'petOffset': {
      'x': 0x50,
      'y': 0x5a
    }
  },
  'stork': {
    'name': "stork",
    'type': 0x1,
    'width': 0x99,
    'height': 0x49,
    'colliderRectangleOffset': {
      'left': 0.11,
      'right': 0.11,
      'top': 0.3,
      'bottom': 0.46
    },
    'animations': {
      'flying_right': {
        'sprites': ["stork_3_right"]
      },
      'flying_left': {
        'sprites': ["stork_3_left"]
      },
      'flapping_right': {
        'sprites': ["stork_1_right", "stork_2_right", 'stork_3_right', "stork_4_right", "stork_5_right", "stork_6_right", "stork_7_right", "stork_8_right", 'stork_9_right', 'stork_8_right', "stork_7_right", "stork_6_right", 'stork_5_right', 'stork_4_right', 'stork_3_right', "stork_2_right"],
        'animationFrameTime': 0x1e
      },
      'flapping_left': {
        'sprites': ['stork_1_left', "stork_2_left", 'stork_3_left', "stork_4_left", "stork_5_left", "stork_6_left", "stork_7_left", "stork_8_left", "stork_9_left", "stork_8_left", "stork_7_left", "stork_6_left", "stork_5_left", 'stork_4_left', "stork_3_left", 'stork_2_left'],
        'animationFrameTime': 0x1e
      }
    },
    'animation': "flying_right",
    'skill': game.skills.frogHunter,
    'petOffset': {
      'x': 0x64,
      'y': 0x5a
    }
  },
  'vulture': {
    'name': "vulture",
    'type': 0x1,
    'width': 0xa3,
    'height': 0x82,
    'colliderRectangleOffset': {
      'left': 0.12,
      'right': 0.12,
      'top': 0.35,
      'bottom': 0.33
    },
    'animations': {
      'flying_right': {
        'sprites': ["vulture_3_right"]
      },
      'flying_left': {
        'sprites': ["vulture_3_left"]
      },
      'flapping_right': {
        'sprites': ["vulture_1_right", 'vulture_2_right', "vulture_3_right", "vulture_4_right", "vulture_5_right", 'vulture_6_right', 'vulture_7_right', "vulture_8_right", "vulture_7_right", "vulture_6_right", "vulture_5_right", "vulture_4_right", "vulture_3_right", "vulture_2_right"],
        'animationFrameTime': 0x1e
      },
      'flapping_left': {
        'sprites': ["vulture_1_left", "vulture_2_left", "vulture_3_left", 'vulture_4_left', "vulture_4_left", "vulture_5_left", "vulture_7_left", "vulture_8_left", "vulture_7_left", "vulture_6_left", "vulture_5_left", "vulture_4_left", "vulture_3_left", "vulture_2_left"],
        'animationFrameTime': 0x1e
      }
    },
    'animation': 'flying_right',
    'skill': game.skills.bloodthirsty,
    'petOffset': {
      'x': 0x6e,
      'y': 0x6e
    }
  },
  'raven': {
    'name': "raven",
    'type': 0x1,
    'width': 0xa2,
    'height': 0xac,
    'colliderRectangleOffset': {
      'left': 0.12,
      'right': 0.12,
      'top': 0.5,
      'bottom': 0.32
    },
    'animations': {
      'flying_right': {
        'sprites': ['raven_3_right']
      },
      'flying_left': {
        'sprites': ["raven_3_left"]
      },
      'flapping_right': {
        'sprites': ["raven_1_right", "raven_2_right", "raven_3_right", 'raven_4_right', 'raven_5_right', 'raven_6_right', "raven_7_right", "raven_6_right", "raven_5_right", "raven_4_right", "raven_3_right", "raven_2_right"],
        'animationFrameTime': 0x1e
      },
      'flapping_left': {
        'sprites': ['raven_1_left', "raven_2_left", "raven_3_left", "raven_4_left", "raven_5_left", 'raven_6_left', "raven_7_left", "raven_6_left", "raven_5_left", "raven_4_left", "raven_3_left", "raven_2_left"],
        'animationFrameTime': 0x1e
      }
    },
    'animation': "flying_right",
    'skill': game.skills.bloodthirsty,
    'petOffset': {
      'x': 0x5a,
      'y': 0x78
    }
  },
  'alienBat': {
    'name': 'alienBat',
    'fullName': "Cosmic Bat",
    'type': 0x1,
    'width': 0x111,
    'height': 0xd6,
    'colliderRectangleOffset': {
      'left': 0.3,
      'right': 0.3,
      'top': 0.45,
      'bottom': 0.1
    },
    'animations': {
      'flying_right': {
        'sprites': ["alienBat_1_idle_right", "alienBat_2_idle_right"],
        'animationFrameTime': 0xc8
      },
      'flying_left': {
        'sprites': ["alienBat_1_idle_left", "alienBat_2_idle_left"],
        'animationFrameTime': 0xc8
      },
      'flapping_right': {
        'sprites': ['alienBat_1_flying_right', 'alienBat_2_flying_right'],
        'animationFrameTime': 0xc8
      },
      'flapping_left': {
        'sprites': ["alienBat_1_flying_left", 'alienBat_2_flying_left'],
        'animationFrameTime': 0xc8
      }
    },
    'animation': "flying_right",
    'spaceResistance': true,
    'skill': game.skills.toTheMoon,
    'petOffset': {
      'x': 0x28,
      'y': 0xa5
    }
  },
  'overfedAlienBat': {
    'name': "overfedAlienBat",
    'fullName': "Overfed Cosmic Bat",
    'type': 0x1,
    'width': 0x111,
    'height': 0xd6,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.3,
      'right': 0.3,
      'top': 0.45,
      'bottom': 0.1
    },
    'animations': {
      'flying_right': {
        'sprites': ['overfedAlienBat_1_right', "overfedAlienBat_2_right", "overfedAlienBat_3_right"],
        'animationFrameTime': 0xb4
      },
      'flying_left': {
        'sprites': ["overfedAlienBat_1_left", 'overfedAlienBat_2_left', 'overfedAlienBat_3_left'],
        'animationFrameTime': 0xb4
      },
      'flapping_right': {
        'sprites': ["overfedAlienBat_1_right", "overfedAlienBat_2_right", "overfedAlienBat_3_right"],
        'animationFrameTime': 0xb4
      },
      'flapping_left': {
        'sprites': ['overfedAlienBat_1_left', "overfedAlienBat_2_left", "overfedAlienBat_3_left"],
        'animationFrameTime': 0xb4
      }
    },
    'animation': "flying_right",
    'spaceResistance': true,
    'skill': game.skills.toTheMoon,
    'petOffset': {
      'x': 0x28,
      'y': 0xa5
    }
  },
  'alienBigEye': {
    'name': "alienBigEye",
    'fullName': "Cosmic Big Eye",
    'type': 0x1,
    'width': 0xb9,
    'height': 0xaa,
    'colliderRectangleOffset': {
      'left': 0.25,
      'right': 0.25,
      'top': 0.25,
      'bottom': 0.25
    },
    'animations': {
      'flying_right': {
        'sprites': ["alienBigEye_12_right"]
      },
      'flying_left': {
        'sprites': ['alienBigEye_12_left']
      },
      'flapping_right': {
        'sprites': ["alienBigEye_1_right", "alienBigEye_2_right", 'alienBigEye_3_right', "alienBigEye_4_right", 'alienBigEye_5_right', 'alienBigEye_6_right', 'alienBigEye_7_right', 'alienBigEye_8_right', "alienBigEye_9_right", "alienBigEye_10_right", "alienBigEye_11_right", "alienBigEye_12_right"],
        'animationFrameTime': 0x3c
      },
      'flapping_left': {
        'sprites': ['alienBigEye_1_left', "alienBigEye_2_left", "alienBigEye_3_left", "alienBigEye_4_left", 'alienBigEye_5_left', "alienBigEye_6_left", "alienBigEye_7_left", "alienBigEye_8_left", "alienBigEye_9_left", "alienBigEye_10_left", 'alienBigEye_11_left', 'alienBigEye_12_left'],
        'animationFrameTime': 0x3c
      }
    },
    'animation': "flying_right",
    'spaceResistance': true,
    'petOffset': {
      'x': 0x64,
      'y': 0x96
    }
  },
  'alienAngryEye': {
    'name': "alienAngryEye",
    'fullName': "Cosmic Angry Eye",
    'type': 0x1,
    'width': 0xea,
    'height': 0xd0,
    'colliderRectangleOffset': {
      'left': 0.23,
      'right': 0.23,
      'top': 0.32,
      'bottom': 0.14
    },
    'animations': {
      'flying_right': {
        'sprites': ["alienAngryEye_6_right"]
      },
      'flying_left': {
        'sprites': ["alienAngryEye_6_left"]
      },
      'flapping_right': {
        'sprites': ['alienAngryEye_1_right', "alienAngryEye_2_right", "alienAngryEye_3_right", "alienAngryEye_4_right", 'alienAngryEye_5_right', "alienAngryEye_6_right"],
        'animationFrameTime': 0x3c
      },
      'flapping_left': {
        'sprites': ["alienAngryEye_1_left", 'alienAngryEye_2_left', "alienAngryEye_3_left", "alienAngryEye_4_left", 'alienAngryEye_5_left', "alienAngryEye_6_left"],
        'animationFrameTime': 0x3c
      }
    },
    'animation': "flying_right",
    'spaceResistance': true,
    'skill': game.skills.toTheMoon,
    'petOffset': {
      'x': 0x32,
      'y': 0xb4
    }
  },
  'owl': {
    'name': "owl",
    'type': 0x1,
    'width': 0x56,
    'height': 0x5d,
    'colliderRectangleOffset': {
      'left': 0.15,
      'right': 0.15,
      'top': 0.25,
      'bottom': 0.3
    },
    'animations': {
      'flying_right': {
        'sprites': ["owl_1_right"]
      },
      'flying_left': {
        'sprites': ["owl_1_left"]
      },
      'flapping_right': {
        'sprites': ["owl_1_right", "owl_2_right", "owl_3_right", "owl_4_right", "owl_5_right", 'owl_6_right', 'owl_7_right', "owl_8_right", 'owl_9_right'],
        'animationFrameTime': 0x3c
      },
      'flapping_left': {
        'sprites': ["owl_1_left", "owl_2_left", "owl_3_left", "owl_4_left", "owl_5_left", 'owl_6_left', "owl_7_left", 'owl_8_left', "owl_9_left"],
        'animationFrameTime': 0x3c
      }
    },
    'animation': 'flying_right',
    'skill': game.skills.excellentHunter,
    'petOffset': {
      'x': 0x50,
      'y': 0x55
    }
  },
  'snowyOwl': {
    'name': "snowyOwl",
    'fullName': "Snowy Owl",
    'type': 0x1,
    'width': 0x64,
    'height': 0x6c,
    'colliderRectangleOffset': {
      'left': 0.15,
      'right': 0.15,
      'top': 0.25,
      'bottom': 0.3
    },
    'animations': {
      'flying_right': {
        'sprites': ['snowyOwl_1_right']
      },
      'flying_left': {
        'sprites': ["snowyOwl_1_left"]
      },
      'flapping_right': {
        'sprites': ["snowyOwl_1_right", 'snowyOwl_2_right', "snowyOwl_3_right", 'snowyOwl_4_right', "snowyOwl_5_right", "snowyOwl_6_right", "snowyOwl_7_right", "snowyOwl_8_right", "snowyOwl_9_right"],
        'animationFrameTime': 0x3c
      },
      'flapping_left': {
        'sprites': ["snowyOwl_1_left", 'snowyOwl_2_left', "snowyOwl_3_left", "snowyOwl_4_left", "snowyOwl_5_left", "snowyOwl_6_left", "snowyOwl_7_left", "snowyOwl_8_left", "snowyOwl_9_left"],
        'animationFrameTime': 0x3c
      }
    },
    'animation': "flying_right",
    'skill': game.skills.excellentHunter,
    'customSpawn': "arctic_spawn",
    'petOffset': {
      'x': 0x55,
      'y': 0x64
    }
  },
  'grimReaper': {
    'name': "grimReaper",
    'fullName': "Grim Reaper",
    'type': 0x1,
    'width': 0xbc,
    'height': 0x9c,
    'colliderRectangleOffset': {
      'left': 0.28,
      'right': 0.28,
      'top': 0.1,
      'bottom': 0.27
    },
    'animations': {
      'flying_right': {
        'sprites': ["grimReaper_1_idle_right", "grimReaper_2_idle_right", "grimReaper_3_idle_right", "grimReaper_4_idle_right", "grimReaper_5_idle_right", 'grimReaper_6_idle_right', "grimReaper_5_idle_right", "grimReaper_4_idle_right", "grimReaper_3_idle_right", "grimReaper_2_idle_right", "grimReaper_1_idle_right"],
        'animationFrameTime': 0x64
      },
      'flying_left': {
        'sprites': ["grimReaper_1_idle_left", "grimReaper_2_idle_left", 'grimReaper_3_idle_left', 'grimReaper_4_idle_left', "grimReaper_5_idle_left", "grimReaper_6_idle_left", "grimReaper_5_idle_left", 'grimReaper_4_idle_left', "grimReaper_3_idle_left", "grimReaper_2_idle_left", "grimReaper_1_idle_left"],
        'animationFrameTime': 0x64
      },
      'flapping_right': {
        'sprites': ['grimReaper_1_flying_right', "grimReaper_2_flying_right", "grimReaper_3_flying_right", 'grimReaper_4_flying_right', "grimReaper_5_flying_right", "grimReaper_4_flying_right", "grimReaper_3_flying_right", "grimReaper_2_flying_right"],
        'animationFrameTime': 0x64
      },
      'flapping_left': {
        'sprites': ["grimReaper_1_flying_left", "grimReaper_2_flying_left", "grimReaper_3_flying_left", "grimReaper_4_flying_left", 'grimReaper_5_flying_left', 'grimReaper_4_flying_left', "grimReaper_3_flying_left", "grimReaper_2_flying_left"],
        'animationFrameTime': 0x64
      },
      'attacking_right': {
        'sprites': ["grimReaper_1_attack_right", "grimReaper_2_attack_right", "grimReaper_3_attack_right", "grimReaper_4_attack_right", "grimReaper_5_attack_right", 'grimReaper_6_attack_right', "grimReaper_7_attack_right", 'grimReaper_8_attack_right'],
        'animationFrameTime': 0x1e
      },
      'attacking_left': {
        'sprites': ["grimReaper_1_attack_left", "grimReaper_2_attack_left", 'grimReaper_3_attack_left', "grimReaper_4_attack_left", "grimReaper_5_attack_left", "grimReaper_6_attack_left", "grimReaper_7_attack_left", "grimReaper_8_attack_left"],
        'animationFrameTime': 0x1e
      }
    },
    'animation': "flying_right",
    'eatsSouls': true,
    'canEnterBoss': true,
    'canEnterArena': true,
    'canEnterBattleRoyale': true,
    'skill': game.skills.scytheAttack1,
    'petOffset': {
      'x': 0x5f,
      'y': 0x8c
    }
  },
  'pumpkinGhost': {
    'name': "pumpkinGhost",
    'fullName': "Pumpkin Ghost",
    'type': 0x1,
    'width': 0xd5,
    'height': 0xa9,
    'moveable': true,
    'colliderRectangleOffset': {
      'left': 0.3,
      'right': 0.3,
      'top': 0.11,
      'bottom': 0.15
    },
    'animations': {
      'flying_right': {
        'sprites': ['pumpkinGhost_1_right']
      },
      'flying_left': {
        'sprites': ['pumpkinGhost_1_left']
      },
      'flapping_right': {
        'sprites': ["pumpkinGhost_1_right", 'pumpkinGhost_2_right', "pumpkinGhost_3_right", "pumpkinGhost_4_right", "pumpkinGhost_5_right", "pumpkinGhost_6_right", "pumpkinGhost_7_right", "pumpkinGhost_8_right", 'pumpkinGhost_9_right', "pumpkinGhost_8_right", "pumpkinGhost_7_right", "pumpkinGhost_6_right", "pumpkinGhost_5_right", "pumpkinGhost_4_right", "pumpkinGhost_3_right", "pumpkinGhost_2_right"],
        'animationFrameTime': 0x5a
      },
      'flapping_left': {
        'sprites': ['pumpkinGhost_1_left', "pumpkinGhost_2_left", "pumpkinGhost_3_left", "pumpkinGhost_4_left", "pumpkinGhost_5_left", 'pumpkinGhost_6_left', "pumpkinGhost_7_left", "pumpkinGhost_8_left", 'pumpkinGhost_9_left', "pumpkinGhost_8_left", "pumpkinGhost_7_left", "pumpkinGhost_6_left", 'pumpkinGhost_5_left', "pumpkinGhost_4_left", "pumpkinGhost_3_left", "pumpkinGhost_2_left"],
        'animationFrameTime': 0x5a
      },
      'attacking_right': {
        'sprites': ["pumpkinGhost_1_attack_right", "pumpkinGhost_2_attack_right", "pumpkinGhost_3_attack_right", "pumpkinGhost_4_attack_right", "pumpkinGhost_5_attack_right", "pumpkinGhost_4_attack_right", "pumpkinGhost_3_attack_right", "pumpkinGhost_2_attack_right", 'pumpkinGhost_1_attack_right'],
        'animationFrameTime': 0x23
      },
      'attacking_left': {
        'sprites': ["pumpkinGhost_1_attack_left", "pumpkinGhost_2_attack_left", "pumpkinGhost_3_attack_left", 'pumpkinGhost_4_attack_left', "pumpkinGhost_5_attack_left", "pumpkinGhost_4_attack_left", "pumpkinGhost_3_attack_left", "pumpkinGhost_2_attack_left", "pumpkinGhost_1_attack_left"],
        'animationFrameTime': 0x23
      }
    },
    'animation': 'flying_right',
    'eatsSouls': true,
    'canEnterBoss': true,
    'canEnterArena': true,
    'skill': game.skills.scytheAttack2,
    'petOffset': {
      'x': 0x5f,
      'y': 0x8c
    }
  },
  'wasp': {
    'name': "wasp",
    'type': 0x1,
    'width': 0x3c,
    'height': 0x21,
    'colliderRectangleOffset': {
      'left': 0.05,
      'right': 0.05,
      'top': 0.45,
      'bottom': 0x0
    },
    'animations': {
      'flying_right': {
        'sprites': ['wasp_1_right']
      },
      'flying_left': {
        'sprites': ["wasp_1_left"]
      },
      'flapping_right': {
        'sprites': ["wasp_1_right", "wasp_2_right", "wasp_3_right", "wasp_4_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["wasp_1_left", "wasp_2_left", 'wasp_3_left', "wasp_4_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flying_right",
    'skill': game.skills.poisonWasp,
    'petOffset': {
      'x': 0x46,
      'y': 0x46
    },
    'reapersIgnoreCollision': true
  },
  'hornet': {
    'name': "hornet",
    'type': 0x1,
    'width': 0x5a,
    'height': 0x65,
    'colliderRectangleOffset': {
      'left': 0.08,
      'right': 0.08,
      'top': 0.35,
      'bottom': 0.28
    },
    'animations': {
      'flying_right': {
        'sprites': ['hornet_1_right']
      },
      'flying_left': {
        'sprites': ["hornet_1_left"]
      },
      'flapping_right': {
        'sprites': ["hornet_1_right", 'hornet_2_right', "hornet_3_right", 'hornet_4_right', "hornet_5_right", "hornet_6_right", 'hornet_7_right', "hornet_8_right", "hornet_9_right", "hornet_8_right", "hornet_7_right", "hornet_6_right", "hornet_5_right", 'hornet_4_right', "hornet_3_right", "hornet_2_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["hornet_1_left", "hornet_2_left", 'hornet_3_left', "hornet_4_left", 'hornet_5_left', "hornet_6_left", "hornet_7_left", "hornet_8_left", "hornet_9_left", "hornet_8_left", "hornet_7_left", "hornet_6_left", "hornet_5_left", "hornet_4_left", "hornet_3_left", "hornet_2_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': 'flying_right',
    'skill': game.skills.poisonWasp,
    'petOffset': {
      'x': 0x4b,
      'y': 0x55
    }
  },
  'swampMonster': {
    'name': "swampMonster",
    'fullName': "Swamp Monster",
    'type': 0x1,
    'width': 0xa0,
    'height': 0x9f,
    'colliderRectangleOffset': {
      'left': 0.36,
      'right': 0.36,
      'top': 0.23,
      'bottom': 0.01
    },
    'animations': {
      'flying_right': {
        'sprites': ["swampMonster_1_right"]
      },
      'flying_left': {
        'sprites': ["swampMonster_1_left"]
      },
      'flapping_right': {
        'sprites': ["swampMonster_1_right", "swampMonster_2_right", "swampMonster_3_right", "swampMonster_4_right", "swampMonster_5_right", "swampMonster_6_right", "swampMonster_7_right", 'swampMonster_8_right', 'swampMonster_9_right', "swampMonster_10_right", "swampMonster_11_right", 'swampMonster_12_right', "swampMonster_13_right", "swampMonster_14_right", "swampMonster_15_right", "swampMonster_16_right", "swampMonster_17_right", 'swampMonster_18_right', "swampMonster_19_right", "swampMonster_20_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["swampMonster_1_left", "swampMonster_2_left", "swampMonster_3_left", "swampMonster_4_left", "swampMonster_5_left", "swampMonster_6_left", "swampMonster_7_left", "swampMonster_8_left", "swampMonster_9_left", 'swampMonster_10_left', "swampMonster_11_left", "swampMonster_12_left", "swampMonster_13_left", 'swampMonster_14_left', "swampMonster_15_left", "swampMonster_16_left", 'swampMonster_17_left', 'swampMonster_18_left', "swampMonster_19_left", "swampMonster_20_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flying_right",
    'skill': game.skills.poisonSwampMonster,
    'petOffset': {
      'x': 0x64,
      'y': 0x78
    }
  },
  'turkey': {
    'name': "turkey",
    'type': 0x1,
    'width': 0x96,
    'height': 0x7e,
    'colliderRectangleOffset': {
      'left': 0.18,
      'right': 0.18,
      'top': 0.33,
      'bottom': 0.19
    },
    'animations': {
      'flying_right': {
        'sprites': ["turkey_2_right"]
      },
      'flying_left': {
        'sprites': ["turkey_2_left"]
      },
      'flapping_right': {
        'sprites': ["turkey_1_right", "turkey_2_right", 'turkey_3_right', "turkey_4_right", "turkey_5_right", "turkey_6_right", "turkey_7_right", "turkey_8_right", "turkey_9_right", "turkey_8_right", "turkey_7_right", "turkey_6_right", "turkey_5_right", "turkey_4_right", "turkey_3_right", "turkey_2_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["turkey_1_left", "turkey_2_left", 'turkey_3_left', "turkey_4_left", "turkey_5_left", "turkey_6_left", 'turkey_7_left', 'turkey_8_left', "turkey_9_left", "turkey_8_left", "turkey_7_left", 'turkey_6_left', "turkey_5_left", "turkey_4_left", 'turkey_3_left', 'turkey_2_left'],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flying_right",
    'skill': game.skills.dig,
    'petOffset': {
      'x': 0x5a,
      'y': 0x64
    }
  },
  'mosquito': {
    'name': "mosquito",
    'type': 0x1,
    'width': 0x3c,
    'height': 0x2d,
    'colliderRectangleOffset': {
      'left': 0.05,
      'right': 0.05,
      'top': 0.2,
      'bottom': 0.05
    },
    'animations': {
      'flying_right': {
        'sprites': ['mosquito_1_right']
      },
      'flying_left': {
        'sprites': ["mosquito_1_left"]
      },
      'flapping_right': {
        'sprites': ["mosquito_1_right", "mosquito_2_right", 'mosquito_3_right', "mosquito_4_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["mosquito_1_left", "mosquito_2_left", 'mosquito_3_left', "mosquito_4_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flying_right",
    'skill': game.skills.infection,
    'petOffset': {
      'x': 0x46,
      'y': 0x46
    },
    'reapersIgnoreCollision': true
  },
  'dragonfly': {
    'name': "dragonfly",
    'type': 0x1,
    'width': 0x46,
    'height': 0x37,
    'colliderRectangleOffset': {
      'left': 0.05,
      'right': 0.05,
      'top': 0.65,
      'bottom': 0.01
    },
    'animations': {
      'flying_right': {
        'sprites': ['dragonfly_1_right']
      },
      'flying_left': {
        'sprites': ['dragonfly_1_left']
      },
      'flapping_right': {
        'sprites': ['dragonfly_1_right', "dragonfly_2_right", 'dragonfly_3_right', "dragonfly_2_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["dragonfly_1_left", "dragonfly_2_left", "dragonfly_3_left", "dragonfly_2_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': 'flying_right',
    'skill': game.skills.grabPrey,
    'petOffset': {
      'x': 0x46,
      'y': 0x32
    },
    'reapersIgnoreCollision': true
  },
  'blueBird': {
    'name': "blueBird",
    'fullName': "Blue bird",
    'type': 0x1,
    'width': 0x30,
    'height': 0x22,
    'colliderRectangleOffset': {
      'left': 0.05,
      'right': 0.05,
      'top': 0.2,
      'bottom': 0.05
    },
    'animations': {
      'flying_right': {
        'sprites': ["blueBird_1_right"]
      },
      'flying_left': {
        'sprites': ["blueBird_1_left"]
      },
      'flapping_right': {
        'sprites': ["blueBird_1_right", "blueBird_2_right", 'blueBird_3_right', "blueBird_4_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["blueBird_1_left", "blueBird_2_left", 'blueBird_3_left', "blueBird_4_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flying_right",
    'skill': game.skills.swoop,
    'petOffset': {
      'x': 0x46,
      'y': 0x46
    }
  },
  'seagull': {
    'name': "seagull",
    'type': 0x1,
    'width': 0x41,
    'height': 0x2d,
    'colliderRectangleOffset': {
      'left': 0.05,
      'right': 0.05,
      'top': 0.2,
      'bottom': 0.05
    },
    'animations': {
      'flying_right': {
        'sprites': ['seagull_1_right']
      },
      'flying_left': {
        'sprites': ['seagull_1_left']
      },
      'flapping_right': {
        'sprites': ['seagull_1_right', "seagull_2_right", 'seagull_3_right', 'seagull_4_right'],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["seagull_1_left", "seagull_2_left", "seagull_3_left", 'seagull_4_left'],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flying_right",
    'skill': game.skills.diving,
    'petOffset': {
      'x': 0x50,
      'y': 0x46
    }
  },
  'pigeon': {
    'name': 'pigeon',
    'type': 0x1,
    'width': 0x4a,
    'height': 0x3c,
    'colliderRectangleOffset': {
      'left': 0.25,
      'right': 0.25,
      'top': 0.1,
      'bottom': 0.05
    },
    'animations': {
      'flying_right': {
        'sprites': ["pigeon_1_right"]
      },
      'flying_left': {
        'sprites': ["pigeon_1_left"]
      },
      'standing_right': {
        'sprites': ["pigeon_6_right"]
      },
      'standing_left': {
        'sprites': ['pigeon_6_left']
      },
      'flapping_right': {
        'sprites': ["pigeon_1_right", "pigeon_2_right", 'pigeon_3_right', "pigeon_4_right", 'pigeon_5_right', "pigeon_4_right", 'pigeon_3_right', "pigeon_2_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["pigeon_1_left", "pigeon_2_left", "pigeon_3_left", "pigeon_4_left", "pigeon_5_left", "pigeon_4_left", 'pigeon_3_left', "pigeon_2_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flapping_right",
    'skill': game.skills.hunger,
    'petOffset': {
      'x': 0x46,
      'y': 0x46
    }
  },
  'hen': {
    'name': 'hen',
    'type': 0x1,
    'width': 0x46,
    'height': 0x50,
    'colliderRectangleOffset': {
      'left': 0.25,
      'right': 0.25,
      'top': 0.17,
      'bottom': 0.15
    },
    'animations': {
      'flying_right': {
        'sprites': ["hen_1_right"]
      },
      'flying_left': {
        'sprites': ['hen_1_left']
      },
      'standing_right': {
        'sprites': ["hen_5_right"]
      },
      'standing_left': {
        'sprites': ["hen_5_left"]
      },
      'flapping_right': {
        'sprites': ["hen_1_right", "hen_2_right", "hen_3_right", "hen_4_right", "hen_3_right", "hen_2_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["hen_1_left", 'hen_2_left', "hen_3_left", 'hen_4_left', "hen_3_left", "hen_2_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flapping_right",
    'skill': game.skills.layEgg,
    'petOffset': {
      'x': 0x46,
      'y': 0x46
    }
  },
  'duck': {
    'name': "duck",
    'type': 0x1,
    'width': 0x59,
    'height': 0x48,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0.3,
      'bottom': 0.24
    },
    'animations': {
      'flying_right': {
        'sprites': ['duck_2_right']
      },
      'flying_left': {
        'sprites': ['duck_2_left']
      },
      'flapping_right': {
        'sprites': ['duck_1_right', "duck_2_right", "duck_3_right", "duck_4_right", "duck_5_right", "duck_4_right", 'duck_3_right', "duck_2_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["duck_1_left", "duck_2_left", "duck_3_left", 'duck_4_left', "duck_5_left", 'duck_4_left', "duck_3_left", "duck_2_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': 'flapping_right',
    'skill': game.skills.diving,
    'petOffset': {
      'x': 0x46,
      'y': 0x46
    }
  },
  'parrot': {
    'name': 'parrot',
    'type': 0x1,
    'width': 0x62,
    'height': 0x66,
    'colliderRectangleOffset': {
      'left': 0.05,
      'right': 0.05,
      'top': 0.52,
      'bottom': 0.18
    },
    'animations': {
      'flying_right': {
        'sprites': ["parrot_5_right"]
      },
      'flying_left': {
        'sprites': ["parrot_5_left"]
      },
      'flapping_right': {
        'sprites': ["parrot_1_right", 'parrot_2_right', "parrot_3_right", "parrot_4_right", "parrot_5_right", "parrot_6_right", "parrot_5_right", "parrot_4_right", 'parrot_3_right', "parrot_2_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["parrot_1_left", 'parrot_2_left', "parrot_3_left", "parrot_4_left", "parrot_5_left", "parrot_6_left", "parrot_5_left", 'parrot_4_left', "parrot_3_left", "parrot_2_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': 'flying_right',
    'skill': game.skills.fruitEater,
    'petOffset': {
      'x': 0x46,
      'y': 0x50
    }
  },
  'redBird': {
    'name': "redBird",
    'fullName': "Red bird",
    'type': 0x1,
    'width': 0x40,
    'height': 0x30,
    'colliderRectangleOffset': {
      'left': 0.05,
      'right': 0.05,
      'top': 0.3,
      'bottom': 0.05
    },
    'animations': {
      'flying_right': {
        'sprites': ["redBird_4_right"]
      },
      'flying_left': {
        'sprites': ["redBird_4_left"]
      },
      'flapping_right': {
        'sprites': ['redBird_1_right', "redBird_2_right", "redBird_3_right", "redBird_4_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["redBird_1_left", "redBird_2_left", "redBird_3_left", "redBird_4_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flying_right",
    'skill': game.skills.swoop,
    'petOffset': {
      'x': 0x46,
      'y': 0x46
    }
  },
  'commonBlackbird': {
    'name': "commonBlackbird",
    'fullName': "Blackbird",
    'type': 0x1,
    'width': 0x40,
    'height': 0x30,
    'colliderRectangleOffset': {
      'left': 0.05,
      'right': 0.05,
      'top': 0.3,
      'bottom': 0.05
    },
    'animations': {
      'flying_right': {
        'sprites': ['commonBlackbird_4_right']
      },
      'flying_left': {
        'sprites': ['commonBlackbird_4_left']
      },
      'flapping_right': {
        'sprites': ["commonBlackbird_1_right", 'commonBlackbird_2_right', "commonBlackbird_3_right", 'commonBlackbird_4_right'],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ['commonBlackbird_1_left', "commonBlackbird_2_left", "commonBlackbird_3_left", "commonBlackbird_4_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flying_right",
    'skill': game.skills.swoop,
    'petOffset': {
      'x': 0x46,
      'y': 0x46
    }
  },
  'pompadourCotinga': {
    'name': "pompadourCotinga",
    'fullName': "Brown bird",
    'type': 0x1,
    'width': 0x60,
    'height': 0x3a,
    'colliderRectangleOffset': {
      'left': 0.05,
      'right': 0.05,
      'top': 0.3,
      'bottom': 0.05
    },
    'animations': {
      'flying_right': {
        'sprites': ["pompadourCotinga_4_right"]
      },
      'flying_left': {
        'sprites': ["pompadourCotinga_4_left"]
      },
      'flapping_right': {
        'sprites': ['pompadourCotinga_1_right', 'pompadourCotinga_2_right', "pompadourCotinga_3_right", "pompadourCotinga_4_right", "pompadourCotinga_3_right", "pompadourCotinga_2_right"],
        'animationFrameTime': 0x32
      },
      'flapping_left': {
        'sprites': ["pompadourCotinga_1_left", 'pompadourCotinga_2_left', "pompadourCotinga_3_left", "pompadourCotinga_4_left", 'pompadourCotinga_3_left', "pompadourCotinga_2_left"],
        'animationFrameTime': 0x32
      }
    },
    'animation': 'flying_right',
    'skill': game.skills.swoop,
    'petOffset': {
      'x': 0x5a,
      'y': 0x46
    }
  },
  'hawk': {
    'name': "hawk",
    'type': 0x1,
    'width': 0x54,
    'height': 0x3c,
    'colliderRectangleOffset': {
      'left': 0.07,
      'right': 0.07,
      'top': 0.24,
      'bottom': 0.01
    },
    'animations': {
      'flying_right': {
        'sprites': ['hawk_1_right']
      },
      'flying_left': {
        'sprites': ["hawk_1_left"]
      },
      'flapping_right': {
        'sprites': ['hawk_1_right', "hawk_2_right", 'hawk_3_right', "hawk_4_right", "hawk_3_right", "hawk_2_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["hawk_1_left", "hawk_2_left", 'hawk_3_left', "hawk_4_left", "hawk_3_left", "hawk_2_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': 'flying_right',
    'skill': game.skills.speedUp,
    'petOffset': {
      'x': 0x55,
      'y': 0x46
    }
  },
  'dirt_grass': {
    'name': "dirt_grass",
    'type': 0x2,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      0x1: {
        'sprites': ['dirt_grass1']
      },
      0x2: {
        'sprites': ["dirt_grass2"]
      },
      0x3: {
        'sprites': ["dirt_grass3"]
      }
    },
    'animation': '1',
    'autoBorder': true,
    'antiStuck': true,
    'staticCanvas': true
  },
  'dirt_graveyard': {
    'name': 'dirt_graveyard',
    'type': 0x2,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      0x1: {
        'sprites': ["dirt_graveyard_1"]
      },
      0x2: {
        'sprites': ["dirt_graveyard_2"]
      },
      0x3: {
        'sprites': ["dirt_graveyard_3"]
      },
      0x4: {
        'sprites': ['dirt_graveyard_4']
      }
    },
    'animation': '1',
    'autoBorder': true,
    'antiStuck': true,
    'staticCanvas': true
  },
  'arena_tile_top': {
    'name': 'arena_tile_top',
    'type': 0x2,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      0x1: {
        'sprites': ['arena_tile_top_1']
      },
      0x2: {
        'sprites': ["arena_tile_top_2"]
      }
    },
    'animation': '1',
    'antiStuck': true,
    'staticCanvas': true
  },
  'arena_tile_top_breakable': {
    'name': "arena_tile_top_breakable",
    'type': 0x2,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      0x1: {
        'sprites': ["arena_tile_top_breakable_1"]
      },
      0x2: {
        'sprites': ["arena_tile_top_breakable_2"]
      }
    },
    'animation': '1',
    'antiStuck': true,
    'staticCanvas': true,
    'breakableByExplosion': true
  },
  'dirt_snow': {
    'name': 'dirt_snow',
    'type': 0x2,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      0x1: {
        'sprites': ["dirt_snow1"]
      },
      0x2: {
        'sprites': ["dirt_snow2"]
      }
    },
    'animation': '1',
    'autoBorder': true,
    'collideMovementReduce': 0.975,
    'antiStuck': true,
    'staticCanvas': true
  },
  'iceBlock': {
    'name': "iceBlock",
    'type': 0x2,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      'none': {
        'sprites': ["iceBlock"]
      }
    },
    'animation': "none",
    'collideMovementReduce': 0.99,
    'antiStuck': true
  },
  'ice_left': {
    'name': 'ice_left',
    'type': 0x2,
    'width': 0x80,
    'height': 0x80,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0x0,
      'bottom': 0.2
    },
    'animations': {
      'none': {
        'sprites': ["ice_left"]
      }
    },
    'animation': "none",
    'collideMovementReduce': 0.99
  },
  'ice_middle': {
    'name': "ice_middle",
    'type': 0x2,
    'width': 0x280,
    'height': 0x80,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0x0,
      'bottom': 0.2
    },
    'animations': {
      'none': {
        'sprites': ["ice_middle"]
      }
    },
    'animation': "none",
    'collideMovementReduce': 0.99
  },
  'ice_right': {
    'name': 'ice_right',
    'type': 0x2,
    'width': 0x140,
    'height': 0x80,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0x0,
      'bottom': 0.2
    },
    'animations': {
      'none': {
        'sprites': ["ice_right"]
      }
    },
    'animation': "none",
    'collideMovementReduce': 0.99
  },
  'beam': {
    'name': "beam",
    'type': 0x2,
    'width': 0x108,
    'height': 0x2c,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0x0,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ["beam"]
      }
    },
    'animation': "none"
  },
  'mine_track': {
    'name': "mine_track",
    'type': 0x2,
    'width': 0x40,
    'height': 0xf,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0.05,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ["mine_track"]
      }
    },
    'animation': "none"
  },
  'mine_buffer': {
    'name': 'mine_buffer',
    'type': 0x2,
    'width': 0x46,
    'height': 0x3f,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.6,
      'right': 0.15,
      'top': 0.05,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ["mine_buffer"]
      }
    },
    'animation': 'none'
  },
  'mine_cart': {
    'name': 'mine_cart',
    'type': 0x2,
    'width': 0x64,
    'height': 0x5c,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.1,
      'right': 0.1,
      'top': 0.1,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ["mine_cart"]
      }
    },
    'animation': "none"
  },
  'jungleTop': {
    'name': 'jungleTop',
    'type': 0x2,
    'width': 0x80,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      'none': {
        'sprites': ["jungleTop"]
      }
    },
    'autoBorder': true,
    'animation': "none",
    'antiStuck': true
  },
  'jungleBottom': {
    'name': "jungleBottom",
    'type': 0x2,
    'width': 0x80,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      'none': {
        'sprites': ["jungleBottom"]
      }
    },
    'autoBorder': true,
    'animation': "none",
    'antiStuck': true
  },
  'boat_1': {
    'name': "boat_1",
    'type': 0x2,
    'width': 0x80,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.5,
      'right': 0x0,
      'top': 0x0,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ['boat_1']
      }
    },
    'animation': "none",
    'antiStuck': true
  },
  'boat_2': {
    'name': 'boat_2',
    'type': 0x2,
    'width': 0x80,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      'none': {
        'sprites': ["boat_2"]
      }
    },
    'animation': "none",
    'antiStuck': true
  },
  'boat_3': {
    'name': "boat_3",
    'type': 0x2,
    'width': 0x80,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0.5,
      'top': 0x0,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ["boat_3"]
      }
    },
    'animation': 'none',
    'antiStuck': true
  },
  'boat_4': {
    'name': 'boat_4',
    'type': 0x2,
    'width': 0x80,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      'none': {
        'sprites': ["boat_4"]
      }
    },
    'animation': "none",
    'antiStuck': true
  },
  'boat_5': {
    'name': "boat_5",
    'type': 0x2,
    'width': 0x80,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      'none': {
        'sprites': ["boat_5"]
      }
    },
    'animation': 'none',
    'antiStuck': true
  },
  'boat_6': {
    'name': "boat_6",
    'type': 0x2,
    'width': 0x80,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      'none': {
        'sprites': ["boat_6"]
      }
    },
    'animation': "none",
    'antiStuck': true
  },
  'boat_porthole': {
    'name': "boat_porthole",
    'type': 0x2,
    'width': 0x80,
    'height': 0x80,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["boat_porthole"]
      }
    },
    'animation': "none",
    'zIndex': 0x6
  },
  'boat_cannon': {
    'name': 'boat_cannon',
    'type': 0x2,
    'width': 0x80,
    'height': 0x7b,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["boat_cannon"]
      }
    },
    'animation': "none",
    'zIndex': 0x6
  },
  'boat_sail': {
    'name': "boat_sail",
    'type': 0xd,
    'width': 0x171,
    'height': 0x280,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['boat_sail']
      }
    },
    'animation': "none"
  },
  'dirt': {
    'name': "dirt",
    'type': 0x2,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      0x1: {
        'sprites': ["dirt1"]
      },
      0x2: {
        'sprites': ['dirt2']
      },
      0x3: {
        'sprites': ["dirt3"]
      },
      0x4: {
        'sprites': ["dirt4"]
      },
      0x5: {
        'sprites': ["dirt5"]
      },
      0x6: {
        'sprites': ["dirt6"]
      },
      0x7: {
        'sprites': ['dirt7']
      },
      0x8: {
        'sprites': ["dirt8"]
      },
      0x9: {
        'sprites': ["dirt9"]
      }
    },
    'animation': '1',
    'antiStuck': true,
    'autoBorder': true,
    'staticCanvas': true
  },
  'dirt_fill_graveyard': {
    'name': "dirt_fill_graveyard",
    'type': 0x2,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      0x1: {
        'sprites': ["dirt_fill_graveyard_1"]
      },
      0x2: {
        'sprites': ["dirt_fill_graveyard_2"]
      },
      0x3: {
        'sprites': ['dirt_fill_graveyard_3']
      },
      0x4: {
        'sprites': ["dirt_fill_graveyard_4"]
      },
      0x5: {
        'sprites': ['dirt_fill_graveyard_5']
      },
      0x6: {
        'sprites': ['dirt_fill_graveyard_6']
      },
      0x7: {
        'sprites': ["dirt_fill_graveyard_7"]
      },
      0x8: {
        'sprites': ["dirt_fill_graveyard_8"]
      },
      0x9: {
        'sprites': ["dirt_fill_graveyard_9"]
      }
    },
    'animation': '1',
    'antiStuck': true,
    'autoBorder': true,
    'staticCanvas': true
  },
  'dirt_top': {
    'name': 'dirt_top',
    'type': 0x2,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      0x1: {
        'sprites': ["dirt_top1"]
      },
      0x2: {
        'sprites': ["dirt_top2"]
      },
      0x3: {
        'sprites': ["dirt_top3"]
      },
      0x4: {
        'sprites': ["dirt_top4"]
      }
    },
    'animation': '1',
    'antiStuck': true,
    'autoBorder': true,
    'staticCanvas': true
  },
  'dirt_top_graveyard': {
    'name': "dirt_top_graveyard",
    'type': 0x2,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      0x1: {
        'sprites': ["dirt_top_graveyard_1"]
      },
      0x2: {
        'sprites': ['dirt_top_graveyard_2']
      },
      0x3: {
        'sprites': ["dirt_top_graveyard_3"]
      },
      0x4: {
        'sprites': ["dirt_top_graveyard_4"]
      }
    },
    'animation': '1',
    'antiStuck': true,
    'autoBorder': true,
    'staticCanvas': true
  },
  'factory_floor_top': {
    'name': "factory_floor_top",
    'type': 0x2,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0.16,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ["factory_floor_top"]
      }
    },
    'animation': "none",
    'antiStuck': true,
    'autoBorder': true
  },
  'factory_fill': {
    'name': 'factory_fill',
    'type': 0x2,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      'none': {
        'sprites': ["factory_fill"]
      }
    },
    'animation': "none",
    'antiStuck': true,
    'autoBorder': true
  },
  'brick_grey': {
    'name': "brick_grey",
    'type': 0x2,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      'none': {
        'sprites': ["brick_grey"]
      }
    },
    'animation': 'none',
    'antiStuck': true,
    'autoBorder': true
  },
  'brick_pyramid': {
    'name': "brick_pyramid",
    'type': 0x2,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      'none': {
        'sprites': ['brick_pyramid']
      }
    },
    'animation': 'none',
    'antiStuck': true,
    'autoBorder': true
  },
  'sand': {
    'name': "sand",
    'type': 0x2,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      'none': {
        'sprites': ["sand"]
      }
    },
    'animation': "none",
    'antiStuck': true,
    'autoBorder': true
  },
  'black_tile': {
    'name': 'black_tile',
    'type': 0x2,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      'none': {
        'sprites': ["black_tile"]
      }
    },
    'animation': "none",
    'antiStuck': true
  },
  'invisible_tile': {
    'name': "invisible_tile",
    'type': 0xd,
    'width': 0x40,
    'height': 0x40,
    'opacity': 0x0,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      'none': {
        'sprites': ["black_tile"]
      }
    },
    'animation': "none",
    'antiStuck': true
  },
  'sand_volleyball': {
    'name': "sand_volleyball",
    'type': 0x2,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      'none': {
        'sprites': ["sand"]
      }
    },
    'animation': 'none',
    'antiStuck': true,
    'collideMovementReduce': 0.99,
    'autoBorder': true
  },
  'arena_tile_fill': {
    'name': 'arena_tile_fill',
    'type': 0x2,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      'none': {
        'sprites': ["arena_tile_fill"]
      }
    },
    'animation': "none",
    'antiStuck': true
  },
  'arena_tile_fill_breakable': {
    'name': 'arena_tile_fill_breakable',
    'type': 0x2,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      'none': {
        'sprites': ['arena_tile_fill_breakable']
      }
    },
    'animation': "none",
    'antiStuck': true,
    'breakableByExplosion': true
  },
  'greystone': {
    'name': 'greystone',
    'type': 0x2,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      'none': {
        'sprites': ['greystone']
      }
    },
    'animation': "none",
    'antiStuck': true,
    'autoBorder': true
  },
  'greystone_sand': {
    'name': 'greystone_sand',
    'type': 0x2,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      'none': {
        'sprites': ["greystone_sand"]
      }
    },
    'animation': 'none',
    'antiStuck': true,
    'autoBorder': true
  },
  'fence': {
    'name': "fence",
    'type': 0xd,
    'width': 0x40,
    'height': 0x30,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["fence"]
      }
    },
    'animation': "none"
  },
  'spike_trap_bg_1': {
    'name': "spike_trap_bg_1",
    'type': 0xd,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['spike_trap_bg_1']
      }
    },
    'animation': "none",
    'zIndex': 0x6
  },
  'spike_trap_bg_2': {
    'name': "spike_trap_bg_2",
    'type': 0xd,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['spike_trap_bg_2']
      }
    },
    'animation': "none",
    'zIndex': 0x6
  },
  'spike_trap_bg_3': {
    'name': "spike_trap_bg_3",
    'type': 0xd,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["spike_trap_bg_3"]
      }
    },
    'animation': "none",
    'zIndex': 0x6
  },
  'spike_trap_bg_4': {
    'name': 'spike_trap_bg_4',
    'type': 0xd,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["spike_trap_bg_4"]
      }
    },
    'animation': 'none',
    'zIndex': 0x6
  },
  'spike_trap_bg_5': {
    'name': 'spike_trap_bg_5',
    'type': 0xd,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["spike_trap_bg_5"]
      }
    },
    'animation': "none",
    'zIndex': 0x6
  },
  'spike_trap_bg_6': {
    'name': "spike_trap_bg_6",
    'type': 0xd,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["spike_trap_bg_6"]
      }
    },
    'animation': 'none',
    'zIndex': 0x6
  },
  'spike_trap_bg_7': {
    'name': 'spike_trap_bg_7',
    'type': 0xd,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["spike_trap_bg_7"]
      }
    },
    'animation': "none",
    'zIndex': 0x6
  },
  'spike_trap_bg_8': {
    'name': "spike_trap_bg_8",
    'type': 0xd,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["spike_trap_bg_8"]
      }
    },
    'animation': 'none',
    'zIndex': 0x6
  },
  'spike_trap_bg_9': {
    'name': "spike_trap_bg_9",
    'type': 0xd,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["spike_trap_bg_9"]
      }
    },
    'animation': 'none',
    'zIndex': 0x6
  },
  'spike_trap_bg_10': {
    'name': "spike_trap_bg_10",
    'type': 0xd,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["spike_trap_bg_10"]
      }
    },
    'animation': 'none',
    'zIndex': 0x6
  },
  'spike_trap_bg_11': {
    'name': "spike_trap_bg_11",
    'type': 0xd,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["spike_trap_bg_11"]
      }
    },
    'animation': "none",
    'zIndex': 0x6
  },
  'spike_trap_bg_12': {
    'name': "spike_trap_bg_12",
    'type': 0xd,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['spike_trap_bg_12']
      }
    },
    'animation': "none",
    'zIndex': 0x6
  },
  'spike_trap_bg_13': {
    'name': "spike_trap_bg_13",
    'type': 0xd,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["spike_trap_bg_13"]
      }
    },
    'animation': "none",
    'zIndex': 0x6
  },
  'spike_trap_bg_14': {
    'name': "spike_trap_bg_14",
    'type': 0xd,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["spike_trap_bg_14"]
      }
    },
    'animation': "none",
    'zIndex': 0x6
  },
  'spike_trap_bg_15': {
    'name': "spike_trap_bg_15",
    'type': 0xd,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['spike_trap_bg_15']
      }
    },
    'animation': 'none',
    'zIndex': 0x6
  },
  'spike_trap_saw': {
    'name': 'spike_trap_saw',
    'type': 0x9,
    'width': 0xc0,
    'height': 0xc0,
    'colliderRectangleOffset': {
      'left': 0.2,
      'right': 0.2,
      'top': 0.2,
      'bottom': 0.2
    },
    'gravityOn': false,
    'moveable': true,
    'isCollider': true,
    'animations': {
      'none': {
        'sprites': ["spike_trap_saw"]
      }
    },
    'animation': 'none',
    'interpolateSpeed': 0.2,
    'cantBePushed': true,
    'zIndex': 0x7
  },
  'pipe': {
    'name': "pipe",
    'type': 0xd,
    'width': 0x4a,
    'height': 0x4f,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['pipe']
      }
    },
    'animation': "none",
    'zIndex': 0x65
  },
  'pipe_foreground': {
    'name': "pipe_foreground",
    'type': 0xd,
    'width': 0x4a,
    'height': 0x4f,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["pipe"]
      }
    },
    'animation': 'none',
    'zIndex': 0x65,
    'staticCanvas': false
  },
  'pipe_upper': {
    'name': "pipe_upper",
    'type': 0xd,
    'width': 0x4a,
    'height': 0x4f,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["pipe_upper"]
      }
    },
    'animation': 'none',
    'zIndex': 0x64
  },
  'pipe_lower': {
    'name': "pipe_lower",
    'type': 0xd,
    'width': 0x4a,
    'height': 0x5d,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["pipe_lower"]
      }
    },
    'animation': 'none',
    'zIndex': 0x64
  },
  'pipe_exit': {
    'name': 'pipe_exit',
    'type': 0xd,
    'width': 0x79,
    'height': 0x90,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["pipe_exit"]
      }
    },
    'animation': 'none',
    'zIndex': -0x1f4
  },
  'pipe_background': {
    'name': "pipe_background",
    'type': 0xd,
    'width': 0x4a,
    'height': 0x9c,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["pipe_background"]
      }
    },
    'animation': 'none',
    'zIndex': -0x190
  },
  'stalk_light_green': {
    'name': "stalk_light_green",
    'type': 0x2,
    'width': 0x40,
    'height': 0x4a,
    'gravityOn': false,
    'moveable': false,
    'isCollider': true,
    'colliderRectangleOffset': {
      'left': 0.42,
      'right': 0.34,
      'top': 0x0,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ["stalk_light_green"]
      }
    },
    'animation': "none",
    'antiStuck': true
  },
  'ectoplasm_fire': {
    'name': "ectoplasm_fire",
    'type': 0x2,
    'width': 0xe5,
    'height': 0xc0,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.1,
      'right': 0.1,
      'top': 0x0,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ['ectoplasm_fire_1', "ectoplasm_fire_2", "ectoplasm_fire_3", "ectoplasm_fire_4"],
        'animationFrameTime': 0x78
      }
    },
    'animation': "none",
    'zIndex': 0x64,
    'light': true,
    'light_radius': 0xaa,
    'light_random_radius': 0xa
  },
  'kingJustice': {
    'name': "kingJustice",
    'type': 0x9,
    'width': 0x9a,
    'height': 0x80,
    'gravityOn': false,
    'moveable': false,
    'isCollider': true,
    'animations': {
      'none': {
        'sprites': ["kingJustice_1", "kingJustice_2", "kingJustice_3", "kingJustice_2", "kingJustice_1"],
        'animationFrameTime': 0x64
      }
    },
    'animation': 'none',
    'zIndex': -0x1f4
  },
  'parchment_info': {
    'name': "parchment_info",
    'type': 0x9,
    'width': 0x50,
    'height': 0x50,
    'gravityOn': false,
    'moveable': false,
    'isCollider': true,
    'animations': {
      'none': {
        'sprites': ["parchment_info"]
      }
    },
    'animation': "none",
    'zIndex': -0x1f4
  },
  'executioner': {
    'name': 'executioner',
    'type': 0x9,
    'width': 0xf6,
    'height': 0xbc,
    'gravityOn': false,
    'moveable': false,
    'isCollider': true,
    'colliderRectangleOffset': {
      'left': 0.3,
      'right': 0.3,
      'top': 0.1,
      'bottom': 0.1
    },
    'animations': {
      'none': {
        'sprites': ["executioner_1", "executioner_2", "executioner_3", 'executioner_4', "executioner_5", "executioner_6", 'executioner_5', "executioner_4", 'executioner_3', 'executioner_2'],
        'animationFrameTime': 0x64
      }
    },
    'animation': "none",
    'zIndex': -0x5a
  },
  'torch': {
    'name': 'torch',
    'type': 0x2,
    'width': 0x1c,
    'height': 0x6a,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["torch_1", "torch_2", "torch_3", "torch_4", "torch_5", "torch_6"],
        'animationFrameTime': 0x5a
      }
    },
    'animation': "none",
    'zIndex': -0x1f4,
    'light': true,
    'light_radius': 0x190,
    'light_random_radius': 0x8
  },
  'arena_torch': {
    'name': "arena_torch",
    'type': 0x2,
    'width': 0x5a,
    'height': 0x6c,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["arena_torch_1", 'arena_torch_2', "arena_torch_3", 'arena_torch_4', "arena_torch_5"],
        'animationFrameTime': 0x5a
      }
    },
    'animation': "none",
    'zIndex': -0x63
  },
  'factory_lamp': {
    'name': "factory_lamp",
    'type': 0x2,
    'width': 0xc3,
    'height': 0x15e,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["factory_lamp"]
      }
    },
    'animation': 'none',
    'zIndex': -0x1f4,
    'light': true,
    'light_radius': 0x320,
    'staticCanvas': false
  },
  'green_light': {
    'name': "green_light",
    'type': 0x2,
    'width': 0x2c,
    'height': 0x3b,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["green_light"]
      }
    },
    'animation': "none",
    'zIndex': -0x1f4,
    'light': true,
    'light_radius': 0x12c
  },
  'water': {
    'name': "water",
    'type': 0x2,
    'opacity': 0.85,
    'width': 0x80,
    'height': 0x100,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0.2,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ['water1', "water2"],
        'animationFrameTime': 0x1f4
      }
    },
    'animation': 'none',
    'fixedDraw': true,
    'zIndex': 0x64
  },
  'water2': {
    'name': "water2",
    'type': 0x2,
    'opacity': 0.8,
    'width': 0x80,
    'height': 0x100,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0.2,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ["water2_1", 'water2_2'],
        'animationFrameTime': 0x1f4
      }
    },
    'animation': "none",
    'zIndex': 0x64,
    'fixedDraw': true
  },
  'water2_fill': {
    'name': 'water2_fill',
    'type': 0x2,
    'opacity': 0.8,
    'width': 0x80,
    'height': 0x80,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0x0,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ["water2_fill"]
      }
    },
    'animation': "none",
    'zIndex': 0x64,
    'fixedDraw': true
  },
  'ocean': {
    'name': "ocean",
    'type': 0x2,
    'opacity': 0.8,
    'width': 0xa00,
    'height': 0x640,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0x0,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ["ocean"]
      }
    },
    'animation': "none",
    'zIndex': 0x64
  },
  'arctic': {
    'name': "arctic",
    'type': 0x2,
    'opacity': 0.8,
    'width': 0x900,
    'height': 0x640,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0.01,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ['arctic']
      }
    },
    'animation': "none",
    'zIndex': 0x64
  },
  'spiderweb_1': {
    'name': 'spiderweb_1',
    'type': 0x2,
    'width': 0x101,
    'height': 0x155,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.07,
      'right': 0.21,
      'top': 0.16,
      'bottom': 0.1
    },
    'animations': {
      'none': {
        'sprites': ["spiderweb_1"]
      }
    },
    'animation': 'none',
    'zIndex': -0x64
  },
  'spiderweb_2': {
    'name': "spiderweb_2",
    'type': 0x2,
    'width': 0xe7,
    'height': 0xe7,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.1,
      'right': 0.1,
      'top': 0.1,
      'bottom': 0.1
    },
    'animations': {
      'none': {
        'sprites': ["spiderweb_2"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'spiderweb_3': {
    'name': "spiderweb_3",
    'type': 0x2,
    'width': 0x101,
    'height': 0x155,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.21,
      'right': 0.07,
      'top': 0.16,
      'bottom': 0.1
    },
    'animations': {
      'none': {
        'sprites': ["spiderweb_3"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'toxic_machine': {
    'name': "toxic_machine",
    'type': 0xd,
    'width': 0x4f4,
    'height': 0x152,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["toxic_machine"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'standing_stone': {
    'name': "standing_stone",
    'type': 0xd,
    'width': 0x93,
    'height': 0x18e,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["standing_stone"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'rock_1_blue': {
    'name': "rock_1_blue",
    'type': 0xd,
    'width': 0x45e,
    'height': 0x1b0,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["rock_1_blue"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'rock_3_grey': {
    'name': "rock_3_grey",
    'type': 0xd,
    'width': 0x48a,
    'height': 0x1f9,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["rock_3_grey"]
      }
    },
    'animation': 'none',
    'zIndex': -0x64
  },
  'space_rock_1': {
    'name': "space_rock_1",
    'type': 0xd,
    'width': 0x31b,
    'height': 0x142,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["space_rock_1"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'space_rock_2': {
    'name': 'space_rock_2',
    'type': 0xd,
    'width': 0x245,
    'height': 0xeb,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["space_rock_2"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'space_rock_3': {
    'name': "space_rock_3",
    'type': 0xd,
    'width': 0x1eb,
    'height': 0x190,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["space_rock_3"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'cosmicPlant': {
    'name': 'cosmicPlant',
    'type': 0x3,
    'width': 0xb3,
    'height': 0xbb,
    'gravityOn': false,
    'moveable': false,
    'isCollider': true,
    'colliderRectangleOffset': {
      'left': 0.18,
      'right': 0.25,
      'top': 0.16,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ['cosmic_plant']
      }
    },
    'animation': "none",
    'antiStuck': true
  },
  'jungleTree1': {
    'name': "jungleTree1",
    'type': 0xd,
    'width': 0x342,
    'height': 0x384,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['jungleTree1']
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'jungleTree2': {
    'name': 'jungleTree2',
    'type': 0xd,
    'width': 0x3ba,
    'height': 0x371,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["jungleTree2"]
      }
    },
    'animation': 'none',
    'zIndex': -0x65
  },
  'strangeTree': {
    'name': 'strangeTree',
    'type': 0xd,
    'width': 0x2ee,
    'height': 0x2ae,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["strangeTree"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'tree_1__no_vegetation_base': {
    'name': "tree_1__no_vegetation_base",
    'type': 0xd,
    'width': 0x3ee,
    'height': 0x3e8,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["tree_1__no_vegetation_base"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'tree_3_no_vegetation_base': {
    'name': "tree_3_no_vegetation_base",
    'type': 0xd,
    'width': 0x31f,
    'height': 0x44c,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["tree_3_no_vegetation_base"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'thorn_branch_2': {
    'name': "thorn_branch_2",
    'type': 0xd,
    'width': 0xe6,
    'height': 0x12c,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["thorn_branch_2"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'thorn_branch_3': {
    'name': "thorn_branch_3",
    'type': 0xd,
    'width': 0x1c2,
    'height': 0x137,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["thorn_branch_3"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'statue_1_with_vegetation': {
    'name': "statue_1_with_vegetation",
    'type': 0xd,
    'width': 0xfe,
    'height': 0x17d,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["statue_1_with_vegetation"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'open_coffin': {
    'name': 'open_coffin',
    'type': 0xd,
    'width': 0x10a,
    'height': 0x90,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["open_coffin"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'grave': {
    'name': "grave",
    'type': 0xd,
    'width': 0x1ac,
    'height': 0x104,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["grave"]
      }
    },
    'animation': 'none',
    'zIndex': -0x64
  },
  'coffin_dark': {
    'name': "coffin_dark",
    'type': 0xd,
    'width': 0xbc,
    'height': 0xa0,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['coffin_dark']
      }
    },
    'animation': 'none',
    'zIndex': -0x64
  },
  'brick_post_1': {
    'name': "brick_post_1",
    'type': 0xd,
    'width': 0x7e,
    'height': 0x12c,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["brick_post_1"]
      }
    },
    'animation': "none",
    'zIndex': -0x63
  },
  'swamp': {
    'name': "swamp",
    'type': 0x2,
    'width': 0x800,
    'height': 0x230,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0.06,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ["swamp"]
      }
    },
    'opacity': 0.98,
    'animation': "none",
    'zIndex': 0x64
  },
  'toxic_water': {
    'name': 'toxic_water',
    'type': 0x2,
    'width': 0x200,
    'height': 0xb5,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0.03,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ['toxic_water']
      }
    },
    'opacity': 0x1,
    'animation': "none",
    'zIndex': 0x64,
    'staticCanvas': false,
    'fixedDraw': true
  },
  'tree_1_bright_green': {
    'name': "tree_1_bright_green",
    'type': 0xd,
    'width': 0x22d,
    'height': 0x2fc,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['tree_1_bright_green']
      }
    },
    'animation': 'none',
    'zIndex': -0x64
  },
  'tree_2_bright_green': {
    'name': 'tree_2_bright_green',
    'type': 0xd,
    'width': 0x33f,
    'height': 0x2e7,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["tree_2_bright_green"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'tree_3_bright_green': {
    'name': "tree_3_bright_green",
    'type': 0xd,
    'width': 0x346,
    'height': 0x367,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["tree_3_bright_green"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'moon_full': {
    'name': "moon_full",
    'type': 0xd,
    'width': 0x55,
    'height': 0x55,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["moon"]
      }
    },
    'animation': 'none',
    'zIndex': -0x64
  },
  'moon_half': {
    'name': 'moon_half',
    'type': 0xd,
    'width': 0x54,
    'height': 0x54,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["moon_half"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'arena': {
    'name': "arena",
    'type': 0xd,
    'width': 0x486,
    'height': 0x406,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['arena']
      }
    },
    'animation': "none",
    'zIndex': -0xc8
  },
  'pixel_voices': {
    'name': 'pixel_voices',
    'type': 0xd,
    'width': 0xc0,
    'height': 0xae,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["pixel_voices"]
      }
    },
    'animation': "none",
    'zIndex': -0x1f5
  },
  'dino_bones': {
    'name': "dino_bones",
    'type': 0xd,
    'width': 0x45e,
    'height': 0x133,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["dino_bones"]
      }
    },
    'animation': 'none',
    'zIndex': -0x64
  },
  'bones': {
    'name': "bones",
    'type': 0xd,
    'width': 0x1c0,
    'height': 0xa1,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["bones"]
      }
    },
    'animation': 'none',
    'zIndex': -0x64
  },
  'volcano_1': {
    'name': 'volcano_1',
    'type': 0xd,
    'width': 0x48d,
    'height': 0x21a,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['volcano_1']
      }
    },
    'animation': 'none',
    'zIndex': -0x64
  },
  'volcano_2': {
    'name': 'volcano_2',
    'type': 0xd,
    'width': 0x261,
    'height': 0x128,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["volcano_2"]
      }
    },
    'animation': 'none',
    'zIndex': -0x65
  },
  'br_portal': {
    'name': "br_portal",
    'type': 0x8,
    'width': 0x221,
    'height': 0x14f,
    'gravityOn': false,
    'moveable': false,
    'isCollider': true,
    'colliderRectangleOffset': {
      'left': 0.29,
      'right': 0.3,
      'top': 0.33,
      'bottom': 0.05
    },
    'animations': {
      'none': {
        'sprites': ["br_portal_1"]
      },
      'active': {
        'sprites': ["br_portal_2", "br_portal_3", "br_portal_4", "br_portal_5", "br_portal_6", "br_portal_7", "br_portal_8", "br_portal_9"],
        'animationFrameTime': 0x64
      }
    },
    'animation': 'none',
    'zIndex': -0x64
  },
  'lava': {
    'name': "lava",
    'type': 0x2,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0.01,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ['lava', "lava_mirrored"],
        'animationFrameTime': 0x12c
      }
    },
    'animation': 'none',
    'zIndex': 0x64,
    'fixedDraw': true
  },
  'lava_rising': {
    'name': "lava_rising",
    'type': 0x2,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0.01,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ["lava", 'lava_mirrored'],
        'animationFrameTime': 0x12c
      }
    },
    'animation': "none",
    'zIndex': 0x65,
    'fixedDraw': true,
    'needBeSynced': true
  },
  'christmasTree': {
    'name': "christmasTree",
    'type': 0xd,
    'width': 0x190,
    'height': 0x2ed,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["christmasTree"]
      }
    },
    'animation': "none",
    'zIndex': -0x63
  },
  'house_1': {
    'name': "house_1",
    'type': 0xd,
    'width': 0x18e,
    'height': 0x13c,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['house_1']
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'house_2': {
    'name': "house_2",
    'type': 0xd,
    'width': 0x18e,
    'height': 0x185,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["house_2"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'house_3': {
    'name': 'house_3',
    'type': 0xd,
    'width': 0x228,
    'height': 0x188,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["house_3"]
      }
    },
    'animation': "none",
    'zIndex': -0x63
  },
  'house_4': {
    'name': "house_4",
    'type': 0xd,
    'width': 0x191,
    'height': 0x17c,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["house_4"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'house_5': {
    'name': "house_5",
    'type': 0xd,
    'width': 0x191,
    'height': 0x188,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["house_5"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'house_6': {
    'name': "house_6",
    'type': 0xd,
    'width': 0x200,
    'height': 0x22d,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["house_6"]
      }
    },
    'animation': 'none',
    'zIndex': -0x64
  },
  'house_7': {
    'name': 'house_7',
    'type': 0xd,
    'width': 0x200,
    'height': 0x236,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["house_7"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'house_8': {
    'name': "house_8",
    'type': 0xd,
    'width': 0x1a8,
    'height': 0x187,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["house_8"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'house_9': {
    'name': "house_9",
    'type': 0xd,
    'width': 0x1a8,
    'height': 0x184,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['house_9']
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'house_10': {
    'name': 'house_10',
    'type': 0xd,
    'width': 0x1a8,
    'height': 0x277,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["house_10"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'house_11': {
    'name': 'house_11',
    'type': 0xd,
    'width': 0x27d,
    'height': 0x24c,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["house_11"]
      }
    },
    'animation': "none",
    'zIndex': -0x62
  },
  'house_12': {
    'name': 'house_12',
    'type': 0xd,
    'width': 0x1bb,
    'height': 0x1e8,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['house_12']
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'house_13': {
    'name': 'house_13',
    'type': 0xd,
    'width': 0x1d9,
    'height': 0x1e9,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["house_13"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'cloud1': {
    'name': 'cloud1',
    'type': 0x5,
    'width': 0x155,
    'height': 0xd0,
    'gravityOn': false,
    'moveable': false,
    'isCollider': true,
    'colliderRectangleOffset': {
      'left': 0.2,
      'right': 0.15,
      'top': 0.27,
      'bottom': 0.14
    },
    'animations': {
      'none': {
        'sprites': ["cloud1"]
      }
    },
    'animation': "none",
    'zIndex': 0x64
  },
  'cloud2': {
    'name': 'cloud2',
    'type': 0x5,
    'width': 0x155,
    'height': 0xd0,
    'gravityOn': false,
    'moveable': false,
    'isCollider': true,
    'colliderRectangleOffset': {
      'left': 0.15,
      'right': 0.15,
      'top': 0.3,
      'bottom': 0.14
    },
    'animations': {
      'none': {
        'sprites': ['cloud2']
      }
    },
    'animation': "none",
    'zIndex': 0x64
  },
  'cloud3': {
    'name': 'cloud3',
    'type': 0x5,
    'width': 0x155,
    'height': 0xd0,
    'gravityOn': false,
    'moveable': false,
    'isCollider': true,
    'colliderRectangleOffset': {
      'left': 0.16,
      'right': 0.17,
      'top': 0.27,
      'bottom': 0.14
    },
    'animations': {
      'none': {
        'sprites': ["cloud3"]
      }
    },
    'animation': "none",
    'zIndex': 0x64
  },
  'cloud4': {
    'name': 'cloud4',
    'type': 0x5,
    'width': 0x155,
    'height': 0xd0,
    'gravityOn': false,
    'moveable': false,
    'isCollider': true,
    'colliderRectangleOffset': {
      'left': 0.13,
      'right': 0.14,
      'top': 0.27,
      'bottom': 0.14
    },
    'animations': {
      'none': {
        'sprites': ["cloud4"]
      }
    },
    'animation': "none",
    'zIndex': 0x64
  },
  'bush_1_bright_green': {
    'name': "bush_1_bright_green",
    'type': 0x5,
    'width': 0xfa,
    'height': 0x9e,
    'gravityOn': false,
    'moveable': false,
    'isCollider': true,
    'colliderRectangleOffset': {
      'left': 0.13,
      'right': 0.2,
      'top': 0.27,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ["bush_1_bright_green"]
      }
    },
    'animation': "none",
    'zIndex': 0x64
  },
  'igloo': {
    'name': 'igloo',
    'type': 0x5,
    'width': 0x10e,
    'height': 0xbd,
    'gravityOn': false,
    'moveable': false,
    'isCollider': true,
    'colliderRectangleOffset': {
      'left': 0.2,
      'right': 0.2,
      'top': 0.27,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ['igloo']
      }
    },
    'animation': "none",
    'zIndex': -0x64,
    'staticCanvas': true
  },
  'strawberry_bush': {
    'name': "strawberry_bush",
    'type': 0x2,
    'width': 0x63,
    'height': 0x28,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["strawberry_bush"]
      }
    },
    'animation': 'none',
    'zIndex': 0x64
  },
  'background_pyramid': {
    'name': 'background_pyramid',
    'type': 0xd,
    'width': 0x80,
    'height': 0x80,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_pyramid"]
      }
    },
    'animation': "none",
    'zIndex': -0x3e8
  },
  'castle_bg': {
    'name': "castle_bg",
    'type': 0xd,
    'width': 0x400,
    'height': 0x300,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["castle_bg"]
      }
    },
    'animation': 'none',
    'zIndex': -0xbb8
  },
  'arena_bg': {
    'name': "arena_bg",
    'type': 0xd,
    'width': 0x280,
    'height': 0x180,
    'gravityOn': false,
    'moveable': false,
    'isCollider': true,
    'animations': {
      'none': {
        'sprites': ["arena_bg"]
      }
    },
    'animation': "none",
    'zIndex': -0xbb8,
    'arenaZone': true
  },
  'arena_bg_safe': {
    'name': "arena_bg_safe",
    'type': 0xd,
    'width': 0x280,
    'height': 0x180,
    'gravityOn': false,
    'moveable': false,
    'isCollider': true,
    'animations': {
      'none': {
        'sprites': ["arena_bg"]
      }
    },
    'animation': "none",
    'zIndex': -0xbb8,
    'safeZone': true
  },
  'battle_royale_bg': {
    'name': "battle_royale_bg",
    'type': 0xd,
    'width': 0x280,
    'height': 0x180,
    'gravityOn': false,
    'moveable': false,
    'isCollider': true,
    'animations': {
      'none': {
        'sprites': ["arena_bg"]
      }
    },
    'animation': 'none',
    'zIndex': -0xbb8,
    'battleRoyaleZone': true
  },
  'battle_royale_waiting_room_bg': {
    'name': "battle_royale_waiting_room_bg",
    'type': 0xd,
    'width': 0x280,
    'height': 0x180,
    'gravityOn': false,
    'moveable': false,
    'isCollider': true,
    'animations': {
      'none': {
        'sprites': ['arena_bg']
      }
    },
    'animation': 'none',
    'zIndex': -0xbb8,
    'safeZone': true,
    'battleRoyaleZone': true
  },
  'ship_bg': {
    'name': "ship_bg",
    'type': 0xd,
    'width': 0x780,
    'height': 0x400,
    'gravityOn': false,
    'moveable': false,
    'isCollider': true,
    'animations': {
      'none': {
        'sprites': ["ship_bg"]
      }
    },
    'animation': 'none',
    'zIndex': -0xbb8,
    'safeZone': true
  },
  'iced_cave_bg': {
    'name': "iced_cave_bg",
    'type': 0xd,
    'width': 0x400,
    'height': 0x300,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["iced_cave_bg"]
      }
    },
    'animation': "none",
    'zIndex': -0xbb8
  },
  'factory_bg': {
    'name': "factory_bg",
    'type': 0xd,
    'width': 0x2c0,
    'height': 0x200,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["factory_bg"]
      }
    },
    'animation': "none",
    'zIndex': -0x7d1
  },
  'background_ice': {
    'name': 'background_ice',
    'type': 0xd,
    'width': 0x100,
    'height': 0x100,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['background_ice']
      }
    },
    'animation': "none",
    'zIndex': -0x3e8
  },
  'background_lightblue': {
    'name': 'background_lightblue',
    'type': 0xd,
    'width': 0x280,
    'height': 0x400,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['background_lightblue']
      }
    },
    'animation': "none",
    'zIndex': -0x834
  },
  'background_normal_1': {
    'name': "background_normal_1",
    'type': 0xd,
    'width': 0x280,
    'height': 0x16d,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_normal_1"]
      }
    },
    'animation': 'none',
    'zIndex': -0x7d0
  },
  'background_normal_2': {
    'name': "background_normal_2",
    'type': 0xd,
    'width': 0x280,
    'height': 0x16d,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['background_normal_2']
      }
    },
    'animation': "none",
    'zIndex': -0x7d0
  },
  'background_normal_3': {
    'name': "background_normal_3",
    'type': 0xd,
    'width': 0x280,
    'height': 0x16d,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_normal_3"]
      }
    },
    'animation': "none",
    'zIndex': -0x7d0
  },
  'background_normal_bottom': {
    'name': "background_normal_bottom",
    'type': 0xd,
    'width': 0x100,
    'height': 0x100,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['background_normal_bottom']
      }
    },
    'animation': "none",
    'zIndex': -0x7d0
  },
  'background_snow_1': {
    'name': "background_snow_1",
    'type': 0xd,
    'width': 0x280,
    'height': 0x16d,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['background_snow_1']
      }
    },
    'animation': "none",
    'zIndex': -0x7d0
  },
  'background_snow_2': {
    'name': 'background_snow_2',
    'type': 0xd,
    'width': 0x280,
    'height': 0x16d,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_snow_2"]
      }
    },
    'animation': "none",
    'zIndex': -0x7d0
  },
  'background_snow_3': {
    'name': "background_snow_3",
    'type': 0xd,
    'width': 0x280,
    'height': 0x16d,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_snow_3"]
      }
    },
    'animation': "none",
    'zIndex': -0x7d0
  },
  'background_snow_bottom': {
    'name': "background_snow_bottom",
    'type': 0xd,
    'width': 0x100,
    'height': 0x100,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_snow_bottom"]
      }
    },
    'animation': "none",
    'zIndex': -0x7d0
  },
  'background_jungle_1': {
    'name': "background_jungle_1",
    'type': 0xd,
    'width': 0x280,
    'height': 0x400,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_jungle_1"]
      }
    },
    'animation': 'none',
    'zIndex': -0x7d5
  },
  'background_jungle_2': {
    'name': 'background_jungle_2',
    'type': 0xd,
    'width': 0x280,
    'height': 0x400,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['background_jungle_2']
      }
    },
    'animation': 'none',
    'zIndex': -0x7d5
  },
  'background_jungle_3': {
    'name': "background_jungle_3",
    'type': 0xd,
    'width': 0x280,
    'height': 0x400,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_jungle_3"]
      }
    },
    'animation': "none",
    'zIndex': -0x7d5
  },
  'background_volcano_1': {
    'name': 'background_volcano_1',
    'type': 0xd,
    'width': 0x280,
    'height': 0x1c4,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_volcano_1"]
      }
    },
    'animation': "none",
    'zIndex': -0x7d5
  },
  'background_volcano_2': {
    'name': "background_volcano_2",
    'type': 0xd,
    'width': 0x280,
    'height': 0x1c4,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['background_volcano_2']
      }
    },
    'animation': "none",
    'zIndex': -0x7d5
  },
  'background_volcano_3': {
    'name': 'background_volcano_3',
    'type': 0xd,
    'width': 0x280,
    'height': 0x1c4,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_volcano_3"]
      }
    },
    'animation': 'none',
    'zIndex': -0x7d5
  },
  'background_graveyard_1': {
    'name': "background_graveyard_1",
    'type': 0xd,
    'width': 0x280,
    'height': 0x400,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_graveyard_1"]
      }
    },
    'animation': "none",
    'zIndex': -0x7cf
  },
  'background_graveyard_2': {
    'name': "background_graveyard_2",
    'type': 0xd,
    'width': 0x280,
    'height': 0x400,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['background_graveyard_2']
      }
    },
    'animation': "none",
    'zIndex': -0x7cf
  },
  'background_graveyard_3': {
    'name': "background_graveyard_3",
    'type': 0xd,
    'width': 0x280,
    'height': 0x400,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_graveyard_3"]
      }
    },
    'animation': "none",
    'zIndex': -0x7cf
  },
  'background_graveyard_bottom': {
    'name': "background_graveyard_bottom",
    'type': 0xd,
    'width': 0x100,
    'height': 0x100,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_graveyard_bottom"]
      }
    },
    'animation': "none",
    'zIndex': -0x7cf
  },
  'background_sea_1': {
    'name': "background_sea_1",
    'type': 0xd,
    'width': 0x280,
    'height': 0x116,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_sea_1"]
      }
    },
    'animation': "none",
    'zIndex': -0x7d5
  },
  'background_sea_2': {
    'name': 'background_sea_2',
    'type': 0xd,
    'width': 0x280,
    'height': 0x116,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_sea_2"]
      }
    },
    'animation': 'none',
    'zIndex': -0x7d5
  },
  'background_sea_3': {
    'name': "background_sea_3",
    'type': 0xd,
    'width': 0x280,
    'height': 0x116,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['background_sea_3']
      }
    },
    'animation': "none",
    'zIndex': -0x7d5
  },
  'background_sea_bottom': {
    'name': "background_sea_bottom",
    'type': 0xd,
    'width': 0x100,
    'height': 0x100,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_sea_bottom"]
      }
    },
    'animation': "none",
    'zIndex': -0x7d5
  },
  'background_desert_1': {
    'name': 'background_desert_1',
    'type': 0xd,
    'width': 0x280,
    'height': 0x230,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['background_desert_1']
      }
    },
    'animation': "none",
    'zIndex': -0x7cf
  },
  'background_desert_2': {
    'name': "background_desert_2",
    'type': 0xd,
    'width': 0x280,
    'height': 0x230,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['background_desert_2']
      }
    },
    'animation': "none",
    'zIndex': -0x7cf
  },
  'background_desert_3': {
    'name': "background_desert_3",
    'type': 0xd,
    'width': 0x280,
    'height': 0x230,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_desert_3"]
      }
    },
    'animation': "none",
    'zIndex': -0x7cf
  },
  'background_desert_bottom': {
    'name': "background_desert_bottom",
    'type': 0xd,
    'width': 0x100,
    'height': 0x100,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_desert_bottom"]
      }
    },
    'animation': "none",
    'zIndex': -0x7cf
  },
  'snow_animation': {
    'name': 'snow_animation',
    'type': 0xd,
    'width': 0x280,
    'height': 0x400,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['snow_animation_1', "snow_animation_2", 'snow_animation_3', "snow_animation_4", "snow_animation_5", 'snow_animation_6', "snow_animation_7", 'snow_animation_8', "snow_animation_9", "snow_animation_10", "snow_animation_11", "snow_animation_12", "snow_animation_13", "snow_animation_14", "snow_animation_15", "snow_animation_16", "snow_animation_17", 'snow_animation_18', 'snow_animation_19', 'snow_animation_20', "snow_animation_21", "snow_animation_22", "snow_animation_23", 'snow_animation_24', "snow_animation_25"],
        'animationFrameTime': 0x32
      }
    },
    'animation': "none",
    'opacity': 0.5,
    'zIndex': 0x0
  },
  'background_lightblue_to_purple': {
    'name': 'background_lightblue_to_purple',
    'type': 0xd,
    'width': 0x280,
    'height': 0x400,
    'gravityOn': false,
    'moveable': false,
    'isCollider': true,
    'animations': {
      'none': {
        'sprites': ["background_lightblue_to_purple"]
      }
    },
    'animation': "none",
    'zIndex': -0x7cf
  },
  'background_space_1': {
    'name': "background_space_1",
    'type': 0xd,
    'width': 0x280,
    'height': 0x400,
    'gravityOn': false,
    'moveable': false,
    'isCollider': true,
    'animations': {
      'none': {
        'sprites': ['background_space_1']
      }
    },
    'animation': "none",
    'zIndex': -0x7d0
  },
  'background_space_2': {
    'name': "background_space_2",
    'type': 0xd,
    'width': 0x280,
    'height': 0x400,
    'gravityOn': false,
    'moveable': false,
    'isCollider': true,
    'animations': {
      'none': {
        'sprites': ["background_space_2"]
      }
    },
    'animation': 'none',
    'zIndex': -0x7d0
  },
  'background_space_3': {
    'name': 'background_space_3',
    'type': 0xd,
    'width': 0x280,
    'height': 0x400,
    'gravityOn': false,
    'moveable': false,
    'isCollider': true,
    'animations': {
      'none': {
        'sprites': ["background_space_3"]
      }
    },
    'animation': "none",
    'zIndex': -0x7d0
  },
  'background_space_4': {
    'name': "background_space_4",
    'type': 0xd,
    'width': 0x280,
    'height': 0x400,
    'gravityOn': false,
    'moveable': false,
    'isCollider': true,
    'animations': {
      'none': {
        'sprites': ["background_space_4"]
      }
    },
    'animation': 'none',
    'zIndex': -0x7d0
  },
  'background_brown': {
    'name': "background_brown",
    'type': 0xd,
    'width': 0x280,
    'height': 0x200,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_brown"]
      }
    },
    'animation': "none",
    'zIndex': -0x7d2
  },
  'background_grey': {
    'name': "background_grey",
    'type': 0xd,
    'width': 0x80,
    'height': 0x80,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_grey"]
      }
    },
    'animation': 'none',
    'zIndex': -0x7cf
  },
  'background_graveyard_top_left': {
    'name': 'background_graveyard_top_left',
    'type': 0xd,
    'width': 0x280,
    'height': 0x400,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['background_graveyard_top_left']
      }
    },
    'animation': "none",
    'zIndex': -0x7cf,
    'hasTransparency': true
  },
  'background_graveyard_left': {
    'name': "background_graveyard_left",
    'type': 0xd,
    'width': 0x280,
    'height': 0x400,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_graveyard_left"]
      }
    },
    'animation': 'none',
    'zIndex': -0x7cf,
    'hasTransparency': true
  },
  'background_graveyard_right': {
    'name': "background_graveyard_right",
    'type': 0xd,
    'width': 0x280,
    'height': 0x400,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_graveyard_right"]
      }
    },
    'animation': "none",
    'zIndex': -0x7cf,
    'hasTransparency': true
  },
  'background_graveyard_top': {
    'name': "background_graveyard_top",
    'type': 0xd,
    'width': 0x280,
    'height': 0x400,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_graveyard_top"]
      }
    },
    'animation': "none",
    'zIndex': -0x7cf
  },
  'background_graveyard_top_right': {
    'name': "background_graveyard_top_right",
    'type': 0xd,
    'width': 0x280,
    'height': 0x400,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["background_graveyard_top_right"]
      }
    },
    'animation': "none",
    'zIndex': -0x7cf,
    'hasTransparency': true
  },
  'blackHole': {
    'name': "blackHole",
    'type': 0x8,
    'width': 0xdc,
    'height': 0xdc,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      'none': {
        'sprites': ["blackHole_1", "blackHole_2", "blackHole_3", "blackHole_4", "blackHole_5", 'blackHole_6', "blackHole_7", "blackHole_8", "blackHole_9", "blackHole_10", "blackHole_11", "blackHole_12", "blackHole_13", "blackHole_14", 'blackHole_15', "blackHole_16", "blackHole_17", "blackHole_18", "blackHole_19", "blackHole_20", "blackHole_21", 'blackHole_22', "blackHole_23", "blackHole_24", "blackHole_25", "blackHole_26", "blackHole_27", "blackHole_28", "blackHole_29", "blackHole_30"],
        'animationFrameTime': 0x3c
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'arena_window': {
    'name': "arena_window",
    'type': 0xd,
    'width': 0xee,
    'height': 0x2a8,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['arena_window']
      }
    },
    'animation': "none",
    'zIndex': -0x64,
    'staticCanvas': false
  },
  'arena_statue_1': {
    'name': 'arena_statue_1',
    'type': 0xd,
    'width': 0x41,
    'height': 0xaf,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["arena_statue_1"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'king_throne': {
    'name': "king_throne",
    'type': 0xd,
    'width': 0x6a,
    'height': 0xc0,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["king_throne"]
      }
    },
    'animation': 'none',
    'zIndex': -0x64
  },
  'bear_trap': {
    'name': "bear_trap",
    'type': 0x9,
    'width': 0x99,
    'height': 0x64,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.43,
      'right': 0.43,
      'top': 0.65,
      'bottom': 0.05
    },
    'animations': {
      'open': {
        'sprites': ["bear_trap_1"]
      },
      'closed': {
        'sprites': ["bear_trap_5"]
      },
      'opening': {
        'sprites': ["bear_trap_5", 'bear_trap_4', 'bear_trap_3', "bear_trap_2", "bear_trap_1"],
        'animationFrameTime': 0x28
      },
      'closing': {
        'sprites': ["bear_trap_1", 'bear_trap_2', "bear_trap_3", 'bear_trap_4', 'bear_trap_5'],
        'animationFrameTime': 0x28
      }
    },
    'animation': "open",
    'staticCanvas': false,
    'needBeSynced': true,
    'canEnterArena': true,
    'zIndex': 0x6
  },
  'wall_spikes': {
    'name': 'wall_spikes',
    'type': 0x9,
    'width': 0x80,
    'height': 0x80,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.17,
      'right': 0.17,
      'top': 0.17,
      'bottom': 0.17
    },
    'animations': {
      'open': {
        'sprites': ["wall_spikes_1"]
      },
      'closed': {
        'sprites': ["wall_spikes_2"]
      }
    },
    'animation': "closed",
    'staticCanvas': false,
    'needBeSynced': true,
    'canEnterArena': true,
    'zIndex': -0x1f4
  },
  'arena_weapons': {
    'name': 'arena_weapons',
    'type': 0xd,
    'width': 0xc9,
    'height': 0xb4,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['arena_weapons']
      }
    },
    'animation': "none",
    'zIndex': -0x64,
    'staticCanvas': false
  },
  'pillar_top': {
    'name': "pillar_top",
    'type': 0xd,
    'width': 0xc0,
    'height': 0x100,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['pillar_top']
      }
    },
    'animation': 'none',
    'zIndex': -0x64
  },
  'pillar_center': {
    'name': "pillar_center",
    'type': 0xd,
    'width': 0xc0,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['pillar_center']
      }
    },
    'animation': 'none',
    'zIndex': -0x64
  },
  'pillar_bottom': {
    'name': 'pillar_bottom',
    'type': 0xd,
    'width': 0xc0,
    'height': 0x100,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['pillar_bottom']
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'arena_flag': {
    'name': 'arena_flag',
    'type': 0xd,
    'width': 0x47,
    'height': 0x6e,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["arena_flag"]
      }
    },
    'animation': 'none',
    'zIndex': -0x63
  },
  'arena_doors_1': {
    'name': 'arena_doors_1',
    'type': 0x8,
    'width': 0x9e,
    'height': 0xd2,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      'none': {
        'sprites': ["arena_doors_1"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'arena_doors_2': {
    'name': "arena_doors_2",
    'type': 0x8,
    'width': 0x9e,
    'height': 0xd2,
    'gravityOn': false,
    'moveable': false,
    'animations': {
      'none': {
        'sprites': ['arena_doors_2']
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'taxi': {
    'name': 'taxi',
    'type': 0x8,
    'width': 0x390,
    'height': 0x41a,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.3,
      'right': 0.3,
      'top': 0.4,
      'bottom': 0.3
    },
    'animations': {
      'none': {
        'sprites': ["taxi"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'wooden_doors': {
    'name': "wooden_doors",
    'type': 0x8,
    'width': 0x100,
    'height': 0xde,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.32,
      'right': 0.33,
      'top': 0.24,
      'bottom': 0.15
    },
    'animations': {
      'none': {
        'sprites': ["wooden_doors"]
      },
      'ice': {
        'sprites': ["wooden_doors_ice"]
      },
      'graveyard': {
        'sprites': ["wooden_doors_graveyard"]
      },
      'city': {
        'sprites': ["wooden_doors_city"]
      },
      'desert': {
        'sprites': ["wooden_doors_desert"]
      },
      'jungle': {
        'sprites': ['wooden_doors_jungle']
      },
      'lava': {
        'sprites': ['wooden_doors_lava']
      }
    },
    'animation': "none",
    'zIndex': -0x64,
    'staticCanvas': true
  },
  'bubble': {
    'name': "bubble",
    'type': 0x2,
    'width': 0x42,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ["bubble_1", 'bubble_2', "bubble_3", "bubble_4", "bubble_5", "bubble_6", "bubble_6", "bubble_7", 'bubble_8', "bubble_9", "bubble_10", "bubble_11", 'bubble_12', "bubble_13", "none", "none", "none", "none", 'none', "none", 'none', "none", "none", "none", 'none', "none", "none", 'none', "none", "none", "none", "none", "none", "none", 'none', "none", 'none', 'none', "none"],
        'animationFrameTime': 0x50
      }
    },
    'animation': 'none',
    'zIndex': 0x65
  },
  'lava_bubble': {
    'name': "lava_bubble",
    'colliderRectangleOffset': {
      'left': 0.15,
      'right': 0.35,
      'top': 0.1,
      'bottom': 0x0
    },
    'type': 0x2,
    'width': 0x42,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'isCollider': false,
    'animations': {
      'none': {
        'sprites': ['lava_bubble_1', "lava_bubble_2", "lava_bubble_3", "lava_bubble_4", 'lava_bubble_5', "lava_bubble_6", "lava_bubble_6", 'lava_bubble_7', 'lava_bubble_8', "lava_bubble_9", "lava_bubble_10", 'lava_bubble_11', 'lava_bubble_12', "lava_bubble_13", "none", "none", "none", "none", 'none', "none", 'none', "none", "none", "none", "none", 'none', 'none', "none", 'none', "none", "none", "none", "none", "none", 'none', "none", "none", "none", "none"],
        'animationFrameTime': 0x64
      }
    },
    'animation': 'none',
    'zIndex': 0x65
  },
  'player_spawn': {
    'name': "player_spawn",
    'type': 0x6,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false
  },
  'arctic_spawn': {
    'name': "arctic_spawn",
    'type': 0x6,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false
  },
  'hell_spawn': {
    'name': 'hell_spawn',
    'type': 0x6,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false
  },
  'cemetery_spawn': {
    'name': "cemetery_spawn",
    'type': 0x6,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false
  },
  'jungle_spawn': {
    'name': "jungle_spawn",
    'type': 0x6,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false
  },
  'battle_royale_spawn': {
    'name': "battle_royale_spawn",
    'type': 0x6,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false
  },
  'gem_spawn': {
    'name': "gem_spawn",
    'type': 0x9,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false
  },
  'halloweenGhost_spawn': {
    'name': "halloweenGhost_spawn",
    'type': 0x9,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false
  },
  'halloweenPumpkin_spawn': {
    'name': "halloweenPumpkin_spawn",
    'type': 0x9,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false
  },
  'gem': {
    'name': "gem",
    'type': 0x9,
    'width': 0x35,
    'height': 0x2b,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.1,
      'right': 0.1,
      'top': 0.1,
      'bottom': 0.1
    },
    'animations': {
      'none': {
        'sprites': ['gem_1', "gem_2"],
        'animationFrameTime': 0x96
      }
    },
    'animation': "none"
  },
  'waterDrop': {
    'name': "waterDrop",
    'type': 0x9,
    'width': 0x1c,
    'height': 0x2a,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0x0,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ["waterDrop"]
      }
    },
    'animation': "none",
    'staticCanvas': true
  },
  'potion_armor_spawn': {
    'name': "potion_armor_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': 'potion_armor',
    'delay': 0x1388
  },
  'arena_tile_top_breakable_spawn': {
    'name': 'arena_tile_top_breakable_spawn',
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "arena_tile_top_breakable",
    'delay': 900000
  },
  'arena_tile_fill_breakable_spawn': {
    'name': 'arena_tile_fill_breakable_spawn',
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "arena_tile_fill_breakable",
    'delay': 900000
  },
  'potion_armor': {
    'name': 'potion_armor',
    'type': 0x9,
    'width': 0x50,
    'height': 0x50,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.2,
      'right': 0.2,
      'top': 0.05,
      'bottom': 0.05
    },
    'animations': {
      'none': {
        'sprites': ["potion_armor"]
      }
    },
    'animation': "none",
    'staticCanvas': false
  },
  'roots': {
    'name': "roots",
    'type': 0x9,
    'width': 0x80,
    'height': 0xc0,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.28,
      'right': 0.17,
      'top': 0.04,
      'bottom': 0.13
    },
    'animations': {
      'none': {
        'sprites': ["roots"]
      }
    },
    'animation': "none",
    'staticCanvas': true,
    'zIndex': 0x6
  },
  'giftBox': {
    'name': "giftBox",
    'type': 0x9,
    'width': 0xbe,
    'height': 0x64,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.02,
      'right': 0.02,
      'top': 0.2,
      'bottom': 0.02
    },
    'animations': {
      'none': {
        'sprites': ["giftBox"]
      }
    },
    'animation': "none",
    'zIndex': -0xa,
    'staticCanvas': true
  },
  'pig_spawn': {
    'name': "pig_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "pig",
    'delay': 0x3a98
  },
  'penguin_spawn': {
    'name': "penguin_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': 'penguin',
    'delay': 0xea60
  },
  'yeti_spawn': {
    'name': "yeti_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "yeti",
    'delay': 0x2bf20
  },
  'frog_spawn': {
    'name': "frog_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': 'frog',
    'delay': 0xafc8
  },
  'crab_spawn': {
    'name': "crab_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': 'crab',
    'delay': 0x4e20
  },
  'starfish_spawn': {
    'name': "starfish_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "starfish",
    'delay': 0x186a0
  },
  'blackWidow_spawn': {
    'name': "blackWidow_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': 'blackWidow',
    'delay': 0x2bf20
  },
  'snake_spawn': {
    'name': "snake_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "snake",
    'delay': 0x7530
  },
  'crocodile_spawn': {
    'name': "crocodile_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "crocodile",
    'delay': 0x7530
  },
  'mummy_spawn': {
    'name': "mummy_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "mummy",
    'delay': 0x2bf20
  },
  'tyrannosaurus_spawn': {
    'name': "tyrannosaurus_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "tyrannosaurus",
    'delay': 0xea60
  },
  'mammoth_spawn': {
    'name': "mammoth_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "mammoth",
    'delay': 0xea60
  },
  'turtle_spawn': {
    'name': "turtle_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "turtle",
    'delay': 0x7530
  },
  'zombie_spawn': {
    'name': "zombie_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "zombie",
    'delay': 0x2710
  },
  'alienBigInsect_spawn': {
    'name': "alienBigInsect_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "alienBigInsect",
    'delay': 0x2bf20
  },
  'alienEye_spawn': {
    'name': "alienEye_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': 'alienEye',
    'delay': 0x13880
  },
  'mouse_spawn': {
    'name': "mouse_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': 'mouse',
    'delay': 0x3a98
  },
  'evilRat_spawn': {
    'name': "evilRat_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': 'evilRat',
    'delay': 0xafc8
  },
  'giantRat_spawn': {
    'name': "giantRat_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': 'giantRat',
    'delay': 0x2bf20
  },
  'smallDemon_spawn': {
    'name': "smallDemon_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "smallDemon",
    'delay': 0x7530
  },
  'lemming_spawn': {
    'name': "lemming_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "lemming",
    'delay': 0x3a98
  },
  'worm_spawn': {
    'name': "worm_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "worm",
    'delay': 0x3a98
  },
  'cherry_spawn': {
    'name': "cherry_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': 'cherry',
    'delay': 0x2710
  },
  'currant_spawn': {
    'name': 'currant_spawn',
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "currant",
    'delay': 0x2710
  },
  'strawberry_spawn': {
    'name': "strawberry_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "strawberry",
    'delay': 0x3a98
  },
  'stone_spawn': {
    'name': "stone_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': 'stone',
    'delay': 0xea60
  },
  'starFruit_spawn': {
    'name': "starFruit_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "starFruit",
    'delay': 0x3a98
  },
  'meat_spawn': {
    'name': "meat_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': 'meat',
    'delay': 0x61a8
  },
  'pumpkin_spawn': {
    'name': "pumpkin_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "pumpkin",
    'delay': 0x4e20
  },
  'alienFruit1_spawn': {
    'name': 'alienFruit1_spawn',
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "alienFruit1",
    'delay': 0x2bf20
  },
  'alienFruit2_spawn': {
    'name': "alienFruit2_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': 'alienFruit2',
    'delay': 0x2bf20
  },
  'alienFruit3_spawn': {
    'name': "alienFruit3_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "alienFruit3",
    'delay': 0x2bf20
  },
  'seed_spawn': {
    'name': "seed_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "seed",
    'delay': 0x4e20
  },
  'bread_spawn': {
    'name': "bread_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': 'bread',
    'delay': 0x4e20
  },
  'beehive_spawn': {
    'name': 'beehive_spawn',
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': 'beehive',
    'delay': 0x1d4c0
  },
  'eggRed_spawn': {
    'name': "eggRed_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "eggRed",
    'delay': 0x7530
  },
  'cosmicEgg_spawn': {
    'name': "cosmicEgg_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "cosmicEgg",
    'delay': 0x14c08
  },
  'ladybug_spawn': {
    'name': "ladybug_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': 'ladybug',
    'delay': 0x4e20
  },
  'woodpecker_spawn': {
    'name': "woodpecker_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "woodpecker",
    'delay': 0x15f90
  },
  'fishPink_spawn': {
    'name': "fishPink_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "fishPink",
    'delay': 0x4e20
  },
  'evilBat_spawn': {
    'name': "evilBat_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "evilBat",
    'delay': 0x4e20
  },
  'shark_spawn': {
    'name': "shark_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "shark",
    'delay': 0xafc8
  },
  'piranha_spawn': {
    'name': "piranha_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': 'piranha',
    'delay': 0xafc8
  },
  'deadFish_spawn': {
    'name': "deadFish_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "deadFish",
    'delay': 0x4e20
  },
  'cat_spawn': {
    'name': "cat_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': 'cat',
    'delay': 0x4e20
  },
  'poo': {
    'name': "poo",
    'type': 0x3,
    'width': 0x20,
    'height': 0x20,
    'colliderRectangleOffset': {
      'left': 0.1,
      'right': 0.1,
      'top': 0.1,
      'bottom': 0.1
    },
    'animations': {
      'none': {
        'sprites': ["poo1", 'poo2'],
        'animationFrameTime': 0x320
      }
    },
    'animation': "none"
  },
  'bomb_spawn': {
    'name': 'bomb_spawn',
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': 'bomb',
    'delay': 0x1388
  },
  'bomb': {
    'name': "bomb",
    'type': 0x9,
    'width': 0xac,
    'height': 0xa3,
    'colliderRectangleOffset': {
      'left': 0.25,
      'right': 0.25,
      'top': 0.23,
      'bottom': 0.22
    },
    'animations': {
      'none': {
        'sprites': ['bomb_1']
      },
      '1': {
        'sprites': ["bomb_2", "bomb_3"],
        'animationFrameTime': 0x4b
      },
      '2': {
        'sprites': ["bomb_4", 'bomb_5'],
        'animationFrameTime': 0x4b
      },
      '3': {
        'sprites': ['bomb_6', "bomb_7"],
        'animationFrameTime': 0x4b
      },
      '4': {
        'sprites': ['bomb_8', "bomb_9"],
        'animationFrameTime': 0x4b
      },
      '5': {
        'sprites': ["bomb_10", "bomb_11"],
        'animationFrameTime': 0x4b
      }
    },
    'animation': "none",
    'canEnterArena': true,
    'floatingInWater': true
  },
  'shuriken': {
    'name': "shuriken",
    'type': 0x9,
    'width': 0x1e,
    'height': 0x1e,
    'colliderRectangleOffset': {
      'left': 0.1,
      'right': 0.1,
      'top': 0.1,
      'bottom': 0.1
    },
    'animations': {
      'none': {
        'sprites': ["shuriken"]
      }
    },
    'animation': "none",
    'canEnterArena': true
  },
  'crate_spawn': {
    'name': "crate_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': 'crate',
    'delay': 600000
  },
  'crate': {
    'name': "crate",
    'type': 0x9,
    'width': 0x80,
    'height': 0x80,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.05,
      'right': 0.05,
      'top': 0.05,
      'bottom': 0.05
    },
    'animations': {
      'none': {
        'sprites': ["crate_1"]
      },
      'damaged': {
        'sprites': ['crate_2']
      }
    },
    'animation': "none",
    'canEnterArena': true,
    'hp': 0x64,
    'breakableByExplosion': true
  },
  'crate_explosion': {
    'name': "crate_explosion",
    'type': 0x7,
    'width': 0xc0,
    'height': 0xc0,
    'gravityOn': false,
    'isCollider': false,
    'animations': {
      'standard': {
        'sprites': ['crate_3', "crate_4", "crate_5", "crate_6"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "standard"
  },
  'volleyball': {
    'name': "volleyball",
    'type': 0x9,
    'width': 0x5d,
    'height': 0x5d,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0x0,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ["volleyball"]
      }
    },
    'animation': "none",
    'floatingInWater': true
  },
  'volleyPost': {
    'name': 'volleyPost',
    'type': 0x2,
    'width': 0x23,
    'height': 0xc0,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.25,
      'right': 0.25,
      'top': 0.02,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ["volleyPost"]
      }
    },
    'animation': 'none',
    'antiStuck': true
  },
  'cherry': {
    'name': "cherry",
    'type': 0x3,
    'width': 0x2c,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.05,
      'right': 0.05,
      'top': 0.55,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ["cherry"]
      }
    },
    'animation': "none",
    'isFruit': true
  },
  'currant': {
    'name': "currant",
    'type': 0x3,
    'width': 0xc,
    'height': 0xd,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.05,
      'right': 0.05,
      'top': 0.05,
      'bottom': 0.05
    },
    'animations': {
      'none': {
        'sprites': ["currant"]
      }
    },
    'animation': "none",
    'zIndex': 0x65,
    'isFruit': true
  },
  'strawberry': {
    'name': "strawberry",
    'type': 0x3,
    'width': 0x17,
    'height': 0x18,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.05,
      'right': 0.05,
      'top': 0.05,
      'bottom': 0.05
    },
    'animations': {
      'none': {
        'sprites': ['strawberry']
      }
    },
    'animation': "none",
    'isFruit': true
  },
  'starFruit': {
    'name': 'starFruit',
    'type': 0x3,
    'width': 0x31,
    'height': 0x47,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.1,
      'right': 0.1,
      'top': 0.1,
      'bottom': 0.1
    },
    'animations': {
      'none': {
        'sprites': ["starFruit"]
      }
    },
    'animation': "none",
    'isFruit': true
  },
  'starfish': {
    'name': 'starfish',
    'type': 0x3,
    'width': 0x3a,
    'height': 0x3a,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.2,
      'right': 0.2,
      'top': 0.2,
      'bottom': 0.2
    },
    'animations': {
      'none': {
        'sprites': ["starfish1", "starfish1", "starfish1", "starfish1", "starfish1", "starfish1", "starfish1", "starfish1", "starfish2", 'starfish3', 'starfish3', "starfish3", "starfish3", 'starfish3', "starfish3", "starfish3", 'starfish3', 'starfish3', 'starfish3', 'starfish3', "starfish3", 'starfish3', "starfish3", "starfish3", 'starfish3', "starfish3", 'starfish3', "starfish3", "starfish3", 'starfish3', "starfish3", "starfish3", "starfish3", "starfish3", "starfish3", "starfish3", "starfish3", "starfish3", 'starfish3', 'starfish3', "starfish3", "starfish3", "starfish3", 'starfish3', "starfish3", "starfish3", 'starfish3', "starfish3", "starfish3", "starfish3", "starfish3", "starfish3", 'starfish3', "starfish3", "starfish3", 'starfish3', 'starfish3', "starfish2"],
        'animationFrameTime': 0x64
      }
    },
    'animation': 'none',
    'hasSoul': true
  },
  'meat': {
    'name': "meat",
    'type': 0x3,
    'width': 0x5a,
    'height': 0x49,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.05,
      'right': 0.05,
      'top': 0.05,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ['meat']
      }
    },
    'animation': "none",
    'antiStuck': true
  },
  'pumpkin': {
    'name': "pumpkin",
    'type': 0x3,
    'width': 0x60,
    'height': 0x5e,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.05,
      'right': 0.05,
      'top': 0.22,
      'bottom': 0.05
    },
    'animations': {
      'none': {
        'sprites': ["pumpkin"]
      }
    },
    'animation': 'none',
    'antiStuck': true
  },
  'alienFruit1': {
    'name': "alienFruit1",
    'type': 0x3,
    'width': 0xea,
    'height': 0x114,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.45,
      'right': 0.05,
      'top': 0.2,
      'bottom': 0.05
    },
    'animations': {
      'none': {
        'sprites': ['alienFruit1']
      }
    },
    'animation': "none"
  },
  'alienFruit2': {
    'name': "alienFruit2",
    'type': 0x3,
    'width': 0x79,
    'height': 0x108,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.05,
      'right': 0.05,
      'top': 0.3,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ["alienFruit2"]
      }
    },
    'animation': "none"
  },
  'alienFruit3': {
    'name': 'alienFruit3',
    'type': 0x3,
    'width': 0x53,
    'height': 0x126,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.05,
      'right': 0.05,
      'top': 0.2,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ["alienFruit3"]
      }
    },
    'animation': "none"
  },
  'seed': {
    'name': 'seed',
    'type': 0x3,
    'width': 0x14,
    'height': 0x13,
    'gravityOn': true,
    'moveable': true,
    'colliderRectangleOffset': {
      'left': 0.05,
      'right': 0.15,
      'top': 0.15,
      'bottom': 0.15
    },
    'animations': {
      'none': {
        'sprites': ["seed"]
      }
    },
    'animation': "none"
  },
  'bread': {
    'name': "bread",
    'type': 0x3,
    'width': 0x30,
    'height': 0x23,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.05,
      'right': 0.05,
      'top': 0.0011,
      'bottom': 0.02
    },
    'animations': {
      'none': {
        'sprites': ["bread"]
      }
    },
    'animation': "none",
    'antiStuck': true
  },
  'beehive': {
    'name': 'beehive',
    'type': 0x3,
    'width': 0xba,
    'height': 0xad,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.33,
      'right': 0.23,
      'top': 0.2,
      'bottom': 0.24
    },
    'animations': {
      'none': {
        'sprites': ["beehive_1", "beehive_2", "beehive_3", "beehive_4", "beehive_5", "beehive_6", 'beehive_7', "beehive_8", "beehive_9", "beehive_10"],
        'animationFrameTime': 0x46
      }
    },
    'animation': "none",
    'antiStuck': true,
    'hasSoul': true,
    'skill': game.skills.poisonWasp
  },
  'egg': {
    'name': "egg",
    'type': 0x3,
    'width': 0x14,
    'height': 0x1a,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.05,
      'right': 0.06,
      'top': 0.05,
      'bottom': 0.02
    },
    'animations': {
      'none': {
        'sprites': ["egg"]
      }
    },
    'animation': "none",
    'antiStuck': true
  },
  'stone': {
    'name': "stone",
    'type': 0x3,
    'width': 0x80,
    'height': 0x36,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.2,
      'right': 0.16,
      'top': 0.1,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ["stone"]
      }
    },
    'animation': 'none',
    'antiStuck': true
  },
  'eggRed': {
    'name': "eggRed",
    'type': 0x3,
    'width': 0x2e,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.05,
      'right': 0.05,
      'top': 0.05,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ["eggRed"]
      }
    },
    'animation': "none",
    'antiStuck': true
  },
  'cosmicEgg': {
    'name': "cosmicEgg",
    'type': 0x3,
    'width': 0x40,
    'height': 0x50,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.05,
      'right': 0.05,
      'top': 0.05,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ["cosmicEgg"]
      }
    },
    'animation': "none",
    'antiStuck': true
  },
  'ladybug': {
    'name': "ladybug",
    'type': 0x3,
    'width': 0x16,
    'height': 0x11,
    'gravityOn': false,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.1,
      'right': 0.1,
      'top': 0.1,
      'bottom': 0.1
    },
    'animations': {
      'none': {
        'sprites': ['ladybug']
      }
    },
    'animation': 'none',
    'hasSoul': true,
    'zIndex': 0x9
  },
  'pig': {
    'name': "pig",
    'type': 0x3,
    'width': 0x5a,
    'height': 0x49,
    'colliderRectangleOffset': {
      'left': 0.2,
      'right': 0.2,
      'top': 0.1,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ['pig1', 'pig2'],
        'animationFrameTime': 0x2bc
      }
    },
    'animation': 'none',
    'hasSoul': true
  },
  'cat': {
    'name': "cat",
    'moveable': false,
    'type': 0x3,
    'width': 0x51,
    'height': 0x37,
    'colliderRectangleOffset': {
      'left': 0.1,
      'right': 0.3,
      'top': 0.3,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ["cat1", "cat2"],
        'animationFrameTime': 0x578
      }
    },
    'animation': 'none',
    'hasSoul': true,
    'antiStuck': true
  },
  'crab': {
    'name': "crab",
    'moveable': false,
    'type': 0x3,
    'width': 0xd6,
    'height': 0x6b,
    'colliderRectangleOffset': {
      'left': 0.1,
      'right': 0.1,
      'top': 0.45,
      'bottom': 0.1
    },
    'animations': {
      'none': {
        'sprites': ["crab_1", "crab_2", "crab_3", "crab_4", "crab_5", 'crab_6'],
        'animationFrameTime': 0x78
      }
    },
    'animation': "none",
    'hasSoul': true,
    'antiStuck': true
  },
  'frog': {
    'name': "frog",
    'type': 0x3,
    'width': 0x20,
    'height': 0x28,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.1,
      'right': 0.1,
      'top': 0.1,
      'bottom': 0.06
    },
    'animations': {
      'idle_right': {
        'sprites': ['frog_1_idle_right', "frog_2_idle_right", 'frog_3_idle_right', 'frog_4_idle_right', "frog_5_idle_right", 'frog_6_idle_right', 'frog_7_idle_right', "frog_8_idle_right", 'frog_9_idle_right', 'frog_10_idle_right', "frog_11_idle_right", "frog_12_idle_right", 'frog_13_idle_right', "frog_14_idle_right", "frog_15_idle_right", "frog_16_idle_right"],
        'animationFrameTime': 0x50
      },
      'idle_left': {
        'sprites': ["frog_1_idle_left", 'frog_2_idle_left', "frog_3_idle_left", "frog_4_idle_left", 'frog_5_idle_left', "frog_6_idle_left", "frog_7_idle_left", 'frog_8_idle_left', "frog_9_idle_left", "frog_10_idle_left", "frog_11_idle_left", "frog_12_idle_left", 'frog_13_idle_left', 'frog_14_idle_left', "frog_15_idle_left", "frog_16_idle_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "idle_right",
    'hasSoul': true,
    'antiStuck': true
  },
  'woodpecker': {
    'name': "woodpecker",
    'type': 0x3,
    'width': 0x64,
    'height': 0x6b,
    'moveable': false,
    'colliderRectangleOffset': {
      'left': 0.2,
      'right': 0.4,
      'top': 0.25,
      'bottom': 0.02
    },
    'animations': {
      'idle': {
        'sprites': ["woodpecker_1_idle", "woodpecker_2_idle", "woodpecker_3_idle", "woodpecker_4_idle", "woodpecker_5_idle", "woodpecker_6_idle", "woodpecker_5_idle", 'woodpecker_4_idle', "woodpecker_3_idle", "woodpecker_2_idle", "woodpecker_1_idle", "woodpecker_1_idle", "woodpecker_2_idle", "woodpecker_3_idle", "woodpecker_4_idle", "woodpecker_5_idle", "woodpecker_6_idle", "woodpecker_5_idle", "woodpecker_4_idle", "woodpecker_3_idle", "woodpecker_2_idle", "woodpecker_1_idle", "woodpecker_1_idle", "woodpecker_2_idle", "woodpecker_3_idle", "woodpecker_4_idle", "woodpecker_5_idle", "woodpecker_6_idle", "woodpecker_5_idle", "woodpecker_4_idle", "woodpecker_3_idle", 'woodpecker_2_idle', "woodpecker_1_idle", "woodpecker_1_idle", "woodpecker_2_idle", "woodpecker_3_idle", 'woodpecker_4_idle', "woodpecker_5_idle", "woodpecker_6_idle", "woodpecker_5_idle", 'woodpecker_4_idle', "woodpecker_3_idle", "woodpecker_2_idle", "woodpecker_1_idle", "woodpecker_1_idle", "woodpecker_2_idle", "woodpecker_3_idle", "woodpecker_4_idle", "woodpecker_5_idle", "woodpecker_6_idle", "woodpecker_5_idle", 'woodpecker_4_idle', 'woodpecker_3_idle', 'woodpecker_2_idle', 'woodpecker_1_idle', 'woodpecker_1_idle', "woodpecker_2_idle", "woodpecker_3_idle", 'woodpecker_4_idle', "woodpecker_5_idle", "woodpecker_6_idle", "woodpecker_5_idle", "woodpecker_4_idle", "woodpecker_3_idle", 'woodpecker_2_idle', "woodpecker_1_idle", "woodpecker_1_idle", "woodpecker_2_idle", "woodpecker_3_idle", "woodpecker_4_idle", "woodpecker_5_idle", "woodpecker_6_idle", 'woodpecker_5_idle', "woodpecker_4_idle", "woodpecker_3_idle", "woodpecker_2_idle", "woodpecker_1_idle", "woodpecker_1_idle", 'woodpecker_2_idle', 'woodpecker_3_idle', 'woodpecker_4_idle', 'woodpecker_5_idle', "woodpecker_6_idle", "woodpecker_5_idle", "woodpecker_4_idle", "woodpecker_3_idle", "woodpecker_2_idle", "woodpecker_1_idle", "woodpecker_1_idle", "woodpecker_2_idle", 'woodpecker_3_idle', "woodpecker_4_idle", "woodpecker_5_idle", 'woodpecker_6_idle', "woodpecker_5_idle", 'woodpecker_4_idle', 'woodpecker_3_idle', "woodpecker_2_idle", "woodpecker_1_idle", "woodpecker_1_idle", 'woodpecker_2_idle', 'woodpecker_3_idle', 'woodpecker_4_idle', "woodpecker_5_idle", 'woodpecker_6_idle', "woodpecker_5_idle", "woodpecker_4_idle", "woodpecker_3_idle", 'woodpecker_2_idle', 'woodpecker_1_idle', 'woodpecker_1_idle', "woodpecker_2_idle", "woodpecker_3_idle", 'woodpecker_4_idle', "woodpecker_5_idle", "woodpecker_6_idle", 'woodpecker_5_idle', 'woodpecker_4_idle', 'woodpecker_3_idle', "woodpecker_2_idle", "woodpecker_1_idle", 'woodpecker_1_idle', "woodpecker_2_idle", "woodpecker_3_idle", "woodpecker_4_idle", 'woodpecker_5_idle', "woodpecker_6_idle", "woodpecker_5_idle", "woodpecker_4_idle", 'woodpecker_3_idle', "woodpecker_2_idle", 'woodpecker_1_idle', 'woodpecker_1_idle', "woodpecker_2_idle", 'woodpecker_3_idle', 'woodpecker_4_idle', "woodpecker_5_idle", "woodpecker_6_idle", "woodpecker_5_idle", "woodpecker_4_idle", "woodpecker_3_idle", "woodpecker_2_idle", "woodpecker_1_idle", "woodpecker_1_idle", 'woodpecker_2_idle', 'woodpecker_3_idle', "woodpecker_4_idle", "woodpecker_5_idle", "woodpecker_6_idle", "woodpecker_5_idle", "woodpecker_4_idle", "woodpecker_3_idle", "woodpecker_2_idle", 'woodpecker_1_idle', "woodpecker_1_idle", "woodpecker_2_idle", 'woodpecker_3_idle', "woodpecker_4_idle", 'woodpecker_5_idle', 'woodpecker_6_idle', 'woodpecker_5_idle', "woodpecker_4_idle", "woodpecker_3_idle", "woodpecker_2_idle", "woodpecker_1_idle", 'woodpecker_1_idle', 'woodpecker_2_idle', "woodpecker_3_idle", "woodpecker_4_idle", "woodpecker_5_idle", "woodpecker_6_idle", "woodpecker_5_idle", "woodpecker_4_idle", "woodpecker_3_idle", "woodpecker_2_idle", "woodpecker_1_idle", "woodpecker_1_idle", "woodpecker_2_idle", "woodpecker_3_idle", 'woodpecker_4_idle', 'woodpecker_5_idle', "woodpecker_6_idle", "woodpecker_5_idle", 'woodpecker_4_idle', 'woodpecker_3_idle', 'woodpecker_2_idle', "woodpecker_1_idle", "woodpecker_1_pecking", "woodpecker_2_pecking", "woodpecker_3_pecking", 'woodpecker_4_pecking', 'woodpecker_5_pecking', "woodpecker_1_pecking", "woodpecker_2_pecking", 'woodpecker_3_pecking', "woodpecker_4_pecking", "woodpecker_5_pecking", "woodpecker_1_pecking", "woodpecker_2_pecking", "woodpecker_3_pecking", 'woodpecker_4_pecking', "woodpecker_5_pecking", "woodpecker_1_pecking", "woodpecker_2_pecking", "woodpecker_3_pecking", 'woodpecker_4_pecking', "woodpecker_5_pecking", "woodpecker_1_pecking", "woodpecker_2_pecking", 'woodpecker_3_pecking', "woodpecker_4_pecking", "woodpecker_5_pecking", "woodpecker_1_pecking", "woodpecker_2_pecking", "woodpecker_3_pecking", "woodpecker_4_pecking", 'woodpecker_5_pecking', "woodpecker_1_pecking", "woodpecker_2_pecking", "woodpecker_3_pecking", "woodpecker_4_pecking", "woodpecker_5_pecking", "woodpecker_1_pecking", 'woodpecker_2_pecking', "woodpecker_3_pecking", "woodpecker_4_pecking", 'woodpecker_5_pecking', 'woodpecker_1_pecking', "woodpecker_2_pecking", "woodpecker_3_pecking", 'woodpecker_4_pecking', "woodpecker_5_pecking", "woodpecker_1_pecking", "woodpecker_2_pecking", "woodpecker_3_pecking", 'woodpecker_4_pecking', "woodpecker_5_pecking", 'woodpecker_1_pecking', "woodpecker_2_pecking", 'woodpecker_3_pecking', "woodpecker_4_pecking", "woodpecker_5_pecking"],
        'animationFrameTime': 0x2d
      }
    },
    'animation': "idle",
    'hasSoul': true
  },
  'deadFish': {
    'name': 'deadFish',
    'moveable': false,
    'type': 0x3,
    'width': 0x3c,
    'height': 0x23,
    'colliderRectangleOffset': {
      'left': 0.1,
      'right': 0.1,
      'top': 0.1,
      'bottom': 0.1
    },
    'animations': {
      'none': {
        'sprites': ["deadFish"]
      }
    },
    'animation': "none",
    'antiStuck': true
  },
  'mouse': {
    'name': 'mouse',
    'type': 0x3,
    'width': 0x50,
    'height': 0x1f,
    'colliderRectangleOffset': {
      'left': 0.2,
      'right': 0.2,
      'top': 0.1,
      'bottom': 0.06
    },
    'animations': {
      'running_right': {
        'sprites': ['mouse_1_right', "mouse_2_right", 'mouse_3_right', "mouse_4_right", 'mouse_5_right', 'mouse_6_right', "mouse_7_right", "mouse_8_right", "mouse_9_right", "mouse_10_right"],
        'animationFrameTime': 0x50
      },
      'running_left': {
        'sprites': ["mouse_1_left", "mouse_2_left", 'mouse_3_left', "mouse_4_left", "mouse_5_left", "mouse_6_left", "mouse_7_left", "mouse_8_left", 'mouse_9_left', "mouse_10_left"],
        'animationFrameTime': 0x50
      },
      'idle_right': {
        'sprites': ["mouse_1_idle_right", 'mouse_2_idle_right', "mouse_3_idle_right", 'mouse_4_idle_right', 'mouse_5_idle_right', "mouse_6_idle_right", "mouse_7_idle_right", "mouse_8_idle_right", "mouse_9_idle_right", "mouse_8_idle_right", "mouse_7_idle_right", "mouse_6_idle_right", "mouse_5_idle_right", "mouse_4_idle_right", "mouse_3_idle_right", "mouse_2_idle_right"],
        'animationFrameTime': 0x50
      },
      'idle_left': {
        'sprites': ["mouse_1_idle_left", "mouse_2_idle_left", "mouse_3_idle_left", "mouse_4_idle_left", "mouse_5_idle_left", "mouse_6_idle_left", "mouse_7_idle_left", 'mouse_8_idle_left', "mouse_9_idle_left", "mouse_8_idle_left", "mouse_7_idle_left", "mouse_6_idle_left", "mouse_5_idle_left", 'mouse_4_idle_left', 'mouse_3_idle_left', "mouse_2_idle_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "idle_right",
    'hasSoul': true,
    'lockSpeedX': 0x64
  },
  'easterRabbit': {
    'name': "easterRabbit",
    'type': 0x9,
    'width': 0x9f,
    'height': 0x59,
    'colliderRectangleOffset': {
      'left': 0.2,
      'right': 0.2,
      'top': 0.3,
      'bottom': 0.1
    },
    'animations': {
      'running_right': {
        'sprites': ["easterRabbit_1_right", "easterRabbit_2_right", "easterRabbit_3_right", 'easterRabbit_4_right', "easterRabbit_5_right", 'easterRabbit_6_right', 'easterRabbit_7_right', "easterRabbit_8_right", "easterRabbit_9_right", "easterRabbit_10_right", "easterRabbit_11_right", "easterRabbit_12_right", "easterRabbit_13_right", "easterRabbit_14_right", "easterRabbit_15_right"],
        'animationFrameTime': 0x50
      },
      'running_left': {
        'sprites': ["easterRabbit_1_left", "easterRabbit_2_left", "easterRabbit_3_left", "easterRabbit_4_left", "easterRabbit_5_left", "easterRabbit_6_left", 'easterRabbit_7_left', "easterRabbit_8_left", 'easterRabbit_9_left', "easterRabbit_10_left", "easterRabbit_11_left", "easterRabbit_12_left", "easterRabbit_13_left", 'easterRabbit_14_left', "easterRabbit_15_left"],
        'animationFrameTime': 0x50
      },
      'idle_right': {
        'sprites': ["easterRabbit_1_idle_right", "easterRabbit_2_idle_right", "easterRabbit_3_idle_right", "easterRabbit_4_idle_right", 'easterRabbit_5_idle_right', "easterRabbit_6_idle_right", "easterRabbit_7_idle_right", "easterRabbit_8_idle_right", 'easterRabbit_9_idle_right', "easterRabbit_10_idle_right", "easterRabbit_11_idle_right", "easterRabbit_12_idle_right", "easterRabbit_13_idle_right", "easterRabbit_14_idle_right"],
        'animationFrameTime': 0x50
      },
      'idle_left': {
        'sprites': ['easterRabbit_1_idle_left', "easterRabbit_2_idle_left", "easterRabbit_3_idle_left", "easterRabbit_4_idle_left", 'easterRabbit_5_idle_left', 'easterRabbit_6_idle_left', "easterRabbit_7_idle_left", "easterRabbit_8_idle_left", "easterRabbit_9_idle_left", 'easterRabbit_10_idle_left', "easterRabbit_11_idle_left", "easterRabbit_12_idle_left", "easterRabbit_13_idle_left", 'easterRabbit_14_idle_left'],
        'animationFrameTime': 0x50
      }
    },
    'animation': 'idle_right',
    'zIndex': 0xa,
    'lockSpeedX': 0x12c
  },
  'halloweenGhost': {
    'name': "halloweenGhost",
    'type': 0x9,
    'width': 0x3c,
    'height': 0x82,
    'colliderRectangleOffset': {
      'left': 0.2,
      'right': 0.2,
      'top': 0.1,
      'bottom': 0.1
    },
    'animations': {
      'idle_right': {
        'sprites': ['halloweenGhost_1_idle_right', 'halloweenGhost_2_idle_right', "halloweenGhost_3_idle_right", "halloweenGhost_4_idle_right", "halloweenGhost_5_idle_right", 'halloweenGhost_6_idle_right', 'halloweenGhost_7_idle_right', "halloweenGhost_8_idle_right", 'halloweenGhost_9_idle_right', "halloweenGhost_8_idle_right", "halloweenGhost_7_idle_right", "halloweenGhost_6_idle_right", "halloweenGhost_5_idle_right", "halloweenGhost_4_idle_right", "halloweenGhost_3_idle_right", "halloweenGhost_2_idle_right", "halloweenGhost_1_idle_right"],
        'animationFrameTime': 0x3c
      },
      'idle_left': {
        'sprites': ["halloweenGhost_1_idle_left", 'halloweenGhost_2_idle_left', "halloweenGhost_3_idle_left", "halloweenGhost_4_idle_left", "halloweenGhost_5_idle_left", "halloweenGhost_6_idle_left", 'halloweenGhost_7_idle_left', 'halloweenGhost_8_idle_left', "halloweenGhost_9_idle_left", "halloweenGhost_8_idle_left", "halloweenGhost_7_idle_left", 'halloweenGhost_6_idle_left', "halloweenGhost_5_idle_left", "halloweenGhost_4_idle_left", "halloweenGhost_3_idle_left", "halloweenGhost_2_idle_left", 'halloweenGhost_1_idle_left'],
        'animationFrameTime': 0x3c
      }
    },
    'animation': "idle_right",
    'moveable': false
  },
  'halloweenPumpkin': {
    'name': 'halloweenPumpkin',
    'type': 0x9,
    'width': 0x100,
    'height': 0x137,
    'colliderRectangleOffset': {
      'left': 0.4,
      'right': 0.23,
      'top': 0.25,
      'bottom': 0x0
    },
    'animations': {
      'idle': {
        'sprites': ["halloweenPumpkin_1_idle", "halloweenPumpkin_2_idle", 'halloweenPumpkin_3_idle', "halloweenPumpkin_4_idle", "halloweenPumpkin_5_idle", "halloweenPumpkin_6_idle"],
        'animationFrameTime': 0x3c
      }
    },
    'animation': "idle",
    'moveable': false
  },
  'evilRat': {
    'name': "evilRat",
    'fullName': "Evil Rat",
    'type': 0x3,
    'width': 0xb3,
    'height': 0x3b,
    'colliderRectangleOffset': {
      'left': 0.25,
      'right': 0.25,
      'top': 0.12,
      'bottom': 0.06
    },
    'animations': {
      'running_right': {
        'sprites': ["evilRat_1_right", "evilRat_2_right", "evilRat_3_right", "evilRat_4_right", "evilRat_5_right", "evilRat_6_right", 'evilRat_7_right', "evilRat_6_right", 'evilRat_5_right', 'evilRat_4_right', "evilRat_3_right", "evilRat_2_right"],
        'animationFrameTime': 0x50
      },
      'running_left': {
        'sprites': ["evilRat_1_left", "evilRat_2_left", "evilRat_3_left", 'evilRat_4_left', "evilRat_5_left", "evilRat_6_left", "evilRat_7_left", "evilRat_6_left", "evilRat_5_left", "evilRat_4_left", "evilRat_3_left", "evilRat_2_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "running_right",
    'hasSoul': true,
    'lockSpeedX': 0xfa
  },
  'giantRat': {
    'name': "giantRat",
    'fullName': "Giant Rat",
    'type': 0x3,
    'width': 0x28d,
    'height': 0xcd,
    'colliderRectangleOffset': {
      'left': 0.27,
      'right': 0.27,
      'top': 0.12,
      'bottom': 0.15
    },
    'animations': {
      'running_right': {
        'sprites': ["giantRat_1_right", "giantRat_2_right", 'giantRat_3_right', "giantRat_4_right", "giantRat_5_right", "giantRat_6_right", "giantRat_7_right", "giantRat_6_right", "giantRat_5_right", 'giantRat_4_right', "giantRat_3_right", "giantRat_2_right"],
        'animationFrameTime': 0x78
      },
      'running_left': {
        'sprites': ['giantRat_1_left', 'giantRat_2_left', 'giantRat_3_left', 'giantRat_4_left', "giantRat_5_left", "giantRat_6_left", 'giantRat_7_left', "giantRat_6_left", "giantRat_5_left", "giantRat_4_left", 'giantRat_3_left', "giantRat_2_left"],
        'animationFrameTime': 0x78
      }
    },
    'animation': "running_right",
    'hasSoul': true,
    'lockSpeedX': 0x118
  },
  'smallDemon': {
    'name': "smallDemon",
    'fullName': "Small Demon",
    'type': 0x3,
    'width': 0x3c,
    'height': 0x4a,
    'colliderRectangleOffset': {
      'left': 0.05,
      'right': 0.05,
      'top': 0.06,
      'bottom': 0.02
    },
    'animations': {
      'running_right': {
        'sprites': ['smallDemon_1_right', "smallDemon_2_right", "smallDemon_3_right", "smallDemon_4_right", "smallDemon_5_right", "smallDemon_6_right", 'smallDemon_7_right', "smallDemon_8_right"],
        'animationFrameTime': 0x50
      },
      'running_left': {
        'sprites': ["smallDemon_1_left", "smallDemon_2_left", "smallDemon_3_left", "smallDemon_4_left", "smallDemon_5_left", 'smallDemon_6_left', "smallDemon_7_left", "smallDemon_8_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "running_right",
    'hasSoul': true,
    'lockSpeedX': 0xaf
  },
  'lemming': {
    'name': 'lemming',
    'type': 0x3,
    'width': 0x47,
    'height': 0x2b,
    'colliderRectangleOffset': {
      'left': 0.11,
      'right': 0.11,
      'top': 0.24,
      'bottom': 0.12
    },
    'animations': {
      'running_right': {
        'sprites': ['lemming_1_right', "lemming_2_right", 'lemming_3_right', "lemming_4_right", "lemming_5_right", 'lemming_6_right', "lemming_7_right", 'lemming_8_right', "lemming_9_right", "lemming_10_right", "lemming_11_right", 'lemming_12_right', "lemming_13_right", "lemming_14_right", 'lemming_15_right'],
        'animationFrameTime': 0x50
      },
      'running_left': {
        'sprites': ['lemming_1_left', "lemming_2_left", 'lemming_3_left', "lemming_4_left", "lemming_5_left", 'lemming_6_left', "lemming_7_left", "lemming_8_left", "lemming_9_left", "lemming_10_left", "lemming_11_left", "lemming_12_left", "lemming_13_left", "lemming_14_left", "lemming_15_left"],
        'animationFrameTime': 0x50
      },
      'idle_right': {
        'sprites': ["lemming_1_idle_right", "lemming_2_idle_right", 'lemming_3_idle_right', 'lemming_4_idle_right', "lemming_5_idle_right", "lemming_6_idle_right", "lemming_7_idle_right", 'lemming_6_idle_right', 'lemming_5_idle_right', "lemming_4_idle_right", 'lemming_3_idle_right', "lemming_2_idle_right"],
        'animationFrameTime': 0x28
      },
      'idle_left': {
        'sprites': ['lemming_1_idle_left', "lemming_2_idle_left", "lemming_3_idle_left", 'lemming_4_idle_left', "lemming_5_idle_left", "lemming_6_idle_left", 'lemming_7_idle_left', 'lemming_6_idle_left', "lemming_5_idle_left", "lemming_4_idle_left", "lemming_3_idle_left", 'lemming_2_idle_left'],
        'animationFrameTime': 0x28
      }
    },
    'animation': "idle_right",
    'hasSoul': true,
    'lockSpeedX': 0x64
  },
  'penguin': {
    'name': "penguin",
    'type': 0x3,
    'width': 0x3f,
    'height': 0x4d,
    'colliderRectangleOffset': {
      'left': 0.1,
      'right': 0.1,
      'top': 0.1,
      'bottom': 0.06
    },
    'animations': {
      'running_right': {
        'sprites': ["penguin_1_right", 'penguin_2_right', 'penguin_3_right', "penguin_4_right", "penguin_5_right", 'penguin_6_right', "penguin_7_right", "penguin_8_right", "penguin_9_right", "penguin_10_right", 'penguin_11_right'],
        'animationFrameTime': 0x50
      },
      'running_left': {
        'sprites': ["penguin_1_left", "penguin_2_left", 'penguin_3_left', 'penguin_4_left', "penguin_5_left", 'penguin_6_left', 'penguin_7_left', 'penguin_8_left', "penguin_9_left", 'penguin_10_left', "penguin_11_left"],
        'animationFrameTime': 0x50
      },
      'idle_right': {
        'sprites': ["penguin_1_idle_right", "penguin_2_idle_right", "penguin_3_idle_right", 'penguin_4_idle_right', "penguin_3_idle_right", "penguin_2_idle_right"],
        'animationFrameTime': 0x96
      },
      'idle_left': {
        'sprites': ['penguin_1_idle_left', 'penguin_2_idle_left', "penguin_3_idle_left", "penguin_4_idle_left", "penguin_3_idle_left", 'penguin_2_idle_left'],
        'animationFrameTime': 0x96
      }
    },
    'animation': 'idle_right',
    'hasSoul': true,
    'lockSpeedX': 0x46,
    'floatingInWater': true
  },
  'worm': {
    'name': "worm",
    'type': 0x3,
    'width': 0x4e,
    'height': 0x2d,
    'colliderRectangleOffset': {
      'left': 0.15,
      'right': 0.15,
      'top': 0.15,
      'bottom': 0.23
    },
    'animations': {
      'running_right': {
        'sprites': ['worm_1_right', "worm_2_right", "worm_3_right", "worm_4_right", "worm_5_right", 'worm_6_right', "worm_7_right", "worm_8_right", "worm_9_right", "worm_8_right", "worm_7_right", "worm_6_right", "worm_5_right", "worm_4_right", "worm_3_right", 'worm_2_right'],
        'animationFrameTime': 0x50
      },
      'running_left': {
        'sprites': ['worm_1_left', "worm_2_left", "worm_3_left", 'worm_4_left', 'worm_5_left', 'worm_6_left', "worm_7_left", "worm_8_left", "worm_9_left", "worm_8_left", "worm_7_left", "worm_6_left", "worm_5_left", "worm_4_left", "worm_3_left", "worm_2_left"],
        'animationFrameTime': 0x50
      },
      'idle_right': {
        'sprites': ["worm_1_idle_right", "worm_2_idle_right", 'worm_3_idle_right', "worm_4_idle_right", "worm_5_idle_right", 'worm_6_idle_right', "worm_7_idle_right", 'worm_8_idle_right', 'worm_9_idle_right', "worm_10_idle_right", "worm_11_idle_right", "worm_12_idle_right", 'worm_13_idle_right', 'worm_14_idle_right', "worm_15_idle_right"],
        'animationFrameTime': 0x50
      },
      'idle_left': {
        'sprites': ["worm_1_idle_left", 'worm_2_idle_left', "worm_3_idle_left", 'worm_4_idle_left', "worm_5_idle_left", "worm_6_idle_left", "worm_7_idle_left", 'worm_8_idle_left', "worm_9_idle_left", "worm_10_idle_left", 'worm_11_idle_left', "worm_12_idle_left", "worm_13_idle_left", "worm_14_idle_left", "worm_15_idle_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': 'idle_right',
    'hasSoul': true,
    'lockSpeedX': 0x1e
  },
  'alienBigInsect': {
    'name': 'alienBigInsect',
    'fullName': "Cosmic Big Insect",
    'type': 0x3,
    'width': 0x153,
    'height': 0x12c,
    'colliderRectangleOffset': {
      'left': 0.2,
      'right': 0.2,
      'top': 0.45,
      'bottom': 0.16
    },
    'animations': {
      'running_right': {
        'sprites': ['alienBigInsect_1_right', "alienBigInsect_2_right", 'alienBigInsect_3_right', "alienBigInsect_4_right", "alienBigInsect_5_right", "alienBigInsect_6_right", "alienBigInsect_7_right", 'alienBigInsect_8_right', 'alienBigInsect_9_right', "alienBigInsect_10_right"],
        'animationFrameTime': 0x50
      },
      'running_left': {
        'sprites': ['alienBigInsect_1_left', 'alienBigInsect_2_left', "alienBigInsect_3_left", 'alienBigInsect_4_left', 'alienBigInsect_5_left', 'alienBigInsect_6_left', "alienBigInsect_7_left", "alienBigInsect_8_left", "alienBigInsect_9_left", 'alienBigInsect_10_left'],
        'animationFrameTime': 0x50
      },
      'idle_right': {
        'sprites': ['alienBigInsect_1_idle_right', "alienBigInsect_2_idle_right", "alienBigInsect_3_idle_right", "alienBigInsect_4_idle_right", 'alienBigInsect_5_idle_right', "alienBigInsect_6_idle_right", "alienBigInsect_5_idle_right", "alienBigInsect_4_idle_right", "alienBigInsect_3_idle_right", "alienBigInsect_2_idle_right"],
        'animationFrameTime': 0x50
      },
      'idle_left': {
        'sprites': ['alienBigInsect_1_idle_left', "alienBigInsect_2_idle_left", "alienBigInsect_3_idle_left", "alienBigInsect_4_idle_left", "alienBigInsect_5_idle_left", "alienBigInsect_6_idle_left", 'alienBigInsect_5_idle_left', 'alienBigInsect_4_idle_left', "alienBigInsect_3_idle_left", "alienBigInsect_2_idle_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "idle_right",
    'hasSoul': true,
    'lockSpeedX': 0xfa
  },
  'blackWidow': {
    'name': "blackWidow",
    'fullName': "Black Widow",
    'type': 0x3,
    'width': 0x259,
    'height': 0x1b2,
    'colliderRectangleOffset': {
      'left': 0.2,
      'right': 0.2,
      'top': 0.3,
      'bottom': 0.12
    },
    'animations': {
      'running_right': {
        'sprites': ["blackWidow_1_right", "blackWidow_2_right", "blackWidow_3_right", "blackWidow_4_right", "blackWidow_5_right", "blackWidow_6_right", 'blackWidow_7_right', "blackWidow_8_right"],
        'animationFrameTime': 0x50
      },
      'running_left': {
        'sprites': ["blackWidow_1_left", 'blackWidow_2_left', "blackWidow_3_left", "blackWidow_4_left", "blackWidow_5_left", "blackWidow_6_left", "blackWidow_7_left", "blackWidow_8_left"],
        'animationFrameTime': 0x50
      },
      'idle_right': {
        'sprites': ["blackWidow_1_idle_right", "blackWidow_2_idle_right", "blackWidow_3_idle_right", 'blackWidow_4_idle_right', 'blackWidow_5_idle_right', 'blackWidow_6_idle_right', "blackWidow_7_idle_right", "blackWidow_6_idle_right", 'blackWidow_5_idle_right', "blackWidow_4_idle_right", "blackWidow_3_idle_right", "blackWidow_2_idle_right"],
        'animationFrameTime': 0x5a
      },
      'idle_left': {
        'sprites': ["blackWidow_1_idle_left", "blackWidow_2_idle_left", "blackWidow_3_idle_left", "blackWidow_4_idle_left", "blackWidow_5_idle_left", "blackWidow_6_idle_left", "blackWidow_7_idle_left", "blackWidow_6_idle_left", 'blackWidow_5_idle_left', "blackWidow_4_idle_left", "blackWidow_3_idle_left", "blackWidow_2_idle_left"],
        'animationFrameTime': 0x5a
      }
    },
    'animation': 'idle_right',
    'hasSoul': true,
    'lockSpeedX': 0x13b
  },
  'mummy': {
    'name': "mummy",
    'type': 0x3,
    'width': 0x11e,
    'height': 0x17e,
    'colliderRectangleOffset': {
      'left': 0.18,
      'right': 0.24,
      'top': 0x0,
      'bottom': 0x0
    },
    'animations': {
      'running_right': {
        'sprites': ["mummy_1_right", "mummy_2_right", 'mummy_3_right', "mummy_4_right", "mummy_5_right", "mummy_6_right", "mummy_7_right", 'mummy_8_right', "mummy_9_right", 'mummy_10_right', "mummy_11_right", "mummy_12_right", "mummy_13_right", "mummy_14_right", "mummy_15_right"],
        'animationFrameTime': 0x50
      },
      'running_left': {
        'sprites': ["mummy_1_left", "mummy_2_left", "mummy_3_left", "mummy_4_left", "mummy_5_left", "mummy_6_left", "mummy_7_left", 'mummy_8_left', "mummy_9_left", "mummy_10_left", 'mummy_11_left', "mummy_12_left", "mummy_13_left", "mummy_14_left", "mummy_15_left"],
        'animationFrameTime': 0x50
      },
      'idle_right': {
        'sprites': ['mummy_1_idle_right', 'mummy_2_idle_right', "mummy_3_idle_right", "mummy_4_idle_right", 'mummy_5_idle_right', "mummy_6_idle_right", "mummy_5_idle_right", "mummy_4_idle_right", "mummy_3_idle_right", "mummy_2_idle_right"],
        'animationFrameTime': 0x50
      },
      'idle_left': {
        'sprites': ["mummy_1_idle_left", 'mummy_2_idle_left', "mummy_3_idle_left", "mummy_4_idle_left", "mummy_5_idle_left", "mummy_6_idle_left", "mummy_5_idle_left", "mummy_4_idle_left", 'mummy_3_idle_left', "mummy_2_idle_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "idle_right",
    'hasSoul': true,
    'lockSpeedX': 0x8c
  },
  'yeti': {
    'name': "yeti",
    'type': 0x3,
    'width': 0x1ab,
    'height': 0x1ab,
    'colliderRectangleOffset': {
      'left': 0.285,
      'right': 0.285,
      'top': 0.25,
      'bottom': 0.06
    },
    'animations': {
      'running_right': {
        'sprites': ["yeti_1_right", "yeti_2_right", 'yeti_3_right', "yeti_4_right", "yeti_5_right", "yeti_6_right", "yeti_7_right", "yeti_8_right", 'yeti_9_right', "yeti_10_right"],
        'animationFrameTime': 0x50
      },
      'running_left': {
        'sprites': ["yeti_1_left", "yeti_2_left", "yeti_3_left", "yeti_4_left", "yeti_5_left", "yeti_6_left", "yeti_7_left", "yeti_8_left", "yeti_9_left", "yeti_10_left"],
        'animationFrameTime': 0x50
      },
      'idle_right': {
        'sprites': ['yeti_1_idle_right', 'yeti_2_idle_right', 'yeti_3_idle_right', "yeti_4_idle_right", "yeti_5_idle_right", 'yeti_6_idle_right', "yeti_5_idle_right", "yeti_4_idle_right", "yeti_3_idle_right", "yeti_2_idle_right"],
        'animationFrameTime': 0x50
      },
      'idle_left': {
        'sprites': ["yeti_1_idle_left", "yeti_2_idle_left", "yeti_3_idle_left", "yeti_4_idle_left", 'yeti_5_idle_left', "yeti_6_idle_left", 'yeti_5_idle_left', 'yeti_4_idle_left', "yeti_3_idle_left", "yeti_2_idle_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "idle_right",
    'hasSoul': true,
    'lockSpeedX': 0x8c
  },
  'tyrannosaurus': {
    'name': "tyrannosaurus",
    'type': 0x3,
    'width': 0x1f8,
    'height': 0x1ab,
    'colliderRectangleOffset': {
      'left': 0.25,
      'right': 0.25,
      'top': 0.345,
      'bottom': 0.14
    },
    'animations': {
      'running_right': {
        'sprites': ["tyrannosaurus_1_right", "tyrannosaurus_2_right", 'tyrannosaurus_3_right', "tyrannosaurus_4_right", "tyrannosaurus_5_right", "tyrannosaurus_6_right", 'tyrannosaurus_7_right', "tyrannosaurus_8_right", "tyrannosaurus_9_right", "tyrannosaurus_10_right", "tyrannosaurus_11_right", "tyrannosaurus_12_right", "tyrannosaurus_13_right", "tyrannosaurus_14_right", 'tyrannosaurus_15_right'],
        'animationFrameTime': 0x50
      },
      'running_left': {
        'sprites': ["tyrannosaurus_1_left", "tyrannosaurus_2_left", "tyrannosaurus_3_left", "tyrannosaurus_4_left", "tyrannosaurus_5_left", "tyrannosaurus_6_left", "tyrannosaurus_7_left", 'tyrannosaurus_8_left', "tyrannosaurus_9_left", 'tyrannosaurus_10_left', "tyrannosaurus_11_left", "tyrannosaurus_12_left", 'tyrannosaurus_13_left', "tyrannosaurus_14_left", "tyrannosaurus_15_left"],
        'animationFrameTime': 0x50
      },
      'idle_right': {
        'sprites': ['tyrannosaurus_1_idle_right', "tyrannosaurus_2_idle_right", 'tyrannosaurus_3_idle_right', "tyrannosaurus_4_idle_right", "tyrannosaurus_5_idle_right", "tyrannosaurus_6_idle_right", "tyrannosaurus_7_idle_right", "tyrannosaurus_8_idle_right", 'tyrannosaurus_9_idle_right', "tyrannosaurus_10_idle_right", "tyrannosaurus_9_idle_right", "tyrannosaurus_8_idle_right", "tyrannosaurus_7_idle_right", "tyrannosaurus_6_idle_right", "tyrannosaurus_5_idle_right", 'tyrannosaurus_4_idle_right', "tyrannosaurus_3_idle_right", "tyrannosaurus_2_idle_right"],
        'animationFrameTime': 0x50
      },
      'idle_left': {
        'sprites': ["tyrannosaurus_1_idle_left", "tyrannosaurus_2_idle_left", "tyrannosaurus_3_idle_left", "tyrannosaurus_4_idle_left", "tyrannosaurus_5_idle_left", "tyrannosaurus_6_idle_left", 'tyrannosaurus_7_idle_left', "tyrannosaurus_8_idle_left", "tyrannosaurus_9_idle_left", "tyrannosaurus_10_idle_left", "tyrannosaurus_9_idle_left", "tyrannosaurus_8_idle_left", "tyrannosaurus_7_idle_left", "tyrannosaurus_6_idle_left", "tyrannosaurus_5_idle_left", "tyrannosaurus_4_idle_left", "tyrannosaurus_3_idle_left", "tyrannosaurus_2_idle_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': 'idle_right',
    'hasSoul': true,
    'lockSpeedX': 0x8c
  },
  'mammoth': {
    'name': "mammoth",
    'type': 0x3,
    'width': 0x1a4,
    'height': 0x108,
    'colliderRectangleOffset': {
      'left': 0.3,
      'right': 0.3,
      'top': 0.22,
      'bottom': 0.02
    },
    'animations': {
      'running_right': {
        'sprites': ["mammoth_1_right", "mammoth_2_right", "mammoth_3_right", "mammoth_4_right", "mammoth_5_right", "mammoth_6_right", 'mammoth_7_right', "mammoth_8_right", 'mammoth_9_right', "mammoth_10_right"],
        'animationFrameTime': 0x78
      },
      'running_left': {
        'sprites': ["mammoth_1_left", "mammoth_2_left", "mammoth_3_left", "mammoth_4_left", "mammoth_5_left", 'mammoth_6_left', 'mammoth_7_left', "mammoth_8_left", "mammoth_9_left", "mammoth_10_left"],
        'animationFrameTime': 0x78
      },
      'idle_right': {
        'sprites': ["mammoth_1_idle_right", "mammoth_2_idle_right", "mammoth_3_idle_right", 'mammoth_4_idle_right', "mammoth_5_idle_right", 'mammoth_6_idle_right', "mammoth_5_idle_right", "mammoth_4_idle_right", 'mammoth_3_idle_right', "mammoth_2_idle_right"],
        'animationFrameTime': 0x73
      },
      'idle_left': {
        'sprites': ["mammoth_1_idle_left", "mammoth_2_idle_left", "mammoth_3_idle_left", "mammoth_4_idle_left", "mammoth_5_idle_left", "mammoth_6_idle_left", "mammoth_5_idle_left", "mammoth_4_idle_left", "mammoth_3_idle_left", "mammoth_2_idle_left"],
        'animationFrameTime': 0x73
      }
    },
    'animation': 'idle_right',
    'hasSoul': true,
    'lockSpeedX': 0x3c
  },
  'turtle': {
    'name': "turtle",
    'type': 0x3,
    'width': 0xe0,
    'height': 0x89,
    'colliderRectangleOffset': {
      'left': 0.2,
      'right': 0.2,
      'top': 0.22,
      'bottom': 0.1
    },
    'animations': {
      'running_right': {
        'sprites': ["turtle_1_right", 'turtle_2_right', "turtle_3_right", "turtle_4_right", "turtle_5_right", "turtle_6_right", "turtle_7_right", 'turtle_8_right'],
        'animationFrameTime': 0xaa
      },
      'running_left': {
        'sprites': ["turtle_1_left", "turtle_2_left", "turtle_3_left", "turtle_4_left", 'turtle_5_left', "turtle_6_left", "turtle_7_left", 'turtle_8_left'],
        'animationFrameTime': 0xaa
      },
      'idle_right': {
        'sprites': ["turtle_1_idle_right", "turtle_2_idle_right", "turtle_3_idle_right", "turtle_4_idle_right", "turtle_5_idle_right", "turtle_4_idle_right", "turtle_3_idle_right", "turtle_2_idle_right"],
        'animationFrameTime': 0x9b
      },
      'idle_left': {
        'sprites': ["turtle_1_idle_left", "turtle_2_idle_left", "turtle_3_idle_left", "turtle_4_idle_left", "turtle_5_idle_left", "turtle_4_idle_left", 'turtle_3_idle_left', "turtle_2_idle_left"],
        'animationFrameTime': 0x9b
      }
    },
    'animation': "idle_right",
    'hasSoul': true,
    'lockSpeedX': 0x28
  },
  'zombie': {
    'name': "zombie",
    'type': 0x3,
    'width': 0xb8,
    'height': 0x10a,
    'colliderRectangleOffset': {
      'left': 0.22,
      'right': 0.22,
      'top': 0.12,
      'bottom': 0.07
    },
    'animations': {
      'running_right': {
        'sprites': ['zombie_1_right', "zombie_2_right", 'zombie_3_right', "zombie_4_right", "zombie_5_right", "zombie_6_right", "zombie_7_right", 'zombie_8_right', "zombie_9_right", "zombie_10_right", "zombie_11_right", "zombie_12_right", "zombie_13_right", "zombie_14_right", "zombie_15_right", "zombie_16_right"],
        'animationFrameTime': 0x50
      },
      'running_left': {
        'sprites': ["zombie_1_left", "zombie_2_left", "zombie_3_left", "zombie_4_left", "zombie_5_left", "zombie_6_left", 'zombie_7_left', "zombie_8_left", "zombie_9_left", "zombie_10_left", 'zombie_11_left', "zombie_12_left", "zombie_13_left", "zombie_14_left", "zombie_15_left", "zombie_16_left"],
        'animationFrameTime': 0x50
      },
      'idle_right': {
        'sprites': ["zombie_1_idle_right", "zombie_2_idle_right", 'zombie_3_idle_right', "zombie_4_idle_right", "zombie_5_idle_right", "zombie_6_idle_right", "zombie_7_idle_right", 'zombie_8_idle_right', "zombie_9_idle_right", 'zombie_10_idle_right', 'zombie_11_idle_right', "zombie_12_idle_right", "zombie_13_idle_right", "zombie_14_idle_right", "zombie_15_idle_right", "zombie_16_idle_right"],
        'animationFrameTime': 0x50
      },
      'idle_left': {
        'sprites': ["zombie_1_idle_left", 'zombie_2_idle_left', "zombie_3_idle_left", "zombie_4_idle_left", "zombie_5_idle_left", "zombie_6_idle_left", "zombie_7_idle_left", "zombie_8_idle_left", "zombie_9_idle_left", 'zombie_10_idle_left', "zombie_11_idle_left", "zombie_12_idle_left", "zombie_13_idle_left", 'zombie_14_idle_left', "zombie_15_idle_left", "zombie_16_idle_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': 'idle_right',
    'hasSoul': false,
    'lockSpeedX': 0x50
  },
  'alienEye': {
    'name': 'alienEye',
    'fullName': "Cosmic Eye",
    'type': 0x3,
    'width': 0x82,
    'height': 0x96,
    'colliderRectangleOffset': {
      'left': 0.23,
      'right': 0.23,
      'top': 0.3,
      'bottom': 0.15
    },
    'animations': {
      'running_right': {
        'sprites': ["alienEye_1_right", "alienEye_2_right", 'alienEye_3_right', "alienEye_4_right", "alienEye_5_right", 'alienEye_6_right', 'alienEye_7_right', 'alienEye_8_right', "alienEye_9_right", "alienEye_10_right"],
        'animationFrameTime': 0x50
      },
      'running_left': {
        'sprites': ["alienEye_1_left", "alienEye_2_left", "alienEye_3_left", "alienEye_4_left", "alienEye_5_left", 'alienEye_6_left', "alienEye_7_left", "alienEye_8_left", "alienEye_9_left", "alienEye_10_left"],
        'animationFrameTime': 0x50
      },
      'idle_right': {
        'sprites': ["alienEye_1_idle_right", 'alienEye_2_idle_right', "alienEye_3_idle_right", "alienEye_4_idle_right", "alienEye_5_idle_right", "alienEye_6_idle_right", "alienEye_5_idle_right", "alienEye_4_idle_right", 'alienEye_3_idle_right', "alienEye_2_idle_right"],
        'animationFrameTime': 0x50
      },
      'idle_left': {
        'sprites': ['alienEye_1_idle_left', "alienEye_2_idle_left", "alienEye_3_idle_left", "alienEye_4_idle_left", "alienEye_5_idle_left", "alienEye_6_idle_left", "alienEye_5_idle_left", 'alienEye_4_idle_left', "alienEye_3_idle_left", 'alienEye_2_idle_left'],
        'animationFrameTime': 0x50
      }
    },
    'animation': "idle_right",
    'hasSoul': true,
    'lockSpeedX': 0x69
  },
  'snake': {
    'name': 'snake',
    'type': 0x3,
    'width': 0x83,
    'height': 0x4b,
    'colliderRectangleOffset': {
      'left': 0.15,
      'right': 0.15,
      'top': 0.45,
      'bottom': 0.06
    },
    'animations': {
      'running_right': {
        'sprites': ["snake_1_right", 'snake_2_right', 'snake_3_right', "snake_4_right", "snake_5_right", "snake_4_right", "snake_3_right", "snake_2_right"],
        'animationFrameTime': 0x50
      },
      'running_left': {
        'sprites': ['snake_1_left', "snake_2_left", "snake_3_left", 'snake_4_left', "snake_5_left", "snake_4_left", 'snake_3_left', "snake_2_left"],
        'animationFrameTime': 0x50
      },
      'idle_right': {
        'sprites': ["snake_1_idle_right", 'snake_2_idle_right', "snake_3_idle_right", "snake_4_idle_right", "snake_5_idle_right", 'snake_6_idle_right', 'snake_7_idle_right', "snake_8_idle_right", 'snake_9_idle_right', "snake_10_idle_right", 'snake_11_idle_right', "snake_12_idle_right", "snake_13_idle_right", "snake_14_idle_right", "snake_15_idle_right", "snake_16_idle_right", "snake_17_idle_right", "snake_18_idle_right", "snake_19_idle_right", "snake_20_idle_right"],
        'animationFrameTime': 0x50
      },
      'idle_left': {
        'sprites': ["snake_1_idle_left", "snake_2_idle_left", "snake_3_idle_left", "snake_4_idle_left", "snake_5_idle_left", "snake_6_idle_left", "snake_7_idle_left", "snake_8_idle_left", "snake_9_idle_left", 'snake_10_idle_left', 'snake_11_idle_left', "snake_12_idle_left", 'snake_13_idle_left', 'snake_14_idle_left', 'snake_15_idle_left', "snake_16_idle_left", 'snake_17_idle_left', 'snake_18_idle_left', 'snake_19_idle_left', 'snake_20_idle_left'],
        'animationFrameTime': 0x50
      }
    },
    'animation': "idle_right",
    'hasSoul': true,
    'lockSpeedX': 0x50
  },
  'crocodile': {
    'name': "crocodile",
    'type': 0x3,
    'width': 0x10e,
    'height': 0x8a,
    'colliderRectangleOffset': {
      'left': 0.055,
      'right': 0.055,
      'top': 0.5,
      'bottom': 0.135
    },
    'animations': {
      'running_right': {
        'sprites': ["crocodile_1_right", 'crocodile_2_right', "crocodile_3_right", 'crocodile_4_right', "crocodile_5_right", 'crocodile_6_right', "crocodile_7_right", 'crocodile_8_right', "crocodile_9_right", "crocodile_10_right", "crocodile_11_right", "crocodile_12_right", 'crocodile_13_right', 'crocodile_14_right', 'crocodile_15_right'],
        'animationFrameTime': 0x50
      },
      'running_left': {
        'sprites': ["crocodile_1_left", "crocodile_2_left", "crocodile_3_left", "crocodile_4_left", "crocodile_5_left", "crocodile_6_left", 'crocodile_7_left', "crocodile_8_left", "crocodile_9_left", "crocodile_10_left", "crocodile_11_left", 'crocodile_12_left', "crocodile_13_left", "crocodile_14_left", "crocodile_15_left"],
        'animationFrameTime': 0x50
      },
      'idle_right': {
        'sprites': ["crocodile_1_idle_right", "crocodile_2_idle_right", "crocodile_3_idle_right", "crocodile_4_idle_right", "crocodile_5_idle_right", "crocodile_6_idle_right", "crocodile_7_idle_right", "crocodile_8_idle_right", "crocodile_9_idle_right", "crocodile_10_idle_right", "crocodile_11_idle_right"],
        'animationFrameTime': 0x50
      },
      'idle_left': {
        'sprites': ['crocodile_1_idle_left', "crocodile_2_idle_left", "crocodile_3_idle_left", "crocodile_4_idle_left", "crocodile_5_idle_left", 'crocodile_6_idle_left', "crocodile_7_idle_left", "crocodile_8_idle_left", "crocodile_9_idle_left", 'crocodile_10_idle_left', "crocodile_11_idle_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "idle_right",
    'hasSoul': true,
    'lockSpeedX': 0x6e
  },
  'shark': {
    'name': 'shark',
    'type': 0x3,
    'width': 0x10b,
    'height': 0xa3,
    'colliderRectangleOffset': {
      'left': 0.17,
      'right': 0.17,
      'top': 0.28,
      'bottom': 0.15
    },
    'animations': {
      'running_right': {
        'sprites': ['shark_1_right', "shark_2_right", "shark_3_right", "shark_4_right", "shark_5_right", 'shark_6_right', "shark_5_right", "shark_4_right", "shark_3_right", "shark_2_right"],
        'animationFrameTime': 0x50
      },
      'running_left': {
        'sprites': ["shark_1_left", "shark_2_left", 'shark_3_left', "shark_4_left", "shark_5_left", 'shark_6_left', "shark_5_left", "shark_4_left", 'shark_3_left', "shark_2_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': 'running_right',
    'hasSoul': true,
    'gravityOn': false,
    'lockSpeedX': 0xbe
  },
  'piranha': {
    'name': "piranha",
    'type': 0x3,
    'width': 0x79,
    'height': 0x51,
    'colliderRectangleOffset': {
      'left': 0.12,
      'right': 0.12,
      'top': 0.15,
      'bottom': 0.1
    },
    'animations': {
      'running_right': {
        'sprites': ["piranha_1_right", "piranha_2_right", "piranha_3_right", "piranha_4_right", "piranha_5_right", "piranha_6_right", "piranha_5_right", 'piranha_4_right', "piranha_3_right", 'piranha_2_right'],
        'animationFrameTime': 0x50
      },
      'running_left': {
        'sprites': ["piranha_1_left", "piranha_2_left", "piranha_3_left", "piranha_4_left", "piranha_5_left", 'piranha_6_left', "piranha_5_left", "piranha_4_left", 'piranha_3_left', "piranha_2_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "running_right",
    'hasSoul': true,
    'gravityOn': false,
    'lockSpeedX': 0x78
  },
  'fishPink': {
    'name': 'fishPink',
    'type': 0x3,
    'width': 0x37,
    'height': 0x2c,
    'colliderRectangleOffset': {
      'left': 0.025,
      'right': 0.025,
      'top': 0.2,
      'bottom': 0.2
    },
    'animations': {
      'running_right': {
        'sprites': ["fishPink_1_right", "fishPink_2_right", 'fishPink_3_right', "fishPink_4_right", "fishPink_5_right", 'fishPink_4_right', "fishPink_3_right", "fishPink_2_right"],
        'animationFrameTime': 0x32
      },
      'running_left': {
        'sprites': ['fishPink_1_left', "fishPink_2_left", 'fishPink_3_left', "fishPink_4_left", "fishPink_5_left", "fishPink_4_left", "fishPink_3_left", "fishPink_2_left"],
        'animationFrameTime': 0x32
      },
      'idle_right': {
        'sprites': ['fishPink_1_right', "fishPink_2_right", "fishPink_3_right", "fishPink_4_right", "fishPink_5_right", "fishPink_4_right", "fishPink_3_right", "fishPink_2_right"],
        'animationFrameTime': 0x8c
      },
      'idle_left': {
        'sprites': ['fishPink_1_left', "fishPink_2_left", "fishPink_3_left", "fishPink_4_left", 'fishPink_5_left', "fishPink_4_left", 'fishPink_3_left', "fishPink_2_left"],
        'animationFrameTime': 0x8c
      }
    },
    'animation': 'running_right',
    'hasSoul': true,
    'gravityOn': false,
    'lockSpeedX': 0x32
  },
  'evilBat': {
    'name': "evilBat",
    'type': 0x3,
    'width': 0x79,
    'height': 0x74,
    'colliderRectangleOffset': {
      'left': 0.28,
      'right': 0.28,
      'top': 0.25,
      'bottom': 0.4
    },
    'animations': {
      'running_right': {
        'sprites': ["evilBat_1_right", "evilBat_2_right", "evilBat_3_right", 'evilBat_4_right', 'evilBat_5_right', 'evilBat_4_right', "evilBat_3_right", "evilBat_2_right"],
        'animationFrameTime': 0x32
      },
      'running_left': {
        'sprites': ["evilBat_1_left", "evilBat_2_left", "evilBat_3_left", 'evilBat_4_left', "evilBat_5_left", "evilBat_4_left", "evilBat_3_left", "evilBat_2_left"],
        'animationFrameTime': 0x32
      }
    },
    'animation': "running_right",
    'hasSoul': true,
    'gravityOn': false,
    'lockSpeedX': 0x96
  },
  'flower_1_face_on_red': {
    'name': "flower_1_face_on_red",
    'type': 0x3,
    'width': 0x40,
    'height': 0x40,
    'gravityOn': false,
    'moveable': false,
    'isCollider': true,
    'colliderRectangleOffset': {
      'left': 0.15,
      'right': 0.15,
      'top': 0.15,
      'bottom': 0.1
    },
    'animations': {
      'red': {
        'sprites': ["flower_red"]
      },
      'yellow': {
        'sprites': ['flower_yellow']
      },
      'white': {
        'sprites': ["flower_white"]
      },
      'purple': {
        'sprites': ["flower_purple"]
      },
      'pink': {
        'sprites': ["flower_pink"]
      }
    },
    'animation': "red",
    'antiStuck': true
  },
  'fireball': {
    'name': "fireball",
    'type': 0x9,
    'width': 0x5a,
    'height': 0x44,
    'gravityOn': false,
    'moveable': true,
    'isCollider': true,
    'colliderRectangleOffset': {
      'left': 0.15,
      'right': 0.15,
      'top': 0.16,
      'bottom': 0.1
    },
    'animations': {
      'left': {
        'sprites': ['fireball_1_left', 'fireball_2_left', "fireball_3_left", "fireball_4_left", "fireball_5_left", "fireball_6_left"],
        'animationFrameTime': 0x50
      },
      'right': {
        'sprites': ["fireball_1_right", "fireball_2_right", 'fireball_3_right', "fireball_4_right", "fireball_5_right", "fireball_6_right"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "right",
    'zIndex': 0xb,
    'light': true,
    'light_radius': 0x64,
    'light_random_radius': 0x7
  },
  'fireball': {
    'name': 'fireball',
    'type': 0x9,
    'width': 0x5a,
    'height': 0x44,
    'gravityOn': false,
    'moveable': true,
    'isCollider': true,
    'colliderRectangleOffset': {
      'left': 0.15,
      'right': 0.15,
      'top': 0.16,
      'bottom': 0.1
    },
    'animations': {
      'left': {
        'sprites': ["fireball_1_left", 'fireball_2_left', "fireball_3_left", "fireball_4_left", "fireball_5_left", "fireball_6_left"],
        'animationFrameTime': 0x50
      },
      'right': {
        'sprites': ['fireball_1_right', "fireball_2_right", "fireball_3_right", "fireball_4_right", "fireball_5_right", "fireball_6_right"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "right",
    'zIndex': 0xb,
    'light': true,
    'light_radius': 0x64,
    'light_random_radius': 0x7
  },
  'boss1': {
    'name': "boss1",
    'fullName': "Demonic Angel",
    'type': 0xa,
    'width': 0x159,
    'height': 0x185,
    'colliderRectangleOffset': {
      'left': 0.22,
      'right': 0.22,
      'top': 0.1,
      'bottom': 0.21
    },
    'animations': {
      'flying_left': {
        'sprites': ['boss1_1_right', "boss1_2_right", "boss1_3_right", 'boss1_4_right', "boss1_3_right", "boss1_2_right"],
        'animationFrameTime': 0x87
      },
      'flying_right': {
        'sprites': ['boss1_1_left', "boss1_2_left", 'boss1_3_left', "boss1_4_left", "boss1_3_left", "boss1_2_left"],
        'animationFrameTime': 0x87
      }
    },
    'animation': "flying_right",
    'eatsSouls': true
  },
  'boss1_spawn': {
    'name': "boss1_spawn",
    'type': 0x4,
    'moveable': false,
    'gravityOn': false,
    'isCollider': false,
    'visible': false,
    'spawning': "boss1",
    'inBossArena': true,
    'delay': 3600001,
    'showTimer': true
  },
  'skull': {
    'name': "skull",
    'type': 0x7,
    'width': 0x3f,
    'height': 0x2e,
    'gravityOn': false,
    'isCollider': false,
    'colliderRectangleOffset': {
      'left': 0.08,
      'right': 0.08,
      'top': 0.3,
      'bottom': 0.03
    },
    'animations': {
      'flying_right': {
        'sprites': ['skull_1_right']
      },
      'flying_left': {
        'sprites': ["skull_1_left"]
      },
      'flapping_right': {
        'sprites': ['skull_1_right', "skull_2_right", "skull_3_right", "skull_2_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["skull_1_left", "skull_2_left", "skull_3_left", "skull_2_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': 'flying_right'
  },
  'explosion': {
    'name': "explosion",
    'type': 0x7,
    'width': 0x8e,
    'height': 0x94,
    'gravityOn': false,
    'isCollider': false,
    'animations': {
      'right': {
        'sprites': ["explosion_1_right", "explosion_2_right", "explosion_3_right", "explosion_4_right", "explosion_5_right", "explosion_6_right", "explosion_7_right"],
        'animationFrameTime': 0x50
      },
      'left': {
        'sprites': ["explosion_1_left", "explosion_2_left", "explosion_3_left", "explosion_4_left", "explosion_5_left", "explosion_6_left", "explosion_7_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "right",
    'light': true,
    'light_radius': 0x82
  },
  'explosion_big': {
    'name': 'explosion_big',
    'type': 0x7,
    'width': 0x18e,
    'height': 0x19e,
    'gravityOn': false,
    'isCollider': false,
    'animations': {
      'right': {
        'sprites': ['explosion_1_right', "explosion_2_right", "explosion_3_right", "explosion_4_right", "explosion_5_right", 'explosion_6_right', "explosion_7_right"],
        'animationFrameTime': 0x50
      },
      'left': {
        'sprites': ['explosion_1_left', "explosion_2_left", "explosion_3_left", "explosion_4_left", 'explosion_5_left', "explosion_6_left", "explosion_7_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "right",
    'light': true,
    'light_radius': 0x82
  },
  'explosion2': {
    'name': "explosion2",
    'type': 0x7,
    'width': 0x183,
    'height': 0x174,
    'gravityOn': false,
    'isCollider': false,
    'animations': {
      'standard': {
        'sprites': ["explosion2_1", 'explosion2_2', "explosion2_3", "explosion2_4", "explosion2_5", "explosion2_6", "explosion2_7", "explosion2_8"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "standard",
    'light': true,
    'light_radius': 0xc8
  },
  'fireworks': {
    'name': "fireworks",
    'type': 0x7,
    'width': 0x15e,
    'height': 0x14f,
    'gravityOn': false,
    'isCollider': false,
    'animations': {
      'standard': {
        'sprites': ["fireworks_1", "fireworks_2", 'fireworks_3', "fireworks_4", "fireworks_5", "fireworks_6", 'fireworks_7', "fireworks_8", "fireworks_9", 'fireworks_10'],
        'animationFrameTime': 0x5a
      }
    },
    'animation': "standard",
    'light': true,
    'light_radius': 0xaf,
    'zIndex': 0x14
  },
  'fireworks_double': {
    'name': 'fireworks_double',
    'type': 0x7,
    'width': 0x15e,
    'height': 0x14f,
    'gravityOn': false,
    'isCollider': false,
    'animations': {
      'standard': {
        'sprites': ["fireworks2_1", "fireworks2_2", 'fireworks2_3', "fireworks2_4", "fireworks2_5", "fireworks2_6", "fireworks2_7", 'fireworks2_8', "fireworks2_9", 'fireworks2_10', 'fireworks2_11', 'fireworks2_12', "fireworks2_13", "fireworks2_14", "fireworks2_15"],
        'animationFrameTime': 0x5a
      }
    },
    'animation': "standard",
    'light': true,
    'light_radius': 0xaf,
    'zIndex': 0x14
  },
  'stars_lvlup': {
    'name': "stars_lvlup",
    'type': 0x7,
    'width': 0x96,
    'height': 0x91,
    'gravityOn': false,
    'isCollider': false,
    'animations': {
      'standard': {
        'sprites': ["stars_lvlup_1", "stars_lvlup_2", "stars_lvlup_3", "stars_lvlup_4", 'stars_lvlup_5', "stars_lvlup_6", "stars_lvlup_7", 'stars_lvlup_8', "stars_lvlup_9", 'stars_lvlup_10', "stars_lvlup_11", "stars_lvlup_12", "stars_lvlup_13", "stars_lvlup_14", 'stars_lvlup_15', 'stars_lvlup_16', 'stars_lvlup_17', 'stars_lvlup_18', "stars_lvlup_19", "stars_lvlup_20"],
        'animationFrameTime': 0x3c
      }
    },
    'animation': "standard",
    'light': true,
    'light_radius': 0x4b,
    'zIndex': 0x14
  },
  'exploding_skull': {
    'name': "exploding_skull",
    'type': 0x7,
    'width': 0xc8,
    'height': 0xbe,
    'gravityOn': false,
    'isCollider': false,
    'animations': {
      'standard': {
        'sprites': ["exploding_skull_1", "exploding_skull_2", "exploding_skull_3", "exploding_skull_4", 'exploding_skull_5', "exploding_skull_6", 'exploding_skull_7', "exploding_skull_8", "exploding_skull_9", "exploding_skull_10", "exploding_skull_11", "exploding_skull_12", 'exploding_skull_13', 'exploding_skull_14'],
        'animationFrameTime': 0x3c
      }
    },
    'animation': "standard",
    'light': true,
    'light_radius': 0x64,
    'zIndex': 0x14
  },
  'dust': {
    'name': "dust",
    'type': 0x7,
    'width': 0x64,
    'height': 0x61,
    'gravityOn': false,
    'isCollider': false,
    'animations': {
      'standard': {
        'sprites': ['dust_1', 'dust_2', "dust_3", 'dust_4'],
        'animationFrameTime': 0x64
      }
    },
    'animation': 'standard',
    'zIndex': 0x14
  },
  'exploding_nova': {
    'name': "exploding_nova",
    'type': 0x7,
    'width': 0xc8,
    'height': 0xc8,
    'gravityOn': false,
    'isCollider': false,
    'animations': {
      'standard': {
        'sprites': ["exploding_nova_1", "exploding_nova_2", "exploding_nova_3", 'exploding_nova_4', 'exploding_nova_5', "exploding_nova_6", "exploding_nova_7", "exploding_nova_8", "exploding_nova_9", 'exploding_nova_10', "exploding_nova_11"],
        'animationFrameTime': 0x3c
      }
    },
    'animation': "standard",
    'light': true,
    'light_radius': 0x64,
    'zIndex': 0x14
  },
  'bubble_splash': {
    'name': 'bubble_splash',
    'type': 0x7,
    'width': 0x42,
    'height': 0x40,
    'gravityOn': false,
    'isCollider': false,
    'animations': {
      'standard': {
        'sprites': ["bubble_7", 'bubble_8', "bubble_9", "bubble_10", 'bubble_11', "bubble_12", "bubble_13"],
        'animationFrameTime': 0x96
      }
    },
    'animation': 'standard',
    'zIndex': 0x65
  },
  'lava_splash': {
    'name': "lava_splash",
    'type': 0x7,
    'width': 0x42,
    'height': 0x40,
    'gravityOn': false,
    'isCollider': false,
    'animations': {
      'standard': {
        'sprites': ["lava_bubble_7", "lava_bubble_8", 'lava_bubble_9', "lava_bubble_10", 'lava_bubble_11', "lava_bubble_12", "lava_bubble_13"],
        'animationFrameTime': 0x96
      }
    },
    'animation': 'standard',
    'zIndex': 0x65
  },
  'water_splash': {
    'name': "water_splash",
    'type': 0x7,
    'width': 0x3c,
    'height': 0x2d,
    'gravityOn': false,
    'isCollider': false,
    'animations': {
      'standard': {
        'sprites': ["water_splash_1", "water_splash_2", "water_splash_3", "water_splash_4", "water_splash_5", "water_splash_6", "water_splash_7", "water_splash_8"],
        'animationFrameTime': 0x5a
      }
    },
    'animation': "standard",
    'zIndex': 0x65
  },
  'armor_breaking_effect': {
    'name': "armor_breaking_effect",
    'type': 0x7,
    'width': 0xd7,
    'height': 0xd7,
    'gravityOn': false,
    'isCollider': false,
    'animations': {
      'standard': {
        'sprites': ["armor_breaking_default"]
      }
    },
    'animation': "standard",
    'zIndex': 0x65
  },
  'pet_1': {
    'name': 'pet_1',
    'type': 0xb,
    'width': 0x37,
    'height': 0x2b,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_1_1_right", "pet_1_2_right", 'pet_1_3_right', "pet_1_4_right", 'pet_1_5_right', "pet_1_6_right", "pet_1_7_right", "pet_1_8_right"],
        'animationFrameTime': 0x28
      },
      'flapping_left': {
        'sprites': ["pet_1_1_left", "pet_1_2_left", 'pet_1_3_left', 'pet_1_4_left', "pet_1_5_left", "pet_1_6_left", 'pet_1_7_left', 'pet_1_8_left'],
        'animationFrameTime': 0x28
      }
    },
    'animation': 'flapping_right',
    'interpolateForceTeleport': false
  },
  'pet_2': {
    'name': "pet_2",
    'type': 0xb,
    'width': 0x38,
    'height': 0x28,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ['pet_2_1_right', "pet_2_2_right", "pet_2_3_right", 'pet_2_4_right', "pet_2_3_right", "pet_2_2_right"],
        'animationFrameTime': 0x3c
      },
      'flapping_left': {
        'sprites': ["pet_2_1_left", "pet_2_2_left", 'pet_2_3_left', "pet_2_4_left", "pet_2_3_left", 'pet_2_2_left'],
        'animationFrameTime': 0x3c
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_3': {
    'name': "pet_3",
    'type': 0xb,
    'width': 0x38,
    'height': 0x2d,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_3_1_right", "pet_3_2_right", "pet_3_3_right", "pet_3_4_right"],
        'animationFrameTime': 0x3c
      },
      'flapping_left': {
        'sprites': ['pet_3_1_left', "pet_3_2_left", "pet_3_3_left", 'pet_3_4_left'],
        'animationFrameTime': 0x3c
      }
    },
    'animation': 'flapping_right',
    'interpolateForceTeleport': false
  },
  'pet_4': {
    'name': "pet_4",
    'type': 0xb,
    'width': 0x37,
    'height': 0x2b,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_4_1_right", "pet_4_2_right", "pet_4_3_right", "pet_4_4_right", "pet_4_5_right", "pet_4_6_right", "pet_4_7_right", "pet_4_8_right"],
        'animationFrameTime': 0x32
      },
      'flapping_left': {
        'sprites': ['pet_4_1_left', "pet_4_2_left", "pet_4_3_left", "pet_4_4_left", "pet_4_5_left", "pet_4_6_left", "pet_4_7_left", "pet_4_8_left"],
        'animationFrameTime': 0x32
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_5': {
    'name': "pet_5",
    'type': 0xb,
    'width': 0x37,
    'height': 0x29,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ['pet_5_1_right', "pet_5_2_right", "pet_5_3_right", 'pet_5_4_right', "pet_5_5_right", "pet_5_6_right"],
        'animationFrameTime': 0x46
      },
      'flapping_left': {
        'sprites': ["pet_5_1_left", "pet_5_2_left", "pet_5_3_left", "pet_5_4_left", "pet_5_5_left", "pet_5_6_left"],
        'animationFrameTime': 0x46
      }
    },
    'animation': 'flapping_right',
    'interpolateForceTeleport': false
  },
  'pet_6': {
    'name': "pet_6",
    'type': 0xb,
    'width': 0x37,
    'height': 0x2f,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ['pet_6_1_right', "pet_6_2_right", "pet_6_3_right", "pet_6_4_right", "pet_6_3_right", "pet_6_2_right", 'pet_6_1_right'],
        'animationFrameTime': 0x46
      },
      'flapping_left': {
        'sprites': ["pet_6_1_left", "pet_6_2_left", "pet_6_3_left", "pet_6_4_left", "pet_6_3_left", 'pet_6_2_left', 'pet_6_1_left'],
        'animationFrameTime': 0x46
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_7': {
    'name': "pet_7",
    'type': 0xb,
    'width': 0x37,
    'height': 0x29,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_7_1_right", "pet_7_2_right", "pet_7_3_right", "pet_7_4_right"],
        'animationFrameTime': 0x46
      },
      'flapping_left': {
        'sprites': ['pet_7_1_left', 'pet_7_2_left', "pet_7_3_left", "pet_7_4_left"],
        'animationFrameTime': 0x46
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_8': {
    'name': "pet_8",
    'type': 0xb,
    'width': 0x37,
    'height': 0x24,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_8_1_right", "pet_8_2_right", 'pet_8_3_right', "pet_8_4_right"],
        'animationFrameTime': 0x46
      },
      'flapping_left': {
        'sprites': ['pet_8_1_left', "pet_8_2_left", 'pet_8_3_left', "pet_8_4_left"],
        'animationFrameTime': 0x46
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_9': {
    'name': "pet_9",
    'type': 0xb,
    'width': 0x37,
    'height': 0x2b,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_9_1_right", 'pet_9_2_right', 'pet_9_3_right', 'pet_9_4_right', "pet_9_5_right", 'pet_9_6_right', "pet_9_7_right", "pet_9_8_right"],
        'animationFrameTime': 0x28
      },
      'flapping_left': {
        'sprites': ["pet_9_1_left", "pet_9_2_left", "pet_9_3_left", 'pet_9_4_left', "pet_9_5_left", "pet_9_6_left", "pet_9_7_left", "pet_9_8_left"],
        'animationFrameTime': 0x28
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_10': {
    'name': 'pet_10',
    'type': 0xb,
    'width': 0x38,
    'height': 0x40,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_10_1_right", "pet_10_2_right", "pet_10_3_right", 'pet_10_4_right', "pet_10_5_right", "pet_10_6_right", 'pet_10_7_right', "pet_10_8_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["pet_10_1_left", "pet_10_2_left", "pet_10_3_left", "pet_10_4_left", "pet_10_5_left", 'pet_10_6_left', "pet_10_7_left", 'pet_10_8_left'],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_11': {
    'name': "pet_11",
    'type': 0xb,
    'width': 0x38,
    'height': 0x30,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_11_1_right", 'pet_11_2_right', "pet_11_3_right", "pet_11_4_right", 'pet_11_5_right', "pet_11_6_right", "pet_11_7_right", 'pet_11_8_right'],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["pet_11_1_left", "pet_11_2_left", "pet_11_3_left", "pet_11_4_left", "pet_11_5_left", "pet_11_6_left", "pet_11_7_left", "pet_11_8_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_12': {
    'name': "pet_12",
    'type': 0xb,
    'width': 0x33,
    'height': 0x40,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_12_1_right", "pet_12_2_right", "pet_12_3_right", "pet_12_4_right", 'pet_12_3_right', "pet_12_2_right", "pet_12_1_right"],
        'animationFrameTime': 0x46
      },
      'flapping_left': {
        'sprites': ["pet_12_1_left", "pet_12_2_left", "pet_12_3_left", "pet_12_4_left", 'pet_12_3_left', 'pet_12_2_left', "pet_12_1_left"],
        'animationFrameTime': 0x46
      }
    },
    'animation': 'flapping_right',
    'interpolateForceTeleport': false
  },
  'pet_13': {
    'name': 'pet_13',
    'type': 0xb,
    'width': 0x38,
    'height': 0x33,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_13_1_right", "pet_13_2_right", "pet_13_3_right", 'pet_13_4_right', "pet_13_3_right", "pet_13_2_right", "pet_13_1_right"],
        'animationFrameTime': 0x46
      },
      'flapping_left': {
        'sprites': ["pet_13_1_left", "pet_13_2_left", "pet_13_3_left", "pet_13_4_left", "pet_13_3_left", "pet_13_2_left", "pet_13_1_left"],
        'animationFrameTime': 0x46
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_14': {
    'name': "pet_14",
    'type': 0xb,
    'width': 0x30,
    'height': 0x3d,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_14_1_right", 'pet_14_2_right', 'pet_14_3_right', 'pet_14_4_right', 'pet_14_3_right', "pet_14_2_right", 'pet_14_1_right'],
        'animationFrameTime': 0x46
      },
      'flapping_left': {
        'sprites': ["pet_14_1_left", 'pet_14_2_left', "pet_14_3_left", "pet_14_4_left", "pet_14_3_left", "pet_14_2_left", 'pet_14_1_left'],
        'animationFrameTime': 0x46
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_15': {
    'name': "pet_15",
    'type': 0xb,
    'width': 0x2b,
    'height': 0x2b,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_15_1_right", 'pet_15_2_right', "pet_15_3_right", "pet_15_4_right", "pet_15_5_right", "pet_15_4_right", "pet_15_3_right", 'pet_15_2_right', "pet_15_1_right", "pet_15_2_right", "pet_15_3_right", "pet_15_4_right", "pet_15_5_right", 'pet_15_4_right', "pet_15_3_right", "pet_15_2_right", "pet_15_1_right", "pet_15_2_right", "pet_15_3_right", "pet_15_4_right", 'pet_15_5_right', "pet_15_4_right", "pet_15_3_right", 'pet_15_2_right', "pet_15_1_right", "pet_15_2_right", "pet_15_3_right", "pet_15_4_right", "pet_15_6_right", "pet_15_4_right", 'pet_15_3_right', "pet_15_2_right", "pet_15_1_right"],
        'animationFrameTime': 0x46
      },
      'flapping_left': {
        'sprites': ["pet_15_1_left", "pet_15_2_left", 'pet_15_3_left', 'pet_15_4_left', "pet_15_5_left", "pet_15_4_left", 'pet_15_3_left', "pet_15_2_left", "pet_15_1_left", "pet_15_2_left", "pet_15_3_left", 'pet_15_4_left', 'pet_15_5_left', 'pet_15_4_left', "pet_15_3_left", "pet_15_2_left", "pet_15_1_left", 'pet_15_2_left', "pet_15_3_left", "pet_15_4_left", "pet_15_5_left", "pet_15_4_left", "pet_15_3_left", 'pet_15_2_left', "pet_15_1_left", "pet_15_2_left", 'pet_15_3_left', "pet_15_4_left", "pet_15_6_left", "pet_15_4_left", "pet_15_3_left", "pet_15_2_left", "pet_15_1_left"],
        'animationFrameTime': 0x46
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_16': {
    'name': "pet_16",
    'type': 0xb,
    'width': 0x3c,
    'height': 0x3c,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ['pet_16_1_right', 'pet_16_2_right', 'pet_16_3_right', "pet_16_4_right", 'pet_16_5_right', "pet_16_4_right", 'pet_16_3_right', "pet_16_2_right", "pet_16_1_right"],
        'animationFrameTime': 0x46
      },
      'flapping_left': {
        'sprites': ['pet_16_1_left', "pet_16_2_left", "pet_16_3_left", 'pet_16_4_left', "pet_16_5_left", "pet_16_4_left", "pet_16_3_left", 'pet_16_2_left', "pet_16_1_left"],
        'animationFrameTime': 0x46
      }
    },
    'animation': 'flapping_right',
    'interpolateForceTeleport': false
  },
  'pet_17': {
    'name': "pet_17",
    'type': 0xb,
    'width': 0x42,
    'height': 0x42,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_17_1_right", 'pet_17_2_right', "pet_17_3_right", "pet_17_4_right", "pet_17_5_right", "pet_17_4_right", 'pet_17_3_right', "pet_17_2_right", 'pet_17_1_right'],
        'animationFrameTime': 0x46
      },
      'flapping_left': {
        'sprites': ["pet_17_1_left", 'pet_17_2_left', "pet_17_3_left", "pet_17_4_left", "pet_17_5_left", "pet_17_4_left", "pet_17_3_left", "pet_17_2_left", "pet_17_1_left"],
        'animationFrameTime': 0x46
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_18': {
    'name': "pet_18",
    'type': 0xb,
    'width': 0x42,
    'height': 0x2f,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_18_1_right", "pet_18_2_right", 'pet_18_3_right', 'pet_18_4_right', "pet_18_5_right", 'pet_18_4_right', "pet_18_3_right", 'pet_18_2_right', "pet_18_1_right"],
        'animationFrameTime': 0x46
      },
      'flapping_left': {
        'sprites': ["pet_18_1_left", "pet_18_2_left", "pet_18_3_left", "pet_18_4_left", "pet_18_5_left", "pet_18_4_left", 'pet_18_3_left', 'pet_18_2_left', "pet_18_1_left"],
        'animationFrameTime': 0x46
      }
    },
    'animation': 'flapping_right',
    'interpolateForceTeleport': false
  },
  'pet_19': {
    'name': "pet_19",
    'type': 0xb,
    'width': 0x3f,
    'height': 0x28,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_19_1_right", "pet_19_2_right", "pet_19_3_right", "pet_19_2_right", "pet_19_1_right"],
        'animationFrameTime': 0x32
      },
      'flapping_left': {
        'sprites': ["pet_19_1_left", "pet_19_2_left", "pet_19_3_left", "pet_19_2_left", "pet_19_1_left"],
        'animationFrameTime': 0x32
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_20': {
    'name': 'pet_20',
    'type': 0xb,
    'width': 0x42,
    'height': 0x2f,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_20_1_right", "pet_20_2_right", "pet_20_3_right", "pet_20_4_right", "pet_20_3_right", 'pet_20_2_right', "pet_20_1_right"],
        'animationFrameTime': 0x46
      },
      'flapping_left': {
        'sprites': ["pet_20_1_left", "pet_20_2_left", "pet_20_3_left", "pet_20_4_left", "pet_20_3_left", 'pet_20_2_left', "pet_20_1_left"],
        'animationFrameTime': 0x46
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_21': {
    'name': "pet_21",
    'type': 0xb,
    'width': 0x42,
    'height': 0x2f,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_21_1_right", "pet_21_2_right", "pet_21_3_right", "pet_21_4_right", 'pet_21_5_right', "pet_21_4_right", 'pet_21_3_right', "pet_21_2_right", 'pet_21_1_right'],
        'animationFrameTime': 0x46
      },
      'flapping_left': {
        'sprites': ["pet_21_1_left", "pet_21_2_left", 'pet_21_3_left', 'pet_21_4_left', 'pet_21_5_left', "pet_21_4_left", "pet_21_3_left", 'pet_21_2_left', 'pet_21_1_left'],
        'animationFrameTime': 0x46
      }
    },
    'animation': 'flapping_right',
    'interpolateForceTeleport': false
  },
  'pet_22': {
    'name': "pet_22",
    'type': 0xb,
    'width': 0x2d,
    'height': 0x2d,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_22_1_right", "pet_22_2_right", 'pet_22_3_right', 'pet_22_4_right', "pet_22_5_right", "pet_22_4_right", "pet_22_3_right", "pet_22_2_right", "pet_22_1_right"],
        'animationFrameTime': 0x46
      },
      'flapping_left': {
        'sprites': ["pet_22_1_left", "pet_22_2_left", "pet_22_3_left", "pet_22_4_left", "pet_22_5_left", "pet_22_4_left", 'pet_22_3_left', 'pet_22_2_left', "pet_22_1_left"],
        'animationFrameTime': 0x46
      },
      'blink_right': {
        'sprites': ["pet_22_6_right", "pet_22_7_right", 'pet_22_8_right', "pet_22_9_right", "pet_22_10_right", "pet_22_9_right", 'pet_22_8_right', "pet_22_7_right", "pet_22_6_right"],
        'animationFrameTime': 0x46
      },
      'blink_left': {
        'sprites': ["pet_22_6_left", "pet_22_7_left", 'pet_22_8_left', "pet_22_9_left", 'pet_22_10_left', "pet_22_9_left", 'pet_22_8_left', 'pet_22_7_left', 'pet_22_6_left'],
        'animationFrameTime': 0x46
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_23': {
    'name': 'pet_23',
    'type': 0xb,
    'width': 0x3c,
    'height': 0x2f,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_23_1_right", "pet_23_2_right", 'pet_23_3_right', "pet_23_4_right", "pet_23_3_right", "pet_23_2_right", 'pet_23_1_right'],
        'animationFrameTime': 0x46
      },
      'flapping_left': {
        'sprites': ['pet_23_1_left', "pet_23_2_left", "pet_23_3_left", "pet_23_4_left", "pet_23_3_left", "pet_23_2_left", "pet_23_1_left"],
        'animationFrameTime': 0x46
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_24': {
    'name': 'pet_24',
    'type': 0xb,
    'width': 0x3c,
    'height': 0x2d,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_24_1_right", "pet_24_2_right", "pet_24_3_right", "pet_24_4_right", "pet_24_5_right", "pet_24_4_right", "pet_24_3_right", 'pet_24_2_right'],
        'animationFrameTime': 0x46
      },
      'flapping_left': {
        'sprites': ["pet_24_1_left", "pet_24_2_left", "pet_24_3_left", "pet_24_4_left", "pet_24_5_left", "pet_24_4_left", "pet_24_3_left", "pet_24_2_left"],
        'animationFrameTime': 0x46
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_25': {
    'name': 'pet_25',
    'type': 0xb,
    'width': 0x36,
    'height': 0x23,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_25_1_right", "pet_25_2_right", "pet_25_3_right", "pet_25_4_right", "pet_25_5_right", "pet_25_6_right", "pet_25_7_right", 'pet_25_8_right'],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["pet_25_1_left", "pet_25_2_left", "pet_25_3_left", 'pet_25_4_left', 'pet_25_5_left', "pet_25_6_left", "pet_25_7_left", "pet_25_8_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_26': {
    'name': "pet_26",
    'type': 0xb,
    'width': 0x3c,
    'height': 0x2d,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_26_1_right", "pet_26_2_right", "pet_26_3_right", "pet_26_4_right", "pet_26_5_right", "pet_26_4_right", "pet_26_3_right", "pet_26_2_right"],
        'animationFrameTime': 0x46
      },
      'flapping_left': {
        'sprites': ["pet_26_1_left", "pet_26_2_left", "pet_26_3_left", "pet_26_4_left", 'pet_26_5_left', "pet_26_4_left", 'pet_26_3_left', "pet_26_2_left"],
        'animationFrameTime': 0x46
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_27': {
    'name': "pet_27",
    'type': 0xb,
    'width': 0x3c,
    'height': 0x3d,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_27_1_right", "pet_27_2_right", "pet_27_3_right", "pet_27_4_right", "pet_27_5_right", "pet_27_4_right", "pet_27_3_right", "pet_27_2_right"],
        'animationFrameTime': 0x23
      },
      'flapping_left': {
        'sprites': ["pet_27_1_left", "pet_27_2_left", 'pet_27_3_left', "pet_27_4_left", "pet_27_5_left", "pet_27_4_left", "pet_27_3_left", "pet_27_2_left"],
        'animationFrameTime': 0x23
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_28': {
    'name': "pet_28",
    'type': 0xb,
    'width': 0x46,
    'height': 0x3a,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_28_1_right", "pet_28_2_right", 'pet_28_3_right', "pet_28_4_right", "pet_28_3_right", "pet_28_2_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["pet_28_1_left", "pet_28_2_left", "pet_28_3_left", "pet_28_4_left", "pet_28_3_left", 'pet_28_2_left'],
        'animationFrameTime': 0x50
      }
    },
    'animation': 'flapping_right',
    'interpolateForceTeleport': false
  },
  'pet_29': {
    'name': "pet_29",
    'type': 0xb,
    'width': 0x46,
    'height': 0x39,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_29_1_right", "pet_29_2_right", "pet_29_3_right", "pet_29_4_right", "pet_29_3_right", "pet_29_2_right"],
        'animationFrameTime': 0x46
      },
      'flapping_left': {
        'sprites': ["pet_29_1_left", "pet_29_2_left", "pet_29_3_left", 'pet_29_4_left', 'pet_29_3_left', "pet_29_2_left"],
        'animationFrameTime': 0x46
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_30': {
    'name': "pet_30",
    'type': 0xb,
    'width': 0x4f,
    'height': 0x38,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_30_1_right", 'pet_30_2_right', 'pet_30_3_right', "pet_30_4_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["pet_30_1_left", "pet_30_2_left", "pet_30_3_left", "pet_30_4_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_31': {
    'name': 'pet_31',
    'type': 0xb,
    'width': 0x40,
    'height': 0x40,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_31_1_right", "pet_31_2_right", 'pet_31_3_right', "pet_31_4_right", "pet_31_5_right", "pet_31_6_right", "pet_31_5_right", 'pet_31_4_right', 'pet_31_3_right', 'pet_31_2_right'],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["pet_31_1_left", "pet_31_2_left", 'pet_31_3_left', "pet_31_4_left", "pet_31_5_left", "pet_31_6_left", 'pet_31_5_left', "pet_31_4_left", "pet_31_3_left", "pet_31_2_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_32': {
    'name': 'pet_32',
    'type': 0xb,
    'width': 0x40,
    'height': 0x40,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ['pet_32_1_right', "pet_32_2_right", "pet_32_3_right", "pet_32_4_right", "pet_32_5_right", "pet_32_6_right", 'pet_32_5_right', 'pet_32_4_right', 'pet_32_3_right', "pet_32_2_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["pet_32_1_left", 'pet_32_2_left', "pet_32_3_left", "pet_32_4_left", "pet_32_5_left", "pet_32_6_left", 'pet_32_5_left', "pet_32_4_left", "pet_32_3_left", "pet_32_2_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_33': {
    'name': 'pet_33',
    'type': 0xb,
    'width': 0x50,
    'height': 0x40,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ['pet_33_1_right', "pet_33_2_right", "pet_33_3_right", "pet_33_4_right", "pet_33_5_right", "pet_33_6_right", 'pet_33_5_right', 'pet_33_4_right', 'pet_33_3_right', "pet_33_2_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["pet_33_1_left", "pet_33_2_left", "pet_33_3_left", 'pet_33_4_left', "pet_33_5_left", "pet_33_6_left", 'pet_33_5_left', "pet_33_4_left", 'pet_33_3_left', "pet_33_2_left"],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_34': {
    'name': "pet_34",
    'type': 0xb,
    'width': 0x48,
    'height': 0x64,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ['pet_34_1_right', "pet_34_2_right", 'pet_34_3_right', "pet_34_4_right", "pet_34_5_right", "pet_34_6_right", "pet_34_7_right", "pet_34_8_right", 'pet_34_9_right', "pet_34_10_right", "pet_34_11_right", "pet_34_12_right"],
        'animationFrameTime': 0x50
      },
      'flapping_left': {
        'sprites': ["pet_34_1_left", 'pet_34_2_left', 'pet_34_3_left', "pet_34_4_left", "pet_34_5_left", "pet_34_6_left", "pet_34_7_left", "pet_34_8_left", "pet_34_9_left", "pet_34_10_left", "pet_34_11_left", 'pet_34_12_left'],
        'animationFrameTime': 0x50
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_35': {
    'name': "pet_35",
    'type': 0xb,
    'width': 0x46,
    'height': 0x41,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_35_1_right", "pet_35_2_right", "pet_35_3_right", "pet_35_4_right", "pet_35_5_right", 'pet_35_6_right', "pet_35_5_right", "pet_35_4_right", "pet_35_3_right", "pet_35_2_right"],
        'animationFrameTime': 0x32
      },
      'flapping_left': {
        'sprites': ["pet_35_1_left", "pet_35_2_left", 'pet_35_3_left', "pet_35_4_left", "pet_35_5_left", 'pet_35_6_left', 'pet_35_5_left', "pet_35_4_left", "pet_35_3_left", "pet_35_2_left"],
        'animationFrameTime': 0x32
      }
    },
    'animation': "flapping_right",
    'interpolateForceTeleport': false
  },
  'pet_36': {
    'name': "pet_36",
    'type': 0xb,
    'width': 0x58,
    'height': 0x3c,
    'isCollider': false,
    'gravityOn': false,
    'animations': {
      'flapping_right': {
        'sprites': ["pet_36_1_right", "pet_36_2_right", "pet_36_3_right", "pet_36_4_right", 'pet_36_3_right', 'pet_36_2_right'],
        'animationFrameTime': 0x3c
      },
      'flapping_left': {
        'sprites': ["pet_36_1_left", "pet_36_2_left", "pet_36_3_left", "pet_36_4_left", "pet_36_3_left", "pet_36_2_left"],
        'animationFrameTime': 0x3c
      }
    },
    'animation': 'flapping_right',
    'interpolateForceTeleport': false
  },
  'tombstone_1': {
    'name': "tombstone_1",
    'type': 0xc,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0x0,
      'bottom': 0.03
    },
    'width': 0x42,
    'height': 0x55,
    'animations': {
      'none': {
        'sprites': ["tombstone_wooden_5"]
      },
      'start': {
        'sprites': ["tombstone_wooden_1", "tombstone_wooden_2", "tombstone_wooden_3", 'tombstone_wooden_4', 'tombstone_wooden_5', 'tombstone_wooden_6', "tombstone_wooden_7", "tombstone_wooden_8", "tombstone_wooden_9", "tombstone_wooden_8", "tombstone_wooden_7", "tombstone_wooden_6", "tombstone_wooden_5", "tombstone_wooden_4", "tombstone_wooden_3", "tombstone_wooden_2"],
        'animationFrameTime': 0x64
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'tombstone_2': {
    'name': "tombstone_2",
    'type': 0xc,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0x0,
      'bottom': 0.05
    },
    'width': 0x3c,
    'height': 0x64,
    'animations': {
      'none': {
        'sprites': ["tombstone_stone_1"]
      },
      'start': {
        'sprites': ['tombstone_stone_1', "tombstone_stone_1", "tombstone_stone_2", "tombstone_stone_3", "tombstone_stone_4", "tombstone_stone_5", "tombstone_stone_6", "tombstone_stone_7", "tombstone_stone_8", "tombstone_stone_9", "tombstone_stone_9", "tombstone_stone_9", "tombstone_stone_8", "tombstone_stone_7", 'tombstone_stone_6', "tombstone_stone_5", "tombstone_stone_4", "tombstone_stone_3", 'tombstone_stone_2', "tombstone_stone_1", "tombstone_stone_1", "tombstone_stone_2", 'tombstone_stone_3', 'tombstone_stone_4', 'tombstone_stone_5', "tombstone_stone_6", 'tombstone_stone_7', "tombstone_stone_8", 'tombstone_stone_9', 'tombstone_stone_9', "tombstone_stone_9", "tombstone_stone_8", "tombstone_stone_7", "tombstone_stone_6", 'tombstone_stone_5', "tombstone_stone_4", 'tombstone_stone_3', 'tombstone_stone_2', "tombstone_stone_1", 'tombstone_stone_1', "tombstone_stone_2", "tombstone_stone_3", "tombstone_stone_4", 'tombstone_stone_5', "tombstone_stone_6", "tombstone_stone_7", "tombstone_stone_8", "tombstone_stone_9", "tombstone_stone_9", "tombstone_stone_9", "tombstone_stone_8", "tombstone_stone_7", 'tombstone_stone_6', "tombstone_stone_5", "tombstone_stone_4", "tombstone_stone_3", "tombstone_stone_2", "tombstone_stone_1"],
        'animationFrameTime': 0x28
      },
      'end': {
        'sprites': ["tombstone_stone_1"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'tombstone_3': {
    'name': 'tombstone_3',
    'type': 0xc,
    'width': 0x42,
    'height': 0x47,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0x0,
      'bottom': 0.15
    },
    'animations': {
      'none': {
        'sprites': ['tombstone_flowers_1']
      },
      'start': {
        'sprites': ['tombstone_flowers_1', "tombstone_flowers_2", "tombstone_flowers_3", 'tombstone_flowers_4', "tombstone_flowers_5", 'tombstone_flowers_6', 'tombstone_flowers_5', 'tombstone_flowers_4', "tombstone_flowers_3", "tombstone_flowers_2"],
        'animationFrameTime': 0x7d
      }
    },
    'animation': 'none',
    'zIndex': -0x64
  },
  'tombstone_4': {
    'name': 'tombstone_4',
    'type': 0xc,
    'width': 0x43,
    'height': 0x64,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0x0,
      'bottom': 0.11
    },
    'animations': {
      'none': {
        'sprites': ["tombstone_demonic_1"]
      },
      'start': {
        'sprites': ["tombstone_demonic_1", 'tombstone_demonic_1', 'tombstone_demonic_1', 'tombstone_demonic_1', "tombstone_demonic_1", "tombstone_demonic_1", "tombstone_demonic_2", "tombstone_demonic_3", "tombstone_demonic_4", 'tombstone_demonic_5', "tombstone_demonic_6", "tombstone_demonic_7", "tombstone_demonic_8", "tombstone_demonic_9", 'tombstone_demonic_9', 'tombstone_demonic_9', 'tombstone_demonic_9', "tombstone_demonic_9", "tombstone_demonic_9", "tombstone_demonic_9", "tombstone_demonic_9", "tombstone_demonic_9", "tombstone_demonic_9", 'tombstone_demonic_9', "tombstone_demonic_9", "tombstone_demonic_9", 'tombstone_demonic_9', "tombstone_demonic_9", "tombstone_demonic_9", "tombstone_demonic_9", 'tombstone_demonic_9', 'tombstone_demonic_9', "tombstone_demonic_9", "tombstone_demonic_9", "tombstone_demonic_9", "tombstone_demonic_9", 'tombstone_demonic_9', "tombstone_demonic_9", 'tombstone_demonic_9', "tombstone_demonic_9", 'tombstone_demonic_9', "tombstone_demonic_9", 'tombstone_demonic_9', "tombstone_demonic_9", "tombstone_demonic_9", "tombstone_demonic_9", 'tombstone_demonic_9', "tombstone_demonic_9", "tombstone_demonic_9", "tombstone_demonic_9", "tombstone_demonic_9", "tombstone_demonic_9", "tombstone_demonic_9", 'tombstone_demonic_8', 'tombstone_demonic_7', "tombstone_demonic_6", 'tombstone_demonic_5', 'tombstone_demonic_4', "tombstone_demonic_3", "tombstone_demonic_2", 'tombstone_demonic_1'],
        'animationFrameTime': 0x46
      },
      'end': {
        'sprites': ["tombstone_demonic_1"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'tombstone_5': {
    'name': 'tombstone_5',
    'type': 0xc,
    'width': 0x60,
    'height': 0x5d,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0x0,
      'bottom': 0.15
    },
    'animations': {
      'none': {
        'sprites': ["tombstone_broken_heart_1"]
      },
      'start': {
        'sprites': ["tombstone_broken_heart_2", "tombstone_broken_heart_3", "tombstone_broken_heart_4", 'tombstone_broken_heart_5', "tombstone_broken_heart_6", "tombstone_broken_heart_7", "tombstone_broken_heart_8", 'tombstone_broken_heart_9', "tombstone_broken_heart_10"],
        'animationFrameTime': 0x46
      },
      'end': {
        'sprites': ["tombstone_broken_heart_10"]
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'tombstone_6': {
    'name': "tombstone_6",
    'type': 0xc,
    'width': 0x8c,
    'height': 0x69,
    'colliderRectangleOffset': {
      'left': 0.2,
      'right': 0.2,
      'top': 0x0,
      'bottom': 0x0
    },
    'animations': {
      'none': {
        'sprites': ['tombstone_pixel_1']
      },
      'start': {
        'sprites': ["tombstone_pixel_1", "tombstone_pixel_2", "tombstone_pixel_3", "tombstone_pixel_4", "tombstone_pixel_5", "tombstone_pixel_6"],
        'animationFrameTime': 0xc8
      },
      'end': {
        'sprites': ["tombstone_pixel_6"]
      }
    },
    'animation': 'none',
    'zIndex': -0x64
  },
  'tombstone_7': {
    'name': 'tombstone_7',
    'type': 0xc,
    'width': 0x64,
    'height': 0x5b,
    'colliderRectangleOffset': {
      'left': 0.1,
      'right': 0.1,
      'top': 0x0,
      'bottom': 0.08
    },
    'animations': {
      'none': {
        'sprites': ["tombstone_skeleton_1"]
      },
      'start': {
        'sprites': ["tombstone_skeleton_1", "tombstone_skeleton_1", "tombstone_skeleton_1", 'tombstone_skeleton_1', "tombstone_skeleton_2", "tombstone_skeleton_3", "tombstone_skeleton_4", "tombstone_skeleton_5", "tombstone_skeleton_6", "tombstone_skeleton_7", "tombstone_skeleton_8", "tombstone_skeleton_9", "tombstone_skeleton_10", "tombstone_skeleton_9", 'tombstone_skeleton_8', "tombstone_skeleton_7", "tombstone_skeleton_6", "tombstone_skeleton_6", "tombstone_skeleton_7", "tombstone_skeleton_8", 'tombstone_skeleton_9', 'tombstone_skeleton_10', "tombstone_skeleton_9", "tombstone_skeleton_8", "tombstone_skeleton_7", 'tombstone_skeleton_6', "tombstone_skeleton_6", "tombstone_skeleton_7", "tombstone_skeleton_8", 'tombstone_skeleton_9', "tombstone_skeleton_10", "tombstone_skeleton_9", "tombstone_skeleton_8", "tombstone_skeleton_7", "tombstone_skeleton_6", "tombstone_skeleton_6", 'tombstone_skeleton_7', "tombstone_skeleton_8", "tombstone_skeleton_9", "tombstone_skeleton_10", "tombstone_skeleton_9", "tombstone_skeleton_8", "tombstone_skeleton_7", "tombstone_skeleton_6", "tombstone_skeleton_6", "tombstone_skeleton_5", "tombstone_skeleton_4", 'tombstone_skeleton_3', "tombstone_skeleton_2", "tombstone_skeleton_1"],
        'animationFrameTime': 0x8c
      },
      'end': {
        'sprites': ["tombstone_skeleton_1"],
        'animationFrameTime': 0xc8
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'tombstone_8': {
    'name': "tombstone_8",
    'type': 0xc,
    'width': 0x71,
    'height': 0x64,
    'colliderRectangleOffset': {
      'left': 0.2,
      'right': 0.2,
      'top': 0x0,
      'bottom': 0.05
    },
    'animations': {
      'none': {
        'sprites': ["tombstone_sweet_soul_1"]
      },
      'start': {
        'sprites': ['tombstone_sweet_soul_2', 'tombstone_sweet_soul_3', "tombstone_sweet_soul_4"],
        'animationFrameTime': 0x78
      },
      'end': {
        'sprites': ["tombstone_sweet_soul_5", "tombstone_sweet_soul_6", "tombstone_sweet_soul_7", "tombstone_sweet_soul_8", "tombstone_sweet_soul_9", "tombstone_sweet_soul_10"],
        'animationFrameTime': 0x78
      }
    },
    'animation': 'none',
    'zIndex': -0x64
  },
  'tombstone_9': {
    'name': "tombstone_9",
    'type': 0xc,
    'width': 0x41,
    'height': 0x6b,
    'colliderRectangleOffset': {
      'left': 0x0,
      'right': 0x0,
      'top': 0x0,
      'bottom': 0.03
    },
    'animations': {
      'none': {
        'sprites': ["tombstone_coffin_1"]
      },
      'start': {
        'sprites': ["tombstone_coffin_1", "tombstone_coffin_1", "tombstone_coffin_1", "tombstone_coffin_1", "tombstone_coffin_1", "tombstone_coffin_1", "tombstone_coffin_2", 'tombstone_coffin_3', "tombstone_coffin_4", 'tombstone_coffin_5', "tombstone_coffin_6", "tombstone_coffin_6", "tombstone_coffin_6", "tombstone_coffin_6", 'tombstone_coffin_6', "tombstone_coffin_6", 'tombstone_coffin_6', "tombstone_coffin_6", "tombstone_coffin_6", "tombstone_coffin_6", "tombstone_coffin_6", "tombstone_coffin_6", 'tombstone_coffin_6', "tombstone_coffin_6", 'tombstone_coffin_6', "tombstone_coffin_6", 'tombstone_coffin_6', "tombstone_coffin_6", "tombstone_coffin_6", 'tombstone_coffin_6', 'tombstone_coffin_6', "tombstone_coffin_6", 'tombstone_coffin_6', 'tombstone_coffin_6', "tombstone_coffin_6", 'tombstone_coffin_6', 'tombstone_coffin_6', "tombstone_coffin_6", "tombstone_coffin_6", "tombstone_coffin_6", 'tombstone_coffin_6', "tombstone_coffin_6", 'tombstone_coffin_6', 'tombstone_coffin_6', "tombstone_coffin_6", "tombstone_coffin_6", 'tombstone_coffin_6', "tombstone_coffin_6", 'tombstone_coffin_6', "tombstone_coffin_6", "tombstone_coffin_6", "tombstone_coffin_5", 'tombstone_coffin_4', "tombstone_coffin_3", 'tombstone_coffin_2', "tombstone_coffin_1"],
        'animationFrameTime': 0x46
      },
      'end': {
        'sprites': ['tombstone_coffin_1']
      }
    },
    'animation': "none",
    'zIndex': -0x64
  },
  'tombstone_10': {
    'name': "tombstone_10",
    'type': 0xc,
    'width': 0x87,
    'height': 0x87,
    'colliderRectangleOffset': {
      'left': 0.25,
      'right': 0.25,
      'top': 0.3,
      'bottom': 0.1
    },
    'animations': {
      'none': {
        'sprites': ['tombstone_talos_1', "tombstone_talos_2", "tombstone_talos_3", "tombstone_talos_4", "tombstone_talos_3", "tombstone_talos_2"],
        'animationFrameTime': 0xa0
      },
      'start': {
        'sprites': ["tombstone_talos_1", "tombstone_talos_2", "tombstone_talos_3", "tombstone_talos_4", "tombstone_talos_5", 'tombstone_talos_6', "tombstone_talos_7", "tombstone_talos_8", "tombstone_talos_9", "tombstone_talos_10", "tombstone_talos_11", "tombstone_talos_12", 'tombstone_talos_13'],
        'animationFrameTime': 0x5a
      },
      'end': {
        'sprites': ["tombstone_talos_13"]
      }
    },
    'animation': 'none',
    'zIndex': -0x64
  }
};
var expTable = {
  'fly': {
    'next': 'butterfly',
    'exp': 0x1e,
    'startCost': 0x0
  },
  'butterfly': {
    'next': 'mosquito',
    'exp': 0x32,
    'startCost': 0x1
  },
  'mosquito': {
    'next': 'wasp',
    'exp': 0x46,
    'startCost': 0x2
  },
  'wasp': {
    'next': 'dragonfly',
    'exp': 0xf0,
    'startCost': 0x3
  },
  'dragonfly': {
    'next': "pigeon",
    'exp': 0x104,
    'startCost': 0x4
  },
  'pigeon': {
    'next': "duck",
    'exp': 0x12c,
    'startCost': 0x5
  },
  'duck': {
    'next': 'blueBird',
    'exp': 0x15e,
    'startCost': 0x6
  },
  'blueBird': {
    'next': 'hen',
    'exp': 0x190,
    'startCost': 0x7
  },
  'hen': {
    'next': 'parrot',
    'exp': 0x1c2,
    'startCost': 0x8
  },
  'parrot': {
    'next': 'stork',
    'exp': 0x1c2,
    'startCost': 0x9
  },
  'stork': {
    'next': "redBird",
    'exp': 0x1f4,
    'startCost': 0xa
  },
  'redBird': {
    'next': 'pelican',
    'exp': 0x226,
    'startCost': 0xb
  },
  'pelican': {
    'next': "turkey",
    'exp': 0x352,
    'startCost': 0xc
  },
  'turkey': {
    'next': 'bat',
    'exp': 0x2ee,
    'startCost': 0xd
  },
  'bat': {
    'next': "seagull",
    'exp': 0x320,
    'startCost': 0xe
  },
  'seagull': {
    'next': "commonBlackbird",
    'exp': 0x7d0,
    'startCost': 0xf
  },
  'commonBlackbird': {
    'next': "hornet",
    'exp': 0x3e8,
    'startCost': 0x10
  },
  'hornet': {
    'next': "vulture",
    'exp': 0x3e8,
    'startCost': 0x11
  },
  'vulture': {
    'next': "owl",
    'exp': 0x258,
    'startCost': 0x12
  },
  'owl': {
    'next': "pompadourCotinga",
    'exp': 0x578,
    'startCost': 0x13
  },
  'pompadourCotinga': {
    'next': 'falcon',
    'exp': 0x6a4,
    'startCost': 0x14
  },
  'falcon': {
    'next': 'eagle',
    'exp': 0x7d0,
    'startCost': 0x15
  },
  'eagle': {
    'next': "snowyOwl",
    'exp': 0x960,
    'startCost': 0x16
  },
  'snowyOwl': {
    'next': "hawk",
    'exp': 0x1388,
    'startCost': 0x17
  },
  'hawk': {
    'next': "raven",
    'exp': 0x1770,
    'startCost': 0x18
  },
  'raven': {
    'next': "madBat",
    'exp': 0x1f40,
    'startCost': 0x19
  },
  'madBat': {
    'next': 'pterodactylChild',
    'exp': 0x2710,
    'startCost': 0x1a
  },
  'pterodactylChild': {
    'next': "pterodactyl",
    'exp': 0x2710,
    'startCost': 0x1b
  },
  'pterodactyl': {
    'next': "swampMonster",
    'exp': 0x61a8,
    'startCost': 0x1c
  },
  'swampMonster': {
    'next': "stoneEater",
    'exp': 0x88b8,
    'startCost': 0x1d
  },
  'stoneEater': {
    'next': 'demonicEggEater',
    'exp': 0x3a98,
    'startCost': 0x1e
  },
  'demonicEggEater': {
    'next': "demonicBat",
    'exp': 0x4e20,
    'startCost': 0x1f
  },
  'demonicBat': {
    'next': 'demonicImp',
    'exp': 0x7530,
    'startCost': 0x20
  },
  'demonicImp': {
    'next': 'dragon',
    'exp': 0x61a8,
    'startCost': 0x21
  },
  'dragon': {
    'next': 'phoenix',
    'exp': 0x61a8,
    'startCost': 0x22
  },
  'phoenix': {
    'next': "alienBug",
    'exp': 0x9c40,
    'startCost': 0x23
  },
  'alienBug': {
    'next': "alienBigEye",
    'exp': 0x3a98,
    'startCost': 0x24
  },
  'alienBigEye': {
    'next': "alienAngryEye",
    'exp': 0x2ee0,
    'startCost': 0x25
  },
  'alienAngryEye': {
    'next': "alienBat",
    'exp': 0x3a98,
    'startCost': 0x26
  },
  'alienBat': {
    'next': "overfedAlienBat",
    'exp': 0x88b8,
    'startCost': 0x27
  },
  'ghost': {
    'next': "ghostlyReaper",
    'exp': 0x4e20,
    'startCost': 0x28
  },
  'ghostlyReaper': {
    'next': "pumpkinCharacter",
    'exp': 0x2ee0,
    'startCost': 0x2d
  },
  'pumpkinCharacter': {
    'next': "pumpkinGhost",
    'exp': 0xc350,
    'startCost': 0x32
  },
  'pumpkinGhost': {
    'next': "grimReaper",
    'exp': 0x4e20,
    'startCost': 0x37
  },
  'grimReaper': {
    'next': '',
    'exp': Infinity,
    'startCost': 0x3c
  },
  'overfedAlienBat': {
    'next': "ghost",
    'exp': 0x0,
    'startCost': 0x28
  }
};
var foodChain = {
  'fly': {
    'eats': {
      'poo': {
        'dmg': 0x23,
        'exp': 0x1e
      },
      'deadFish': {
        'dmg': 0x23,
        'exp': 0x1e
      }
    }
  },
  'butterfly': {
    'eats': {
      'flower_1_face_on_red': {
        'dmg': 0x0,
        'exp': 0x7
      }
    }
  },
  'mosquito': {
    'eats': {
      'pig': {
        'dmg': 0x0,
        'exp': 0x14
      },
      'cat': {
        'dmg': 0x0,
        'exp': 0x8
      }
    }
  },
  'dragonfly': {
    'eats': {
      'fly': {
        'dmg': 0xf,
        'exp': 0x5a
      },
      'butterfly': {
        'dmg': 0xc,
        'exp': 0x78
      },
      'mosquito': {
        'dmg': 0xc,
        'exp': 0x8c
      },
      'ladybug': {
        'dmg': 0x32,
        'exp': 0x41
      }
    }
  },
  'wasp': {
    'eats': {
      'beehive': {
        'dmg': 0x0,
        'exp': 0xf
      },
      'flower_1_face_on_red': {
        'dmg': 0x0,
        'exp': 0xa
      },
      'cherry': {
        'dmg': 0x14,
        'exp': 0x46
      },
      'currant': {
        'dmg': 0x64,
        'exp': 0x19
      },
      'strawberry': {
        'dmg': 0x64,
        'exp': 0x1e
      },
      'blueBird': {
        'dmg': 0xa,
        'exp': 0xe1
      },
      'hen': {
        'dmg': 0xa,
        'exp': 0xfa
      },
      'pigeon': {
        'dmg': 0xa,
        'exp': 0xc8
      },
      'woodpecker': {
        'dmg': 0xa,
        'exp': 0x64
      }
    }
  },
  'hornet': {
    'eats': {
      'cherry': {
        'dmg': 0x23,
        'exp': 0x32
      },
      'currant': {
        'dmg': 0x64,
        'exp': 0xa
      },
      'strawberry': {
        'dmg': 0x64,
        'exp': 0xf
      },
      'blueBird': {
        'dmg': 0x19,
        'exp': 0xfa
      },
      'hen': {
        'dmg': 0x19,
        'exp': 0x12c
      },
      'parrot': {
        'dmg': 0x19,
        'exp': 0xfa
      },
      'stork': {
        'dmg': 0x19,
        'exp': 0xfa
      },
      'pigeon': {
        'dmg': 0x19,
        'exp': 0xc8
      },
      'woodpecker': {
        'dmg': 0x19,
        'exp': 0x64
      },
      'wasp': {
        'dmg': 0x19,
        'exp': 0x64
      },
      'redBird': {
        'dmg': 0x14,
        'exp': 0x12c
      },
      'bat': {
        'dmg': 0x14,
        'exp': 0x190
      },
      'pompadourCotinga': {
        'dmg': 0x10,
        'exp': 0x1c2
      },
      'beehive': {
        'dmg': 0xd,
        'exp': 0x320
      },
      'evilBat': {
        'dmg': 0x14,
        'exp': 0x96
      }
    }
  },
  'pigeon': {
    'eats': {
      'seed': {
        'dmg': 0x14,
        'exp': 0x19
      },
      'bread': {
        'dmg': 0xf,
        'exp': 0x37
      },
      'worm': {
        'dmg': 0x19,
        'exp': 0x64
      }
    }
  },
  'hen': {
    'eats': {
      'seed': {
        'dmg': 0x14,
        'exp': 0x19
      },
      'bread': {
        'dmg': 0xf,
        'exp': 0x37
      },
      'worm': {
        'dmg': 0x19,
        'exp': 0x64
      }
    }
  },
  'duck': {
    'eats': {
      'seed': {
        'dmg': 0x14,
        'exp': 0x23
      },
      'bread': {
        'dmg': 0xf,
        'exp': 0x37
      },
      'fishPink': {
        'dmg': 0xf,
        'exp': 0x96
      },
      'worm': {
        'dmg': 0x1e,
        'exp': 0x78
      }
    }
  },
  'parrot': {
    'eats': {
      'seed': {
        'dmg': 0x14,
        'exp': 0x14
      },
      'bread': {
        'dmg': 0xf,
        'exp': 0x23
      },
      'cherry': {
        'dmg': 0xf,
        'exp': 0x32
      },
      'currant': {
        'dmg': 0x64,
        'exp': 0xa
      },
      'strawberry': {
        'dmg': 0x64,
        'exp': 0xf
      },
      'worm': {
        'dmg': 0x1e,
        'exp': 0x64
      },
      'starFruit': {
        'dmg': 0xf,
        'exp': 0x96
      }
    }
  },
  'turkey': {
    'eats': {
      'seed': {
        'dmg': 0x23,
        'exp': 0x1e
      },
      'cherry': {
        'dmg': 0x23,
        'exp': 0x32
      },
      'currant': {
        'dmg': 0x64,
        'exp': 0xa
      },
      'strawberry': {
        'dmg': 0x64,
        'exp': 0xf
      },
      'worm': {
        'dmg': 0x23,
        'exp': 0x64
      },
      'dragonfly': {
        'dmg': 0x23,
        'exp': 0x96
      },
      'wasp': {
        'dmg': 0x23,
        'exp': 0x96
      },
      'snake': {
        'dmg': 0xf,
        'exp': 0x7d
      },
      'egg': {
        'dmg': 0x64,
        'exp': 0x32
      }
    }
  },
  'blueBird': {
    'eats': {
      'fly': {
        'dmg': 0x2d,
        'exp': 0x1e
      },
      'cherry': {
        'dmg': 0x19,
        'exp': 0x28
      },
      'currant': {
        'dmg': 0x64,
        'exp': 0xa
      },
      'strawberry': {
        'dmg': 0x64,
        'exp': 0xf
      },
      'seed': {
        'dmg': 0x32,
        'exp': 0x14
      },
      'bread': {
        'dmg': 0x14,
        'exp': 0x2d
      },
      'worm': {
        'dmg': 0x23,
        'exp': 0x64
      },
      'egg': {
        'dmg': 0x32,
        'exp': 0x32
      }
    }
  },
  'redBird': {
    'eats': {
      'mosquito': {
        'dmg': 0x19,
        'exp': 0x96
      },
      'butterfly': {
        'dmg': 0x2d,
        'exp': 0x64
      },
      'fly': {
        'dmg': 0x2d,
        'exp': 0x32
      },
      'cherry': {
        'dmg': 0x23,
        'exp': 0x1e
      },
      'currant': {
        'dmg': 0x64,
        'exp': 0xa
      },
      'strawberry': {
        'dmg': 0x64,
        'exp': 0xf
      },
      'seed': {
        'dmg': 0x64,
        'exp': 0xf
      },
      'bread': {
        'dmg': 0x19,
        'exp': 0x2d
      },
      'worm': {
        'dmg': 0x23,
        'exp': 0x64
      },
      'egg': {
        'dmg': 0x32,
        'exp': 0x32
      }
    }
  },
  'pelican': {
    'eats': {
      'fishPink': {
        'dmg': 0x23,
        'exp': 0x8c
      },
      'frog': {
        'dmg': 0x14,
        'exp': 0xc8
      },
      'crab': {
        'dmg': 0xa,
        'exp': 0x1f4
      }
    }
  },
  'seagull': {
    'eats': {
      'fishPink': {
        'dmg': 0x19,
        'exp': 0x4b
      },
      'starfish': {
        'dmg': 0x23,
        'exp': 0x96
      },
      'crab': {
        'dmg': 0xa,
        'exp': 0x1f4
      }
    }
  },
  'stork': {
    'eats': {
      'frog': {
        'dmg': 0x23,
        'exp': 0x3c
      },
      'worm': {
        'dmg': 0x2d,
        'exp': 0x4b
      },
      'fishPink': {
        'dmg': 0x19,
        'exp': 0x23
      }
    }
  },
  'vulture': {
    'eats': {
      'deadFish': {
        'dmg': 0x28,
        'exp': 0xc8
      }
    }
  },
  'bat': {
    'eats': {
      'mouse': {
        'dmg': 0x19,
        'exp': 0x87
      },
      'evilRat': {
        'dmg': 0x11,
        'exp': 0x12c
      }
    }
  },
  'madBat': {
    'eats': {
      'mouse': {
        'dmg': 0x32,
        'exp': 0x64
      },
      'pigeon': {
        'dmg': 0x1e,
        'exp': 0x12c
      },
      'woodpecker': {
        'dmg': 0x1e,
        'exp': 0xaf
      },
      'duck': {
        'dmg': 0x1e,
        'exp': 0x190
      },
      'parrot': {
        'dmg': 0x1e,
        'exp': 0x190
      },
      'stork': {
        'dmg': 0x1e,
        'exp': 0x1c2
      },
      'blueBird': {
        'dmg': 0x1e,
        'exp': 0x1f4
      },
      'hen': {
        'dmg': 0x1e,
        'exp': 0x20d
      },
      'redBird': {
        'dmg': 0x1e,
        'exp': 0x226
      },
      'pelican': {
        'dmg': 0x1e,
        'exp': 0x258
      },
      'seagull': {
        'dmg': 0x1e,
        'exp': 0x2bc
      },
      'turkey': {
        'dmg': 0x1e,
        'exp': 0x28a
      },
      'commonBlackbird': {
        'dmg': 0x1e,
        'exp': 0x2bc
      },
      'owl': {
        'dmg': 0x19,
        'exp': 0x320
      },
      'pompadourCotinga': {
        'dmg': 0x1e,
        'exp': 0x320
      },
      'falcon': {
        'dmg': 0x19,
        'exp': 0x320
      },
      'eagle': {
        'dmg': 0x14,
        'exp': 0x4b0
      },
      'snowyOwl': {
        'dmg': 0xf,
        'exp': 0x5dc
      },
      'pig': {
        'dmg': 0x28,
        'exp': 0xc8
      },
      'cat': {
        'dmg': 0x28,
        'exp': 0x96
      },
      'snake': {
        'dmg': 0x2d,
        'exp': 0xc8
      },
      'meat': {
        'dmg': 0x1e,
        'exp': 0x190
      },
      'penguin': {
        'dmg': 0x1e,
        'exp': 0x190
      },
      'egg': {
        'dmg': 0x64,
        'exp': 0x64
      },
      'evilRat': {
        'dmg': 0x14,
        'exp': 0x320
      }
    }
  },
  'pterodactylChild': {
    'eats': {
      'starFruit': {
        'dmg': 0x32,
        'exp': 0x4b0
      },
      'crocodile': {
        'dmg': 0x14,
        'exp': 0x960
      },
      'crab': {
        'dmg': 0x19,
        'exp': 0x578
      },
      'turtle': {
        'dmg': 0x19,
        'exp': 0x578
      },
      'shark': {
        'dmg': 0x14,
        'exp': 0x960
      }
    }
  },
  'pterodactyl': {
    'eats': {
      'pigeon': {
        'dmg': 0x2d,
        'exp': 0x1f4
      },
      'woodpecker': {
        'dmg': 0x2d,
        'exp': 0x12c
      },
      'duck': {
        'dmg': 0x2d,
        'exp': 0x258
      },
      'parrot': {
        'dmg': 0x2d,
        'exp': 0x258
      },
      'stork': {
        'dmg': 0x2d,
        'exp': 0x28a
      },
      'blueBird': {
        'dmg': 0x2d,
        'exp': 0x2bc
      },
      'hen': {
        'dmg': 0x2d,
        'exp': 0x2d5
      },
      'redBird': {
        'dmg': 0x2d,
        'exp': 0x2ee
      },
      'pelican': {
        'dmg': 0x2d,
        'exp': 0x320
      },
      'seagull': {
        'dmg': 0x28,
        'exp': 0x2bc
      },
      'turkey': {
        'dmg': 0x2d,
        'exp': 0x320
      },
      'vulture': {
        'dmg': 0x2d,
        'exp': 0x320
      },
      'bat': {
        'dmg': 0x2d,
        'exp': 0x352
      },
      'commonBlackbird': {
        'dmg': 0x2d,
        'exp': 0x3e8
      },
      'pompadourCotinga': {
        'dmg': 0x2d,
        'exp': 0x5dc
      },
      'falcon': {
        'dmg': 0x28,
        'exp': 0x708
      },
      'owl': {
        'dmg': 0x28,
        'exp': 0x578
      },
      'eagle': {
        'dmg': 0x28,
        'exp': 0x9c4
      },
      'snowyOwl': {
        'dmg': 0x23,
        'exp': 0xaf0
      },
      'hawk': {
        'dmg': 0x28,
        'exp': 0xbb8
      },
      'raven': {
        'dmg': 0x28,
        'exp': 0xfa0
      },
      'madBat': {
        'dmg': 0x23,
        'exp': 0x1194
      },
      'pig': {
        'dmg': 0x32,
        'exp': 0x190
      },
      'cat': {
        'dmg': 0x32,
        'exp': 0x12c
      },
      'crab': {
        'dmg': 0x32,
        'exp': 0x12c
      },
      'turtle': {
        'dmg': 0x28,
        'exp': 0x12c
      },
      'snake': {
        'dmg': 0x2d,
        'exp': 0x12c
      },
      'meat': {
        'dmg': 0x64,
        'exp': 0x1f4
      },
      'penguin': {
        'dmg': 0x1e,
        'exp': 0x190
      },
      'crocodile': {
        'dmg': 0x19,
        'exp': 0x320
      },
      'mammoth': {
        'dmg': 0x14,
        'exp': 0x514
      },
      'shark': {
        'dmg': 0x14,
        'exp': 0x3e8
      },
      'piranha': {
        'dmg': 0x23,
        'exp': 0x1f4
      }
    }
  },
  'demonicBat': {
    'eats': {
      'pigeon': {
        'dmg': 0x19,
        'exp': 0x1f4
      },
      'woodpecker': {
        'dmg': 0x19,
        'exp': 0x190
      },
      'duck': {
        'dmg': 0x19,
        'exp': 0x258
      },
      'parrot': {
        'dmg': 0x19,
        'exp': 0x258
      },
      'stork': {
        'dmg': 0x19,
        'exp': 0x28a
      },
      'blueBird': {
        'dmg': 0x19,
        'exp': 0x2bc
      },
      'hen': {
        'dmg': 0x19,
        'exp': 0x2d5
      },
      'redBird': {
        'dmg': 0x19,
        'exp': 0x2ee
      },
      'pelican': {
        'dmg': 0x19,
        'exp': 0x320
      },
      'seagull': {
        'dmg': 0x14,
        'exp': 0x2bc
      },
      'turkey': {
        'dmg': 0x19,
        'exp': 0x320
      },
      'vulture': {
        'dmg': 0x19,
        'exp': 0x320
      },
      'bat': {
        'dmg': 0x19,
        'exp': 0x352
      },
      'commonBlackbird': {
        'dmg': 0x19,
        'exp': 0x3e8
      },
      'pompadourCotinga': {
        'dmg': 0x19,
        'exp': 0x5dc
      },
      'falcon': {
        'dmg': 0x14,
        'exp': 0x708
      },
      'owl': {
        'dmg': 0x14,
        'exp': 0x578
      },
      'eagle': {
        'dmg': 0x14,
        'exp': 0x9c4
      },
      'snowyOwl': {
        'dmg': 0x14,
        'exp': 0xaf0
      },
      'hawk': {
        'dmg': 0x14,
        'exp': 0xbb8
      },
      'raven': {
        'dmg': 0x14,
        'exp': 0xfa0
      },
      'madBat': {
        'dmg': 0xf,
        'exp': 0x1194
      },
      'eggRed': {
        'dmg': 0x32,
        'exp': 0x3e8
      }
    }
  },
  'stoneEater': {
    'eats': {
      'stone': {
        'dmg': 0x19,
        'exp': 0xfa0
      },
      'stoneEater': {
        'dmg': 0x19,
        'exp': 0x2710
      }
    }
  },
  'demonicEggEater': {
    'eats': {
      'eggRed': {
        'dmg': 0x19,
        'exp': 0x7d0
      }
    }
  },
  'commonBlackbird': {
    'eats': {
      'butterfly': {
        'dmg': 0x28,
        'exp': 0x64
      },
      'fly': {
        'dmg': 0x28,
        'exp': 0x32
      },
      'mosquito': {
        'dmg': 0x28,
        'exp': 0xc8
      },
      'wasp': {
        'dmg': 0x1e,
        'exp': 0x12c
      },
      'cherry': {
        'dmg': 0x32,
        'exp': 0x1e
      },
      'currant': {
        'dmg': 0x64,
        'exp': 0xa
      },
      'strawberry': {
        'dmg': 0x64,
        'exp': 0xf
      },
      'seed': {
        'dmg': 0x64,
        'exp': 0xf
      },
      'bread': {
        'dmg': 0x23,
        'exp': 0x2d
      },
      'worm': {
        'dmg': 0x23,
        'exp': 0x64
      },
      'egg': {
        'dmg': 0x64,
        'exp': 0x32
      }
    }
  },
  'pompadourCotinga': {
    'eats': {
      'butterfly': {
        'dmg': 0x28,
        'exp': 0x96
      },
      'fly': {
        'dmg': 0x2d,
        'exp': 0x50
      },
      'pigeon': {
        'dmg': 0x1e,
        'exp': 0x15e
      },
      'woodpecker': {
        'dmg': 0x1e,
        'exp': 0x12c
      },
      'mosquito': {
        'dmg': 0x28,
        'exp': 0xc8
      },
      'wasp': {
        'dmg': 0x1e,
        'exp': 0xfa
      },
      'cherry': {
        'dmg': 0x32,
        'exp': 0x32
      },
      'currant': {
        'dmg': 0x64,
        'exp': 0x14
      },
      'strawberry': {
        'dmg': 0x64,
        'exp': 0x1e
      },
      'seed': {
        'dmg': 0x64,
        'exp': 0x1e
      },
      'dragonfly': {
        'dmg': 0x1e,
        'exp': 0xfa
      },
      'worm': {
        'dmg': 0x2d,
        'exp': 0x64
      },
      'egg': {
        'dmg': 0x64,
        'exp': 0x32
      },
      'hornet': {
        'dmg': 0x16,
        'exp': 0x1f4
      }
    }
  },
  'falcon': {
    'eats': {
      'pigeon': {
        'dmg': 0x23,
        'exp': 0x15e
      },
      'woodpecker': {
        'dmg': 0x23,
        'exp': 0x12c
      },
      'duck': {
        'dmg': 0x23,
        'exp': 0x190
      },
      'parrot': {
        'dmg': 0x23,
        'exp': 0x190
      },
      'blueBird': {
        'dmg': 0x1e,
        'exp': 0x1c2
      },
      'hen': {
        'dmg': 0x1e,
        'exp': 0x1f4
      },
      'mouse': {
        'dmg': 0x23,
        'exp': 0x96
      },
      'frog': {
        'dmg': 0x23,
        'exp': 0x96
      },
      'meat': {
        'dmg': 0x19,
        'exp': 0xfa
      },
      'egg': {
        'dmg': 0x64,
        'exp': 0x64
      },
      'evilBat': {
        'dmg': 0x1e,
        'exp': 0xc8
      }
    }
  },
  'owl': {
    'eats': {
      'pigeon': {
        'dmg': 0x1e,
        'exp': 0x15e
      },
      'woodpecker': {
        'dmg': 0x1e,
        'exp': 0x12c
      },
      'duck': {
        'dmg': 0x1e,
        'exp': 0x190
      },
      'parrot': {
        'dmg': 0x1e,
        'exp': 0x190
      },
      'mouse': {
        'dmg': 0x23,
        'exp': 0x96
      },
      'worm': {
        'dmg': 0x2d,
        'exp': 0x50
      },
      'frog': {
        'dmg': 0x23,
        'exp': 0x96
      },
      'egg': {
        'dmg': 0x64,
        'exp': 0x64
      }
    }
  },
  'snowyOwl': {
    'eats': {
      'penguin': {
        'dmg': 0x1e,
        'exp': 0x1f4
      },
      'lemming': {
        'dmg': 0x23,
        'exp': 0xfa
      }
    }
  },
  'eagle': {
    'eats': {
      'bat': {
        'dmg': 0x28,
        'exp': 0xc8
      },
      'blueBird': {
        'dmg': 0x23,
        'exp': 0x1f4
      },
      'hen': {
        'dmg': 0x23,
        'exp': 0x226
      },
      'redBird': {
        'dmg': 0x1e,
        'exp': 0x258
      },
      'pigeon': {
        'dmg': 0x23,
        'exp': 0x190
      },
      'woodpecker': {
        'dmg': 0x23,
        'exp': 0x12c
      },
      'duck': {
        'dmg': 0x23,
        'exp': 0x1c2
      },
      'parrot': {
        'dmg': 0x23,
        'exp': 0x1c2
      },
      'stork': {
        'dmg': 0x1e,
        'exp': 0x1f4
      },
      'seagull': {
        'dmg': 0x1e,
        'exp': 0x1f4
      },
      'cat': {
        'dmg': 0x3c,
        'exp': 0xc8
      },
      'meat': {
        'dmg': 0x23,
        'exp': 0x12c
      },
      'penguin': {
        'dmg': 0x1e,
        'exp': 0x190
      },
      'egg': {
        'dmg': 0x64,
        'exp': 0x64
      },
      'evilBat': {
        'dmg': 0x23,
        'exp': 0xc8
      }
    }
  },
  'hawk': {
    'eats': {
      'blueBird': {
        'dmg': 0x23,
        'exp': 0xc8
      },
      'hen': {
        'dmg': 0x23,
        'exp': 0xe1
      },
      'redBird': {
        'dmg': 0x23,
        'exp': 0xfa
      },
      'bat': {
        'dmg': 0x23,
        'exp': 0x15e
      },
      'pigeon': {
        'dmg': 0x23,
        'exp': 0xc8
      },
      'woodpecker': {
        'dmg': 0x23,
        'exp': 0xc8
      },
      'duck': {
        'dmg': 0x23,
        'exp': 0xd2
      },
      'parrot': {
        'dmg': 0x23,
        'exp': 0xdc
      },
      'stork': {
        'dmg': 0x23,
        'exp': 0xfa
      },
      'pig': {
        'dmg': 0x1e,
        'exp': 0xc8
      },
      'pelican': {
        'dmg': 0x1e,
        'exp': 0x12c
      },
      'seagull': {
        'dmg': 0x1e,
        'exp': 0x1f4
      },
      'commonBlackbird': {
        'dmg': 0x1e,
        'exp': 0x258
      },
      'turkey': {
        'dmg': 0x1e,
        'exp': 0x190
      },
      'cat': {
        'dmg': 0x3c,
        'exp': 0x96
      },
      'meat': {
        'dmg': 0x23,
        'exp': 0x15e
      },
      'penguin': {
        'dmg': 0x1e,
        'exp': 0x190
      },
      'egg': {
        'dmg': 0x64,
        'exp': 0x64
      },
      'evilBat': {
        'dmg': 0x28,
        'exp': 0xfa
      }
    }
  },
  'raven': {
    'eats': {
      'blueBird': {
        'dmg': 0x2d,
        'exp': 0xc8
      },
      'hen': {
        'dmg': 0x2d,
        'exp': 0xe1
      },
      'pigeon': {
        'dmg': 0x2d,
        'exp': 0x96
      },
      'woodpecker': {
        'dmg': 0x2d,
        'exp': 0x96
      },
      'duck': {
        'dmg': 0x2d,
        'exp': 0xd2
      },
      'parrot': {
        'dmg': 0x2d,
        'exp': 0xdc
      },
      'redBird': {
        'dmg': 0x2d,
        'exp': 0x140
      },
      'deadFish': {
        'dmg': 0x50,
        'exp': 0x64
      },
      'snake': {
        'dmg': 0x19,
        'exp': 0xc8
      },
      'worm': {
        'dmg': 0x50,
        'exp': 0x64
      },
      'frog': {
        'dmg': 0x23,
        'exp': 0x64
      },
      'meat': {
        'dmg': 0x23,
        'exp': 0x12c
      },
      'penguin': {
        'dmg': 0x1e,
        'exp': 0x190
      },
      'egg': {
        'dmg': 0x64,
        'exp': 0x64
      }
    }
  },
  'alienBug': {
    'eats': {
      'cosmicPlant': {
        'dmg': 0x0,
        'exp': 0xc8
      },
      'cosmicEgg': {
        'dmg': 0x11,
        'exp': 0xdac
      }
    }
  },
  'alienBigEye': {
    'eats': {
      'alienFruit1': {
        'dmg': 0x3,
        'exp': 0x1388
      },
      'alienFruit2': {
        'dmg': 0x8,
        'exp': 0x7d0
      },
      'alienFruit3': {
        'dmg': 0xc,
        'exp': 0x3e8
      },
      'cherry': {
        'dmg': 0x64,
        'exp': 0x96
      },
      'currant': {
        'dmg': 0x64,
        'exp': 0x14
      },
      'strawberry': {
        'dmg': 0x64,
        'exp': 0x1e
      },
      'starFruit': {
        'dmg': 0x64,
        'exp': 0xfa
      }
    }
  },
  'alienAngryEye': {
    'eats': {
      'cosmicEgg': {
        'dmg': 0x23,
        'exp': 0x1f4
      },
      'alienEye': {
        'dmg': 0x19,
        'exp': 0x3e8
      },
      'alienBigInsect': {
        'dmg': 0xf,
        'exp': 0x1b58
      },
      'alienBug': {
        'dmg': 0x1e,
        'exp': 0x1388
      },
      'alienBigEye': {
        'dmg': 0x19,
        'exp': 0x1964
      }
    }
  },
  'alienBat': {
    'eats': {
      'cosmicEgg': {
        'dmg': 0x32,
        'exp': 0x2ee
      },
      'alienEye': {
        'dmg': 0x28,
        'exp': 0x5dc
      },
      'pigeon': {
        'dmg': 0x2d,
        'exp': 0x1f4
      },
      'woodpecker': {
        'dmg': 0x2d,
        'exp': 0x190
      },
      'duck': {
        'dmg': 0x2d,
        'exp': 0x258
      },
      'parrot': {
        'dmg': 0x2d,
        'exp': 0x258
      },
      'stork': {
        'dmg': 0x2d,
        'exp': 0x28a
      },
      'blueBird': {
        'dmg': 0x2d,
        'exp': 0x2bc
      },
      'hen': {
        'dmg': 0x2d,
        'exp': 0x2d5
      },
      'redBird': {
        'dmg': 0x2d,
        'exp': 0x2ee
      },
      'pelican': {
        'dmg': 0x2d,
        'exp': 0x320
      },
      'seagull': {
        'dmg': 0x28,
        'exp': 0x384
      },
      'turkey': {
        'dmg': 0x2d,
        'exp': 0x320
      },
      'vulture': {
        'dmg': 0x2d,
        'exp': 0x320
      },
      'bat': {
        'dmg': 0x2d,
        'exp': 0x352
      },
      'commonBlackbird': {
        'dmg': 0x2d,
        'exp': 0x3e8
      },
      'pompadourCotinga': {
        'dmg': 0x2d,
        'exp': 0x5dc
      },
      'falcon': {
        'dmg': 0x2d,
        'exp': 0x708
      },
      'owl': {
        'dmg': 0x2d,
        'exp': 0x578
      },
      'snowyOwl': {
        'dmg': 0x2d,
        'exp': 0x9c4
      },
      'eagle': {
        'dmg': 0x2d,
        'exp': 0x9c4
      },
      'hawk': {
        'dmg': 0x2d,
        'exp': 0xbb8
      },
      'raven': {
        'dmg': 0x2d,
        'exp': 0xfa0
      },
      'madBat': {
        'dmg': 0x23,
        'exp': 0x1194
      },
      'pig': {
        'dmg': 0x50,
        'exp': 0x1f4
      },
      'cat': {
        'dmg': 0x50,
        'exp': 0x15e
      },
      'crab': {
        'dmg': 0x50,
        'exp': 0x15e
      },
      'turtle': {
        'dmg': 0x28,
        'exp': 0x15e
      },
      'snake': {
        'dmg': 0x2d,
        'exp': 0x190
      },
      'alienBug': {
        'dmg': 0x23,
        'exp': 0x1f40
      },
      'alienBigEye': {
        'dmg': 0x19,
        'exp': 0x2328
      },
      'alienAngryEye': {
        'dmg': 0x11,
        'exp': 0x2af8
      },
      'pterodactylChild': {
        'dmg': 0x23,
        'exp': 0x1770
      },
      'pterodactyl': {
        'dmg': 0xf,
        'exp': 0x1b58
      },
      'meat': {
        'dmg': 0x37,
        'exp': 0x190
      },
      'penguin': {
        'dmg': 0x3c,
        'exp': 0x190
      },
      'demonicBat': {
        'dmg': 0xf,
        'exp': 0x2710
      },
      'demonicImp': {
        'dmg': 0xf,
        'exp': 0x32c8
      },
      'alienBigInsect': {
        'dmg': 0x19,
        'exp': 0x1388
      },
      'swampMonster': {
        'dmg': 0x14,
        'exp': 0x1f40
      },
      'dragon': {
        'dmg': 0x14,
        'exp': 0x36b0
      },
      'egg': {
        'dmg': 0x64,
        'exp': 0x64
      },
      'evilRat': {
        'dmg': 0x1e,
        'exp': 0x3e8
      }
    }
  },
  'demonicImp': {
    'eats': {
      'pigeon': {
        'dmg': 0xf,
        'exp': 0x1f4
      },
      'woodpecker': {
        'dmg': 0xf,
        'exp': 0x190
      },
      'duck': {
        'dmg': 0xf,
        'exp': 0x258
      },
      'parrot': {
        'dmg': 0xf,
        'exp': 0x258
      },
      'stork': {
        'dmg': 0xc,
        'exp': 0x28a
      },
      'blueBird': {
        'dmg': 0xf,
        'exp': 0x2bc
      },
      'hen': {
        'dmg': 0xf,
        'exp': 0x2d5
      },
      'redBird': {
        'dmg': 0xf,
        'exp': 0x2ee
      },
      'pelican': {
        'dmg': 0xc,
        'exp': 0x320
      },
      'seagull': {
        'dmg': 0xc,
        'exp': 0x384
      },
      'turkey': {
        'dmg': 0xc,
        'exp': 0x320
      },
      'vulture': {
        'dmg': 0xc,
        'exp': 0x320
      },
      'bat': {
        'dmg': 0xc,
        'exp': 0x352
      },
      'commonBlackbird': {
        'dmg': 0xc,
        'exp': 0x3e8
      },
      'pompadourCotinga': {
        'dmg': 0xc,
        'exp': 0x5dc
      },
      'falcon': {
        'dmg': 0xa,
        'exp': 0x708
      },
      'owl': {
        'dmg': 0xa,
        'exp': 0x578
      },
      'snowyOwl': {
        'dmg': 0xa,
        'exp': 0x9c4
      },
      'eagle': {
        'dmg': 0xa,
        'exp': 0x9c4
      },
      'hawk': {
        'dmg': 0xa,
        'exp': 0xbb8
      },
      'raven': {
        'dmg': 0xa,
        'exp': 0xfa0
      },
      'madBat': {
        'dmg': 0xa,
        'exp': 0x1194
      },
      'pterodactylChild': {
        'dmg': 0xa,
        'exp': 0x1770
      },
      'pterodactyl': {
        'dmg': 0xa,
        'exp': 0x1b58
      },
      'swampMonster': {
        'dmg': 0xa,
        'exp': 0x1f40
      },
      'yeti': {
        'dmg': 0x5,
        'exp': 0xfa0
      },
      'blackWidow': {
        'dmg': 0x5,
        'exp': 0xfa0
      },
      'mummy': {
        'dmg': 0x5,
        'exp': 0xfa0
      },
      'giantRat': {
        'dmg': 0x5,
        'exp': 0xfa0
      }
    }
  },
  'dragon': {
    'eats': {
      'pigeon': {
        'dmg': 0x19,
        'exp': 0x1f4
      },
      'woodpecker': {
        'dmg': 0x19,
        'exp': 0x190
      },
      'duck': {
        'dmg': 0x19,
        'exp': 0x258
      },
      'parrot': {
        'dmg': 0x19,
        'exp': 0x258
      },
      'stork': {
        'dmg': 0x14,
        'exp': 0x28a
      },
      'blueBird': {
        'dmg': 0x14,
        'exp': 0x2bc
      },
      'hen': {
        'dmg': 0x14,
        'exp': 0x2d5
      },
      'redBird': {
        'dmg': 0x14,
        'exp': 0x2ee
      },
      'pelican': {
        'dmg': 0x14,
        'exp': 0x320
      },
      'seagull': {
        'dmg': 0x14,
        'exp': 0x384
      },
      'turkey': {
        'dmg': 0x14,
        'exp': 0x320
      },
      'vulture': {
        'dmg': 0x14,
        'exp': 0x320
      },
      'bat': {
        'dmg': 0x14,
        'exp': 0x352
      },
      'commonBlackbird': {
        'dmg': 0x14,
        'exp': 0x3e8
      },
      'pompadourCotinga': {
        'dmg': 0x14,
        'exp': 0x5dc
      },
      'falcon': {
        'dmg': 0x11,
        'exp': 0x708
      },
      'owl': {
        'dmg': 0x11,
        'exp': 0x578
      },
      'snowyOwl': {
        'dmg': 0x11,
        'exp': 0x9c4
      },
      'eagle': {
        'dmg': 0x11,
        'exp': 0x9c4
      },
      'hawk': {
        'dmg': 0x11,
        'exp': 0xbb8
      },
      'raven': {
        'dmg': 0x11,
        'exp': 0xfa0
      },
      'madBat': {
        'dmg': 0xf,
        'exp': 0x1194
      },
      'pig': {
        'dmg': 0x1e,
        'exp': 0x1f4
      },
      'cat': {
        'dmg': 0x1e,
        'exp': 0x15e
      },
      'crab': {
        'dmg': 0x1e,
        'exp': 0x190
      },
      'turtle': {
        'dmg': 0x1e,
        'exp': 0x190
      },
      'snake': {
        'dmg': 0x1e,
        'exp': 0x190
      },
      'pterodactylChild': {
        'dmg': 0x11,
        'exp': 0x1770
      },
      'pterodactyl': {
        'dmg': 0xd,
        'exp': 0x1b58
      },
      'meat': {
        'dmg': 0x2d,
        'exp': 0x190
      },
      'penguin': {
        'dmg': 0x2d,
        'exp': 0x190
      },
      'mammoth': {
        'dmg': 0xc,
        'exp': 0x1c2
      },
      'swampMonster': {
        'dmg': 0xf,
        'exp': 0x1f40
      },
      'egg': {
        'dmg': 0x64,
        'exp': 0x64
      },
      'evilBat': {
        'dmg': 0x1e,
        'exp': 0xc8
      }
    }
  },
  'phoenix': {
    'eats': {
      'pigeon': {
        'dmg': 0x8,
        'exp': 0x1f4
      },
      'woodpecker': {
        'dmg': 0x8,
        'exp': 0x190
      },
      'duck': {
        'dmg': 0x8,
        'exp': 0x258
      },
      'parrot': {
        'dmg': 0x8,
        'exp': 0x258
      },
      'stork': {
        'dmg': 0x8,
        'exp': 0x28a
      },
      'blueBird': {
        'dmg': 0x8,
        'exp': 0x2bc
      },
      'hen': {
        'dmg': 0x8,
        'exp': 0x2d5
      },
      'redBird': {
        'dmg': 0x8,
        'exp': 0x2ee
      },
      'pelican': {
        'dmg': 0x8,
        'exp': 0x320
      },
      'seagull': {
        'dmg': 0x8,
        'exp': 0x384
      },
      'turkey': {
        'dmg': 0x8,
        'exp': 0x320
      },
      'vulture': {
        'dmg': 0x8,
        'exp': 0x320
      },
      'bat': {
        'dmg': 0x8,
        'exp': 0x352
      },
      'commonBlackbird': {
        'dmg': 0x8,
        'exp': 0x3e8
      },
      'pompadourCotinga': {
        'dmg': 0x8,
        'exp': 0x5dc
      },
      'falcon': {
        'dmg': 0x8,
        'exp': 0x708
      },
      'owl': {
        'dmg': 0x8,
        'exp': 0x578
      },
      'snowyOwl': {
        'dmg': 0x8,
        'exp': 0x9c4
      },
      'eagle': {
        'dmg': 0x8,
        'exp': 0x9c4
      },
      'hawk': {
        'dmg': 0x8,
        'exp': 0xbb8
      },
      'raven': {
        'dmg': 0x8,
        'exp': 0xfa0
      },
      'madBat': {
        'dmg': 0x8,
        'exp': 0x1194
      },
      'pterodactylChild': {
        'dmg': 0x8,
        'exp': 0x1770
      },
      'pterodactyl': {
        'dmg': 0x8,
        'exp': 0x1b58
      },
      'swampMonster': {
        'dmg': 0x8,
        'exp': 0x1f40
      },
      'yeti': {
        'dmg': 0x8,
        'exp': 0xfa0
      },
      'blackWidow': {
        'dmg': 0x8,
        'exp': 0xfa0
      },
      'mummy': {
        'dmg': 0x8,
        'exp': 0xfa0
      },
      'crocodile': {
        'dmg': 0xc,
        'exp': 0x15e
      },
      'tyrannosaurus': {
        'dmg': 0xc,
        'exp': 0x190
      },
      'mammoth': {
        'dmg': 0xc,
        'exp': 0x1c2
      },
      'pig': {
        'dmg': 0x14,
        'exp': 0xfa
      },
      'cat': {
        'dmg': 0x14,
        'exp': 0xfa
      },
      'crab': {
        'dmg': 0x14,
        'exp': 0x12c
      },
      'turtle': {
        'dmg': 0x14,
        'exp': 0x12c
      },
      'penguin': {
        'dmg': 0x14,
        'exp': 0x12c
      },
      'snake': {
        'dmg': 0x14,
        'exp': 0x12c
      },
      'evilBat': {
        'dmg': 0x1e,
        'exp': 0xc8
      }
    }
  },
  'swampMonster': {
    'eats': {
      'pigeon': {
        'dmg': 0xa,
        'exp': 0x5dc
      },
      'woodpecker': {
        'dmg': 0xa,
        'exp': 0x2bc
      },
      'duck': {
        'dmg': 0xa,
        'exp': 0x640
      },
      'parrot': {
        'dmg': 0xa,
        'exp': 0x640
      },
      'stork': {
        'dmg': 0xa,
        'exp': 0x672
      },
      'blueBird': {
        'dmg': 0xa,
        'exp': 0x6a4
      },
      'hen': {
        'dmg': 0xa,
        'exp': 0x6bd
      },
      'redBird': {
        'dmg': 0xa,
        'exp': 0x6d6
      },
      'pelican': {
        'dmg': 0xa,
        'exp': 0x708
      },
      'seagull': {
        'dmg': 0xa,
        'exp': 0x76c
      },
      'turkey': {
        'dmg': 0x7,
        'exp': 0x708
      },
      'vulture': {
        'dmg': 0x7,
        'exp': 0x708
      },
      'bat': {
        'dmg': 0x7,
        'exp': 0x73a
      },
      'commonBlackbird': {
        'dmg': 0x7,
        'exp': 0x7d0
      },
      'pompadourCotinga': {
        'dmg': 0x7,
        'exp': 0x9c4
      },
      'falcon': {
        'dmg': 0x7,
        'exp': 0xaf0
      },
      'owl': {
        'dmg': 0x7,
        'exp': 0x960
      },
      'snowyOwl': {
        'dmg': 0x7,
        'exp': 0xdac
      },
      'eagle': {
        'dmg': 0x7,
        'exp': 0xdac
      },
      'hawk': {
        'dmg': 0x7,
        'exp': 0xfa0
      },
      'raven': {
        'dmg': 0x7,
        'exp': 0x1388
      },
      'madBat': {
        'dmg': 0x7,
        'exp': 0x1b58
      },
      'frog': {
        'dmg': 0x32,
        'exp': 0x1f4
      },
      'deadFish': {
        'dmg': 0x32,
        'exp': 0x1f4
      },
      'demonicImp': {
        'dmg': 0x7,
        'exp': 0x3a98
      },
      'poo': {
        'dmg': 0x50,
        'exp': 0xc8
      }
    }
  },
  'overfedAlienBat': {
    'eats': {}
  },
  'ghost': {
    'eats': {
      'zombie': {
        'dmg': 0xa,
        'exp': 0x4e20
      }
    }
  },
  'pumpkinCharacter': {
    'eats': {
      'pumpkin': {
        'dmg': 0x14,
        'exp': 0x2710
      }
    }
  },
  'ghostlyReaper': {
    'eats': {}
  },
  'grimReaper': {
    'eats': {}
  },
  'pumpkinGhost': {
    'eats': {}
  },
  'frog': {
    'eats': {
      'fly': {
        'dmg': 0x1e
      },
      'butterfly': {
        'dmg': 0x1e
      },
      'mosquito': {
        'dmg': 0x1e
      },
      'wasp': {
        'dmg': 0x1e
      },
      'dragonfly': {
        'dmg': 0x1e
      }
    }
  },
  'pig': {
    'eats': {
      'dragonfly': {
        'dmg': 0x1e
      }
    }
  },
  'alienBigInsect': {
    'eats': {
      'fly': {
        'dmg': 0x64
      },
      'butterfly': {
        'dmg': 0x64
      },
      'mosquito': {
        'dmg': 0x64
      },
      'wasp': {
        'dmg': 0x64
      },
      'hornet': {
        'dmg': 0x5a
      },
      'dragonfly': {
        'dmg': 0x64
      },
      'pigeon': {
        'dmg': 0x5f
      },
      'duck': {
        'dmg': 0x5f
      },
      'parrot': {
        'dmg': 0x5f
      },
      'stork': {
        'dmg': 0x5a
      },
      'blueBird': {
        'dmg': 0x5a
      },
      'hen': {
        'dmg': 0x5a
      },
      'redBird': {
        'dmg': 0x5a
      },
      'pelican': {
        'dmg': 0x5a
      },
      'seagull': {
        'dmg': 0x5a
      },
      'turkey': {
        'dmg': 0x5a
      },
      'bat': {
        'dmg': 0x5a
      },
      'vulture': {
        'dmg': 0x5a
      },
      'commonBlackbird': {
        'dmg': 0x5a
      },
      'pompadourCotinga': {
        'dmg': 0x5a
      },
      'falcon': {
        'dmg': 0x55
      },
      'owl': {
        'dmg': 0x55
      },
      'snowyOwl': {
        'dmg': 0x55
      },
      'eagle': {
        'dmg': 0x50
      },
      'hawk': {
        'dmg': 0x50
      },
      'raven': {
        'dmg': 0x50
      },
      'madBat': {
        'dmg': 0x50
      },
      'alienBug': {
        'dmg': 0x3c
      },
      'pterodactylChild': {
        'dmg': 0x3c
      },
      'pterodactyl': {
        'dmg': 0x23
      },
      'demonicBat': {
        'dmg': 0x23
      },
      'swampMonster': {
        'dmg': 0x23
      },
      'dragon': {
        'dmg': 0x23
      },
      'alienAngryEye': {
        'dmg': 0x15
      }
    }
  },
  'evilBat': {
    'eats': {
      'fly': {
        'dmg': 0x14
      },
      'butterfly': {
        'dmg': 0x14
      },
      'mosquito': {
        'dmg': 0x14
      },
      'wasp': {
        'dmg': 0x14
      },
      'dragonfly': {
        'dmg': 0x14
      },
      'duck': {
        'dmg': 0x14
      },
      'parrot': {
        'dmg': 0x14
      },
      'stork': {
        'dmg': 0x14
      },
      'blueBird': {
        'dmg': 0x14
      },
      'pigeon': {
        'dmg': 0x14
      },
      'hen': {
        'dmg': 0x14
      },
      'redBird': {
        'dmg': 0x14
      },
      'pelican': {
        'dmg': 0x14
      },
      'seagull': {
        'dmg': 0x14
      },
      'turkey': {
        'dmg': 0x14
      },
      'commonBlackbird': {
        'dmg': 0x14
      },
      'owl': {
        'dmg': 0x19
      },
      'pompadourCotinga': {
        'dmg': 0x14
      },
      'falcon': {
        'dmg': 0xf
      },
      'hornet': {
        'dmg': 0xf
      },
      'eagle': {
        'dmg': 0xf
      },
      'vulture': {
        'dmg': 0xf
      },
      'snowyOwl': {
        'dmg': 0xf
      },
      'hawk': {
        'dmg': 0xf
      },
      'raven': {
        'dmg': 0xf
      }
    }
  },
  'tyrannosaurus': {
    'eats': {
      'fly': {
        'dmg': 0x64
      },
      'butterfly': {
        'dmg': 0x64
      },
      'mosquito': {
        'dmg': 0x64
      },
      'wasp': {
        'dmg': 0x64
      },
      'hornet': {
        'dmg': 0x5a
      },
      'dragonfly': {
        'dmg': 0x64
      },
      'pigeon': {
        'dmg': 0x63
      },
      'duck': {
        'dmg': 0x63
      },
      'parrot': {
        'dmg': 0x63
      },
      'stork': {
        'dmg': 0x55
      },
      'blueBird': {
        'dmg': 0x55
      },
      'hen': {
        'dmg': 0x55
      },
      'redBird': {
        'dmg': 0x55
      },
      'pelican': {
        'dmg': 0x55
      },
      'seagull': {
        'dmg': 0x55
      },
      'turkey': {
        'dmg': 0x55
      },
      'bat': {
        'dmg': 0x55
      },
      'vulture': {
        'dmg': 0x55
      },
      'commonBlackbird': {
        'dmg': 0x55
      },
      'pompadourCotinga': {
        'dmg': 0x55
      },
      'falcon': {
        'dmg': 0x46
      },
      'owl': {
        'dmg': 0x46
      },
      'snowyOwl': {
        'dmg': 0x46
      },
      'eagle': {
        'dmg': 0x46
      },
      'hawk': {
        'dmg': 0x41
      },
      'raven': {
        'dmg': 0x41
      },
      'madBat': {
        'dmg': 0x3c
      },
      'alienBug': {
        'dmg': 0x3c
      },
      'pterodactylChild': {
        'dmg': 0x2d
      },
      'demonicBat': {
        'dmg': 0x23
      },
      'swampMonster': {
        'dmg': 0x23
      },
      'dragon': {
        'dmg': 0x19
      }
    }
  },
  'mammoth': {
    'eats': {
      'fly': {
        'dmg': 0x64
      },
      'butterfly': {
        'dmg': 0x64
      },
      'mosquito': {
        'dmg': 0x64
      },
      'wasp': {
        'dmg': 0x64
      },
      'hornet': {
        'dmg': 0x5a
      },
      'dragonfly': {
        'dmg': 0x64
      },
      'pigeon': {
        'dmg': 0x63
      },
      'duck': {
        'dmg': 0x63
      },
      'parrot': {
        'dmg': 0x63
      },
      'stork': {
        'dmg': 0x55
      },
      'blueBird': {
        'dmg': 0x55
      },
      'hen': {
        'dmg': 0x55
      },
      'redBird': {
        'dmg': 0x55
      },
      'pelican': {
        'dmg': 0x55
      },
      'seagull': {
        'dmg': 0x55
      },
      'turkey': {
        'dmg': 0x55
      },
      'bat': {
        'dmg': 0x55
      },
      'vulture': {
        'dmg': 0x55
      },
      'commonBlackbird': {
        'dmg': 0x55
      },
      'pompadourCotinga': {
        'dmg': 0x55
      },
      'falcon': {
        'dmg': 0x46
      },
      'owl': {
        'dmg': 0x46
      },
      'snowyOwl': {
        'dmg': 0x46
      },
      'eagle': {
        'dmg': 0x46
      },
      'hawk': {
        'dmg': 0x41
      },
      'raven': {
        'dmg': 0x41
      },
      'madBat': {
        'dmg': 0x3c
      },
      'alienBug': {
        'dmg': 0x3c
      },
      'pterodactylChild': {
        'dmg': 0x2d
      },
      'demonicBat': {
        'dmg': 0x23
      },
      'swampMonster': {
        'dmg': 0x23
      },
      'dragon': {
        'dmg': 0x1e
      },
      'demonicImp': {
        'dmg': 0x1e
      },
      'pterodactyl': {
        'dmg': 0x12
      }
    }
  },
  'smallDemon': {
    'eats': {
      'fly': {
        'dmg': 0x64
      },
      'butterfly': {
        'dmg': 0x64
      },
      'mosquito': {
        'dmg': 0x64
      },
      'wasp': {
        'dmg': 0x64
      },
      'hornet': {
        'dmg': 0x5a
      },
      'dragonfly': {
        'dmg': 0x64
      },
      'pigeon': {
        'dmg': 0x63
      },
      'duck': {
        'dmg': 0x63
      },
      'parrot': {
        'dmg': 0x63
      },
      'stork': {
        'dmg': 0x55
      },
      'blueBird': {
        'dmg': 0x55
      },
      'hen': {
        'dmg': 0x55
      },
      'redBird': {
        'dmg': 0x55
      },
      'pelican': {
        'dmg': 0x55
      },
      'seagull': {
        'dmg': 0x55
      },
      'turkey': {
        'dmg': 0x55
      },
      'bat': {
        'dmg': 0x55
      },
      'vulture': {
        'dmg': 0x55
      },
      'commonBlackbird': {
        'dmg': 0x55
      },
      'pompadourCotinga': {
        'dmg': 0x55
      },
      'falcon': {
        'dmg': 0x46
      },
      'owl': {
        'dmg': 0x46
      },
      'snowyOwl': {
        'dmg': 0x46
      },
      'eagle': {
        'dmg': 0x46
      },
      'hawk': {
        'dmg': 0x41
      },
      'raven': {
        'dmg': 0x41
      },
      'madBat': {
        'dmg': 0x3c
      },
      'alienBug': {
        'dmg': 0x3c
      },
      'pterodactylChild': {
        'dmg': 0x2d
      },
      'stoneEater': {
        'dmg': 0x2d
      },
      'demonicEggEater': {
        'dmg': 0x19
      },
      'demonicBat': {
        'dmg': 0x19
      },
      'swampMonster': {
        'dmg': 0x19
      },
      'dragon': {
        'dmg': 0xf
      }
    }
  },
  'blackWidow': {
    'eats': {
      'fly': {
        'dmg': 0x64
      },
      'butterfly': {
        'dmg': 0x64
      },
      'mosquito': {
        'dmg': 0x64
      },
      'wasp': {
        'dmg': 0x64
      },
      'dragonfly': {
        'dmg': 0x64
      },
      'pigeon': {
        'dmg': 0x2d
      },
      'duck': {
        'dmg': 0x2d
      },
      'parrot': {
        'dmg': 0x2d
      },
      'stork': {
        'dmg': 0x28
      },
      'blueBird': {
        'dmg': 0x28
      },
      'hen': {
        'dmg': 0x28
      },
      'redBird': {
        'dmg': 0x28
      },
      'pelican': {
        'dmg': 0x28
      },
      'seagull': {
        'dmg': 0x28
      },
      'turkey': {
        'dmg': 0x23
      },
      'bat': {
        'dmg': 0x23
      },
      'vulture': {
        'dmg': 0x28
      },
      'hornet': {
        'dmg': 0x50
      },
      'commonBlackbird': {
        'dmg': 0x1e
      },
      'pompadourCotinga': {
        'dmg': 0x1e
      },
      'falcon': {
        'dmg': 0x23
      },
      'owl': {
        'dmg': 0x1e
      },
      'snowyOwl': {
        'dmg': 0x1e
      },
      'eagle': {
        'dmg': 0x1e
      },
      'hawk': {
        'dmg': 0x1e
      },
      'raven': {
        'dmg': 0x1e
      },
      'madBat': {
        'dmg': 0x14
      },
      'alienBug': {
        'dmg': 0x3c
      },
      'pterodactylChild': {
        'dmg': 0x14
      },
      'demonicBat': {
        'dmg': 0x14
      },
      'swampMonster': {
        'dmg': 0x14
      },
      'dragon': {
        'dmg': 0x14
      },
      'demonicImp': {
        'dmg': 0xa
      }
    }
  },
  'zombie': {
    'eats': {
      'fly': {
        'dmg': 0x64
      },
      'butterfly': {
        'dmg': 0x64
      },
      'mosquito': {
        'dmg': 0x64
      },
      'wasp': {
        'dmg': 0x64
      },
      'dragonfly': {
        'dmg': 0x64
      },
      'pigeon': {
        'dmg': 0x37
      },
      'duck': {
        'dmg': 0x37
      },
      'parrot': {
        'dmg': 0x37
      },
      'stork': {
        'dmg': 0x2d
      },
      'blueBird': {
        'dmg': 0x2d
      },
      'hen': {
        'dmg': 0x2d
      },
      'redBird': {
        'dmg': 0x2d
      },
      'pelican': {
        'dmg': 0x2d
      },
      'seagull': {
        'dmg': 0x28
      },
      'turkey': {
        'dmg': 0x23
      },
      'bat': {
        'dmg': 0x23
      },
      'vulture': {
        'dmg': 0x28
      },
      'hornet': {
        'dmg': 0x28
      },
      'commonBlackbird': {
        'dmg': 0x1e
      },
      'pompadourCotinga': {
        'dmg': 0x1e
      },
      'falcon': {
        'dmg': 0x23
      },
      'owl': {
        'dmg': 0x1e
      },
      'snowyOwl': {
        'dmg': 0x1e
      },
      'eagle': {
        'dmg': 0x1e
      },
      'hawk': {
        'dmg': 0x1e
      },
      'raven': {
        'dmg': 0x1e
      },
      'madBat': {
        'dmg': 0x14
      },
      'alienBug': {
        'dmg': 0x3c
      },
      'pterodactylChild': {
        'dmg': 0x14
      },
      'demonicBat': {
        'dmg': 0x14
      },
      'swampMonster': {
        'dmg': 0x14
      },
      'dragon': {
        'dmg': 0x14
      },
      'phoenix': {
        'dmg': 0x14
      },
      'stoneEater': {
        'dmg': 0x19
      },
      'demonicEggEater': {
        'dmg': 0x14
      },
      'demonicImp': {
        'dmg': 0x14
      },
      'pterodactyl': {
        'dmg': 0x14
      },
      'alienBigEye': {
        'dmg': 0x14
      },
      'alienAngryEye': {
        'dmg': 0x14
      },
      'alienBat': {
        'dmg': 0x14
      }
    }
  },
  'mummy': {
    'eats': {
      'fly': {
        'dmg': 0x64
      },
      'butterfly': {
        'dmg': 0x64
      },
      'mosquito': {
        'dmg': 0x64
      },
      'wasp': {
        'dmg': 0x5f
      },
      'dragonfly': {
        'dmg': 0x5f
      },
      'pigeon': {
        'dmg': 0x3c
      },
      'duck': {
        'dmg': 0x3c
      },
      'parrot': {
        'dmg': 0x3c
      },
      'stork': {
        'dmg': 0x2d
      },
      'blueBird': {
        'dmg': 0x2d
      },
      'hen': {
        'dmg': 0x2d
      },
      'redBird': {
        'dmg': 0x2d
      },
      'pelican': {
        'dmg': 0x2d
      },
      'seagull': {
        'dmg': 0x28
      },
      'turkey': {
        'dmg': 0x2d
      },
      'bat': {
        'dmg': 0x2d
      },
      'vulture': {
        'dmg': 0x2d
      },
      'hornet': {
        'dmg': 0x50
      },
      'commonBlackbird': {
        'dmg': 0x28
      },
      'pompadourCotinga': {
        'dmg': 0x23
      },
      'falcon': {
        'dmg': 0x23
      },
      'owl': {
        'dmg': 0x1e
      },
      'snowyOwl': {
        'dmg': 0x1e
      },
      'eagle': {
        'dmg': 0x1e
      },
      'hawk': {
        'dmg': 0x1e
      },
      'raven': {
        'dmg': 0x1e
      },
      'madBat': {
        'dmg': 0x1e
      },
      'alienBug': {
        'dmg': 0x41
      },
      'pterodactylChild': {
        'dmg': 0x19
      },
      'demonicBat': {
        'dmg': 0x19
      },
      'swampMonster': {
        'dmg': 0x19
      },
      'dragon': {
        'dmg': 0x14
      },
      'demonicImp': {
        'dmg': 0xa
      }
    }
  },
  'yeti': {
    'eats': {
      'fly': {
        'dmg': 0x64
      },
      'butterfly': {
        'dmg': 0x64
      },
      'mosquito': {
        'dmg': 0x64
      },
      'wasp': {
        'dmg': 0x5f
      },
      'dragonfly': {
        'dmg': 0x5f
      },
      'pigeon': {
        'dmg': 0x3c
      },
      'duck': {
        'dmg': 0x3c
      },
      'parrot': {
        'dmg': 0x3c
      },
      'stork': {
        'dmg': 0x37
      },
      'blueBird': {
        'dmg': 0x37
      },
      'hen': {
        'dmg': 0x37
      },
      'redBird': {
        'dmg': 0x37
      },
      'pelican': {
        'dmg': 0x37
      },
      'seagull': {
        'dmg': 0x32
      },
      'turkey': {
        'dmg': 0x37
      },
      'bat': {
        'dmg': 0x37
      },
      'vulture': {
        'dmg': 0x37
      },
      'hornet': {
        'dmg': 0x50
      },
      'commonBlackbird': {
        'dmg': 0x32
      },
      'pompadourCotinga': {
        'dmg': 0x2d
      },
      'falcon': {
        'dmg': 0x2d
      },
      'owl': {
        'dmg': 0x28
      },
      'snowyOwl': {
        'dmg': 0x23
      },
      'eagle': {
        'dmg': 0x28
      },
      'hawk': {
        'dmg': 0x28
      },
      'raven': {
        'dmg': 0x28
      },
      'madBat': {
        'dmg': 0x28
      },
      'alienBug': {
        'dmg': 0x41
      },
      'pterodactylChild': {
        'dmg': 0x23
      },
      'demonicBat': {
        'dmg': 0x1e
      },
      'swampMonster': {
        'dmg': 0x1e
      },
      'dragon': {
        'dmg': 0x1e
      },
      'demonicImp': {
        'dmg': 0xa
      }
    }
  },
  'giantRat': {
    'eats': {
      'fly': {
        'dmg': 0x64
      },
      'butterfly': {
        'dmg': 0x64
      },
      'mosquito': {
        'dmg': 0x64
      },
      'wasp': {
        'dmg': 0x64
      },
      'dragonfly': {
        'dmg': 0x64
      },
      'pigeon': {
        'dmg': 0x2d
      },
      'duck': {
        'dmg': 0x2d
      },
      'parrot': {
        'dmg': 0x2d
      },
      'stork': {
        'dmg': 0x28
      },
      'blueBird': {
        'dmg': 0x28
      },
      'hen': {
        'dmg': 0x28
      },
      'redBird': {
        'dmg': 0x28
      },
      'pelican': {
        'dmg': 0x28
      },
      'seagull': {
        'dmg': 0x28
      },
      'turkey': {
        'dmg': 0x23
      },
      'bat': {
        'dmg': 0x23
      },
      'vulture': {
        'dmg': 0x28
      },
      'hornet': {
        'dmg': 0x50
      },
      'commonBlackbird': {
        'dmg': 0x1e
      },
      'pompadourCotinga': {
        'dmg': 0x1e
      },
      'falcon': {
        'dmg': 0x23
      },
      'owl': {
        'dmg': 0x23
      },
      'snowyOwl': {
        'dmg': 0x23
      },
      'eagle': {
        'dmg': 0x23
      },
      'hawk': {
        'dmg': 0x23
      },
      'raven': {
        'dmg': 0x23
      },
      'madBat': {
        'dmg': 0x23
      },
      'alienBug': {
        'dmg': 0x3c
      },
      'pterodactylChild': {
        'dmg': 0x14
      },
      'demonicBat': {
        'dmg': 0x14
      },
      'swampMonster': {
        'dmg': 0x14
      },
      'dragon': {
        'dmg': 0x14
      },
      'demonicImp': {
        'dmg': 0xa
      }
    }
  },
  'alienEye': {
    'eats': {
      'fly': {
        'dmg': 0x3c
      },
      'butterfly': {
        'dmg': 0x3c
      },
      'mosquito': {
        'dmg': 0x3c
      },
      'wasp': {
        'dmg': 0x3c
      },
      'hornet': {
        'dmg': 0x28
      },
      'dragonfly': {
        'dmg': 0x3c
      },
      'pigeon': {
        'dmg': 0x2d
      },
      'duck': {
        'dmg': 0x2d
      },
      'parrot': {
        'dmg': 0x2d
      },
      'stork': {
        'dmg': 0x2d
      },
      'blueBird': {
        'dmg': 0x28
      },
      'hen': {
        'dmg': 0x28
      },
      'redBird': {
        'dmg': 0x28
      },
      'pelican': {
        'dmg': 0x28
      },
      'seagull': {
        'dmg': 0x28
      },
      'turkey': {
        'dmg': 0x28
      },
      'bat': {
        'dmg': 0x28
      },
      'vulture': {
        'dmg': 0x23
      },
      'commonBlackbird': {
        'dmg': 0x1e
      },
      'pompadourCotinga': {
        'dmg': 0x1e
      },
      'falcon': {
        'dmg': 0x23
      },
      'owl': {
        'dmg': 0x23
      },
      'snowyOwl': {
        'dmg': 0x23
      },
      'eagle': {
        'dmg': 0x19
      },
      'hawk': {
        'dmg': 0x19
      },
      'raven': {
        'dmg': 0x19
      },
      'alienBug': {
        'dmg': 0x1e
      },
      'pterodactylChild': {
        'dmg': 0x14
      },
      'demonicBat': {
        'dmg': 0x14
      },
      'swampMonster': {
        'dmg': 0x14
      },
      'dragon': {
        'dmg': 0x14
      }
    }
  },
  'evilRat': {
    'eats': {
      'fly': {
        'dmg': 0x3c
      },
      'butterfly': {
        'dmg': 0x32
      },
      'mosquito': {
        'dmg': 0x32
      },
      'wasp': {
        'dmg': 0x32
      },
      'hornet': {
        'dmg': 0x1e
      },
      'dragonfly': {
        'dmg': 0x32
      },
      'pigeon': {
        'dmg': 0x23
      },
      'duck': {
        'dmg': 0x23
      },
      'parrot': {
        'dmg': 0x23
      },
      'stork': {
        'dmg': 0x23
      },
      'blueBird': {
        'dmg': 0x1e
      },
      'hen': {
        'dmg': 0x1e
      },
      'redBird': {
        'dmg': 0x1e
      },
      'pelican': {
        'dmg': 0x1e
      },
      'seagull': {
        'dmg': 0x1e
      },
      'turkey': {
        'dmg': 0x1e
      },
      'bat': {
        'dmg': 0x14
      },
      'madBat': {
        'dmg': 0x14
      },
      'vulture': {
        'dmg': 0x1e
      },
      'commonBlackbird': {
        'dmg': 0x1e
      },
      'pompadourCotinga': {
        'dmg': 0x1e
      },
      'falcon': {
        'dmg': 0x1e
      },
      'owl': {
        'dmg': 0x1e
      },
      'snowyOwl': {
        'dmg': 0x19
      },
      'eagle': {
        'dmg': 0x19
      },
      'hawk': {
        'dmg': 0x14
      },
      'raven': {
        'dmg': 0x14
      },
      'alienBug': {
        'dmg': 0x14
      },
      'pterodactylChild': {
        'dmg': 0x12
      }
    }
  },
  'snake': {
    'eats': {
      'pigeon': {
        'dmg': 0x23
      },
      'duck': {
        'dmg': 0x23
      },
      'parrot': {
        'dmg': 0x23
      },
      'stork': {
        'dmg': 0x1e
      },
      'blueBird': {
        'dmg': 0x1e
      },
      'hen': {
        'dmg': 0x1e
      },
      'redBird': {
        'dmg': 0x1e
      },
      'pelican': {
        'dmg': 0x1e
      },
      'seagull': {
        'dmg': 0x1e
      },
      'bat': {
        'dmg': 0x1e
      },
      'vulture': {
        'dmg': 0x1e
      },
      'commonBlackbird': {
        'dmg': 0x1e
      },
      'pompadourCotinga': {
        'dmg': 0x1e
      },
      'falcon': {
        'dmg': 0x19
      },
      'owl': {
        'dmg': 0x19
      },
      'snowyOwl': {
        'dmg': 0x14
      },
      'eagle': {
        'dmg': 0x14
      },
      'hawk': {
        'dmg': 0x14
      }
    }
  },
  'beehive': {
    'eats': {
      'pigeon': {
        'dmg': 0x5
      },
      'duck': {
        'dmg': 0x5
      },
      'parrot': {
        'dmg': 0x5
      },
      'stork': {
        'dmg': 0x5
      },
      'blueBird': {
        'dmg': 0x5
      },
      'hen': {
        'dmg': 0x5
      },
      'redBird': {
        'dmg': 0x5
      },
      'pelican': {
        'dmg': 0x5
      },
      'seagull': {
        'dmg': 0x5
      },
      'bat': {
        'dmg': 0x5
      },
      'vulture': {
        'dmg': 0x5
      },
      'commonBlackbird': {
        'dmg': 0x5
      },
      'pompadourCotinga': {
        'dmg': 0x5
      },
      'falcon': {
        'dmg': 0x5
      },
      'owl': {
        'dmg': 0x5
      },
      'snowyOwl': {
        'dmg': 0x5
      },
      'eagle': {
        'dmg': 0x5
      },
      'hawk': {
        'dmg': 0x5
      },
      'turkey': {
        'dmg': 0x5
      },
      'raven': {
        'dmg': 0x5
      },
      'madBat': {
        'dmg': 0x5
      },
      'hornet': {
        'dmg': 0xf
      }
    }
  },
  'crab': {
    'eats': {
      'fly': {
        'dmg': 0x50
      },
      'butterfly': {
        'dmg': 0x4b
      },
      'mosquito': {
        'dmg': 0x41
      },
      'wasp': {
        'dmg': 0x3c
      },
      'hornet': {
        'dmg': 0x28
      },
      'dragonfly': {
        'dmg': 0x37
      },
      'pigeon': {
        'dmg': 0x23
      },
      'duck': {
        'dmg': 0x23
      },
      'parrot': {
        'dmg': 0x23
      },
      'stork': {
        'dmg': 0x1e
      },
      'blueBird': {
        'dmg': 0x1e
      },
      'hen': {
        'dmg': 0x1e
      },
      'redBird': {
        'dmg': 0x1e
      },
      'pelican': {
        'dmg': 0xe
      },
      'seagull': {
        'dmg': 0xe
      },
      'bat': {
        'dmg': 0x1e
      },
      'vulture': {
        'dmg': 0x1e
      },
      'commonBlackbird': {
        'dmg': 0x1e
      },
      'pompadourCotinga': {
        'dmg': 0x1e
      },
      'falcon': {
        'dmg': 0x19
      },
      'owl': {
        'dmg': 0x19
      },
      'snowyOwl': {
        'dmg': 0x14
      },
      'eagle': {
        'dmg': 0x14
      },
      'hawk': {
        'dmg': 0x14
      },
      'pterodactylChild': {
        'dmg': 0x14
      }
    }
  },
  'turtle': {
    'eats': {
      'fly': {
        'dmg': 0x50
      },
      'butterfly': {
        'dmg': 0x4b
      },
      'mosquito': {
        'dmg': 0x41
      },
      'wasp': {
        'dmg': 0x3c
      },
      'hornet': {
        'dmg': 0x28
      },
      'dragonfly': {
        'dmg': 0x37
      },
      'pigeon': {
        'dmg': 0x23
      },
      'duck': {
        'dmg': 0x23
      },
      'parrot': {
        'dmg': 0x23
      },
      'stork': {
        'dmg': 0x1e
      },
      'blueBird': {
        'dmg': 0x1e
      },
      'hen': {
        'dmg': 0x1e
      },
      'redBird': {
        'dmg': 0x1e
      },
      'pelican': {
        'dmg': 0x1e
      },
      'turkey': {
        'dmg': 0x1e
      },
      'seagull': {
        'dmg': 0x1e
      },
      'bat': {
        'dmg': 0x1e
      },
      'vulture': {
        'dmg': 0x1e
      },
      'commonBlackbird': {
        'dmg': 0x1e
      },
      'pompadourCotinga': {
        'dmg': 0x1e
      },
      'falcon': {
        'dmg': 0x19
      },
      'owl': {
        'dmg': 0x19
      },
      'snowyOwl': {
        'dmg': 0x14
      },
      'eagle': {
        'dmg': 0x14
      },
      'hawk': {
        'dmg': 0x14
      },
      'raven': {
        'dmg': 0x14
      },
      'madBat': {
        'dmg': 0x14
      },
      'pterodactylChild': {
        'dmg': 0x14
      }
    }
  },
  'shark': {
    'eats': {
      'fly': {
        'dmg': 0x5f
      },
      'butterfly': {
        'dmg': 0x5f
      },
      'mosquito': {
        'dmg': 0x5f
      },
      'wasp': {
        'dmg': 0x5a
      },
      'hornet': {
        'dmg': 0x5a
      },
      'dragonfly': {
        'dmg': 0x5f
      },
      'pigeon': {
        'dmg': 0x50
      },
      'duck': {
        'dmg': 0x37
      },
      'parrot': {
        'dmg': 0x50
      },
      'stork': {
        'dmg': 0x50
      },
      'blueBird': {
        'dmg': 0x46
      },
      'hen': {
        'dmg': 0x46
      },
      'redBird': {
        'dmg': 0x46
      },
      'pelican': {
        'dmg': 0x28
      },
      'seagull': {
        'dmg': 0x28
      },
      'turkey': {
        'dmg': 0x28
      },
      'bat': {
        'dmg': 0x28
      },
      'vulture': {
        'dmg': 0x28
      },
      'commonBlackbird': {
        'dmg': 0x28
      },
      'pompadourCotinga': {
        'dmg': 0x28
      },
      'falcon': {
        'dmg': 0x23
      },
      'owl': {
        'dmg': 0x23
      },
      'snowyOwl': {
        'dmg': 0x1e
      },
      'eagle': {
        'dmg': 0x1e
      },
      'hawk': {
        'dmg': 0x1e
      },
      'raven': {
        'dmg': 0x1e
      },
      'madBat': {
        'dmg': 0x1e
      },
      'alienBug': {
        'dmg': 0x3c
      },
      'pterodactylChild': {
        'dmg': 0x19
      },
      'demonicBat': {
        'dmg': 0x14
      },
      'swampMonster': {
        'dmg': 0x14
      },
      'pterodactyl': {
        'dmg': 0xf
      }
    }
  },
  'piranha': {
    'eats': {
      'fly': {
        'dmg': 0x55
      },
      'butterfly': {
        'dmg': 0x55
      },
      'mosquito': {
        'dmg': 0x55
      },
      'wasp': {
        'dmg': 0x50
      },
      'hornet': {
        'dmg': 0x50
      },
      'dragonfly': {
        'dmg': 0x55
      },
      'pigeon': {
        'dmg': 0x41
      },
      'duck': {
        'dmg': 0x2d
      },
      'parrot': {
        'dmg': 0x46
      },
      'stork': {
        'dmg': 0x46
      },
      'blueBird': {
        'dmg': 0x3c
      },
      'hen': {
        'dmg': 0x3c
      },
      'redBird': {
        'dmg': 0x3c
      },
      'pelican': {
        'dmg': 0x1e
      },
      'seagull': {
        'dmg': 0x1e
      },
      'turkey': {
        'dmg': 0x1e
      },
      'bat': {
        'dmg': 0x1e
      },
      'vulture': {
        'dmg': 0x1e
      },
      'commonBlackbird': {
        'dmg': 0x1e
      },
      'pompadourCotinga': {
        'dmg': 0x1e
      },
      'falcon': {
        'dmg': 0x19
      },
      'owl': {
        'dmg': 0x19
      },
      'snowyOwl': {
        'dmg': 0x14
      },
      'eagle': {
        'dmg': 0x14
      },
      'hawk': {
        'dmg': 0x14
      },
      'raven': {
        'dmg': 0x14
      },
      'madBat': {
        'dmg': 0x14
      },
      'alienBug': {
        'dmg': 0x30
      },
      'pterodactylChild': {
        'dmg': 0x1e
      },
      'demonicBat': {
        'dmg': 0x14
      },
      'swampMonster': {
        'dmg': 0x14
      },
      'dragon': {
        'dmg': 0x14
      },
      'pterodactyl': {
        'dmg': 0xf
      },
      'demonicImp': {
        'dmg': 0x14
      }
    }
  },
  'crocodile': {
    'eats': {
      'fly': {
        'dmg': 0x50
      },
      'butterfly': {
        'dmg': 0x4b
      },
      'mosquito': {
        'dmg': 0x41
      },
      'wasp': {
        'dmg': 0x3c
      },
      'hornet': {
        'dmg': 0x28
      },
      'dragonfly': {
        'dmg': 0x37
      },
      'pigeon': {
        'dmg': 0x32
      },
      'duck': {
        'dmg': 0x2d
      },
      'parrot': {
        'dmg': 0x2d
      },
      'stork': {
        'dmg': 0x2d
      },
      'blueBird': {
        'dmg': 0x2d
      },
      'hen': {
        'dmg': 0x2d
      },
      'redBird': {
        'dmg': 0x2d
      },
      'pelican': {
        'dmg': 0x28
      },
      'seagull': {
        'dmg': 0x28
      },
      'turkey': {
        'dmg': 0x28
      },
      'bat': {
        'dmg': 0x28
      },
      'vulture': {
        'dmg': 0x28
      },
      'commonBlackbird': {
        'dmg': 0x28
      },
      'pompadourCotinga': {
        'dmg': 0x28
      },
      'falcon': {
        'dmg': 0x23
      },
      'owl': {
        'dmg': 0x23
      },
      'snowyOwl': {
        'dmg': 0x1e
      },
      'eagle': {
        'dmg': 0x1e
      },
      'hawk': {
        'dmg': 0x1e
      },
      'raven': {
        'dmg': 0x1e
      },
      'madBat': {
        'dmg': 0x1e
      },
      'alienBug': {
        'dmg': 0x3c
      },
      'demonicBat': {
        'dmg': 0xa
      },
      'swampMonster': {
        'dmg': 0x14
      },
      'pterodactylChild': {
        'dmg': 0x19
      }
    }
  },
  'boss1': {
    'eats': {
      'grimReaper': {
        'dmg': 0x13
      },
      'ghostlyReaper': {
        'dmg': 0x13
      },
      'pumpkinCharacter': {
        'dmg': 0x19
      },
      'pumpkinGhost': {
        'dmg': 0x13
      },
      'fly': {
        'dmg': 0x19
      },
      'butterfly': {
        'dmg': 0x19
      },
      'mosquito': {
        'dmg': 0x19
      },
      'wasp': {
        'dmg': 0x19
      },
      'dragonfly': {
        'dmg': 0x19
      },
      'pigeon': {
        'dmg': 0x19
      },
      'duck': {
        'dmg': 0x19
      },
      'parrot': {
        'dmg': 0x19
      },
      'stork': {
        'dmg': 0x19
      },
      'blueBird': {
        'dmg': 0x19
      },
      'hen': {
        'dmg': 0x19
      },
      'redBird': {
        'dmg': 0x19
      },
      'pelican': {
        'dmg': 0x19
      },
      'seagull': {
        'dmg': 0x19
      },
      'turkey': {
        'dmg': 0x19
      },
      'bat': {
        'dmg': 0x19
      },
      'vulture': {
        'dmg': 0x19
      },
      'hornet': {
        'dmg': 0x19
      },
      'commonBlackbird': {
        'dmg': 0x19
      },
      'pompadourCotinga': {
        'dmg': 0x19
      },
      'falcon': {
        'dmg': 0x19
      },
      'owl': {
        'dmg': 0x19
      },
      'snowyOwl': {
        'dmg': 0x19
      },
      'eagle': {
        'dmg': 0x19
      },
      'hawk': {
        'dmg': 0x19
      },
      'raven': {
        'dmg': 0x19
      },
      'madBat': {
        'dmg': 0x19
      },
      'alienBug': {
        'dmg': 0x19
      },
      'pterodactylChild': {
        'dmg': 0x19
      },
      'demonicBat': {
        'dmg': 0x19
      },
      'swampMonster': {
        'dmg': 0x19
      },
      'dragon': {
        'dmg': 0x19
      },
      'phoenix': {
        'dmg': 0x19
      },
      'stoneEater': {
        'dmg': 0x19
      },
      'demonicEggEater': {
        'dmg': 0x19
      },
      'demonicImp': {
        'dmg': 0x19
      },
      'pterodactyl': {
        'dmg': 0x19
      },
      'alienBigEye': {
        'dmg': 0x19
      },
      'alienAngryEye': {
        'dmg': 0x19
      },
      'alienBat': {
        'dmg': 0x19
      }
    }
  }
};
var objectsByUniqueIdArr = [];
for (var i = 0x0; i < Object.keys(game.objectsDef).length; i++) {
  var object = game.objectsDef[Object.keys(game.objectsDef)[i]];
  if (object.type == 0xb) {
    continue;
  }
  object.uid = i;
  objectsByUniqueIdArr[i] = object;
  if (object.type == 0x1) {
    object.skinsLoaded = [];
  }
}
for (var i = 0x0; i < Object.keys(game.skills).length; i++) {
  var skill = game.skills[Object.keys(game.skills)[i]];
  skill.func = function () {
    return true;
  };
}
var animationsById = [];
var animationsId = [];
for (var o = 0x0; o < Object.keys(game.objectsDef).length; o++) {
  var object = game.objectsDef[Object.keys(game.objectsDef)[o]];
  if (typeof object.animations !== "undefined") {
    for (var i = 0x0; i < Object.keys(object.animations).length; i++) {
      var animation = Object.keys(object.animations)[i];
      if (typeof animationsId[animation] !== "undefined") {
        continue;
      }
      animationsId[animation] = animationsById.length;
      animationsById[animationsById.length++] = animation;
    }
  }
}
for (var i = 0x0; i < Object.keys(game.objectsDef).length; i++) {
  var object = game.objectsDef[Object.keys(game.objectsDef)[i]];
  if (object.staticCanvas === true) {
    continue;
  }
  if ((object.type == 0x2 || object.type == 0xd || object.type == 0x8) && (typeof object.opacity === "undefined" || object.opacity == 0x1) && Object.keys(object.animations).length <= 0x1 && object.animations[object.animation].sprites.length <= 0x1 && object.staticCanvas !== false) {
    object.staticCanvas = true;
  }
}