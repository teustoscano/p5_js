//var xoff1 = 0;
//var xoff2 = 100;

var inc = 0.01;
var scl = 10;
var cols;
var rows;
var zoff = 0;
var fr;

function setup() {
	createCanvas(200, 200);
	cols = floor(width/scl);
	rows = floor(height/scl);
	fr = createP('');
}

function draw() {
	background(255);
	var yoff = 0;

	for(var x = 0; x < cols; x++){
		var xoff = 0;
		for(var y = 0; y < rows; y++){
			var index = (x + y * width) * 4;
			var angle = noise(xoff, yoff, zoff) * TWO_PI;
			var v = p5.Vector.fromAngle(angle);
			xoff += 0.01;
			stroke(0);
			push();
			translate(x*scl, y*scl);
			rotate(v.heading());
			line(0, 0, scl, 0);
			pop();
			
		}
		yoff += 0.01;
		zoff += 0.001;
	}

	fr.html(floor(frameRate()))
}