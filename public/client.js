let socket = io();

let keys = {
	l: false,
	r: false,
	d: false,
	u: false
};

let players = {};
socket.on('update', (data) => {
	players = data.players;
});


function setup() {
	createCanvas(500, 500);
}

function draw() {
	background(200);
	for (let player in players) {
		ellipse(players[player].pos.x, players[player].pos.y, 50, 50);
	}
}

function keyReleased() {
	switch(keyCode) {
		case 65: keys.l = false; break;
		case 68: keys.r = false; break;
		case 87: keys.u = false; break;
		case 83: keys.d = false; break;
		default: break;
	}
	socket.emit("keyPress", keys);
}

function keyPressed() {
	switch(keyCode) {
		case 65: keys.l = true; break;
		case 68: keys.r = true; break;
		case 87: keys.u = true; break;
		case 83: keys.d = true; break;
		default: break;
	}
	socket.emit("keyPress", keys);
}
