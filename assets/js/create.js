"use strict";

const bookCreateBtn = document.querySelector(".book-create");
const noteCreateBtn = document.querySelector(".note-create");

function createPreview() {
  const sidebarList = document.querySelector(".sidebar-list");

  const sidebarItem = document.createElement("li");
  sidebarItem.classList.add("sidebar-item");
  sidebarItem.style.backgroundColor = "#eceff1";
  sidebarList.appendChild(sidebarItem);

  const input = document.createElement("input");
  const textarea = document.createElement("textarea");
  input.value = "기본적인 문서 작성 툴입니다.";
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
  noteInformation.appendChild(noteTags);

  const tagsInput = document.createElement("input");
  tagsInput.classList.add("tag-input");
  tagsInput.setAttribute("type", "text");
  tagsInput.placeholder = "태그를 입력하세요. 더블클릭하면 태그가 지워집니다.";
  noteTags.appendChild(tagsInput);

  const addTags = document.createElement("button");
  addTags.setAttribute("id", "addTag");
  addTags.classList.add("add-tag");
  addTags.setAttribute("type", "button");
  noteTags.appendChild(addTags);

  const ICON_5 = document.createElement("i");
  ICON_5.classList.add("fas", "fa-plus");
  addTags.appendChild(ICON_5);

  const noteIcons = document.createElement("div");
  noteIcons.classList.add("note-icons");
  noteInformation.appendChild(noteIcons);

  const iconClock = document.createElement("button");
  const iconLight = document.createElement("button");
  const iconDelete = document.createElement("button");
  iconClock.classList.add("icon-clock");
  iconLight.classList.add("icon-light");
  iconDelete.classList.add("icon-delete");
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
  ICON_2.setAttribute("id", "iconLight");
  ICON_2.classList.add("fas", "fa-lightbulb");
  iconLight.appendChild(ICON_2);
  ICON_3.classList.add("far", "fa-trash-alt");
  iconDelete.appendChild(ICON_3);

  // tags-list
  const tagsList = document.createElement("ul");
  tagsList.classList.add("tags-list");
  note.appendChild(tagsList);

  const tagItem = document.createElement("li");
  tagItem.setAttribute("id", "tagItem");
  tagItem.classList.add("tag-item");
  tagsList.appendChild(tagItem);

  const tagsItemSpan = document.createElement("span");
  tagsItemSpan.innerText = "HTML & CSS";
  tagItem.appendChild(tagsItemSpan);

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
  noteTitle.value = "기본적인 문서 작성 툴입니다.";
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
  noteTextarea_TEXTAREA.setAttribute("rows", 15);
  noteTextarea.appendChild(noteTextarea_TEXTAREA);
}

function previewBtn() {
  createPreview();
  createNote();

  const sidebarItem = document.querySelectorAll(".sidebar-item");
  let note = document.querySelectorAll(".note");

  for (let i = 0; i < note.length - 1; i++) {
    sidebarItem[i].style.background = "none";
    note[i].style.display = "none";
  }

  for (let j = 0; j < sidebarItem.length; j++) {
    sidebarItem[j].addEventListener("click", () => {
      sidebarItem[j].classList.add("active");
      sidebarItem[j].style.backgroundColor = "#eceff1";
      note[j].style.display = "block";

      for (let k = 0; k < note.length; k++) {
        if (j !== k) {
          sidebarItem[k].classList.remove("active");
          sidebarItem[k].style.background = "none";
          note[k].style.display = "none";
        }
      }
    });
  }
}

function createBook() {
  // main
  const main = document.querySelector(".main");

  // aside
  const bookList = document.querySelector(".book-list");

  const bookItem = document.createElement("li");
  bookItem.classList.add("book-item");
  bookItem.style.backgroundColor = "#424242";
  bookList.appendChild(bookItem);

  const book_ICON_1 = document.createElement("i");
  book_ICON_1.classList.add("far", "fa-copy");
  bookItem.appendChild(book_ICON_1);

  const bookItemTitle = document.createElement("span");
  bookItemTitle.classList.add("book-item-title");
  bookItemTitle.innerText = "기본 문서";
  bookItem.appendChild(bookItemTitle);

  // sidebar
  const sidebar = document.createElement("section");
  sidebar.classList.add("sidebar");
  main.appendChild(sidebar);

  const noteCreate = document.createElement("button");
  noteCreate.classList.add("note-create");
  sidebar.appendChild(noteCreate);

  const SIDEBAR_ICON_1 = document.createElement("i");
  SIDEBAR_ICON_1.classList.add("fas", "fa-plus-circle");
  noteCreate.appendChild(SIDEBAR_ICON_1);

  const noteCreateP = document.createElement("p");
  noteCreateP.innerText = "새 글 작성하기";
  noteCreate.appendChild(noteCreateP);

  const sidebarSeparator_1 = document.createElement("div");
  sidebarSeparator_1.classList.add("sidebar-separator");
  sidebar.appendChild(sidebarSeparator_1);

  const sidebarList = document.createElement("ul");
  sidebar.appendChild(sidebarList);

  const sidebarItem = document.createElement("li");
  sidebarItem.classList.add("sidebar-item");
  sidebarList.appendChild(sidebarItem);

  const sidebarInput = document.createElement("input");
  sidebarInput.setAttribute("disabled", true);
  sidebarItem.appendChild(sidebarInput);

  const sidebarTextarea = document.createElement("textarea");
  sidebarTextarea.setAttribute("cols", "30");
  sidebarTextarea.setAttribute("rows", "2");
  sidebarTextarea.setAttribute("disabled", true);
  sidebarItem.appendChild(sidebarTextarea);

  const sidebarSeparator_2 = document.createElement("div");
  sidebarSeparator_2.classList.add("sidebar-separator");
  sidebar.appendChild(sidebarSeparator_2);

  // main-separator
  const mainSeparator = document.createElement("div");
  mainSeparator.classList.add("main-separator");
  main.appendChild(mainSeparator);

  // note-container
  const noteContainer = document.createElement("section");
  noteContainer.classList.add("note-container");
  main.appendChild(noteContainer);

  // note-list
  const noteList = document.createElement("ul");
  noteContainer.appendChild(noteList);

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
  noteInformation.appendChild(noteTags);

  const tagsInput = document.createElement("input");
  tagsInput.classList.add("tag-input");
  tagsInput.setAttribute("type", "text");
  tagsInput.placeholder = "태그를 입력하세요. 더블클릭하면 태그가 지워집니다.";
  noteTags.appendChild(tagsInput);

  const addTags = document.createElement("button");
  addTags.setAttribute("id", "addTag");
  addTags.classList.add("add-tag");
  addTags.setAttribute("type", "button");
  noteTags.appendChild(addTags);

  const ICON_5 = document.createElement("i");
  ICON_5.classList.add("fas", "fa-plus");
  addTags.appendChild(ICON_5);

  const noteIcons = document.createElement("div");
  noteIcons.classList.add("note-icons");
  noteInformation.appendChild(noteIcons);

  const iconClock = document.createElement("button");
  const iconLight = document.createElement("button");
  const iconDelete = document.createElement("button");
  iconClock.classList.add("icon-clock");
  iconLight.classList.add("icon-light");
  iconDelete.classList.add("icon-delete");
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
  ICON_2.setAttribute("id", "iconLight");
  ICON_2.classList.add("fas", "fa-lightbulb");
  iconLight.appendChild(ICON_2);
  ICON_3.classList.add("far", "fa-trash-alt");
  iconDelete.appendChild(ICON_3);

  // tags-list
  const tagsList = document.createElement("ul");
  tagsList.classList.add("tags-list");
  note.appendChild(tagsList);

  const tagItem = document.createElement("li");
  tagItem.setAttribute("id", "tagItem");
  tagItem.classList.add("tag-item");
  tagsList.appendChild(tagItem);

  const tagsItemSpan = document.createElement("span");
  tagsItemSpan.innerText = "HTML & CSS";
  tagItem.appendChild(tagsItemSpan);

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
  noteTitle.value = "기본적인 문서 작성 툴입니다.";
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
  noteTextarea_TEXTAREA.setAttribute("rows", 15);
  noteTextarea.appendChild(noteTextarea_TEXTAREA);
}

function previewBook() {
  createBook();

  const bookItem = document.querySelectorAll(".book-item");
  let sidebar = document.querySelectorAll(".sidebar");
  let mainSeparator = document.querySelectorAll(".main-separator");
  let noteContainer = document.querySelectorAll(".note-container");

  for (let i = 0; i < sidebar.length - 1; i++) {
    bookItem[i].style.background = "none";
    sidebar[i].style.display = "none";
    mainSeparator[i].style.display = "none";
    noteContainer[i].style.display = "none";
  }

  for (let j = 0; j < bookItem.length; j++) {
    bookItem[j].addEventListener("click", () => {
      bookItem[j].classList.add("active");
      bookItem[j].style.backgroundColor = "#424242";
      sidebar[j].style.display = "block";
      mainSeparator[j].style.display = "block";
      noteContainer[j].style.display = "block";

      for (let k = 0; k < sidebar.length; k++) {
        if (j !== k) {
          bookItem[k].classList.remove("active");
          bookItem[k].style.background = "none";
          sidebar[k].style.display = "none";
          mainSeparator[k].style.display = "none";
          noteContainer[k].style.display = "none";
        }
      }
    });
  }
}

bookCreateBtn.addEventListener("click", previewBook);
noteCreateBtn.addEventListener("click", previewBtn);
