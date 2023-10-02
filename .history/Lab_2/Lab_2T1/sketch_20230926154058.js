function setup() {
  c = createCanvas(displayWidth, displayHeight);
  c.position(0, 0);
}

function draw() {
  background(120);
  textSize(32);
  while (1){
    fill(random(0, 255), random(0, 255), random(0, 255));
    let i=0; i+=1;
    ellipse(random(0, width), random(0, height), 80, 80);
  }
}

// function resize() {  In order to dynamically resize the canvas, we need to use the resized() function
//   resizeCanvas(windowWidth, windowHeight);
// }.