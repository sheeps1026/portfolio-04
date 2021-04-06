const searchInput = document.querySelector(".search-input");
const newNote = document.querySelector(".new-note");

const bookmark = document.querySelector("#bookmark");

const note = document.querySelector(".note");
const noteTags = document.querySelector(".note-tags");
const iconClock = document.querySelector(".icon-clock");
const iconLight = document.querySelector(".icon-light");
const iconTrash = document.querySelector(".icon-trash");
const noteCopy = document.querySelector(".note-copy");

const clockContainer = document.querySelector(".clock");
const currentTime = clockContainer.querySelector("h1");
const clockClose = document.querySelector(".clock button");

// Bookmark
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

// Copy
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

// Add tags
[].forEach.call(document.getElementsByClassName("notes-tags"), function (el) {
  const notesInput = document.createElement("input");
  const hiddenInput = document.createElement("input");
  const tags = [];

  notesInput.setAttribute("type", "text");
  notesInput.classList.add("notes-input");
  notesInput.placeholder = "태그를 입력하고 ,를 누르세요";

  hiddenInput.setAttribute("type", "hidden");
  hiddenInput.setAttribute("name", el.getAttribute("data-name"));

  notesInput.addEventListener("input", function () {
    const enteredTag = notesInput.value.split(",");

    if (enteredTag.length > 1) {
      enteredTag.forEach(function (t) {
        const filteredTag = filterTag(t);
        if (filteredTag.length > 0) addTag(filteredTag);
      });
      notesInput.value = "";
    }
  });

  notesInput.addEventListener("keydown", function (e) {
    const keyCode = e.which || e.keyCode;
    if (keyCode === 8 && notesInput.value.length === 0 && tags.length > 0) {
      removeTag(tags.length - 1);
    }
  });

  el.appendChild(notesInput);
  el.appendChild(hiddenInput);

  addTag("99u");
  addTag("Design");
  addTag("Conference");

  function addTag(text) {
    const tag = {
      text: text,
      element: document.createElement("span"),
    };

    tag.element.classList.add("tag");
    tag.element.textContent = tag.text;

    const notesClose = document.createElement("span");
    notesClose.classList.add("notes-close");
    notesClose.addEventListener("click", function () {
      removeTag(tags.indexOf(tag));
    });
    tag.element.appendChild(notesClose);

    tags.push(tag);

    el.insertBefore(tag.element, notesInput);

    refreshTags();
  }

  function removeTag(index) {
    const tag = tags[index];
    tags.splice(index, 1);
    el.removeChild(tag.element);
    refreshTags();
  }

  function refreshTags() {
    const tagsList = [];
    tags.forEach(function (t) {
      tagsList.push(t.text);
    });
    hiddenInput.value = tagsList.join(",");
  }

  function filterTag(tag) {
    return tag
      .replace(/[^\w -]/g, "")
      .trim()
      .replace(/\W+/g, "-");
  }
});

// Search
function filter() {
  const searchInput = document
    .querySelector(".search-input")
    .value.toUpperCase();
  const noteItem = document.getElementsByClassName("note-item");

  let noteItemTitle = 0;

  for (let i = 0; i < noteItem.length; i++) {
    noteItemTitle = noteItem[i].getElementsByClassName("note-item-title");

    if (noteItemTitle[0].innerHTML.toUpperCase().indexOf(searchInput) > -1) {
      noteItem[i].style.display = "flex";
    } else {
      noteItem[i].style.display = "none";
    }
  }
}

searchInput.addEventListener("keyup", filter);

// Date
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

// Notification
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

// Form
const userForm = document.querySelector(".user-form");
const userInput = userForm.querySelector("input");
const greetings = document.querySelector(".greetings");

const USER_LS = "currentUser";
const CLASS_SHOWING = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

const modalOverlay = document.createElement("div");
document.body.appendChild(modalOverlay);

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = userInput.value;
  showGreetings(currentValue);
  saveName(currentValue);
}

function writeName() {
  userForm.classList.add(CLASS_SHOWING);
  userForm.addEventListener("submit", handleSubmit);
}

function showGreetings(text) {
  userForm.classList.remove(CLASS_SHOWING);
  greetings.classList.add(CLASS_SHOWING);
  greetings.innerText = `${text}의 노트`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);

  if (currentUser === null) {
    writeName();
  } else {
    showGreetings(currentUser);
  }
}

function formInit() {
  loadName();
}

formInit();

// Create
// function noteCreate() {
//   const note = document.createElement("section");
//   note.classList.add("note");
//   document.querySelector("body").appendChild(note);

//   const noteInformation = document.createElement("div");
//   noteInformation.classList.add("note-information");
//   note.appendChild(noteInformation);

//   const notesTag = document.createElement("div");
//   notesTag.classList.add("notes-tags");
//   notesTag.setAttribute("data-name", "notes-input");
//   noteInformation.appendChild(notesTag);
// }

// newNote.addEventListener("click", noteCreate);
