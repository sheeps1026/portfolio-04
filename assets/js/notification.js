"use strict";

function getCount() {
  let notifyCount = document.querySelector(".notify-count");
  const iconLight = document.querySelectorAll(".icon-light");

  for (let i = 0; i < iconLight.length; i++) {
    iconLight[i].addEventListener("click", () => {
      let checked = 0;

      iconLight[i].classList.toggle("active");

      for (let j = 0; j < iconLight.length; j++) {
        if (iconLight[j].classList.contains("active")) {
          checked += 1;
        }
      }
      notifyCount.innerText = checked;
    });
  }
}

document.addEventListener("click", getCount);

document.addEventListener("click", function (event) {
  console.log(event.target);
});
