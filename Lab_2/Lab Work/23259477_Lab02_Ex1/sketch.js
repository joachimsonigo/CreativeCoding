let radius = 40; // Radius of the ball
let x = 0;
let speed = 5; // The ball will move 5 pixels per frame (frameRate(60))
let redcol = 80;
let greencol = 100;
let bluecol = 189;
let bgColor = 255; // Background color

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = radius;
  frameRate(60);
}

function draw() {
  background(bgColor); // Set the background color
  noStroke();
  fill(redcol, greencol, bluecol);
  ellipse(x, height / 2, radius * 2, radius * 2);
  x = x + speed; // The ball will move

  if (x > width - radius || x < radius) {
    // If the ball hits the edge of the canvas
    speed = -speed; // Change direction
    redcol = random(255);
    greencol = random(255);
    bluecol = random(255);
    bgColor = random(255);
    let randomNum = floor(random(1, 101)); // Generate a random number between 1 and 100
    console.log(randomNum); 
  }
}
// function resize() {  In order to dynamically resize the canvas, we need to use the resized() function
//   resizeCanvas(windowWidth, windowHeight);
// }.