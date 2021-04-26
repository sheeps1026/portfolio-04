"use strict";

function addItem(event) {
  const target = event.target;
  let tagInput, tagsList;

  if (target.id === "addTag") {
    tagInput = target.previousElementSibling;

    if (tagInput.value == "") {
      alert("아무 태그나 입력하세요.");
      return;
    }

    tagsList = target.parentNode.parentNode.nextElementSibling;

    const tagItem = document.createElement("li");
    tagItem.setAttribute("id", "tagItem");
    tagItem.classList.add("tag-item");
    tagsList.appendChild(tagItem);

    const tagsItemSpan = document.createElement("span");
    tagItem.appendChild(tagsItemSpan);

    tagItem.innerHTML = tagInput.value;

    tagsList.insertBefore(tagItem, tagsList.childNodes[0]);
    tagInput.value = "";
  }
}

function removeTag(event) {
  let elem = event.target;
  const tagItem = document.querySelectorAll(".tag-item");

  if (elem.nodeName === "SPAN") {
    while (!elem.classList.contains("tag-item")) {
      elem = elem.parentNode;

      if (elem.nodeName === "BODY") {
        elem = null;
        return;
      }
    }
  }

  if (elem.id === "tagItem") {
    if (elem.classList.contains("tag-item")) {
      elem.classList.toggle("checked");

      for (let i = 0; i < tagItem.length; i++) {
        tagItem[i].addEventListener("dblclick", () => {
          elem.remove();
        });
      }
    }
  }
}

document.addEventListener("click", addItem);
document.addEventListener("click", removeTag);
