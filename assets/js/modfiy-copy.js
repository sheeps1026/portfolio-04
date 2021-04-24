"use strict";

function modify(event) {
  const modifyBtn = document.querySelectorAll(".modify-btn");

  const noteTitle = document.querySelectorAll(".note-title");
  const noteDesc = document.querySelectorAll(".note-desc");

  let modifyText;

  for (let i = 0; i < modifyBtn.length; i++) {
    for (let j = 0; j < noteDesc.length; j++) {
      modifyBtn[i].addEventListener("click", () => {
        if (i === j) {
          if (modifyBtn[i].innerText === "수정하기") {
            noteTitle[j].removeAttribute("disabled");
            noteDesc[j].removeAttribute("disabled");

            noteTitle[j].style.backgroundColor = "#eceff1";
            noteDesc[j].style.backgroundColor = "#eceff1";

            modifyBtn[i].innerText = "수정중";
          } else {
            noteTitle[j].setAttribute("disabled", true);
            noteDesc[j].setAttribute("disabled", true);

            noteTitle[j].style.background = "none";
            noteDesc[j].style.background = "none";

            modifyBtn[i].innerText = "수정하기";

            modifyText = noteDesc[j].value;
            noteDesc[j].innerHTML = modifyText;
          }
        }
      });
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
  const input = document.querySelectorAll(".sidebar-item input");
  const textarea = document.querySelectorAll(".sidebar-item textarea");

  const noteTitle = document.querySelectorAll(".note-title");
  const noteDesc = document.querySelectorAll(".note-desc");

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < noteTitle.length; j++) {
      if (i == j) {
        input[i].value = noteTitle[j].value;
        textarea[i].value = noteDesc[j].value;
      }
    }
  }
}

document.addEventListener("click", modify);
document.addEventListener("click", copy);

noteText();
setInterval(noteText, 1000);
