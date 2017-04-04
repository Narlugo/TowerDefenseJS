function Trump() {
	this.x;
	this.y;

	this.img = trumpImg;

	this.show = function(posy) {
		image(this.img, 840, posy);
	}
}
