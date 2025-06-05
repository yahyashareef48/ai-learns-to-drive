let car;

function setup() {
  createCanvas(6000, 3000);
  car = new Car(3000, 1500, 80, 160);
}

function draw() {
  // Handle forward/backward movement
  if (keyIsDown(UP_ARROW)) {
    car.acc += 0.1;
  } else if (keyIsDown(DOWN_ARROW)) {
    car.acc -= 0.1;
  }

  // Handle turning left/right
  if (keyIsDown(LEFT_ARROW)) {
    car.turn(-1);
  } else if (keyIsDown(RIGHT_ARROW)) {
    car.turn(1);
  }

  background(100);
  car.move();
  car.show();
}
