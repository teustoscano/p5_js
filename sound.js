var song;
var sliderVolume;
var sliderPan;
var sliderRate;

function setup() {
	createCanvas(300, 200);
	song = loadSound("Birds_Of_Prey.ogg", loaded);
	sliderVolume = createSlider(0, 1, 0.5, 0.01);
	sliderRate = createSlider(0, 2, 1, 0.01);
	sliderPan = createSlider(-1, 1, 0, 0.01);//side ear to another ear
	
}

function loaded(){
	song.play();
}

function draw() { 
	background(0);
	song.setVolume(sliderVolume.value());
	song.pan(sliderPan.value());
	song.rate(sliderRate.value());
}