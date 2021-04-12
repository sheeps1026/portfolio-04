"use strict";

const noteCopy = document.querySelector(".note-copy");
const noteDescText = document.querySelector(".note-desc").value;

function copy() {
  const tempText = document.createElement("textarea");
  document.body.appendChild(tempText);

  tempText.innerText = noteDescText;

  tempText.select();
  document.execCommand("copy");

  console.log(tempText);

  document.body.removeChild(tempText);
  noteCopy.innerText = "복사성공";
}

function copyText() {
  noteCopy.innerText = "복사";
}

function copyInit() {
  copy();
  setTimeout(copyText, 3000);
}

noteCopy.addEventListener("click", copyInit);
