"use strict";

const note = document.querySelector(".note");

const iconDelete = document.querySelector(".note-icons button:last-child");

iconDelete.addEventListener("click", function () {
  note.remove();
});
