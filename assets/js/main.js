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

// Add tags
[].forEach.call(document.getElementsByClassName("tags-input"), function (el) {
  let hiddenInput = document.createElement("input");
  let mainInput = document.createElement("input");
  let tags = [];

  hiddenInput.setAttribute("type", "hidden");
  hiddenInput.setAttribute("name", el.getAttribute("data-name"));

  mainInput.setAttribute("type", "text");
  mainInput.classList.add("main-input");
  mainInput.addEventListener("input", function () {
    let enteredTags = mainInput.value.split(",");
    if (enteredTags.length > 1) {
      enteredTags.forEach(function (t) {
        let filteredTag = filterTag(t);
        if (filteredTag.length > 0) addTag(filteredTag);
      });
      mainInput.value = "";
    }
  });

  mainInput.addEventListener("keydown", function (e) {
    let keyCode = e.which || e.keyCode;
    if (keyCode === 8 && mainInput.value.length === 0 && tags.length > 0) {
      removeTag(tags.length - 1);
    }
  });

  el.appendChild(mainInput);
  el.appendChild(hiddenInput);

  addTag("99u");
  addTag("Design");
  addTag("Conference");

  function addTag(text) {
    let tag = {
      text: text,
      element: document.createElement("span"),
    };

    tag.element.classList.add("tag");
    tag.element.textContent = tag.text;

    let closeBtn = document.createElement("span");
    closeBtn.classList.add("close");
    closeBtn.addEventListener("click", function () {
      removeTag(tags.indexOf(tag));
    });
    tag.element.appendChild(closeBtn);

    tags.push(tag);

    el.insertBefore(tag.element, mainInput);

    refreshTags();
  }

  function removeTag(index) {
    let tag = tags[index];
    tags.splice(index, 1);
    el.removeChild(tag.element);
    refreshTags();
  }

  function refreshTags() {
    let tagsList = [];
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
