var obstacle0,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7,obstacle8,obstacle9,obstacle10,obstacle11,obstacle12,obstacle13;
var obstacle14,obstacle15,obstacle16,obstacle17,obstacle18,obstacle19,obstacle20,obstacle21,obstacle22,obstacle23,obstacle24,obstacle25,obstacle26;
var obstacle27,obstacle28,obstacle29,pacman;
function setup() {
  createCanvas(800,400);
  //top line
  obstacle0 = createSprite(400,50,700,2);
  obstacle1 = createSprite(400,60,680,2);
  //left line
  obstacle2 = createSprite(50,200,2,300);
  obstacle3 = createSprite(60,200,2,280);
  //right line
  obstacle4 = createSprite(750,200,2,300);
  obstacle5 = createSprite(740,200,2,280);
  //bottom line
  obstacle6 = createSprite(400,350,700,2);
  obstacle7 = createSprite(400,340,680,2);
  //start of pacman
  obstacle8 = createSprite(110,250,100,2);
  obstacle9 = createSprite(110,270,100,2);
  obstacle10 = createSprite(160,170,2,160);
  obstacle11 = createSprite(160,295,2,50);
  obstacle12 = createSprite(180,200,2,180);
  obstacle13 = createSprite(420,90,520,2);
  obstacle14 = createSprite(420,110,480,2);
  obstacle15 = createSprite(680,205,2,230);
  obstacle16 = createSprite(660,200,2,180);
  obstacle17 = createSprite(420,320,520,2);
  obstacle18 = createSprite(420,290,480,2);
  pacman = createSprite(70,260,10,10);
  obstacleGroup = new Group();
  obstacleGroup.add(obstacle0);
  obstacleGroup.add(obstacle1);
  obstacleGroup.add(obstacle2);
  obstacleGroup.add(obstacle3);
  obstacleGroup.add(obstacle4);
  obstacleGroup.add(obstacle5);
  obstacleGroup.add(obstacle6);
  obstacleGroup.add(obstacle7);
  obstacleGroup.add(obstacle8);
  obstacleGroup.add(obstacle9);
  obstacleGroup.add(obstacle10);
  obstacleGroup.add(obstacle11);
  obstacleGroup.add(obstacle12);
  obstacleGroup.add(obstacle13);
  obstacleGroup.add(obstacle14);
  obstacleGroup.add(obstacle15);
  obstacleGroup.add(obstacle16);
  obstacleGroup.add(obstacle17);
  obstacleGroup.add(obstacle18);
}
function draw() {
  background(0);
  if (keyIsDown(UP_ARROW)){
    pacman.velocity.y = -2;
    pacman.velocity.x = 0;
  }  
  if(keyIsDown(DOWN_ARROW)){
    pacman.velocity.y = 2;
    pacman.velocity.x = 0;
  }
  if(keyIsDown(LEFT_ARROW)){
    pacman.velocity.x = -2;
    pacman.velocity.y = 0;
  }
  if(keyIsDown(RIGHT_ARROW)){
    pacman.velocity.x = 2;
    pacman.velocity.y = 0;
  }
  pacman.bounceOff(obstacleGroup);
  drawSprites();
}