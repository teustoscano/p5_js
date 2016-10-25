var x = 0;
var speed = 1;

function setup(){
	createCanvas(640, 360);
}

function draw(){
	background(0);

	stroke(255);
	strokeWeight(4);
	noFill();
	if (x > width-51){
		speed = -0.8;
		fill('red');
	}
	ellipse(x, 200, 100, 100);

	x += speed;
}

function mousePressed(){
}