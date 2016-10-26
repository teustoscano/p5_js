var bubble ={
	x: 300,
	y: 200,
}

function setup(){
	createCanvas(600, 400);
}

function draw(){
	background(0);
	move();
	display();
}

function move(){
	bubble.x = bubble.x + random(-1,1);
	bubble.y = bubble.y + random(-1,1);	
}

function display(){
	stroke(255);
	strokeWeight(4);
	noFill();
	ellipse(bubble.x, bubble.y, 24, 24);
}