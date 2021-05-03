"use strict";

function deletePage(event) {
  let elem = event.target;

  let button = elem.closest(".icon-delete");
  if (!button) return;

  const sidebarItem = document.querySelectorAll(".sidebar-item");
  const sidebarSeparator = document.querySelectorAll(".sidebar-separator");
  const note = document.querySelectorAll(".note");
  const iconDelete = document.querySelectorAll(".icon-delete");

  const index = Array.prototype.indexOf.call(iconDelete, button);

  sidebarItem[index].remove();
  sidebarSeparator[index].remove();
  note[index].remove();

  if (elem.nodeName == "I") {
    while (!elem.classList.contains("icon-delete")) {
      elem = elem.parentNode;

      if (elem.nodeName == "BODY") {
        elem = null;
        return;
      }
    }
  }

  for (let i = 0; i < sidebarItem.length; i++) {
    if (elem == iconDelete[sidebarItem.length - 1]) {
      sidebarItem[sidebarItem.length - 2].classList.add("active");
      sidebarItem[sidebarItem.length - 2].style.backgroundColor = "#eceff1";
      note[sidebarItem.length - 2].style.display = "block";
    } else {
      sidebarItem[sidebarItem.length - 1].classList.add("active");
      sidebarItem[sidebarItem.length - 1].style.backgroundColor = "#eceff1";
      note[sidebarItem.length - 1].style.display = "block";
    }
  }
}

document.addEventListener("click", deletePage);
