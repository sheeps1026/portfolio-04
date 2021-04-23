"use strict";

function deletePage() {
  const sidebarItem = document.querySelectorAll(".sidebar-item");

  const sidebarSeparator = document.querySelectorAll(".sidebar-separator");

  const note = document.querySelectorAll(".note");
  const iconDelete = document.querySelectorAll(".icon-delete");

  for (let i = 0; i < note.length; i++) {
    for (let j = 0; j < sidebarItem.length; j++) {
      iconDelete[i].addEventListener("click", () => {
        if (i === j) {
          note[i].remove();
          sidebarItem[j].remove();
          sidebarSeparator[i].remove();
        }
      });
    }
  }
}

document.addEventListener("click", deletePage);
