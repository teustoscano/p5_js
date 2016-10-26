var x = 0;
var spaceData;

function setup(){
	createCanvas(600, 300);
	loadJSON("http://api.open-notify.org/astros.json", gotData, "jsonp");
}

function gotData(data) {
	spaceData = data;
}

function draw(){
	background(0);
	stroke(255);
	line(x, 0, x, height);
	x += 1;
	if(x > width){
		x = 0;
	}
	if(spaceData){
		randomSeed(4);
		for(var i = 0; i < spaceData.number; i++){
			if (spaceData.people[i].craft == "ISS") {
				fill(255, 0, 50);
			}else
			fill(255);
			ellipse(random(width), random(height), 50, 50);
		}
	}	
}