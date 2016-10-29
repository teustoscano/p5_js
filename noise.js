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
	createCanvas(400, 600);
	background(255);
	cols = floor(width/scl);
	rows = floor(height/scl);
	fr = createP('');

	flowField = new Array(cols * rows);

	for(var i = 0; i < 200; i++){
		particles[i] = new Particle();
	}
}

function draw() {
	
	var yoff = 0;

	for(var x = 0; x < cols; x++){
		var xoff = 0;
		for(var y = 0; y < rows; y++){
			var index = x + y * cols
			var angle = noise(xoff, yoff, zoff) * TWO_PI*4;
			var v = p5.Vector.fromAngle(angle);
			v.setMag(0.5);
			flowField[index] = v;
			xoff += 0.01;
			stroke(0, 50);
			//push();
			//translate(x*scl, y*scl);
			//rotate(v.heading());
			//strokeWeight(1);
			//line(0, 0, scl, 0);
			//pop();
			
		}
		yoff += 0.01;
		zoff += 0.0005;
	}

	for(var i = 0; i < particles.length; i++){
		particles[i].follow(flowField);
		particles[i].update();
		particles[i].edges();
		particles[i].show();
		
	}
	fr.html(floor(frameRate()))
}