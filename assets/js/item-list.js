function noteText() {
  const input = document.querySelectorAll(".sidebar-item input");
  const textarea = document.querySelectorAll(".sidebar-item textarea");

  const noteTitle = document.querySelectorAll(".note-title");
  const noteDesc = document.querySelectorAll(".note-desc");

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < noteTitle.length; j++) {
      if (i == j) {
        input[i].value = noteTitle[j].value;
        textarea[i].value = noteDesc[j].value;
      }
    }
  }
}

noteText();
setInterval(noteText, 1000);
