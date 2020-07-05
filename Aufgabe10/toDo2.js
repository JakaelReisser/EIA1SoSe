"use strict";
var todos = [
    { text: "kochen", isChecked: true },
    { text: "weinen", isChecked: false },
    { text: ":( tschüß", isChecked: false }
];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
var counterDoneDOMElement;
var counterOpenDOMElement;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    counterDoneDOMElement = document.querySelector("#counterDone");
    counterOpenDOMElement = document.querySelector("#counterOpen");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    for (let index = 0; index < todos.length; index++) {
        let todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + todos[index].isChecked + "'><i class='fas fa-check'></i></span>"
            + todos[index].text +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    }
    updateCounter();
}
function updateCounter() {
    counterDOMElement.innerHTML = todos.length + " in total";
    var checked = 0;
    var open = 0;
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].isChecked == true) {
            checked++;
        }
        else {
            open++;
        }
    }
    counterDoneDOMElement.innerHTML = checked + " done";
    counterOpenDOMElement.innerHTML = open + " open";
}
function addTodo() {
    if (inputDOMElement.value != "") {
        todos.unshift({ text: inputDOMElement.value, isChecked: false });
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    todos[index].isChecked = !todos[index].isChecked;
    drawListToDOM();
}
function deleteTodo(index) {
    todos.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=toDo2.js.map