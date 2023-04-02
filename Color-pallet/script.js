"use strict";
let text = document.querySelector(".text");
let button = document.querySelector(".btn");

function color() {
  let num = [];
  for (let i = 0; i < 3; i++) {
    num.push(Math.trunc(Math.random() * 256));
  }
  return `rgb(${num[0]},${num[1]},${num[2]})`;
}

button.addEventListener("click", function () {
  let newColor = color();
  text.textContent = newColor;
  document.querySelector("body").style.backgroundColor = newColor;
});
