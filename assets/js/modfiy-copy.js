"use strict";

function modify(event) {
  let button = event.target.closest(".modify-btn");

  if (!button) return;

  const buttons = document.querySelectorAll(".modify-btn");
  const noteTitle = document.querySelectorAll(".note-title");
  const noteDesc = document.querySelectorAll(".note-desc");

  const index = Array.prototype.indexOf.call(buttons, button);

  let modifyText;

  if (button.innerText === "수정하기") {
    noteTitle[index].removeAttribute("disabled");
    noteDesc[index].removeAttribute("disabled");

    noteTitle[index].style.backgroundColor = "#eceff1";
    noteDesc[index].style.backgroundColor = "#eceff1";

    button.innerText = "수정중";
  } else {
    noteTitle[index].setAttribute("disabled", true);
    noteDesc[index].setAttribute("disabled", true);

    noteTitle[index].style.background = "none";
    noteDesc[index].style.background = "none";

    button.innerText = "수정하기";

    modifyText = noteDesc[index].value;
    noteDesc[index].innerHTML = modifyText;
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
