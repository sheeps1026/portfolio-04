"use strict";

function deletePage(e) {
  const note = document.querySelector(".note");

  if (e.target.id === "icon-delete") {
    note.remove();
  }
}

document.addEventListener("click", deletePage);
