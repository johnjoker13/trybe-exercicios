function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Exercicio 1

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const ul = document.getElementById("days");
for (let index = 0; index < dezDaysList.length; index++) {
  const li = document.createElement("li");
  li.classList.add("day");
  li.textContent = dezDaysList[index];
  if (
    dezDaysList[index] === 24 ||
    dezDaysList[index] === 25 ||
    dezDaysList[index] === 31
  ) {
    li.classList.add("holiday");
  }
  if (
    dezDaysList[index] === 4 ||
    dezDaysList[index] === 11 ||
    dezDaysList[index] === 18 ||
    dezDaysList[index] === 25
  ) {
    li.classList.add("friday");
  }
  ul.appendChild(li);
}

// Exercicio 2
let getButtonDiv = document.getElementsByClassName("buttons-container")[0];
let nomeData = "Feriados";
function selectHolidays(str) {
  let btn = document.createElement("button");
  btn.setAttribute("id", "btn-holiday");
  btn.appendChild(document.createTextNode(str));
  getButtonDiv.appendChild(btn);
}
selectHolidays(nomeData);

// Exercicio 3
let getButton = document.getElementById("btn-holiday");
let getHolidays = document.getElementsByClassName("holiday");
getButton.addEventListener("click", function () {
  for (let i = 0; i < getHolidays.length; i++) {
    getHolidays[i].style.backgroundColor = "rgb(255,0,0)";
  }
});

getButton.addEventListener("dblclick", function () {
  for (let i = 0; i < getHolidays.length; i++) {
    getHolidays[i].style.backgroundColor = "#eee";
  }
});

//Exercicio 4

let dayName = "Sexta-Feira";
function selectFridays(str) {
  let btn = document.createElement("button");
  btn.setAttribute("id", "btn-friday");
  btn.appendChild(document.createTextNode(str));
  getButtonDiv.appendChild(btn);
}

selectFridays(dayName);

//Exercicio 5

function getFridays(arr) {
  let getFridayButton = document.querySelector("#btn-friday");
  let fridays = document.getElementsByClassName("friday");
  let fridayText = "Sextou!!!";

  getFridayButton.addEventListener("click", function () {
    for (let index = 0; index < fridays.length; index++) {
      if (fridays[index].innerHTML !== fridayText) {
        fridays[index].innerHTML = fridayText;
      } else {
        fridays[index].innerHTML = arr[index];
      }
    }
  });
}

let fridaysArray = [4, 11, 18, 25];
getFridays(fridaysArray);

// Exercicio 6

let getDays = document.getElementsByClassName("day");
for (let index = 0; index < getDays.length; index++) {
  getDays[index].addEventListener("mouseover", function (evt) {
    evt.target.style.transform = "scale(1.5)";
    evt.target.style.transition = "1s";
  });
}

for (let index = 0; index < getDays.length; index++) {
  getDays[index].addEventListener("mouseout", function (evt) {
    evt.target.style.transform = "scale(1.0)";
    evt.target.style.transition = "1s";
  });
}

// Exercicio 7

let tarefa1 = "$Codar<>";
let getTaskDiv = document.getElementsByClassName("my-tasks")[0];

function addTask(str) {
  let span = document.createElement("span");
  span.appendChild(document.createTextNode(str));
  getTaskDiv.appendChild(span);
}

addTask(tarefa1);

// Exercicio 8

let taskColor = "#FF7700";

function addCaptionToTaks(cor) {
  let div = document.createElement("div");
  div.classList.add("task");
  div.style.backgroundColor = cor;
  getTaskDiv.appendChild(div);
}

addCaptionToTaks(taskColor);

// Exercicio 9

function selectTask() {
  let getDivTask = document.getElementsByClassName("task")[0];
  getDivTask.addEventListener("click", function (evt) {
    evt.target.classList.add("selected");
  });
  getDivTask.addEventListener("dblclick", function (evt) {
    evt.target.classList.remove("selected");
  });
}

selectTask();

// Exercicio 10

function taskDay(colour) {
  for (let index = 0; index < getDays.length; index++) {
    getDays[index].addEventListener("click", function (evt) {
      evt.target.style.backgroundColor = colour;
    });
    getDays[index].addEventListener("dblclick", function (evt) {
      evt.target.style.backgroundColor = "#eee";
    });
  }
}

taskDay(taskColor);

//Bonus

let getInput = document.getElementById("task-input");
let getTaskButton = document.getElementById("btn-add");
let getTaskList = document.getElementsByClassName("task-list")[0];

function getInputData() {
  let inputValue = "";
  getInput.addEventListener("input", function (evt) {
    inputValue = evt.target.value;
  });
  getTaskButton.addEventListener("click", function () {
    if (inputValue.length <= 0) {
      alert("Erro");
    }
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(inputValue));
    getTaskList.appendChild(li);
    getInput.value = '';
  });
  
  getInput.addEventListener('keyup', function(event) {
    if(inputValue.length <= 0) {
        alert("Erro");
    }
    if (event.keyCode === 13) {
      let li = document.createElement('li');
      li.appendChild(document.createTextNode(inputValue));
      getTaskList.appendChild(li);
      getInput.value = '';
    }
  });
}




getInputData();

