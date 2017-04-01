function Trump() {
	this.x;
	this.y;

	this.img = trump;

	this.show = function(posy) {
		image(this.img, 840, posy);
	}
}