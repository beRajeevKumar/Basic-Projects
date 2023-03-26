"use strict";

// Example

// function gererateQR() {}
const btn = document.querySelector(".btn");
const qrImg = document.querySelector(".qr-img");
const qrText = document.querySelector(".qr-text");
const qrBox = document.querySelector(".img-box");

btn.addEventListener("click", function () {
  if (qrText.value.length > 0) {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    qrImg.classList.remove("hidden");
  } else {
    qrText.classList.add("error");
  }
});
