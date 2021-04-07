// Bookmark
const bookmark = document.querySelector("#bookmark");

function bookmarkActive() {
  document.querySelector(".subsidebar").classList.toggle("active");
  document.querySelector(".note").classList.toggle("position");
}

function bookmarkTextChange() {
  if (bookmark.innerHTML == "페이지ㅤ열기") {
    bookmark.innerHTML = "페이지ㅤ닫기";
  } else {
    bookmark.innerHTML = "페이지ㅤ열기";
  }
}

function bookmarkInit() {
  bookmarkActive();
  bookmarkTextChange();
}

bookmark.addEventListener("click", bookmarkInit);
