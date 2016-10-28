var wave;
var sliderFreq;

function setup(){
	createCanvas(300, 300);

	wave = new p5.Oscillator();
	sliderFreq = createSlider(100, 1200, 0, 0.01);
	wave.setType("sine");
	wave.start();
	wave.amp(1);
	
	
}

function draw(){
	background(0);
	wave.freq(sliderFreq.value());
}