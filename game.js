var keycode = {
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

//HERE ARE THE DEFAULT CONFIGURATIONS FOR MAPPINGS AND PLAYER->MAPPING ASSIGNMENTS THAT I CREATED AHEAD OF TIME AND HARDCODED
//NOTE: These are only loaded once or if the user clears all their local storage data

var keyboardkey = function (keyboardkeycode) {
	return [{
			"type" : "keyboard",
			"text" : inpoot.getKeyboardMap(keyboardkeycode),
			"value" : keyboardkeycode
		}
	]
};

var defaultMappings = [{
		"name" : "Keyboard : arrows",
		"extra" : "",
		"gamepad" : false,
		"keyboard" : true,
		"mouse" : "false",
		"id" : 0,
		"mapping" : {
			"up" : {
				"descr" : "Move Forward",
				"category" : "Movement",
				"inputs" : [{
						"id" : 0,
						"inputs" : keyboardkey(keycode.uparrow)
					}
				]
			},
			"down" : {
				"descr" : "Move Backward",
				"category" : "Movement",
				"inputs" : [{
						"id" : 0,
						"inputs" : keyboardkey(keycode.downarrow)
						
					}
				]
			},
			"left" : {
				"descr" : "Move Left",
				"category" : "Movement",
				"inputs" : [{
						"id" : 0,
						"inputs" : keyboardkey(keycode.leftarrow)
					}
				]
			},
			"right" : {
				"descr" : "Move Right",
				"category" : "Movement",
				"inputs" : [{
						"id" : 0,
						"inputs" : keyboardkey(keycode.rightarrow)
					}
				]
			},
			"grow" : {
				"descr" : "Grow",
				"category" : "Shape",
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "keyboard",
								"text" : "=+",
								"value" : "187"
							}
						]
					}
				]
			},
			"shrink" : {
				"descr" : "Shrink",
				"category" : "Shape",
				"inputs" : [{
						"id" : 0,
						"inputs" : [{
								"type" : "keyboard",
								"text" : "_-",
								"value" : "189"
							}
						]
					}
				]
			}
		}
	}, {
		"name" : "Mouse",
		"extra" : "",
		"gamepad" : false,
		"keyboard" : "false",
		"mouse" : true,
		"id" : 1,
		"mapping" : {
			"up" : {
				"descr" : "Move Forward",
				"category" : "Movement",
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
				"descr" : "Move Backward",
				"category" : "Movement",
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
				"descr" : "Move Left",
				"category" : "Movement",
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
				"descr" : "Move Right",
				"category" : "Movement",
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
				"category" : "Shape",
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
				"category" : "Shape",
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
				"descr" : "Move Forward",
				"category" : "Movement",
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
				"descr" : "Move Backward",
				"category" : "Movement",
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
				"descr" : "Move Left",
				"category" : "Movement",
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
				"descr" : "Move Right",
				"category" : "Movement",
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
				"category" : "Shape",
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
				"category" : "Shape",
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
				"descr" : "Move Forward",
				"category" : "Movement",
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
				"descr" : "Move Backward",
				"category" : "Movement",
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
				"descr" : "Move Left",
				"category" : "Movement",
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
				"descr" : "Move Right",
				"category" : "Movement",
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
				"category" : "Shape",
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
				"category" : "Shape",
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
				"descr" : "Move Forward",
				"category" : "Movement",
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
				"descr" : "Move Backward",
				"category" : "Movement",
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
				"descr" : "Move Left",
				"category" : "Movement",
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
				"descr" : "Move Right",
				"category" : "Movement",
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
				"category" : "Shape",
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
				"category" : "Shape",
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
var defaultPlayers = [{
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
//HERE ARE ALL THE OPTIONS THAT WILL BE PASSED INTO THE PLUGIN
var pluginOptions = {
	maxPlayers : 8, //optional (defaults to 1)
	mappings : defaultMappings, //optional mappings that you could set up and export
	players : defaultPlayers, //optional player configs you could set up and export
	actions : { //mandatory
		up : {
			descr : "Move Forward",
			category : "Movement"
		},
		down : {
			descr : "Move Backward",
			category : "Movement"
		},
		left : {
			descr : "Move Left",
			category : "Movement"
		},
		right : {
			descr : "Move Right",
			category : "Movement"
		},
		grow : {
			descr : "Grow",
			category : "Shape"
		},
		shrink : {
			descr : "Shrink",
			category : "Shape"
		}
	}
};

$(document).ready(function () {
	
	//start up inpoot with the options we have stored in the main.goptions object
	inpoot.initialize(pluginOptions);
	console.log("this:");
	console.log(inpoot.keyboards['wasd'][8]);
	//wire up a button on screen to trigger the default inpoot UI
	$('#activate-inpoot').click(function (e) {
		e.preventDefault();
		inpoot.openMenu();
	});
	
	//now game loop logic (cross browser requestAnimationFrame object)
	window.requestAnimationFrame = (function () {
		return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) {
			window.setTimeout(callback, 1000 / 60);
		};
	})();
	
	//get the canvas context objeect
	var c = document.getElementById('game-canvas');
	var ctx = c.getContext('2d');
	ctx.w = $('#game-canvas').width();
	console.log(ctx.w);
	
	ctx.h = $('#game-canvas').height();
	console.log(ctx.h);
	//starting data for our game
	var maxMoveDistance = 5;
	var people = [{
			x : 20,
			y : 20,
			color : '#00ff00',
			radius : 8
		}, {
			x : ctx.w - 20,
			y : 20,
			color : '#ff0000',
			radius : 8
		}, {
			x : 20,
			y : ctx.h - 20,
			color : '#0000ff',
			radius : 8
		}, {
			x : ctx.w - 20,
			y : ctx.h - 20,
			color : '#00f0f0',
			radius : 8
		}
	];
	
	//A helper function to help keep the players in the game area
	var clamp = function (value, min, max) {
		return Math.max(Math.min(value, max), min);
	};
	
	//our simple game loop
	var render = function () {
		for (var i = 0; i < people.length; i++) {
			//draw the player
			ctx.fillStyle = people[i].color;
			ctx.beginPath();
			ctx.arc(people[i].x, people[i].y, people[i].radius, 0, Math.PI * 2, true);
			ctx.closePath();
			ctx.fill();
		}
	};
	
	var update = function () {
		for (var i = 0; i < people.length; i++) {
			//update their player position
			people[i].x = clamp(Math.round(people[i].x - inpoot.action('left', i + 1).val * maxMoveDistance), 0, ctx.w);
			people[i].x = clamp(Math.round(people[i].x + inpoot.action('right', i + 1).val * maxMoveDistance), 0, ctx.w);
			people[i].y = clamp(Math.round(people[i].y - inpoot.action('up', i + 1).val * maxMoveDistance), 0, ctx.h);
			people[i].y = clamp(Math.round(people[i].y + inpoot.action('down', i + 1).val * maxMoveDistance), 0, ctx.h);
			
			//test if the radius has changed
			if (inpoot.action('grow', i + 1).val) {
				people[i].radius = Math.min(people[i].radius + inpoot.action('grow', i + 1).val, 30);
			}
			if (inpoot.action('shrink', i + 1).val) {
				people[i].radius = Math.max(people[i].radius - inpoot.action('shrink', i + 1).val, 8);
			}
		}
	};
	
	var gameLoop = function () {
		
		//uncomment to have the game area clear between each frame
		ctx.clearRect(0, 0, ctx.w, ctx.h);
		
		//IMPORTANT : Before checking action values, let inpoot get an input snapshot
		inpoot.tick();
		
		update();
		render();
		
		requestAnimationFrame(gameLoop);
	};
	
	//start the gameLoop
	requestAnimationFrame(gameLoop);
});
