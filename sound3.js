var song;
var button;
var amp;

var volHistory = [];

function preload() {
	song = loadSound("Joji_Thom.ogg");
}

function setup(){
	createCanvas(300, 300);
	angleMode(DEGREES);
	
	amp = new p5.Amplitude();

	button = createButton("Play");
	button.mousePressed(toggleSong);
}

function toggleSong(){
	if(song.isPlaying()){
		song.pause();
	}else{
		song.play();
	} 
}

function draw(){
	background(0);
	var vol = amp.getLevel();
	volHistory.push(vol);
	noFill();

	translate(width/2, height/2);
	beginShape();
	for(var i = 0; i < 360; i++){
		var r = map(volHistory[i], 0, 1, height/2, 0);
		var x = r * cos(i);
		var y = r * sin(i);
		stroke(255);
		vertex(x, y);
	}
	endShape();

	if(volHistory.length > 360){
		volHistory.splice(0, 1);
	}

}