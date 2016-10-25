var circleX = 0;
var colorR = 0;
var colorG = 0;
var colorB = 0;

function setup(){
	createCanvas(640, 360);
}

function draw(){
	//background
	background(250, 250, 100);

	//ellipse
	noStroke();
	fill(colorR+=0.4, colorG+=0.4, colorB+=0.4);
	ellipse(circleX+=1, 100, 40, 40);
}

function mousePressed(){
	//background
	background(250, 250, 100);
}