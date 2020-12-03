var player1,player2;

function setup() {
  createCanvas(1600,800);
  player1 = createSprite(400, 200, 100, 100);
  player2 = createSprite(800, 200, 100, 100);

  player1.shapeColor = "cyan";
  player2.shapeColor = "lime";
  player1.debug = true;
  player2.debug = true;
}

function draw() {
  background(0);  
  drawSprites();
  player1.x = mouseX;
  player1.y = mouseY; 

  if (player2.x - player1.x < player1.width/2 + player2.width/2 && player1.x - player2.x < player2.width/2 + player1.width/2 && 
    player2.y - player1.y < player1.height/2 + player2.height/2 && player1.y - player2.y < player1.height/2 + player2.height/2){
    player1.shapeColor = "blue";
    player2.shapeColor = "green";
   }
  else{
  player1.shapeColor = "cyan";
  player2.shapeColor = "lime";
  
  }
}