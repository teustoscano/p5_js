var on = false;

function setup(){
	createCanvas(640, 360);
}

function draw(){
	if (on){
		background(100, 255, 100);
	}else{
		background(0);
	}
	stroke(255);
	strokeWeight(4);
	noFill();
	if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){
		fill(0, 100, 255);
	}

	rectMode(CENTER);
	rect(300, 200, 100, 100);
	

}

function mousePressed(){
	if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){
		on = !on;
	}
}