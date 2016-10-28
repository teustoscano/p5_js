var song;
var button;
var amp;

var volHistory = [];

function preload() {
	song = loadSound("Joji_Thom.ogg");
}

function setup(){
	createCanvas(300, 300);
	
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
	beginShape();
	for(var i = 0; i < volHistory.length; i++){
		var y = map(volHistory[i], 0, 1, height/2, 0);
		stroke(255);
		vertex(i, y);
	}
	endShape();

	if(volHistory.length > width){
		volHistory.splice(0, 1);
	}
	//ellipse(width/2,height/2, width, vol*200);
}