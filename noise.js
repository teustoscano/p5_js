//var xoff1 = 0;
//var xoff2 = 100;

var inc = 0.01;
var scl = 20;
var cols;
var rows;

function setup() {
	createCanvas(200, 200);
	cols = floor(width/scl);
	rows = floor(height/scl);
}

function draw() {
	var yoff = 0;
	for(var x = 0; x < cols; x++){
		var xoff = 0;
		for(var y = 0; y < rows; y++){
			var index = (x + y * width) * 4;
			var r = noise(xoff, yoff) * 255;
			xoff += 0.01;
			fill(random(255));
			rect(x*scl, y*scl, scl, scl);
		}
		yoff += 0.01;
	}
}