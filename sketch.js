// assemble the constant values for this run
const numSides = 7;
const dist = 60;

function setup() {
  createCanvas(400, 400);
  // importantly, we're going to use degrees.
  angleMode(DEGREES);
}

function draw() {
  // basic setup
  background(0);
  stroke("white");

  push(); // surround the weirdShape setup and drawing in push/pop
  translate(width / 2 + dist, height / 2);
  // The angle to rotate is determined by the number of sides
  const ang = 360 / numSides;

  // kick off our shape drawing
  weirdShape(0, dist, ang);
  // draw our ending point to show that we're still 'on' the shape
  fill("white");
  circle(0, 0, 15);
  pop(); // end the weirdShape drawing

  // now that we've popped, we are no longer 'on' the shape. Prove it:
  circle(0, 0, 15); // way at the top left corner!
}

function weirdShape(depth, dist, ang) {
  // this is the stopping condition
  if (depth > numSides) {
    return; // bail out
  }

  // in this function, notice we're rotating, translating, but there is
  // no push/pop, because we want those modifications to be persistent!

  // we didn't stop, so turn a little bit
  rotate(ang);
  // and draw another line straight forward: (0,0) => (0, dist).
  line(0, 0, 0, dist);
  // now update the coordinates to have a new origin at (0, dist).
  translate(0, dist);
  // recurse with an incremented depth value so we eventually stop.
  weirdShape(depth + 1, dist, ang);
}
