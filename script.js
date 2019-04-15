var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randButton = document.getElementById("randColor");

function randomColor() {
	var c = Math.floor(Math.random()*16777216).toString(16);
	while (c.length < 6) {
		c = "0" + c;
	}
	c = "#" + c;
	return c;
}

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + " ," + color2.value + " )";
	css.textContent = body.style.background + ";";

	var c1 = color1.value.slice(1);
	var c2 = color2.value.slice(1);

	var rgb = [c1.slice(4), c1.slice(2, 4), c1.slice(0, 2), c2.slice(4), c2.slice(2, 4), c2.slice(0, 2)];

	var colorAvg = 0;

	for (var i = 0; i < rgb.length; i++) {
		var colorDec = parseInt(rgb[i], 16);
		colorAvg += colorDec;
	}

	colorAvg /= 6;

	if (colorAvg < 128) {
		body.style.color = "rgba(255,255,255,.5)";
	} else {
		body.style.color = "rgba(0,0,0,.5)";
	}
}

function randomizeColors() {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randButton.addEventListener("click", randomizeColors);

randomizeColors();