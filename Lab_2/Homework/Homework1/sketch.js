/**
 * Homework 1: Predator-Prey
 * The goal of this code is to create an infection simulation.
 * There are 3 different colored balls: blue, yellow, and green.
 * If a blue ball touches a yellow ball, the yellow ball becomes blue.
 * The cycle goes blue->yellow->green->blue.
 * In theory, the simulation should eventually reach an equilibrium.
**/


let balls = [];
let numBalls = 500;

function setup() {
  createCanvas(displayWidth, displayHeight);
  for (let i = 0; i < numBalls; i++) {
    balls[i] = new Ball(random(width), random(height), random(10), random(["blue", "yellow", "green"]));
  }
}

function draw() {
  background(0);

  for (let ball of balls) {
    ball.move();
    ball.show();
    ball.interact(balls);
  }
}

class Ball {
  constructor(x, y, speed, color) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.color = color;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  show() {
    stroke(this.color);
    strokeWeight(4);
    fill(this.color);
    ellipse(this.x, this.y, 24, 24);
  }

  interact(otherBalls) {
    // Check if this ball is a predator
    if (this.color === "blue") {
      // Find a nearby prey to infect
      for (let otherBall of otherBalls) {
        if (otherBall.color === "yellow" && dist(this.x, this.y, otherBall.x, otherBall.y) < 24) {
          this.color = "yellow"; // Infect the prey
          break; // Stop infecting after one successful infection
        }
      }
    } else if (this.color === "yellow") {
      // Find a nearby prey to infect
      for (let otherBall of otherBalls) {
        if (otherBall.color === "green" && dist(this.x, this.y, otherBall.x, otherBall.y) < 24) {
          this.color = "green"; // Infect the prey
          break; // Stop infecting after one successful infection
        }
      }
    } else if (this.color === "green") {
      // Find a nearby prey to infect
      for (let otherBall of otherBalls) {
        if (otherBall.color === "blue" && dist(this.x, this.y, otherBall.x, otherBall.y) < 24) {
          this.color = "blue"; // Infect the prey
          break; // Stop infecting after one successful infection
        }
      }
    }
  }
}
