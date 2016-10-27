var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var query = "&q=joker";

var gifData;
function setup(){
	createCanvas(500, 500);
	var url = api + apiKey + query;
	loadJSON(url, gotData);
}

function gotData(data){
	gifData = data;
}

function draw(){
	background(0);
	createImg(gifData.data[0].images.original.url);
}