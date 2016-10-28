var song;
var button;
var amp;

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

	ellipse(width/2,height/2, width, vol*200);
	//sliderFreq.value()
}