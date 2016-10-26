var x = 0;
var speed = 1.5;

function setup(){
	createCanvas(640, 360);
}

function draw(){
	background(0);

	stroke(255);
	strokeWeight(4);
	noFill();
	if (x > width-101 || x < 0){
		fill('red');
		speed *= -1;
	}
	ellipse(x+51, 200, 100, 100);

	x += speed;
}

function mousePressed(){
}