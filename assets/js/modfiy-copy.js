"use strict";

const modifyBtn = document.querySelector(".modify-btn");

let modifyText;

const noteTitle = document.querySelector(".note-title");
const noteCopy = document.querySelector(".note-copy");
const noteDesc = document.querySelector(".note-desc");

function modify() {
  if (modifyBtn.innerText === "수정하기") {
    noteTitle.removeAttribute("disabled");
    noteDesc.removeAttribute("disabled");

    noteTitle.style.backgroundColor = "#E1E2E1";
    noteDesc.style.backgroundColor = "#E1E2E1";
    modifyBtn.innerText = "수정중";
  } else {
    noteTitle.setAttribute("disabled", true);
    noteDesc.setAttribute("disabled", true);

    noteTitle.style.background = "none";
    noteDesc.style.background = "none";
    modifyBtn.innerText = "수정하기";
  }

  modifyText = noteDesc.value;
  // console.log(`modifyText: ${modifyText}`);

  noteDesc.innerHTML = modifyText;
  // console.log(`noteDesc.value: ${noteDesc.value}`);
}

function copy() {
  if (document.querySelector(".note-desc")) {
    const tempText = document.createElement("textarea");
    document.body.appendChild(tempText);

    tempText.innerHTML = noteDesc.value;

    tempText.select();
    document.execCommand("copy");

    // console.log(tempText);
    document.body.removeChild(tempText);

    noteCopy.innerText = "복사성공";
  } else {
    noteCopy.innerText = "복사실패";
  }
}

function copyText() {
  noteCopy.innerText = "복사하기";
}

function copyInit() {
  copy();
  setTimeout(copyText, 2000);
}

modifyBtn.addEventListener("click", modify);
noteCopy.addEventListener("click", copyInit);
