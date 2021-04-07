// Copy
const noteCopy = document.querySelector(".note-copy");

function copy() {
  const noteDesc = document.querySelector(".note-desc").innerText;

  const tempDesc = document.createElement("textarea");
  tempDesc.setAttribute("type", "text");
  document.querySelector(".note-desc").appendChild(tempDesc);

  tempDesc.innerText = noteDesc;

  tempDesc.select();
  document.execCommand("copy");

  document.querySelector(".note-desc").removeChild(tempDesc);
  noteCopy.innerText = "복사성공";
}

function copyText() {
  noteCopy.innerText = "복사";
}

function copyInit() {
  copy();
  setTimeout(copyText, 3000);
}

noteCopy.addEventListener("click", copyInit);
