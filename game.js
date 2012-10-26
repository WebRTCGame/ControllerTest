
$(document).ready(function () {
console.log(inpoot.wrapper.keycode);
	console.log(inpoot.wrapper.inputInit());
	
	//start up inpoot with the options we have stored in the main.goptions object
	//inpoot.initialize(pluginOptions);
	inpoot.wrapper.inputInit();
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
	
	
	ctx.h = $('#game-canvas').height();
	
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
