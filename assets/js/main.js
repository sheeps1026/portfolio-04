const bookmark = document.querySelector("#bookmark");

const note = document.querySelector(".note");

function bookmarkActive() {
  document.querySelector(".subsidebar").classList.toggle("active");
  document.querySelector(".note").classList.toggle("position");
}

function bookmarkChange() {
  if (bookmark.innerHTML == "O P E N") {
    bookmark.innerHTML = "C L O S E";
  } else {
    bookmark.innerHTML = "O P E N";
  }
}

function bookmarkFunction() {
  bookmarkActive();
  bookmarkChange();
}

bookmark.onclick = bookmarkFunction;
