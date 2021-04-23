"use strict";

function modify(event) {
  const modifyBtn = document.querySelectorAll(".modify-btn");

  const noteTitle = document.querySelectorAll(".note-title");
  const noteDesc = document.querySelectorAll(".note-desc");

  let elem = event.target;

  if (elem.id === "modifyBtn") {
    for (let i = 0; i < modifyBtn.length; i++) {
      for (let j = 0; j < noteDesc.length; j++) {
        if (i === j) {
          let modifyText;

          if (modifyBtn[i].innerText === "수정하기") {
            noteTitle[i].removeAttribute("disabled");
            noteDesc[i].removeAttribute("disabled");

            noteTitle[i].style.backgroundColor = "#F5F5F6";
            noteDesc[i].style.backgroundColor = "#F5F5F6";

            modifyBtn[i].innerText = "수정중";
          } else {
            noteTitle[i].setAttribute("disabled", true);
            noteDesc[i].setAttribute("disabled", true);

            noteTitle[i].style.background = "none";
            noteDesc[i].style.background = "none";

            modifyBtn[i].innerText = "수정하기";

            modifyText = noteDesc[i].value;
            noteDesc[i].innerHTML = modifyText;
          }
        }
      }
    }
  }
}

function copy() {
  const noteCopy = document.querySelectorAll(".note-copy");
  const noteDesc = document.querySelectorAll(".note-desc");

  for (let i = 0; i < noteDesc.length; i++) {
    for (let j = 0; j < noteCopy.length; j++) {
      noteCopy[j].addEventListener("click", () => {
        if (i === j) {
          const tempText = document.createElement("textarea");
          tempText.classList.add("temp-text");
          document.body.appendChild(tempText);

          tempText.innerHTML = noteDesc[i].innerHTML;

          tempText.select();
          document.execCommand("copy");

          document.body.removeChild(tempText);
        }
      });
    }
  }
}

function noteText() {
  const input = document.querySelector(".sidebar-item input");
  const textarea = document.querySelector(".sidebar-item textarea");

  const noteTitle = document.querySelector(".note-title");
  const noteDesc = document.querySelector(".note-desc");

  input.value = noteTitle.value;
  textarea.value = noteDesc.value;
}

document.addEventListener("click", modify);
document.addEventListener("click", copy);

noteText();
setInterval(noteText, 1000);
