// Notification
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
