function setup() {
  c = createCanvas(displayWidth, displayHeight);
  c.position(0, 0);
}

function draw() {
  background(120);
  textSize(32);

  text("Width: " + width, 10, 30);
  text("Height: " + height, 10, 60);
  text("Display Width: " + displayWidth, 10, 90);
  text("Display Height: " + displayHeight, 10, 120);
  text("Window Width: " + windowWidth, 10, 150);
}

// function resize() {  In order to dynamically resize the canvas, we need to use the resized() function
//   resizeCanvas(windowWidth, windowHeight);
// }.