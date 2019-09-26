var cssValuePrint = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("random-btn");

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	GetColorValues();
}

function GetColorValues(){
  cssValuePrint.textContent = "Swatch 1 (" + color1.value + "), " + "Swatch 2: (" + color2.value + ")";
}


GetColorValues();
color1.addEventListener("input", setGradient);	
color2.addEventListener("input", setGradient);