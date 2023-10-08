let vid1, vid2;

function setup() {
  createCanvas(640, 480);
  vid1 = createVideo("f1.mp4");
  vid1.loop();
  vid1.mute();
  vid2 = createVideo("f2.mp4");
  vid2.loop();
  vid2.mute();
  vid1.position(500, 10);
  vid2.position(200, 200);
}

function draw() {
  background(220);
  image(vid1, 0, 0, width / 2, height);
  image(vid2, width / 2, 0, width / 2, height);
}
