function setup(){
	createCanvas(600, 360);
}

function draw(){
	background(0);
	strokeWeight(4);
	stroke(255);
	var x = 0;
	while (x <= width) {
		fill(200,200,0);
		ellipse(x, 100, 25, 25);	
		x += 50;
	}
	for(var x = 0; x <= width; x+=50){
		fill(200,100,100);
		ellipse(x, 300, 25, 25);	
		x += 50;
	}
	
}
