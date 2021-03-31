const bookmark = document.querySelector("#bookmark");

const note = document.querySelector(".note");
const noteTags = document.querySelector(".note-tags");
const addTagsBtn = document.querySelector(".add-tags-btn");
const noteCopy = document.querySelector(".note-copy");

// Bookmark
function bookmarkActive() {
  document.querySelector(".subsidebar").classList.toggle("active");
  document.querySelector(".note").classList.toggle("position");
}

function bookmarkChange() {
  if (bookmark.innerHTML == "페이지ㅤ열기") {
    bookmark.innerHTML = "페이지ㅤ닫기";
  } else {
    bookmark.innerHTML = "페이지ㅤ열기";
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

const searchInput = document.querySelector(".search-input");

// Search
function filter() {
  const searchInput = document
    .querySelector(".search-input")
    .value.toUpperCase();
  const notesItem = document.getElementsByClassName("recent-notes-item");

  let notesItemTitle = 0;

  for (let i = 0; i < notesItem.length; i++) {
    notesItemTitle = notesItem[i].getElementsByClassName("notes-item-title");

    if (notesItemTitle[0].innerHTML.toUpperCase().indexOf(searchInput) > -1) {
      notesItem[i].style.display = "flex";
    } else {
      notesItem[i].style.display = "none";
    }
  }
}

searchInput.addEventListener("keyup", filter);
