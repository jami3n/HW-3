var ballX = 200
var ballXSpeed = 5;

var ballY = 0
var ballYSpeed = 5

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(ballX, ballY, 60);
 
  ballY = ballY  + ballYSpeed;
  
  //first bouncing ball
  if (ballY > width) {
    ballYSpeed = -ballYSpeed;
  }
  
  if (ballY < 0) {
    ballYSpeed = -ballYSpeed;
  }
  

}
