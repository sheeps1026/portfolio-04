"use strict";

function deletePage(event) {
  let button = event.target.closest(".icon-delete");
  if (!button) return;

  const sidebarItem = document.querySelectorAll(".sidebar-item");
  const sidebarSeparator = document.querySelectorAll(".sidebar-separator");
  const note = document.querySelectorAll(".note");
  const iconDelete = document.querySelectorAll(".icon-delete");

  const index = Array.prototype.indexOf.call(iconDelete, button);

  note[index].remove();
  sidebarItem[index].remove();
  sidebarSeparator[index].remove();
}

document.addEventListener("click", deletePage);
