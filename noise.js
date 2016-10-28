//var xoff1 = 0;
//var xoff2 = 100;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(0);
	
	//var x = map(noise(xoff1), 0, 1, 0, width);
	//var y = map(noise(xoff2), 0, 1, 0, height);
	
	//xoff1 += 0.01;
	//xoff2 += 0.02;
	beginShape();
	var xoff = 0;
	for(var x = 0; x < width; x++){
		stroke(255);
		var y = noise(xoff)*height;
		vertex(x, y);

		xoff += 0.01;
	}
	endShape();

	//stroke(255);
	//ellipse(x, y, 20, 20);
}