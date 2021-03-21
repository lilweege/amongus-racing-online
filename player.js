class Player {
	constructor() {
		this.keys = {
			l: false,
			r: false,
			u: false,
			d: false
		};
		this.vel = {
			x: 10,
			y: 10
		}
		this.pos = {
			x: 250,
			y: 250
		};
	}

	update() {
		if (this.keys.r != this.keys.l) {
			if (this.keys.r) this.pos.x += this.vel.x;
			else this.pos.x -= this.vel.x;
		}
		if (this.keys.u != this.keys.d) {
			if (this.keys.u) this.pos.y -= this.vel.y;
			else this.pos.y += this.vel.y;
		}
	}

}

module.exports = Player;
