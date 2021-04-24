"use strict";

function addItem(event) {
  const tagInput = document.querySelector(".tag-input");
  let tagInputText;
  const tagsList = document.querySelector(".tags-list");

  let elem = event.target;

  if (elem.id === "addTag") {
    tagInputText = tagInput.value;

    if (tagInputText == "") {
      alert("아무 태그나 입력하세요.");
    } else {
      const tagsItem = document.createElement("li");
      tagsItem.classList.add("tags-item");
      tagsList.appendChild(tagsItem);

      const tagsItemSpan = document.createElement("span");
      tagsItem.appendChild(tagsItemSpan);

      tagsItem.innerHTML = tagInputText;

      tagsList.insertBefore(tagsItem, tagsList.childNodes[0]);

      tagInput.value = "";
    }
  }
}

// tagsList.addEventListener("click", function (event) {
//   let elem = event.target;

//   if (elem.classList.contains("tags-item")) {
//     elem.classList.toggle("checked");
//   }
// });

document.addEventListener("click", addItem);
