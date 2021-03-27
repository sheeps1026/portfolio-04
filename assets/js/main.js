const bookmark = document.querySelector("#bookmark");

const note = document.querySelector(".note");
const noteCopy = document.querySelector(".note-copy");

// Bookmark
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

// Copy
function copy() {
  const noteDesc = document.querySelector(".note-desc").innerText;

  const tempDesc = document.createElement("textarea");
  tempDesc.setAttribute("type", "text");

  document.querySelector(".note-desc").appendChild(tempDesc);

  tempDesc.value = noteDesc;

  tempDesc.select();
  document.execCommand("copy");

  document.querySelector(".note-desc").removeChild(tempDesc);
}

noteCopy.onclick = copy;
