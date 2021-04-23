"use strict";

function modify(e) {
  const modifyBtn = document.querySelectorAll(".modify-btn");

  let modifyText;

  const noteTitle = document.querySelectorAll(".note-title");
  const noteDesc = document.querySelectorAll(".note-desc");

  for (let i = 0; i < modifyBtn.length; i++) {
    for (let j = 0; j < noteTitle.length; j++) {
      for (let k = 0; k < noteDesc.length; k++) {
        if (e.target.id === "modifyBtn") {
          modifyText.length = noteDesc.length;

          console.log(modifyText);
          console.log(modifyText.length);

          if (modifyBtn[i].innerText === "수정하기") {
            noteTitle[j].removeAttribute("disabled");
            noteDesc[k].removeAttribute("disabled");

            noteTitle[j].style.backgroundColor = "#E1E2E1";
            noteDesc[k].style.backgroundColor = "#E1E2E1";

            modifyBtn[i].innerText = "수정중";
          } else {
            noteTitle[j].setAttribute("disabled", true);
            noteDesc[k].setAttribute("disabled", true);

            noteTitle[j].style.background = "none";
            noteDesc[k].style.background = "none";

            modifyBtn[i].innerText = "수정하기";
          }

          modifyText[i] = noteDesc[k].value;
          noteDesc[k].innerHTML = modifyText[i];
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
