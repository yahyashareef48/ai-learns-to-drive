// p5.js setup function - runs once when the program starts
function setup() {
  // Create canvas that fills most of the window
  createCanvas(800, 600);
}

// p5.js draw function - runs continuously after setup
function draw() {
  // Set the background to dark gray
  background(50);

  // Draw a moving circle
  fill(255, 100, 100);
  ellipse(mouseX, mouseY, 50, 50);

  // Display some text
  fill(255);
  textSize(24);
  text("A.I. Learns to Drive", width / 2 - 100, 50);
}
