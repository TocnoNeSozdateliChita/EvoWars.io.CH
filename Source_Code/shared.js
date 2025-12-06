var _0x35cdcb = _0x193c;
function _0x193c(_0xbd719a, _0x3620c1) {
    var _0x34d5f4 = _0x34d5();
    return _0x193c = function(_0x193c62, _0x209c98) {
        _0x193c62 = _0x193c62 - 0x1c7;
        var _0x23cc13 = _0x34d5f4[_0x193c62];
        return _0x23cc13;
    }
    ,
    _0x193c(_0xbd719a, _0x3620c1);
}
(function(_0x2d871d, _0x2b342b) {
    var _0xad740d = _0x193c
      , _0x39efea = _0x2d871d();
    while (!![]) {
        try {
            var _0x36150d = parseInt(_0xad740d(0x790)) / 0x1 + parseInt(_0xad740d(0x482)) / 0x2 + parseInt(_0xad740d(0x6ce)) / 0x3 * (parseInt(_0xad740d(0x989)) / 0x4) + parseInt(_0xad740d(0x444)) / 0x5 + parseInt(_0xad740d(0x26c)) / 0x6 * (parseInt(_0xad740d(0x9fb)) / 0x7) + -parseInt(_0xad740d(0x6a5)) / 0x8 + -parseInt(_0xad740d(0x573)) / 0x9;
            if (_0x36150d === _0x2b342b)
                break;
            else
                _0x39efea['push'](_0x39efea['shift']());
        } catch (_0x15d7cb) {
            _0x39efea['push'](_0x39efea['shift']());
        }
    }
}(_0x34d5, 0xe828b));
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
}
  , skillEvent = {
    'none': 0x0,
    'onAttack': 0x1,
    'onObtainAttack': 0x2,
    'action': 0x3,
    'onCollideTrigger': 0x4
}
  , socketMsgType = {
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
}
  , questType = {
    'KILL': 0x1,
    'EVOLVE': 0x2,
    'PLAYTIME': 0x3,
    'REACH': 0x4,
    'EAT': 0x5
};
game[_0x35cdcb(0x3a1)] = {
    'beginnersLuck': {
        'fullName': _0x35cdcb(0x2cb),
        'params': [0x32],
        'icon': 'skill_beginnersLuck',
        'active': ![],
        'event': skillEvent[_0x35cdcb(0x8aa)]
    },
    'flowerLove': {
        'fullName': _0x35cdcb(0x9ed),
        'icon': _0x35cdcb(0x8cf),
        'active': ![],
        'event': skillEvent['onCollideTrigger']
    },
    'infection': {
        'fullName': _0x35cdcb(0x85d),
        'params': [0x14, 0x1],
        'icon': _0x35cdcb(0x94f),
        'active': ![],
        'event': skillEvent[_0x35cdcb(0x8aa)]
    },
    'poisonWasp': {
        'fullName': _0x35cdcb(0xa30),
        'params': [0x19, 0x2],
        'icon': _0x35cdcb(0xb17),
        'active': ![],
        'event': skillEvent['onAttack']
    },
    'poisonSwampMonster': {
        'fullName': 'poison',
        'params': [0x64, 0x3],
        'icon': _0x35cdcb(0x8e7),
        'active': ![],
        'event': skillEvent[_0x35cdcb(0x7b6)]
    },
    'grabPrey': {
        'fullName': 'grab\x20prey',
        'params': [0x4],
        'cooldown': 0x4e20,
        'icon': 'skill_grabPrey',
        'active': ![],
        'event': skillEvent[_0x35cdcb(0x7b6)]
    },
    'hunger': {
        'fullName': _0x35cdcb(0x34a),
        'cooldown': 0x4e20,
        'icon': 'skill_hunger',
        'active': ![],
        'event': skillEvent['onAttack']
    },
    'diving': {
        'fullName': 'diving',
        'icon': 'skill_diving',
        'active': ![],
        'event': skillEvent[_0x35cdcb(0x6c9)]
    },
    'swoop': {
        'fullName': _0x35cdcb(0x5e0),
        'cooldown': 0x1f40,
        'icon': 'skill_swoop',
        'active': !![],
        'event': skillEvent[_0x35cdcb(0x659)]
    },
    'fruitEater': {
        'fullName': 'fruit\x20eater',
        'params': [0x19],
        'icon': 'skill_fruitEater',
        'active': ![],
        'event': skillEvent[_0x35cdcb(0x7b6)]
    },
    'frogHunter': {
        'fullName': _0x35cdcb(0x882),
        'params': [0x23],
        'cooldown': 0x7d0,
        'icon': _0x35cdcb(0x32d),
        'active': ![],
        'event': skillEvent['none']
    },
    'echolocation': {
        'fullName': _0x35cdcb(0x9e1),
        'icon': _0x35cdcb(0xadc),
        'active': ![],
        'event': skillEvent[_0x35cdcb(0x6c9)]
    },
    'dig': {
        'fullName': 'dig',
        'params': [0x28],
        'cooldown': 0x2710,
        'icon': _0x35cdcb(0xaad),
        'active': ![],
        'event': skillEvent[_0x35cdcb(0x7f1)]
    },
    'excellentHunter': {
        'fullName': _0x35cdcb(0x6ed),
        'params': [0xa, 0x32],
        'icon': _0x35cdcb(0x352),
        'active': ![],
        'event': skillEvent[_0x35cdcb(0x7b6)]
    },
    'speedUp': {
        'fullName': 'speed\x20up',
        'cooldown': 0x1b58,
        'icon': 'skill_speedUp',
        'active': !![],
        'event': skillEvent['action']
    },
    'layEgg': {
        'fullName': _0x35cdcb(0x79f),
        'cooldown': 0x1770,
        'icon': _0x35cdcb(0x58c),
        'active': ![],
        'event': skillEvent['onCollideTrigger']
    },
    'bloodthirsty': {
        'fullName': 'bloodthirsty',
        'cooldown': 0x1388,
        'icon': _0x35cdcb(0xaab),
        'active': ![],
        'event': skillEvent[_0x35cdcb(0x7b6)]
    },
    'rage': {
        'fullName': _0x35cdcb(0x453),
        'params': [0x19],
        'icon': _0x35cdcb(0x29f),
        'active': ![],
        'event': skillEvent[_0x35cdcb(0x7b6)]
    },
    'scytheAttack1': {
        'fullName': _0x35cdcb(0xaea),
        'params': [0x23],
        'cooldown': 0x1f4,
        'icon': _0x35cdcb(0x3d3),
        'active': !![],
        'event': skillEvent[_0x35cdcb(0x659)]
    },
    'scytheAttack2': {
        'fullName': 'scythe\x20attack',
        'params': [0x1e],
        'cooldown': 0x1f4,
        'icon': 'skill_scytheAttack',
        'active': !![],
        'event': skillEvent[_0x35cdcb(0x659)]
    },
    'scytheAttack3': {
        'fullName': 'scythe\x20attack',
        'params': [0x19],
        'cooldown': 0x1f4,
        'icon': _0x35cdcb(0x3d3),
        'active': !![],
        'event': skillEvent[_0x35cdcb(0x659)]
    },
    'thickSkin': {
        'fullName': _0x35cdcb(0x445),
        'cooldown': 0x61a8,
        'icon': _0x35cdcb(0x7da),
        'active': ![],
        'event': skillEvent['onObtainAttack']
    },
    'stoneSkin': {
        'fullName': _0x35cdcb(0x369),
        'params': [0x4b],
        'icon': _0x35cdcb(0x68f),
        'active': ![],
        'event': skillEvent[_0x35cdcb(0x8aa)]
    },
    'toTheMoon': {
        'fullName': _0x35cdcb(0x431),
        'icon': _0x35cdcb(0x3d8),
        'active': ![],
        'event': skillEvent[_0x35cdcb(0x6c9)]
    },
    'immortality': {
        'fullName': _0x35cdcb(0xa84),
        'icon': _0x35cdcb(0x5a9),
        'active': ![],
        'event': skillEvent['none']
    },
    'hotBath': {
        'fullName': _0x35cdcb(0x455),
        'icon': _0x35cdcb(0x286),
        'active': ![],
        'event': skillEvent[_0x35cdcb(0x6c9)]
    },
    'fear': {
        'fullName': _0x35cdcb(0xa6a),
        'params': [0x4],
        'cooldown': 0x4e20,
        'icon': 'skill_fear',
        'active': ![],
        'event': skillEvent['onAttack']
    },
    'burnInHell': {
        'fullName': _0x35cdcb(0x47a),
        'icon': _0x35cdcb(0x700),
        'active': ![],
        'event': skillEvent[_0x35cdcb(0x7b6)]
    },
    'fireball': {
        'fullName': 'fireball',
        'params': [0x19, 0x3],
        'cooldown': 0x1f40,
        'icon': _0x35cdcb(0x521),
        'active': !![],
        'event': skillEvent[_0x35cdcb(0x659)]
    },
    'flame': {
        'fullName': _0x35cdcb(0x39f),
        'cooldown': 0x1f40,
        'icon': 'skill_flame',
        'active': !![],
        'event': skillEvent['action']
    }
},
game[_0x35cdcb(0x3e6)] = {
    'eagle': {
        'name': _0x35cdcb(0x603),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0x948)]
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0x9ad)]
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x948), _0x35cdcb(0x74f), _0x35cdcb(0x8eb), _0x35cdcb(0x387), 'eagle_3_right', _0x35cdcb(0x74f)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x9ad), _0x35cdcb(0x644), _0x35cdcb(0x8be), _0x35cdcb(0x9be), _0x35cdcb(0x8be), _0x35cdcb(0x644)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x910),
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0xafb)],
        'petOffset': {
            'x': 0x5a,
            'y': 0x46
        }
    },
    'falcon': {
        'name': _0x35cdcb(0x6c8),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0x907)]
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x81a), 'falcon_2_right', _0x35cdcb(0x534), 'falcon_4_right', 'falcon_3_right', _0x35cdcb(0x687)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x907), _0x35cdcb(0x5b9), _0x35cdcb(0x53c), 'falcon_4_left', 'falcon_3_left', _0x35cdcb(0x5b9)],
                'animationFrameTime': 0x50
            }
        },
        'animation': 'flying_right',
        'skill': game[_0x35cdcb(0x3a1)]['speedUp'],
        'petOffset': {
            'x': 0x50,
            'y': 0x46
        }
    },
    'bat': {
        'name': 'bat',
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0x918)]
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0xb20)]
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x918), _0x35cdcb(0x214), _0x35cdcb(0x494), 'bat_2_right'],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0xb20), _0x35cdcb(0x60b), 'bat_3_left', _0x35cdcb(0x60b)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x910),
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0x9e1)],
        'petOffset': {
            'x': 0x5a,
            'y': 0x50
        }
    },
    'madBat': {
        'name': _0x35cdcb(0x3c1),
        'fullName': _0x35cdcb(0x6ec),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0x724)]
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0x481)]
            },
            'flapping_right': {
                'sprites': ['madBat_1_right', _0x35cdcb(0x724), _0x35cdcb(0x2d7), 'madBat_4_right', _0x35cdcb(0x563), 'madBat_6_right', _0x35cdcb(0x563), 'madBat_4_right', _0x35cdcb(0x2d7), _0x35cdcb(0x724)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': ['madBat_1_left', _0x35cdcb(0x481), 'madBat_3_left', _0x35cdcb(0x2ec), _0x35cdcb(0x3aa), _0x35cdcb(0x3a3), _0x35cdcb(0x3aa), _0x35cdcb(0x2ec), _0x35cdcb(0x451), 'madBat_2_left'],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x910),
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0x453)],
        'petOffset': {
            'x': 0x4b,
            'y': 0x5a
        }
    },
    'fly': {
        'name': _0x35cdcb(0x579),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0x64d)]
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0x3fe)]
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x64d), _0x35cdcb(0x398), _0x35cdcb(0x601), _0x35cdcb(0x593)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x3fe), 'fly_2_left', _0x35cdcb(0x5e2), _0x35cdcb(0x1e7)],
                'animationFrameTime': 0x50
            }
        },
        'animation': 'flying_right',
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0x592)],
        'petOffset': {
            'x': 0x46,
            'y': 0x46
        },
        'reapersIgnoreCollision': !![]
    },
    'pumpkinCharacter': {
        'name': _0x35cdcb(0x1e3),
        'fullName': _0x35cdcb(0x9f6),
        'type': objectType[_0x35cdcb(0x51f)],
        'width': 0x7b,
        'height': 0x45,
        'moveable': !![],
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
                'sprites': [_0x35cdcb(0x499)]
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x265), 'pumpkin_2_right', _0x35cdcb(0xa47), _0x35cdcb(0x53a), 'pumpkin_3_right', _0x35cdcb(0x686)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0xaa5), _0x35cdcb(0x499), _0x35cdcb(0xaa8), 'pumpkin_4_left', 'pumpkin_3_left', _0x35cdcb(0x499)],
                'animationFrameTime': 0x50
            }
        },
        'animation': 'flying_right',
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0xafb)],
        'canEnterBoss': !![],
        'customSpawn': _0x35cdcb(0x6a9),
        'petOffset': {
            'x': 0x5a,
            'y': 0x46
        }
    },
    'alienBug': {
        'name': 'alienBug',
        'fullName': _0x35cdcb(0xb1f),
        'type': objectType['PLAYER'],
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
                'sprites': [_0x35cdcb(0x7be)]
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0x9c2)]
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x7be), 'alienBug_2_right', 'alienBug_3_right', _0x35cdcb(0x448), _0x35cdcb(0x6ea), _0x35cdcb(0x3a8)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': ['alienBug_1_left', _0x35cdcb(0x4f1), 'alienBug_3_left', 'alienBug_4_left', 'alienBug_5_left', 'alienBug_6_left'],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x910),
        'spaceResistance': !![],
        'skill': game['skills'][_0x35cdcb(0x976)],
        'petOffset': {
            'x': 0x46,
            'y': 0x46
        }
    },
    'ghost': {
        'name': 'ghost',
        'type': objectType[_0x35cdcb(0x51f)],
        'width': 0x54,
        'height': 0x62,
        'moveable': !![],
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
                'sprites': [_0x35cdcb(0x8e6), 'ghost_2_right', _0x35cdcb(0x8e2), 'ghost_4_right', 'ghost_5_right', _0x35cdcb(0x981), _0x35cdcb(0x93f), _0x35cdcb(0x981), _0x35cdcb(0x55c), _0x35cdcb(0xa41), 'ghost_3_right', _0x35cdcb(0x800)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': ['ghost_1_left', _0x35cdcb(0x850), _0x35cdcb(0x79b), _0x35cdcb(0x2b4), _0x35cdcb(0x3b4), _0x35cdcb(0xb1d), _0x35cdcb(0x1fd), 'ghost_6_left', 'ghost_5_left', 'ghost_4_left', _0x35cdcb(0x79b), _0x35cdcb(0x850)],
                'animationFrameTime': 0x50
            }
        },
        'animation': 'flying_right',
        'skill': game[_0x35cdcb(0x3a1)]['immortality'],
        'immortal': !![],
        'canEnterBoss': !![],
        'customSpawn': _0x35cdcb(0x6a9),
        'petOffset': {
            'x': 0x46,
            'y': 0x46
        }
    },
    'ghostlyReaper': {
        'name': _0x35cdcb(0x1ff),
        'fullName': _0x35cdcb(0x211),
        'type': objectType[_0x35cdcb(0x51f)],
        'width': 0x96,
        'height': 0xa5,
        'moveable': !![],
        'colliderRectangleOffset': {
            'left': 0.29,
            'right': 0.29,
            'top': 0.4,
            'bottom': 0.1
        },
        'animations': {
            'flying_right': {
                'sprites': [_0x35cdcb(0x853)]
            },
            'flying_left': {
                'sprites': ['ghostlyReaper_1_left']
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x853), _0x35cdcb(0xade), _0x35cdcb(0x72a), 'ghostlyReaper_4_right', 'ghostlyReaper_5_right', 'ghostlyReaper_6_right', _0x35cdcb(0x2fb), _0x35cdcb(0x3ff), _0x35cdcb(0x9c5), _0x35cdcb(0x8d2), _0x35cdcb(0x251), _0x35cdcb(0x984), _0x35cdcb(0x70d), 'ghostlyReaper_14_right', _0x35cdcb(0xaf7), _0x35cdcb(0x6d8), _0x35cdcb(0x37a)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x5f0), _0x35cdcb(0x4af), 'ghostlyReaper_3_left', 'ghostlyReaper_4_left', 'ghostlyReaper_5_left', 'ghostlyReaper_6_left', 'ghostlyReaper_7_left', _0x35cdcb(0x51b), _0x35cdcb(0x7c1), _0x35cdcb(0x598), _0x35cdcb(0x9cd), _0x35cdcb(0x7e3), _0x35cdcb(0x35b), 'ghostlyReaper_14_left', _0x35cdcb(0x9ff), _0x35cdcb(0x959), 'ghostlyReaper_17_left'],
                'animationFrameTime': 0x50
            },
            'attacking_right': {
                'sprites': [_0x35cdcb(0x365), _0x35cdcb(0x74b), _0x35cdcb(0x8d0), _0x35cdcb(0x3fc), _0x35cdcb(0x6ac), _0x35cdcb(0x1f2), _0x35cdcb(0x701), 'ghostlyReaper_8_attack_right', _0x35cdcb(0x722), _0x35cdcb(0x2a5), _0x35cdcb(0x924), _0x35cdcb(0x4c6), 'ghostlyReaper_13_attack_right', _0x35cdcb(0x4de), _0x35cdcb(0x2d5), _0x35cdcb(0x5ce)],
                'animationFrameTime': 0x14
            },
            'attacking_left': {
                'sprites': ['ghostlyReaper_1_attack_left', _0x35cdcb(0x93c), 'ghostlyReaper_3_attack_left', _0x35cdcb(0x6f6), _0x35cdcb(0x7cf), _0x35cdcb(0xb23), _0x35cdcb(0x229), _0x35cdcb(0x41e), _0x35cdcb(0x63a), _0x35cdcb(0x5ee), _0x35cdcb(0x2ff), _0x35cdcb(0x3be), _0x35cdcb(0x9e0), _0x35cdcb(0x6d6), 'ghostlyReaper_15_attack_left', _0x35cdcb(0x6ee)],
                'animationFrameTime': 0x14
            }
        },
        'animation': _0x35cdcb(0x910),
        'eatsSouls': !![],
        'canEnterBoss': !![],
        'canEnterArena': !![],
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0x980)],
        'petOffset': {
            'x': 0x5a,
            'y': 0x82
        }
    },
    'butterfly': {
        'name': _0x35cdcb(0x748),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0x1d6)]
            },
            'flying_left': {
                'sprites': ['butterfly_3_left']
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x39e), _0x35cdcb(0x777), _0x35cdcb(0x1d6), _0x35cdcb(0x784), _0x35cdcb(0x633), _0x35cdcb(0x770), _0x35cdcb(0xac1), _0x35cdcb(0xaa3), _0x35cdcb(0x411), 'butterfly_10_right', 'butterfly_11_right', _0x35cdcb(0x3f3)],
                'animationFrameTime': 0x1e
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x487), _0x35cdcb(0xa51), _0x35cdcb(0x6e6), _0x35cdcb(0x630), _0x35cdcb(0x892), _0x35cdcb(0x426), _0x35cdcb(0xa36), _0x35cdcb(0x7c2), 'butterfly_9_left', _0x35cdcb(0x2df), 'butterfly_11_left', _0x35cdcb(0x7b8)],
                'animationFrameTime': 0x1e
            }
        },
        'animation': _0x35cdcb(0x910),
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0x684)],
        'petOffset': {
            'x': 0x4b,
            'y': 0x73
        },
        'reapersIgnoreCollision': !![]
    },
    'pelican': {
        'name': _0x35cdcb(0x6ff),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0x7a3)]
            },
            'flapping_right': {
                'sprites': ['pelican_1_right', _0x35cdcb(0x8dc), 'pelican_3_right', _0x35cdcb(0x65d), 'pelican_5_right', _0x35cdcb(0x714), 'pelican_7_right', _0x35cdcb(0x2c1), _0x35cdcb(0x7b7), 'pelican_10_right', _0x35cdcb(0x58a), 'pelican_12_right'],
                'animationFrameTime': 0x28
            },
            'flapping_left': {
                'sprites': ['pelican_1_left', _0x35cdcb(0x858), _0x35cdcb(0x7a3), _0x35cdcb(0x5a4), _0x35cdcb(0x389), 'pelican_6_left', 'pelican_7_left', _0x35cdcb(0xb28), 'pelican_9_left', 'pelican_10_left', _0x35cdcb(0x81d), _0x35cdcb(0x510)],
                'animationFrameTime': 0x28
            }
        },
        'animation': _0x35cdcb(0x910),
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0x8e9)],
        'petOffset': {
            'x': 0x64,
            'y': 0x73
        }
    },
    'pterodactyl': {
        'name': _0x35cdcb(0x96f),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0x4dd), _0x35cdcb(0x3c8), 'pterodactyl_3_right', _0x35cdcb(0x276), _0x35cdcb(0x63d), _0x35cdcb(0x6fa), _0x35cdcb(0x63d), 'pterodactyl_4_right', _0x35cdcb(0x87a), 'pterodactyl_2_right'],
                'animationFrameTime': 0x28
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x531), _0x35cdcb(0x4d4), _0x35cdcb(0x43e), _0x35cdcb(0x4a0), _0x35cdcb(0x32e), _0x35cdcb(0x477), 'pterodactyl_5_left', _0x35cdcb(0x4a0), _0x35cdcb(0x43e), _0x35cdcb(0x4d4)],
                'animationFrameTime': 0x28
            }
        },
        'animation': _0x35cdcb(0x910),
        'skill': game['skills'][_0x35cdcb(0xaa9)],
        'petOffset': {
            'x': 0x64,
            'y': 0xc8
        }
    },
    'pterodactylChild': {
        'name': _0x35cdcb(0x261),
        'fullName': 'Pterodactyl\x20Child',
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0x3e3)]
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0x6bf)]
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x465), _0x35cdcb(0x2c0), _0x35cdcb(0x3e3), 'pterodactylChild_4_right', _0x35cdcb(0x3dd), _0x35cdcb(0x1c7), _0x35cdcb(0x3dd), 'pterodactylChild_4_right', _0x35cdcb(0x3e3), 'pterodactylChild_2_right'],
                'animationFrameTime': 0x28
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x6e9), _0x35cdcb(0x830), _0x35cdcb(0x6bf), _0x35cdcb(0x449), 'pterodactylChild_5_left', _0x35cdcb(0x894), _0x35cdcb(0x97d), _0x35cdcb(0x449), _0x35cdcb(0x6bf), _0x35cdcb(0x830)],
                'animationFrameTime': 0x28
            }
        },
        'animation': 'flying_right',
        'skill': game[_0x35cdcb(0x3a1)]['thickSkin'],
        'customSpawn': _0x35cdcb(0x5ea),
        'petOffset': {
            'x': 0x50,
            'y': 0x82
        }
    },
    'dragon': {
        'name': _0x35cdcb(0x2eb),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0x867)]
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0x826)]
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x7d2), _0x35cdcb(0x964), _0x35cdcb(0x867), _0x35cdcb(0x762), _0x35cdcb(0x867), _0x35cdcb(0x964)],
                'animationFrameTime': 0x64
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x8d9), _0x35cdcb(0x3f1), _0x35cdcb(0x826), 'dragon_4_left', 'dragon_3_left', 'dragon_2_left'],
                'animationFrameTime': 0x64
            },
            'attacking_right': {
                'sprites': [_0x35cdcb(0x586), _0x35cdcb(0x39c), _0x35cdcb(0x4bb), _0x35cdcb(0x693)],
                'animationFrameTime': 0x82
            },
            'attacking_left': {
                'sprites': [_0x35cdcb(0x2db), _0x35cdcb(0x804), _0x35cdcb(0x3a2), _0x35cdcb(0x549)],
                'animationFrameTime': 0x82
            }
        },
        'animation': _0x35cdcb(0x910),
        'skill': game[_0x35cdcb(0x3a1)]['fireball'],
        'petOffset': {
            'x': 0x50,
            'y': 0x64
        }
    },
    'phoenix': {
        'name': _0x35cdcb(0x9cc),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': ['phoenix_idle_1_right', _0x35cdcb(0x392), 'phoenix_idle_3_right', 'phoenix_idle_4_right'],
                'animationFrameTime': 0x64
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0x504), 'phoenix_idle_2_left', _0x35cdcb(0x807), _0x35cdcb(0x28a)],
                'animationFrameTime': 0x64
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x432), _0x35cdcb(0x208), _0x35cdcb(0x24b), _0x35cdcb(0x4a4), _0x35cdcb(0xafc), _0x35cdcb(0x535), _0x35cdcb(0x7d3), 'phoenix_8_right'],
                'animationFrameTime': 0x64
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x294), _0x35cdcb(0x303), _0x35cdcb(0x971), 'phoenix_4_left', 'phoenix_5_left', 'phoenix_6_left', 'phoenix_7_left', _0x35cdcb(0x76d)],
                'animationFrameTime': 0x64
            }
        },
        'animation': _0x35cdcb(0x910),
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0x39f)],
        'lavaResistance': !![],
        'petOffset': {
            'x': 0x5f,
            'y': 0x6e
        }
    },
    'stoneEater': {
        'name': _0x35cdcb(0x779),
        'fullName': _0x35cdcb(0x383),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0x5b5)]
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0x887)]
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x32b), _0x35cdcb(0x452), _0x35cdcb(0x5b5), _0x35cdcb(0x2ce), _0x35cdcb(0x50b), _0x35cdcb(0x92a)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x572), _0x35cdcb(0x70c), _0x35cdcb(0x887), _0x35cdcb(0x730), _0x35cdcb(0xb07), 'stoneEater_6_left'],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x910),
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0x9aa)],
        'petOffset': {
            'x': 0x46,
            'y': 0x78
        }
    },
    'demonicEggEater': {
        'name': _0x35cdcb(0x3f9),
        'fullName': _0x35cdcb(0x61d),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0xa07)]
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0x91e)]
            },
            'flapping_right': {
                'sprites': ['demonicEggEater_1_right', _0x35cdcb(0x3bb), _0x35cdcb(0xa07), _0x35cdcb(0xb12), _0x35cdcb(0xa6d), _0x35cdcb(0x799)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x2e1), _0x35cdcb(0x1cb), _0x35cdcb(0x91e), _0x35cdcb(0x2e4), _0x35cdcb(0x213), _0x35cdcb(0x610)],
                'animationFrameTime': 0x50
            }
        },
        'animation': 'flying_right',
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0x48a)],
        'lavaResistance': !![],
        'customSpawn': 'hell_spawn',
        'petOffset': {
            'x': 0x46,
            'y': 0x78
        }
    },
    'demonicBat': {
        'name': _0x35cdcb(0x7a0),
        'fullName': _0x35cdcb(0x200),
        'type': objectType['PLAYER'],
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
                'sprites': [_0x35cdcb(0x7c8)]
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0x3e2)]
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x2f6), _0x35cdcb(0x74e), _0x35cdcb(0x7c8), _0x35cdcb(0x843), _0x35cdcb(0x643), 'demonicBat_6_right'],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': ['demonicBat_1_left', _0x35cdcb(0xaf9), _0x35cdcb(0x3e2), 'demonicBat_4_left', _0x35cdcb(0x2a1), _0x35cdcb(0x2a2)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x910),
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0xa6a)],
        'lavaResistance': !![],
        'petOffset': {
            'x': 0x3c,
            'y': 0x6e
        }
    },
    'demonicImp': {
        'name': _0x35cdcb(0x81f),
        'fullName': 'Demonic\x20Imp',
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0x9c7)]
            },
            'flying_left': {
                'sprites': ['demonicImp_1_left']
            },
            'flapping_right': {
                'sprites': ['demonicImp_1_right', _0x35cdcb(0x7b5), _0x35cdcb(0x3d1), _0x35cdcb(0x9a1), _0x35cdcb(0x353), 'demonicImp_6_right', _0x35cdcb(0xaeb), _0x35cdcb(0x69c), 'demonicImp_9_right', _0x35cdcb(0x8cc), _0x35cdcb(0x2c7), 'demonicImp_12_right', 'demonicImp_13_right', _0x35cdcb(0x803), _0x35cdcb(0x7ca), _0x35cdcb(0xa09), _0x35cdcb(0x870), _0x35cdcb(0x47b)],
                'animationFrameTime': 0x28
            },
            'flapping_left': {
                'sprites': ['demonicImp_1_left', _0x35cdcb(0x571), 'demonicImp_3_left', _0x35cdcb(0x591), _0x35cdcb(0x6be), _0x35cdcb(0x689), _0x35cdcb(0x8f3), _0x35cdcb(0x4aa), 'demonicImp_9_left', 'demonicImp_10_left', _0x35cdcb(0x834), 'demonicImp_12_left', _0x35cdcb(0x789), 'demonicImp_14_left', _0x35cdcb(0x9b0), _0x35cdcb(0x576), 'demonicImp_17_left', 'demonicImp_18_left'],
                'animationFrameTime': 0x28
            }
        },
        'animation': _0x35cdcb(0x910),
        'skill': game[_0x35cdcb(0x3a1)]['burnInHell'],
        'lavaResistance': !![],
        'petOffset': {
            'x': 0x50,
            'y': 0x5a
        }
    },
    'stork': {
        'name': _0x35cdcb(0x8b6),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0x2bf)]
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0x761)]
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x88c), _0x35cdcb(0x339), 'stork_3_right', _0x35cdcb(0x967), _0x35cdcb(0x413), _0x35cdcb(0xad7), _0x35cdcb(0x5e3), _0x35cdcb(0xa95), 'stork_9_right', 'stork_8_right', _0x35cdcb(0x5e3), _0x35cdcb(0xad7), 'stork_5_right', 'stork_4_right', 'stork_3_right', _0x35cdcb(0x339)],
                'animationFrameTime': 0x1e
            },
            'flapping_left': {
                'sprites': ['stork_1_left', _0x35cdcb(0xa33), 'stork_3_left', _0x35cdcb(0x530), _0x35cdcb(0xacc), _0x35cdcb(0x1cf), _0x35cdcb(0x1ec), _0x35cdcb(0xa34), _0x35cdcb(0xa85), _0x35cdcb(0xa34), _0x35cdcb(0x1ec), _0x35cdcb(0x1cf), _0x35cdcb(0xacc), 'stork_4_left', _0x35cdcb(0x761), 'stork_2_left'],
                'animationFrameTime': 0x1e
            }
        },
        'animation': _0x35cdcb(0x910),
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0x3e4)],
        'petOffset': {
            'x': 0x64,
            'y': 0x5a
        }
    },
    'vulture': {
        'name': _0x35cdcb(0x555),
        'type': objectType['PLAYER'],
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
                'sprites': [_0x35cdcb(0x49b)]
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0x425)]
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x5d1), 'vulture_2_right', _0x35cdcb(0x49b), _0x35cdcb(0x32c), _0x35cdcb(0x58d), 'vulture_6_right', 'vulture_7_right', _0x35cdcb(0xb14), _0x35cdcb(0x3ea), _0x35cdcb(0x819), _0x35cdcb(0x58d), _0x35cdcb(0x32c), _0x35cdcb(0x49b), _0x35cdcb(0x374)],
                'animationFrameTime': 0x1e
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x60a), _0x35cdcb(0x96c), _0x35cdcb(0x425), 'vulture_4_left', _0x35cdcb(0x386), _0x35cdcb(0x8bf), _0x35cdcb(0x230), _0x35cdcb(0xa60), _0x35cdcb(0x230), _0x35cdcb(0xa9d), _0x35cdcb(0x8bf), _0x35cdcb(0x386), _0x35cdcb(0x425), _0x35cdcb(0x96c)],
                'animationFrameTime': 0x1e
            }
        },
        'animation': 'flying_right',
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0x215)],
        'petOffset': {
            'x': 0x6e,
            'y': 0x6e
        }
    },
    'raven': {
        'name': _0x35cdcb(0x9a7),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0xa5b)]
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x424), _0x35cdcb(0x6c3), _0x35cdcb(0x418), 'raven_4_right', 'raven_5_right', 'raven_6_right', _0x35cdcb(0x2e9), _0x35cdcb(0x4b5), _0x35cdcb(0xa45), _0x35cdcb(0x82d), _0x35cdcb(0x418), _0x35cdcb(0x6c3)],
                'animationFrameTime': 0x1e
            },
            'flapping_left': {
                'sprites': ['raven_1_left', _0x35cdcb(0x8ff), _0x35cdcb(0xa5b), _0x35cdcb(0xa70), _0x35cdcb(0x6f4), 'raven_6_left', _0x35cdcb(0x8ed), _0x35cdcb(0x1d5), _0x35cdcb(0x6f4), _0x35cdcb(0xa70), _0x35cdcb(0xa5b), _0x35cdcb(0x8ff)],
                'animationFrameTime': 0x1e
            }
        },
        'animation': _0x35cdcb(0x910),
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0x215)],
        'petOffset': {
            'x': 0x5a,
            'y': 0x78
        }
    },
    'alienBat': {
        'name': 'alienBat',
        'fullName': 'Cosmic\x20Bat',
        'type': objectType['PLAYER'],
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
                'sprites': [_0x35cdcb(0x4d7), _0x35cdcb(0x57e)],
                'animationFrameTime': 0xc8
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0x52b), _0x35cdcb(0x438)],
                'animationFrameTime': 0xc8
            },
            'flapping_right': {
                'sprites': ['alienBat_1_flying_right', 'alienBat_2_flying_right'],
                'animationFrameTime': 0xc8
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x1f1), 'alienBat_2_flying_left'],
                'animationFrameTime': 0xc8
            }
        },
        'animation': _0x35cdcb(0x910),
        'spaceResistance': !![],
        'skill': game[_0x35cdcb(0x3a1)]['toTheMoon'],
        'petOffset': {
            'x': 0x28,
            'y': 0xa5
        }
    },
    'overfedAlienBat': {
        'name': _0x35cdcb(0x288),
        'fullName': 'Overfed\x20Cosmic\x20Bat',
        'type': objectType[_0x35cdcb(0x51f)],
        'width': 0x111,
        'height': 0xd6,
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.3,
            'right': 0.3,
            'top': 0.45,
            'bottom': 0.1
        },
        'animations': {
            'flying_right': {
                'sprites': ['overfedAlienBat_1_right', _0x35cdcb(0x401), _0x35cdcb(0x1f8)],
                'animationFrameTime': 0xb4
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0x53f), 'overfedAlienBat_2_left', 'overfedAlienBat_3_left'],
                'animationFrameTime': 0xb4
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0xa2d), _0x35cdcb(0x401), _0x35cdcb(0x1f8)],
                'animationFrameTime': 0xb4
            },
            'flapping_left': {
                'sprites': ['overfedAlienBat_1_left', _0x35cdcb(0x93b), _0x35cdcb(0x70a)],
                'animationFrameTime': 0xb4
            }
        },
        'animation': _0x35cdcb(0x910),
        'spaceResistance': !![],
        'skill': game['skills'][_0x35cdcb(0x976)],
        'petOffset': {
            'x': 0x28,
            'y': 0xa5
        }
    },
    'alienBigEye': {
        'name': _0x35cdcb(0x5ad),
        'fullName': _0x35cdcb(0x2c5),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0x51c)]
            },
            'flying_left': {
                'sprites': ['alienBigEye_12_left']
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x6ef), _0x35cdcb(0x34c), 'alienBigEye_3_right', _0x35cdcb(0x838), 'alienBigEye_5_right', 'alienBigEye_6_right', 'alienBigEye_7_right', 'alienBigEye_8_right', _0x35cdcb(0xb31), _0x35cdcb(0x422), _0x35cdcb(0x8f0), _0x35cdcb(0x51c)],
                'animationFrameTime': 0x3c
            },
            'flapping_left': {
                'sprites': ['alienBigEye_1_left', _0x35cdcb(0x2e8), _0x35cdcb(0x83a), _0x35cdcb(0x2da), 'alienBigEye_5_left', _0x35cdcb(0x75d), _0x35cdcb(0x77f), _0x35cdcb(0x8ba), _0x35cdcb(0x9f0), _0x35cdcb(0xaf8), 'alienBigEye_11_left', 'alienBigEye_12_left'],
                'animationFrameTime': 0x3c
            }
        },
        'animation': _0x35cdcb(0x910),
        'spaceResistance': !![],
        'petOffset': {
            'x': 0x64,
            'y': 0x96
        }
    },
    'alienAngryEye': {
        'name': _0x35cdcb(0x9f7),
        'fullName': _0x35cdcb(0x97b),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0x8c1)]
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0x44b)]
            },
            'flapping_right': {
                'sprites': ['alienAngryEye_1_right', _0x35cdcb(0x7db), _0x35cdcb(0xa71), _0x35cdcb(0x69f), 'alienAngryEye_5_right', _0x35cdcb(0x8c1)],
                'animationFrameTime': 0x3c
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0xb15), 'alienAngryEye_2_left', _0x35cdcb(0x4cd), _0x35cdcb(0x7c9), 'alienAngryEye_5_left', _0x35cdcb(0x44b)],
                'animationFrameTime': 0x3c
            }
        },
        'animation': _0x35cdcb(0x910),
        'spaceResistance': !![],
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0x976)],
        'petOffset': {
            'x': 0x32,
            'y': 0xb4
        }
    },
    'owl': {
        'name': _0x35cdcb(0x5f7),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0x2fe)]
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0x319)]
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x2fe), _0x35cdcb(0x5c5), _0x35cdcb(0x883), _0x35cdcb(0x541), _0x35cdcb(0x8c0), 'owl_6_right', 'owl_7_right', _0x35cdcb(0x38a), 'owl_9_right'],
                'animationFrameTime': 0x3c
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x319), _0x35cdcb(0x7e7), _0x35cdcb(0x4ea), _0x35cdcb(0x982), _0x35cdcb(0x34e), 'owl_6_left', _0x35cdcb(0x6b8), 'owl_8_left', _0x35cdcb(0x898)],
                'animationFrameTime': 0x3c
            }
        },
        'animation': 'flying_right',
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0x4ee)],
        'petOffset': {
            'x': 0x50,
            'y': 0x55
        }
    },
    'snowyOwl': {
        'name': _0x35cdcb(0x27a),
        'fullName': _0x35cdcb(0x7c7),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0x291)]
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x22c), 'snowyOwl_2_right', _0x35cdcb(0x84f), 'snowyOwl_4_right', _0x35cdcb(0x83c), _0x35cdcb(0x66b), _0x35cdcb(0xa62), _0x35cdcb(0x621), _0x35cdcb(0x798)],
                'animationFrameTime': 0x3c
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x291), 'snowyOwl_2_left', _0x35cdcb(0x8c9), _0x35cdcb(0x8b5), _0x35cdcb(0xafe), _0x35cdcb(0x367), _0x35cdcb(0xb25), _0x35cdcb(0x36b), _0x35cdcb(0x4d2)],
                'animationFrameTime': 0x3c
            }
        },
        'animation': _0x35cdcb(0x910),
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0x4ee)],
        'customSpawn': _0x35cdcb(0xa64),
        'petOffset': {
            'x': 0x55,
            'y': 0x64
        }
    },
    'grimReaper': {
        'name': _0x35cdcb(0xad1),
        'fullName': 'Grim\x20Reaper',
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0x96b), _0x35cdcb(0x3da), _0x35cdcb(0x1e2), _0x35cdcb(0x7f9), _0x35cdcb(0xa52), 'grimReaper_6_idle_right', _0x35cdcb(0xa52), _0x35cdcb(0x7f9), _0x35cdcb(0x1e2), _0x35cdcb(0x3da), _0x35cdcb(0x96b)],
                'animationFrameTime': 0x64
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0x6cb), _0x35cdcb(0x678), 'grimReaper_3_idle_left', 'grimReaper_4_idle_left', _0x35cdcb(0xaa4), _0x35cdcb(0x8ee), _0x35cdcb(0xaa4), 'grimReaper_4_idle_left', _0x35cdcb(0xa35), _0x35cdcb(0x678), _0x35cdcb(0x6cb)],
                'animationFrameTime': 0x64
            },
            'flapping_right': {
                'sprites': ['grimReaper_1_flying_right', _0x35cdcb(0x4b6), _0x35cdcb(0x4fb), 'grimReaper_4_flying_right', _0x35cdcb(0xa9a), _0x35cdcb(0x246), _0x35cdcb(0x4fb), _0x35cdcb(0x4b6)],
                'animationFrameTime': 0x64
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x362), _0x35cdcb(0x906), _0x35cdcb(0x28c), _0x35cdcb(0x23b), 'grimReaper_5_flying_left', 'grimReaper_4_flying_left', _0x35cdcb(0x28c), _0x35cdcb(0x906)],
                'animationFrameTime': 0x64
            },
            'attacking_right': {
                'sprites': [_0x35cdcb(0x7ff), _0x35cdcb(0x889), _0x35cdcb(0xa7e), _0x35cdcb(0x66f), _0x35cdcb(0x3e0), 'grimReaper_6_attack_right', _0x35cdcb(0x64e), 'grimReaper_8_attack_right'],
                'animationFrameTime': 0x1e
            },
            'attacking_left': {
                'sprites': [_0x35cdcb(0x492), _0x35cdcb(0xa92), 'grimReaper_3_attack_left', _0x35cdcb(0x5c1), _0x35cdcb(0x6dd), _0x35cdcb(0xa20), _0x35cdcb(0x370), _0x35cdcb(0x760)],
                'animationFrameTime': 0x1e
            }
        },
        'animation': _0x35cdcb(0x910),
        'eatsSouls': !![],
        'canEnterBoss': !![],
        'canEnterArena': !![],
        'canEnterBattleRoyale': !![],
        'skill': game[_0x35cdcb(0x3a1)]['scytheAttack1'],
        'petOffset': {
            'x': 0x5f,
            'y': 0x8c
        }
    },
    'pumpkinGhost': {
        'name': _0x35cdcb(0x5a5),
        'fullName': _0x35cdcb(0x928),
        'type': objectType[_0x35cdcb(0x51f)],
        'width': 0xd5,
        'height': 0xa9,
        'moveable': !![],
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
                'sprites': [_0x35cdcb(0x325), 'pumpkinGhost_2_right', _0x35cdcb(0x852), _0x35cdcb(0x4c3), _0x35cdcb(0x5cb), _0x35cdcb(0x865), _0x35cdcb(0x6a1), _0x35cdcb(0xace), 'pumpkinGhost_9_right', _0x35cdcb(0xace), _0x35cdcb(0x6a1), _0x35cdcb(0x865), _0x35cdcb(0x5cb), _0x35cdcb(0x4c3), _0x35cdcb(0x852), _0x35cdcb(0xa18)],
                'animationFrameTime': 0x5a
            },
            'flapping_left': {
                'sprites': ['pumpkinGhost_1_left', _0x35cdcb(0x7df), _0x35cdcb(0xb22), _0x35cdcb(0x5f5), _0x35cdcb(0x85f), 'pumpkinGhost_6_left', _0x35cdcb(0x502), _0x35cdcb(0x51a), 'pumpkinGhost_9_left', _0x35cdcb(0x51a), _0x35cdcb(0x502), _0x35cdcb(0x6b6), 'pumpkinGhost_5_left', _0x35cdcb(0x5f5), _0x35cdcb(0xb22), _0x35cdcb(0x7df)],
                'animationFrameTime': 0x5a
            },
            'attacking_right': {
                'sprites': [_0x35cdcb(0x6b0), _0x35cdcb(0x7f6), _0x35cdcb(0x729), _0x35cdcb(0x4a1), _0x35cdcb(0x82c), _0x35cdcb(0x4a1), _0x35cdcb(0x729), _0x35cdcb(0x7f6), 'pumpkinGhost_1_attack_right'],
                'animationFrameTime': 0x23
            },
            'attacking_left': {
                'sprites': [_0x35cdcb(0x7fa), _0x35cdcb(0x624), _0x35cdcb(0x260), 'pumpkinGhost_4_attack_left', _0x35cdcb(0x271), _0x35cdcb(0x93e), _0x35cdcb(0x260), _0x35cdcb(0x624), _0x35cdcb(0x7fa)],
                'animationFrameTime': 0x23
            }
        },
        'animation': 'flying_right',
        'eatsSouls': !![],
        'canEnterBoss': !![],
        'canEnterArena': !![],
        'skill': game['skills'][_0x35cdcb(0x83e)],
        'petOffset': {
            'x': 0x5f,
            'y': 0x8c
        }
    },
    'wasp': {
        'name': _0x35cdcb(0x9ea),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0x415)]
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0xb2b), _0x35cdcb(0xa99), _0x35cdcb(0x48f), _0x35cdcb(0x81b)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x415), _0x35cdcb(0xa81), 'wasp_3_left', _0x35cdcb(0x5d9)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x910),
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0xb0b)],
        'petOffset': {
            'x': 0x46,
            'y': 0x46
        },
        'reapersIgnoreCollision': !![]
    },
    'hornet': {
        'name': _0x35cdcb(0xb0f),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0x5ae)]
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x837), 'hornet_2_right', _0x35cdcb(0x6a6), 'hornet_4_right', _0x35cdcb(0x6eb), _0x35cdcb(0x8f1), 'hornet_7_right', _0x35cdcb(0x41a), _0x35cdcb(0x820), _0x35cdcb(0x41a), _0x35cdcb(0xb21), _0x35cdcb(0x8f1), _0x35cdcb(0x6eb), 'hornet_4_right', _0x35cdcb(0x6a6), _0x35cdcb(0x6cf)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x5ae), _0x35cdcb(0xaca), 'hornet_3_left', _0x35cdcb(0xa86), 'hornet_5_left', _0x35cdcb(0x836), _0x35cdcb(0x7e5), _0x35cdcb(0x372), _0x35cdcb(0x8d3), _0x35cdcb(0x372), _0x35cdcb(0x7e5), _0x35cdcb(0x836), _0x35cdcb(0x45e), _0x35cdcb(0xa86), _0x35cdcb(0x330), _0x35cdcb(0xaca)],
                'animationFrameTime': 0x50
            }
        },
        'animation': 'flying_right',
        'skill': game[_0x35cdcb(0x3a1)]['poisonWasp'],
        'petOffset': {
            'x': 0x4b,
            'y': 0x55
        }
    },
    'swampMonster': {
        'name': _0x35cdcb(0x84d),
        'fullName': _0x35cdcb(0x55b),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0xa69)]
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0x860)]
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0xa69), _0x35cdcb(0x7ad), _0x35cdcb(0x419), _0x35cdcb(0x7e8), _0x35cdcb(0x825), _0x35cdcb(0x99f), _0x35cdcb(0x4d6), 'swampMonster_8_right', 'swampMonster_9_right', _0x35cdcb(0x349), _0x35cdcb(0x73b), 'swampMonster_12_right', _0x35cdcb(0x3d5), _0x35cdcb(0x269), _0x35cdcb(0x699), _0x35cdcb(0x72c), _0x35cdcb(0x91d), 'swampMonster_18_right', _0x35cdcb(0xb2c), _0x35cdcb(0x3fd)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x860), _0x35cdcb(0x357), _0x35cdcb(0x3e8), _0x35cdcb(0x8a1), _0x35cdcb(0x44c), _0x35cdcb(0x537), _0x35cdcb(0x256), _0x35cdcb(0x61e), _0x35cdcb(0x30e), 'swampMonster_10_left', _0x35cdcb(0x95a), _0x35cdcb(0x936), _0x35cdcb(0x36c), 'swampMonster_14_left', _0x35cdcb(0x35d), _0x35cdcb(0x2a7), 'swampMonster_17_left', 'swampMonster_18_left', _0x35cdcb(0x54a), _0x35cdcb(0x738)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x910),
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0x50f)],
        'petOffset': {
            'x': 0x64,
            'y': 0x78
        }
    },
    'turkey': {
        'name': _0x35cdcb(0x86d),
        'type': objectType['PLAYER'],
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
                'sprites': [_0x35cdcb(0x855)]
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0x511)]
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x42b), _0x35cdcb(0x855), 'turkey_3_right', _0x35cdcb(0x75f), _0x35cdcb(0xa80), _0x35cdcb(0x4bf), _0x35cdcb(0x4f3), _0x35cdcb(0x3cb), _0x35cdcb(0x822), _0x35cdcb(0x3cb), _0x35cdcb(0x4f3), _0x35cdcb(0x4bf), _0x35cdcb(0xa80), _0x35cdcb(0x75f), _0x35cdcb(0x2cd), _0x35cdcb(0x855)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x86e), _0x35cdcb(0x511), 'turkey_3_left', _0x35cdcb(0x28b), _0x35cdcb(0x4ad), _0x35cdcb(0xa93), 'turkey_7_left', 'turkey_8_left', _0x35cdcb(0xa0d), _0x35cdcb(0x8ec), _0x35cdcb(0x706), 'turkey_6_left', _0x35cdcb(0x4ad), _0x35cdcb(0x28b), 'turkey_3_left', 'turkey_2_left'],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x910),
        'skill': game[_0x35cdcb(0x3a1)]['dig'],
        'petOffset': {
            'x': 0x5a,
            'y': 0x64
        }
    },
    'mosquito': {
        'name': _0x35cdcb(0x7a4),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0x4c4)]
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x791), _0x35cdcb(0x76f), 'mosquito_3_right', _0x35cdcb(0x1f3)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x4c4), _0x35cdcb(0x676), 'mosquito_3_left', _0x35cdcb(0x9cb)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x910),
        'skill': game['skills']['infection'],
        'petOffset': {
            'x': 0x46,
            'y': 0x46
        },
        'reapersIgnoreCollision': !![]
    },
    'dragonfly': {
        'name': _0x35cdcb(0xb1b),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': ['dragonfly_1_right', _0x35cdcb(0x565), 'dragonfly_3_right', _0x35cdcb(0x565)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x632), _0x35cdcb(0x5ec), _0x35cdcb(0x6fb), _0x35cdcb(0x5ec)],
                'animationFrameTime': 0x50
            }
        },
        'animation': 'flying_right',
        'skill': game[_0x35cdcb(0x3a1)]['grabPrey'],
        'petOffset': {
            'x': 0x46,
            'y': 0x32
        },
        'reapersIgnoreCollision': !![]
    },
    'blueBird': {
        'name': _0x35cdcb(0x5f3),
        'fullName': _0x35cdcb(0x767),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0xacd)]
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0x5fd)]
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0xacd), _0x35cdcb(0x4b1), 'blueBird_3_right', _0x35cdcb(0x356)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x5fd), _0x35cdcb(0x275), 'blueBird_3_left', _0x35cdcb(0x6c5)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x910),
        'skill': game['skills'][_0x35cdcb(0x5e0)],
        'petOffset': {
            'x': 0x46,
            'y': 0x46
        }
    },
    'seagull': {
        'name': _0x35cdcb(0xaaf),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': ['seagull_1_right', _0x35cdcb(0x712), 'seagull_3_right', 'seagull_4_right'],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x665), _0x35cdcb(0xaf2), _0x35cdcb(0xa00), 'seagull_4_left'],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x910),
        'skill': game[_0x35cdcb(0x3a1)]['diving'],
        'petOffset': {
            'x': 0x50,
            'y': 0x46
        }
    },
    'pigeon': {
        'name': 'pigeon',
        'type': objectType['PLAYER'],
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
                'sprites': [_0x35cdcb(0x47c)]
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0x63e)]
            },
            'standing_right': {
                'sprites': [_0x35cdcb(0x8c3)]
            },
            'standing_left': {
                'sprites': ['pigeon_6_left']
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x47c), _0x35cdcb(0x36a), 'pigeon_3_right', _0x35cdcb(0x526), 'pigeon_5_right', _0x35cdcb(0x526), 'pigeon_3_right', _0x35cdcb(0x36a)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x63e), _0x35cdcb(0x743), _0x35cdcb(0x26f), _0x35cdcb(0x960), _0x35cdcb(0xaba), _0x35cdcb(0x960), 'pigeon_3_left', _0x35cdcb(0x743)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'skill': game['skills'][_0x35cdcb(0x34a)],
        'petOffset': {
            'x': 0x46,
            'y': 0x46
        }
    },
    'hen': {
        'name': 'hen',
        'type': objectType['PLAYER'],
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
                'sprites': [_0x35cdcb(0x308)]
            },
            'flying_left': {
                'sprites': ['hen_1_left']
            },
            'standing_right': {
                'sprites': [_0x35cdcb(0x6fd)]
            },
            'standing_left': {
                'sprites': [_0x35cdcb(0x655)]
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x308), _0x35cdcb(0x975), _0x35cdcb(0x4ba), _0x35cdcb(0x994), _0x35cdcb(0x4ba), _0x35cdcb(0x975)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x2b5), 'hen_2_left', _0x35cdcb(0x6fe), 'hen_4_left', _0x35cdcb(0x6fe), _0x35cdcb(0xa8f)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0xa06)],
        'petOffset': {
            'x': 0x46,
            'y': 0x46
        }
    },
    'duck': {
        'name': _0x35cdcb(0x9a6),
        'type': objectType['PLAYER'],
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
                'sprites': ['duck_1_right', _0x35cdcb(0x460), _0x35cdcb(0x55a), _0x35cdcb(0x2f0), _0x35cdcb(0x484), _0x35cdcb(0x2f0), 'duck_3_right', _0x35cdcb(0x460)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x89a), _0x35cdcb(0xa58), _0x35cdcb(0x8fa), 'duck_4_left', _0x35cdcb(0x54c), 'duck_4_left', _0x35cdcb(0x8fa), _0x35cdcb(0xa58)],
                'animationFrameTime': 0x50
            }
        },
        'animation': 'flapping_right',
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0x8e9)],
        'petOffset': {
            'x': 0x46,
            'y': 0x46
        }
    },
    'parrot': {
        'name': 'parrot',
        'type': objectType['PLAYER'],
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
                'sprites': [_0x35cdcb(0x505)]
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0xa48)]
            },
            'flapping_right': {
                'sprites': [_0x35cdcb(0x681), 'parrot_2_right', _0x35cdcb(0x749), _0x35cdcb(0x856), _0x35cdcb(0x505), _0x35cdcb(0x212), _0x35cdcb(0x505), _0x35cdcb(0x856), 'parrot_3_right', _0x35cdcb(0x2d1)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0xa04), 'parrot_2_left', _0x35cdcb(0x9bb), _0x35cdcb(0x9d2), _0x35cdcb(0xa48), _0x35cdcb(0x523), _0x35cdcb(0xa48), 'parrot_4_left', _0x35cdcb(0x9bb), _0x35cdcb(0x1d2)],
                'animationFrameTime': 0x50
            }
        },
        'animation': 'flying_right',
        'skill': game['skills']['fruitEater'],
        'petOffset': {
            'x': 0x46,
            'y': 0x50
        }
    },
    'redBird': {
        'name': _0x35cdcb(0x282),
        'fullName': _0x35cdcb(0x382),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0x30c)]
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0x20f)]
            },
            'flapping_right': {
                'sprites': ['redBird_1_right', _0x35cdcb(0x488), _0x35cdcb(0x1e5), _0x35cdcb(0x30c)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x638), _0x35cdcb(0x926), _0x35cdcb(0x65f), _0x35cdcb(0x20f)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x910),
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0x5e0)],
        'petOffset': {
            'x': 0x46,
            'y': 0x46
        }
    },
    'commonBlackbird': {
        'name': _0x35cdcb(0x922),
        'fullName': _0x35cdcb(0x385),
        'type': objectType[_0x35cdcb(0x51f)],
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
                'sprites': [_0x35cdcb(0x564), 'commonBlackbird_2_right', _0x35cdcb(0x82b), 'commonBlackbird_4_right'],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': ['commonBlackbird_1_left', _0x35cdcb(0x577), _0x35cdcb(0x9b7), _0x35cdcb(0x434)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x910),
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0x5e0)],
        'petOffset': {
            'x': 0x46,
            'y': 0x46
        }
    },
    'pompadourCotinga': {
        'name': _0x35cdcb(0xa96),
        'fullName': _0x35cdcb(0x716),
        'type': objectType['PLAYER'],
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
                'sprites': [_0x35cdcb(0x44d)]
            },
            'flying_left': {
                'sprites': [_0x35cdcb(0xa31)]
            },
            'flapping_right': {
                'sprites': ['pompadourCotinga_1_right', 'pompadourCotinga_2_right', _0x35cdcb(0x3fa), _0x35cdcb(0x44d), _0x35cdcb(0x3fa), _0x35cdcb(0x9ac)],
                'animationFrameTime': 0x32
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x8de), 'pompadourCotinga_2_left', _0x35cdcb(0x50d), _0x35cdcb(0xa31), 'pompadourCotinga_3_left', _0x35cdcb(0x62a)],
                'animationFrameTime': 0x32
            }
        },
        'animation': 'flying_right',
        'skill': game[_0x35cdcb(0x3a1)]['swoop'],
        'petOffset': {
            'x': 0x5a,
            'y': 0x46
        }
    },
    'hawk': {
        'name': _0x35cdcb(0x95b),
        'type': objectType['PLAYER'],
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
                'sprites': [_0x35cdcb(0x8c6)]
            },
            'flapping_right': {
                'sprites': ['hawk_1_right', _0x35cdcb(0x795), 'hawk_3_right', _0x35cdcb(0x5c2), _0x35cdcb(0x695), _0x35cdcb(0x795)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x8c6), _0x35cdcb(0x7ba), 'hawk_3_left', _0x35cdcb(0x506), _0x35cdcb(0xb03), _0x35cdcb(0x7ba)],
                'animationFrameTime': 0x50
            }
        },
        'animation': 'flying_right',
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0xafb)],
        'petOffset': {
            'x': 0x55,
            'y': 0x46
        }
    },
    'dirt_grass': {
        'name': _0x35cdcb(0x7c5),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            0x1: {
                'sprites': ['dirt_grass1']
            },
            0x2: {
                'sprites': [_0x35cdcb(0x307)]
            },
            0x3: {
                'sprites': [_0x35cdcb(0xb24)]
            }
        },
        'animation': '1',
        'autoBorder': !![],
        'antiStuck': !![],
        'staticCanvas': !![]
    },
    'dirt_graveyard': {
        'name': 'dirt_graveyard',
        'type': objectType['TILE'],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            0x1: {
                'sprites': [_0x35cdcb(0x71f)]
            },
            0x2: {
                'sprites': [_0x35cdcb(0x1e0)]
            },
            0x3: {
                'sprites': [_0x35cdcb(0x866)]
            },
            0x4: {
                'sprites': ['dirt_graveyard_4']
            }
        },
        'animation': '1',
        'autoBorder': !![],
        'antiStuck': !![],
        'staticCanvas': !![]
    },
    'arena_tile_top': {
        'name': 'arena_tile_top',
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            0x1: {
                'sprites': ['arena_tile_top_1']
            },
            0x2: {
                'sprites': [_0x35cdcb(0x873)]
            }
        },
        'animation': '1',
        'antiStuck': !![],
        'staticCanvas': !![]
    },
    'arena_tile_top_breakable': {
        'name': _0x35cdcb(0x20b),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            0x1: {
                'sprites': [_0x35cdcb(0x671)]
            },
            0x2: {
                'sprites': [_0x35cdcb(0x806)]
            }
        },
        'animation': '1',
        'antiStuck': !![],
        'staticCanvas': !![],
        'breakableByExplosion': !![]
    },
    'dirt_snow': {
        'name': 'dirt_snow',
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            0x1: {
                'sprites': [_0x35cdcb(0x6e5)]
            },
            0x2: {
                'sprites': [_0x35cdcb(0x313)]
            }
        },
        'animation': '1',
        'autoBorder': !![],
        'collideMovementReduce': 0.975,
        'antiStuck': !![],
        'staticCanvas': !![]
    },
    'iceBlock': {
        'name': _0x35cdcb(0x239),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x239)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'collideMovementReduce': 0.99,
        'antiStuck': !![]
    },
    'ice_left': {
        'name': 'ice_left',
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x80,
        'height': 0x80,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0x0,
            'right': 0x0,
            'top': 0x0,
            'bottom': 0.2
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x48c)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'collideMovementReduce': 0.99
    },
    'ice_middle': {
        'name': _0x35cdcb(0x25c),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x280,
        'height': 0x80,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0x0,
            'right': 0x0,
            'top': 0x0,
            'bottom': 0.2
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x25c)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'collideMovementReduce': 0.99
    },
    'ice_right': {
        'name': 'ice_right',
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x140,
        'height': 0x80,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0x0,
            'right': 0x0,
            'top': 0x0,
            'bottom': 0.2
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x880)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'collideMovementReduce': 0.99
    },
    'beam': {
        'name': _0x35cdcb(0x4d3),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x108,
        'height': 0x2c,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0x0,
            'right': 0x0,
            'top': 0x0,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x4d3)]
            }
        },
        'animation': _0x35cdcb(0x6c9)
    },
    'mine_track': {
        'name': _0x35cdcb(0x2ea),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x40,
        'height': 0xf,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0x0,
            'right': 0x0,
            'top': 0.05,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x2ea)]
            }
        },
        'animation': _0x35cdcb(0x6c9)
    },
    'mine_buffer': {
        'name': 'mine_buffer',
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x46,
        'height': 0x3f,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.6,
            'right': 0.15,
            'top': 0.05,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0xa77)]
            }
        },
        'animation': 'none'
    },
    'mine_cart': {
        'name': 'mine_cart',
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x64,
        'height': 0x5c,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.1,
            'right': 0.1,
            'top': 0.1,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x973)]
            }
        },
        'animation': _0x35cdcb(0x6c9)
    },
    'jungleTop': {
        'name': 'jungleTop',
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x80,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x28f)]
            }
        },
        'autoBorder': !![],
        'animation': _0x35cdcb(0x6c9),
        'antiStuck': !![]
    },
    'jungleBottom': {
        'name': _0x35cdcb(0x938),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x80,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x938)]
            }
        },
        'autoBorder': !![],
        'animation': _0x35cdcb(0x6c9),
        'antiStuck': !![]
    },
    'boat_1': {
        'name': _0x35cdcb(0x818),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x80,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
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
        'animation': _0x35cdcb(0x6c9),
        'antiStuck': !![]
    },
    'boat_2': {
        'name': 'boat_2',
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x80,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0xa37)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'antiStuck': !![]
    },
    'boat_3': {
        'name': _0x35cdcb(0x3c5),
        'type': objectType['TILE'],
        'width': 0x80,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0x0,
            'right': 0.5,
            'top': 0x0,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x3c5)]
            }
        },
        'animation': 'none',
        'antiStuck': !![]
    },
    'boat_4': {
        'name': 'boat_4',
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x80,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0xac4)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'antiStuck': !![]
    },
    'boat_5': {
        'name': _0x35cdcb(0x61a),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x80,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x61a)]
            }
        },
        'animation': 'none',
        'antiStuck': !![]
    },
    'boat_6': {
        'name': _0x35cdcb(0x30f),
        'type': objectType['TILE'],
        'width': 0x80,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x30f)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'antiStuck': !![]
    },
    'boat_porthole': {
        'name': _0x35cdcb(0xacf),
        'type': objectType['TILE'],
        'width': 0x80,
        'height': 0x80,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0xacf)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x6
    },
    'boat_cannon': {
        'name': 'boat_cannon',
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x80,
        'height': 0x7b,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x66d)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x6
    },
    'boat_sail': {
        'name': _0x35cdcb(0xadf),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x171,
        'height': 0x280,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['boat_sail']
            }
        },
        'animation': _0x35cdcb(0x6c9)
    },
    'dirt': {
        'name': _0x35cdcb(0x233),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            0x1: {
                'sprites': [_0x35cdcb(0x9f4)]
            },
            0x2: {
                'sprites': ['dirt2']
            },
            0x3: {
                'sprites': [_0x35cdcb(0x955)]
            },
            0x4: {
                'sprites': [_0x35cdcb(0x73c)]
            },
            0x5: {
                'sprites': [_0x35cdcb(0x7f2)]
            },
            0x6: {
                'sprites': [_0x35cdcb(0x8c2)]
            },
            0x7: {
                'sprites': ['dirt7']
            },
            0x8: {
                'sprites': [_0x35cdcb(0x772)]
            },
            0x9: {
                'sprites': [_0x35cdcb(0x67d)]
            }
        },
        'animation': '1',
        'antiStuck': !![],
        'autoBorder': !![],
        'staticCanvas': !![]
    },
    'dirt_fill_graveyard': {
        'name': _0x35cdcb(0x611),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            0x1: {
                'sprites': [_0x35cdcb(0x6aa)]
            },
            0x2: {
                'sprites': [_0x35cdcb(0x3a4)]
            },
            0x3: {
                'sprites': ['dirt_fill_graveyard_3']
            },
            0x4: {
                'sprites': [_0x35cdcb(0x6cc)]
            },
            0x5: {
                'sprites': ['dirt_fill_graveyard_5']
            },
            0x6: {
                'sprites': ['dirt_fill_graveyard_6']
            },
            0x7: {
                'sprites': [_0x35cdcb(0xb06)]
            },
            0x8: {
                'sprites': [_0x35cdcb(0x801)]
            },
            0x9: {
                'sprites': [_0x35cdcb(0x1db)]
            }
        },
        'animation': '1',
        'antiStuck': !![],
        'autoBorder': !![],
        'staticCanvas': !![]
    },
    'dirt_top': {
        'name': 'dirt_top',
        'type': objectType['TILE'],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            0x1: {
                'sprites': [_0x35cdcb(0x3f4)]
            },
            0x2: {
                'sprites': [_0x35cdcb(0x63b)]
            },
            0x3: {
                'sprites': [_0x35cdcb(0x5cf)]
            },
            0x4: {
                'sprites': [_0x35cdcb(0xa08)]
            }
        },
        'animation': '1',
        'antiStuck': !![],
        'autoBorder': !![],
        'staticCanvas': !![]
    },
    'dirt_top_graveyard': {
        'name': _0x35cdcb(0x70e),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            0x1: {
                'sprites': [_0x35cdcb(0x861)]
            },
            0x2: {
                'sprites': ['dirt_top_graveyard_2']
            },
            0x3: {
                'sprites': [_0x35cdcb(0x619)]
            },
            0x4: {
                'sprites': [_0x35cdcb(0x8b1)]
            }
        },
        'animation': '1',
        'antiStuck': !![],
        'autoBorder': !![],
        'staticCanvas': !![]
    },
    'factory_floor_top': {
        'name': _0x35cdcb(0x82a),
        'type': objectType['TILE'],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0x0,
            'right': 0x0,
            'top': 0.16,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x82a)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'antiStuck': !![],
        'autoBorder': !![]
    },
    'factory_fill': {
        'name': 'factory_fill',
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x73e)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'antiStuck': !![],
        'autoBorder': !![]
    },
    'brick_grey': {
        'name': _0x35cdcb(0xb16),
        'type': objectType['TILE'],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0xb16)]
            }
        },
        'animation': 'none',
        'antiStuck': !![],
        'autoBorder': !![]
    },
    'brick_pyramid': {
        'name': _0x35cdcb(0x45a),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            'none': {
                'sprites': ['brick_pyramid']
            }
        },
        'animation': 'none',
        'antiStuck': !![],
        'autoBorder': !![]
    },
    'sand': {
        'name': _0x35cdcb(0x972),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x972)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'antiStuck': !![],
        'autoBorder': !![]
    },
    'black_tile': {
        'name': 'black_tile',
        'type': objectType['TILE'],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x558)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'antiStuck': !![]
    },
    'invisible_tile': {
        'name': _0x35cdcb(0x85b),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x40,
        'height': 0x40,
        'opacity': 0x0,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x558)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'antiStuck': !![]
    },
    'sand_volleyball': {
        'name': _0x35cdcb(0x2b6),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x972)]
            }
        },
        'animation': 'none',
        'antiStuck': !![],
        'collideMovementReduce': 0.99,
        'autoBorder': !![]
    },
    'arena_tile_fill': {
        'name': 'arena_tile_fill',
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x913)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'antiStuck': !![]
    },
    'arena_tile_fill_breakable': {
        'name': 'arena_tile_fill_breakable',
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            'none': {
                'sprites': ['arena_tile_fill_breakable']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'antiStuck': !![],
        'breakableByExplosion': !![]
    },
    'greystone': {
        'name': 'greystone',
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            'none': {
                'sprites': ['greystone']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'antiStuck': !![],
        'autoBorder': !![]
    },
    'greystone_sand': {
        'name': 'greystone_sand',
        'type': objectType['TILE'],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x76a)]
            }
        },
        'animation': 'none',
        'antiStuck': !![],
        'autoBorder': !![]
    },
    'fence': {
        'name': _0x35cdcb(0x396),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x40,
        'height': 0x30,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x396)]
            }
        },
        'animation': _0x35cdcb(0x6c9)
    },
    'spike_trap_bg_1': {
        'name': _0x35cdcb(0x99b),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['spike_trap_bg_1']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x6
    },
    'spike_trap_bg_2': {
        'name': _0x35cdcb(0x3c3),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['spike_trap_bg_2']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x6
    },
    'spike_trap_bg_3': {
        'name': _0x35cdcb(0x750),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x750)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x6
    },
    'spike_trap_bg_4': {
        'name': 'spike_trap_bg_4',
        'type': objectType['BACKGROUND'],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x5b7)]
            }
        },
        'animation': 'none',
        'zIndex': 0x6
    },
    'spike_trap_bg_5': {
        'name': 'spike_trap_bg_5',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x67a)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x6
    },
    'spike_trap_bg_6': {
        'name': _0x35cdcb(0x21c),
        'type': objectType['BACKGROUND'],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x21c)]
            }
        },
        'animation': 'none',
        'zIndex': 0x6
    },
    'spike_trap_bg_7': {
        'name': 'spike_trap_bg_7',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x73d)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x6
    },
    'spike_trap_bg_8': {
        'name': _0x35cdcb(0x753),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x753)]
            }
        },
        'animation': 'none',
        'zIndex': 0x6
    },
    'spike_trap_bg_9': {
        'name': _0x35cdcb(0x5dd),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x5dd)]
            }
        },
        'animation': 'none',
        'zIndex': 0x6
    },
    'spike_trap_bg_10': {
        'name': _0x35cdcb(0x1c9),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x1c9)]
            }
        },
        'animation': 'none',
        'zIndex': 0x6
    },
    'spike_trap_bg_11': {
        'name': _0x35cdcb(0x218),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x218)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x6
    },
    'spike_trap_bg_12': {
        'name': _0x35cdcb(0x934),
        'type': objectType['BACKGROUND'],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['spike_trap_bg_12']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x6
    },
    'spike_trap_bg_13': {
        'name': _0x35cdcb(0xa4a),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0xa4a)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x6
    },
    'spike_trap_bg_14': {
        'name': _0x35cdcb(0x5be),
        'type': objectType['BACKGROUND'],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x5be)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x6
    },
    'spike_trap_bg_15': {
        'name': _0x35cdcb(0x38b),
        'type': objectType['BACKGROUND'],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
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
        'type': objectType['MISC'],
        'width': 0xc0,
        'height': 0xc0,
        'colliderRectangleOffset': {
            'left': 0.2,
            'right': 0.2,
            'top': 0.2,
            'bottom': 0.2
        },
        'gravityOn': ![],
        'moveable': !![],
        'isCollider': !![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x3af)]
            }
        },
        'animation': 'none',
        'interpolateSpeed': 0.2,
        'cantBePushed': !![],
        'zIndex': 0x7
    },
    'pipe': {
        'name': _0x35cdcb(0x52c),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x4a,
        'height': 0x4f,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['pipe']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x65
    },
    'pipe_foreground': {
        'name': _0x35cdcb(0x711),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x4a,
        'height': 0x4f,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x52c)]
            }
        },
        'animation': 'none',
        'zIndex': 0x65,
        'staticCanvas': ![]
    },
    'pipe_upper': {
        'name': _0x35cdcb(0x732),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x4a,
        'height': 0x4f,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x732)]
            }
        },
        'animation': 'none',
        'zIndex': 0x64
    },
    'pipe_lower': {
        'name': _0x35cdcb(0x793),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x4a,
        'height': 0x5d,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x793)]
            }
        },
        'animation': 'none',
        'zIndex': 0x64
    },
    'pipe_exit': {
        'name': 'pipe_exit',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x79,
        'height': 0x90,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x6b3)]
            }
        },
        'animation': 'none',
        'zIndex': -0x1f4
    },
    'pipe_background': {
        'name': _0x35cdcb(0x945),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x4a,
        'height': 0x9c,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x945)]
            }
        },
        'animation': 'none',
        'zIndex': -0x190
    },
    'stalk_light_green': {
        'name': _0x35cdcb(0x99c),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x40,
        'height': 0x4a,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': !![],
        'colliderRectangleOffset': {
            'left': 0.42,
            'right': 0.34,
            'top': 0x0,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x99c)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'antiStuck': !![]
    },
    'ectoplasm_fire': {
        'name': _0x35cdcb(0xa0e),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0xe5,
        'height': 0xc0,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.1,
            'right': 0.1,
            'top': 0x0,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': ['ectoplasm_fire_1', _0x35cdcb(0x3e5), _0x35cdcb(0x28e), _0x35cdcb(0x23d)],
                'animationFrameTime': 0x78
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x64,
        'light': !![],
        'light_radius': 0xaa,
        'light_random_radius': 0xa
    },
    'kingJustice': {
        'name': _0x35cdcb(0x74c),
        'type': objectType['MISC'],
        'width': 0x9a,
        'height': 0x80,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': !![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x6da), _0x35cdcb(0x915), _0x35cdcb(0x60c), _0x35cdcb(0x915), _0x35cdcb(0x6da)],
                'animationFrameTime': 0x64
            }
        },
        'animation': 'none',
        'zIndex': -0x1f4
    },
    'parchment_info': {
        'name': _0x35cdcb(0x3e9),
        'type': objectType[_0x35cdcb(0x755)],
        'width': 0x50,
        'height': 0x50,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': !![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x3e9)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x1f4
    },
    'executioner': {
        'name': 'executioner',
        'type': objectType[_0x35cdcb(0x755)],
        'width': 0xf6,
        'height': 0xbc,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': !![],
        'colliderRectangleOffset': {
            'left': 0.3,
            'right': 0.3,
            'top': 0.1,
            'bottom': 0.1
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x71b), _0x35cdcb(0x2dc), _0x35cdcb(0xa5f), 'executioner_4', _0x35cdcb(0x4ac), _0x35cdcb(0x3f5), 'executioner_5', _0x35cdcb(0x454), 'executioner_3', 'executioner_2'],
                'animationFrameTime': 0x64
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x5a
    },
    'torch': {
        'name': 'torch',
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x1c,
        'height': 0x6a,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x5f2), _0x35cdcb(0x692), _0x35cdcb(0x88f), _0x35cdcb(0x76b), _0x35cdcb(0x397), _0x35cdcb(0x5ed)],
                'animationFrameTime': 0x5a
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x1f4,
        'light': !![],
        'light_radius': 0x190,
        'light_random_radius': 0x8
    },
    'arena_torch': {
        'name': _0x35cdcb(0x409),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x5a,
        'height': 0x6c,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0xa66), 'arena_torch_2', _0x35cdcb(0x4b8), 'arena_torch_4', _0x35cdcb(0x96e)],
                'animationFrameTime': 0x5a
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x63
    },
    'factory_lamp': {
        'name': _0x35cdcb(0x7b0),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0xc3,
        'height': 0x15e,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x7b0)]
            }
        },
        'animation': 'none',
        'zIndex': -0x1f4,
        'light': !![],
        'light_radius': 0x320,
        'staticCanvas': ![]
    },
    'green_light': {
        'name': _0x35cdcb(0x7cd),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x2c,
        'height': 0x3b,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x7cd)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x1f4,
        'light': !![],
        'light_radius': 0x12c
    },
    'water': {
        'name': _0x35cdcb(0x5cc),
        'type': objectType[_0x35cdcb(0x737)],
        'opacity': 0.85,
        'width': 0x80,
        'height': 0x100,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0x0,
            'right': 0x0,
            'top': 0.2,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': ['water1', _0x35cdcb(0xb2d)],
                'animationFrameTime': 0x1f4
            }
        },
        'animation': 'none',
        'fixedDraw': !![],
        'zIndex': 0x64
    },
    'water2': {
        'name': _0x35cdcb(0xb2d),
        'type': objectType[_0x35cdcb(0x737)],
        'opacity': 0.8,
        'width': 0x80,
        'height': 0x100,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0x0,
            'right': 0x0,
            'top': 0.2,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x899), 'water2_2'],
                'animationFrameTime': 0x1f4
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x64,
        'fixedDraw': !![]
    },
    'water2_fill': {
        'name': 'water2_fill',
        'type': objectType[_0x35cdcb(0x737)],
        'opacity': 0.8,
        'width': 0x80,
        'height': 0x80,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0x0,
            'right': 0x0,
            'top': 0x0,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x67e)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x64,
        'fixedDraw': !![]
    },
    'ocean': {
        'name': _0x35cdcb(0x551),
        'type': objectType[_0x35cdcb(0x737)],
        'opacity': 0.8,
        'width': 0xa00,
        'height': 0x640,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0x0,
            'right': 0x0,
            'top': 0x0,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x551)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x64
    },
    'arctic': {
        'name': _0x35cdcb(0x6b1),
        'type': objectType[_0x35cdcb(0x737)],
        'opacity': 0.8,
        'width': 0x900,
        'height': 0x640,
        'gravityOn': ![],
        'moveable': ![],
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
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x64
    },
    'spiderweb_1': {
        'name': 'spiderweb_1',
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x101,
        'height': 0x155,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.07,
            'right': 0.21,
            'top': 0.16,
            'bottom': 0.1
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x766)]
            }
        },
        'animation': 'none',
        'zIndex': -0x64
    },
    'spiderweb_2': {
        'name': _0x35cdcb(0x21a),
        'type': objectType['TILE'],
        'width': 0xe7,
        'height': 0xe7,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.1,
            'right': 0.1,
            'top': 0.1,
            'bottom': 0.1
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x21a)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'spiderweb_3': {
        'name': _0x35cdcb(0x234),
        'type': objectType['TILE'],
        'width': 0x101,
        'height': 0x155,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.21,
            'right': 0.07,
            'top': 0.16,
            'bottom': 0.1
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x234)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'toxic_machine': {
        'name': _0x35cdcb(0xad0),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x4f4,
        'height': 0x152,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0xad0)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'standing_stone': {
        'name': _0x35cdcb(0x6a7),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x93,
        'height': 0x18e,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x6a7)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'rock_1_blue': {
        'name': _0x35cdcb(0x7eb),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x45e,
        'height': 0x1b0,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x7eb)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'rock_3_grey': {
        'name': _0x35cdcb(0x929),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x48a,
        'height': 0x1f9,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x929)]
            }
        },
        'animation': 'none',
        'zIndex': -0x64
    },
    'space_rock_1': {
        'name': _0x35cdcb(0x31c),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x31b,
        'height': 0x142,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x31c)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'space_rock_2': {
        'name': 'space_rock_2',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x245,
        'height': 0xeb,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0xa2e)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'space_rock_3': {
        'name': _0x35cdcb(0x642),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x1eb,
        'height': 0x190,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x642)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'cosmicPlant': {
        'name': 'cosmicPlant',
        'type': objectType[_0x35cdcb(0xa73)],
        'width': 0xb3,
        'height': 0xbb,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': !![],
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
        'animation': _0x35cdcb(0x6c9),
        'antiStuck': !![]
    },
    'jungleTree1': {
        'name': _0x35cdcb(0x9f2),
        'type': objectType['BACKGROUND'],
        'width': 0x342,
        'height': 0x384,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['jungleTree1']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'jungleTree2': {
        'name': 'jungleTree2',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x3ba,
        'height': 0x371,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x4e4)]
            }
        },
        'animation': 'none',
        'zIndex': -0x65
    },
    'strangeTree': {
        'name': 'strangeTree',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x2ee,
        'height': 0x2ae,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x2b9)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'tree_1__no_vegetation_base': {
        'name': _0x35cdcb(0x763),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x3ee,
        'height': 0x3e8,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x763)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'tree_3_no_vegetation_base': {
        'name': _0x35cdcb(0xaf4),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x31f,
        'height': 0x44c,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0xaf4)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'thorn_branch_2': {
        'name': _0x35cdcb(0x346),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0xe6,
        'height': 0x12c,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x346)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'thorn_branch_3': {
        'name': _0x35cdcb(0x44e),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x1c2,
        'height': 0x137,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x44e)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'statue_1_with_vegetation': {
        'name': _0x35cdcb(0x840),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0xfe,
        'height': 0x17d,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x840)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'open_coffin': {
        'name': 'open_coffin',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x10a,
        'height': 0x90,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x5e1)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'grave': {
        'name': _0x35cdcb(0x47d),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x1ac,
        'height': 0x104,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x47d)]
            }
        },
        'animation': 'none',
        'zIndex': -0x64
    },
    'coffin_dark': {
        'name': _0x35cdcb(0x255),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0xbc,
        'height': 0xa0,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['coffin_dark']
            }
        },
        'animation': 'none',
        'zIndex': -0x64
    },
    'brick_post_1': {
        'name': _0x35cdcb(0x594),
        'type': objectType['BACKGROUND'],
        'width': 0x7e,
        'height': 0x12c,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x594)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x63
    },
    'swamp': {
        'name': _0x35cdcb(0x3b9),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x800,
        'height': 0x230,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0x0,
            'right': 0x0,
            'top': 0.06,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x3b9)]
            }
        },
        'opacity': 0.98,
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x64
    },
    'toxic_water': {
        'name': 'toxic_water',
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x200,
        'height': 0xb5,
        'gravityOn': ![],
        'moveable': ![],
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
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x64,
        'staticCanvas': ![],
        'fixedDraw': !![]
    },
    'tree_1_bright_green': {
        'name': _0x35cdcb(0x51e),
        'type': objectType['BACKGROUND'],
        'width': 0x22d,
        'height': 0x2fc,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
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
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x33f,
        'height': 0x2e7,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x86c)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'tree_3_bright_green': {
        'name': _0x35cdcb(0x33a),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x346,
        'height': 0x367,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x33a)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'moon_full': {
        'name': _0x35cdcb(0xadd),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x55,
        'height': 0x55,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x463)]
            }
        },
        'animation': 'none',
        'zIndex': -0x64
    },
    'moon_half': {
        'name': 'moon_half',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x54,
        'height': 0x54,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x60f)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'arena': {
        'name': _0x35cdcb(0x885),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x486,
        'height': 0x406,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['arena']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0xc8
    },
    'pixel_voices': {
        'name': 'pixel_voices',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0xc0,
        'height': 0xae,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x7b2)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x1f5
    },
    'dino_bones': {
        'name': _0x35cdcb(0x268),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x45e,
        'height': 0x133,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x268)]
            }
        },
        'animation': 'none',
        'zIndex': -0x64
    },
    'bones': {
        'name': _0x35cdcb(0xa8d),
        'type': objectType['BACKGROUND'],
        'width': 0x1c0,
        'height': 0xa1,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0xa8d)]
            }
        },
        'animation': 'none',
        'zIndex': -0x64
    },
    'volcano_1': {
        'name': 'volcano_1',
        'type': objectType['BACKGROUND'],
        'width': 0x48d,
        'height': 0x21a,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
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
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x261,
        'height': 0x128,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x4e3)]
            }
        },
        'animation': 'none',
        'zIndex': -0x65
    },
    'br_portal': {
        'name': _0x35cdcb(0x769),
        'type': objectType[_0x35cdcb(0x29d)],
        'width': 0x221,
        'height': 0x14f,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': !![],
        'colliderRectangleOffset': {
            'left': 0.29,
            'right': 0.3,
            'top': 0.33,
            'bottom': 0.05
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x38d)]
            },
            'active': {
                'sprites': [_0x35cdcb(0x5c6), _0x35cdcb(0x740), _0x35cdcb(0x428), _0x35cdcb(0x9dd), _0x35cdcb(0x4ab), _0x35cdcb(0x45d), _0x35cdcb(0x486), _0x35cdcb(0x3a9)],
                'animationFrameTime': 0x64
            }
        },
        'animation': 'none',
        'zIndex': -0x64
    },
    'lava': {
        'name': _0x35cdcb(0x557),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0x0,
            'right': 0x0,
            'top': 0.01,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': ['lava', _0x35cdcb(0x96d)],
                'animationFrameTime': 0x12c
            }
        },
        'animation': 'none',
        'zIndex': 0x64,
        'fixedDraw': !![]
    },
    'lava_rising': {
        'name': _0x35cdcb(0x90c),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0x0,
            'right': 0x0,
            'top': 0.01,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x557), 'lava_mirrored'],
                'animationFrameTime': 0x12c
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x65,
        'fixedDraw': !![],
        'needBeSynced': !![]
    },
    'christmasTree': {
        'name': _0x35cdcb(0x3f2),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x190,
        'height': 0x2ed,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x3f2)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x63
    },
    'house_1': {
        'name': _0x35cdcb(0x3b0),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x18e,
        'height': 0x13c,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['house_1']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'house_2': {
        'name': _0x35cdcb(0x30a),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x18e,
        'height': 0x185,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x30a)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'house_3': {
        'name': 'house_3',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x228,
        'height': 0x188,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x44a)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x63
    },
    'house_4': {
        'name': _0x35cdcb(0x32a),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x191,
        'height': 0x17c,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x32a)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'house_5': {
        'name': _0x35cdcb(0x8c4),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x191,
        'height': 0x188,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x8c4)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'house_6': {
        'name': _0x35cdcb(0xb33),
        'type': objectType['BACKGROUND'],
        'width': 0x200,
        'height': 0x22d,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0xb33)]
            }
        },
        'animation': 'none',
        'zIndex': -0x64
    },
    'house_7': {
        'name': 'house_7',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x200,
        'height': 0x236,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0xb04)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'house_8': {
        'name': _0x35cdcb(0x812),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x1a8,
        'height': 0x187,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x812)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'house_9': {
        'name': _0x35cdcb(0x36f),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x1a8,
        'height': 0x184,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['house_9']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'house_10': {
        'name': 'house_10',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x1a8,
        'height': 0x277,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0xae1)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'house_11': {
        'name': 'house_11',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x27d,
        'height': 0x24c,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x244)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x62
    },
    'house_12': {
        'name': 'house_12',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x1bb,
        'height': 0x1e8,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['house_12']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'house_13': {
        'name': 'house_13',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x1d9,
        'height': 0x1e9,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x53e)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'cloud1': {
        'name': 'cloud1',
        'type': objectType[_0x35cdcb(0x911)],
        'width': 0x155,
        'height': 0xd0,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': !![],
        'colliderRectangleOffset': {
            'left': 0.2,
            'right': 0.15,
            'top': 0.27,
            'bottom': 0.14
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0xa6b)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x64
    },
    'cloud2': {
        'name': 'cloud2',
        'type': objectType[_0x35cdcb(0x911)],
        'width': 0x155,
        'height': 0xd0,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': !![],
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
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x64
    },
    'cloud3': {
        'name': 'cloud3',
        'type': objectType[_0x35cdcb(0x911)],
        'width': 0x155,
        'height': 0xd0,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': !![],
        'colliderRectangleOffset': {
            'left': 0.16,
            'right': 0.17,
            'top': 0.27,
            'bottom': 0.14
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x4f9)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x64
    },
    'cloud4': {
        'name': 'cloud4',
        'type': objectType[_0x35cdcb(0x911)],
        'width': 0x155,
        'height': 0xd0,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': !![],
        'colliderRectangleOffset': {
            'left': 0.13,
            'right': 0.14,
            'top': 0.27,
            'bottom': 0.14
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x83d)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x64
    },
    'bush_1_bright_green': {
        'name': _0x35cdcb(0x582),
        'type': objectType[_0x35cdcb(0x911)],
        'width': 0xfa,
        'height': 0x9e,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': !![],
        'colliderRectangleOffset': {
            'left': 0.13,
            'right': 0.2,
            'top': 0.27,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x582)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x64
    },
    'igloo': {
        'name': 'igloo',
        'type': objectType[_0x35cdcb(0x911)],
        'width': 0x10e,
        'height': 0xbd,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': !![],
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
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64,
        'staticCanvas': !![]
    },
    'strawberry_bush': {
        'name': _0x35cdcb(0x79e),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x63,
        'height': 0x28,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x79e)]
            }
        },
        'animation': 'none',
        'zIndex': 0x64
    },
    'background_pyramid': {
        'name': 'background_pyramid',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x80,
        'height': 0x80,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x7c3)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x3e8
    },
    'castle_bg': {
        'name': _0x35cdcb(0x46c),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x400,
        'height': 0x300,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x46c)]
            }
        },
        'animation': 'none',
        'zIndex': -0xbb8
    },
    'arena_bg': {
        'name': _0x35cdcb(0x7ed),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x180,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': !![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x7ed)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0xbb8,
        'arenaZone': !![]
    },
    'arena_bg_safe': {
        'name': _0x35cdcb(0x4ff),
        'type': objectType['BACKGROUND'],
        'width': 0x280,
        'height': 0x180,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': !![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x7ed)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0xbb8,
        'safeZone': !![]
    },
    'battle_royale_bg': {
        'name': _0x35cdcb(0x596),
        'type': objectType['BACKGROUND'],
        'width': 0x280,
        'height': 0x180,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': !![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x7ed)]
            }
        },
        'animation': 'none',
        'zIndex': -0xbb8,
        'battleRoyaleZone': !![]
    },
    'battle_royale_waiting_room_bg': {
        'name': _0x35cdcb(0x25f),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x180,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': !![],
        'animations': {
            'none': {
                'sprites': ['arena_bg']
            }
        },
        'animation': 'none',
        'zIndex': -0xbb8,
        'safeZone': !![],
        'battleRoyaleZone': !![]
    },
    'ship_bg': {
        'name': _0x35cdcb(0x771),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x780,
        'height': 0x400,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': !![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x771)]
            }
        },
        'animation': 'none',
        'zIndex': -0xbb8,
        'safeZone': !![]
    },
    'iced_cave_bg': {
        'name': _0x35cdcb(0x653),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x400,
        'height': 0x300,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x653)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0xbb8
    },
    'factory_bg': {
        'name': _0x35cdcb(0x553),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x2c0,
        'height': 0x200,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x553)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7d1
    },
    'background_ice': {
        'name': 'background_ice',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x100,
        'height': 0x100,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['background_ice']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x3e8
    },
    'background_lightblue': {
        'name': 'background_lightblue',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x400,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['background_lightblue']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x834
    },
    'background_normal_1': {
        'name': _0x35cdcb(0x7d6),
        'type': objectType['BACKGROUND'],
        'width': 0x280,
        'height': 0x16d,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x7d6)]
            }
        },
        'animation': 'none',
        'zIndex': -0x7d0
    },
    'background_normal_2': {
        'name': _0x35cdcb(0x751),
        'type': objectType['BACKGROUND'],
        'width': 0x280,
        'height': 0x16d,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['background_normal_2']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7d0
    },
    'background_normal_3': {
        'name': _0x35cdcb(0x1e8),
        'type': objectType['BACKGROUND'],
        'width': 0x280,
        'height': 0x16d,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x1e8)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7d0
    },
    'background_normal_bottom': {
        'name': _0x35cdcb(0x368),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x100,
        'height': 0x100,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['background_normal_bottom']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7d0
    },
    'background_snow_1': {
        'name': _0x35cdcb(0x4d8),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x16d,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['background_snow_1']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7d0
    },
    'background_snow_2': {
        'name': 'background_snow_2',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x16d,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x61b)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7d0
    },
    'background_snow_3': {
        'name': _0x35cdcb(0x90f),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x16d,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x90f)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7d0
    },
    'background_snow_bottom': {
        'name': _0x35cdcb(0x884),
        'type': objectType['BACKGROUND'],
        'width': 0x100,
        'height': 0x100,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x884)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7d0
    },
    'background_jungle_1': {
        'name': _0x35cdcb(0x717),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x400,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x717)]
            }
        },
        'animation': 'none',
        'zIndex': -0x7d5
    },
    'background_jungle_2': {
        'name': 'background_jungle_2',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x400,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['background_jungle_2']
            }
        },
        'animation': 'none',
        'zIndex': -0x7d5
    },
    'background_jungle_3': {
        'name': _0x35cdcb(0x600),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x400,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x600)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7d5
    },
    'background_volcano_1': {
        'name': 'background_volcano_1',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x1c4,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x47e)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7d5
    },
    'background_volcano_2': {
        'name': _0x35cdcb(0xa7b),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x1c4,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['background_volcano_2']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7d5
    },
    'background_volcano_3': {
        'name': 'background_volcano_3',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x1c4,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x6e4)]
            }
        },
        'animation': 'none',
        'zIndex': -0x7d5
    },
    'background_graveyard_1': {
        'name': _0x35cdcb(0x23c),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x400,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x23c)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7cf
    },
    'background_graveyard_2': {
        'name': _0x35cdcb(0x728),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x400,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['background_graveyard_2']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7cf
    },
    'background_graveyard_3': {
        'name': _0x35cdcb(0x4cc),
        'type': objectType['BACKGROUND'],
        'width': 0x280,
        'height': 0x400,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x4cc)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7cf
    },
    'background_graveyard_bottom': {
        'name': _0x35cdcb(0x59b),
        'type': objectType['BACKGROUND'],
        'width': 0x100,
        'height': 0x100,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x59b)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7cf
    },
    'background_sea_1': {
        'name': _0x35cdcb(0x5d2),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x116,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x5d2)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7d5
    },
    'background_sea_2': {
        'name': 'background_sea_2',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x116,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0xb08)]
            }
        },
        'animation': 'none',
        'zIndex': -0x7d5
    },
    'background_sea_3': {
        'name': _0x35cdcb(0x1ed),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x116,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['background_sea_3']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7d5
    },
    'background_sea_bottom': {
        'name': _0x35cdcb(0x88e),
        'type': objectType['BACKGROUND'],
        'width': 0x100,
        'height': 0x100,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x88e)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7d5
    },
    'background_desert_1': {
        'name': 'background_desert_1',
        'type': objectType['BACKGROUND'],
        'width': 0x280,
        'height': 0x230,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['background_desert_1']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7cf
    },
    'background_desert_2': {
        'name': _0x35cdcb(0x2d9),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x230,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['background_desert_2']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7cf
    },
    'background_desert_3': {
        'name': _0x35cdcb(0xaa7),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x230,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0xaa7)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7cf
    },
    'background_desert_bottom': {
        'name': _0x35cdcb(0x5f6),
        'type': objectType['BACKGROUND'],
        'width': 0x100,
        'height': 0x100,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x5f6)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7cf
    },
    'snow_animation': {
        'name': 'snow_animation',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x400,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['snow_animation_1', _0x35cdcb(0x4a2), 'snow_animation_3', _0x35cdcb(0x773), _0x35cdcb(0x666), 'snow_animation_6', _0x35cdcb(0x654), 'snow_animation_8', _0x35cdcb(0xa28), _0x35cdcb(0x6c4), _0x35cdcb(0xa1a), _0x35cdcb(0x4fd), _0x35cdcb(0x40c), _0x35cdcb(0x2a3), _0x35cdcb(0x9ec), _0x35cdcb(0x98a), _0x35cdcb(0x375), 'snow_animation_18', 'snow_animation_19', 'snow_animation_20', _0x35cdcb(0x6e2), _0x35cdcb(0x5bf), _0x35cdcb(0x7e9), 'snow_animation_24', _0x35cdcb(0x52e)],
                'animationFrameTime': 0x32
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'opacity': 0.5,
        'zIndex': 0x0
    },
    'background_lightblue_to_purple': {
        'name': 'background_lightblue_to_purple',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x400,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': !![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0xa7a)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7cf
    },
    'background_space_1': {
        'name': _0x35cdcb(0x993),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x400,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': !![],
        'animations': {
            'none': {
                'sprites': ['background_space_1']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7d0
    },
    'background_space_2': {
        'name': _0x35cdcb(0x85e),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x400,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': !![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x85e)]
            }
        },
        'animation': 'none',
        'zIndex': -0x7d0
    },
    'background_space_3': {
        'name': 'background_space_3',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x400,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': !![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x4a9)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7d0
    },
    'background_space_4': {
        'name': _0x35cdcb(0x941),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x400,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': !![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x941)]
            }
        },
        'animation': 'none',
        'zIndex': -0x7d0
    },
    'background_brown': {
        'name': _0x35cdcb(0xa50),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x200,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0xa50)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7d2
    },
    'background_grey': {
        'name': _0x35cdcb(0x24a),
        'type': objectType['BACKGROUND'],
        'width': 0x80,
        'height': 0x80,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x24a)]
            }
        },
        'animation': 'none',
        'zIndex': -0x7cf
    },
    'background_graveyard_top_left': {
        'name': 'background_graveyard_top_left',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x400,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['background_graveyard_top_left']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7cf,
        'hasTransparency': !![]
    },
    'background_graveyard_left': {
        'name': _0x35cdcb(0x462),
        'type': objectType['BACKGROUND'],
        'width': 0x280,
        'height': 0x400,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x462)]
            }
        },
        'animation': 'none',
        'zIndex': -0x7cf,
        'hasTransparency': !![]
    },
    'background_graveyard_right': {
        'name': _0x35cdcb(0x562),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x400,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x562)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7cf,
        'hasTransparency': !![]
    },
    'background_graveyard_top': {
        'name': _0x35cdcb(0x209),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x400,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x209)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7cf
    },
    'background_graveyard_top_right': {
        'name': _0x35cdcb(0x514),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x280,
        'height': 0x400,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x514)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x7cf,
        'hasTransparency': !![]
    },
    'blackHole': {
        'name': _0x35cdcb(0xaac),
        'type': objectType[_0x35cdcb(0x29d)],
        'width': 0xdc,
        'height': 0xdc,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x605), _0x35cdcb(0x71e), _0x35cdcb(0xaee), _0x35cdcb(0xa8a), _0x35cdcb(0x727), 'blackHole_6', _0x35cdcb(0x379), _0x35cdcb(0x7de), _0x35cdcb(0x292), _0x35cdcb(0x57d), _0x35cdcb(0x8fb), _0x35cdcb(0x1f4), _0x35cdcb(0xb0a), _0x35cdcb(0x7af), 'blackHole_15', _0x35cdcb(0x8cb), _0x35cdcb(0x2e7), _0x35cdcb(0x49a), _0x35cdcb(0x5a1), _0x35cdcb(0x26a), _0x35cdcb(0x9b2), 'blackHole_22', _0x35cdcb(0xa1c), _0x35cdcb(0x350), _0x35cdcb(0x786), _0x35cdcb(0x41c), _0x35cdcb(0x927), _0x35cdcb(0x522), _0x35cdcb(0x540), _0x35cdcb(0x36d)],
                'animationFrameTime': 0x3c
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'arena_window': {
        'name': _0x35cdcb(0x326),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0xee,
        'height': 0x2a8,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['arena_window']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64,
        'staticCanvas': ![]
    },
    'arena_statue_1': {
        'name': 'arena_statue_1',
        'type': objectType['BACKGROUND'],
        'width': 0x41,
        'height': 0xaf,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x2d0)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'king_throne': {
        'name': _0x35cdcb(0x71a),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x6a,
        'height': 0xc0,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x71a)]
            }
        },
        'animation': 'none',
        'zIndex': -0x64
    },
    'bear_trap': {
        'name': _0x35cdcb(0x583),
        'type': objectType[_0x35cdcb(0x755)],
        'width': 0x99,
        'height': 0x64,
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.43,
            'right': 0.43,
            'top': 0.65,
            'bottom': 0.05
        },
        'animations': {
            'open': {
                'sprites': [_0x35cdcb(0x8a5)]
            },
            'closed': {
                'sprites': [_0x35cdcb(0x41d)]
            },
            'opening': {
                'sprites': [_0x35cdcb(0x41d), 'bear_trap_4', 'bear_trap_3', _0x35cdcb(0x9f1), _0x35cdcb(0x8a5)],
                'animationFrameTime': 0x28
            },
            'closing': {
                'sprites': [_0x35cdcb(0x8a5), 'bear_trap_2', _0x35cdcb(0x547), 'bear_trap_4', 'bear_trap_5'],
                'animationFrameTime': 0x28
            }
        },
        'animation': _0x35cdcb(0x3cc),
        'staticCanvas': ![],
        'needBeSynced': !![],
        'canEnterArena': !![],
        'zIndex': 0x6
    },
    'wall_spikes': {
        'name': 'wall_spikes',
        'type': objectType['MISC'],
        'width': 0x80,
        'height': 0x80,
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.17,
            'right': 0.17,
            'top': 0.17,
            'bottom': 0.17
        },
        'animations': {
            'open': {
                'sprites': [_0x35cdcb(0x270)]
            },
            'closed': {
                'sprites': [_0x35cdcb(0x637)]
            }
        },
        'animation': _0x35cdcb(0x406),
        'staticCanvas': ![],
        'needBeSynced': !![],
        'canEnterArena': !![],
        'zIndex': -0x1f4
    },
    'arena_weapons': {
        'name': 'arena_weapons',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0xc9,
        'height': 0xb4,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['arena_weapons']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64,
        'staticCanvas': ![]
    },
    'pillar_top': {
        'name': _0x35cdcb(0x80c),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0xc0,
        'height': 0x100,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['pillar_top']
            }
        },
        'animation': 'none',
        'zIndex': -0x64
    },
    'pillar_center': {
        'name': _0x35cdcb(0x2a6),
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0xc0,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
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
        'type': objectType['BACKGROUND'],
        'width': 0xc0,
        'height': 0x100,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['pillar_bottom']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'arena_flag': {
        'name': 'arena_flag',
        'type': objectType[_0x35cdcb(0x9af)],
        'width': 0x47,
        'height': 0x6e,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x471)]
            }
        },
        'animation': 'none',
        'zIndex': -0x63
    },
    'arena_doors_1': {
        'name': 'arena_doors_1',
        'type': objectType[_0x35cdcb(0x29d)],
        'width': 0x9e,
        'height': 0xd2,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x71c)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'arena_doors_2': {
        'name': _0x35cdcb(0xa74),
        'type': objectType[_0x35cdcb(0x29d)],
        'width': 0x9e,
        'height': 0xd2,
        'gravityOn': ![],
        'moveable': ![],
        'animations': {
            'none': {
                'sprites': ['arena_doors_2']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'taxi': {
        'name': 'taxi',
        'type': objectType[_0x35cdcb(0x29d)],
        'width': 0x390,
        'height': 0x41a,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.3,
            'right': 0.3,
            'top': 0.4,
            'bottom': 0.3
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x57b)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'wooden_doors': {
        'name': _0x35cdcb(0x7b9),
        'type': objectType[_0x35cdcb(0x29d)],
        'width': 0x100,
        'height': 0xde,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.32,
            'right': 0.33,
            'top': 0.24,
            'bottom': 0.15
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x7b9)]
            },
            'ice': {
                'sprites': [_0x35cdcb(0x220)]
            },
            'graveyard': {
                'sprites': [_0x35cdcb(0x713)]
            },
            'city': {
                'sprites': [_0x35cdcb(0x331)]
            },
            'desert': {
                'sprites': [_0x35cdcb(0x9c9)]
            },
            'jungle': {
                'sprites': ['wooden_doors_jungle']
            },
            'lava': {
                'sprites': ['wooden_doors_lava']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64,
        'staticCanvas': !![]
    },
    'bubble': {
        'name': _0x35cdcb(0x1ca),
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x42,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x464), 'bubble_2', _0x35cdcb(0x337), _0x35cdcb(0x997), _0x35cdcb(0x3e7), _0x35cdcb(0x672), _0x35cdcb(0x672), _0x35cdcb(0x947), 'bubble_8', _0x35cdcb(0x754), _0x35cdcb(0x92d), _0x35cdcb(0x441), 'bubble_12', _0x35cdcb(0x4f7), _0x35cdcb(0x6c9), _0x35cdcb(0x6c9), _0x35cdcb(0x6c9), _0x35cdcb(0x6c9), 'none', _0x35cdcb(0x6c9), 'none', _0x35cdcb(0x6c9), _0x35cdcb(0x6c9), _0x35cdcb(0x6c9), 'none', _0x35cdcb(0x6c9), _0x35cdcb(0x6c9), 'none', _0x35cdcb(0x6c9), _0x35cdcb(0x6c9), _0x35cdcb(0x6c9), _0x35cdcb(0x6c9), _0x35cdcb(0x6c9), _0x35cdcb(0x6c9), 'none', _0x35cdcb(0x6c9), 'none', 'none', _0x35cdcb(0x6c9)],
                'animationFrameTime': 0x50
            }
        },
        'animation': 'none',
        'zIndex': 0x65
    },
    'lava_bubble': {
        'name': _0x35cdcb(0x2ad),
        'colliderRectangleOffset': {
            'left': 0.15,
            'right': 0.35,
            'top': 0.1,
            'bottom': 0x0
        },
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x42,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': ![],
        'animations': {
            'none': {
                'sprites': ['lava_bubble_1', _0x35cdcb(0x6e7), _0x35cdcb(0x97e), _0x35cdcb(0xaa6), 'lava_bubble_5', _0x35cdcb(0xb0c), _0x35cdcb(0xb0c), 'lava_bubble_7', 'lava_bubble_8', _0x35cdcb(0x7d4), _0x35cdcb(0x6ad), 'lava_bubble_11', 'lava_bubble_12', _0x35cdcb(0x37b), _0x35cdcb(0x6c9), _0x35cdcb(0x6c9), _0x35cdcb(0x6c9), _0x35cdcb(0x6c9), 'none', _0x35cdcb(0x6c9), 'none', _0x35cdcb(0x6c9), _0x35cdcb(0x6c9), _0x35cdcb(0x6c9), _0x35cdcb(0x6c9), 'none', 'none', _0x35cdcb(0x6c9), 'none', _0x35cdcb(0x6c9), _0x35cdcb(0x6c9), _0x35cdcb(0x6c9), _0x35cdcb(0x6c9), _0x35cdcb(0x6c9), 'none', _0x35cdcb(0x6c9), _0x35cdcb(0x6c9), _0x35cdcb(0x6c9), _0x35cdcb(0x6c9)],
                'animationFrameTime': 0x64
            }
        },
        'animation': 'none',
        'zIndex': 0x65
    },
    'player_spawn': {
        'name': _0x35cdcb(0x348),
        'type': objectType['PLAYER_SPAWN'],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![]
    },
    'arctic_spawn': {
        'name': _0x35cdcb(0xa64),
        'type': objectType['PLAYER_SPAWN'],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![]
    },
    'hell_spawn': {
        'name': 'hell_spawn',
        'type': objectType[_0x35cdcb(0x253)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![]
    },
    'cemetery_spawn': {
        'name': _0x35cdcb(0x6a9),
        'type': objectType['PLAYER_SPAWN'],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![]
    },
    'jungle_spawn': {
        'name': _0x35cdcb(0x5ea),
        'type': objectType[_0x35cdcb(0x253)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![]
    },
    'battle_royale_spawn': {
        'name': _0x35cdcb(0x835),
        'type': objectType[_0x35cdcb(0x253)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![]
    },
    'gem_spawn': {
        'name': _0x35cdcb(0xb01),
        'type': objectType['MISC'],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![]
    },
    'halloweenGhost_spawn': {
        'name': _0x35cdcb(0x3d7),
        'type': objectType[_0x35cdcb(0x755)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![]
    },
    'halloweenPumpkin_spawn': {
        'name': _0x35cdcb(0xa21),
        'type': objectType[_0x35cdcb(0x755)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![]
    },
    'gem': {
        'name': _0x35cdcb(0x20d),
        'type': objectType['MISC'],
        'width': 0x35,
        'height': 0x2b,
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.1,
            'right': 0.1,
            'top': 0.1,
            'bottom': 0.1
        },
        'animations': {
            'none': {
                'sprites': ['gem_1', _0x35cdcb(0x871)],
                'animationFrameTime': 0x96
            }
        },
        'animation': _0x35cdcb(0x6c9)
    },
    'waterDrop': {
        'name': _0x35cdcb(0x868),
        'type': objectType[_0x35cdcb(0x755)],
        'width': 0x1c,
        'height': 0x2a,
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0x0,
            'right': 0x0,
            'top': 0x0,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x868)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'staticCanvas': !![]
    },
    'potion_armor_spawn': {
        'name': _0x35cdcb(0x6d4),
        'type': objectType['SPAWN'],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': 'potion_armor',
        'delay': 0x1388
    },
    'arena_tile_top_breakable_spawn': {
        'name': 'arena_tile_top_breakable_spawn',
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x20b),
        'delay': 0xea60 * 0xf
    },
    'arena_tile_fill_breakable_spawn': {
        'name': 'arena_tile_fill_breakable_spawn',
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x9c0),
        'delay': 0xea60 * 0xf
    },
    'potion_armor': {
        'name': 'potion_armor',
        'type': objectType[_0x35cdcb(0x755)],
        'width': 0x50,
        'height': 0x50,
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.2,
            'right': 0.2,
            'top': 0.05,
            'bottom': 0.05
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x641)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'staticCanvas': ![]
    },
    'roots': {
        'name': _0x35cdcb(0x6d9),
        'type': objectType[_0x35cdcb(0x755)],
        'width': 0x80,
        'height': 0xc0,
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.28,
            'right': 0.17,
            'top': 0.04,
            'bottom': 0.13
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x6d9)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'staticCanvas': !![],
        'zIndex': 0x6
    },
    'giftBox': {
        'name': _0x35cdcb(0x1dd),
        'type': objectType['MISC'],
        'width': 0xbe,
        'height': 0x64,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.02,
            'right': 0.02,
            'top': 0.2,
            'bottom': 0.02
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x1dd)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0xa,
        'staticCanvas': !![]
    },
    'pig_spawn': {
        'name': _0x35cdcb(0x27d),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x2cc),
        'delay': 0x3a98
    },
    'penguin_spawn': {
        'name': _0x35cdcb(0x5f4),
        'type': objectType['SPAWN'],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': 'penguin',
        'delay': 0xea60
    },
    'yeti_spawn': {
        'name': _0x35cdcb(0x9a4),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x83b),
        'delay': 0x2bf20
    },
    'frog_spawn': {
        'name': _0x35cdcb(0xac5),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': 'frog',
        'delay': 0xafc8
    },
    'crab_spawn': {
        'name': _0x35cdcb(0x37d),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': 'crab',
        'delay': 0x4e20
    },
    'starfish_spawn': {
        'name': _0x35cdcb(0x3ae),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x263),
        'delay': 0x186a0
    },
    'blackWidow_spawn': {
        'name': _0x35cdcb(0x3cf),
        'type': objectType['SPAWN'],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': 'blackWidow',
        'delay': 0x2bf20
    },
    'snake_spawn': {
        'name': _0x35cdcb(0x3d2),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x2e2),
        'delay': 0x7530
    },
    'crocodile_spawn': {
        'name': _0x35cdcb(0x2de),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x9da),
        'delay': 0x7530
    },
    'mummy_spawn': {
        'name': _0x35cdcb(0x957),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0xabf),
        'delay': 0x2bf20
    },
    'tyrannosaurus_spawn': {
        'name': _0x35cdcb(0x739),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x351),
        'delay': 0xea60
    },
    'mammoth_spawn': {
        'name': _0x35cdcb(0x4cf),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x3ed),
        'delay': 0xea60
    },
    'turtle_spawn': {
        'name': _0x35cdcb(0x48d),
        'type': objectType['SPAWN'],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x300),
        'delay': 0x7530
    },
    'zombie_spawn': {
        'name': _0x35cdcb(0x802),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x4f6),
        'delay': 0x2710
    },
    'alienBigInsect_spawn': {
        'name': _0x35cdcb(0x1f5),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x811),
        'delay': 0x2bf20
    },
    'alienEye_spawn': {
        'name': _0x35cdcb(0x6fc),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': 'alienEye',
        'delay': 0x13880
    },
    'mouse_spawn': {
        'name': _0x35cdcb(0x1fa),
        'type': objectType['SPAWN'],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': 'mouse',
        'delay': 0x3a98
    },
    'evilRat_spawn': {
        'name': _0x35cdcb(0x8c8),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': 'evilRat',
        'delay': 0xafc8
    },
    'giantRat_spawn': {
        'name': _0x35cdcb(0x3bc),
        'type': objectType['SPAWN'],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': 'giantRat',
        'delay': 0x2bf20
    },
    'smallDemon_spawn': {
        'name': _0x35cdcb(0x5aa),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x473),
        'delay': 0x7530
    },
    'lemming_spawn': {
        'name': _0x35cdcb(0xa42),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x3ca),
        'delay': 0x3a98
    },
    'worm_spawn': {
        'name': _0x35cdcb(0x647),
        'type': objectType['SPAWN'],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x829),
        'delay': 0x3a98
    },
    'cherry_spawn': {
        'name': _0x35cdcb(0xb1c),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': 'cherry',
        'delay': 0x2710
    },
    'currant_spawn': {
        'name': 'currant_spawn',
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x9e7),
        'delay': 0x2710
    },
    'strawberry_spawn': {
        'name': _0x35cdcb(0x49e),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x736),
        'delay': 0x3a98
    },
    'stone_spawn': {
        'name': _0x35cdcb(0x394),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': 'stone',
        'delay': 0xea60
    },
    'starFruit_spawn': {
        'name': _0x35cdcb(0x951),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x89d),
        'delay': 0x3a98
    },
    'meat_spawn': {
        'name': _0x35cdcb(0x3db),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': 'meat',
        'delay': 0x61a8
    },
    'pumpkin_spawn': {
        'name': _0x35cdcb(0x857),
        'type': objectType['SPAWN'],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x6f3),
        'delay': 0x4e20
    },
    'alienFruit1_spawn': {
        'name': 'alienFruit1_spawn',
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x56a),
        'delay': 0x2bf20
    },
    'alienFruit2_spawn': {
        'name': _0x35cdcb(0x604),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': 'alienFruit2',
        'delay': 0x2bf20
    },
    'alienFruit3_spawn': {
        'name': _0x35cdcb(0x358),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x844),
        'delay': 0x2bf20
    },
    'seed_spawn': {
        'name': _0x35cdcb(0xa7c),
        'type': objectType['SPAWN'],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x241),
        'delay': 0x4e20
    },
    'bread_spawn': {
        'name': _0x35cdcb(0xa02),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': 'bread',
        'delay': 0x4e20
    },
    'beehive_spawn': {
        'name': 'beehive_spawn',
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': 'beehive',
        'delay': 0x1d4c0
    },
    'eggRed_spawn': {
        'name': _0x35cdcb(0x8db),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x5c3),
        'delay': 0x7530
    },
    'cosmicEgg_spawn': {
        'name': _0x35cdcb(0x827),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x33b),
        'delay': 0x14c08
    },
    'ladybug_spawn': {
        'name': _0x35cdcb(0xb2f),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': 'ladybug',
        'delay': 0x4e20
    },
    'woodpecker_spawn': {
        'name': _0x35cdcb(0xb26),
        'type': objectType['SPAWN'],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x72f),
        'delay': 0x15f90
    },
    'fishPink_spawn': {
        'name': _0x35cdcb(0x5eb),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x7e6),
        'delay': 0x4e20
    },
    'evilBat_spawn': {
        'name': _0x35cdcb(0x6c7),
        'type': objectType['SPAWN'],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x56c),
        'delay': 0x4e20
    },
    'shark_spawn': {
        'name': _0x35cdcb(0x90e),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x961),
        'delay': 0xafc8
    },
    'piranha_spawn': {
        'name': _0x35cdcb(0x361),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': 'piranha',
        'delay': 0xafc8
    },
    'deadFish_spawn': {
        'name': _0x35cdcb(0x408),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0xafd),
        'delay': 0x4e20
    },
    'cat_spawn': {
        'name': _0x35cdcb(0x792),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': 'cat',
        'delay': 0x4e20
    },
    'poo': {
        'name': _0x35cdcb(0x634),
        'type': objectType[_0x35cdcb(0xa73)],
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
                'sprites': [_0x35cdcb(0x402), 'poo2'],
                'animationFrameTime': 0x320
            }
        },
        'animation': _0x35cdcb(0x6c9)
    },
    'bomb_spawn': {
        'name': 'bomb_spawn',
        'type': objectType['SPAWN'],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': 'bomb',
        'delay': 0x1388
    },
    'bomb': {
        'name': _0x35cdcb(0x49d),
        'type': objectType['MISC'],
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
                'sprites': [_0x35cdcb(0x6df), _0x35cdcb(0x2be)],
                'animationFrameTime': 0x4b
            },
            '2': {
                'sprites': [_0x35cdcb(0x95f), 'bomb_5'],
                'animationFrameTime': 0x4b
            },
            '3': {
                'sprites': ['bomb_6', _0x35cdcb(0x94e)],
                'animationFrameTime': 0x4b
            },
            '4': {
                'sprites': ['bomb_8', _0x35cdcb(0x491)],
                'animationFrameTime': 0x4b
            },
            '5': {
                'sprites': [_0x35cdcb(0x296), _0x35cdcb(0x5c4)],
                'animationFrameTime': 0x4b
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'canEnterArena': !![],
        'floatingInWater': !![]
    },
    'shuriken': {
        'name': _0x35cdcb(0x914),
        'type': objectType['MISC'],
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
                'sprites': [_0x35cdcb(0x914)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'canEnterArena': !![]
    },
    'crate_spawn': {
        'name': _0x35cdcb(0x8ca),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': 'crate',
        'delay': 0xea60 * 0xa
    },
    'crate': {
        'name': _0x35cdcb(0x84c),
        'type': objectType[_0x35cdcb(0x755)],
        'width': 0x80,
        'height': 0x80,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.05,
            'right': 0.05,
            'top': 0.05,
            'bottom': 0.05
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x36e)]
            },
            'damaged': {
                'sprites': ['crate_2']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'canEnterArena': !![],
        'hp': 0x64,
        'breakableByExplosion': !![]
    },
    'crate_explosion': {
        'name': _0x35cdcb(0x226),
        'type': objectType[_0x35cdcb(0x734)],
        'width': 0xc0,
        'height': 0xc0,
        'gravityOn': ![],
        'isCollider': ![],
        'animations': {
            'standard': {
                'sprites': ['crate_3', _0x35cdcb(0x295), _0x35cdcb(0x999), _0x35cdcb(0x33f)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x859)
    },
    'volleyball': {
        'name': _0x35cdcb(0x5dc),
        'type': objectType[_0x35cdcb(0x755)],
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
                'sprites': [_0x35cdcb(0x5dc)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'floatingInWater': !![]
    },
    'volleyPost': {
        'name': 'volleyPost',
        'type': objectType[_0x35cdcb(0x737)],
        'width': 0x23,
        'height': 0xc0,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.25,
            'right': 0.25,
            'top': 0.02,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x651)]
            }
        },
        'animation': 'none',
        'antiStuck': !![]
    },
    'cherry': {
        'name': _0x35cdcb(0x35f),
        'type': objectType[_0x35cdcb(0xa73)],
        'width': 0x2c,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.05,
            'right': 0.05,
            'top': 0.55,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x35f)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'isFruit': !![]
    },
    'currant': {
        'name': _0x35cdcb(0x9e7),
        'type': objectType['FOOD'],
        'width': 0xc,
        'height': 0xd,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.05,
            'right': 0.05,
            'top': 0.05,
            'bottom': 0.05
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x9e7)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': 0x65,
        'isFruit': !![]
    },
    'strawberry': {
        'name': _0x35cdcb(0x736),
        'type': objectType['FOOD'],
        'width': 0x17,
        'height': 0x18,
        'gravityOn': ![],
        'moveable': ![],
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
        'animation': _0x35cdcb(0x6c9),
        'isFruit': !![]
    },
    'starFruit': {
        'name': 'starFruit',
        'type': objectType['FOOD'],
        'width': 0x31,
        'height': 0x47,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.1,
            'right': 0.1,
            'top': 0.1,
            'bottom': 0.1
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x89d)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'isFruit': !![]
    },
    'starfish': {
        'name': 'starfish',
        'type': objectType[_0x35cdcb(0xa73)],
        'width': 0x3a,
        'height': 0x3a,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.2,
            'right': 0.2,
            'top': 0.2,
            'bottom': 0.2
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x35e), _0x35cdcb(0x35e), _0x35cdcb(0x35e), _0x35cdcb(0x35e), _0x35cdcb(0x35e), _0x35cdcb(0x35e), _0x35cdcb(0x35e), _0x35cdcb(0x35e), _0x35cdcb(0xa29), 'starfish3', 'starfish3', _0x35cdcb(0x9d6), _0x35cdcb(0x9d6), 'starfish3', _0x35cdcb(0x9d6), _0x35cdcb(0x9d6), 'starfish3', 'starfish3', 'starfish3', 'starfish3', _0x35cdcb(0x9d6), 'starfish3', _0x35cdcb(0x9d6), _0x35cdcb(0x9d6), 'starfish3', _0x35cdcb(0x9d6), 'starfish3', _0x35cdcb(0x9d6), _0x35cdcb(0x9d6), 'starfish3', _0x35cdcb(0x9d6), _0x35cdcb(0x9d6), _0x35cdcb(0x9d6), _0x35cdcb(0x9d6), _0x35cdcb(0x9d6), _0x35cdcb(0x9d6), _0x35cdcb(0x9d6), _0x35cdcb(0x9d6), 'starfish3', 'starfish3', _0x35cdcb(0x9d6), _0x35cdcb(0x9d6), _0x35cdcb(0x9d6), 'starfish3', _0x35cdcb(0x9d6), _0x35cdcb(0x9d6), 'starfish3', _0x35cdcb(0x9d6), _0x35cdcb(0x9d6), _0x35cdcb(0x9d6), _0x35cdcb(0x9d6), _0x35cdcb(0x9d6), 'starfish3', _0x35cdcb(0x9d6), _0x35cdcb(0x9d6), 'starfish3', 'starfish3', _0x35cdcb(0xa29)],
                'animationFrameTime': 0x64
            }
        },
        'animation': 'none',
        'hasSoul': !![]
    },
    'meat': {
        'name': _0x35cdcb(0x881),
        'type': objectType[_0x35cdcb(0xa73)],
        'width': 0x5a,
        'height': 0x49,
        'gravityOn': ![],
        'moveable': ![],
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
        'animation': _0x35cdcb(0x6c9),
        'antiStuck': !![]
    },
    'pumpkin': {
        'name': _0x35cdcb(0x6f3),
        'type': objectType[_0x35cdcb(0xa73)],
        'width': 0x60,
        'height': 0x5e,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.05,
            'right': 0.05,
            'top': 0.22,
            'bottom': 0.05
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x6f3)]
            }
        },
        'animation': 'none',
        'antiStuck': !![]
    },
    'alienFruit1': {
        'name': _0x35cdcb(0x56a),
        'type': objectType[_0x35cdcb(0xa73)],
        'width': 0xea,
        'height': 0x114,
        'gravityOn': ![],
        'moveable': ![],
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
        'animation': _0x35cdcb(0x6c9)
    },
    'alienFruit2': {
        'name': _0x35cdcb(0x7f3),
        'type': objectType[_0x35cdcb(0xa73)],
        'width': 0x79,
        'height': 0x108,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.05,
            'right': 0.05,
            'top': 0.3,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x7f3)]
            }
        },
        'animation': _0x35cdcb(0x6c9)
    },
    'alienFruit3': {
        'name': 'alienFruit3',
        'type': objectType[_0x35cdcb(0xa73)],
        'width': 0x53,
        'height': 0x126,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.05,
            'right': 0.05,
            'top': 0.2,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x844)]
            }
        },
        'animation': _0x35cdcb(0x6c9)
    },
    'seed': {
        'name': 'seed',
        'type': objectType[_0x35cdcb(0xa73)],
        'width': 0x14,
        'height': 0x13,
        'gravityOn': !![],
        'moveable': !![],
        'colliderRectangleOffset': {
            'left': 0.05,
            'right': 0.15,
            'top': 0.15,
            'bottom': 0.15
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x241)]
            }
        },
        'animation': _0x35cdcb(0x6c9)
    },
    'bread': {
        'name': _0x35cdcb(0xa2b),
        'type': objectType[_0x35cdcb(0xa73)],
        'width': 0x30,
        'height': 0x23,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.05,
            'right': 0.05,
            'top': 0.0011,
            'bottom': 0.02
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0xa2b)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'antiStuck': !![]
    },
    'beehive': {
        'name': 'beehive',
        'type': objectType[_0x35cdcb(0xa73)],
        'width': 0xba,
        'height': 0xad,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.33,
            'right': 0.23,
            'top': 0.2,
            'bottom': 0.24
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x283), _0x35cdcb(0x41b), _0x35cdcb(0x254), _0x35cdcb(0x87e), _0x35cdcb(0x985), _0x35cdcb(0x70f), 'beehive_7', _0x35cdcb(0x726), _0x35cdcb(0x5e6), _0x35cdcb(0x7b1)],
                'animationFrameTime': 0x46
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'antiStuck': !![],
        'hasSoul': !![],
        'skill': game[_0x35cdcb(0x3a1)][_0x35cdcb(0xb0b)]
    },
    'egg': {
        'name': _0x35cdcb(0x3de),
        'type': objectType['FOOD'],
        'width': 0x14,
        'height': 0x1a,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.05,
            'right': 0.06,
            'top': 0.05,
            'bottom': 0.02
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x3de)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'antiStuck': !![]
    },
    'stone': {
        'name': _0x35cdcb(0x508),
        'type': objectType['FOOD'],
        'width': 0x80,
        'height': 0x36,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.2,
            'right': 0.16,
            'top': 0.1,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x508)]
            }
        },
        'animation': 'none',
        'antiStuck': !![]
    },
    'eggRed': {
        'name': _0x35cdcb(0x5c3),
        'type': objectType[_0x35cdcb(0xa73)],
        'width': 0x2e,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.05,
            'right': 0.05,
            'top': 0.05,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x5c3)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'antiStuck': !![]
    },
    'cosmicEgg': {
        'name': _0x35cdcb(0x33b),
        'type': objectType[_0x35cdcb(0xa73)],
        'width': 0x40,
        'height': 0x50,
        'gravityOn': ![],
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.05,
            'right': 0.05,
            'top': 0.05,
            'bottom': 0x0
        },
        'animations': {
            'none': {
                'sprites': [_0x35cdcb(0x33b)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'antiStuck': !![]
    },
    'ladybug': {
        'name': _0x35cdcb(0x4b2),
        'type': objectType[_0x35cdcb(0xa73)],
        'width': 0x16,
        'height': 0x11,
        'gravityOn': ![],
        'moveable': ![],
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
        'hasSoul': !![],
        'zIndex': 0x9
    },
    'pig': {
        'name': _0x35cdcb(0x2cc),
        'type': objectType['FOOD'],
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
        'hasSoul': !![]
    },
    'cat': {
        'name': _0x35cdcb(0x39b),
        'moveable': ![],
        'type': objectType[_0x35cdcb(0xa73)],
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
                'sprites': [_0x35cdcb(0x78b), _0x35cdcb(0x2c6)],
                'animationFrameTime': 0x578
            }
        },
        'animation': 'none',
        'hasSoul': !![],
        'antiStuck': !![]
    },
    'crab': {
        'name': _0x35cdcb(0x3ce),
        'moveable': ![],
        'type': objectType[_0x35cdcb(0xa73)],
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
                'sprites': [_0x35cdcb(0x939), _0x35cdcb(0x450), _0x35cdcb(0x390), _0x35cdcb(0x8f6), _0x35cdcb(0x490), 'crab_6'],
                'animationFrameTime': 0x78
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'hasSoul': !![],
        'antiStuck': !![]
    },
    'frog': {
        'name': _0x35cdcb(0x9db),
        'type': objectType[_0x35cdcb(0xa73)],
        'width': 0x20,
        'height': 0x28,
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.1,
            'right': 0.1,
            'top': 0.1,
            'bottom': 0.06
        },
        'animations': {
            'idle_right': {
                'sprites': ['frog_1_idle_right', _0x35cdcb(0x908), 'frog_3_idle_right', 'frog_4_idle_right', _0x35cdcb(0x5ff), 'frog_6_idle_right', 'frog_7_idle_right', _0x35cdcb(0x315), 'frog_9_idle_right', 'frog_10_idle_right', _0x35cdcb(0x998), _0x35cdcb(0x7e4), 'frog_13_idle_right', _0x35cdcb(0x232), _0x35cdcb(0x35a), _0x35cdcb(0x76e)],
                'animationFrameTime': 0x50
            },
            'idle_left': {
                'sprites': [_0x35cdcb(0x4e1), 'frog_2_idle_left', _0x35cdcb(0xab7), _0x35cdcb(0x3d9), 'frog_5_idle_left', _0x35cdcb(0x9dc), _0x35cdcb(0x474), 'frog_8_idle_left', _0x35cdcb(0x4c7), _0x35cdcb(0x8bd), _0x35cdcb(0x808), _0x35cdcb(0x59a), 'frog_13_idle_left', 'frog_14_idle_left', _0x35cdcb(0x4b3), _0x35cdcb(0x373)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x602),
        'hasSoul': !![],
        'antiStuck': !![]
    },
    'woodpecker': {
        'name': _0x35cdcb(0x72f),
        'type': objectType['FOOD'],
        'width': 0x64,
        'height': 0x6b,
        'moveable': ![],
        'colliderRectangleOffset': {
            'left': 0.2,
            'right': 0.4,
            'top': 0.25,
            'bottom': 0.02
        },
        'animations': {
            'idle': {
                'sprites': [_0x35cdcb(0x495), _0x35cdcb(0xaf0), _0x35cdcb(0x542), _0x35cdcb(0x5d3), _0x35cdcb(0xac0), _0x35cdcb(0x321), _0x35cdcb(0xac0), 'woodpecker_4_idle', _0x35cdcb(0x542), _0x35cdcb(0xaf0), _0x35cdcb(0x495), _0x35cdcb(0x495), _0x35cdcb(0xaf0), _0x35cdcb(0x542), _0x35cdcb(0x5d3), _0x35cdcb(0xac0), _0x35cdcb(0x321), _0x35cdcb(0xac0), _0x35cdcb(0x5d3), _0x35cdcb(0x542), _0x35cdcb(0xaf0), _0x35cdcb(0x495), _0x35cdcb(0x495), _0x35cdcb(0xaf0), _0x35cdcb(0x542), _0x35cdcb(0x5d3), _0x35cdcb(0xac0), _0x35cdcb(0x321), _0x35cdcb(0xac0), _0x35cdcb(0x5d3), _0x35cdcb(0x542), 'woodpecker_2_idle', _0x35cdcb(0x495), _0x35cdcb(0x495), _0x35cdcb(0xaf0), _0x35cdcb(0x542), 'woodpecker_4_idle', _0x35cdcb(0xac0), _0x35cdcb(0x321), _0x35cdcb(0xac0), 'woodpecker_4_idle', _0x35cdcb(0x542), _0x35cdcb(0xaf0), _0x35cdcb(0x495), _0x35cdcb(0x495), _0x35cdcb(0xaf0), _0x35cdcb(0x542), _0x35cdcb(0x5d3), _0x35cdcb(0xac0), _0x35cdcb(0x321), _0x35cdcb(0xac0), 'woodpecker_4_idle', 'woodpecker_3_idle', 'woodpecker_2_idle', 'woodpecker_1_idle', 'woodpecker_1_idle', _0x35cdcb(0xaf0), _0x35cdcb(0x542), 'woodpecker_4_idle', _0x35cdcb(0xac0), _0x35cdcb(0x321), _0x35cdcb(0xac0), _0x35cdcb(0x5d3), _0x35cdcb(0x542), 'woodpecker_2_idle', _0x35cdcb(0x495), _0x35cdcb(0x495), _0x35cdcb(0xaf0), _0x35cdcb(0x542), _0x35cdcb(0x5d3), _0x35cdcb(0xac0), _0x35cdcb(0x321), 'woodpecker_5_idle', _0x35cdcb(0x5d3), _0x35cdcb(0x542), _0x35cdcb(0xaf0), _0x35cdcb(0x495), _0x35cdcb(0x495), 'woodpecker_2_idle', 'woodpecker_3_idle', 'woodpecker_4_idle', 'woodpecker_5_idle', _0x35cdcb(0x321), _0x35cdcb(0xac0), _0x35cdcb(0x5d3), _0x35cdcb(0x542), _0x35cdcb(0xaf0), _0x35cdcb(0x495), _0x35cdcb(0x495), _0x35cdcb(0xaf0), 'woodpecker_3_idle', _0x35cdcb(0x5d3), _0x35cdcb(0xac0), 'woodpecker_6_idle', _0x35cdcb(0xac0), 'woodpecker_4_idle', 'woodpecker_3_idle', _0x35cdcb(0xaf0), _0x35cdcb(0x495), _0x35cdcb(0x495), 'woodpecker_2_idle', 'woodpecker_3_idle', 'woodpecker_4_idle', _0x35cdcb(0xac0), 'woodpecker_6_idle', _0x35cdcb(0xac0), _0x35cdcb(0x5d3), _0x35cdcb(0x542), 'woodpecker_2_idle', 'woodpecker_1_idle', 'woodpecker_1_idle', _0x35cdcb(0xaf0), _0x35cdcb(0x542), 'woodpecker_4_idle', _0x35cdcb(0xac0), _0x35cdcb(0x321), 'woodpecker_5_idle', 'woodpecker_4_idle', 'woodpecker_3_idle', _0x35cdcb(0xaf0), _0x35cdcb(0x495), 'woodpecker_1_idle', _0x35cdcb(0xaf0), _0x35cdcb(0x542), _0x35cdcb(0x5d3), 'woodpecker_5_idle', _0x35cdcb(0x321), _0x35cdcb(0xac0), _0x35cdcb(0x5d3), 'woodpecker_3_idle', _0x35cdcb(0xaf0), 'woodpecker_1_idle', 'woodpecker_1_idle', _0x35cdcb(0xaf0), 'woodpecker_3_idle', 'woodpecker_4_idle', _0x35cdcb(0xac0), _0x35cdcb(0x321), _0x35cdcb(0xac0), _0x35cdcb(0x5d3), _0x35cdcb(0x542), _0x35cdcb(0xaf0), _0x35cdcb(0x495), _0x35cdcb(0x495), 'woodpecker_2_idle', 'woodpecker_3_idle', _0x35cdcb(0x5d3), _0x35cdcb(0xac0), _0x35cdcb(0x321), _0x35cdcb(0xac0), _0x35cdcb(0x5d3), _0x35cdcb(0x542), _0x35cdcb(0xaf0), 'woodpecker_1_idle', _0x35cdcb(0x495), _0x35cdcb(0xaf0), 'woodpecker_3_idle', _0x35cdcb(0x5d3), 'woodpecker_5_idle', 'woodpecker_6_idle', 'woodpecker_5_idle', _0x35cdcb(0x5d3), _0x35cdcb(0x542), _0x35cdcb(0xaf0), _0x35cdcb(0x495), 'woodpecker_1_idle', 'woodpecker_2_idle', _0x35cdcb(0x542), _0x35cdcb(0x5d3), _0x35cdcb(0xac0), _0x35cdcb(0x321), _0x35cdcb(0xac0), _0x35cdcb(0x5d3), _0x35cdcb(0x542), _0x35cdcb(0xaf0), _0x35cdcb(0x495), _0x35cdcb(0x495), _0x35cdcb(0xaf0), _0x35cdcb(0x542), 'woodpecker_4_idle', 'woodpecker_5_idle', _0x35cdcb(0x321), _0x35cdcb(0xac0), 'woodpecker_4_idle', 'woodpecker_3_idle', 'woodpecker_2_idle', _0x35cdcb(0x495), _0x35cdcb(0x629), _0x35cdcb(0x45f), _0x35cdcb(0x2e5), 'woodpecker_4_pecking', 'woodpecker_5_pecking', _0x35cdcb(0x629), _0x35cdcb(0x45f), 'woodpecker_3_pecking', _0x35cdcb(0x46b), _0x35cdcb(0x237), _0x35cdcb(0x629), _0x35cdcb(0x45f), _0x35cdcb(0x2e5), 'woodpecker_4_pecking', _0x35cdcb(0x237), _0x35cdcb(0x629), _0x35cdcb(0x45f), _0x35cdcb(0x2e5), 'woodpecker_4_pecking', _0x35cdcb(0x237), _0x35cdcb(0x629), _0x35cdcb(0x45f), 'woodpecker_3_pecking', _0x35cdcb(0x46b), _0x35cdcb(0x237), _0x35cdcb(0x629), _0x35cdcb(0x45f), _0x35cdcb(0x2e5), _0x35cdcb(0x46b), 'woodpecker_5_pecking', _0x35cdcb(0x629), _0x35cdcb(0x45f), _0x35cdcb(0x2e5), _0x35cdcb(0x46b), _0x35cdcb(0x237), _0x35cdcb(0x629), 'woodpecker_2_pecking', _0x35cdcb(0x2e5), _0x35cdcb(0x46b), 'woodpecker_5_pecking', 'woodpecker_1_pecking', _0x35cdcb(0x45f), _0x35cdcb(0x2e5), 'woodpecker_4_pecking', _0x35cdcb(0x237), _0x35cdcb(0x629), _0x35cdcb(0x45f), _0x35cdcb(0x2e5), 'woodpecker_4_pecking', _0x35cdcb(0x237), 'woodpecker_1_pecking', _0x35cdcb(0x45f), 'woodpecker_3_pecking', _0x35cdcb(0x46b), _0x35cdcb(0x237)],
                'animationFrameTime': 0x2d
            }
        },
        'animation': _0x35cdcb(0x2b1),
        'hasSoul': !![]
    },
    'deadFish': {
        'name': 'deadFish',
        'moveable': ![],
        'type': objectType[_0x35cdcb(0xa73)],
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
                'sprites': [_0x35cdcb(0xafd)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'antiStuck': !![]
    },
    'mouse': {
        'name': 'mouse',
        'type': objectType[_0x35cdcb(0xa73)],
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
                'sprites': ['mouse_1_right', _0x35cdcb(0x697), 'mouse_3_right', _0x35cdcb(0x567), 'mouse_5_right', 'mouse_6_right', _0x35cdcb(0x54f), _0x35cdcb(0xa53), _0x35cdcb(0x417), _0x35cdcb(0x1d8)],
                'animationFrameTime': 0x50
            },
            'running_left': {
                'sprites': [_0x35cdcb(0x31a), _0x35cdcb(0x298), 'mouse_3_left', _0x35cdcb(0x916), _0x35cdcb(0x39d), _0x35cdcb(0x896), _0x35cdcb(0x518), _0x35cdcb(0x7d0), 'mouse_9_left', _0x35cdcb(0x2a4)],
                'animationFrameTime': 0x50
            },
            'idle_right': {
                'sprites': [_0x35cdcb(0xa12), 'mouse_2_idle_right', _0x35cdcb(0x5fc), 'mouse_4_idle_right', 'mouse_5_idle_right', _0x35cdcb(0x606), _0x35cdcb(0x501), _0x35cdcb(0x252), _0x35cdcb(0x97c), _0x35cdcb(0x252), _0x35cdcb(0x501), _0x35cdcb(0x606), _0x35cdcb(0x59d), _0x35cdcb(0xa3c), _0x35cdcb(0x5fc), _0x35cdcb(0x995)],
                'animationFrameTime': 0x50
            },
            'idle_left': {
                'sprites': [_0x35cdcb(0x6a2), _0x35cdcb(0x560), _0x35cdcb(0xb02), _0x35cdcb(0xad8), _0x35cdcb(0x7a5), _0x35cdcb(0x718), _0x35cdcb(0x8d6), 'mouse_8_idle_left', _0x35cdcb(0xa03), _0x35cdcb(0xa54), _0x35cdcb(0x8d6), _0x35cdcb(0x718), _0x35cdcb(0x7a5), 'mouse_4_idle_left', 'mouse_3_idle_left', _0x35cdcb(0x560)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x602),
        'hasSoul': !![],
        'lockSpeedX': 0x64
    },
    'easterRabbit': {
        'name': _0x35cdcb(0x5b4),
        'type': objectType[_0x35cdcb(0x755)],
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
                'sprites': [_0x35cdcb(0x702), _0x35cdcb(0x3c2), _0x35cdcb(0x920), 'easterRabbit_4_right', _0x35cdcb(0x842), 'easterRabbit_6_right', 'easterRabbit_7_right', _0x35cdcb(0x6f5), _0x35cdcb(0xa14), _0x35cdcb(0x9c3), _0x35cdcb(0x7ec), _0x35cdcb(0xab1), _0x35cdcb(0x267), _0x35cdcb(0x987), _0x35cdcb(0x849)],
                'animationFrameTime': 0x50
            },
            'running_left': {
                'sprites': [_0x35cdcb(0x20c), _0x35cdcb(0x231), _0x35cdcb(0xa4f), _0x35cdcb(0x9b3), _0x35cdcb(0x719), _0x35cdcb(0xac2), 'easterRabbit_7_left', _0x35cdcb(0x778), 'easterRabbit_9_left', _0x35cdcb(0x9ba), _0x35cdcb(0xa6f), _0x35cdcb(0x437), _0x35cdcb(0x5b8), 'easterRabbit_14_left', _0x35cdcb(0x8f8)],
                'animationFrameTime': 0x50
            },
            'idle_right': {
                'sprites': [_0x35cdcb(0x8ad), _0x35cdcb(0x6e1), _0x35cdcb(0x4bd), _0x35cdcb(0x617), 'easterRabbit_5_idle_right', _0x35cdcb(0x7f5), _0x35cdcb(0x40f), _0x35cdcb(0xa8e), 'easterRabbit_9_idle_right', _0x35cdcb(0x548), _0x35cdcb(0xab5), _0x35cdcb(0x64b), _0x35cdcb(0x65a), _0x35cdcb(0x1d1)],
                'animationFrameTime': 0x50
            },
            'idle_left': {
                'sprites': ['easterRabbit_1_idle_left', _0x35cdcb(0xa8c), _0x35cdcb(0x8df), _0x35cdcb(0xaf3), 'easterRabbit_5_idle_left', 'easterRabbit_6_idle_left', _0x35cdcb(0x75c), _0x35cdcb(0x302), _0x35cdcb(0x7ee), 'easterRabbit_10_idle_left', _0x35cdcb(0x4fc), _0x35cdcb(0x5a8), _0x35cdcb(0xa55), 'easterRabbit_14_idle_left'],
                'animationFrameTime': 0x50
            }
        },
        'animation': 'idle_right',
        'zIndex': 0xa,
        'lockSpeedX': 0x12c
    },
    'halloweenGhost': {
        'name': _0x35cdcb(0x289),
        'type': objectType[_0x35cdcb(0x755)],
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
                'sprites': ['halloweenGhost_1_idle_right', 'halloweenGhost_2_idle_right', _0x35cdcb(0xad9), _0x35cdcb(0x524), _0x35cdcb(0x7f4), 'halloweenGhost_6_idle_right', 'halloweenGhost_7_idle_right', _0x35cdcb(0x66e), 'halloweenGhost_9_idle_right', _0x35cdcb(0x66e), _0x35cdcb(0x446), _0x35cdcb(0x247), _0x35cdcb(0x7f4), _0x35cdcb(0x524), _0x35cdcb(0xad9), _0x35cdcb(0x7d8), _0x35cdcb(0x7dc)],
                'animationFrameTime': 0x3c
            },
            'idle_left': {
                'sprites': [_0x35cdcb(0x8d8), 'halloweenGhost_2_idle_left', _0x35cdcb(0x8ac), _0x35cdcb(0x9ee), _0x35cdcb(0x4e2), _0x35cdcb(0xac6), 'halloweenGhost_7_idle_left', 'halloweenGhost_8_idle_left', _0x35cdcb(0x3ac), _0x35cdcb(0x98d), _0x35cdcb(0x669), 'halloweenGhost_6_idle_left', _0x35cdcb(0x4e2), _0x35cdcb(0x9ee), _0x35cdcb(0x8ac), _0x35cdcb(0x457), 'halloweenGhost_1_idle_left'],
                'animationFrameTime': 0x3c
            }
        },
        'animation': _0x35cdcb(0x602),
        'moveable': ![]
    },
    'halloweenPumpkin': {
        'name': 'halloweenPumpkin',
        'type': objectType[_0x35cdcb(0x755)],
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
                'sprites': [_0x35cdcb(0x3ef), _0x35cdcb(0x59f), 'halloweenPumpkin_3_idle', _0x35cdcb(0xaf1), _0x35cdcb(0x794), _0x35cdcb(0x796)],
                'animationFrameTime': 0x3c
            }
        },
        'animation': _0x35cdcb(0x2b1),
        'moveable': ![]
    },
    'evilRat': {
        'name': _0x35cdcb(0x900),
        'fullName': _0x35cdcb(0x7ab),
        'type': objectType[_0x35cdcb(0xa73)],
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
                'sprites': [_0x35cdcb(0x2f7), _0x35cdcb(0x580), _0x35cdcb(0xa32), _0x35cdcb(0x1cd), _0x35cdcb(0x400), _0x35cdcb(0x4db), 'evilRat_7_right', _0x35cdcb(0x4db), 'evilRat_5_right', 'evilRat_4_right', _0x35cdcb(0xa32), _0x35cdcb(0x580)],
                'animationFrameTime': 0x50
            },
            'running_left': {
                'sprites': [_0x35cdcb(0x341), _0x35cdcb(0x61c), _0x35cdcb(0x9f9), 'evilRat_4_left', _0x35cdcb(0x89b), _0x35cdcb(0x311), _0x35cdcb(0x225), _0x35cdcb(0x311), _0x35cdcb(0x89b), _0x35cdcb(0x227), _0x35cdcb(0x9f9), _0x35cdcb(0x61c)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x7f7),
        'hasSoul': !![],
        'lockSpeedX': 0xfa
    },
    'giantRat': {
        'name': _0x35cdcb(0x797),
        'fullName': _0x35cdcb(0x4c9),
        'type': objectType[_0x35cdcb(0xa73)],
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
                'sprites': [_0x35cdcb(0x952), _0x35cdcb(0x68b), 'giantRat_3_right', _0x35cdcb(0xae3), _0x35cdcb(0x877), _0x35cdcb(0x5d8), _0x35cdcb(0x4b4), _0x35cdcb(0x5d8), _0x35cdcb(0x877), 'giantRat_4_right', _0x35cdcb(0xa1d), _0x35cdcb(0x68b)],
                'animationFrameTime': 0x78
            },
            'running_left': {
                'sprites': ['giantRat_1_left', 'giantRat_2_left', 'giantRat_3_left', 'giantRat_4_left', _0x35cdcb(0x9e3), _0x35cdcb(0x67f), 'giantRat_7_left', _0x35cdcb(0x67f), _0x35cdcb(0x9e3), _0x35cdcb(0x2ef), 'giantRat_3_left', _0x35cdcb(0x7fd)],
                'animationFrameTime': 0x78
            }
        },
        'animation': _0x35cdcb(0x7f7),
        'hasSoul': !![],
        'lockSpeedX': 0x118
    },
    'smallDemon': {
        'name': _0x35cdcb(0x473),
        'fullName': _0x35cdcb(0xb30),
        'type': objectType[_0x35cdcb(0xa73)],
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
                'sprites': ['smallDemon_1_right', _0x35cdcb(0xa2c), _0x35cdcb(0x85a), _0x35cdcb(0xa46), _0x35cdcb(0x74a), _0x35cdcb(0xb29), 'smallDemon_7_right', _0x35cdcb(0x39a)],
                'animationFrameTime': 0x50
            },
            'running_left': {
                'sprites': [_0x35cdcb(0x9ce), _0x35cdcb(0x79d), _0x35cdcb(0xad6), _0x35cdcb(0x943), _0x35cdcb(0x944), 'smallDemon_6_left', _0x35cdcb(0x335), _0x35cdcb(0xa15)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x7f7),
        'hasSoul': !![],
        'lockSpeedX': 0xaf
    },
    'lemming': {
        'name': 'lemming',
        'type': objectType[_0x35cdcb(0xa73)],
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
                'sprites': ['lemming_1_right', _0x35cdcb(0x273), 'lemming_3_right', _0x35cdcb(0x312), _0x35cdcb(0x3c0), 'lemming_6_right', _0x35cdcb(0x2bb), 'lemming_8_right', _0x35cdcb(0x513), _0x35cdcb(0x4ef), _0x35cdcb(0x77c), 'lemming_12_right', _0x35cdcb(0x4c5), _0x35cdcb(0x427), 'lemming_15_right'],
                'animationFrameTime': 0x50
            },
            'running_left': {
                'sprites': ['lemming_1_left', _0x35cdcb(0xaa0), 'lemming_3_left', _0x35cdcb(0x324), _0x35cdcb(0x248), 'lemming_6_left', _0x35cdcb(0x544), _0x35cdcb(0x4a5), _0x35cdcb(0x202), _0x35cdcb(0x24f), _0x35cdcb(0x3ad), _0x35cdcb(0x890), _0x35cdcb(0x466), _0x35cdcb(0xa24), _0x35cdcb(0x77a)],
                'animationFrameTime': 0x50
            },
            'idle_right': {
                'sprites': [_0x35cdcb(0x1fb), _0x35cdcb(0x84b), 'lemming_3_idle_right', 'lemming_4_idle_right', _0x35cdcb(0x7c6), _0x35cdcb(0x3df), _0x35cdcb(0xada), 'lemming_6_idle_right', 'lemming_5_idle_right', _0x35cdcb(0x8bc), 'lemming_3_idle_right', _0x35cdcb(0x84b)],
                'animationFrameTime': 0x28
            },
            'idle_left': {
                'sprites': ['lemming_1_idle_left', _0x35cdcb(0x1df), _0x35cdcb(0x5b2), 'lemming_4_idle_left', _0x35cdcb(0xb1a), _0x35cdcb(0x468), 'lemming_7_idle_left', 'lemming_6_idle_left', _0x35cdcb(0xb1a), _0x35cdcb(0x5bd), _0x35cdcb(0x5b2), 'lemming_2_idle_left'],
                'animationFrameTime': 0x28
            }
        },
        'animation': _0x35cdcb(0x602),
        'hasSoul': !![],
        'lockSpeedX': 0x64
    },
    'penguin': {
        'name': _0x35cdcb(0x561),
        'type': objectType['FOOD'],
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
                'sprites': [_0x35cdcb(0x2ee), 'penguin_2_right', 'penguin_3_right', _0x35cdcb(0x965), _0x35cdcb(0x7e2), 'penguin_6_right', _0x35cdcb(0x986), _0x35cdcb(0x833), _0x35cdcb(0x810), _0x35cdcb(0x970), 'penguin_11_right'],
                'animationFrameTime': 0x50
            },
            'running_left': {
                'sprites': [_0x35cdcb(0x529), _0x35cdcb(0x5c8), 'penguin_3_left', 'penguin_4_left', _0x35cdcb(0x9eb), 'penguin_6_left', 'penguin_7_left', 'penguin_8_left', _0x35cdcb(0x50c), 'penguin_10_left', _0x35cdcb(0x4c1)],
                'animationFrameTime': 0x50
            },
            'idle_right': {
                'sprites': [_0x35cdcb(0x940), _0x35cdcb(0x259), _0x35cdcb(0x969), 'penguin_4_idle_right', _0x35cdcb(0x969), _0x35cdcb(0x259)],
                'animationFrameTime': 0x96
            },
            'idle_left': {
                'sprites': ['penguin_1_idle_left', 'penguin_2_idle_left', _0x35cdcb(0x2ca), _0x35cdcb(0x38e), _0x35cdcb(0x2ca), 'penguin_2_idle_left'],
                'animationFrameTime': 0x96
            }
        },
        'animation': 'idle_right',
        'hasSoul': !![],
        'lockSpeedX': 0x46,
        'floatingInWater': !![]
    },
    'worm': {
        'name': _0x35cdcb(0x829),
        'type': objectType[_0x35cdcb(0xa73)],
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
                'sprites': ['worm_1_right', _0x35cdcb(0x864), _0x35cdcb(0x483), _0x35cdcb(0x8d5), _0x35cdcb(0xa1f), 'worm_6_right', _0x35cdcb(0x879), _0x35cdcb(0x243), _0x35cdcb(0x86f), _0x35cdcb(0x243), _0x35cdcb(0x879), _0x35cdcb(0x7ce), _0x35cdcb(0xa1f), _0x35cdcb(0x8d5), _0x35cdcb(0x483), 'worm_2_right'],
                'animationFrameTime': 0x50
            },
            'running_left': {
                'sprites': ['worm_1_left', _0x35cdcb(0x8b2), _0x35cdcb(0x2b7), 'worm_4_left', 'worm_5_left', 'worm_6_left', _0x35cdcb(0x735), _0x35cdcb(0x9e5), _0x35cdcb(0x7a9), _0x35cdcb(0x9e5), _0x35cdcb(0x735), _0x35cdcb(0xabe), _0x35cdcb(0x705), _0x35cdcb(0x5e9), _0x35cdcb(0x2b7), _0x35cdcb(0x8b2)],
                'animationFrameTime': 0x50
            },
            'idle_right': {
                'sprites': [_0x35cdcb(0x329), _0x35cdcb(0xa5d), 'worm_3_idle_right', _0x35cdcb(0x77d), _0x35cdcb(0x318), 'worm_6_idle_right', _0x35cdcb(0x35c), 'worm_8_idle_right', 'worm_9_idle_right', _0x35cdcb(0x4d1), _0x35cdcb(0xa2a), _0x35cdcb(0x888), 'worm_13_idle_right', 'worm_14_idle_right', _0x35cdcb(0x206)],
                'animationFrameTime': 0x50
            },
            'idle_left': {
                'sprites': [_0x35cdcb(0x62d), 'worm_2_idle_left', _0x35cdcb(0x6b7), 'worm_4_idle_left', _0x35cdcb(0x467), _0x35cdcb(0x95d), _0x35cdcb(0x68e), 'worm_8_idle_left', _0x35cdcb(0x96a), _0x35cdcb(0x78f), 'worm_11_idle_left', _0x35cdcb(0x9e4), _0x35cdcb(0x587), _0x35cdcb(0x809), _0x35cdcb(0x6ca)],
                'animationFrameTime': 0x50
            }
        },
        'animation': 'idle_right',
        'hasSoul': !![],
        'lockSpeedX': 0x1e
    },
    'alienBigInsect': {
        'name': 'alienBigInsect',
        'fullName': 'Cosmic\x20Big\x20Insect',
        'type': objectType[_0x35cdcb(0xa73)],
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
                'sprites': ['alienBigInsect_1_right', _0x35cdcb(0x80d), 'alienBigInsect_3_right', _0x35cdcb(0x2af), _0x35cdcb(0x66c), _0x35cdcb(0x64c), _0x35cdcb(0x264), 'alienBigInsect_8_right', 'alienBigInsect_9_right', _0x35cdcb(0x68c)],
                'animationFrameTime': 0x50
            },
            'running_left': {
                'sprites': ['alienBigInsect_1_left', 'alienBigInsect_2_left', _0x35cdcb(0x38c), 'alienBigInsect_4_left', 'alienBigInsect_5_left', 'alienBigInsect_6_left', _0x35cdcb(0x309), _0x35cdcb(0x26d), _0x35cdcb(0x403), 'alienBigInsect_10_left'],
                'animationFrameTime': 0x50
            },
            'idle_right': {
                'sprites': ['alienBigInsect_1_idle_right', _0x35cdcb(0xae0), _0x35cdcb(0x57f), _0x35cdcb(0x9a3), 'alienBigInsect_5_idle_right', _0x35cdcb(0x496), _0x35cdcb(0xa4c), _0x35cdcb(0x9a3), _0x35cdcb(0x57f), _0x35cdcb(0xae0)],
                'animationFrameTime': 0x50
            },
            'idle_left': {
                'sprites': ['alienBigInsect_1_idle_left', _0x35cdcb(0x9c1), _0x35cdcb(0x7fb), _0x35cdcb(0x334), _0x35cdcb(0x5af), _0x35cdcb(0x3e1), 'alienBigInsect_5_idle_left', 'alienBigInsect_4_idle_left', _0x35cdcb(0x7fb), _0x35cdcb(0x9c1)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x602),
        'hasSoul': !![],
        'lockSpeedX': 0xfa
    },
    'blackWidow': {
        'name': _0x35cdcb(0x2c2),
        'fullName': _0x35cdcb(0x87d),
        'type': objectType['FOOD'],
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
                'sprites': [_0x35cdcb(0x821), _0x35cdcb(0x515), _0x35cdcb(0xb11), _0x35cdcb(0x904), _0x35cdcb(0x257), _0x35cdcb(0x364), 'blackWidow_7_right', _0x35cdcb(0xaa2)],
                'animationFrameTime': 0x50
            },
            'running_left': {
                'sprites': [_0x35cdcb(0x536), 'blackWidow_2_left', _0x35cdcb(0x752), _0x35cdcb(0x8a9), _0x35cdcb(0x30b), _0x35cdcb(0xaf6), _0x35cdcb(0x9c8), _0x35cdcb(0xad5)],
                'animationFrameTime': 0x50
            },
            'idle_right': {
                'sprites': [_0x35cdcb(0x3eb), _0x35cdcb(0x58f), _0x35cdcb(0x3a5), 'blackWidow_4_idle_right', 'blackWidow_5_idle_right', 'blackWidow_6_idle_right', _0x35cdcb(0x8a4), _0x35cdcb(0x99a), 'blackWidow_5_idle_right', _0x35cdcb(0x923), _0x35cdcb(0x3a5), _0x35cdcb(0x58f)],
                'animationFrameTime': 0x5a
            },
            'idle_left': {
                'sprites': [_0x35cdcb(0x7d1), _0x35cdcb(0x9a9), _0x35cdcb(0x90b), _0x35cdcb(0x420), _0x35cdcb(0x284), _0x35cdcb(0x7d9), _0x35cdcb(0x566), _0x35cdcb(0x7d9), 'blackWidow_5_idle_left', _0x35cdcb(0x420), _0x35cdcb(0x90b), _0x35cdcb(0x9a9)],
                'animationFrameTime': 0x5a
            }
        },
        'animation': 'idle_right',
        'hasSoul': !![],
        'lockSpeedX': 0x13b
    },
    'mummy': {
        'name': _0x35cdcb(0xabf),
        'type': objectType['FOOD'],
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
                'sprites': [_0x35cdcb(0x901), _0x35cdcb(0x4a7), 'mummy_3_right', _0x35cdcb(0xa0f), _0x35cdcb(0x1ce), _0x35cdcb(0x29c), _0x35cdcb(0x568), 'mummy_8_right', _0x35cdcb(0x430), 'mummy_10_right', _0x35cdcb(0x31d), _0x35cdcb(0x440), _0x35cdcb(0x597), _0x35cdcb(0x290), _0x35cdcb(0x2bc)],
                'animationFrameTime': 0x50
            },
            'running_left': {
                'sprites': [_0x35cdcb(0x359), _0x35cdcb(0x91c), _0x35cdcb(0xaec), _0x35cdcb(0x823), _0x35cdcb(0x37e), _0x35cdcb(0x5fe), _0x35cdcb(0xac9), 'mummy_8_left', _0x35cdcb(0xa89), _0x35cdcb(0x50a), 'mummy_11_left', _0x35cdcb(0x34b), _0x35cdcb(0x720), _0x35cdcb(0x5b3), _0x35cdcb(0x532)],
                'animationFrameTime': 0x50
            },
            'idle_right': {
                'sprites': ['mummy_1_idle_right', 'mummy_2_idle_right', _0x35cdcb(0xa91), _0x35cdcb(0x710), 'mummy_5_idle_right', _0x35cdcb(0x56e), _0x35cdcb(0x22f), _0x35cdcb(0x710), _0x35cdcb(0xa91), _0x35cdcb(0x9d3)],
                'animationFrameTime': 0x50
            },
            'idle_left': {
                'sprites': [_0x35cdcb(0x48e), 'mummy_2_idle_left', _0x35cdcb(0x78a), _0x35cdcb(0x49c), _0x35cdcb(0x62b), _0x35cdcb(0x5a6), _0x35cdcb(0x62b), _0x35cdcb(0x49c), 'mummy_3_idle_left', _0x35cdcb(0x9d5)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x602),
        'hasSoul': !![],
        'lockSpeedX': 0x8c
    },
    'yeti': {
        'name': _0x35cdcb(0x83b),
        'type': objectType[_0x35cdcb(0xa73)],
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
                'sprites': [_0x35cdcb(0xa87), _0x35cdcb(0x98b), 'yeti_3_right', _0x35cdcb(0x1fc), _0x35cdcb(0x70b), _0x35cdcb(0x5b0), _0x35cdcb(0x554), _0x35cdcb(0x423), 'yeti_9_right', _0x35cdcb(0x622)],
                'animationFrameTime': 0x50
            },
            'running_left': {
                'sprites': [_0x35cdcb(0x747), _0x35cdcb(0x588), _0x35cdcb(0x8ae), _0x35cdcb(0x6d5), _0x35cdcb(0x1de), _0x35cdcb(0x57c), _0x35cdcb(0x26e), _0x35cdcb(0x6b9), _0x35cdcb(0x7ac), _0x35cdcb(0x69a)],
                'animationFrameTime': 0x50
            },
            'idle_right': {
                'sprites': ['yeti_1_idle_right', 'yeti_2_idle_right', 'yeti_3_idle_right', _0x35cdcb(0x3b8), _0x35cdcb(0x98f), 'yeti_6_idle_right', _0x35cdcb(0x98f), _0x35cdcb(0x3b8), _0x35cdcb(0x37c), _0x35cdcb(0x937)],
                'animationFrameTime': 0x50
            },
            'idle_left': {
                'sprites': [_0x35cdcb(0x79c), _0x35cdcb(0x60d), _0x35cdcb(0x27c), _0x35cdcb(0x6de), 'yeti_5_idle_left', _0x35cdcb(0x886), 'yeti_5_idle_left', 'yeti_4_idle_left', _0x35cdcb(0x27c), _0x35cdcb(0x60d)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x602),
        'hasSoul': !![],
        'lockSpeedX': 0x8c
    },
    'tyrannosaurus': {
        'name': _0x35cdcb(0x351),
        'type': objectType[_0x35cdcb(0xa73)],
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
                'sprites': [_0x35cdcb(0x3a0), _0x35cdcb(0x675), 'tyrannosaurus_3_right', _0x35cdcb(0x381), _0x35cdcb(0x85c), _0x35cdcb(0x94b), 'tyrannosaurus_7_right', _0x35cdcb(0x942), _0x35cdcb(0x9fa), _0x35cdcb(0xa56), _0x35cdcb(0x917), _0x35cdcb(0x344), _0x35cdcb(0x407), _0x35cdcb(0xa3e), 'tyrannosaurus_15_right'],
                'animationFrameTime': 0x50
            },
            'running_left': {
                'sprites': [_0x35cdcb(0x80f), _0x35cdcb(0x42c), _0x35cdcb(0x552), _0x35cdcb(0x8bb), _0x35cdcb(0xab0), _0x35cdcb(0x863), _0x35cdcb(0x53b), 'tyrannosaurus_8_left', _0x35cdcb(0x5d7), 'tyrannosaurus_10_left', _0x35cdcb(0x436), _0x35cdcb(0x42a), 'tyrannosaurus_13_left', _0x35cdcb(0x725), _0x35cdcb(0xa3d)],
                'animationFrameTime': 0x50
            },
            'idle_right': {
                'sprites': ['tyrannosaurus_1_idle_right', _0x35cdcb(0x5cd), 'tyrannosaurus_3_idle_right', _0x35cdcb(0x7ae), _0x35cdcb(0x29e), _0x35cdcb(0x680), _0x35cdcb(0x7e1), _0x35cdcb(0x831), 'tyrannosaurus_9_idle_right', _0x35cdcb(0x371), _0x35cdcb(0x1fe), _0x35cdcb(0x831), _0x35cdcb(0x7e1), _0x35cdcb(0x680), _0x35cdcb(0x29e), 'tyrannosaurus_4_idle_right', _0x35cdcb(0x45b), _0x35cdcb(0x5cd)],
                'animationFrameTime': 0x50
            },
            'idle_left': {
                'sprites': [_0x35cdcb(0x950), _0x35cdcb(0x64a), _0x35cdcb(0x73a), _0x35cdcb(0xaff), _0x35cdcb(0x966), _0x35cdcb(0x5c0), 'tyrannosaurus_7_idle_left', _0x35cdcb(0x46a), _0x35cdcb(0x92c), _0x35cdcb(0x6c6), _0x35cdcb(0x92c), _0x35cdcb(0x46a), _0x35cdcb(0x301), _0x35cdcb(0x5c0), _0x35cdcb(0x966), _0x35cdcb(0xaff), _0x35cdcb(0x73a), _0x35cdcb(0x64a)],
                'animationFrameTime': 0x50
            }
        },
        'animation': 'idle_right',
        'hasSoul': !![],
        'lockSpeedX': 0x8c
    },
    'mammoth': {
        'name': _0x35cdcb(0x3ed),
        'type': objectType[_0x35cdcb(0xa73)],
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
                'sprites': [_0x35cdcb(0x979), _0x35cdcb(0x8a6), _0x35cdcb(0x895), _0x35cdcb(0x228), _0x35cdcb(0x478), _0x35cdcb(0x614), 'mammoth_7_right', _0x35cdcb(0x89c), 'mammoth_9_right', _0x35cdcb(0x84a)],
                'animationFrameTime': 0x78
            },
            'running_left': {
                'sprites': [_0x35cdcb(0x86a), _0x35cdcb(0x589), _0x35cdcb(0x354), _0x35cdcb(0x787), _0x35cdcb(0x8a3), 'mammoth_6_left', 'mammoth_7_left', _0x35cdcb(0x80a), _0x35cdcb(0x238), _0x35cdcb(0x92b)],
                'animationFrameTime': 0x78
            },
            'idle_right': {
                'sprites': [_0x35cdcb(0x4ae), _0x35cdcb(0x2a8), _0x35cdcb(0x332), 'mammoth_4_idle_right', _0x35cdcb(0x847), 'mammoth_6_idle_right', _0x35cdcb(0x847), _0x35cdcb(0x33c), 'mammoth_3_idle_right', _0x35cdcb(0x2a8)],
                'animationFrameTime': 0x73
            },
            'idle_left': {
                'sprites': [_0x35cdcb(0x4d5), _0x35cdcb(0x25d), _0x35cdcb(0x429), _0x35cdcb(0x60e), _0x35cdcb(0x3c6), _0x35cdcb(0x9df), _0x35cdcb(0x3c6), _0x35cdcb(0x60e), _0x35cdcb(0x429), _0x35cdcb(0x25d)],
                'animationFrameTime': 0x73
            }
        },
        'animation': 'idle_right',
        'hasSoul': !![],
        'lockSpeedX': 0x3c
    },
    'turtle': {
        'name': _0x35cdcb(0x300),
        'type': objectType[_0x35cdcb(0xa73)],
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
                'sprites': [_0x35cdcb(0x58e), 'turtle_2_right', _0x35cdcb(0xae8), _0x35cdcb(0xafa), _0x35cdcb(0x757), _0x35cdcb(0x9a0), _0x35cdcb(0x6a3), 'turtle_8_right'],
                'animationFrameTime': 0xaa
            },
            'running_left': {
                'sprites': [_0x35cdcb(0x721), _0x35cdcb(0x4d9), _0x35cdcb(0x8e4), _0x35cdcb(0x5bb), 'turtle_5_left', _0x35cdcb(0x391), _0x35cdcb(0xa1e), 'turtle_8_left'],
                'animationFrameTime': 0xaa
            },
            'idle_right': {
                'sprites': [_0x35cdcb(0x545), _0x35cdcb(0xaa1), _0x35cdcb(0x54e), _0x35cdcb(0x23e), _0x35cdcb(0x297), _0x35cdcb(0x23e), _0x35cdcb(0x54e), _0x35cdcb(0xaa1)],
                'animationFrameTime': 0x9b
            },
            'idle_left': {
                'sprites': [_0x35cdcb(0x1eb), _0x35cdcb(0xa44), _0x35cdcb(0x9f5), _0x35cdcb(0x658), _0x35cdcb(0x56b), _0x35cdcb(0x658), 'turtle_3_idle_left', _0x35cdcb(0xa44)],
                'animationFrameTime': 0x9b
            }
        },
        'animation': _0x35cdcb(0x602),
        'hasSoul': !![],
        'lockSpeedX': 0x28
    },
    'zombie': {
        'name': _0x35cdcb(0x4f6),
        'type': objectType[_0x35cdcb(0xa73)],
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
                'sprites': ['zombie_1_right', _0x35cdcb(0x4dc), 'zombie_3_right', _0x35cdcb(0x925), _0x35cdcb(0xa65), _0x35cdcb(0x31e), _0x35cdcb(0x3fb), 'zombie_8_right', _0x35cdcb(0x355), _0x35cdcb(0x1d9), _0x35cdcb(0x704), _0x35cdcb(0x9d7), _0x35cdcb(0x696), _0x35cdcb(0x974), _0x35cdcb(0x395), _0x35cdcb(0x8d7)],
                'animationFrameTime': 0x50
            },
            'running_left': {
                'sprites': [_0x35cdcb(0x5de), _0x35cdcb(0x470), _0x35cdcb(0x7ea), _0x35cdcb(0x7f8), _0x35cdcb(0x20a), _0x35cdcb(0x891), 'zombie_7_left', _0x35cdcb(0x6bc), _0x35cdcb(0x516), _0x35cdcb(0x476), 'zombie_11_left', _0x35cdcb(0x72e), _0x35cdcb(0x935), _0x35cdcb(0x9a8), _0x35cdcb(0x304), _0x35cdcb(0x5bc)],
                'animationFrameTime': 0x50
            },
            'idle_right': {
                'sprites': [_0x35cdcb(0x2fa), _0x35cdcb(0x7e0), 'zombie_3_idle_right', _0x35cdcb(0x805), _0x35cdcb(0x2ba), _0x35cdcb(0x774), _0x35cdcb(0x9f8), 'zombie_8_idle_right', _0x35cdcb(0xa4d), 'zombie_10_idle_right', 'zombie_11_idle_right', _0x35cdcb(0x731), _0x35cdcb(0x6d2), _0x35cdcb(0xad2), _0x35cdcb(0x22a), _0x35cdcb(0x4be)],
                'animationFrameTime': 0x50
            },
            'idle_left': {
                'sprites': [_0x35cdcb(0xab2), 'zombie_2_idle_left', _0x35cdcb(0x6ab), _0x35cdcb(0xb27), _0x35cdcb(0x5d0), _0x35cdcb(0x250), _0x35cdcb(0x2f2), _0x35cdcb(0x8fd), _0x35cdcb(0x988), 'zombie_10_idle_left', _0x35cdcb(0x6d1), _0x35cdcb(0x3a7), _0x35cdcb(0x5a0), 'zombie_14_idle_left', _0x35cdcb(0x8e8), _0x35cdcb(0x3f7)],
                'animationFrameTime': 0x50
            }
        },
        'animation': 'idle_right',
        'hasSoul': ![],
        'lockSpeedX': 0x50
    },
    'alienEye': {
        'name': 'alienEye',
        'fullName': _0x35cdcb(0xa3a),
        'type': objectType[_0x35cdcb(0xa73)],
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
                'sprites': [_0x35cdcb(0x2fc), _0x35cdcb(0x8a0), 'alienEye_3_right', _0x35cdcb(0x723), _0x35cdcb(0x278), 'alienEye_6_right', 'alienEye_7_right', 'alienEye_8_right', _0x35cdcb(0x91b), _0x35cdcb(0x5d4)],
                'animationFrameTime': 0x50
            },
            'running_left': {
                'sprites': [_0x35cdcb(0x95c), _0x35cdcb(0x9c6), _0x35cdcb(0x46f), _0x35cdcb(0x8ab), _0x35cdcb(0x1f6), 'alienEye_6_left', _0x35cdcb(0x25e), _0x35cdcb(0x968), _0x35cdcb(0x9bd), _0x35cdcb(0x42f)],
                'animationFrameTime': 0x50
            },
            'idle_right': {
                'sprites': [_0x35cdcb(0x458), 'alienEye_2_idle_right', _0x35cdcb(0x668), _0x35cdcb(0x7f0), _0x35cdcb(0x78d), _0x35cdcb(0x5ba), _0x35cdcb(0x78d), _0x35cdcb(0x7f0), 'alienEye_3_idle_right', _0x35cdcb(0x299)],
                'animationFrameTime': 0x50
            },
            'idle_left': {
                'sprites': ['alienEye_1_idle_left', _0x35cdcb(0x2ab), _0x35cdcb(0x5c7), _0x35cdcb(0x2e0), _0x35cdcb(0x785), _0x35cdcb(0x5da), _0x35cdcb(0x785), 'alienEye_4_idle_left', _0x35cdcb(0x5c7), 'alienEye_2_idle_left'],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x602),
        'hasSoul': !![],
        'lockSpeedX': 0x69
    },
    'snake': {
        'name': 'snake',
        'type': objectType[_0x35cdcb(0xa73)],
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
                'sprites': [_0x35cdcb(0x26b), 'snake_2_right', 'snake_3_right', _0x35cdcb(0x664), _0x35cdcb(0x9e8), _0x35cdcb(0x664), _0x35cdcb(0x40b), _0x35cdcb(0x414)],
                'animationFrameTime': 0x50
            },
            'running_left': {
                'sprites': ['snake_1_left', _0x35cdcb(0x320), _0x35cdcb(0x21d), 'snake_4_left', _0x35cdcb(0x1d7), _0x35cdcb(0xa0c), 'snake_3_left', _0x35cdcb(0x320)],
                'animationFrameTime': 0x50
            },
            'idle_right': {
                'sprites': [_0x35cdcb(0x285), 'snake_2_idle_right', _0x35cdcb(0x625), _0x35cdcb(0x1d3), _0x35cdcb(0x962), 'snake_6_idle_right', 'snake_7_idle_right', _0x35cdcb(0x62c), 'snake_9_idle_right', _0x35cdcb(0x421), 'snake_11_idle_right', _0x35cdcb(0x512), _0x35cdcb(0x5b6), _0x35cdcb(0x616), _0x35cdcb(0x570), _0x35cdcb(0x746), _0x35cdcb(0x649), _0x35cdcb(0x50e), _0x35cdcb(0xa19), _0x35cdcb(0x32f)],
                'animationFrameTime': 0x50
            },
            'idle_left': {
                'sprites': [_0x35cdcb(0x92e), _0x35cdcb(0x4ec), _0x35cdcb(0xa23), _0x35cdcb(0x87f), _0x35cdcb(0x4a3), _0x35cdcb(0xb19), _0x35cdcb(0x8a2), _0x35cdcb(0x59e), _0x35cdcb(0x8ea), 'snake_10_idle_left', 'snake_11_idle_left', _0x35cdcb(0x6a8), 'snake_13_idle_left', 'snake_14_idle_left', 'snake_15_idle_left', _0x35cdcb(0x613), 'snake_17_idle_left', 'snake_18_idle_left', 'snake_19_idle_left', 'snake_20_idle_left'],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x602),
        'hasSoul': !![],
        'lockSpeedX': 0x50
    },
    'crocodile': {
        'name': _0x35cdcb(0x9da),
        'type': objectType[_0x35cdcb(0xa73)],
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
                'sprites': [_0x35cdcb(0x569), 'crocodile_2_right', _0x35cdcb(0x652), 'crocodile_4_right', _0x35cdcb(0x433), 'crocodile_6_right', _0x35cdcb(0x862), 'crocodile_8_right', _0x35cdcb(0x9cf), _0x35cdcb(0x5d6), _0x35cdcb(0x305), _0x35cdcb(0x80e), 'crocodile_13_right', 'crocodile_14_right', 'crocodile_15_right'],
                'animationFrameTime': 0x50
            },
            'running_left': {
                'sprites': [_0x35cdcb(0x5e7), _0x35cdcb(0x707), _0x35cdcb(0x53d), _0x35cdcb(0x694), _0x35cdcb(0x9d1), _0x35cdcb(0x9b9), 'crocodile_7_left', _0x35cdcb(0x306), _0x35cdcb(0xa39), _0x35cdcb(0x874), _0x35cdcb(0x875), 'crocodile_12_left', _0x35cdcb(0x2d3), _0x35cdcb(0x47f), _0x35cdcb(0x645)],
                'animationFrameTime': 0x50
            },
            'idle_right': {
                'sprites': [_0x35cdcb(0x640), _0x35cdcb(0x2dd), _0x35cdcb(0x3c7), _0x35cdcb(0x327), _0x35cdcb(0x5d5), _0x35cdcb(0x8b8), _0x35cdcb(0x8b4), _0x35cdcb(0x33d), _0x35cdcb(0x24c), _0x35cdcb(0x4e7), _0x35cdcb(0x8e1)],
                'animationFrameTime': 0x50
            },
            'idle_left': {
                'sprites': ['crocodile_1_idle_left', _0x35cdcb(0x84e), _0x35cdcb(0x2d2), _0x35cdcb(0xa78), _0x35cdcb(0x23a), 'crocodile_6_idle_left', _0x35cdcb(0x6f9), _0x35cdcb(0x69b), _0x35cdcb(0x525), 'crocodile_10_idle_left', _0x35cdcb(0x8dd)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x602),
        'hasSoul': !![],
        'lockSpeedX': 0x6e
    },
    'shark': {
        'name': 'shark',
        'type': objectType[_0x35cdcb(0xa73)],
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
                'sprites': ['shark_1_right', _0x35cdcb(0x249), _0x35cdcb(0x4df), _0x35cdcb(0x543), _0x35cdcb(0x1e9), 'shark_6_right', _0x35cdcb(0x1e9), _0x35cdcb(0x543), _0x35cdcb(0x4df), _0x35cdcb(0x249)],
                'animationFrameTime': 0x50
            },
            'running_left': {
                'sprites': [_0x35cdcb(0x9ab), _0x35cdcb(0x628), 'shark_3_left', _0x35cdcb(0x34f), _0x35cdcb(0x528), 'shark_6_left', _0x35cdcb(0x528), _0x35cdcb(0x34f), 'shark_3_left', _0x35cdcb(0x628)],
                'animationFrameTime': 0x50
            }
        },
        'animation': 'running_right',
        'hasSoul': !![],
        'gravityOn': ![],
        'lockSpeedX': 0xbe
    },
    'piranha': {
        'name': _0x35cdcb(0x497),
        'type': objectType[_0x35cdcb(0xa73)],
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
                'sprites': [_0x35cdcb(0x9d0), _0x35cdcb(0x6f0), _0x35cdcb(0x824), _0x35cdcb(0x3ec), _0x35cdcb(0xa75), _0x35cdcb(0x6c0), _0x35cdcb(0xa75), 'piranha_4_right', _0x35cdcb(0x824), 'piranha_2_right'],
                'animationFrameTime': 0x50
            },
            'running_left': {
                'sprites': [_0x35cdcb(0x878), _0x35cdcb(0x745), _0x35cdcb(0x2fd), _0x35cdcb(0x245), _0x35cdcb(0x340), 'piranha_6_left', _0x35cdcb(0x340), _0x35cdcb(0x245), 'piranha_3_left', _0x35cdcb(0x745)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x7f7),
        'hasSoul': !![],
        'gravityOn': ![],
        'lockSpeedX': 0x78
    },
    'fishPink': {
        'name': 'fishPink',
        'type': objectType[_0x35cdcb(0xa73)],
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
                'sprites': [_0x35cdcb(0x627), _0x35cdcb(0xac8), 'fishPink_3_right', _0x35cdcb(0x24e), _0x35cdcb(0x94c), 'fishPink_4_right', _0x35cdcb(0x6c2), _0x35cdcb(0xac8)],
                'animationFrameTime': 0x32
            },
            'running_left': {
                'sprites': ['fishPink_1_left', _0x35cdcb(0x636), 'fishPink_3_left', _0x35cdcb(0x4f4), _0x35cdcb(0x1da), _0x35cdcb(0x4f4), _0x35cdcb(0x7cb), _0x35cdcb(0x636)],
                'animationFrameTime': 0x32
            },
            'idle_right': {
                'sprites': ['fishPink_1_right', _0x35cdcb(0xac8), _0x35cdcb(0x6c2), _0x35cdcb(0x24e), _0x35cdcb(0x94c), _0x35cdcb(0x24e), _0x35cdcb(0x6c2), _0x35cdcb(0xac8)],
                'animationFrameTime': 0x8c
            },
            'idle_left': {
                'sprites': ['fishPink_1_left', _0x35cdcb(0x636), _0x35cdcb(0x7cb), _0x35cdcb(0x4f4), 'fishPink_5_left', _0x35cdcb(0x4f4), 'fishPink_3_left', _0x35cdcb(0x636)],
                'animationFrameTime': 0x8c
            }
        },
        'animation': 'running_right',
        'hasSoul': !![],
        'gravityOn': ![],
        'lockSpeedX': 0x32
    },
    'evilBat': {
        'name': _0x35cdcb(0x56c),
        'type': objectType[_0x35cdcb(0xa73)],
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
                'sprites': [_0x35cdcb(0xae5), _0x35cdcb(0x9ae), _0x35cdcb(0x88d), 'evilBat_4_right', 'evilBat_5_right', 'evilBat_4_right', _0x35cdcb(0x88d), _0x35cdcb(0x9ae)],
                'animationFrameTime': 0x32
            },
            'running_left': {
                'sprites': [_0x35cdcb(0x682), _0x35cdcb(0x201), _0x35cdcb(0xa79), 'evilBat_4_left', _0x35cdcb(0xb13), _0x35cdcb(0xaaa), _0x35cdcb(0xa79), _0x35cdcb(0x201)],
                'animationFrameTime': 0x32
            }
        },
        'animation': _0x35cdcb(0x7f7),
        'hasSoul': !![],
        'gravityOn': ![],
        'lockSpeedX': 0x96
    },
    'flower_1_face_on_red': {
        'name': _0x35cdcb(0x764),
        'type': objectType['FOOD'],
        'width': 0x40,
        'height': 0x40,
        'gravityOn': ![],
        'moveable': ![],
        'isCollider': !![],
        'colliderRectangleOffset': {
            'left': 0.15,
            'right': 0.15,
            'top': 0.15,
            'bottom': 0.1
        },
        'animations': {
            'red': {
                'sprites': [_0x35cdcb(0xa9f)]
            },
            'yellow': {
                'sprites': ['flower_yellow']
            },
            'white': {
                'sprites': [_0x35cdcb(0x3ba)]
            },
            'purple': {
                'sprites': [_0x35cdcb(0x4f0)]
            },
            'pink': {
                'sprites': [_0x35cdcb(0x9de)]
            }
        },
        'animation': _0x35cdcb(0x670),
        'antiStuck': !![]
    },
    'fireball': {
        'name': _0x35cdcb(0x5ca),
        'type': objectType[_0x35cdcb(0x755)],
        'width': 0x5a,
        'height': 0x44,
        'gravityOn': ![],
        'moveable': !![],
        'isCollider': !![],
        'colliderRectangleOffset': {
            'left': 0.15,
            'right': 0.15,
            'top': 0.16,
            'bottom': 0.1
        },
        'animations': {
            'left': {
                'sprites': ['fireball_1_left', 'fireball_2_left', _0x35cdcb(0x2c4), _0x35cdcb(0xabd), _0x35cdcb(0x663), _0x35cdcb(0xa11)],
                'animationFrameTime': 0x50
            },
            'right': {
                'sprites': [_0x35cdcb(0x509), _0x35cdcb(0x691), 'fireball_3_right', _0x35cdcb(0x472), _0x35cdcb(0x4e5), _0x35cdcb(0x33e)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x9a2),
        'zIndex': 0xb,
        'light': !![],
        'light_radius': 0x64,
        'light_random_radius': 0x7
    },
    'fireball': {
        'name': 'fireball',
        'type': objectType['MISC'],
        'width': 0x5a,
        'height': 0x44,
        'gravityOn': ![],
        'moveable': !![],
        'isCollider': !![],
        'colliderRectangleOffset': {
            'left': 0.15,
            'right': 0.15,
            'top': 0.16,
            'bottom': 0.1
        },
        'animations': {
            'left': {
                'sprites': [_0x35cdcb(0x7b3), 'fireball_2_left', _0x35cdcb(0x2c4), _0x35cdcb(0xabd), _0x35cdcb(0x663), _0x35cdcb(0xa11)],
                'animationFrameTime': 0x50
            },
            'right': {
                'sprites': ['fireball_1_right', _0x35cdcb(0x691), _0x35cdcb(0x37f), _0x35cdcb(0x472), _0x35cdcb(0x4e5), _0x35cdcb(0x33e)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x9a2),
        'zIndex': 0xb,
        'light': !![],
        'light_radius': 0x64,
        'light_random_radius': 0x7
    },
    'boss1': {
        'name': _0x35cdcb(0x43a),
        'fullName': _0x35cdcb(0xa9c),
        'type': objectType[_0x35cdcb(0xa27)],
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
                'sprites': ['boss1_1_right', _0x35cdcb(0x274), _0x35cdcb(0x475), 'boss1_4_right', _0x35cdcb(0x475), _0x35cdcb(0x274)],
                'animationFrameTime': 0x87
            },
            'flying_right': {
                'sprites': ['boss1_1_left', _0x35cdcb(0xa72), 'boss1_3_left', _0x35cdcb(0x2aa), _0x35cdcb(0xa94), _0x35cdcb(0xa72)],
                'animationFrameTime': 0x87
            }
        },
        'animation': _0x35cdcb(0x910),
        'eatsSouls': !![]
    },
    'boss1_spawn': {
        'name': _0x35cdcb(0x366),
        'type': objectType[_0x35cdcb(0x7a1)],
        'moveable': ![],
        'gravityOn': ![],
        'isCollider': ![],
        'visible': ![],
        'spawning': _0x35cdcb(0x43a),
        'inBossArena': !![],
        'delay': 0x3e8 * 0x3c * 0x3c + 0x1,
        'showTimer': !![]
    },
    'skull': {
        'name': _0x35cdcb(0xb1e),
        'type': objectType[_0x35cdcb(0x734)],
        'width': 0x3f,
        'height': 0x2e,
        'gravityOn': ![],
        'isCollider': ![],
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
                'sprites': [_0x35cdcb(0x2f1)]
            },
            'flapping_right': {
                'sprites': ['skull_1_right', _0x35cdcb(0x93d), _0x35cdcb(0x222), _0x35cdcb(0x93d)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x2f1), _0x35cdcb(0x590), _0x35cdcb(0x845), _0x35cdcb(0x590)],
                'animationFrameTime': 0x50
            }
        },
        'animation': 'flying_right'
    },
    'explosion': {
        'name': _0x35cdcb(0xa8b),
        'type': objectType['EFFECT'],
        'width': 0x8e,
        'height': 0x94,
        'gravityOn': ![],
        'isCollider': ![],
        'animations': {
            'right': {
                'sprites': [_0x35cdcb(0xa83), _0x35cdcb(0x4c8), _0x35cdcb(0xa59), _0x35cdcb(0x3ee), _0x35cdcb(0x683), _0x35cdcb(0x660), _0x35cdcb(0xb0d)],
                'animationFrameTime': 0x50
            },
            'left': {
                'sprites': [_0x35cdcb(0x4ed), _0x35cdcb(0x1f9), _0x35cdcb(0x6d0), _0x35cdcb(0x9fd), _0x35cdcb(0x61f), _0x35cdcb(0x393), _0x35cdcb(0x958)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x9a2),
        'light': !![],
        'light_radius': 0x82
    },
    'explosion_big': {
        'name': 'explosion_big',
        'type': objectType[_0x35cdcb(0x734)],
        'width': 0x18e,
        'height': 0x19e,
        'gravityOn': ![],
        'isCollider': ![],
        'animations': {
            'right': {
                'sprites': ['explosion_1_right', _0x35cdcb(0x4c8), _0x35cdcb(0xa59), _0x35cdcb(0x3ee), _0x35cdcb(0x683), 'explosion_6_right', _0x35cdcb(0xb0d)],
                'animationFrameTime': 0x50
            },
            'left': {
                'sprites': ['explosion_1_left', _0x35cdcb(0x1f9), _0x35cdcb(0x6d0), _0x35cdcb(0x9fd), 'explosion_5_left', _0x35cdcb(0x393), _0x35cdcb(0x958)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x9a2),
        'light': !![],
        'light_radius': 0x82
    },
    'explosion2': {
        'name': _0x35cdcb(0x7ef),
        'type': objectType[_0x35cdcb(0x734)],
        'width': 0x183,
        'height': 0x174,
        'gravityOn': ![],
        'isCollider': ![],
        'animations': {
            'standard': {
                'sprites': [_0x35cdcb(0x527), 'explosion2_2', _0x35cdcb(0x615), _0x35cdcb(0x585), _0x35cdcb(0x66a), _0x35cdcb(0x34d), _0x35cdcb(0x609), _0x35cdcb(0x6f2)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x859),
        'light': !![],
        'light_radius': 0xc8
    },
    'fireworks': {
        'name': _0x35cdcb(0x22b),
        'type': objectType[_0x35cdcb(0x734)],
        'width': 0x15e,
        'height': 0x14f,
        'gravityOn': ![],
        'isCollider': ![],
        'animations': {
            'standard': {
                'sprites': [_0x35cdcb(0xa43), _0x35cdcb(0x9d9), 'fireworks_3', _0x35cdcb(0x4ce), _0x35cdcb(0x7b4), _0x35cdcb(0x399), 'fireworks_7', _0x35cdcb(0x410), _0x35cdcb(0x932), 'fireworks_10'],
                'animationFrameTime': 0x5a
            }
        },
        'animation': _0x35cdcb(0x859),
        'light': !![],
        'light_radius': 0xaf,
        'zIndex': 0x14
    },
    'fireworks_double': {
        'name': 'fireworks_double',
        'type': objectType[_0x35cdcb(0x734)],
        'width': 0x15e,
        'height': 0x14f,
        'gravityOn': ![],
        'isCollider': ![],
        'animations': {
            'standard': {
                'sprites': [_0x35cdcb(0x203), _0x35cdcb(0x9ef), 'fireworks2_3', _0x35cdcb(0x217), _0x35cdcb(0x5f9), _0x35cdcb(0x946), _0x35cdcb(0x7d7), 'fireworks2_8', _0x35cdcb(0x435), 'fireworks2_10', 'fireworks2_11', 'fireworks2_12', _0x35cdcb(0x98c), _0x35cdcb(0xa90), _0x35cdcb(0x782)],
                'animationFrameTime': 0x5a
            }
        },
        'animation': _0x35cdcb(0x859),
        'light': !![],
        'light_radius': 0xaf,
        'zIndex': 0x14
    },
    'stars_lvlup': {
        'name': _0x35cdcb(0x8cd),
        'type': objectType[_0x35cdcb(0x734)],
        'width': 0x96,
        'height': 0x91,
        'gravityOn': ![],
        'isCollider': ![],
        'animations': {
            'standard': {
                'sprites': [_0x35cdcb(0xa1b), _0x35cdcb(0x88b), _0x35cdcb(0x9d8), _0x35cdcb(0x674), 'stars_lvlup_5', _0x35cdcb(0xad4), _0x35cdcb(0x776), 'stars_lvlup_8', _0x35cdcb(0x5e5), 'stars_lvlup_10', _0x35cdcb(0xb10), _0x35cdcb(0x48b), _0x35cdcb(0x6db), _0x35cdcb(0x498), 'stars_lvlup_15', 'stars_lvlup_16', 'stars_lvlup_17', 'stars_lvlup_18', _0x35cdcb(0x2ac), _0x35cdcb(0xae6)],
                'animationFrameTime': 0x3c
            }
        },
        'animation': _0x35cdcb(0x859),
        'light': !![],
        'light_radius': 0x4b,
        'zIndex': 0x14
    },
    'exploding_skull': {
        'name': _0x35cdcb(0x8ef),
        'type': objectType[_0x35cdcb(0x734)],
        'width': 0xc8,
        'height': 0xbe,
        'gravityOn': ![],
        'isCollider': ![],
        'animations': {
            'standard': {
                'sprites': [_0x35cdcb(0x376), _0x35cdcb(0x1d4), _0x35cdcb(0x538), _0x35cdcb(0x930), 'exploding_skull_5', _0x35cdcb(0x6f1), 'exploding_skull_7', _0x35cdcb(0x8e0), _0x35cdcb(0x40d), _0x35cdcb(0x1e6), _0x35cdcb(0x3b1), _0x35cdcb(0x322), 'exploding_skull_13', 'exploding_skull_14'],
                'animationFrameTime': 0x3c
            }
        },
        'animation': _0x35cdcb(0x859),
        'light': !![],
        'light_radius': 0x64,
        'zIndex': 0x14
    },
    'dust': {
        'name': _0x35cdcb(0x775),
        'type': objectType[_0x35cdcb(0x734)],
        'width': 0x64,
        'height': 0x61,
        'gravityOn': ![],
        'isCollider': ![],
        'animations': {
            'standard': {
                'sprites': ['dust_1', 'dust_2', _0x35cdcb(0x77e), 'dust_4'],
                'animationFrameTime': 0x64
            }
        },
        'animation': 'standard',
        'zIndex': 0x14
    },
    'exploding_nova': {
        'name': _0x35cdcb(0x439),
        'type': objectType['EFFECT'],
        'width': 0xc8,
        'height': 0xc8,
        'gravityOn': ![],
        'isCollider': ![],
        'animations': {
            'standard': {
                'sprites': [_0x35cdcb(0x2d8), _0x35cdcb(0x67c), _0x35cdcb(0x781), 'exploding_nova_4', 'exploding_nova_5', _0x35cdcb(0x4fe), _0x35cdcb(0x223), _0x35cdcb(0x43f), _0x35cdcb(0x22d), 'exploding_nova_10', _0x35cdcb(0x224)],
                'animationFrameTime': 0x3c
            }
        },
        'animation': _0x35cdcb(0x859),
        'light': !![],
        'light_radius': 0x64,
        'zIndex': 0x14
    },
    'bubble_splash': {
        'name': 'bubble_splash',
        'type': objectType[_0x35cdcb(0x734)],
        'width': 0x42,
        'height': 0x40,
        'gravityOn': ![],
        'isCollider': ![],
        'animations': {
            'standard': {
                'sprites': [_0x35cdcb(0x947), 'bubble_8', _0x35cdcb(0x754), _0x35cdcb(0x92d), 'bubble_11', _0x35cdcb(0x78e), _0x35cdcb(0x4f7)],
                'animationFrameTime': 0x96
            }
        },
        'animation': 'standard',
        'zIndex': 0x65
    },
    'lava_splash': {
        'name': _0x35cdcb(0xb00),
        'type': objectType[_0x35cdcb(0x734)],
        'width': 0x42,
        'height': 0x40,
        'gravityOn': ![],
        'isCollider': ![],
        'animations': {
            'standard': {
                'sprites': [_0x35cdcb(0x1c8), _0x35cdcb(0x363), 'lava_bubble_9', _0x35cdcb(0x6ad), 'lava_bubble_11', _0x35cdcb(0xa9e), _0x35cdcb(0x37b)],
                'animationFrameTime': 0x96
            }
        },
        'animation': 'standard',
        'zIndex': 0x65
    },
    'water_splash': {
        'name': _0x35cdcb(0xa5a),
        'type': objectType['EFFECT'],
        'width': 0x3c,
        'height': 0x2d,
        'gravityOn': ![],
        'isCollider': ![],
        'animations': {
            'standard': {
                'sprites': [_0x35cdcb(0xb18), _0x35cdcb(0x7c4), _0x35cdcb(0x5df), _0x35cdcb(0x2a9), _0x35cdcb(0x384), _0x35cdcb(0x4b7), _0x35cdcb(0x677), _0x35cdcb(0x4e8)],
                'animationFrameTime': 0x5a
            }
        },
        'animation': _0x35cdcb(0x859),
        'zIndex': 0x65
    },
    'armor_breaking_effect': {
        'name': _0x35cdcb(0x8fc),
        'type': objectType['EFFECT'],
        'width': 0xd7,
        'height': 0xd7,
        'gravityOn': ![],
        'isCollider': ![],
        'animations': {
            'standard': {
                'sprites': [_0x35cdcb(0x342)]
            }
        },
        'animation': _0x35cdcb(0x859),
        'zIndex': 0x65
    },
    'pet_1': {
        'name': 'pet_1',
        'type': objectType['PET'],
        'width': 0x37,
        'height': 0x2b,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0x6e8), _0x35cdcb(0x21b), 'pet_1_3_right', _0x35cdcb(0x3bf), 'pet_1_5_right', _0x35cdcb(0x338), _0x35cdcb(0x8fe), _0x35cdcb(0xa17)],
                'animationFrameTime': 0x28
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x698), _0x35cdcb(0x485), 'pet_1_3_left', 'pet_1_4_left', _0x35cdcb(0x31f), _0x35cdcb(0x992), 'pet_1_7_left', 'pet_1_8_left'],
                'animationFrameTime': 0x28
            }
        },
        'animation': 'flapping_right',
        'interpolateForceTeleport': ![]
    },
    'pet_2': {
        'name': _0x35cdcb(0x5a3),
        'type': objectType['PET'],
        'width': 0x38,
        'height': 0x28,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': ['pet_2_1_right', _0x35cdcb(0x489), _0x35cdcb(0xaf5), 'pet_2_4_right', _0x35cdcb(0xaf5), _0x35cdcb(0x489)],
                'animationFrameTime': 0x3c
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0xb05), _0x35cdcb(0x242), 'pet_2_3_left', _0x35cdcb(0x43b), _0x35cdcb(0x6cd), 'pet_2_2_left'],
                'animationFrameTime': 0x3c
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_3': {
        'name': _0x35cdcb(0x86b),
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x38,
        'height': 0x2d,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0xb0e), _0x35cdcb(0x919), _0x35cdcb(0x3d0), _0x35cdcb(0x912)],
                'animationFrameTime': 0x3c
            },
            'flapping_left': {
                'sprites': ['pet_3_1_left', _0x35cdcb(0x74d), _0x35cdcb(0x3d4), 'pet_3_4_left'],
                'animationFrameTime': 0x3c
            }
        },
        'animation': 'flapping_right',
        'interpolateForceTeleport': ![]
    },
    'pet_4': {
        'name': _0x35cdcb(0x317),
        'type': objectType['PET'],
        'width': 0x37,
        'height': 0x2b,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0x2f9), _0x35cdcb(0xab9), _0x35cdcb(0x8c5), _0x35cdcb(0x21e), _0x35cdcb(0x7cc), _0x35cdcb(0xad3), _0x35cdcb(0xaed), _0x35cdcb(0x990)],
                'animationFrameTime': 0x32
            },
            'flapping_left': {
                'sprites': ['pet_4_1_left', _0x35cdcb(0x8b7), _0x35cdcb(0x673), _0x35cdcb(0x933), _0x35cdcb(0x4d0), _0x35cdcb(0x2d6), _0x35cdcb(0x1d0), _0x35cdcb(0x5f8)],
                'animationFrameTime': 0x32
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_5': {
        'name': _0x35cdcb(0x783),
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x37,
        'height': 0x29,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': ['pet_5_1_right', _0x35cdcb(0x27f), _0x35cdcb(0x8a8), 'pet_5_4_right', _0x35cdcb(0xa05), _0x35cdcb(0x815)],
                'animationFrameTime': 0x46
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x9a5), _0x35cdcb(0x456), _0x35cdcb(0x98e), _0x35cdcb(0x266), _0x35cdcb(0x38f), _0x35cdcb(0x7aa)],
                'animationFrameTime': 0x46
            }
        },
        'animation': 'flapping_right',
        'interpolateForceTeleport': ![]
    },
    'pet_6': {
        'name': _0x35cdcb(0x8f4),
        'type': objectType['PET'],
        'width': 0x37,
        'height': 0x2f,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': ['pet_6_1_right', _0x35cdcb(0x817), _0x35cdcb(0x1e4), _0x35cdcb(0x89f), _0x35cdcb(0x1e4), _0x35cdcb(0x817), 'pet_6_1_right'],
                'animationFrameTime': 0x46
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x4cb), _0x35cdcb(0x4eb), _0x35cdcb(0x42e), _0x35cdcb(0xabb), _0x35cdcb(0x42e), 'pet_6_2_left', 'pet_6_1_left'],
                'animationFrameTime': 0x46
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_7': {
        'name': _0x35cdcb(0x1f0),
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x37,
        'height': 0x29,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0x520), _0x35cdcb(0x559), _0x35cdcb(0x667), _0x35cdcb(0x9d4)],
                'animationFrameTime': 0x46
            },
            'flapping_left': {
                'sprites': ['pet_7_1_left', 'pet_7_2_left', _0x35cdcb(0xa5c), _0x35cdcb(0x9e2)],
                'animationFrameTime': 0x46
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_8': {
        'name': _0x35cdcb(0x8d1),
        'type': objectType['PET'],
        'width': 0x37,
        'height': 0x24,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0x618), _0x35cdcb(0x21f), 'pet_8_3_right', _0x35cdcb(0x97a)],
                'animationFrameTime': 0x46
            },
            'flapping_left': {
                'sprites': ['pet_8_1_left', _0x35cdcb(0xac3), 'pet_8_3_left', _0x35cdcb(0x9b4)],
                'animationFrameTime': 0x46
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_9': {
        'name': _0x35cdcb(0x469),
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x37,
        'height': 0x2b,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0xa67), 'pet_9_2_right', 'pet_9_3_right', 'pet_9_4_right', _0x35cdcb(0x2cf), 'pet_9_6_right', _0x35cdcb(0x347), _0x35cdcb(0x759)],
                'animationFrameTime': 0x28
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x480), _0x35cdcb(0xac7), _0x35cdcb(0xb2e), 'pet_9_4_left', _0x35cdcb(0x314), _0x35cdcb(0x7a2), _0x35cdcb(0xa4b), _0x35cdcb(0x977)],
                'animationFrameTime': 0x28
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_10': {
        'name': 'pet_10',
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x38,
        'height': 0x40,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0x6b5), _0x35cdcb(0x65e), _0x35cdcb(0x221), 'pet_10_4_right', _0x35cdcb(0x57a), _0x35cdcb(0xa5e), 'pet_10_7_right', _0x35cdcb(0xa57)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x631), _0x35cdcb(0x75b), _0x35cdcb(0x45c), _0x35cdcb(0x27b), _0x35cdcb(0x9b5), 'pet_10_6_left', _0x35cdcb(0x293), 'pet_10_8_left'],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_11': {
        'name': _0x35cdcb(0xa6c),
        'type': objectType['PET'],
        'width': 0x38,
        'height': 0x30,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0x69e), 'pet_11_2_right', _0x35cdcb(0x2b3), _0x35cdcb(0x679), 'pet_11_5_right', _0x35cdcb(0x6f7), _0x35cdcb(0x99e), 'pet_11_8_right'],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x3a6), _0x35cdcb(0x533), _0x35cdcb(0x4a8), _0x35cdcb(0x65c), _0x35cdcb(0x8f9), _0x35cdcb(0x412), _0x35cdcb(0x556), _0x35cdcb(0x768)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_12': {
        'name': _0x35cdcb(0x5ac),
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x33,
        'height': 0x40,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0x6a0), _0x35cdcb(0x9bc), _0x35cdcb(0x650), _0x35cdcb(0x281), 'pet_12_3_right', _0x35cdcb(0x9bc), _0x35cdcb(0x6a0)],
                'animationFrameTime': 0x46
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x62e), _0x35cdcb(0x316), _0x35cdcb(0x94d), _0x35cdcb(0x5fb), 'pet_12_3_left', 'pet_12_2_left', _0x35cdcb(0x62e)],
                'animationFrameTime': 0x46
            }
        },
        'animation': 'flapping_right',
        'interpolateForceTeleport': ![]
    },
    'pet_13': {
        'name': 'pet_13',
        'type': objectType['PET'],
        'width': 0x38,
        'height': 0x33,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0x8f2), _0x35cdcb(0x6b4), _0x35cdcb(0x6dc), 'pet_13_4_right', _0x35cdcb(0x6dc), _0x35cdcb(0x6b4), _0x35cdcb(0x8f2)],
                'animationFrameTime': 0x46
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x94a), _0x35cdcb(0x6af), _0x35cdcb(0x279), _0x35cdcb(0x75a), _0x35cdcb(0x279), _0x35cdcb(0x6af), _0x35cdcb(0x94a)],
                'animationFrameTime': 0x46
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_14': {
        'name': _0x35cdcb(0x29b),
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x30,
        'height': 0x3d,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0x2f8), 'pet_14_2_right', 'pet_14_3_right', 'pet_14_4_right', 'pet_14_3_right', _0x35cdcb(0x7bd), 'pet_14_1_right'],
                'animationFrameTime': 0x46
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x82f), 'pet_14_2_left', _0x35cdcb(0x7fc), _0x35cdcb(0x75e), _0x35cdcb(0x7fc), _0x35cdcb(0x996), 'pet_14_1_left'],
                'animationFrameTime': 0x46
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_15': {
        'name': _0x35cdcb(0x46e),
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x2b,
        'height': 0x2b,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0x58b), 'pet_15_2_right', _0x35cdcb(0x280), _0x35cdcb(0x88a), _0x35cdcb(0x28d), _0x35cdcb(0x88a), _0x35cdcb(0x280), 'pet_15_2_right', _0x35cdcb(0x58b), _0x35cdcb(0x3f0), _0x35cdcb(0x280), _0x35cdcb(0x88a), _0x35cdcb(0x28d), 'pet_15_4_right', _0x35cdcb(0x280), _0x35cdcb(0x3f0), _0x35cdcb(0x58b), _0x35cdcb(0x3f0), _0x35cdcb(0x280), _0x35cdcb(0x88a), 'pet_15_5_right', _0x35cdcb(0x88a), _0x35cdcb(0x280), 'pet_15_2_right', _0x35cdcb(0x58b), _0x35cdcb(0x3f0), _0x35cdcb(0x280), _0x35cdcb(0x88a), _0x35cdcb(0x7a6), _0x35cdcb(0x88a), 'pet_15_3_right', _0x35cdcb(0x3f0), _0x35cdcb(0x58b)],
                'animationFrameTime': 0x46
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x909), _0x35cdcb(0x87b), 'pet_15_3_left', 'pet_15_4_left', _0x35cdcb(0x848), _0x35cdcb(0xa3f), 'pet_15_3_left', _0x35cdcb(0x87b), _0x35cdcb(0x909), _0x35cdcb(0x87b), _0x35cdcb(0x93a), 'pet_15_4_left', 'pet_15_5_left', 'pet_15_4_left', _0x35cdcb(0x93a), _0x35cdcb(0x87b), _0x35cdcb(0x909), 'pet_15_2_left', _0x35cdcb(0x93a), _0x35cdcb(0xa3f), _0x35cdcb(0x848), _0x35cdcb(0xa3f), _0x35cdcb(0x93a), 'pet_15_2_left', _0x35cdcb(0x909), _0x35cdcb(0x87b), 'pet_15_3_left', _0x35cdcb(0xa3f), _0x35cdcb(0x7bc), _0x35cdcb(0xa3f), _0x35cdcb(0x93a), _0x35cdcb(0x87b), _0x35cdcb(0x909)],
                'animationFrameTime': 0x46
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_16': {
        'name': _0x35cdcb(0x4f8),
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x3c,
        'height': 0x3c,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': ['pet_16_1_right', 'pet_16_2_right', 'pet_16_3_right', _0x35cdcb(0x1e1), 'pet_16_5_right', _0x35cdcb(0x1e1), 'pet_16_3_right', _0x35cdcb(0x43c), _0x35cdcb(0x8f7)],
                'animationFrameTime': 0x46
            },
            'flapping_left': {
                'sprites': ['pet_16_1_left', _0x35cdcb(0x623), _0x35cdcb(0x6c1), 'pet_16_4_left', _0x35cdcb(0x9b6), _0x35cdcb(0x72d), _0x35cdcb(0x6c1), 'pet_16_2_left', _0x35cdcb(0x5e8)],
                'animationFrameTime': 0x46
            }
        },
        'animation': 'flapping_right',
        'interpolateForceTeleport': ![]
    },
    'pet_17': {
        'name': _0x35cdcb(0x612),
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x42,
        'height': 0x42,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0x8c7), 'pet_17_2_right', _0x35cdcb(0x978), _0x35cdcb(0x80b), _0x35cdcb(0x1cc), _0x35cdcb(0x80b), 'pet_17_3_right', _0x35cdcb(0x7bf), 'pet_17_1_right'],
                'animationFrameTime': 0x46
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x99d), 'pet_17_2_left', _0x35cdcb(0x52f), _0x35cdcb(0x2c3), _0x35cdcb(0x40a), _0x35cdcb(0x2c3), _0x35cdcb(0x52f), _0x35cdcb(0xb2a), _0x35cdcb(0x99d)],
                'animationFrameTime': 0x46
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_18': {
        'name': _0x35cdcb(0x23f),
        'type': objectType['PET'],
        'width': 0x42,
        'height': 0x2f,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0x55d), _0x35cdcb(0x599), 'pet_18_3_right', 'pet_18_4_right', _0x35cdcb(0x5a7), 'pet_18_4_right', _0x35cdcb(0xa38), 'pet_18_2_right', _0x35cdcb(0x55d)],
                'animationFrameTime': 0x46
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x4bc), _0x35cdcb(0x8e3), _0x35cdcb(0x461), _0x35cdcb(0x8da), _0x35cdcb(0x5f1), _0x35cdcb(0x8da), 'pet_18_3_left', 'pet_18_2_left', _0x35cdcb(0x4bc)],
                'animationFrameTime': 0x46
            }
        },
        'animation': 'flapping_right',
        'interpolateForceTeleport': ![]
    },
    'pet_19': {
        'name': _0x35cdcb(0x5b1),
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x3f,
        'height': 0x28,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0x277), _0x35cdcb(0x4e9), _0x35cdcb(0x3cd), _0x35cdcb(0x4e9), _0x35cdcb(0x277)],
                'animationFrameTime': 0x32
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x8ce), _0x35cdcb(0x207), _0x35cdcb(0x2b8), _0x35cdcb(0x207), _0x35cdcb(0x8ce)],
                'animationFrameTime': 0x32
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_20': {
        'name': 'pet_20',
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x42,
        'height': 0x2f,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0xa7f), _0x35cdcb(0x6e0), _0x35cdcb(0xb32), _0x35cdcb(0x788), _0x35cdcb(0xb32), 'pet_20_2_right', _0x35cdcb(0xa7f)],
                'animationFrameTime': 0x46
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0xab4), _0x35cdcb(0x656), _0x35cdcb(0x9fc), _0x35cdcb(0x4ca), _0x35cdcb(0x9fc), 'pet_20_2_left', _0x35cdcb(0xab4)],
                'animationFrameTime': 0x46
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_21': {
        'name': _0x35cdcb(0x27e),
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x42,
        'height': 0x2f,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0x742), _0x35cdcb(0xa88), _0x35cdcb(0x20e), _0x35cdcb(0x7c0), 'pet_21_5_right', _0x35cdcb(0x7c0), 'pet_21_3_right', _0x35cdcb(0xa88), 'pet_21_1_right'],
                'animationFrameTime': 0x46
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x703), _0x35cdcb(0x4e6), 'pet_21_3_left', 'pet_21_4_left', 'pet_21_5_left', _0x35cdcb(0x517), _0x35cdcb(0xae4), 'pet_21_2_left', 'pet_21_1_left'],
                'animationFrameTime': 0x46
            }
        },
        'animation': 'flapping_right',
        'interpolateForceTeleport': ![]
    },
    'pet_22': {
        'name': _0x35cdcb(0x67b),
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x2d,
        'height': 0x2d,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0x708), _0x35cdcb(0x31b), 'pet_22_3_right', 'pet_22_4_right', _0x35cdcb(0x4b9), _0x35cdcb(0x79a), _0x35cdcb(0xa0b), _0x35cdcb(0x31b), _0x35cdcb(0x708)],
                'animationFrameTime': 0x46
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0xa49), _0x35cdcb(0x9f3), _0x35cdcb(0x360), _0x35cdcb(0x902), _0x35cdcb(0x846), _0x35cdcb(0x902), 'pet_22_3_left', 'pet_22_2_left', _0x35cdcb(0xa49)],
                'animationFrameTime': 0x46
            },
            'blink_right': {
                'sprites': [_0x35cdcb(0x76c), _0x35cdcb(0x828), 'pet_22_8_right', _0x35cdcb(0x620), _0x35cdcb(0x574), _0x35cdcb(0x620), 'pet_22_8_right', _0x35cdcb(0x828), _0x35cdcb(0x76c)],
                'animationFrameTime': 0x46
            },
            'blink_left': {
                'sprites': [_0x35cdcb(0x9c4), _0x35cdcb(0x546), 'pet_22_8_left', _0x35cdcb(0x388), 'pet_22_10_left', _0x35cdcb(0x388), 'pet_22_8_left', 'pet_22_7_left', 'pet_22_6_left'],
                'animationFrameTime': 0x46
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_23': {
        'name': 'pet_23',
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x3c,
        'height': 0x2f,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0x931), _0x35cdcb(0x8f5), 'pet_23_3_right', _0x35cdcb(0x854), _0x35cdcb(0x258), _0x35cdcb(0x8f5), 'pet_23_1_right'],
                'animationFrameTime': 0x46
            },
            'flapping_left': {
                'sprites': ['pet_23_1_left', _0x35cdcb(0x4fa), _0x35cdcb(0x25b), _0x35cdcb(0x8e5), _0x35cdcb(0x25b), _0x35cdcb(0x4fa), _0x35cdcb(0x30d)],
                'animationFrameTime': 0x46
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_24': {
        'name': 'pet_24',
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x3c,
        'height': 0x2d,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0xa61), _0x35cdcb(0x507), _0x35cdcb(0x983), _0x35cdcb(0x3f6), _0x35cdcb(0xa01), _0x35cdcb(0x3f6), _0x35cdcb(0x983), 'pet_24_2_right'],
                'animationFrameTime': 0x46
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x2bd), _0x35cdcb(0x54b), _0x35cdcb(0x2e6), _0x35cdcb(0x219), _0x35cdcb(0x336), _0x35cdcb(0x219), _0x35cdcb(0x2e6), _0x35cdcb(0x54b)],
                'animationFrameTime': 0x46
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_25': {
        'name': 'pet_25',
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x36,
        'height': 0x23,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0xa7d), _0x35cdcb(0xa10), _0x35cdcb(0x205), _0x35cdcb(0x4e0), _0x35cdcb(0x3b3), _0x35cdcb(0x991), _0x35cdcb(0x310), 'pet_25_8_right'],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x1dc), _0x35cdcb(0x7bb), _0x35cdcb(0x493), 'pet_25_4_left', 'pet_25_5_left', _0x35cdcb(0x55f), _0x35cdcb(0x459), _0x35cdcb(0x90a)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_26': {
        'name': _0x35cdcb(0xa6e),
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x3c,
        'height': 0x2d,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0x5db), _0x35cdcb(0x839), _0x35cdcb(0x519), _0x35cdcb(0x5c9), _0x35cdcb(0x4b0), _0x35cdcb(0x5c9), _0x35cdcb(0x519), _0x35cdcb(0x839)],
                'animationFrameTime': 0x46
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x2ed), _0x35cdcb(0x876), _0x35cdcb(0x49f), _0x35cdcb(0x73f), 'pet_26_5_left', _0x35cdcb(0x73f), 'pet_26_3_left', _0x35cdcb(0x876)],
                'animationFrameTime': 0x46
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_27': {
        'name': _0x35cdcb(0x3d6),
        'type': objectType['PET'],
        'width': 0x3c,
        'height': 0x3d,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0x216), _0x35cdcb(0x2c8), _0x35cdcb(0x479), _0x35cdcb(0x841), _0x35cdcb(0xadb), _0x35cdcb(0x841), _0x35cdcb(0x479), _0x35cdcb(0x2c8)],
                'animationFrameTime': 0x23
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x626), _0x35cdcb(0x72b), 'pet_27_3_left', _0x35cdcb(0x443), _0x35cdcb(0x343), _0x35cdcb(0x443), _0x35cdcb(0xa3b), _0x35cdcb(0x72b)],
                'animationFrameTime': 0x23
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_28': {
        'name': _0x35cdcb(0x2ae),
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x46,
        'height': 0x3a,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0x5fa), _0x35cdcb(0xa76), 'pet_28_3_right', _0x35cdcb(0x51d), _0x35cdcb(0x813), _0x35cdcb(0xa76)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x272), _0x35cdcb(0x1f7), _0x35cdcb(0x897), _0x35cdcb(0x8b0), _0x35cdcb(0x897), 'pet_28_2_left'],
                'animationFrameTime': 0x50
            }
        },
        'animation': 'flapping_right',
        'interpolateForceTeleport': ![]
    },
    'pet_29': {
        'name': _0x35cdcb(0x688),
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x46,
        'height': 0x39,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0x81e), _0x35cdcb(0x4f2), _0x35cdcb(0x323), _0x35cdcb(0x91a), _0x35cdcb(0x323), _0x35cdcb(0x4f2)],
                'animationFrameTime': 0x46
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x595), _0x35cdcb(0x92f), _0x35cdcb(0x4a6), 'pet_29_4_left', 'pet_29_3_left', _0x35cdcb(0x92f)],
                'animationFrameTime': 0x46
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_30': {
        'name': _0x35cdcb(0x56f),
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x4f,
        'height': 0x38,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0x82e), 'pet_30_2_right', 'pet_30_3_right', _0x35cdcb(0x442)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x9b8), _0x35cdcb(0x539), _0x35cdcb(0x91f), _0x35cdcb(0x893)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_31': {
        'name': 'pet_31',
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x40,
        'height': 0x40,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0x56d), _0x35cdcb(0x235), 'pet_31_3_right', _0x35cdcb(0x1ee), _0x35cdcb(0x416), _0x35cdcb(0x2f3), _0x35cdcb(0x416), 'pet_31_4_right', 'pet_31_3_right', 'pet_31_2_right'],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x646), _0x35cdcb(0x578), 'pet_31_3_left', _0x35cdcb(0x262), _0x35cdcb(0xa4e), _0x35cdcb(0xa82), 'pet_31_5_left', _0x35cdcb(0x262), _0x35cdcb(0x8a7), _0x35cdcb(0x578)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_32': {
        'name': 'pet_32',
        'type': objectType['PET'],
        'width': 0x40,
        'height': 0x40,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': ['pet_32_1_right', _0x35cdcb(0x765), _0x35cdcb(0x662), _0x35cdcb(0xab6), _0x35cdcb(0x758), _0x35cdcb(0x7dd), 'pet_32_5_right', 'pet_32_4_right', 'pet_32_3_right', _0x35cdcb(0x765)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x29a), 'pet_32_2_left', _0x35cdcb(0x236), _0x35cdcb(0x2d4), _0x35cdcb(0x733), _0x35cdcb(0x956), 'pet_32_5_left', _0x35cdcb(0x2d4), _0x35cdcb(0x236), _0x35cdcb(0x2c9)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_33': {
        'name': 'pet_33',
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x50,
        'height': 0x40,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': ['pet_33_1_right', _0x35cdcb(0x851), _0x35cdcb(0x685), _0x35cdcb(0x5e4), _0x35cdcb(0x550), _0x35cdcb(0x3ab), 'pet_33_5_right', 'pet_33_4_right', 'pet_33_3_right', _0x35cdcb(0x851)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x3c9), _0x35cdcb(0x3bd), _0x35cdcb(0x89e), 'pet_33_4_left', _0x35cdcb(0x377), _0x35cdcb(0x43d), 'pet_33_5_left', _0x35cdcb(0x287), 'pet_33_3_left', _0x35cdcb(0x3bd)],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_34': {
        'name': _0x35cdcb(0x3c4),
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x48,
        'height': 0x64,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': ['pet_34_1_right', _0x35cdcb(0x7d5), 'pet_34_3_right', _0x35cdcb(0x744), _0x35cdcb(0x6e3), _0x35cdcb(0x780), _0x35cdcb(0x2f4), _0x35cdcb(0x1ef), 'pet_34_9_right', _0x35cdcb(0x6f8), _0x35cdcb(0x380), _0x35cdcb(0x6d7)],
                'animationFrameTime': 0x50
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x90d), 'pet_34_2_left', 'pet_34_3_left', _0x35cdcb(0x24d), _0x35cdcb(0x9b1), _0x35cdcb(0x657), _0x35cdcb(0x44f), _0x35cdcb(0xae9), _0x35cdcb(0x25a), _0x35cdcb(0x345), _0x35cdcb(0x405), 'pet_34_12_left'],
                'animationFrameTime': 0x50
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_35': {
        'name': _0x35cdcb(0x953),
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x46,
        'height': 0x41,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0x715), _0x35cdcb(0x9ca), _0x35cdcb(0x709), _0x35cdcb(0xa2f), _0x35cdcb(0x6bb), 'pet_35_6_right', _0x35cdcb(0x6bb), _0x35cdcb(0xa2f), _0x35cdcb(0x709), _0x35cdcb(0x9ca)],
                'animationFrameTime': 0x32
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x83f), _0x35cdcb(0x921), 'pet_35_3_left', _0x35cdcb(0x6a4), _0x35cdcb(0x4c0), 'pet_35_6_left', 'pet_35_5_left', _0x35cdcb(0x6a4), _0x35cdcb(0x65b), _0x35cdcb(0x921)],
                'animationFrameTime': 0x32
            }
        },
        'animation': _0x35cdcb(0x2f5),
        'interpolateForceTeleport': ![]
    },
    'pet_36': {
        'name': _0x35cdcb(0x584),
        'type': objectType[_0x35cdcb(0x328)],
        'width': 0x58,
        'height': 0x3c,
        'isCollider': ![],
        'gravityOn': ![],
        'animations': {
            'flapping_right': {
                'sprites': [_0x35cdcb(0xab8), _0x35cdcb(0x55e), _0x35cdcb(0x2b2), _0x35cdcb(0x447), 'pet_36_3_right', 'pet_36_2_right'],
                'animationFrameTime': 0x3c
            },
            'flapping_left': {
                'sprites': [_0x35cdcb(0x2a0), _0x35cdcb(0x210), _0x35cdcb(0x77b), _0x35cdcb(0x8b9), _0x35cdcb(0x77b), _0x35cdcb(0x210)],
                'animationFrameTime': 0x3c
            }
        },
        'animation': 'flapping_right',
        'interpolateForceTeleport': ![]
    },
    'tombstone_1': {
        'name': _0x35cdcb(0x7a8),
        'type': objectType[_0x35cdcb(0x6ae)],
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
                'sprites': [_0x35cdcb(0x87c)]
            },
            'start': {
                'sprites': [_0x35cdcb(0x635), _0x35cdcb(0x608), _0x35cdcb(0x8b3), 'tombstone_wooden_4', 'tombstone_wooden_5', 'tombstone_wooden_6', _0x35cdcb(0x3b5), _0x35cdcb(0x9e6), _0x35cdcb(0x639), _0x35cdcb(0x9e6), _0x35cdcb(0x3b5), _0x35cdcb(0x581), _0x35cdcb(0x87c), _0x35cdcb(0x3b2), _0x35cdcb(0x8b3), _0x35cdcb(0x608)],
                'animationFrameTime': 0x64
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'tombstone_2': {
        'name': _0x35cdcb(0x404),
        'type': objectType['TOMBSTONE'],
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
                'sprites': [_0x35cdcb(0x81c)]
            },
            'start': {
                'sprites': ['tombstone_stone_1', _0x35cdcb(0x81c), _0x35cdcb(0x5a2), _0x35cdcb(0x5ef), _0x35cdcb(0x661), _0x35cdcb(0xa26), _0x35cdcb(0xa40), _0x35cdcb(0xabc), _0x35cdcb(0x78c), _0x35cdcb(0x64f), _0x35cdcb(0x64f), _0x35cdcb(0x64f), _0x35cdcb(0x78c), _0x35cdcb(0xabc), 'tombstone_stone_6', _0x35cdcb(0xa26), _0x35cdcb(0x661), _0x35cdcb(0x5ef), 'tombstone_stone_2', _0x35cdcb(0x81c), _0x35cdcb(0x81c), _0x35cdcb(0x5a2), 'tombstone_stone_3', 'tombstone_stone_4', 'tombstone_stone_5', _0x35cdcb(0xa40), 'tombstone_stone_7', _0x35cdcb(0x78c), 'tombstone_stone_9', 'tombstone_stone_9', _0x35cdcb(0x64f), _0x35cdcb(0x78c), _0x35cdcb(0xabc), _0x35cdcb(0xa40), 'tombstone_stone_5', _0x35cdcb(0x661), 'tombstone_stone_3', 'tombstone_stone_2', _0x35cdcb(0x81c), 'tombstone_stone_1', _0x35cdcb(0x5a2), _0x35cdcb(0x5ef), _0x35cdcb(0x661), 'tombstone_stone_5', _0x35cdcb(0xa40), _0x35cdcb(0xabc), _0x35cdcb(0x78c), _0x35cdcb(0x64f), _0x35cdcb(0x64f), _0x35cdcb(0x64f), _0x35cdcb(0x78c), _0x35cdcb(0xabc), 'tombstone_stone_6', _0x35cdcb(0xa26), _0x35cdcb(0x661), _0x35cdcb(0x5ef), _0x35cdcb(0x5a2), _0x35cdcb(0x81c)],
                'animationFrameTime': 0x28
            },
            'end': {
                'sprites': [_0x35cdcb(0x81c)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'tombstone_3': {
        'name': 'tombstone_3',
        'type': objectType[_0x35cdcb(0x6ae)],
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
                'sprites': ['tombstone_flowers_1', _0x35cdcb(0xa98), _0x35cdcb(0x59c), 'tombstone_flowers_4', _0x35cdcb(0x240), 'tombstone_flowers_6', 'tombstone_flowers_5', 'tombstone_flowers_4', _0x35cdcb(0x59c), _0x35cdcb(0xa98)],
                'animationFrameTime': 0x7d
            }
        },
        'animation': 'none',
        'zIndex': -0x64
    },
    'tombstone_4': {
        'name': 'tombstone_4',
        'type': objectType[_0x35cdcb(0x6ae)],
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
                'sprites': [_0x35cdcb(0xae7)]
            },
            'start': {
                'sprites': [_0x35cdcb(0xae7), 'tombstone_demonic_1', 'tombstone_demonic_1', 'tombstone_demonic_1', _0x35cdcb(0xae7), _0x35cdcb(0xae7), _0x35cdcb(0xa63), _0x35cdcb(0x4f5), _0x35cdcb(0x3f8), 'tombstone_demonic_5', _0x35cdcb(0x2e3), _0x35cdcb(0x500), _0x35cdcb(0x52a), _0x35cdcb(0x4c2), 'tombstone_demonic_9', 'tombstone_demonic_9', 'tombstone_demonic_9', _0x35cdcb(0x4c2), _0x35cdcb(0x4c2), _0x35cdcb(0x4c2), _0x35cdcb(0x4c2), _0x35cdcb(0x4c2), _0x35cdcb(0x4c2), 'tombstone_demonic_9', _0x35cdcb(0x4c2), _0x35cdcb(0x4c2), 'tombstone_demonic_9', _0x35cdcb(0x4c2), _0x35cdcb(0x4c2), _0x35cdcb(0x4c2), 'tombstone_demonic_9', 'tombstone_demonic_9', _0x35cdcb(0x4c2), _0x35cdcb(0x4c2), _0x35cdcb(0x4c2), _0x35cdcb(0x4c2), 'tombstone_demonic_9', _0x35cdcb(0x4c2), 'tombstone_demonic_9', _0x35cdcb(0x4c2), 'tombstone_demonic_9', _0x35cdcb(0x4c2), 'tombstone_demonic_9', _0x35cdcb(0x4c2), _0x35cdcb(0x4c2), _0x35cdcb(0x4c2), 'tombstone_demonic_9', _0x35cdcb(0x4c2), _0x35cdcb(0x4c2), _0x35cdcb(0x4c2), _0x35cdcb(0x4c2), _0x35cdcb(0x4c2), _0x35cdcb(0x4c2), 'tombstone_demonic_8', 'tombstone_demonic_7', _0x35cdcb(0x2e3), 'tombstone_demonic_5', 'tombstone_demonic_4', _0x35cdcb(0x4f5), _0x35cdcb(0xa63), 'tombstone_demonic_1'],
                'animationFrameTime': 0x46
            },
            'end': {
                'sprites': [_0x35cdcb(0xae7)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'tombstone_5': {
        'name': 'tombstone_5',
        'type': objectType[_0x35cdcb(0x6ae)],
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
                'sprites': [_0x35cdcb(0x872)]
            },
            'start': {
                'sprites': [_0x35cdcb(0x63f), _0x35cdcb(0x62f), _0x35cdcb(0x63c), 'tombstone_broken_heart_5', _0x35cdcb(0xaae), _0x35cdcb(0x756), _0x35cdcb(0x949), 'tombstone_broken_heart_9', _0x35cdcb(0xa13)],
                'animationFrameTime': 0x46
            },
            'end': {
                'sprites': [_0x35cdcb(0xa13)]
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'tombstone_6': {
        'name': _0x35cdcb(0x3b6),
        'type': objectType['TOMBSTONE'],
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
                'sprites': [_0x35cdcb(0xa0a), _0x35cdcb(0x8d4), _0x35cdcb(0x814), _0x35cdcb(0x1ea), _0x35cdcb(0x6b2), _0x35cdcb(0x68a)],
                'animationFrameTime': 0xc8
            },
            'end': {
                'sprites': [_0x35cdcb(0x68a)]
            }
        },
        'animation': 'none',
        'zIndex': -0x64
    },
    'tombstone_7': {
        'name': 'tombstone_7',
        'type': objectType['TOMBSTONE'],
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
                'sprites': [_0x35cdcb(0x963)]
            },
            'start': {
                'sprites': [_0x35cdcb(0x963), _0x35cdcb(0x963), _0x35cdcb(0x963), 'tombstone_skeleton_1', _0x35cdcb(0x9bf), _0x35cdcb(0x2b0), _0x35cdcb(0x690), _0x35cdcb(0x54d), _0x35cdcb(0x68d), _0x35cdcb(0x6bd), _0x35cdcb(0x741), _0x35cdcb(0x7fe), _0x35cdcb(0x954), _0x35cdcb(0x7fe), 'tombstone_skeleton_8', _0x35cdcb(0x6bd), _0x35cdcb(0x68d), _0x35cdcb(0x68d), _0x35cdcb(0x6bd), _0x35cdcb(0x741), 'tombstone_skeleton_9', 'tombstone_skeleton_10', _0x35cdcb(0x7fe), _0x35cdcb(0x741), _0x35cdcb(0x6bd), 'tombstone_skeleton_6', _0x35cdcb(0x68d), _0x35cdcb(0x6bd), _0x35cdcb(0x741), 'tombstone_skeleton_9', _0x35cdcb(0x954), _0x35cdcb(0x7fe), _0x35cdcb(0x741), _0x35cdcb(0x6bd), _0x35cdcb(0x68d), _0x35cdcb(0x68d), 'tombstone_skeleton_7', _0x35cdcb(0x741), _0x35cdcb(0x7fe), _0x35cdcb(0x954), _0x35cdcb(0x7fe), _0x35cdcb(0x741), _0x35cdcb(0x6bd), _0x35cdcb(0x68d), _0x35cdcb(0x68d), _0x35cdcb(0x54d), _0x35cdcb(0x690), 'tombstone_skeleton_3', _0x35cdcb(0x9bf), _0x35cdcb(0x963)],
                'animationFrameTime': 0x8c
            },
            'end': {
                'sprites': [_0x35cdcb(0x963)],
                'animationFrameTime': 0xc8
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'tombstone_8': {
        'name': _0x35cdcb(0x869),
        'type': objectType['TOMBSTONE'],
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
                'sprites': [_0x35cdcb(0x503)]
            },
            'start': {
                'sprites': ['tombstone_sweet_soul_2', 'tombstone_sweet_soul_3', _0x35cdcb(0x95e)],
                'animationFrameTime': 0x78
            },
            'end': {
                'sprites': [_0x35cdcb(0x333), _0x35cdcb(0xacb), _0x35cdcb(0x204), _0x35cdcb(0x8af), _0x35cdcb(0x5ab), _0x35cdcb(0x832)],
                'animationFrameTime': 0x78
            }
        },
        'animation': 'none',
        'zIndex': -0x64
    },
    'tombstone_9': {
        'name': _0x35cdcb(0x648),
        'type': objectType['TOMBSTONE'],
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
                'sprites': [_0x35cdcb(0x4da)]
            },
            'start': {
                'sprites': [_0x35cdcb(0x4da), _0x35cdcb(0x4da), _0x35cdcb(0x4da), _0x35cdcb(0x4da), _0x35cdcb(0x4da), _0x35cdcb(0x4da), _0x35cdcb(0xab3), 'tombstone_coffin_3', _0x35cdcb(0xa97), 'tombstone_coffin_5', _0x35cdcb(0xb09), _0x35cdcb(0xb09), _0x35cdcb(0xb09), _0x35cdcb(0xb09), 'tombstone_coffin_6', _0x35cdcb(0xb09), 'tombstone_coffin_6', _0x35cdcb(0xb09), _0x35cdcb(0xb09), _0x35cdcb(0xb09), _0x35cdcb(0xb09), _0x35cdcb(0xb09), 'tombstone_coffin_6', _0x35cdcb(0xb09), 'tombstone_coffin_6', _0x35cdcb(0xb09), 'tombstone_coffin_6', _0x35cdcb(0xb09), _0x35cdcb(0xb09), 'tombstone_coffin_6', 'tombstone_coffin_6', _0x35cdcb(0xb09), 'tombstone_coffin_6', 'tombstone_coffin_6', _0x35cdcb(0xb09), 'tombstone_coffin_6', 'tombstone_coffin_6', _0x35cdcb(0xb09), _0x35cdcb(0xb09), _0x35cdcb(0xb09), 'tombstone_coffin_6', _0x35cdcb(0xb09), 'tombstone_coffin_6', 'tombstone_coffin_6', _0x35cdcb(0xb09), _0x35cdcb(0xb09), 'tombstone_coffin_6', _0x35cdcb(0xb09), 'tombstone_coffin_6', _0x35cdcb(0xb09), _0x35cdcb(0xb09), _0x35cdcb(0x41f), 'tombstone_coffin_4', _0x35cdcb(0x52d), 'tombstone_coffin_2', _0x35cdcb(0x4da)],
                'animationFrameTime': 0x46
            },
            'end': {
                'sprites': ['tombstone_coffin_1']
            }
        },
        'animation': _0x35cdcb(0x6c9),
        'zIndex': -0x64
    },
    'tombstone_10': {
        'name': _0x35cdcb(0x40e),
        'type': objectType[_0x35cdcb(0x6ae)],
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
                'sprites': ['tombstone_talos_1', _0x35cdcb(0x903), _0x35cdcb(0x816), _0x35cdcb(0xa68), _0x35cdcb(0x816), _0x35cdcb(0x903)],
                'animationFrameTime': 0xa0
            },
            'start': {
                'sprites': [_0x35cdcb(0x9fe), _0x35cdcb(0x903), _0x35cdcb(0x816), _0x35cdcb(0xa68), _0x35cdcb(0xa22), 'tombstone_talos_6', _0x35cdcb(0x378), _0x35cdcb(0xa16), _0x35cdcb(0x607), _0x35cdcb(0xb34), _0x35cdcb(0x575), _0x35cdcb(0x42d), 'tombstone_talos_13'],
                'animationFrameTime': 0x5a
            },
            'end': {
                'sprites': [_0x35cdcb(0x3b7)]
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
        'next': _0x35cdcb(0x905),
        'exp': 0x104,
        'startCost': 0x4
    },
    'pigeon': {
        'next': _0x35cdcb(0x9a6),
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
        'next': _0x35cdcb(0x282),
        'exp': 0x1f4,
        'startCost': 0xa
    },
    'redBird': {
        'next': 'pelican',
        'exp': 0x226,
        'startCost': 0xb
    },
    'pelican': {
        'next': _0x35cdcb(0x86d),
        'exp': 0x352,
        'startCost': 0xc
    },
    'turkey': {
        'next': 'bat',
        'exp': 0x2ee,
        'startCost': 0xd
    },
    'bat': {
        'next': _0x35cdcb(0xaaf),
        'exp': 0x320,
        'startCost': 0xe
    },
    'seagull': {
        'next': _0x35cdcb(0x922),
        'exp': 0x7d0,
        'startCost': 0xf
    },
    'commonBlackbird': {
        'next': _0x35cdcb(0xb0f),
        'exp': 0x3e8,
        'startCost': 0x10
    },
    'hornet': {
        'next': _0x35cdcb(0x555),
        'exp': 0x3e8,
        'startCost': 0x11
    },
    'vulture': {
        'next': _0x35cdcb(0x5f7),
        'exp': 0x258,
        'startCost': 0x12
    },
    'owl': {
        'next': _0x35cdcb(0xa96),
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
        'next': _0x35cdcb(0x27a),
        'exp': 0x960,
        'startCost': 0x16
    },
    'snowyOwl': {
        'next': _0x35cdcb(0x95b),
        'exp': 0x1388,
        'startCost': 0x17
    },
    'hawk': {
        'next': _0x35cdcb(0x9a7),
        'exp': 0x1770,
        'startCost': 0x18
    },
    'raven': {
        'next': _0x35cdcb(0x3c1),
        'exp': 0x1f40,
        'startCost': 0x19
    },
    'madBat': {
        'next': 'pterodactylChild',
        'exp': 0x2710,
        'startCost': 0x1a
    },
    'pterodactylChild': {
        'next': _0x35cdcb(0x96f),
        'exp': 0x2710,
        'startCost': 0x1b
    },
    'pterodactyl': {
        'next': _0x35cdcb(0x84d),
        'exp': 0x61a8,
        'startCost': 0x1c
    },
    'swampMonster': {
        'next': _0x35cdcb(0x779),
        'exp': 0x88b8,
        'startCost': 0x1d
    },
    'stoneEater': {
        'next': 'demonicEggEater',
        'exp': 0x3a98,
        'startCost': 0x1e
    },
    'demonicEggEater': {
        'next': _0x35cdcb(0x7a0),
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
        'next': _0x35cdcb(0x6ba),
        'exp': 0x9c40,
        'startCost': 0x23
    },
    'alienBug': {
        'next': _0x35cdcb(0x5ad),
        'exp': 0x3a98,
        'startCost': 0x24
    },
    'alienBigEye': {
        'next': _0x35cdcb(0x9f7),
        'exp': 0x2ee0,
        'startCost': 0x25
    },
    'alienAngryEye': {
        'next': _0x35cdcb(0x22e),
        'exp': 0x3a98,
        'startCost': 0x26
    },
    'alienBat': {
        'next': _0x35cdcb(0x288),
        'exp': 0x88b8,
        'startCost': 0x27
    },
    'ghost': {
        'next': _0x35cdcb(0x1ff),
        'exp': 0x4e20,
        'startCost': 0x28
    },
    'ghostlyReaper': {
        'next': _0x35cdcb(0x1e3),
        'exp': 0x2ee0,
        'startCost': 0x2d
    },
    'pumpkinCharacter': {
        'next': _0x35cdcb(0x5a5),
        'exp': 0xc350,
        'startCost': 0x32
    },
    'pumpkinGhost': {
        'next': _0x35cdcb(0xad1),
        'exp': 0x4e20,
        'startCost': 0x37
    },
    'grimReaper': {
        'next': '',
        'exp': Infinity,
        'startCost': 0x3c
    },
    'overfedAlienBat': {
        'next': _0x35cdcb(0xae2),
        'exp': 0x0,
        'startCost': 0x28
    }
}
  , foodChain = {
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
}
  , objectsByUniqueIdArr = [];
function _0x34d5() {
    var _0x26c3e1 = ['mummy', 'woodpecker_5_idle', 'butterfly_7_right', 'easterRabbit_6_left', 'pet_8_2_left', 'boat_4', 'frog_spawn', 'halloweenGhost_6_idle_left', 'pet_9_2_left', 'fishPink_2_right', 'mummy_7_left', 'hornet_2_left', 'tombstone_sweet_soul_6', 'stork_5_left', 'blueBird_1_right', 'pumpkinGhost_8_right', 'boat_porthole', 'toxic_machine', 'grimReaper', 'zombie_14_idle_right', 'pet_4_6_right', 'stars_lvlup_6', 'blackWidow_8_left', 'smallDemon_3_left', 'stork_6_right', 'mouse_4_idle_left', 'halloweenGhost_3_idle_right', 'lemming_7_idle_right', 'pet_27_5_right', 'skill_echolocation', 'moon_full', 'ghostlyReaper_2_right', 'boat_sail', 'alienBigInsect_2_idle_right', 'house_10', 'ghost', 'giantRat_4_right', 'pet_21_3_left', 'evilBat_1_right', 'stars_lvlup_20', 'tombstone_demonic_1', 'turtle_3_right', 'pet_34_8_left', 'scythe\x20attack', 'demonicImp_7_right', 'mummy_3_left', 'pet_4_7_right', 'blackHole_3', 'opacity', 'woodpecker_2_idle', 'halloweenPumpkin_4_idle', 'seagull_2_left', 'easterRabbit_4_idle_left', 'tree_3_no_vegetation_base', 'pet_2_3_right', 'blackWidow_6_left', 'ghostlyReaper_15_right', 'alienBigEye_10_left', 'demonicBat_2_left', 'turtle_4_right', 'speedUp', 'phoenix_5_right', 'deadFish', 'snowyOwl_5_left', 'tyrannosaurus_4_idle_left', 'lava_splash', 'gem_spawn', 'mouse_3_idle_left', 'hawk_3_left', 'house_7', 'pet_2_1_left', 'dirt_fill_graveyard_7', 'stoneEater_5_left', 'background_sea_2', 'tombstone_coffin_6', 'blackHole_13', 'poisonWasp', 'lava_bubble_6', 'explosion_7_right', 'pet_3_1_right', 'hornet', 'stars_lvlup_11', 'blackWidow_3_right', 'demonicEggEater_4_right', 'evilBat_5_left', 'vulture_8_right', 'alienAngryEye_1_left', 'brick_grey', 'skill_poisonWasp', 'water_splash_1', 'snake_6_idle_left', 'lemming_5_idle_left', 'dragonfly', 'cherry_spawn', 'ghost_6_left', 'skull', 'Cosmic\x20Insect', 'bat_1_left', 'hornet_7_right', 'pumpkinGhost_3_left', 'ghostlyReaper_6_attack_left', 'dirt_grass3', 'snowyOwl_7_left', 'woodpecker_spawn', 'zombie_4_idle_left', 'pelican_8_left', 'smallDemon_6_right', 'pet_17_2_left', 'wasp_1_right', 'swampMonster_19_right', 'water2', 'pet_9_3_left', 'ladybug_spawn', 'Small\x20Demon', 'alienBigEye_9_right', 'pet_20_3_right', 'house_6', 'tombstone_talos_10', 'pterodactylChild_6_right', 'lava_bubble_7', 'spike_trap_bg_10', 'bubble', 'demonicEggEater_2_left', 'pet_17_5_right', 'evilRat_4_right', 'mummy_5_right', 'stork_6_left', 'pet_4_7_left', 'easterRabbit_14_idle_right', 'parrot_2_left', 'snake_4_idle_right', 'exploding_skull_2', 'raven_6_left', 'butterfly_3_right', 'snake_5_left', 'mouse_10_right', 'zombie_10_right', 'fishPink_5_left', 'dirt_fill_graveyard_9', 'pet_25_1_left', 'giftBox', 'yeti_5_left', 'lemming_2_idle_left', 'dirt_graveyard_2', 'pet_16_4_right', 'grimReaper_3_idle_right', 'pumpkinCharacter', 'pet_6_3_right', 'redBird_3_right', 'exploding_skull_10', 'fly_4_left', 'background_normal_3', 'shark_5_right', 'tombstone_pixel_4', 'turtle_1_idle_left', 'stork_7_left', 'background_sea_3', 'pet_31_4_right', 'pet_34_8_right', 'pet_7', 'alienBat_1_flying_left', 'ghostlyReaper_6_attack_right', 'mosquito_4_right', 'blackHole_12', 'alienBigInsect_spawn', 'alienEye_5_left', 'pet_28_2_left', 'overfedAlienBat_3_right', 'explosion_2_left', 'mouse_spawn', 'lemming_1_idle_right', 'yeti_4_right', 'ghost_7_left', 'tyrannosaurus_9_idle_right', 'ghostlyReaper', 'Demonic\x20Bat', 'evilBat_2_left', 'lemming_9_left', 'fireworks2_1', 'tombstone_sweet_soul_7', 'pet_25_3_right', 'worm_15_idle_right', 'pet_19_2_left', 'phoenix_2_right', 'background_graveyard_top', 'zombie_5_left', 'arena_tile_top_breakable', 'easterRabbit_1_left', 'gem', 'pet_21_3_right', 'redBird_4_left', 'pet_36_2_left', 'Ghostly\x20Reaper', 'parrot_6_right', 'demonicEggEater_5_left', 'bat_2_right', 'bloodthirsty', 'pet_27_1_right', 'fireworks2_4', 'spike_trap_bg_11', 'pet_24_4_left', 'spiderweb_2', 'pet_1_2_right', 'spike_trap_bg_6', 'snake_3_left', 'pet_4_4_right', 'pet_8_2_right', 'wooden_doors_ice', 'pet_10_3_right', 'skull_3_right', 'exploding_nova_7', 'exploding_nova_11', 'evilRat_7_left', 'crate_explosion', 'evilRat_4_left', 'mammoth_4_right', 'ghostlyReaper_7_attack_left', 'zombie_15_idle_right', 'fireworks', 'snowyOwl_1_right', 'exploding_nova_9', 'alienBat', 'mummy_5_idle_right', 'vulture_7_left', 'easterRabbit_2_left', 'frog_14_idle_right', 'dirt', 'spiderweb_3', 'pet_31_2_right', 'pet_32_3_left', 'woodpecker_5_pecking', 'mammoth_9_left', 'iceBlock', 'crocodile_5_idle_left', 'grimReaper_4_flying_left', 'background_graveyard_1', 'ectoplasm_fire_4', 'turtle_4_idle_right', 'pet_18', 'tombstone_flowers_5', 'seed', 'pet_2_2_left', 'worm_8_right', 'house_11', 'piranha_4_left', 'grimReaper_4_flying_right', 'halloweenGhost_6_idle_right', 'lemming_5_left', 'shark_2_right', 'background_grey', 'phoenix_3_right', 'crocodile_9_idle_right', 'pet_34_4_left', 'fishPink_4_right', 'lemming_10_left', 'zombie_6_idle_left', 'ghostlyReaper_11_right', 'mouse_8_idle_right', 'PLAYER_SPAWN', 'beehive_3', 'coffin_dark', 'swampMonster_7_left', 'blackWidow_5_right', 'pet_23_3_right', 'penguin_2_idle_right', 'pet_34_9_left', 'pet_23_3_left', 'ice_middle', 'mammoth_2_idle_left', 'alienEye_7_left', 'battle_royale_waiting_room_bg', 'pumpkinGhost_3_attack_left', 'pterodactylChild', 'pet_31_4_left', 'starfish', 'alienBigInsect_7_right', 'pumpkin_1_right', 'pet_5_4_left', 'easterRabbit_13_right', 'dino_bones', 'swampMonster_14_right', 'blackHole_20', 'snake_1_right', '1062HTVHim', 'alienBigInsect_8_left', 'yeti_7_left', 'pigeon_3_left', 'wall_spikes_1', 'pumpkinGhost_5_attack_left', 'pet_28_1_left', 'lemming_2_right', 'boss1_2_right', 'blueBird_2_left', 'pterodactyl_4_right', 'pet_19_1_right', 'alienEye_5_right', 'pet_13_3_left', 'snowyOwl', 'pet_10_4_left', 'yeti_3_idle_left', 'pig_spawn', 'pet_21', 'pet_5_2_right', 'pet_15_3_right', 'pet_12_4_right', 'redBird', 'beehive_1', 'blackWidow_5_idle_left', 'snake_1_idle_right', 'skill_hotBath', 'pet_33_4_left', 'overfedAlienBat', 'halloweenGhost', 'phoenix_idle_4_left', 'turkey_4_left', 'grimReaper_3_flying_left', 'pet_15_5_right', 'ectoplasm_fire_3', 'jungleTop', 'mummy_14_right', 'snowyOwl_1_left', 'blackHole_9', 'pet_10_7_left', 'phoenix_1_left', 'crate_4', 'bomb_10', 'turtle_5_idle_right', 'mouse_2_left', 'alienEye_2_idle_right', 'pet_32_1_left', 'pet_14', 'mummy_6_right', 'TELEPORT', 'tyrannosaurus_5_idle_right', 'skill_rage', 'pet_36_1_left', 'demonicBat_5_left', 'demonicBat_6_left', 'snow_animation_14', 'mouse_10_left', 'ghostlyReaper_10_attack_right', 'pillar_center', 'swampMonster_16_left', 'mammoth_2_idle_right', 'water_splash_4', 'boss1_4_left', 'alienEye_2_idle_left', 'stars_lvlup_19', 'lava_bubble', 'pet_28', 'alienBigInsect_4_right', 'tombstone_skeleton_3', 'idle', 'pet_36_3_right', 'pet_11_3_right', 'ghost_4_left', 'hen_1_left', 'sand_volleyball', 'worm_3_left', 'pet_19_3_left', 'strangeTree', 'zombie_5_idle_right', 'lemming_7_right', 'mummy_15_right', 'pet_24_1_left', 'bomb_3', 'stork_3_right', 'pterodactylChild_2_right', 'pelican_8_right', 'blackWidow', 'pet_17_4_left', 'fireball_3_left', 'Cosmic\x20Big\x20Eye', 'cat2', 'demonicImp_11_right', 'pet_27_2_right', 'pet_32_2_left', 'penguin_3_idle_left', 'beginners\x20luck', 'pig', 'turkey_3_right', 'stoneEater_4_right', 'pet_9_5_right', 'arena_statue_1', 'parrot_2_right', 'crocodile_3_idle_left', 'crocodile_13_left', 'pet_32_4_left', 'ghostlyReaper_15_attack_right', 'pet_4_6_left', 'madBat_3_right', 'exploding_nova_1', 'background_desert_2', 'alienBigEye_4_left', 'dragon_1_attack_left', 'executioner_2', 'crocodile_2_idle_right', 'crocodile_spawn', 'butterfly_10_left', 'alienEye_4_idle_left', 'demonicEggEater_1_left', 'snake', 'tombstone_demonic_6', 'demonicEggEater_4_left', 'woodpecker_3_pecking', 'pet_24_3_left', 'blackHole_17', 'alienBigEye_2_left', 'raven_7_right', 'mine_track', 'dragon', 'madBat_4_left', 'pet_26_1_left', 'penguin_1_right', 'giantRat_4_left', 'duck_4_right', 'skull_1_left', 'zombie_7_idle_left', 'pet_31_6_right', 'pet_34_7_right', 'flapping_right', 'demonicBat_1_right', 'evilRat_1_right', 'pet_14_1_right', 'pet_4_1_right', 'zombie_1_idle_right', 'ghostlyReaper_7_right', 'alienEye_1_right', 'piranha_3_left', 'owl_1_right', 'ghostlyReaper_11_attack_left', 'turtle', 'tyrannosaurus_7_idle_left', 'easterRabbit_8_idle_left', 'phoenix_2_left', 'zombie_15_left', 'crocodile_11_right', 'crocodile_8_left', 'dirt_grass2', 'hen_1_right', 'alienBigInsect_7_left', 'house_2', 'blackWidow_5_left', 'redBird_4_right', 'pet_23_1_left', 'swampMonster_9_left', 'boat_6', 'pet_25_7_right', 'evilRat_6_left', 'lemming_4_right', 'dirt_snow2', 'pet_9_5_left', 'frog_8_idle_right', 'pet_12_2_left', 'pet_4', 'worm_5_idle_right', 'owl_1_left', 'mouse_1_left', 'pet_22_2_right', 'space_rock_1', 'mummy_11_right', 'zombie_6_right', 'pet_1_5_left', 'snake_2_left', 'woodpecker_6_idle', 'exploding_skull_12', 'pet_29_3_right', 'lemming_4_left', 'pumpkinGhost_1_right', 'arena_window', 'crocodile_4_idle_right', 'PET', 'worm_1_idle_right', 'house_4', 'stoneEater_1_right', 'vulture_4_right', 'skill_frogHunter', 'pterodactyl_5_left', 'snake_20_idle_right', 'hornet_3_left', 'wooden_doors_city', 'mammoth_3_idle_right', 'tombstone_sweet_soul_5', 'alienBigInsect_4_idle_left', 'smallDemon_7_left', 'pet_24_5_left', 'bubble_3', 'pet_1_6_right', 'stork_2_right', 'tree_3_bright_green', 'cosmicEgg', 'mammoth_4_idle_right', 'crocodile_8_idle_right', 'fireball_6_right', 'crate_6', 'piranha_5_left', 'evilRat_1_left', 'armor_breaking_default', 'pet_27_5_left', 'tyrannosaurus_12_right', 'pet_34_10_left', 'thorn_branch_2', 'pet_9_7_right', 'player_spawn', 'swampMonster_10_right', 'hunger', 'mummy_12_left', 'alienBigEye_2_right', 'explosion2_6', 'owl_5_left', 'shark_4_left', 'blackHole_24', 'tyrannosaurus', 'skill_excellentHunter', 'demonicImp_5_right', 'mammoth_3_left', 'zombie_9_right', 'blueBird_4_right', 'swampMonster_2_left', 'alienFruit3_spawn', 'mummy_1_left', 'frog_15_idle_right', 'ghostlyReaper_13_left', 'worm_7_idle_right', 'swampMonster_15_left', 'starfish1', 'cherry', 'pet_22_3_left', 'piranha_spawn', 'grimReaper_1_flying_left', 'lava_bubble_8', 'blackWidow_6_right', 'ghostlyReaper_1_attack_right', 'boss1_spawn', 'snowyOwl_6_left', 'background_normal_bottom', 'stone\x20skin', 'pigeon_2_right', 'snowyOwl_8_left', 'swampMonster_13_left', 'blackHole_30', 'crate_1', 'house_9', 'grimReaper_7_attack_left', 'tyrannosaurus_10_idle_right', 'hornet_8_left', 'frog_16_idle_left', 'vulture_2_right', 'snow_animation_17', 'exploding_skull_1', 'pet_33_5_left', 'tombstone_talos_7', 'blackHole_7', 'ghostlyReaper_17_right', 'lava_bubble_13', 'yeti_3_idle_right', 'crab_spawn', 'mummy_5_left', 'fireball_3_right', 'pet_34_11_right', 'tyrannosaurus_4_right', 'Red\x20bird', 'Stone\x20Eater', 'water_splash_5', 'Blackbird', 'vulture_4_left', 'eagle_4_right', 'pet_22_9_left', 'pelican_5_left', 'owl_8_right', 'spike_trap_bg_15', 'alienBigInsect_3_left', 'br_portal_1', 'penguin_4_idle_left', 'pet_5_5_left', 'crab_3', 'turtle_6_left', 'phoenix_idle_2_right', 'explosion_6_left', 'stone_spawn', 'zombie_15_right', 'fence', 'torch_5', 'fly_2_right', 'fireworks_6', 'smallDemon_8_right', 'cat', 'dragon_2_attack_right', 'mouse_5_left', 'butterfly_1_right', 'flame', 'tyrannosaurus_1_right', 'skills', 'dragon_3_attack_left', 'madBat_6_left', 'dirt_fill_graveyard_2', 'blackWidow_3_idle_right', 'pet_11_1_left', 'zombie_12_idle_left', 'alienBug_6_right', 'br_portal_9', 'madBat_5_left', 'pet_33_6_right', 'halloweenGhost_9_idle_left', 'lemming_11_left', 'starfish_spawn', 'spike_trap_saw', 'house_1', 'exploding_skull_11', 'tombstone_wooden_4', 'pet_25_5_right', 'ghost_5_left', 'tombstone_wooden_7', 'tombstone_6', 'tombstone_talos_13', 'yeti_4_idle_right', 'swamp', 'flower_white', 'demonicEggEater_2_right', 'giantRat_spawn', 'pet_33_2_left', 'ghostlyReaper_12_attack_left', 'pet_1_4_right', 'lemming_5_right', 'madBat', 'easterRabbit_2_right', 'spike_trap_bg_2', 'pet_34', 'boat_3', 'mammoth_5_idle_left', 'crocodile_3_idle_right', 'pterodactyl_2_right', 'pet_33_1_left', 'lemming', 'turkey_8_right', 'open', 'pet_19_3_right', 'crab', 'blackWidow_spawn', 'pet_3_3_right', 'demonicImp_3_right', 'snake_spawn', 'skill_scytheAttack', 'pet_3_3_left', 'swampMonster_13_right', 'pet_27', 'halloweenGhost_spawn', 'skill_toTheMoon', 'frog_4_idle_left', 'grimReaper_2_idle_right', 'meat_spawn', 'animations', 'pterodactylChild_5_right', 'egg', 'lemming_6_idle_right', 'grimReaper_5_attack_right', 'alienBigInsect_6_idle_left', 'demonicBat_3_left', 'pterodactylChild_3_right', 'frogHunter', 'ectoplasm_fire_2', 'objectsDef', 'bubble_5', 'swampMonster_3_left', 'parchment_info', 'vulture_7_right', 'blackWidow_1_idle_right', 'piranha_4_right', 'mammoth', 'explosion_4_right', 'halloweenPumpkin_1_idle', 'pet_15_2_right', 'dragon_2_left', 'christmasTree', 'butterfly_12_right', 'dirt_top1', 'executioner_6', 'pet_24_4_right', 'zombie_16_idle_left', 'tombstone_demonic_4', 'demonicEggEater', 'pompadourCotinga_3_right', 'zombie_7_right', 'ghostlyReaper_4_attack_right', 'swampMonster_20_right', 'fly_1_left', 'ghostlyReaper_8_right', 'evilRat_5_right', 'overfedAlienBat_2_right', 'poo1', 'alienBigInsect_9_left', 'tombstone_2', 'pet_34_11_left', 'closed', 'tyrannosaurus_13_right', 'deadFish_spawn', 'arena_torch', 'pet_17_5_left', 'snake_3_right', 'snow_animation_13', 'exploding_skull_9', 'tombstone_10', 'easterRabbit_7_idle_right', 'fireworks_8', 'butterfly_9_right', 'pet_11_6_left', 'stork_5_right', 'snake_2_right', 'wasp_1_left', 'pet_31_5_right', 'mouse_9_right', 'raven_3_right', 'swampMonster_3_right', 'hornet_8_right', 'beehive_2', 'blackHole_26', 'bear_trap_5', 'ghostlyReaper_8_attack_left', 'tombstone_coffin_5', 'blackWidow_4_idle_left', 'snake_10_idle_right', 'alienBigEye_10_right', 'yeti_8_right', 'raven_1_right', 'vulture_3_left', 'butterfly_6_left', 'lemming_14_right', 'br_portal_4', 'mammoth_3_idle_left', 'tyrannosaurus_12_left', 'turkey_1_right', 'tyrannosaurus_2_left', 'tombstone_talos_12', 'pet_6_3_left', 'alienEye_10_left', 'mummy_9_right', 'to\x20the\x20moon', 'phoenix_1_right', 'crocodile_5_right', 'commonBlackbird_4_left', 'fireworks2_9', 'tyrannosaurus_11_left', 'easterRabbit_12_left', 'alienBat_2_idle_left', 'exploding_nova', 'boss1', 'pet_2_4_left', 'pet_16_2_right', 'pet_33_6_left', 'pterodactyl_3_left', 'exploding_nova_8', 'mummy_12_right', 'bubble_11', 'pet_30_4_right', 'pet_27_4_left', '8035455xkGGPc', 'thick\x20skin', 'halloweenGhost_7_idle_right', 'pet_36_4_right', 'alienBug_4_right', 'pterodactylChild_4_left', 'house_3', 'alienAngryEye_6_left', 'swampMonster_5_left', 'pompadourCotinga_4_right', 'thorn_branch_3', 'pet_34_7_left', 'crab_2', 'madBat_3_left', 'stoneEater_2_right', 'rage', 'executioner_4', 'hot\x20bath', 'pet_5_2_left', 'halloweenGhost_2_idle_left', 'alienEye_1_idle_right', 'pet_25_7_left', 'brick_pyramid', 'tyrannosaurus_3_idle_right', 'pet_10_3_left', 'br_portal_7', 'hornet_5_left', 'woodpecker_2_pecking', 'duck_2_right', 'pet_18_3_left', 'background_graveyard_left', 'moon', 'bubble_1', 'pterodactylChild_1_right', 'lemming_13_left', 'worm_5_idle_left', 'lemming_6_idle_left', 'pet_9', 'tyrannosaurus_8_idle_left', 'woodpecker_4_pecking', 'castle_bg', 'keys', 'pet_15', 'alienEye_3_left', 'zombie_2_left', 'arena_flag', 'fireball_4_right', 'smallDemon', 'frog_7_idle_left', 'boss1_3_right', 'zombie_10_left', 'pterodactyl_6_left', 'mammoth_5_right', 'pet_27_3_right', 'burn\x20in\x20hell', 'demonicImp_18_right', 'pigeon_1_right', 'grave', 'background_volcano_1', 'crocodile_14_left', 'pet_9_1_left', 'madBat_2_left', '3559268NeGXhH', 'worm_3_right', 'duck_5_right', 'pet_1_2_left', 'br_portal_8', 'butterfly_1_left', 'redBird_2_right', 'pet_2_2_right', 'hotBath', 'stars_lvlup_12', 'ice_left', 'turtle_spawn', 'mummy_1_idle_left', 'wasp_3_right', 'crab_5', 'bomb_9', 'grimReaper_1_attack_left', 'pet_25_3_left', 'bat_3_right', 'woodpecker_1_idle', 'alienBigInsect_6_idle_right', 'piranha', 'stars_lvlup_14', 'pumpkin_2_left', 'blackHole_18', 'vulture_3_right', 'mummy_4_idle_left', 'bomb', 'strawberry_spawn', 'pet_26_3_left', 'pterodactyl_4_left', 'pumpkinGhost_4_attack_right', 'snow_animation_2', 'snake_5_idle_left', 'phoenix_4_right', 'lemming_8_left', 'pet_29_3_left', 'mummy_2_right', 'pet_11_3_left', 'background_space_3', 'demonicImp_8_left', 'br_portal_6', 'executioner_5', 'turkey_5_left', 'mammoth_1_idle_right', 'ghostlyReaper_2_left', 'pet_26_5_right', 'blueBird_2_right', 'ladybug', 'frog_15_idle_left', 'giantRat_7_right', 'raven_6_right', 'grimReaper_2_flying_right', 'water_splash_6', 'arena_torch_3', 'pet_22_5_right', 'hen_3_right', 'dragon_3_attack_right', 'pet_18_1_left', 'easterRabbit_3_idle_right', 'zombie_16_idle_right', 'turkey_6_right', 'pet_35_5_left', 'penguin_11_left', 'tombstone_demonic_9', 'pumpkinGhost_4_right', 'mosquito_1_left', 'lemming_13_right', 'ghostlyReaper_12_attack_right', 'frog_9_idle_left', 'explosion_2_right', 'Giant\x20Rat', 'pet_20_4_left', 'pet_6_1_left', 'background_graveyard_3', 'alienAngryEye_3_left', 'fireworks_4', 'mammoth_spawn', 'pet_4_5_left', 'worm_10_idle_right', 'snowyOwl_9_left', 'beam', 'pterodactyl_2_left', 'mammoth_1_idle_left', 'swampMonster_7_right', 'alienBat_1_idle_right', 'background_snow_1', 'turtle_2_left', 'tombstone_coffin_1', 'evilRat_6_right', 'zombie_2_right', 'pterodactyl_1_right', 'ghostlyReaper_14_attack_right', 'shark_3_right', 'pet_25_4_right', 'frog_1_idle_left', 'halloweenGhost_5_idle_left', 'volcano_2', 'jungleTree2', 'fireball_5_right', 'pet_21_2_left', 'crocodile_10_idle_right', 'water_splash_8', 'pet_19_2_right', 'owl_3_left', 'pet_6_2_left', 'snake_2_idle_left', 'explosion_1_left', 'excellentHunter', 'lemming_10_right', 'flower_purple', 'alienBug_2_left', 'pet_29_2_right', 'turkey_7_right', 'fishPink_4_left', 'tombstone_demonic_3', 'zombie', 'bubble_13', 'pet_16', 'cloud3', 'pet_23_2_left', 'grimReaper_3_flying_right', 'easterRabbit_11_idle_left', 'snow_animation_12', 'exploding_nova_6', 'arena_bg_safe', 'tombstone_demonic_7', 'mouse_7_idle_right', 'pumpkinGhost_7_left', 'tombstone_sweet_soul_1', 'phoenix_idle_1_left', 'parrot_5_right', 'hawk_4_left', 'pet_24_2_right', 'stone', 'fireball_1_right', 'mummy_10_left', 'stoneEater_5_right', 'penguin_9_left', 'pompadourCotinga_3_left', 'snake_18_idle_right', 'poisonSwampMonster', 'pelican_12_left', 'turkey_2_left', 'snake_12_idle_right', 'lemming_9_right', 'background_graveyard_top_right', 'blackWidow_2_right', 'zombie_9_left', 'pet_21_4_left', 'mouse_7_left', 'pet_26_3_right', 'pumpkinGhost_8_left', 'ghostlyReaper_8_left', 'alienBigEye_12_right', 'pet_28_4_right', 'tree_1_bright_green', 'PLAYER', 'pet_7_1_right', 'skill_fireball', 'blackHole_28', 'parrot_6_left', 'halloweenGhost_4_idle_right', 'crocodile_9_idle_left', 'pigeon_4_right', 'explosion2_1', 'shark_5_left', 'penguin_1_left', 'tombstone_demonic_8', 'alienBat_1_idle_left', 'pipe', 'tombstone_coffin_3', 'snow_animation_25', 'pet_17_3_left', 'stork_4_left', 'pterodactyl_1_left', 'mummy_15_left', 'pet_11_2_left', 'falcon_3_right', 'phoenix_6_right', 'blackWidow_1_left', 'swampMonster_6_left', 'exploding_skull_3', 'pet_30_2_left', 'pumpkin_4_right', 'tyrannosaurus_7_left', 'falcon_3_left', 'crocodile_3_left', 'house_13', 'overfedAlienBat_1_left', 'blackHole_29', 'owl_4_right', 'woodpecker_3_idle', 'shark_4_right', 'lemming_7_left', 'turtle_1_idle_right', 'pet_22_7_left', 'bear_trap_3', 'easterRabbit_10_idle_right', 'dragon_4_attack_left', 'swampMonster_19_left', 'pet_24_2_left', 'duck_5_left', 'tombstone_skeleton_5', 'turtle_3_idle_right', 'mouse_7_right', 'pet_33_5_right', 'ocean', 'tyrannosaurus_3_left', 'factory_bg', 'yeti_7_right', 'vulture', 'pet_11_7_left', 'lava', 'black_tile', 'pet_7_2_right', 'duck_3_right', 'Swamp\x20Monster', 'ghost_5_right', 'pet_18_1_right', 'pet_36_2_right', 'pet_25_6_left', 'mouse_2_idle_left', 'penguin', 'background_graveyard_right', 'madBat_5_right', 'commonBlackbird_1_right', 'dragonfly_2_right', 'blackWidow_7_idle_left', 'mouse_4_right', 'mummy_7_right', 'crocodile_1_right', 'alienFruit1', 'turtle_5_idle_left', 'evilBat', 'pet_31_1_right', 'mummy_6_idle_right', 'pet_30', 'snake_15_idle_right', 'demonicImp_2_left', 'stoneEater_1_left', '38995002mhoIer', 'pet_22_10_right', 'tombstone_talos_11', 'demonicImp_16_left', 'commonBlackbird_2_left', 'pet_31_2_left', 'fly', 'pet_10_5_right', 'taxi', 'yeti_6_left', 'blackHole_10', 'alienBat_2_idle_right', 'alienBigInsect_3_idle_right', 'evilRat_2_right', 'tombstone_wooden_6', 'bush_1_bright_green', 'bear_trap', 'pet_36', 'explosion2_4', 'dragon_1_attack_right', 'worm_13_idle_left', 'yeti_2_left', 'mammoth_2_left', 'pelican_11_right', 'pet_15_1_right', 'skill_layEgg', 'vulture_5_right', 'turtle_1_right', 'blackWidow_2_idle_right', 'skull_2_left', 'demonicImp_4_left', 'beginnersLuck', 'fly_4_right', 'brick_post_1', 'pet_29_1_left', 'battle_royale_bg', 'mummy_13_right', 'ghostlyReaper_10_left', 'pet_18_2_right', 'frog_12_idle_left', 'background_graveyard_bottom', 'tombstone_flowers_3', 'mouse_5_idle_right', 'snake_8_idle_left', 'halloweenPumpkin_2_idle', 'zombie_13_idle_left', 'blackHole_19', 'tombstone_stone_2', 'pet_2', 'pelican_4_left', 'pumpkinGhost', 'mummy_6_idle_left', 'pet_18_5_right', 'easterRabbit_12_idle_left', 'skill_immortality', 'smallDemon_spawn', 'tombstone_sweet_soul_9', 'pet_12', 'alienBigEye', 'hornet_1_left', 'alienBigInsect_5_idle_left', 'yeti_6_right', 'pet_19', 'lemming_3_idle_left', 'mummy_14_left', 'easterRabbit', 'stoneEater_3_right', 'snake_13_idle_right', 'spike_trap_bg_4', 'easterRabbit_13_left', 'falcon_2_left', 'alienEye_6_idle_right', 'turtle_4_left', 'zombie_16_left', 'lemming_4_idle_left', 'spike_trap_bg_14', 'snow_animation_22', 'tyrannosaurus_6_idle_left', 'grimReaper_4_attack_left', 'hawk_4_right', 'eggRed', 'bomb_11', 'owl_2_right', 'br_portal_2', 'alienEye_3_idle_left', 'penguin_2_left', 'pet_26_4_right', 'fireball', 'pumpkinGhost_5_right', 'water', 'tyrannosaurus_2_idle_right', 'ghostlyReaper_16_attack_right', 'dirt_top3', 'zombie_5_idle_left', 'vulture_1_right', 'background_sea_1', 'woodpecker_4_idle', 'alienEye_10_right', 'crocodile_5_idle_right', 'crocodile_10_right', 'tyrannosaurus_9_left', 'giantRat_6_right', 'wasp_4_left', 'alienEye_6_idle_left', 'pet_26_1_right', 'volleyball', 'spike_trap_bg_9', 'zombie_1_left', 'water_splash_3', 'swoop', 'open_coffin', 'fly_3_left', 'stork_7_right', 'pet_33_4_right', 'stars_lvlup_9', 'beehive_9', 'crocodile_1_left', 'pet_16_1_left', 'worm_4_left', 'jungle_spawn', 'fishPink_spawn', 'dragonfly_2_left', 'torch_6', 'ghostlyReaper_10_attack_left', 'tombstone_stone_3', 'ghostlyReaper_1_left', 'pet_18_5_left', 'torch_1', 'blueBird', 'penguin_spawn', 'pumpkinGhost_4_left', 'background_desert_bottom', 'owl', 'pet_4_8_left', 'fireworks2_5', 'pet_28_1_right', 'pet_12_4_left', 'mouse_3_idle_right', 'blueBird_1_left', 'mummy_6_left', 'frog_5_idle_right', 'background_jungle_3', 'fly_3_right', 'idle_right', 'eagle', 'alienFruit2_spawn', 'blackHole_1', 'mouse_6_idle_right', 'tombstone_talos_9', 'tombstone_wooden_2', 'explosion2_7', 'vulture_1_left', 'bat_2_left', 'kingJustice_3', 'yeti_2_idle_left', 'mammoth_4_idle_left', 'moon_half', 'demonicEggEater_6_left', 'dirt_fill_graveyard', 'pet_17', 'snake_16_idle_left', 'mammoth_6_right', 'explosion2_3', 'snake_14_idle_right', 'easterRabbit_4_idle_right', 'pet_8_1_right', 'dirt_top_graveyard_3', 'boat_5', 'background_snow_2', 'evilRat_2_left', 'Demonic\x20Egg\x20Eater', 'swampMonster_8_left', 'explosion_5_left', 'pet_22_9_right', 'snowyOwl_8_right', 'yeti_10_right', 'pet_16_2_left', 'pumpkinGhost_2_attack_left', 'snake_3_idle_right', 'pet_27_1_left', 'fishPink_1_right', 'shark_2_left', 'woodpecker_1_pecking', 'pompadourCotinga_2_left', 'mummy_5_idle_left', 'snake_8_idle_right', 'worm_1_idle_left', 'pet_12_1_left', 'tombstone_broken_heart_3', 'butterfly_4_left', 'pet_10_1_left', 'dragonfly_1_left', 'butterfly_5_right', 'poo', 'tombstone_wooden_1', 'fishPink_2_left', 'wall_spikes_2', 'redBird_1_left', 'tombstone_wooden_9', 'ghostlyReaper_9_attack_left', 'dirt_top2', 'tombstone_broken_heart_4', 'pterodactyl_5_right', 'pigeon_1_left', 'tombstone_broken_heart_2', 'crocodile_1_idle_right', 'potion_armor', 'space_rock_3', 'demonicBat_5_right', 'eagle_2_left', 'crocodile_15_left', 'pet_31_1_left', 'worm_spawn', 'tombstone_9', 'snake_17_idle_right', 'tyrannosaurus_2_idle_left', 'easterRabbit_12_idle_right', 'alienBigInsect_6_right', 'fly_1_right', 'grimReaper_7_attack_right', 'tombstone_stone_9', 'pet_12_3_right', 'volleyPost', 'crocodile_3_right', 'iced_cave_bg', 'snow_animation_7', 'hen_5_left', 'pet_20_2_left', 'pet_34_6_left', 'turtle_4_idle_left', 'action', 'easterRabbit_13_idle_right', 'pet_35_3_left', 'pet_11_4_left', 'pelican_4_right', 'pet_10_2_right', 'redBird_3_left', 'explosion_6_right', 'tombstone_stone_4', 'pet_32_3_right', 'fireball_5_left', 'snake_4_right', 'seagull_1_left', 'snow_animation_5', 'pet_7_3_right', 'alienEye_3_idle_right', 'halloweenGhost_7_idle_left', 'explosion2_5', 'snowyOwl_6_right', 'alienBigInsect_5_right', 'boat_cannon', 'halloweenGhost_8_idle_right', 'grimReaper_4_attack_right', 'red', 'arena_tile_top_breakable_1', 'bubble_6', 'pet_4_3_left', 'stars_lvlup_4', 'tyrannosaurus_2_right', 'mosquito_2_left', 'water_splash_7', 'grimReaper_2_idle_left', 'pet_11_4_right', 'spike_trap_bg_5', 'pet_22', 'exploding_nova_2', 'dirt9', 'water2_fill', 'giantRat_6_left', 'tyrannosaurus_6_idle_right', 'parrot_1_right', 'evilBat_1_left', 'explosion_5_right', 'flowerLove', 'pet_33_3_right', 'pumpkin_2_right', 'falcon_2_right', 'pet_29', 'demonicImp_6_left', 'tombstone_pixel_6', 'giantRat_2_right', 'alienBigInsect_10_right', 'tombstone_skeleton_6', 'worm_7_idle_left', 'skill_stoneSkin', 'tombstone_skeleton_4', 'fireball_2_right', 'torch_2', 'dragon_4_attack_right', 'crocodile_4_left', 'hawk_3_right', 'zombie_13_right', 'mouse_2_right', 'pet_1_1_left', 'swampMonster_15_right', 'yeti_10_left', 'crocodile_8_idle_left', 'demonicImp_8_right', 'uid', 'pet_11_1_right', 'alienAngryEye_4_right', 'pet_12_1_right', 'pumpkinGhost_7_right', 'mouse_1_idle_left', 'turtle_7_right', 'pet_35_4_left', '1243544TebOyf', 'hornet_3_right', 'standing_stone', 'snake_12_idle_left', 'cemetery_spawn', 'dirt_fill_graveyard_1', 'zombie_3_idle_left', 'ghostlyReaper_5_attack_right', 'lava_bubble_10', 'TOMBSTONE', 'pet_13_2_left', 'pumpkinGhost_1_attack_right', 'arctic', 'tombstone_pixel_5', 'pipe_exit', 'pet_13_2_right', 'pet_10_1_right', 'pumpkinGhost_6_left', 'worm_3_idle_left', 'owl_7_left', 'yeti_8_left', 'alienBug', 'pet_35_5_right', 'zombie_8_left', 'tombstone_skeleton_7', 'demonicImp_5_left', 'pterodactylChild_3_left', 'piranha_6_right', 'pet_16_3_left', 'fishPink_3_right', 'raven_2_right', 'snow_animation_10', 'blueBird_4_left', 'tyrannosaurus_10_idle_left', 'evilBat_spawn', 'falcon', 'none', 'worm_15_idle_left', 'grimReaper_1_idle_left', 'dirt_fill_graveyard_4', 'pet_2_3_left', '3xQnhLD', 'hornet_2_right', 'explosion_3_left', 'zombie_11_idle_left', 'zombie_13_idle_right', 'skinsLoaded', 'potion_armor_spawn', 'yeti_4_left', 'ghostlyReaper_14_attack_left', 'pet_34_12_right', 'ghostlyReaper_16_right', 'roots', 'kingJustice_1', 'stars_lvlup_13', 'pet_13_3_right', 'grimReaper_5_attack_left', 'yeti_4_idle_left', 'bomb_2', 'pet_20_2_right', 'easterRabbit_2_idle_right', 'snow_animation_21', 'pet_34_5_right', 'background_volcano_3', 'dirt_snow1', 'butterfly_3_left', 'lava_bubble_2', 'pet_1_1_right', 'pterodactylChild_1_left', 'alienBug_5_right', 'hornet_5_right', 'Mad\x20Bat', 'excellent\x20hunter', 'ghostlyReaper_16_attack_left', 'alienBigEye_1_right', 'piranha_2_right', 'exploding_skull_6', 'explosion2_8', 'pumpkin', 'raven_5_left', 'easterRabbit_8_right', 'ghostlyReaper_4_attack_left', 'pet_11_6_right', 'pet_34_10_right', 'crocodile_7_idle_left', 'pterodactyl_6_right', 'dragonfly_3_left', 'alienEye_spawn', 'hen_5_right', 'hen_3_left', 'pelican', 'skill_burnInHell', 'ghostlyReaper_7_attack_right', 'easterRabbit_1_right', 'pet_21_1_left', 'zombie_11_right', 'worm_5_left', 'turkey_7_left', 'crocodile_2_left', 'pet_22_1_right', 'pet_35_3_right', 'overfedAlienBat_3_left', 'yeti_5_right', 'stoneEater_2_left', 'ghostlyReaper_13_right', 'dirt_top_graveyard', 'beehive_6', 'mummy_4_idle_right', 'pipe_foreground', 'seagull_2_right', 'wooden_doors_graveyard', 'pelican_6_right', 'pet_35_1_right', 'Brown\x20bird', 'background_jungle_1', 'mouse_6_idle_left', 'easterRabbit_5_left', 'king_throne', 'executioner_1', 'arena_doors_1', 'animation', 'blackHole_2', 'dirt_graveyard_1', 'mummy_13_left', 'turtle_1_left', 'ghostlyReaper_9_attack_right', 'alienEye_4_right', 'madBat_2_right', 'tyrannosaurus_14_left', 'beehive_8', 'blackHole_5', 'background_graveyard_2', 'pumpkinGhost_3_attack_right', 'ghostlyReaper_3_right', 'pet_27_2_left', 'swampMonster_16_right', 'pet_16_4_left', 'zombie_12_left', 'woodpecker', 'stoneEater_4_left', 'zombie_12_idle_right', 'pipe_upper', 'pet_32_5_left', 'EFFECT', 'worm_7_left', 'strawberry', 'TILE', 'swampMonster_20_left', 'tyrannosaurus_spawn', 'tyrannosaurus_3_idle_left', 'swampMonster_11_right', 'dirt4', 'spike_trap_bg_7', 'factory_fill', 'pet_26_4_left', 'br_portal_3', 'tombstone_skeleton_8', 'pet_21_1_right', 'pigeon_2_left', 'pet_34_4_right', 'piranha_2_left', 'snake_16_idle_right', 'yeti_1_left', 'butterfly', 'parrot_3_right', 'smallDemon_5_right', 'ghostlyReaper_2_attack_right', 'kingJustice', 'pet_3_2_left', 'demonicBat_2_right', 'eagle_2_right', 'spike_trap_bg_3', 'background_normal_2', 'blackWidow_3_left', 'spike_trap_bg_8', 'bubble_9', 'MISC', 'tombstone_broken_heart_7', 'turtle_5_right', 'pet_32_5_right', 'pet_9_8_right', 'pet_13_4_left', 'pet_10_2_left', 'easterRabbit_7_idle_left', 'alienBigEye_6_left', 'pet_14_4_left', 'turkey_4_right', 'grimReaper_8_attack_left', 'stork_3_left', 'dragon_4_right', 'tree_1__no_vegetation_base', 'flower_1_face_on_red', 'pet_32_2_right', 'spiderweb_1', 'Blue\x20bird', 'pet_11_8_left', 'br_portal', 'greystone_sand', 'torch_4', 'pet_22_6_right', 'phoenix_8_left', 'frog_16_idle_right', 'mosquito_2_right', 'butterfly_6_right', 'ship_bg', 'dirt8', 'snow_animation_4', 'zombie_6_idle_right', 'dust', 'stars_lvlup_7', 'butterfly_2_right', 'easterRabbit_8_left', 'stoneEater', 'lemming_15_left', 'pet_36_3_left', 'lemming_11_right', 'worm_4_idle_right', 'dust_3', 'alienBigEye_7_left', 'pet_34_6_right', 'exploding_nova_3', 'fireworks2_15', 'pet_5', 'butterfly_4_right', 'alienEye_5_idle_left', 'blackHole_25', 'mammoth_4_left', 'pet_20_4_right', 'demonicImp_13_left', 'mummy_3_idle_left', 'cat1', 'tombstone_stone_8', 'alienEye_5_idle_right', 'bubble_12', 'worm_10_idle_left', '1304781qQrHri', 'mosquito_1_right', 'cat_spawn', 'pipe_lower', 'halloweenPumpkin_5_idle', 'hawk_2_right', 'halloweenPumpkin_6_idle', 'giantRat', 'snowyOwl_9_right', 'demonicEggEater_6_right', 'pet_22_4_right', 'ghost_3_left', 'yeti_1_idle_left', 'smallDemon_2_left', 'strawberry_bush', 'lay\x20egg', 'demonicBat', 'SPAWN', 'pet_9_6_left', 'pelican_3_left', 'mosquito', 'mouse_5_idle_left', 'pet_15_6_right', 'type', 'tombstone_1', 'worm_9_left', 'pet_5_6_left', 'Evil\x20Rat', 'yeti_9_left', 'swampMonster_2_right', 'tyrannosaurus_4_idle_right', 'blackHole_14', 'factory_lamp', 'beehive_10', 'pixel_voices', 'fireball_1_left', 'fireworks_5', 'demonicImp_2_right', 'onAttack', 'pelican_9_right', 'butterfly_12_left', 'wooden_doors', 'hawk_2_left', 'pet_25_2_left', 'pet_15_6_left', 'pet_14_2_right', 'alienBug_1_right', 'pet_17_2_right', 'pet_21_4_right', 'ghostlyReaper_9_left', 'butterfly_8_left', 'background_pyramid', 'water_splash_2', 'dirt_grass', 'lemming_5_idle_right', 'Snowy\x20Owl', 'demonicBat_3_right', 'alienAngryEye_4_left', 'demonicImp_15_right', 'fishPink_3_left', 'pet_4_5_right', 'green_light', 'worm_6_right', 'ghostlyReaper_5_attack_left', 'mouse_8_left', 'blackWidow_1_idle_left', 'dragon_1_right', 'phoenix_7_right', 'lava_bubble_9', 'pet_34_2_right', 'background_normal_1', 'fireworks2_7', 'halloweenGhost_2_idle_right', 'blackWidow_6_idle_left', 'skill_thickSkin', 'alienAngryEye_2_right', 'halloweenGhost_1_idle_right', 'pet_32_6_right', 'blackHole_8', 'pumpkinGhost_2_left', 'zombie_2_idle_right', 'tyrannosaurus_7_idle_right', 'penguin_5_right', 'ghostlyReaper_12_left', 'frog_12_idle_right', 'hornet_7_left', 'fishPink', 'owl_2_left', 'swampMonster_4_right', 'snow_animation_23', 'zombie_3_left', 'rock_1_blue', 'easterRabbit_11_right', 'arena_bg', 'easterRabbit_9_idle_left', 'explosion2', 'alienEye_4_idle_right', 'onCollideTrigger', 'dirt5', 'alienFruit2', 'halloweenGhost_5_idle_right', 'easterRabbit_6_idle_right', 'pumpkinGhost_2_attack_right', 'running_right', 'zombie_4_left', 'grimReaper_4_idle_right', 'pumpkinGhost_1_attack_left', 'alienBigInsect_3_idle_left', 'pet_14_3_left', 'giantRat_2_left', 'tombstone_skeleton_9', 'grimReaper_1_attack_right', 'ghost_2_right', 'dirt_fill_graveyard_8', 'zombie_spawn', 'demonicImp_14_right', 'dragon_2_attack_left', 'zombie_4_idle_right', 'arena_tile_top_breakable_2', 'phoenix_idle_3_left', 'frog_11_idle_left', 'worm_14_idle_left', 'mammoth_8_left', 'pet_17_4_right', 'pillar_top', 'alienBigInsect_2_right', 'crocodile_12_right', 'tyrannosaurus_1_left', 'penguin_9_right', 'alienBigInsect', 'house_8', 'pet_28_3_right', 'tombstone_pixel_3', 'pet_5_6_right', 'tombstone_talos_3', 'pet_6_2_right', 'boat_1', 'vulture_6_right', 'falcon_1_right', 'wasp_4_right', 'tombstone_stone_1', 'pelican_11_left', 'pet_29_1_right', 'demonicImp', 'hornet_9_right', 'blackWidow_1_right', 'turkey_9_right', 'mummy_4_left', 'piranha_3_right', 'swampMonster_5_right', 'dragon_3_left', 'cosmicEgg_spawn', 'pet_22_7_right', 'worm', 'factory_floor_top', 'commonBlackbird_3_right', 'pumpkinGhost_5_attack_right', 'raven_4_right', 'pet_30_1_right', 'pet_14_1_left', 'pterodactylChild_2_left', 'tyrannosaurus_8_idle_right', 'tombstone_sweet_soul_10', 'penguin_8_right', 'demonicImp_11_left', 'battle_royale_spawn', 'hornet_6_left', 'hornet_1_right', 'alienBigEye_4_right', 'pet_26_2_right', 'alienBigEye_3_left', 'yeti', 'snowyOwl_5_right', 'cloud4', 'scytheAttack2', 'pet_35_1_left', 'statue_1_with_vegetation', 'pet_27_4_right', 'easterRabbit_5_right', 'demonicBat_4_right', 'alienFruit3', 'skull_3_left', 'pet_22_5_left', 'mammoth_5_idle_right', 'pet_15_5_left', 'easterRabbit_15_right', 'mammoth_10_right', 'lemming_2_idle_right', 'crate', 'swampMonster', 'crocodile_2_idle_left', 'snowyOwl_3_right', 'ghost_2_left', 'pet_33_2_right', 'pumpkinGhost_3_right', 'ghostlyReaper_1_right', 'pet_23_4_right', 'turkey_2_right', 'parrot_4_right', 'pumpkin_spawn', 'pelican_2_left', 'standard', 'smallDemon_3_right', 'invisible_tile', 'tyrannosaurus_5_right', 'infection', 'background_space_2', 'pumpkinGhost_5_left', 'swampMonster_1_left', 'dirt_top_graveyard_1', 'crocodile_7_right', 'tyrannosaurus_6_left', 'worm_2_right', 'pumpkinGhost_6_right', 'dirt_graveyard_3', 'dragon_3_right', 'waterDrop', 'tombstone_8', 'mammoth_1_left', 'pet_3', 'tree_2_bright_green', 'turkey', 'turkey_1_left', 'worm_9_right', 'demonicImp_17_right', 'gem_2', 'tombstone_broken_heart_1', 'arena_tile_top_2', 'crocodile_10_left', 'crocodile_11_left', 'pet_26_2_left', 'giantRat_5_right', 'piranha_1_left', 'worm_7_right', 'pterodactyl_3_right', 'pet_15_2_left', 'tombstone_wooden_5', 'Black\x20Widow', 'beehive_4', 'snake_4_idle_left', 'ice_right', 'meat', 'frog\x20hunter', 'owl_3_right', 'background_snow_bottom', 'arena', 'yeti_6_idle_left', 'stoneEater_3_left', 'worm_12_idle_right', 'grimReaper_2_attack_right', 'pet_15_4_right', 'stars_lvlup_2', 'stork_1_right', 'evilBat_3_right', 'background_sea_bottom', 'torch_3', 'lemming_12_left', 'zombie_6_left', 'butterfly_5_left', 'pet_30_4_left', 'pterodactylChild_6_left', 'mammoth_3_right', 'mouse_6_left', 'pet_28_3_left', 'owl_9_left', 'water2_1', 'duck_1_left', 'evilRat_5_left', 'mammoth_8_right', 'starFruit', 'pet_33_3_left', 'pet_6_4_right', 'alienEye_2_right', 'swampMonster_4_left', 'snake_7_idle_left', 'mammoth_5_left', 'blackWidow_7_idle_right', 'bear_trap_1', 'mammoth_2_right', 'pet_31_3_left', 'pet_5_3_right', 'blackWidow_4_left', 'onObtainAttack', 'alienEye_4_left', 'halloweenGhost_3_idle_left', 'easterRabbit_1_idle_right', 'yeti_3_left', 'tombstone_sweet_soul_8', 'pet_28_4_left', 'dirt_top_graveyard_4', 'worm_2_left', 'tombstone_wooden_3', 'crocodile_7_idle_right', 'snowyOwl_4_left', 'stork', 'pet_4_2_left', 'crocodile_6_idle_right', 'pet_36_4_left', 'alienBigEye_8_left', 'tyrannosaurus_4_left', 'lemming_4_idle_right', 'frog_10_idle_left', 'eagle_3_left', 'vulture_5_left', 'owl_5_right', 'alienAngryEye_6_right', 'dirt6', 'pigeon_6_right', 'house_5', 'pet_4_3_right', 'hawk_1_left', 'pet_17_1_right', 'evilRat_spawn', 'snowyOwl_3_left', 'crate_spawn', 'blackHole_16', 'demonicImp_10_right', 'stars_lvlup', 'pet_19_1_left', 'skill_flowerLove', 'ghostlyReaper_3_attack_right', 'pet_8', 'ghostlyReaper_10_right', 'hornet_9_left', 'tombstone_pixel_2', 'worm_4_right', 'mouse_7_idle_left', 'zombie_16_right', 'halloweenGhost_1_idle_left', 'dragon_1_left', 'pet_18_4_left', 'eggRed_spawn', 'pelican_2_right', 'crocodile_11_idle_left', 'pompadourCotinga_1_left', 'easterRabbit_3_idle_left', 'exploding_skull_8', 'crocodile_11_idle_right', 'ghost_3_right', 'pet_18_2_left', 'turtle_3_left', 'pet_23_4_left', 'ghost_1_right', 'skill_poisonSwampMonster', 'zombie_15_idle_left', 'diving', 'snake_9_idle_left', 'eagle_3_right', 'turkey_8_left', 'raven_7_left', 'grimReaper_6_idle_left', 'exploding_skull', 'alienBigEye_11_right', 'hornet_6_right', 'pet_13_1_right', 'demonicImp_7_left', 'pet_6', 'pet_23_2_right', 'crab_4', 'pet_16_1_right', 'easterRabbit_15_left', 'pet_11_5_left', 'duck_3_left', 'blackHole_11', 'armor_breaking_effect', 'zombie_8_idle_left', 'pet_1_7_right', 'raven_2_left', 'evilRat', 'mummy_1_right', 'pet_22_4_left', 'tombstone_talos_2', 'blackWidow_4_right', 'pigeon', 'grimReaper_2_flying_left', 'falcon_1_left', 'frog_2_idle_right', 'pet_15_1_left', 'pet_25_8_left', 'blackWidow_3_idle_left', 'lava_rising', 'pet_34_1_left', 'shark_spawn', 'background_snow_3', 'flying_right', 'HIDE', 'pet_3_4_right', 'arena_tile_fill', 'shuriken', 'kingJustice_2', 'mouse_4_left', 'tyrannosaurus_11_right', 'bat_1_right', 'pet_3_2_right', 'pet_29_4_right', 'alienEye_9_right', 'mummy_2_left', 'swampMonster_17_right', 'demonicEggEater_3_left', 'pet_30_3_left', 'easterRabbit_3_right', 'pet_35_2_left', 'commonBlackbird', 'blackWidow_4_idle_right', 'ghostlyReaper_11_attack_right', 'zombie_4_right', 'redBird_2_left', 'blackHole_27', 'Pumpkin\x20Ghost', 'rock_3_grey', 'stoneEater_6_right', 'mammoth_10_left', 'tyrannosaurus_9_idle_left', 'bubble_10', 'snake_1_idle_left', 'pet_29_2_left', 'exploding_skull_4', 'pet_23_1_right', 'fireworks_9', 'pet_4_4_left', 'spike_trap_bg_12', 'zombie_13_left', 'swampMonster_12_left', 'yeti_2_idle_right', 'jungleBottom', 'crab_1', 'pet_15_3_left', 'overfedAlienBat_2_left', 'ghostlyReaper_2_attack_left', 'skull_2_right', 'pumpkinGhost_4_attack_left', 'ghost_7_right', 'penguin_1_idle_right', 'background_space_4', 'tyrannosaurus_8_right', 'smallDemon_4_left', 'smallDemon_5_left', 'pipe_background', 'fireworks2_6', 'bubble_7', 'eagle_1_right', 'tombstone_broken_heart_8', 'pet_13_1_left', 'tyrannosaurus_6_right', 'fishPink_5_right', 'pet_12_3_left', 'bomb_7', 'skill_infection', 'tyrannosaurus_1_idle_left', 'starFruit_spawn', 'giantRat_1_right', 'pet_35', 'tombstone_skeleton_10', 'dirt3', 'pet_32_6_left', 'mummy_spawn', 'explosion_7_left', 'ghostlyReaper_16_left', 'swampMonster_11_left', 'hawk', 'alienEye_1_left', 'worm_6_idle_left', 'tombstone_sweet_soul_4', 'bomb_4', 'pigeon_4_left', 'shark', 'snake_5_idle_right', 'tombstone_skeleton_1', 'dragon_2_right', 'penguin_4_right', 'tyrannosaurus_5_idle_left', 'stork_4_right', 'alienEye_8_left', 'penguin_3_idle_right', 'worm_9_idle_left', 'grimReaper_1_idle_right', 'vulture_2_left', 'lava_mirrored', 'arena_torch_5', 'pterodactyl', 'penguin_10_right', 'phoenix_3_left', 'sand', 'mine_cart', 'zombie_14_right', 'hen_2_right', 'toTheMoon', 'pet_9_8_left', 'pet_17_3_right', 'mammoth_1_right', 'pet_8_4_right', 'Cosmic\x20Angry\x20Eye', 'mouse_9_idle_right', 'pterodactylChild_5_left', 'lava_bubble_3', 'length', 'scytheAttack3', 'ghost_6_right', 'owl_4_left', 'pet_24_3_right', 'ghostlyReaper_12_right', 'beehive_5', 'penguin_7_right', 'easterRabbit_14_right', 'zombie_9_idle_left', '579812JRitOy', 'snow_animation_16', 'yeti_2_right', 'fireworks2_13', 'halloweenGhost_8_idle_left', 'pet_5_3_left', 'yeti_5_idle_right', 'pet_4_8_right', 'pet_25_6_right', 'pet_1_6_left', 'background_space_1', 'hen_4_right', 'mouse_2_idle_right', 'pet_14_2_left', 'bubble_4', 'frog_11_idle_right', 'crate_5', 'blackWidow_6_idle_right', 'spike_trap_bg_1', 'stalk_light_green', 'pet_17_1_left', 'pet_11_7_right', 'swampMonster_6_right', 'turtle_6_right', 'demonicImp_4_right', 'right', 'alienBigInsect_4_idle_right', 'yeti_spawn', 'pet_5_1_left', 'duck', 'raven', 'zombie_14_left', 'blackWidow_2_idle_left', 'stoneSkin', 'shark_1_left', 'pompadourCotinga_2_right', 'eagle_1_left', 'evilBat_2_right', 'BACKGROUND', 'demonicImp_15_left', 'pet_34_5_left', 'blackHole_21', 'easterRabbit_4_left', 'pet_8_4_left', 'pet_10_5_left', 'pet_16_5_left', 'commonBlackbird_3_left', 'pet_30_1_left', 'crocodile_6_left', 'easterRabbit_10_left', 'parrot_3_left', 'pet_12_2_right', 'alienEye_9_left', 'eagle_4_left', 'tombstone_skeleton_2', 'arena_tile_fill_breakable', 'alienBigInsect_2_idle_left', 'alienBug_1_left', 'easterRabbit_10_right', 'pet_22_6_left', 'ghostlyReaper_9_right', 'alienEye_2_left', 'demonicImp_1_right', 'blackWidow_7_left', 'wooden_doors_desert', 'pet_35_2_right', 'mosquito_4_left', 'phoenix', 'ghostlyReaper_11_left', 'smallDemon_1_left', 'crocodile_9_right', 'piranha_1_right', 'crocodile_5_left', 'parrot_4_left', 'mummy_2_idle_right', 'pet_7_4_right', 'mummy_2_idle_left', 'starfish3', 'zombie_12_right', 'stars_lvlup_3', 'fireworks_2', 'crocodile', 'frog', 'frog_6_idle_left', 'br_portal_5', 'flower_pink', 'mammoth_6_idle_left', 'ghostlyReaper_13_attack_left', 'echolocation', 'pet_7_4_left', 'giantRat_5_left', 'worm_12_idle_left', 'worm_8_left', 'tombstone_wooden_8', 'currant', 'snake_5_right', 'undefined', 'wasp', 'penguin_5_left', 'snow_animation_15', 'flower\x20love', 'halloweenGhost_4_idle_left', 'fireworks2_2', 'alienBigEye_9_left', 'bear_trap_2', 'jungleTree1', 'pet_22_2_left', 'dirt1', 'turtle_3_idle_left', 'Pumpkin', 'alienAngryEye', 'zombie_7_idle_right', 'evilRat_3_left', 'tyrannosaurus_9_right', '23835NgqZaD', 'pet_20_3_left', 'explosion_4_left', 'tombstone_talos_1', 'ghostlyReaper_15_left', 'seagull_3_left', 'pet_24_5_right', 'bread_spawn', 'mouse_9_idle_left', 'parrot_1_left', 'pet_5_5_right', 'layEgg', 'demonicEggEater_3_right', 'dirt_top4', 'demonicImp_16_right', 'tombstone_pixel_1', 'pet_22_3_right', 'snake_4_left', 'turkey_9_left', 'ectoplasm_fire', 'mummy_4_right', 'pet_25_2_right', 'fireball_6_left', 'mouse_1_idle_right', 'tombstone_broken_heart_10', 'easterRabbit_9_right', 'smallDemon_8_left', 'tombstone_talos_8', 'pet_1_8_right', 'pumpkinGhost_2_right', 'snake_19_idle_right', 'snow_animation_11', 'stars_lvlup_1', 'blackHole_23', 'giantRat_3_right', 'turtle_7_left', 'worm_5_right', 'grimReaper_6_attack_left', 'halloweenPumpkin_spawn', 'tombstone_talos_5', 'snake_3_idle_left', 'lemming_14_left', 'sprites', 'tombstone_stone_5', 'BOSS', 'snow_animation_9', 'starfish2', 'worm_11_idle_right', 'bread', 'smallDemon_2_right', 'overfedAlienBat_1_right', 'space_rock_2', 'pet_35_4_right', 'sting', 'pompadourCotinga_4_left', 'evilRat_3_right', 'stork_2_left', 'stork_8_left', 'grimReaper_3_idle_left', 'butterfly_7_left', 'boat_2', 'pet_18_3_right', 'crocodile_9_left', 'Cosmic\x20Eye', 'pet_27_3_left', 'mouse_4_idle_right', 'tyrannosaurus_15_left', 'tyrannosaurus_14_right', 'pet_15_4_left', 'tombstone_stone_6', 'ghost_4_right', 'lemming_spawn', 'fireworks_1', 'turtle_2_idle_left', 'raven_5_right', 'smallDemon_4_right', 'pumpkin_3_right', 'parrot_5_left', 'pet_22_1_left', 'spike_trap_bg_13', 'pet_9_7_left', 'alienBigInsect_5_idle_right', 'zombie_9_idle_right', 'pet_31_5_left', 'easterRabbit_3_left', 'background_brown', 'butterfly_2_left', 'grimReaper_5_idle_right', 'mouse_8_right', 'mouse_8_idle_left', 'easterRabbit_13_idle_left', 'tyrannosaurus_10_right', 'pet_10_8_right', 'duck_2_left', 'explosion_3_right', 'water_splash', 'raven_3_left', 'pet_7_3_left', 'worm_2_idle_right', 'pet_10_6_right', 'executioner_3', 'vulture_8_left', 'pet_24_1_right', 'snowyOwl_7_right', 'tombstone_demonic_2', 'arctic_spawn', 'zombie_5_right', 'arena_torch_1', 'pet_9_1_right', 'tombstone_talos_4', 'swampMonster_1_right', 'fear', 'cloud1', 'pet_11', 'demonicEggEater_5_right', 'pet_26', 'easterRabbit_11_left', 'raven_4_left', 'alienAngryEye_3_right', 'boss1_2_left', 'FOOD', 'arena_doors_2', 'piranha_5_right', 'pet_28_2_right', 'mine_buffer', 'crocodile_4_idle_left', 'evilBat_3_left', 'background_lightblue_to_purple', 'background_volcano_2', 'seed_spawn', 'pet_25_1_right', 'grimReaper_3_attack_right', 'pet_20_1_right', 'turkey_5_right', 'wasp_2_left', 'pet_31_6_left', 'explosion_1_right', 'immortality', 'stork_9_left', 'hornet_4_left', 'yeti_1_right', 'pet_21_2_right', 'mummy_9_left', 'blackHole_4', 'explosion', 'easterRabbit_2_idle_left', 'bones', 'easterRabbit_8_idle_right', 'hen_2_left', 'fireworks2_14', 'mummy_3_idle_right', 'grimReaper_2_attack_left', 'turkey_6_left', 'boss1_3_left', 'stork_8_right', 'pompadourCotinga', 'tombstone_coffin_4', 'tombstone_flowers_2', 'wasp_2_right', 'grimReaper_5_flying_right', 'staticCanvas', 'Demonic\x20Angel', 'vulture_6_left', 'lava_bubble_12', 'flower_red', 'lemming_2_left', 'turtle_2_idle_right', 'blackWidow_8_right', 'butterfly_8_right', 'grimReaper_5_idle_left', 'pumpkin_1_left', 'lava_bubble_4', 'background_desert_3', 'pumpkin_3_left', 'thickSkin', 'evilBat_4_left', 'skill_bloodthirsty', 'blackHole', 'skill_dig', 'tombstone_broken_heart_6', 'seagull', 'tyrannosaurus_5_left', 'easterRabbit_12_right', 'zombie_1_idle_left', 'tombstone_coffin_2', 'pet_20_1_left', 'easterRabbit_11_idle_right', 'pet_32_4_right', 'frog_3_idle_left', 'pet_36_1_right', 'pet_4_2_right', 'pigeon_5_left', 'pet_6_4_left', 'tombstone_stone_7', 'fireball_4_left', 'worm_6_left'];
    _0x34d5 = function() {
        return _0x26c3e1;
    }
    ;
    return _0x34d5();
}
for (var i = 0x0; i < Object[_0x35cdcb(0x46d)](game[_0x35cdcb(0x3e6)])['length']; i++) {
    var object = game[_0x35cdcb(0x3e6)][Object[_0x35cdcb(0x46d)](game[_0x35cdcb(0x3e6)])[i]];
    if (object[_0x35cdcb(0x7a7)] == objectType[_0x35cdcb(0x328)])
        continue;
    object[_0x35cdcb(0x69d)] = i,
    objectsByUniqueIdArr[i] = object;
    if (object[_0x35cdcb(0x7a7)] == objectType[_0x35cdcb(0x51f)])
        object[_0x35cdcb(0x6d3)] = [];
}
for (var i = 0x0; i < Object[_0x35cdcb(0x46d)](game[_0x35cdcb(0x3a1)])[_0x35cdcb(0x97f)]; i++) {
    var skill = game['skills'][Object[_0x35cdcb(0x46d)](game[_0x35cdcb(0x3a1)])[i]];
    skill['func'] = function() {
        return !![];
    }
    ;
}
var animationsById = []
  , animationsId = [];
for (var o = 0x0; o < Object[_0x35cdcb(0x46d)](game['objectsDef'])[_0x35cdcb(0x97f)]; o++) {
    var object = game[_0x35cdcb(0x3e6)][Object['keys'](game['objectsDef'])[o]];
    if (typeof object[_0x35cdcb(0x3dc)] !== _0x35cdcb(0x9e9))
        for (var i = 0x0; i < Object['keys'](object[_0x35cdcb(0x3dc)])[_0x35cdcb(0x97f)]; i++) {
            var animation = Object[_0x35cdcb(0x46d)](object[_0x35cdcb(0x3dc)])[i];
            if (typeof animationsId[animation] !== _0x35cdcb(0x9e9))
                continue;
            animationsId[animation] = animationsById['length'],
            animationsById[animationsById['length']++] = animation;
        }
}
for (var i = 0x0; i < Object[_0x35cdcb(0x46d)](game[_0x35cdcb(0x3e6)])['length']; i++) {
    var object = game['objectsDef'][Object['keys'](game[_0x35cdcb(0x3e6)])[i]];
    if (object['staticCanvas'] === !![])
        continue;
    if ((object[_0x35cdcb(0x7a7)] == objectType['TILE'] || object[_0x35cdcb(0x7a7)] == objectType['BACKGROUND'] || object[_0x35cdcb(0x7a7)] == objectType[_0x35cdcb(0x29d)]) && (typeof object[_0x35cdcb(0xaef)] === _0x35cdcb(0x9e9) || object[_0x35cdcb(0xaef)] == 0x1) && Object[_0x35cdcb(0x46d)](object[_0x35cdcb(0x3dc)])[_0x35cdcb(0x97f)] <= 0x1 && object[_0x35cdcb(0x3dc)][object[_0x35cdcb(0x71d)]][_0x35cdcb(0xa25)][_0x35cdcb(0x97f)] <= 0x1 && object[_0x35cdcb(0xa9b)] !== ![])
        object[_0x35cdcb(0xa9b)] = !![];
}

