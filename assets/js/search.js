// Search
const searchInput = document.querySelector(".search-input");

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
