function Ennemy() {
	this.type;
	this.cry=null;

	this.sprite;

	this.x;
	this.y;

	this.init = function(typeEnneemi, x, y) {
		this.type = typeEnneemi;
		this.x = x;
		this.y = y;

		this.sprite = createSprite(this.x, this.y);
		switch(this.type) {
			case "mechant1":
				this.sprite.addImage(mechant1Draw);
				this.cry = mechant1Cry;
				break;
			case "mechant2":
				this.sprite.addImage(mechant2Draw);
				this.cry = mechant2Cry;
				break;
			case "mechant3":
				this.sprite.addImage(mechant3Draw);
				this.cry = mechant3Cry;
				break;
			case "mechant4":
				this.sprite.addImage(mechant4Draw);
				this.cry = mechant4Cry;
				break;
			default:
				break;
		}
  		this.sprite.setSpeed(5, 0);
  		//this.scream();

	}

	this.scream = function() {
		this.cry.play();
		this.cry.setVolume(0.1);
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
