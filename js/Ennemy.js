function Ennemy() {
	this.type;
	this.img;
	this.cry;

	this.sprite;

	this.x;
	this.y;

	this.init = function(typeEnneemi, x, y) {
		this.type = typeEnneemi;
		this.img  = mechant1Draw;
		this.cry = mechant1Cry;
		this.x = x;
		this.y = y;

		this.sprite = createSprite(this.x, this.y);
		this.sprite.addImage(this.img);
  		this.sprite.setSpeed(5, 0);
  		this.scream();
		
	}

	this.scream = function() {
		this.cry.setVolume(0.01);
		this.cry.play();
	}

	this.update = function() {
		if(this.sprite.position.x==650 && this.sprite.position.y == 200) this.sprite.setSpeed(5,90);
		if(this.sprite.position.x==650 && this.sprite.position.y == 400) this.sprite.setSpeed(5,180);
		if(this.sprite.position.x==130 && this.sprite.position.y == 400) this.sprite.setSpeed(5,90);
		if(this.sprite.position.x==130 && this.sprite.position.y == 610) this.sprite.setSpeed(5,0);
		if(this.sprite.position.x==840 && this.sprite.position.y == 610){
			this.death();
		}
	}

	this.death = function() {
		this.sprite.position.x=1000;
		this.sprite.position.y=1000;
		this.sprite.remove();
		this.sprite.visible=false;
		son_explosion.play();
		wallTrump.removeRow();
		wallTrump.show();
	}
}