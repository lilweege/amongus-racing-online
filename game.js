let Player = require('./player.js');
class Game {
	constructor() {
		this.players = {};
	}

	addPlayer(id, player) {
		this.players[id] = player;
	}
	removePlayer(id) {
		delete this.players[id];
	}

	gameLoop() {
		for (let player in this.players) {
			this.players[player].update();
		}
	}
}

module.exports = Game;
