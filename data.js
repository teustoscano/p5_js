function setup(){
	createCanvas(600, 300);
	loadJSON("http://api.open-notify.org/astros.json", gotData, "jsonp");
}

function gotData(data) {
	background(0);
	for(var i = 0; i < data.number; i++){
		if (data.people[i].craft == "ISS") {
			fill(255, 0, 50);
		}else
		fill(255);
		ellipse(random(width), random(height), 50, 50);
	}
}

function draw(){
}