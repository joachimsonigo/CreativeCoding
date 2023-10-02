let tvBox;
let sideHits = [0, 0, 0, 0]; // Top, Right, Bottom, Left
let cornerHits = [0, 0, 0, 0]; // Top-Left, Top-Right, Bottom-Right, Bottom-Left
let backgroundMusic;

function preload() {
  backgroundMusic = loadSound('backgroundMusic.mp3');
  img = loadImage('dvdlogo.png');
}

function setup() {
  createCanvas(400, 400);
  tvBox = new TVBox();
    // Play the background music
    backgroundMusic.setVolume(0.5);
    backgroundMusic.loop();
}

function draw() {
  background(0);

  tvBox.update();
  tvBox.display();

  // Check for collisions with sides and corners
  if (tvBox.x <= 0) {
    sideHits[3]++;
  } else if (tvBox.x >= width - tvBox.size) {
    sideHits[1]++;
  }

  if (tvBox.y <= 0) {
    sideHits[0]++;
  } else if (tvBox.y >= height - tvBox.size) {
    sideHits[2]++;
  }

  if (tvBox.x <= 0 && tvBox.y <= 0) {
    cornerHits[0]++;
  } else if (tvBox.x >= width - tvBox.size && tvBox.y <= 0) {
    cornerHits[1]++;
  } else if (tvBox.x >= width - tvBox.size && tvBox.y >= height - tvBox.size) {
    cornerHits[2]++;
  } else if (tvBox.x <= 0 && tvBox.y >= height - tvBox.size) {
    cornerHits[3]++;
  }

    // Adjust audio based on hits
    const totalSideHits = sideHits.reduce((a, b) => a + b, 0); // Total side hits
    const totalCornerHits = cornerHits.reduce((a, b) => a + b, 0); // Total corner hits
  
    // Adjust audio parameters based on the hit counts
      // Adjust audio parameters based on the hit counts
  let pitch = 1.0; // Default pitch value

  // Lower pitch when the bottom is hit and raise it when the top is hit
  if (sideHits[2] > 0) {
    pitch = map(totalSideHits, 0, 100, 0.5, 1.0); // Lower pitch
  } else if (sideHits[0] > 0) {
    pitch = map(totalSideHits, 0, 100, 1.0, 2.0); // Raise pitch
  }
    const volume = map(totalCornerHits, 0, 50, 0.2, 1.0); // Example: Change volume
  
    backgroundMusic.rate(pitch); // Adjust pitch
    backgroundMusic.setVolume(volume); // Adjust volume


  // Display hit counts
  textSize(18);
  fill(255);
  text(`Sides Hit: ${totalSideHits}`, 10, 20,);
  text(`Corners Hit: ${totalCornerHits}`, 10, 40);
}

class TVBox {
  constructor() {
    this.size = 50;
    this.x = random(width - this.size);
    this.y = random(height - this.size);
    this.xSpeed = random(1, 3);
    this.ySpeed = random(1, 3);
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // Bounce off the edges
    if (this.x <= 0 || this.x >= width - this.size) {
      this.xSpeed *= -1;
    }

    if (this.y <= 0 || this.y >= height - this.size) {
      this.ySpeed *= -1;
    }
  }

  display() {
    // rect(this.x, this.y, this.size, this.size);
    image(img, this.x, this.y, this.size, this.size);
    // You can replace this with your TV logo drawing
  }
}
