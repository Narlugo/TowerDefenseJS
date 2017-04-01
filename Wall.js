function Wall(){
	this.x = 865;
	this.y = 788;
	this.nbRows = 10;
	this.nbColumns = 10,
	
	this.addRows = function(){
		this.nbColumns++;
	}
	
	this.removeRows = function(){
		this.nbColumns--;
	}
	
	this.show = function(){
		for(var r = 0; r<this.nbRows; r++)
			for(var c = 0; c<this.nbColumns; c++) {
				var brick = createSprite(this.x+42*r,this.y-22*c,40,20);
				brick.shapeColor = color(161,65,14);
				bricks.add(brick);
				brick.immovable = true;
			}
	}
}
