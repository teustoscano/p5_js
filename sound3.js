var song;

function setup(){
	createCanvas(300, 300);
	song = loadSound("Joji_Thom.ogg", loaded);
}

function loaded () {
	song.play();
}

function draw(){
	background(0);
	//sliderFreq.value()
}