//var xoff1 = 0;
//var xoff2 = 100;

var inc = 0.01;
var scl = 10;
var cols;
var rows;
var zoff = 0;
var fr;

var particles = []; 
var flowField = [];

function setup() {
	createCanvas(200, 200);
	cols = floor(width/scl);
	rows = floor(height/scl);
	fr = createP('');

	flowField = new Array(cols * rows);

	for(var i = 0; i < 100; i++){
		particles[i] = new Particle();
	}
}

function draw() {
	background(255);
	var yoff = 0;

	for(var x = 0; x < cols; x++){
		var xoff = 0;
		for(var y = 0; y < rows; y++){
			var index = x + y * cols
			var angle = noise(xoff, yoff, zoff) * TWO_PI;
			var v = p5.Vector.fromAngle(angle);
			v.setMag(0.1);
			flowField[index] = v;
			xoff += 0.01;
			stroke(0, 50);
			push();
			translate(x*scl, y*scl);
			rotate(v.heading());
			strokeWeight(1);
			line(0, 0, scl, 0);
			pop();
			
		}
		yoff += 0.01;
		zoff += 0.001;
	}

	for(var i = 0; i < particles.length; i++){
		particles[i].follow(flowField);
		particles[i].update();
		particles[i].show();
		particles[i].edges();
	}
	fr.html(floor(frameRate()))
}