let bubble1;
let bubble2;
let balls = [];
let numballs = 100;
let lastColorChangeTime = 0;
let backgroundColor;
let ballColor;

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble(600, 0, 5); // x, y, speed starts at top right
  bubble2 = new Bubble(300, 200, 10); // x, y, speed goes twice as fast as b1
  for (let i = 0; i < numballs; i++) {
    balls[i] = new Bubble(random(600), random(400), random(10));
  }
  backgroundColor = color(0); // Initialize background color to black
  ballColor = color(255); // Initialize ball color to white
}

function draw() {
  // Check if 2 seconds have passed since the last color change
  if (millis() - lastColorChangeTime >= 2000) {
    // Change background and ball colors
    backgroundColor = color(random(255), random(255), random(255));
    ballColor = color(random(255), random(255), random(255));
    lastColorChangeTime = millis();
  }

  background(backgroundColor,50);

  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
  for (let i = 0; i < numballs; i++) {
    balls[i].move();
    balls[i].show();
  }
}

class Bubble {
  constructor(_x, _y, _s) {
    this.x = _x;
    this.y = _y;
    this.s = _s;
  }

  move() {
    this.x = this.x + random(-this.s, this.s);
    this.y = this.y + random(-this.s, this.s);
  }

  show() {
    stroke(ballColor);
    strokeWeight(4);
    fill(ballColor);
    ellipse(this.x, this.y, 24, 24);
  }
}
