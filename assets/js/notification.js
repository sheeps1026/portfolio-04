// "use strict";
// const notification = document.querySelector(".notification i");
// let notifyCount = document.querySelectorAll(".notify-count");

// const iconLight = document.querySelector(".icon-light");
// const iconLightActive = document.querySelectorAll(".icon-light.active");

// let i = 0;
// let checked = 0;

// iconLight.addEventListener("click", () => {
//   iconLight.classList.toggle("active");
// });

// function getCount() {
//   for (i = 0; i < iconLightActive.length; i++) {
//     checked += 1;
//   }

//   notifyCount[i].innerText = checked;

//   console.log(`notifyCount: ${notifyCount.length}`);
//   console.log(`iconLightActive.length: ${iconLightActive.length}`);
//   console.log(`notifyCount[0].innerText: ${notifyCount[0].innerText}`);

//   // notification.classList.toggle("active");
// }

// iconLight.addEventListener("click", getCount);

const iconLight = document.querySelector(".icon-light");

iconLight.addEventListener("click", () => {
  document.querySelector(".icon-light").classList.toggle("active");
});

function getCount() {
  const notification = document.querySelector(".notification i");
  let notifyCount = document.querySelectorAll(".notify-count");
  const iconLight = document.querySelectorAll(".icon-light.active");
  let checked = 0;

  for (let i = 0; i < iconLight.length; i++) {
    checked += 1;
  }

  notifyCount[0].innerText = checked;

  notification.classList.toggle("active");
}

iconLight.addEventListener("click", getCount);
