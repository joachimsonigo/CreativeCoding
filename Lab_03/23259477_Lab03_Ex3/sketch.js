var colr = random(90,255);
var colg = random(0,255);
var colb = random(120,255);
var speed = 1;
var sliderR, sliderG, sliderB, sliderV;
var video;
var videoHidden = false;

function setup() {
  createCanvas(400, 400);
  sliderR = createSlider(0, 255, colr);
  sliderR.position(20, 420);
  sliderR.style('width', '350px');
  sliderR.style('accent-color', 'red');
  sliderG = createSlider(0, 255, colg);
  sliderG.position(20, 450);
  sliderG.style('width', '350px');
  sliderG.style('accent-color', 'green');
  sliderB = createSlider(0, 255, colb,255/10);
  sliderB.position(20, 480);
  sliderB.style('width', '350px');
  sliderB.style('accent-color', 'blue');
  sliderV = createSlider(1, 10, 1);

  video = createVideo('videoplayback.mp4'); // Replace 'video.mp4' with your video file
  video.position(80, 100);
  video.size(200, 150);
  video.loop(); // Start the video
}

function mousePressed() {
    // toggleVideo();
}

function draw() {
  colr = sliderR.value();
  colg = sliderG.value();
  colb = sliderB.value();
  background(colr, colg, colb);
  speed = sliderV.value();
  video.speed(speed); // Set the speed to a value between 0 and 10
}

function toggleVideo() {
  if (videoHidden) {
    video.show(); // Show the video
  } else {
    video.hide(); // Hide the video
  }
  videoHidden = !videoHidden; // Toggle the state
}