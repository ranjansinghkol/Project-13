var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var red_b, green_b, blue_b, pink_b

var score = 0

function preload(){
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png")
}

function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
}

function draw() {
  background(0);

  textSize(40);
  text("Score: "+score, 200, 50);

  if(keyDown("space")){
    createArrow();
  }

  // moving ground
  scene.velocityX = -3 

  if (scene.x < 0){
    scene.x = scene.width/2;
  }
  
  //moving bow
  bow.y = World.mouseY
  
  // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();  
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1, 4));
  
  if(World.frameCount%100==0) {
    switch(select_balloon){
      case 1:
        redBalloon();
        break;
      case 2:
        greenBalloon();
        break;
      case 3:
        blueBalloon();
        break;
      case 4:
        pinkBalloon();
        break;
      default:
        break;
    }
  }

  drawSprites();
}

function mouseClicked(){
  createArrow();
}

// Creating  arrows for bow
function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  red_b = createSprite(0 , random(20, 370), 10, 10);
  red_b.addImage(red_balloonImage);
  red_b.velocityX = 3;
  red_b.lifetime = 150;
  red_b.scale = 0.1;
  red_b.depth = bow.depth
  bow.depth ++;
}

function blueBalloon() {
  //write code for spwaning blue balloons
  blue_b = createSprite(0, random(20, 370), 10, 10);
  blue_b.addImage(blue_balloonImage);
  blue_b.velocityX = 3;
  blue_b.lifetime = 150;
  blue_b.scale = 0.1;
  blue_b.depth = bow.depth
  bow.depth ++;
}

function greenBalloon() {
  //write code for spwaning green balloons
  green_b = createSprite(0, random(20, 370), 10, 10);
  green_b.addImage(green_balloonImage);
  green_b.velocityX = 3;
  green_b.lifetime = 150;
  green_b.scale = 0.1;
  green_b.depth = bow.depth
  bow.depth ++;
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  pink_b = createSprite(0, random(20, 370), 10, 10);
  pink_b.addImage(blue_balloonImage);
  pink_b.velocityX = 3;
  pink_b.lifetime = 150;
  pink_b.scale = 0.1;
  pink_b.depth = bow.depth
  bow.depth ++;
}