"use strict";

const toDoForm = document.querySelector(".toDo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".toDo-list");

const TODOS_LS = "toDoText";

// 할 일 목록
// 할 일을 생성할 때마다 toDoText array에 저장
let toDoText = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;

  toDoList.removeChild(li);

  // filter는 array의 모든 item을 통해 함수를 실행하고,
  // true인 item들만 가지고 새로운 array를 만듦
  // --> filter를 통해 체크된 item들의 array를 주는 것
  const cleanToDoText = toDoText.filter(function (toDo) {
    // toDo.id (number), li.id (string)이기 때문에 parseInt 해준다
    return toDo.id !== parseInt(li.id);
  });

  toDoText = cleanToDoText;

  saveToDos();
}

function saveToDos() {
  // 자바스크립트 object가 string이 되도록 하기 위해서 JSON.stringify 사용
  localStorage.setItem(TODOS_LS, JSON.stringify(toDoText));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const header = document.createElement("div");
  const miniBtn = document.createElement("button");
  const maxBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  const content = document.createElement("div");
  const p = document.createElement("p");

  miniBtn.innerText = "ㅡ";
  maxBtn.innerText = "ㅁ";
  deleteBtn.innerText = "✖";

  // handleSubmit에서 온 값 (toDoInput.value)
  p.innerText = text;

  li.classList.add("toDo-item");
  header.classList.add("toDo-header");
  content.classList.add("toDo-content");

  toDoList.appendChild(li);
  li.appendChild(header);
  li.appendChild(miniBtn);
  li.appendChild(maxBtn);
  li.appendChild(deleteBtn);
  li.appendChild(content);
  content.appendChild(p);

  miniBtn.addEventListener("click", () => {
    miniBtn.classList.add("active");
    li.removeChild(content);
  });

  maxBtn.addEventListener("click", () => {
    miniBtn.classList.remove("active");
    li.appendChild(content);
  });

  deleteBtn.addEventListener("click", deleteToDo);

  // id 값을 표시하기 위해서 (첫 번째 id 값이 0이므로, +1을 해서 id가 1이 나오게)
  const toDoId = toDoText.length + 1;
  // 어떤 것을 클릭하는지 알 수 있게 li에도 id를 준다
  li.id = toDoId;

  const todoTextObj = {
    text: text,
    id: toDoId,
  };

  toDoText.push(todoTextObj);

  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();

  const currentValue = toDoInput.value;
  paintToDo(currentValue);

  toDoInput.value = "";
}

// toDo: parsedToDoText의 각각의 값
function something(toDo) {
  paintToDo(toDo.text);
}

function loadToDos() {
  const loadedToDoText = localStorage.getItem(TODOS_LS);

  // toDoText를 가져온 뒤, parse (가져온 것을 자바스크립트 object로 변환)
  if (loadedToDoText !== null) {
    // console.log(loadedToDoText);
    const parsedToDoText = JSON.parse(loadedToDoText);
    // console.log(parsedToDoText);

    // localStorage에서 불러온 것을 화면에 출력
    // parsedToDoText의 안에 있는 값을 forEach
    parsedToDoText.forEach(something);
  }
}

function toDoInit() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

toDoInit();
