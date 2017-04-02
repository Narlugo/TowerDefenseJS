// variables
var money = 100;
var wallTrump;
var trump;
var enemy;
var weaponChoose;
var selected;
var range;

// fonction
function preload() {
  // Image
  trump = loadImage("img/Trump.png");
  tower = loadImage("img/Tower.png");
  cabane = loadImage("img/Cabane.png");
  map = loadImage("img/Map.png");
  moneyImg = loadImage("img/TrumpMoney.png");

  turretImg = loadImage("img/Tower.png");
  canonImg = loadImage("img/canon.png");
  bombeImg = loadImage("img/bombe.png");
  tankImg = loadImage("img/tank.png");

  mechant1Cry = loadSound("song/mechant1.mp3");
  mechant1Draw = loadImage("img/mechant1.png");
  son_explosion = loadSound('song/wallBroke.m4a');

  turretRangeImg = loadImage("img/rangeTurret.png");
  canonRangeImg = loadImage("img/rangeCanon.png");
  bombeRangeImg = loadImage("img/rangeBombe.png");
  tankRangeImg = loadImage("img/rangeTank.png");

  fontRegular = loadFont("font/THE_DONALD.ttf");
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	wallTrump = new Wall();
  trump = new Trump();
  enemy = new Ennemy();

  selected = createSprite(mouseX,mouseY);
  selected.visible = false;

  range = createSprite(mouseX,mouseY);
  range.visible = false;

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
  fill(255, 123, 20);
  rect(0,0,840,120, 10);
  image(moneyImg,710,10);
  image(cabane,0,150);
  trump.show(560 - wallTrump.nbcolumn*(20+2));
  enemy.update();

	if(frameCount % 100 == 1){
        wallTrump.addRow();
        wallTrump.show();
  }

  if(frameCount % 40 == 0) {
    money+=300;
  }

  fill(0).strokeWeight(0).textSize(16);
  textFont(fontRegular);
  text(money,720,80);

  selected.position.x = mouseX;
  selected.position.y = mouseY;

  range.position.x = mouseX;
  range.position.y = mouseY;

  drawSprites();
}

/*function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}*/

function mousePressed(){
  selected.depth = 15;
  range.depth = 5;
  if (dist(mouseX, mouseY, 50, 50) < 75) {
    selected.visible = true;
    range.visible = true;
    weaponChoose = "canon";
    selected.addImage(canonImg);
    range.addImage(canonRangeImg);
  }
  else if (dist(mouseX, mouseY, 150, 50) < 75) {
    selected.visible = true
    range.visible = true;
    weaponChoose = "tank";
    selected.addImage(tankImg);
    range.addImage(tankRangeImg);
  }
  else if (dist(mouseX, mouseY, 250, 50) < 75) {
    selected.visible = true;
    range.visible = true;
    weaponChoose = "turret";
    selected.addImage(turretImg);
    range.addImage(turretRangeImg);
  }
  else if (dist(mouseX, mouseY, 350, 50) < 75) {
    selected.visible = true;
    range.visible = true;
    weaponChoose = "bombe";
    selected.addImage(bombeImg);
    range.addImage(bombeRangeImg);
  }
  else {
    switch (weaponChoose) {
      case "canon":
        selected = createSprite(mouseX,mouseY);
        selected.addImage(canonImg);
        selected.depth = 15;
        range.depth = 5;
        break;
      case "tank":
        selected = createSprite(mouseX,mouseY);
        selected.addImage(tankImg);
        selected.depth = 15;
        range.depth = 5;
        break;
      case "turret":
        selected = createSprite(mouseX,mouseY);
        selected.addImage(turretImg);
        selected.depth = 15;
        range.depth = 5;
        break;
      case "bombe":
        selected = createSprite(mouseX,mouseY);
        selected.addImage(bombeImg);
        selected.depth = 15;
        range.depth = 5;
        break;
      default:
        break;
    }
  }
}
