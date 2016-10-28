var socket;

function setup(){
	createCanvas(300, 400);
	background(0);

	socket = io.connect('http://localhost:3000');
}

function draw(){	
	noStroke();
	fill(255); 
	ellipse(mouseX, mouseY, 20, 20);
}