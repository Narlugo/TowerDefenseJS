var trump;
var mechant;
var score;
var ROWS;
var COLUMNS;
var bricks;
var trumpy;
COLUMNS = 10;
ROWS = 10;
score = 0;
trumpy = 450;
function preload() {
	
  // Image
  trump = loadImage("assets/Trump.png");
  tower = loadImage("assets/Tower.png");
  cabane = loadImage("assets/Cabane.png");
  map = loadImage("assets/Map.png");
  
  
  
  //Sons
  son_explosion = loadSound('son/wallBroke.m4a');
  son_barack = loadSound('son/yeswecan.m4a');
  son_meuf = loadSound('son/fille.m4a');
  son_ennemi = loadSound('son/AllahuAkbar');
  son_gringo = loadSound('son/caramba.mp3');
  son_trump = loadSound('son/trump.m4a');
  
}


function setup() {
	createCanvas(1200, 800);
	
	bricks = new Group();
	towerGr = new Group();
	mechant = new Group();
	
	createMechant(200,200);
	createMechant(300,200);
	
	wall = new Wall();
	wall.show();
	
	imageSprite = createSprite(1000, trumpy);
	imageSprite.addImage(trump);
}
	

function draw() {
	
	image(map,0,0,840,800); // Set les images mais on va laisser que trump en image les autres on va faire des groupes d'objets pour les faires spawn (les monstres) / crée (tower) aux clic ou au timer et le mur on le fait grandir en fction d'un timer.
	image(cabane,0,150);
	image(tower, 300, 100);
	
	
	for(var i=0; i<allSprites.length; i++) {
		var s = allSprites[i];
		if(s.position.x==650 && s.position.y == 200) s.setSpeed(10,90);
		if(s.position.x==650 && s.position.y == 400) s.setSpeed(10,180);
		if(s.position.x==130 && s.position.y == 400) s.setSpeed(10,90);
		if(s.position.x==130 && s.position.y == 610) s.setSpeed(10,0);
		if(s.position.x==840 && s.position.y == 610) {
			s.remove();
			son_explosion.play();
			wall.removeRows();
			wall.show();
		}
	}
	
	text(score,width/3,50);
	if(frameCount % 20 == 0){
		score++;
	}
	
	if (wall.nbColumns == 30){
		text("Win",width/2,50);
	}
	
	
	if (wall.nbColumns < 0){
		text("Lose",width/2,50);
	}
	
	if(frameCount % 100 == 1){
        //wall.removeSprites();
        wall.addRows();
        wall.show();
    }
    
	/*if(frameCount % 100 == 0){
		//wall.remove();
		wall.addRows();
		wall.show();
		trumpy-=20;
		imageSprite = createSprite(1000, trumpy);
		//imageSprite.previousPosition.remove();
		imageSprite.addImage(trump)	
		console.log("passe");
	}*/
	
	drawSprites();
}



function createMechant(x, y) {
  var typeEnnemi = floor(random(1,5)); // Si 1 : Ennemi /2: Fille  /3: Gringo  /4: Obama
  var img  = loadImage("assets/mechant"+typeEnnemi+".png");
  
  mechant = createSprite(x, y);
  mechant.addImage(img);
  mechant.setSpeed(10, 0);
  
  switch(typeEnnemi){
	  case 1 :
				son_ennemi.play();
				break;
	  case 2 :
				son_meuf.play();
				break;
	  case 3 :
				son_gringo.play();
				break;
	  case 4 :
				son_barack.play();
				break;
	  default : break;
	}
}
