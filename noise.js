var xoff = 0;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(0);
	
	var x = map(noise(xoff), 0, 1, 0, width);
	xoff += 0.01;

	stroke(255);
	ellipse(x, 200, 20, 20);
}