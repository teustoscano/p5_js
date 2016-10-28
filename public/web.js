var socket;

function setup(){
	createCanvas(300, 400);
	background(0);

	socket = io.connect('http://localhost:3000');
	socket.on('mouse', newDrawing);//recebe novas mensagens e chama a funçao
}

function newDrawing(data) {
	noStroke();
	fill(255, 0, 100); 
	ellipse(data.x, data.y, 20, 20);	
}

function mouseDragged(){
	
	var data = {
		x: mouseX,
		y: mouseY
	}
	socket.emit('mouse', data);//emite uma dado data com um nome 'mouse' para identificar o dado

	noStroke();
	fill(255); 
	ellipse(mouseX, mouseY, 20, 20);
}

function draw(){	
	
}