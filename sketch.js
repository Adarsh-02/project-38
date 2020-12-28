var PLAY = 1;
var END = 0;
var gamestate = PLAY;
score = 0;

var bg, bg_image, invisible_ground;
var monkey,monkey_animation;
var obstacle, obstacle_image, obstacleGroup;

var banana, banana_image, foodGroup;
 

function preload() {
  bg_image = loadImage("jungle.jpg");
  monkey_animation= loadAnimation ("Monkey_01.png", "Monkey_02.png",
  "Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png",              "Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  banana_image = loadImage("banana.png");
  obstacle_image = loadImage("stone.png");
}

function setup() {
  createCanvas(windowWidth , windowHeight);
  
  bg = createSprite(windowWidth - (windowWidth/2), windowHeight/5,
  windowWidth +600, windowHeight) ;
  bg.addImage(bg_image);
  bg.scale = 2;
  bg.velocityX = -5 -(score/4);
  
  monkey = createSprite (windowWidth/6, windowHeight - 70,40,40)
  monkey.addAnimation("running",monkey_animation);
  monkey.scale = 0.1;
  
  invisible_ground = createSprite(windowWidth/2, windowHeight -40,
  windowWidth, 10);                                
                                  
  obstacleGroup = new Group();
  foodGroup = new Group();
  
}
  function draw(){
    background(220);
    
    switch(score){
      case 10: monkey.scale=0.12;
        break;
      case 20: monkey.scale=0.14;
        break;
      case 30: monkey.scale=0.16;
        break;  
      case 40: monkey.scale=0.18;
        break;  
        default:break;
          
    }
    
    drawSprites();
    
if(gamestate===PLAY) {
  if(bg.x<(windowWidth/2) - 250) {
    bg.x = windowWidth/2 +200;
  }
 if(keyDown('space')&&monkey.y >400) {
   monkey.velocityY =-20;
 }
  
  monkey.velocityY = monkey.velocityY+1;
  
  invisible_ground.visible = false;
  
  monkey.collide(invisible_ground);
  
  if(foodGroup.isTouching(monkey)) {
    score = score+2;
    foodGroup.destroyEach();
  
}
  
  if(obstacleGroup.isTouching(monkey)&& monkey.scale=== 0.1){
  gamestate = END;
  } else if (obstacleGroup.isTouching(monkey)) {
  obstacleGroup.destroyEach();
    monkey.scale = 0.1;
  }
  var index = 0;

  index = index + 1 ;
  y = displayHeight - monkey[monkey];
  monkey[index-1].x = x;
  monkey[index-1].y = y;
  monkey[index - 1].shapeColor = "red";
  camera.position.x = displayWidth/2;
  camera.position.y = monkey[index-1].y

  fruits();
  obstacles();
}
   if(gamestate=== END) {
     bg.velocityX = 0;
     obstacleGroup.setVelocityEach(0);
     obstacleGroup.setLifetimeEach(-1);
     foodGroup.setVelocityEach(0);
     foodGroup.setLifetimeEach(-1);
     monkey.velocityY = 0;
     stroke("white");
     fill("black");
     
     textSize(20);
     stroke("red");
     fill("white");
     text("Game Over", windowWidth/3 , windowHeight/3);
   }
    textSize(20);
     stroke("white");
     fill("white");
     text("Score" + score , windowWidth/3 , windowHeight/8);
    
    
  }
function fruits(){
  if(frameCount % 140 ===0){
    banana = createSprite(windowWidth +20 , windowHeight-
    Math.round(random(180,300)),20,20);
    banana.addImage(banana_image);
    banana.scale = 0.07;
    banana.velocityX = -5-(score/4);
    banana.lifetime = 400;
    foodGroup.add(banana);
  } 
}

  
function obstacles(){
  if(frameCount % 300 ===0){
    obstacle = createSprite(windowWidth +20 , windowHeight-70,40,40);
    Math.round(random(100,350))
    obstacle.addImage(obstacle_image);
    obstacle.scale = 0.18;
    obstacle.velocityX = -5-(score/4);
    obstacle.lifetime = 400;
    obstacleGroup.add(obstacle);
  } 
}
    
    
    
  
  
  
  
  
  
  
  
  
  
  
  
  


  
