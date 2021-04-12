"use strict";

const modifyBtn = document.querySelector(".modify-btn");

let modifyText;

const noteCopy = document.querySelector(".note-copy");
const noteDesc = document.querySelector(".note-desc");

function modify() {
  if (modifyBtn.innerText === "수정하기") {
    noteDesc.removeAttribute("disabled");

    noteDesc.style.backgroundColor = "#E1E2E1";
    modifyBtn.innerText = "수정중";
  } else {
    noteDesc.setAttribute("disabled", true);

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
