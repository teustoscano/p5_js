var wave;

function setup(){
	createCanvas(300, 300);

	wave = new p5.Oscillator();
	wave.setType("sine");
	wave.start();
	wave.amp(1);
	wave.freq(520);
	
}

function draw(){
	background(0);
}