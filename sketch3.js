function setup(){
	createCanvas(640, 360);
}

function draw(){
	background(0);
	stroke(255);
	strokeWeight(4);
	noFill();
	if (mouseX > 50){
		ellipse(300, 200, 100, 100);
	}if(mouseX > 150){
		rect(300, 200, 100, 100);
	}if(mouseX > 200){
		line(0, 0, width, height);
	}else {
		point(300, 200);
	}

	

}

function mousePressed(){
}