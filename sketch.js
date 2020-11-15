var movingRect , fixedRect ; 

function setup() {
  createCanvas(1200,800);
 
  movingRect = createSprite(200,300,60,80);
  movingRect.shapeColor = "yellow";
  movingRect.debug = true;

  fixedRect = createSprite(500,200,90,90);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;
    
}

function draw() {
  background(0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2
    && fixedRect.y-movingRect.y < movingRect.height/2 + fixedRect.height/2 ){

    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }else{
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "red";
  }



  drawSprites();
}