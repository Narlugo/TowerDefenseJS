// variables
var score = 0;
var wallTrump;
var trump;
var enemy;
var weaponChoose;

// fonction
function preload() {     
  // Image
  trump = loadImage("img/Trump.png");
  tower = loadImage("img/Tower.png");
  cabane = loadImage("img/Cabane.png");
  map = loadImage("img/Map.png");

  turretImg = loadImage("img/Tower.png");
  canonImg = loadImage("img/canon.png");
  bombeImg = loadImage("img/bombe.png");
  tankImg = loadImage("img/tank.png");

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
  
  canon = createSprite(50,50);
  canon.addImage(canonImg);
  tank = createSprite(150,50);
  tank.addImage(tankImg);
  turret = createSprite(250, 50);
  turret.addImage(turretImg);
  bombe = createSprite(350, 50);
  bombe.addImage(bombeImg);
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

/*function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}*/

function mousePressed(){
  if (dist(mouseX, mouseY, 50, 50) < 75) {
    weaponChoose = "canon";
  }
  else if (dist(mouseX, mouseY, 150, 50) < 75) {
    weaponChoose = "tank";
  }
  else if (dist(mouseX, mouseY, 250, 50) < 75) {
    weaponChoose = "turret";
  }
  else if (dist(mouseX, mouseY, 350, 50) < 75) {
    weaponChoose = "bombe";
  }
  else {
    switch (weaponChoose) {
      case "canon":
        selected = createSprite(mouseX,mouseY);
        selected.addImage(canonImg);
        break;
      case "tank":
        selected = createSprite(mouseX,mouseY);
        selected.addImage(tankImg);
        break;
      case "turret":
        selected = createSprite(mouseX,mouseY);
        selected.addImage(turretImg);
        break;
      case "bombe":
        selected = createSprite(mouseX,mouseY);
        selected.addImage(bombeImg);
        break;
      default:
        break;
    }
  }
}