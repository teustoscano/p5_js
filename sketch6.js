var bubbles = [];
var balls = [];

function preload(){
	balls[0] = loadImage('football.png');
	balls[1] = loadImage('basketball.png');
	balls[2] = loadImage('beachball.png');
}

function setup(){
	createCanvas(600, 400);
}

function draw(){
	background(0);
	for(var i = 0; i < bubbles.length; i++){
		bubbles[i].move();
		bubbles[i].display();
	}
}

function mousePressed(){
	var r = floor(random(0, balls.length));
	bubbles.push(new Bubble(mouseX, mouseY, balls[r]));
}

function keyPressed(){
	bubbles.splice(0,1);
}

function Bubble(x, y, img) {
	this.x = x,
	this.y = y,
	this.img = img,

	this.display = function(){
		imageMode(CENTER);
		image(this.img, this.x, this.y);
		//ellipse(this.x, this.y, 24, 24);	
	},
	this.move = function(){
		this.x = this.x + random(-1,1);
		this.y = this.y + random(-1,1);
	}
}