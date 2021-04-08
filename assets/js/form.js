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
