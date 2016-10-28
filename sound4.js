var song;
var button;
var fft;

var volHistory = [];

function preload() {
	song = loadSound("Joji_Thom.ogg");
}

function setup(){
	createCanvas(256, 256);
	angleMode(DEGREES);
	
	fft = new p5.FFT(0, 256);

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
	var spectrum = fft.analyze();
	stroke(255);
	for(var i = 0; i < spectrum.length; i++){
		var amp = spectrum[i];
		var y = map(amp, 0, 1, height, 0);

		line(i, height, i, y);
	}
	
	noFill();


}