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

function copy(event) {
  let button = event.target.closest(".note-copy");
  if (!button) return;

  const noteCopy = document.querySelectorAll(".note-copy");
  const noteDesc = document.querySelectorAll(".note-desc");

  const index = Array.prototype.indexOf.call(noteCopy, button);

  const tempText = document.createElement("textarea");
  tempText.classList.add("temp-text");
  document.body.appendChild(tempText);

  tempText.innerHTML = noteDesc[index].innerHTML;

  tempText.select();
  document.execCommand("copy");

  document.body.removeChild(tempText);

  noteCopy[index].innerText = "복사성공";
  setTimeout(function () {
    noteCopy[index].innerText = "복사하기";
  }, 2000);
}

document.addEventListener("click", modify);
document.addEventListener("click", copy);
