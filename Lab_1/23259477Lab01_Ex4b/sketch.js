let a = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  choose(a);
}

function mousePressed() {
  a = (a + 1) % 3;
  choose(a);
}

function choose(a) {
  if (a == 1) {
    for (var x = 0; x < width; x += width / 20) {
      for (var y = 0; y < height; y += height / 20) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
        fill(random(255), random(255), random(255));
        rect(x, y, width / 20, height / 20);
      }
    }
  } else if (a == 0) {
    for (var x = 0; x < width; x += width / 10) {
      for (var y = 0; y < height; y += height / 10) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
        fill(random(17), random(100), random(10));
        ellipse(x+20, y+20, width / 10, height / 10);
      }
    }
  }
  else if (a == 2){
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var cellWidth = width / 10;
    var cellHeight = height / 10;

    for (var x = 0; x < width; x += cellWidth) {
      for (var y = 0; y < height; y += cellHeight) {
        stroke(0);
        strokeWeight(1);
        line(x, 0, x, height);
        line(0, y, width, y);
        //
        var randomChar = characters.charAt(floor(random(characters.length)));
        textSize(20);
        textAlign(CENTER, CENTER);
        fill(0);
        text(randomChar, x + cellWidth / 2, y + cellHeight / 2);
      }
    }
  }
}