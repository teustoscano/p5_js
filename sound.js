var song;
var sliderVolume;
var sliderPan;
var sliderRate;
var button;
var jumpButton;

function setup() {
	createCanvas(300, 200);
	song = loadSound("Birds_Of_Prey.ogg", loaded);
	button = createButton("i>");
	button.mousePressed(tooglePlaying);
	//jumpButton = createButton("Jump");
	//jumpButton.mousePressed(jumpSong);
	//sliderVolume = createSlider(0, 1, 0.5, 0.01);
	//sliderRate = createSlider(0, 2, 1, 0.01);
	//sliderPan = createSlider(-1, 1, 0, 0.01);//side ear to another ear
	//song.addCue(5, changeBackground);
}

function changeBackground(){
	background(random(255), random(255), random(255));
}

function jumpSong() {
	var len = song.duration();
	song.jump(len/2);
}

function tooglePlaying () {
	if (!song.isPlaying()){
		song.play();
		button.html("ii");		
	}else{
		song.pause();
		button.html("i>");
	}
}

function loaded(){
	//song.play();
}

function draw() { 
	//background(0);
	//song.setVolume(sliderVolume.value());
	//song.pan(sliderPan.value());
	//song.rate(sliderRate.value());
	//if (song.currentTime() > 5) {
		background(song.currentTime()*5, 100, 100);
	//}
}