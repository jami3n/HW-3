var ballX = 0
var ballXSpeed = 15;

var ballX2 = 0
var ballXSpeed2 = 10

var ballX3 = 0
var ballXSpeed3 = 5

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(ballX, 200, 100);
  ellipse(ballX2, 300, 20);
  ellipse(ballX3, 100, 50);
 
  ballX = ballX  + ballXSpeed;
  ballX2 = ballX2 + ballXSpeed2;
  ballX3 = ballX3 + ballXSpeed3;
  
  //first bouncing ball
  if (ballX > width) {
    ballXSpeed = -ballXSpeed;
  }
  
  if (ballX < 0) {
    ballXSpeed = -ballXSpeed;
  }
  
  //second bouncing ball
  if (ballX2 > width) {
    ballXSpeed2 = -ballXSpeed2;
  }
  
  if (ballX2 < 0) {
    ballXSpeed2 = -ballXSpeed2;
  }
  
  //third bouncing ball
  if (ballX3 > width) {
    ballXSpeed3 = -ballXSpeed3;
  }
  
  if (ballX3 < 0) {
    ballXSpeed3 = -ballXSpeed3;
  }
}
