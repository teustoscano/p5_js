var color = 0;

var spot = {
	x: 100,
	y: 50
};

var col = {
	r: 0,
	g: 0,
	b: 0
};

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
	
	spot.x = random(0, width);
	spot.y = random(0, height);

	fill(col.r, col.g, col.b);
	ellipse(spot.x, spot.y, 24, 24);
	
	fill(col.r+=0.4, col.g+=0.4, col.b+=0.4);
	ellipse(circle1.x, circle1.y, circle1.diameter, circle1.diameter);
	ellipse(circle2.x, circle2.y, circle2.diameter, circle2.diameter);
	circle1.x += 1;
	circle2.x += 1;
}

function mousePressed(){
	//background
	background(250, 250, 100);
}