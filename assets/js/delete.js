"use strict";

function deletePage(event) {
  let elem = event.target;

  let button = elem.closest(".icon-delete");
  if (!button) return;

  let notifyCount = document.querySelector(".notify-count");
  const sidebarItem = document.querySelectorAll(".sidebar-item");
  const sidebarSeparator = document.querySelectorAll(".sidebar-separator");
  const note = document.querySelectorAll(".note");
  const iconLight = document.querySelectorAll(".icon-light");
  const iconDelete = document.querySelectorAll(".icon-delete");

  const index = Array.prototype.indexOf.call(iconDelete, button);

  if (elem.nodeName == "I") {
    while (!elem.classList.contains("icon-delete")) {
      elem = elem.parentNode;

      if (elem.nodeName == "BODY") {
        elem = null;
        return;
      }
    }
  }

  for (let j = 0; j < iconLight.length; j++) {
    if (iconLight[index].classList.contains("active")) {
      iconLight[index].classList.remove("active");

      notifyCount.innerText -= 1;
    }
  }

  sidebarItem[index].remove();
  sidebarSeparator[index].remove();
  note[index].remove();

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
