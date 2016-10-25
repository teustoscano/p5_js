var circleX = 0;

function setup(){
	createCanvas(640, 360);
	
}

function draw(){
	//background
	background(250, 250, 100);

	//ellipse
	noStroke();
	fill(250, 200, 200);
	ellipse(circleX+=5, 100, 40, 40);
}

function mousePressed(){
	//background
	background(250, 250, 100);
}