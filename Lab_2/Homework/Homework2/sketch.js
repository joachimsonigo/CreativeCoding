/**
 * I've abandoned this sketch
 * The one I ended up using is sketch2.js
 * I went into the index.html file and changed the script source to sketch2.js
 */


let letterImages = {}; // Dictionary to store images for each letter
let canvas;
let wordInput;
let textToShow = "Give me Letters";
let x, y;

function preload() {
  // Dynamically load images for each letter of the alphabet
  // for (let letter of 'abc') {//defghijklmnopqrstuvwxyz
  //   loadImage(letter + '.jpg', img => {
  //     letterImages[letter] = img; // Store the loaded image
  //   });
  // }
  imga=loadImage('a.jpg');
  imgb=loadImage('b.jpg');
  imgc=loadImage('c.jpg');
}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  // canvas.parent("canvas-container"); // Place the canvas in a container div
  
  textAlign(CENTER, CENTER);
  textSize(24);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(220);
  text(textToShow, x, y);
  for(let i = textToShow.length - 1; i >= 0; i--) {
    const letter = textToShow.charAt(i);
    const img = letterImages[letter];
    if (img) {
      image(img, x, y, width / 4, height / 4);
    }
  }
  // image(imga, 0, 0, width / 4, height / 4);
}

function keyPressed() {
  if (keyCode === ENTER) {
    const canvasWidth = width;
    const canvasHeight = height;
    const letterWidth = canvasWidth / wordInput.length;

    clear(0, 0, canvasWidth, canvasHeight); // Clear a specific area

    let x = 0; // Initial x position for drawing letters

    for (let i = 0; i < wordInput.length; i++) {
      const letter = wordInput.charAt(i);
      const img = letterImages[letter];

      if (img) {
        image(img, x, 0, letterWidth, canvasHeight);
        x += letterWidth; // Move to the next position
      }
    }
    textToShow = wordInput; // Update the displayed text to the entered word
  }
}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
//   x = width / 2;
//   y = height / 2;
// }

function mousePressed() {
  wordInput = prompt("Enter a word:");
  if (wordInput) {
    wordInput = wordInput.toLowerCase();
  }
}
