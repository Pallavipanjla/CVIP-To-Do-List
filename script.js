const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
document.querySelector("button").addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
    const li = document.createElement("li");
    li.textContent = taskText;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
        li.remove();
    });
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = "";
}