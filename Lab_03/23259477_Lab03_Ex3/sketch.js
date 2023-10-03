var colr = random(90,255);
var colg = random(0,255);
var colb = random(120,255);
var sliderR, sliderG, sliderB;
var video;
var videoHidden = false;

function setup() {
  createCanvas(400, 400);
  sliderR = createSlider(0, 255, colr);
  sliderR.position(20, 420);
  sliderR.style('width', '350px');
  sliderG = createSlider(0, 255, colg);
  sliderG.position(20, 450);
  sliderG.style('width', '350px');
  sliderB = createSlider(0, 255, colb,255/10);
  sliderB.position(20, 480);
  sliderB.style('width', '350px');

  video = createVideo('videoplayback.mp4'); // Replace 'video.mp4' with your video file
  video.position(20, 50);
  video.size(200, 150);
}

function mousePressed() {
  if (mouseX > 20 && mouseX < 220 && mouseY > 50 && mouseY < 200) {
    toggleVideo();
  }
}

function draw() {
  colr = sliderR.value();
  colg = sliderG.value();
  colb = sliderB.value();
  background(colr, colg, colb);
}

function toggleVideo() {
  if (videoHidden) {
    video.show(); // Show the video
  } else {
    video.hide(); // Hide the video
  }
  videoHidden = !videoHidden; // Toggle the state
}