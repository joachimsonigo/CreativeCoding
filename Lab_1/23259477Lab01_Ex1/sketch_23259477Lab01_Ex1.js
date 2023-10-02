let moving_size = 50;
let static_size = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15);
}

function draw() {
  //background11
  background(random(230, 240));
  //left13
  noStroke()
  fill(0);
  rect(97, 169, random(50,78), 12);

  //right18
  rect(365, 184, 20, 15);
  fill(20, 20, 120);

  beginShape();
  vertex(365, 199);
  vertex(385, 199);
  vertex(372, 216);
  vertex(358, 216);
  endShape(CLOSE);

  //bottom29
  noFill();
  stroke(130);
  strokeWeight(2);
  ellipse(255, 350, static_size, static_size);

  //mouse interactions35
  stroke(180);
  ellipse(mouseX, mouseY, moving_size, moving_size);
  if (mouseIsPressed) {
    static_size = floor(static_size+1);
    moving_size += 1
 }
  if (keyIsPressed){
    background(random(250),random(250),random(250));
 }
}
