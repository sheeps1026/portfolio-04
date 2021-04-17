"use strict";

function modify(e) {
  const modifyBtn = document.querySelector(".modify-btn");

  let modifyText;

  const noteTitle = document.querySelector(".note-title");
  const noteDesc = document.querySelector(".note-desc");

  if (e.target.id === "modifyBtn") {
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
    noteDesc.innerHTML = modifyText;
  }
}

function copy(e) {
  const noteDesc = document.querySelector(".note-desc");

  if (e.target.id === "noteCopy") {
    const tempText = document.createElement("textarea");
    document.body.appendChild(tempText);

    tempText.innerHTML = noteDesc.value;

    tempText.select();
    document.execCommand("copy");

    document.body.removeChild(tempText);
  }
}

document.addEventListener("click", modify);
document.addEventListener("click", copy);
