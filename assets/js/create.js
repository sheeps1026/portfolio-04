"use strict";

const noteCreateBtn = document.querySelector(".note-create");

function createPreview() {
  const sidebarList = document.querySelector(".sidebar-list");

  const sidebarItem = document.createElement("li");
  sidebarItem.classList.add("sidebar-item");
  sidebarList.appendChild(sidebarItem);

  const input = document.createElement("input");
  const textarea = document.createElement("textarea");
  input.value = "기본적인 문석 작성툴입니다.";
  textarea.innerText =
    "작성법은 상당히 간단합니다. 쓰고 싶은 글의 내용을 생각하고 그걸 적으면 됩니다.";
  input.setAttribute("disabled", true);
  textarea.setAttribute("disabled", true);
  sidebarItem.appendChild(input);
  sidebarItem.appendChild(textarea);

  const sidebarSeparator = document.createElement("div");
  sidebarSeparator.classList.add("sidebar-separator");
  sidebarList.appendChild(sidebarSeparator);
}

function createNote() {
  const noteList = document.querySelector(".note-list");

  // note
  const note = document.createElement("li");
  note.classList.add("note");
  noteList.appendChild(note);

  // note-information
  const noteInformation = document.createElement("div");
  noteInformation.classList.add("note-information");
  note.appendChild(noteInformation);

  const noteTags = document.createElement("div");
  noteTags.classList.add("note-tags");
  noteTags.setAttribute("data-name", "notes-input");
  noteInformation.appendChild(noteTags);

  const noteIcons = document.createElement("div");
  noteIcons.classList.add("note-icons");
  noteInformation.appendChild(noteIcons);

  const iconClock = document.createElement("button");
  const iconLight = document.createElement("button");
  const iconDelete = document.createElement("button");
  iconClock.classList.add("icon-clock");
  iconLight.classList.add("icon-light");
  iconDelete.classList.add("icon-delete");
  iconDelete.setAttribute("id", "iconDelete");
  iconClock.setAttribute("type", "button");
  iconLight.setAttribute("type", "button");
  iconDelete.setAttribute("type", "button");
  noteIcons.appendChild(iconClock);
  noteIcons.appendChild(iconLight);
  noteIcons.appendChild(iconDelete);

  const ICON_1 = document.createElement("i");
  const ICON_2 = document.createElement("i");
  const ICON_3 = document.createElement("i");
  ICON_1.classList.add("far", "fa-clock");
  ICON_1.setAttribute("id", "iconClock");
  iconClock.appendChild(ICON_1);
  ICON_2.classList.add("fas", "fa-lightbulb");
  ICON_2.setAttribute("id", "iconLight");
  iconLight.appendChild(ICON_2);
  ICON_3.classList.add("far", "fa-trash-alt");
  iconDelete.appendChild(ICON_3);

  // note-days
  const noteDays = document.createElement("div");
  noteDays.classList.add("note-days");
  note.appendChild(noteDays);

  const P_1 = document.createElement("p");
  const P_2 = document.createElement("p");
  P_1.innerText = "Created: 13 Jun";
  P_2.innerText = "Updated: 19 Jun";
  noteDays.appendChild(P_1);
  noteDays.appendChild(P_2);

  // note-separator
  const noteSeparator = document.createElement("div");
  noteSeparator.classList.add("note-separator");
  note.appendChild(noteSeparator);

  // note-text
  const noteText = document.createElement("div");
  noteText.classList.add("note-text");
  note.appendChild(noteText);

  const noteHeader = document.createElement("header");
  noteHeader.classList.add("note-header");
  noteText.appendChild(noteHeader);

  const noteTitle = document.createElement("input");
  noteTitle.classList.add("note-title");
  noteTitle.setAttribute("disabled", true);
  noteTitle.value = "기본적인 문서 작성 툴입니다";
  noteHeader.appendChild(noteTitle);

  const noteHeaderBox = document.createElement("div");
  noteHeader.appendChild(noteHeaderBox);

  const modifyBtn = document.createElement("button");
  const noteCopy = document.createElement("button");
  modifyBtn.setAttribute("id", "modifyBtn");
  modifyBtn.classList.add("modify-btn", "fill-button");
  noteCopy.classList.add("note-copy", "fill-button");
  noteCopy.setAttribute("id", "noteCopy");
  modifyBtn.setAttribute("type", "button");
  modifyBtn.innerText = "수정하기";
  noteCopy.innerText = "복사하기";
  noteHeaderBox.appendChild(modifyBtn);
  noteHeaderBox.appendChild(noteCopy);

  const noteDesc = document.createElement("textarea");
  noteDesc.classList.add("note-desc");
  noteDesc.innerText =
    "작성법은 상당히 간단합니다. 쓰고 싶은 글의 내용을 생각하고 그걸 적으면 됩니다.";
  noteDesc.setAttribute("cols", 30);
  noteDesc.setAttribute("rows", 10);
  noteDesc.setAttribute("disabled", true);
  noteText.appendChild(noteDesc);

  const noteTextarea = document.createElement("div");
  noteTextarea.classList.add("note-textarea");
  noteText.appendChild(noteTextarea);

  const noteTextarea_TEXTAREA = document.createElement("textarea");
  noteTextarea_TEXTAREA.placeholder = "텍스트를 입력하세요";
  noteTextarea_TEXTAREA.setAttribute("cols", 30);
  noteTextarea_TEXTAREA.setAttribute("rows", 10);
  noteTextarea.appendChild(noteTextarea_TEXTAREA);
}

function previewBtn() {
  createPreview();
  createNote();

  const sidebarItem = document.querySelectorAll(".sidebar-item");
  let note = document.querySelectorAll(".note");

  console.log(note.length);
  console.log(sidebarItem.length);
  for (let i = 0; i < note.length - 1; i++) {
    note[i].style.display = "none";
  }

  for (let j = 0; j < sidebarItem.length; j++) {
    sidebarItem[j].addEventListener("click", () => {
      note[j].style.display = "block";

      for (let k = 0; k < note.length; k++) {
        if (j !== k) {
          note[k].style.display = "none";
        }
      }
    });
  }
}

noteCreateBtn.addEventListener("click", previewBtn);

// document.addEventListener("click", function (event) {
//   console.log(event.target);
//   console.log(event.currentTarget);
// });
