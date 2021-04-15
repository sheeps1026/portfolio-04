"use strict";

const note = document.querySelector(".note");

const iconDelete = document.querySelector(".note-icons:last-child");

iconDelete.addEventListener("click", function () {
  note.remove();
});
