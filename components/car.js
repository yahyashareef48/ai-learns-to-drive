class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.vel = 0;
    this.acc = 0;
    this.width = width;
    this.height = height;
    this.angle = 0;
  }

  show() {
    push(); // Save the current drawing state
    translate(this.x, this.y); // Move to car's position
    rotate(this.angle); // Rotate by car's angle

    // Draw car at origin (0,0) since we've translated to car's position
    fill(255, 0, 0);
    stroke(0);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);

    // Optional: add a marker to show front of car
    fill(0);
    rect(0, -this.height / 4, this.width / 2, 5);

    pop(); // Restore the previous drawing state
  }

  move() {
    this.vel += this.acc; // Update velocity based on acceleration

    // Update position based on velocity and angle
    this.x += this.vel * sin(this.angle);
    this.y -= this.vel * cos(this.angle);

    // Optional: add some friction to slow down when not accelerating
    this.acc *= 0.9;
    this.vel *= 0.95;
  }

  turn(dir) {
    // dir should be +1 for right, -1 for left
    this.angle += dir * 0.05;
  }
}
