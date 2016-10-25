var circleX = 0;
var colorR = 0;
var colorG = 0;
var colorB = 0;
var color = 0;

var circle1 = {
	x: 0,
	y: 200,
	diameter: 50
};
var circle2 = {
	x: 0,
	y: 250,
	diameter: 50
};

function setup(){
	createCanvas(640, 360);
}

function draw(){
	//background
	color = map(mouseX, 0, 640, 0, 255); 
	background(color);

	//ellipse
	noStroke();
	fill(colorR+=0.4, colorG+=0.4, colorB+=0.4);
	ellipse(circle1.x, circle1.y, circle1.diameter, circle1.diameter);
	ellipse(circle2.x, circle2.y, circle2.diameter, circle2.diameter);
	circle1.x += 1;
	circle2.x += 1;
}

function mousePressed(){
	//background
	background(250, 250, 100);
}