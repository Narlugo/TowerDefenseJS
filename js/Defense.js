function Defense() {
	this.x;
	this.y;

	this.rate_of_fire;
	this.damage;
	this.type;

	this.cost;

	this.show = function(type, xpos, ypos) {
		this.type = type;
		this.x = xpos;
		this.y = ypos;

		image(this.type,this.x,this.y);
	}
}