//var xoff1 = 0;
//var xoff2 = 100;

var inc = 0.01;

function setup() {
	createCanvas(200, 200);
}

function draw() {
	
	var yoff = 0;

	loadPixels();

	for(var x = 0; x < width; x++){
		var xoff = 0;
		for(var y = 0; y < height; y++){
			var index = (x + y * width) * 4;
			var r = noise(xoff, yoff) * 255;
			pixels[index+0] = r;
			pixels[index+1] = r;
			pixels[index+2] = r;
			pixels[index+3] = r;

			xoff += 0.01;
		}
		yoff += 0.01;
	}
	updatePixels();

	//stroke(255);
	//ellipse(x, y, 20, 20);
}