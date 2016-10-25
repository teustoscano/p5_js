function setup () {
	createCanvas(640, 360);
}

function draw() {
	rect(100, 200, 75, 150);
	line(50, 100, 90, 200);
	arc(50, 50, 80, 80, 0, PI+QUARTER_PI, CHORD);
}