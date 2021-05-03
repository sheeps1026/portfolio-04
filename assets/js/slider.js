function prevMove(event) {
  let elem = event.target;

  let index = 0;

  const sidebarItem = document.querySelectorAll(".sidebar-item");
  const note = document.querySelectorAll(".note");

  if (elem.nodeName == "I") {
    while (!elem.classList.contains("header-arrow__prev")) {
      elem = elem.parentNode;

      if (elem.nodeName == "BODY") {
        elem = null;
        return;
      }
    }
  }

  for (let i = 0; i < sidebarItem.length; i++) {
    if (sidebarItem[i].classList.contains("active")) {
      index = i;
    }
  }

  sidebarItem[index].classList.remove("active");
  sidebarItem[index].style.background = "none";
  note[index].style.display = "none";
  index--;

  if (index < 0) {
    index = sidebarItem.length - 1;
  }

  sidebarItem[index].classList.add("active");
  sidebarItem[index].style.backgroundColor = "#eceff1";
  note[index].style.display = "block";
}

function nextMove(event) {
  let elem = event.target;

  let index = 0;

  const sidebarItem = document.querySelectorAll(".sidebar-item");
  const note = document.querySelectorAll(".note");

  if (elem.nodeName == "I") {
    while (!elem.classList.contains("header-arrow__next")) {
      elem = elem.parentNode;

      if (elem.nodeName == "BODY") {
        elem = null;
        return;
      }
    }
  }

  for (let i = 0; i < sidebarItem.length; i++) {
    if (sidebarItem[i].classList.contains("active")) {
      index = i;
    }
  }

  sidebarItem[index].classList.remove("active");
  sidebarItem[index].style.background = "none";
  note[index].style.display = "none";
  index++;

  if (index == sidebarItem.length) {
    index = 0;
  }

  sidebarItem[index].classList.add("active");
  sidebarItem[index].style.backgroundColor = "#eceff1";
  note[index].style.display = "block";
}

document.addEventListener("click", prevMove);
document.addEventListener("click", nextMove);
