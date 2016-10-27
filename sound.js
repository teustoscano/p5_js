var song;

function preload() {
	song = loadSound("Birds_Of_Prey.ogg");
}

function setup() {
	createCanvas(300, 200);
	song.play();
}

function draw() { 
	background(0);
}