function setup(){
	createCanvas(640, 360);
}

function draw(){
	background(0);
	stroke(255);
	strokeWeight(4);
	noFill();
	if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){
		fill(255, 0, 100);
	}

	if(mouseIsPressed){
		background(100,255,100);
	}

	rectMode(CENTER);
	rect(300, 200, 100, 100);
	

}

function mousePressed(){
}