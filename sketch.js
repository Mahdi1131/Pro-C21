var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200, 50, 50);
  movingRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor ="green";
  fixedRect.velocityX = 4;
  movingRect.velocityX = -4;
}

function draw() {
  background(0);  
  //movingRect.y = mouseY;
  //movingRect.x = mouseX;

  bounce(movingRect, fixedRect);



  drawSprites();
}
function bounce(b1, b2){
  if(b1.x - b2.x <= b2.width/2 + b1.width/2 &&
    b2.x - b1.x <= b2.width/2 + b1.width/2){

      b2.velocityX = b2.velocityX * (-1);
      b1.velocityX= b1.velocityX * (-1);
    
  }
  if(b1.y - b2.y <= b2.height/2 + b1.height/2 &&
    b2.y - b1.y <= b2.height/2 + b1.height/2){
      b2.velocityY= b2.velocityY * (-1);
      b1.velocityY= b1.velocityY * (-1);
  }
}