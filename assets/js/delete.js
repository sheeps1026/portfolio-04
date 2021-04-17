"use strict";

function deletePage(e) {
  const note = document.querySelector(".note");

  if (e.target.id === "iconDelete") {
    note.remove();
  }
}

document.addEventListener("click", deletePage);
