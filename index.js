let Game = require('./game.js');
let Player = require('./player.js');
let lobby = new Game();

console.log("runningg");
let location = '/public';
let express = require('express');
let app = express();
let serv = require('http').createServer(app);
app.get('/', (req, res) => {
	res.sendFile(__dirname + location + '/index.html');
});
app.use(location, express.static(__dirname + location));
let port = process.env.PORT || 8080;
serv.listen(port);


let SOCKET_LIST = {};
let socket = require('socket.io');
let io = socket(serv);
io.sockets.on('connection', (socket) => {
	console.log(`User ${socket.id} connected`);
	SOCKET_LIST[socket.id] = socket;

	let self = new Player(socket.id);
	socket.on('keyPress', (keys) => {
		self.keys = keys;
	});
	lobby.addPlayer(socket.id, self);

	socket.on('disconnect', () => {
		console.log(`User ${socket.id} disconnected`);
		lobby.removePlayer(socket.id);
		delete SOCKET_LIST[socket.id];
	});
});

const FR = 30;
setInterval(() => {
	lobby.gameLoop();
	let data = {
		players: lobby.players
	};
	for (let socket in SOCKET_LIST) {
		SOCKET_LIST[socket].emit('update', data);
	}
}, 1000 / FR);
