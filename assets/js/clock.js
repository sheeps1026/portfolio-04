"use strict";

function clockShow(event) {
  const iconClock = document.querySelectorAll(".icon-clock");
  const clockContainer = document.querySelector(".clock");

  if (event.target.id === "iconClock") {
    for (let i = 0; i < iconClock.length; i++) {
      clockContainer.classList.add("active");
    }
  }
}

function clockHide(event) {
  const clockContainer = document.querySelector(".clock");

  let elem = event.target;

  while (!elem.classList.contains("clock-btn")) {
    elem = elem.parentNode;

    if (elem.nodeName === "BODY") {
      elem = null;

      return;
    }
  }

  clockContainer.classList.remove("active");
}

document.addEventListener("click", clockShow);
document.addEventListener("click", clockHide);

function getTime() {
  const currentTime = document.querySelector(".clock h1");

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  currentTime.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function timeInit() {
  getTime();
  setInterval(getTime, 1000);
}

timeInit();
