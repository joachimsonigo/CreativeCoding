let currentFunctionIndex = 0; 

function setup() {
  createCanvas(400, 400);
  one();
}

function draw() {
  background(220);
}

// Function to change the current function based on mouse press
function mouseClicked() {
  // Increment the current function index (cycle from 0 to 4 which gives us the 5 functions)
  currentFunctionIndex = (currentFunctionIndex + 1) % 5;

  // Clear the console and call the current function. Console clear is important to avoid confusion
  console.clear();
  switch (currentFunctionIndex) {
    case 0:
      one();
      break;
    case 1:
      two();
      break;
    case 2:
      three();
      break;
    case 3:
      four();
      break;
    case 4:
      five();
      break;
  }
}

// Function definitions

function one() {
  for (let i = 0; i < 101; i++) {
    console.log(i);
  }
}

function two() {
  for (let i = 10; i < 51; i += 1) {
    console.log(i);
  }
}

function three() {
  for (let i = 10; i > -1; i -= 1) {
    console.log(i);
  }
}

function four() {
  for (let i = 0; i < 11; i += 2) {
    console.log(i);
  }
}

function five() {
  for (let i = 100; i > 0; i -= 10) {
    console.log(i);
  }
}
