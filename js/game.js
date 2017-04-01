// variables
var score = 0;
var wallTrump;
var trump;
var enemy;

// fonction
function preload() {     
  // Image
  trump = loadImage("img/Trump.png");
  tower = loadImage("img/Tower.png");
  cabane = loadImage("img/Cabane.png");
  map = loadImage("img/Map.png");

  mechant1Cry = loadSound("song/mechant1.mp3");
  mechant1Draw = loadImage("img/mechant1.png");
  son_explosion = loadSound('song/wallBroke.m4a');
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	wallTrump = new Wall();
  trump = new Trump();
  enemy = new Ennemy();
  enemy.init("mechant1",200,200);
}

function draw(){
	background(255);

  image(map,0,0,840,800);
  image(cabane,0,150);
  trump.show(560 - wallTrump.nbcolumn*(20+2));
  enemy.update();

	if(frameCount % 100 == 1){
        wallTrump.addRow();
        wallTrump.show();
    }

   	drawSprites();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}