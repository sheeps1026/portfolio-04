"use strict";

const iconClock = document.querySelector(".icon-clock");

const clockContainer = document.querySelector(".clock");
const currentTime = clockContainer.querySelector("h1");
const clockClose = document.querySelector(".clock button");

function dateShow() {
  clockContainer.classList.add("active");
}

function dateHide() {
  clockContainer.classList.remove("active");
}

iconClock.addEventListener("click", dateShow);
clockClose.addEventListener("click", dateHide);

// Time
function getTime() {
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
