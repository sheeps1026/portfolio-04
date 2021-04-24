"use strict";

function getCount(event) {
  let button = event.target.closest("button");

  if (!button) {
    return;
  }

  let notifyCount = document.querySelector(".notify-count");

  const iconLight = document.querySelectorAll(".icon-light");

  button.classList.toggle("active");

  for (let i = 0; i < iconLight.length; i++) {
    let checked = 0;

    for (let j = 0; j < iconLight.length; j++) {
      if (iconLight[j].classList.contains("active")) {
        checked += 1;
      }

      notifyCount.innerText = checked;
    }
  }
}

document.addEventListener("click", getCount);
