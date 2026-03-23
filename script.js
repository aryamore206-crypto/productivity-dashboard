// Greeting
function setGreeting() {
    let hour = new Date().getHours();
    let greeting = "";

    if (hour < 12) greeting = "Good Morning Arya ☀️";
    else if (hour < 18) greeting = "Good Afternoon Arya 🌤";
    else greeting = "Good Evening Arya 🌙";

    document.getElementById("greeting").innerText = greeting;
}
setGreeting();


// Load tasks
window.onload = function () {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => createTaskElement(task));
};


// Add Task
function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    createTaskElement(task);

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";
}


// Create Task Element
function createTaskElement(task) {
    let li = document.createElement("li");
    li.innerText = task;

    let btn = document.createElement("button");
    btn.innerText = "X";
    btn.classList.add("delete-btn");

    btn.onclick = function () {
        li.remove();
        deleteTask(task);
    };

    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);
}


// Delete Task
function deleteTask(taskToDelete) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task !== taskToDelete);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// Timer
let time = 0;
let interval = null;

function startTimer() {
    if (interval !== null) return;

    interval = setInterval(() => {
        time++;
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        document.getElementById("timer").innerText =
            `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}