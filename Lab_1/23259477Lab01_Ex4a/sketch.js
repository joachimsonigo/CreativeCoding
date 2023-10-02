let a = 0;
function preload() {
  img = loadImage("atLogo.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  choose(a);
}

function mousePressed() {
  a = (a + 1) % 5;
  choose(a);
}

function choose(a) {
  if (a == 0) {
    for (var x = 0; x < width; x += width / 2) {
      for (var y = 0; y < height; y += height / 2) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
      }
    }
  } else if (a == 1) {
    for (var x = 0; x < width; x += width / 20) {
      for (var y = 0; y < height; y += height / 20) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
      }
    }
  } else if (a == 2) {
    for (var x = 0; x < width; x += width / 4) {
      for (var y = 0; y < height; y += height / 4) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
      }
    }
  } else if (a == 3) {
    for (var x = 0; x < width; x += width / 4) {
      for (var y = 0; y < height; y += height / 4) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
        image(img, x, y, width / 4, height / 4);
      }
    }
  } else if (a == 4) {
    for (var x = 0; x < width; x += width / 10) {
      for (var y = 0; y < height; y += height / 10) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
        image(img, x, y, width / 10, height / 10);
      }
    }
  }
}
