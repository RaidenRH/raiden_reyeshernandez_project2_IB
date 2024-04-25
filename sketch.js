let shape = 'ellipse'; // Initial shape
let angle = 0;
let speed = 0.02;
let distance = 200;
let minSize = 50;
let maxSize = 200;

function setup() {
    let cnv = createCanvas(windowWidth, 290);
    cnv.style('display', 'flex'); 
    background(255);
}

function windowResized() {
    resizeCanvas(windowWidth, 290);
}

function draw() {
    background(155);

    if (mouseIsPressed) {
        fill(255, 0, 0); // Red when mouse is pressed
    } else {
        fill(0, 0, 55); // Black otherwise
    }

    let x = width / 2 + cos(angle) * distance; // Calculate x position based on angle
    let y = height / 2; // Circle stays in the middle vertically

    let size = map(mouseX, 0, width, minSize, maxSize); // Map mouseX to circle size
    let sizeY = map(mouseY, 0, height, minSize, maxSize); // Map mouseY to circle size

    // Adjust size based on mouse movement along y-axis
    size = sizeY < size ? sizeY : size;

    // Toggle between ellipse and rectangle based on the 'shape' variable
    if (shape === 'ellipse') {
        ellipse(x, y, size, size);
    } else if (shape === 'rectangle') {
        rectMode(CENTER);
        rect(x, y, size, size);
    }

    angle += speed; // Update angle for next frame
    if (angle > TWO_PI || angle < 0) { // Reverse direction at boundaries
        speed *= -1;
    }
}

function keyPressed() {
    if (key === ' ') { // Toggle shape when spacebar is pressed
        if (shape === 'ellipse') {
            shape = 'rectangle';
        } else {
            shape = 'ellipse';
        }
    }
}
