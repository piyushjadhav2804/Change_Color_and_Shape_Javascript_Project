import "./styles.css";

var changeColor = document.getElementById("color");
var changeShape = document.getElementById("shape");

var color = ["#5ae4b2", "#A52A2A", "#ff99ff", "#ff6666", "#339966"];
var shape = ["rectangle", "square", "triangle"];

changeColor.addEventListener("click", funColor);
changeShape.addEventListener("click", funShape);

function funColor() {
  var random = Math.floor(Math.random() * 5);
  document.getElementById("circle").style.background = color[random];
}

function funShape() {
  var check = document.querySelectorAll("div");
  var random = Math.floor(Math.random() * 3);

  check[2].id = shape[random];
}
