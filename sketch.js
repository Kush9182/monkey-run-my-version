
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivaltime=0; 
var ground
var PLAY=1;
var END=0;
var gamestate=PLAY;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  bananaGroup=createGroup()
  obstacleGroup=createGroup()}



function setup() {
  
  createCanvas(600,250)

  monkey=createSprite(100,200,10,10)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(300,230,1205,1)
}


function draw() {

  background(220)
 
  ground.velocityX=-3
  monkey.collide(ground)
  monkey.velocityY=monkey.velocityY+0.8
 
  fill(0)
  textSize(20)
  text("Survival Time = "+survivaltime,10,30)
  
  
  if(ground.x<0){
    ground.x=300}
  
  
  
  if(monkey.isTouching(obstacleGroup)){
    gamestate=END;}
  
  if(gamestate===PLAY){
    survivaltime=survivaltime+Math.round(frameRate())
    if(keyDown("space")&&monkey.y>185){
    monkey.velocityY=-11}
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
  }
     }
  else if(gamestate===END){
    monkey.destroy()
    bananaGroup.destroyEach()
    obstacleGroup.destroyEach()    
    fill("black")
    textSize(40);
    text("Game Over",185,135)
    
  }
  
  banana()
  rock()
  
  drawSprites();}



function banana(){
  
  if(frameCount%130===0){
    var banana=createSprite(610,random(110,220),10,10)
    banana.addImage(bananaImage)
    banana.scale=0.08
    banana.velocityX=-6
    banana.lifetime=160
    bananaGroup.add(banana)}}



function rock(){
  
  if(frameCount%300===0){
    var rock=createSprite(610,220,10,10)
    rock.addImage(obstacleImage)
    rock.scale=0.1
    rock.velocityX=-6
    rock.lifetime=160
    obstacleGroup.add(rock)}}