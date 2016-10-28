var song;
var button;
var fft;
var w;

function preload() {
	song = loadSound("Joji_Thom.ogg");
}

function setup(){
	createCanvas(256, 256);
	angleMode(DEGREES);
	colorMode(HSB);
	fft = new p5.FFT(0.8, 64);
	w = width / 64;
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
	for(var i = 0; i < spectrum.length; i++){
		var amp = spectrum[i];
		var y = map(amp, 0, 256, height, 0);
		fill(i, 200, 255);
		rect(i*w, y, w, height-y);
	}
	
	noFill();


}