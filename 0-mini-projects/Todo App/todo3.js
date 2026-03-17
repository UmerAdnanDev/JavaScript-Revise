let todoObj = JSON.parse(localStorage.getItem("todolist"));
if (!todoObj) {
  todoObj = [{ task: "Code for 3 hrs", date: "2025-08-17" }];
}
function addtoList() {
  const inputElement = document.querySelector(".js-input");
  const inputDate = document.querySelector(".js-date");
  let task = inputElement.value; //or let {task,date} todoObject; destructering
  let date = inputDate.value;
  console.log(task);
  console.log(date);
  todoObj.push({ task, date });
  console.log(todoObj);
  inputElement.value = "";
  showTasks();
}
function deletetask(i) {
  todoObj.splice(i, 1);
  showTasks();
}
function showTasks() {
  let list_Objs = ``;
  for (let i = 0; i < todoObj.length; i++) {
    if (todoObj[i].task)
      list_Objs += `<div class = "grid"><p>${todoObj[i].task}</p><p>${todoObj[i].date}</p><button class = "btn-red" onclick="deletetask(${i})">Delete</button></div>`;
  }
  let list_div = document.querySelector(".js-list");
  list_div.innerHTML = list_Objs;
  localStorage.setItem("todolist", JSON.stringify(todoObj));
}
function enter(event) {
  if (event.key === "Enter") {
    addtoList();
  }
}
