"use strict";

const modifyBtn = document.querySelector(".modify-btn");
const noteDesc2 = document.querySelector(".note-desc");

function modify() {
  if (modifyBtn.innerText === "수정하기") {
    noteDesc2.removeAttribute("disabled");

    modifyBtn.innerText = "수정중";
  } else {
    noteDesc2.setAttribute("disabled", true);

    modifyBtn.innerText = "수정하기";
  }
}

modifyBtn.addEventListener("click", modify);
