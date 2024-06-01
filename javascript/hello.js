// hello.js

function switchoff() {
  document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
  document.getElementById("Imagcate").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
  document.getElementById("switchstatus").textContent = "Switched off";
  document.getElementById("onSwitch").style.backgroundColor = "red";
  document.getElementById("offSwitch").style.backgroundColor = "blue";
}

function switchOn() {
  document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  document.getElementById("Imagcate").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
  document.getElementById("switchstatus").textContent = "Switched on";
  document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9";
  document.getElementById("offSwitch").style.backgroundColor = "#e12d39";
}
