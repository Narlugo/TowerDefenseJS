// variables
var money = 2000;
var wallTrump;
var trump;
var enemy;
var weaponChoose;
var selected;

// fonction
function preload() {
  // Image
  trump = loadImage("img/Trump.png");
  tower = loadImage("img/Tower.png");
  cabane = loadImage("img/Cabane.png");
  map = loadImage("img/Map.png");
  moneyImg = loadImage("img/TrumpMoney.png");
  son_explosion = loadSound('song/wallBroke.m4a');

  turretImg = loadImage("img/Tower.png");
  canonImg = loadImage("img/canon.png");
  bombeImg = loadImage("img/bombe.png");
  tankImg = loadImage("img/tank.png");

  mechant1Cry = loadSound("song/mechant1.mp3");
  mechant1Draw = loadImage("img/mechant1.png");
  mechant2Cry = loadSound("song/mechant2.mp3");
  mechant2Draw = loadImage("img/mechant2.png");
  mechant3Cry = loadSound("song/mechant3.mp3");
  mechant3Draw = loadImage("img/mechant3.png");
  mechant4Cry = loadSound("song/mechant4.mp3");
  mechant4Draw = loadImage("img/mechant4.png");



  fontRegular = loadFont("font/THE_DONALD.ttf");
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	wallTrump = new Wall();
  trump = new Trump();
  enemy = new Ennemy();
  defense = new Defense();
  canon = new Defense();
  tank = new Defense();
  turret = new Defense();
  bombe = new Defense();

  selected = createSprite(mouseX,mouseY);
  selected.visible = false;

  enemy.init("mechant4",200,200);

  canon.init("canon",50,50);
  tank.init("tank",150,50);
  turret.init("turret",250,50);
  bombe.init("bombe",350,50);


  /*canon = createSprite(50,50);
  canon.addImage(canonImg);
  tank = createSprite(150,50);
  tank.addImage(tankImg);
  turret = createSprite(250, 50);
  turret.addImage(turretImg);
  bombe = createSprite(350, 50);
  bombe.addImage(bombeImg);*/
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

  fill(0).strokeWeight(0).textSize(16);
  textFont(fontRegular);
  text(money,720,80);

  selected.position.x = mouseX;
  selected.position.y = mouseY;

  drawSprites();
}

/*function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}*/

function mousePressed(){
  selected.visible = true;
  if (dist(mouseX, mouseY, 50, 50) < 75) {
    weaponChoose = "canon";
    selected.addImage(canonImg);
  }
  else if (dist(mouseX, mouseY, 150, 50) < 75) {
    weaponChoose = "tank";
    selected.addImage(tankImg);
  }
  else if (dist(mouseX, mouseY, 250, 50) < 75) {
    weaponChoose = "turret";
    selected.addImage(turretImg);
  }
  else if (dist(mouseX, mouseY, 350, 50) < 75) {
    weaponChoose = "bombe";
    selected.addImage(bombeImg);
  }
  else {
    switch (weaponChoose) {
      case "canon":
        if(money-canon.cost >= 0) {
          defense.init("canon",mouseX,mouseY);
          money-=defense.cost;
        }
        break;
      case "tank":
        if(money-tank.cost >= 0) {
          defense.init("tank",mouseX,mouseY);
          money-=defense.cost;
        }
        break;
      case "turret":
        if(money-turret.cost >= 0) {
          defense.init("turret",mouseX,mouseY);
          money-=defense.cost;
        }
        break;
      case "bombe":
        if(money-bombe.cost >= 0) {
          defense.init("bombe",mouseX,mouseY);
          money-=defense.cost;
        }
        break;
      default:
        break;
    }
  }
}
