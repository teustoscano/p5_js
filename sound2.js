var wave;
var sliderFreq;
var env;

function setup(){
	createCanvas(300, 300);

	env = new p5.Env();
	env.setADSR(0.05, 0.1, 0.5, 0.2);
	env.setRange(0.8, 0) ;

	wave = new p5.Oscillator();
	wave.setType("sine");
	wave.start();
	wave.amp(env);
	wave.freq(400);
	sliderFreq = createSlider(100, 1200, 0, 0.01);
	env.play();
	
}

function draw(){
	background(0);
	//sliderFreq.value()
}