inpoot.wrapper = {};
var iw = inpoot.wrapper;
console.log("fuck");

inpoot.wrapper.keycode = {
	"backspace" : 8,
	"tab" : 9,
	"enter" : 13,
	"shift" : 16,
	"ctrl" : 17,
	"alt" : 18,
	"pause/break" : 19,
	"capslock" : 20,
	"escape" : 27,
	"space" : 32,
	"pageup" : 33,
	"pagedown" : 34,
	"end" : 35,
	"home" : 36,
	"leftarrow" : 37,
	"uparrow" : 38,
	"rightarrow" : 39,
	"downarrow" : 40,
	"insert" : 45,
	"delete" : 46,
	"0" : 48,
	"1" : 49,
	"2" : 50,
	"3" : 51,
	"4" : 52,
	"5" : 53,
	"6" : 54,
	"7" : 55,
	"8" : 56,
	"9" : 57,
	"a" : 65,
	"b" : 66,
	"c" : 67,
	"d" : 68,
	"e" : 69,
	"f" : 70,
	"g" : 71,
	"h" : 72,
	"i" : 73,
	"j" : 74,
	"k" : 75,
	"l" : 76,
	"m" : 77,
	"n" : 78,
	"o" : 79,
	"p" : 80,
	"q" : 81,
	"r" : 82,
	"s" : 83,
	"t" : 84,
	"u" : 85,
	"v" : 86,
	"w" : 87,
	"x" : 88,
	"y" : 89,
	"z" : 90,
	"leftwindowkey" : 91,
	"rightwindowkey" : 92,
	"selectkey" : 93,
	"numpad0" : 96,
	"numpad1" : 97,
	"numpad2" : 98,
	"numpad3" : 99,
	"numpad4" : 100,
	"numpad5" : 101,
	"numpad6" : 102,
	"numpad7" : 103,
	"numpad8" : 104,
	"numpad9" : 105,
	"multiply" : 106,
	"add" : 107,
	"subtract" : 109,
	"decimalpoint" : 110,
	"divide" : 111,
	"f1" : 112,
	"f2" : 113,
	"f3" : 114,
	"f4" : 115,
	"f5" : 116,
	"f6" : 117,
	"f7" : 118,
	"f8" : 119,
	"f9" : 120,
	"f10" : 121,
	"f11" : 122,
	"f12" : 123,
	"numlock" : 144,
	"scrolllock" : 145,
	"semi-colon" : 186,
	"equalsign" : 187,
	"comma" : 188,
	"dash" : 189,
	"period" : 190,
	"forwardslash" : 191,
	"graveaccent" : 192,
	"openbracket" : 219,
	"backslash" : 220,
	"closebraket" : 221,
	"singlequote" : 222
};

inpoot.wrapper.catagory = {
	Movement : "Movement",
	Action : "Action"
};

inpoot.wrapper.MoveDir = {
	Forward : "Forward",
	Backward : "Backward",
	Left : "Left",
	Right : "Right"
};

inpoot.wrapper.defaultPlayers = [{
		"number" : 1,
		"title" : "Keyboard : arrows",
		"actionMapId" : 0,
		"keyboard" : true,
		"mouse" : "false",
		"gamepad" : false,
		"options" : {},
		"gamepadIndex" : false
	}, {
		"number" : 2,
		"title" : "Keyboard : wasd",
		"keyboard" : true,
		"mouse" : "false",
		"gamepad" : false,
		"options" : {
			"gpadIndex" : false
		},
		"gamepadIndex" : false,
		"actionMapId" : 4
	}, {
		"number" : 3,
		"title" : "XBOX",
		"keyboard" : "false",
		"mouse" : "false",
		"gamepad" : "XBOX 360",
		"options" : {
			"gpadIndex" : false
		},
		"gamepadIndex" : false,
		"actionMapId" : 2
	}, {
		"number" : 4,
		"title" : "Playstation",
		"actionMapId" : 3,
		"keyboard" : "false",
		"mouse" : "false",
		"gamepad" : "Playstation 3",
		"options" : {
			"gpadIndex" : false
		},
		"gamepadIndex" : false
	}
];

inpoot.wrapper.keyboardkeyA = function (keyboardkeycode) {
	return
	[{
			"id" : 0,
			"inputs" : [{
					"type" : "keyboard",
					"text" : inpoot.getKeyboardMap(keyboardkeycode),
					"value" : keyboardkeycode
				}
			]
		}
	]
};
inpoot.wrapper.mouse = function (mouseinput) {};

inpoot.wrapper.up = function (input) {
	return {
		"descr" : iw.MoveDir.Forward,
		"category" : iw.catagory.Movement,
		"inputs" : input
	}
};
inpoot.wrapper.down = function (input) {
	return {
		"descr" : iw.MoveDir.Backward,
		"category" : iw.catagory.Movement,
		"inputs" : input
	}
};
inpoot.wrapper.left = function (input) {
	return {
		"descr" : iw.MoveDir.Left,
		"category" : iw.catagory.Movement,
		"inputs" : input
	}
};
inpoot.wrapper.right = function (input) {
	return {
		"descr" : iw.MoveDir.Right,
		"category" : iw.catagory.Movement,
		"inputs" : input
	}
	
};
inpoot.wrapper.grow = function (input) {
	return {
		"descr" : "Grow",
		"category" : iw.catagory.Action,
		"inputs" : input
	}
};
inpoot.wrapper.shrink = function (input) {
	return {
		"descr" : "Grow",
		"category" : iw.catagory.Action,
		"inputs" : input
	}
};

inpoot.wrapper.keyboardArrows = function (playerid) {
console.log("bleh");
	return {
		"name" : "Keyboard : arrows",
		"extra" : "",
		"gamepad" : false,
		"keyboard" : true,
		"mouse" : "false",
		"id" : playerid,
		"mapping" : {
			"up" : iw.up(iw.keyboardkeyA(iw.keycode.uparrow)),
			"down" : iw.down(iw.keyboardkeyA(iw.keycode.downarrow)),
			"left" : iw.left(iw.keyboardkeyA(iw.keycode.leftarrow)),
			"right" : iw.right(iw.keyboardkeyA(iw.keycode.rightarrow)),
			"grow" : iw.grow(iw.keyboardkeyA(iw.keycode.equalsign)),
			"shrink" : iw.shrink(iw.keyboardkeyA(iw.keycode.dash))
		}
	}
};

inpoot.wrapper.defaultMappings = [iw.keyboardArrows(0), {
		"name" : "Mouse",
		"extra" : "",
		"gamepad" : false,
		"keyboard" : "false",
		"mouse" : true,
		"id" : 1,
		"mapping" : {
			"up" : {
				"descr" : iw.MoveDir.Forward,
				"category" : iw.catagory.Movement,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "mouse",
								"text" : "mouse up",
								"value" : "mouse_up"
							}
						]
					}
				]
			},
			"down" : {
				"descr" : iw.MoveDir.Backward,
				"category" : iw.catagory.Movement,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "mouse",
								"text" : "mouse down",
								"value" : "mouse_down"
							}
						]
					}
				]
			},
			"left" : {
				"descr" : iw.MoveDir.Left,
				"category" : iw.catagory.Movement,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "mouse",
								"text" : "mouse left",
								"value" : "mouse_left"
							}
						]
					}
				]
			},
			"right" : {
				"descr" : iw.MoveDir.Right,
				"category" : iw.catagory.Movement,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "mouse",
								"text" : "mouse right",
								"value" : "mouse_right"
							}
						]
					}
				]
			},
			"grow" : {
				"descr" : "Grow",
				"category" : iw.catagory.Action,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "mouse",
								"text" : "left button",
								"value" : "mouse_button_left"
							}
						]
					}
				]
			},
			"shrink" : {
				"descr" : "Shrink",
				"category" : iw.catagory.Action,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "mouse",
								"text" : "right button",
								"value" : "mouse_button_right"
							}
						]
					}
				]
			}
		}
	}, {
		"name" : "XBOX",
		"extra" : "",
		"gamepad" : "XBOX 360",
		"keyboard" : "false",
		"mouse" : "false",
		"id" : 2,
		"mapping" : {
			"up" : {
				"descr" : iw.MoveDir.Forward,
				"category" : iw.catagory.Movement,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "gamepad",
								"text" : "left stick up",
								"value" : "lStick",
								"buttonType" : "axis_dual",
								"subType" : "y",
								"direction" : "up"
							}
						]
					}
				]
			},
			"down" : {
				"descr" : iw.MoveDir.Backward,
				"category" : iw.catagory.Movement,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "gamepad",
								"text" : "left stick down",
								"value" : "lStick",
								"buttonType" : "axis_dual",
								"subType" : "y",
								"direction" : "down"
							}
						]
					}
				]
			},
			"left" : {
				"descr" : iw.MoveDir.Left,
				"category" : iw.catagory.Movement,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "gamepad",
								"text" : "left stick left",
								"value" : "lStick",
								"buttonType" : "axis_dual",
								"subType" : "x",
								"direction" : "left"
							}
						]
					}
				]
			},
			"right" : {
				"descr" : iw.MoveDir.Right,
				"category" : iw.catagory.Movement,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "gamepad",
								"text" : "left stick right",
								"value" : "lStick",
								"buttonType" : "axis_dual",
								"subType" : "x",
								"direction" : "right"
							}
						]
					}
				]
			},
			"grow" : {
				"descr" : "Grow",
				"category" : iw.catagory.Action,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "gamepad",
								"text" : "right trigger",
								"value" : "rTrigger",
								"buttonType" : "button",
								"subType" : ""
							}
						]
					}
				]
			},
			"shrink" : {
				"descr" : "Shrink",
				"category" : iw.catagory.Action,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "gamepad",
								"text" : "left trigger",
								"value" : "lTrigger",
								"buttonType" : "button",
								"subType" : ""
							}
						]
					}
				]
			}
		}
	}, {
		"name" : "Playstation",
		"extra" : "",
		"gamepad" : "Playstation 3",
		"keyboard" : "false",
		"mouse" : "false",
		"id" : 3,
		"mapping" : {
			"up" : {
				"descr" : iw.MoveDir.Forward,
				"category" : iw.catagory.Movement,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "gamepad",
								"text" : "lStick up",
								"value" : "lStick",
								"buttonType" : "axis_dual",
								"subType" : "y",
								"direction" : "up"
							}
						]
					}
				]
			},
			"down" : {
				"descr" : iw.MoveDir.Backward,
				"category" : iw.catagory.Movement,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "gamepad",
								"text" : "lStick down",
								"value" : "lStick",
								"buttonType" : "axis_dual",
								"subType" : "y",
								"direction" : "down"
							}
						]
					}
				]
			},
			"left" : {
				"descr" : iw.MoveDir.Left,
				"category" : iw.catagory.Movement,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "gamepad",
								"text" : "lStick left",
								"value" : "lStick",
								"buttonType" : "axis_dual",
								"subType" : "x",
								"direction" : "left"
							}
						]
					}
				]
			},
			"right" : {
				"descr" : iw.MoveDir.Right,
				"category" : iw.catagory.Movement,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "gamepad",
								"text" : "lStick right",
								"value" : "lStick",
								"buttonType" : "axis_dual",
								"subType" : "x",
								"direction" : "right"
							}
						]
					}
				]
			},
			"grow" : {
				"descr" : "Grow",
				"category" : iw.catagory.Action,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "gamepad",
								"text" : "rTrigger",
								"value" : "rTrigger",
								"buttonType" : "button",
								"subType" : ""
							}
						]
					}
				]
			},
			"shrink" : {
				"descr" : "Shrink",
				"category" : iw.catagory.Action,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "gamepad",
								"text" : "lTrigger",
								"value" : "lTrigger",
								"buttonType" : "button",
								"subType" : ""
							}
						]
					}
				]
			}
		}
	}, {
		"name" : "Keyboard : wasd",
		"extra" : "",
		"gamepad" : false,
		"keyboard" : true,
		"mouse" : "false",
		"id" : 4,
		"mapping" : {
			"up" : {
				"descr" : iw.MoveDir.Forward,
				"category" : iw.catagory.Movement,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "keyboard",
								"text" : "w",
								"value" : "87"
							}
						]
					}
				]
			},
			"down" : {
				"descr" : iw.MoveDir.Backward,
				"category" : iw.catagory.Movement,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "keyboard",
								"text" : "s",
								"value" : "83"
							}
						]
					}
				]
			},
			"left" : {
				"descr" : iw.MoveDir.Left,
				"category" : iw.catagory.Movement,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "keyboard",
								"text" : "a",
								"value" : "65"
							}
						]
					}
				]
			},
			"right" : {
				"descr" : iw.MoveDir.Right,
				"category" : iw.catagory.Movement,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "keyboard",
								"text" : "d",
								"value" : "68"
							}
						]
					}
				]
			},
			"grow" : {
				"descr" : "Grow",
				"category" : iw.catagory.Action,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "keyboard",
								"text" : "1",
								"value" : "49"
							}
						]
					}
				]
			},
			"shrink" : {
				"descr" : "Shrink",
				"category" : iw.catagory.Action,
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "keyboard",
								"text" : "2",
								"value" : "50"
							}
						]
					}
				]
			}
		}
	}
];

//HERE ARE ALL THE OPTIONS THAT WILL BE PASSED INTO THE PLUGIN
inpoot.wrapper.pluginOptions = {
	maxPlayers : 8, //optional (defaults to 1)
	mappings : iw.defaultMappings, //optional mappings that you could set up and export
	players : iw.defaultPlayers, //optional player configs you could set up and export
	actions : { //mandatory
		up : {
			descr : iw.MoveDir.Forward,
			category : iw.catagory.Movement
		},
		down : {
			descr : iw.MoveDir.Backward,
			category : iw.catagory.Movement
		},
		left : {
			descr : iw.MoveDir.Left,
			category : iw.catagory.Movement
		},
		right : {
			descr : iw.MoveDir.Right,
			category : iw.catagory.Movement
		},
		grow : {
			descr : "Grow",
			category : iw.catagory.Action
		},
		shrink : {
			descr : "Shrink",
			category : iw.catagory.Action
		}
	}
};

inpoot.wrapper.inputInit = function () {
	inpoot.initialize(inpoot.wrapper.pluginOptions);
	console.log("inpoot initialized")
};
