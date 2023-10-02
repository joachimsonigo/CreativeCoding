let images = []; // Array to store the image filenames
let imageCanvases = []; // Array to store the generated canvases
let canvasPositions = []; // Array to store the positions of the canvases

function preload() {
  // Load all image filenames
  for (let letter of 'abcdefghijklmnopqrstuvwxyz!') {
    images.push(`images/${letter}.jpg`);
  }
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255); // Clear the background on each frame

  // Draw all the canvases at their respective positions
  for (let i = 0; i < imageCanvases.length; i++) {
    const { canvas, x, y } = imageCanvases[i];
    image(canvas, x, y);
  }
}

function mouseClicked() {
  // Randomly select an image filename from the images array
  const randomImageFilename = random(images);

  // Create a new ImageCanvas with the random image
  const canvasWidth = 200; // Adjust the canvas size as needed
  const canvasHeight = 200;
  const randomCanvas = new ImageCanvas(randomImageFilename, canvasWidth, canvasHeight);

  // Position the canvas where the mouse was clicked
  const x = mouseX - canvasWidth / 2;
  const y = mouseY - canvasHeight / 2;

  // Store the canvas and its position in their respective arrays
  imageCanvases.push({ canvas: randomCanvas.canvas, x, y });
}

class ImageCanvas {
  constructor(imageFilename, canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.canvas = createGraphics(canvasWidth, canvasHeight);
    this.img = loadImage(imageFilename, img => {
      // Once the image is loaded, draw it on the canvas
      this.canvas.image(img, 0, 0, this.canvasWidth, this.canvasHeight);
    });
  }
}
