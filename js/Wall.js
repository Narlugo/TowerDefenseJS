function Wall() {
	this.x = 865;
	this.y = 790; 
	this.nbcolumn = 5;
	this.nbrow = 6;
	this.wall = new Group();

	this.show = function() {
		this.wall.removeSprites();
		for(var r = 0; r<this.nbrow; r++) {
            for(var c = 0; c<this.nbcolumn; c++) {
                var brick = createSprite(this.x+42*r,this.y-22*c,40,20);
                brick.shapeColor = color(120,120,120);
                this.wall.add(brick);
                brick.immovable = true;
            }
        }
	};

	this.addRow = function() {
		this.nbcolumn++;
	};

	this.removeRow = function() {
		this.nbcolumn--;
	};
}