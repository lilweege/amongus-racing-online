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
}

module.exports = Game;
