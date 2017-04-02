function Defense() {
	this.x;
	this.y;

	this.type;
	this.img;
	this.cost;

	this.rate_of_fire;
	this.attack_range;
	this.damage;
	this.place_range;

	this.sprite;

	this.init = function(type, xpos, ypos) {
		this.type = type;
		this.x = xpos;
		this.y = ypos;

		this.sprite = createSprite(this.x,this.y);
		switch(this.type) {
			case "canon":
				this.sprite.addImage(canonImg);
				this.cost = 500;
				break;
			case "tank":
				this.sprite.addImage(tankImg);
				this.cost = 1500;
				break;
			case "turret":
				this.sprite.addImage(turretImg);
				this.cost = 2000;
				break;
			case "bombe":
				this.sprite.addImage(bombeImg);
				this.cost = 250;
				break;
			default:
				break;
		}

	}

	this.shoot = function(enemmy,bullet){
		enemmy.remove();
		bullet.remove();
	}

}
