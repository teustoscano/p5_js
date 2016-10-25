function setup () {
	createCanvas(640, 360);
	//background
	background(250, 250, 100);
}

function draw() {

	//ellipse
	noStroke();
	fill(250, 200, 200);
	ellipse(mouseX, mouseY, 40, 40);

	//rectangle
	fill(200, 250, 200);
	rect(400, 100, 50, 50);
}