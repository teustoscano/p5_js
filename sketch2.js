function setup(){
	createCanvas(640, 360);
}

function draw(){
	background(0);

	stroke(255);
	strokeWeight(4);
	noFill();
	if (mouseX > width/2){
		fill(255, 0, 200);
		ellipse(100, 200, 40, 40);
		ellipse(500, 200, 40, 40);
	}
	ellipse(300, 200, 100, 100);
}

function mousePressed(){
}