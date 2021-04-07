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
