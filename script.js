const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  //condition
  if(taskText === ""){
    alert("Please enter a task");
    return;
  }

  // Create li
  const li = document.createElement("li");

  // Task Text
  const span = document.createElement("span");
  span.className = "task-text";
  span.innerText = taskText;

  // Actions div
  const actions = document.createElement("div");
  actions.className = "actions";

  // Edit Button
  const editBtn = document.createElement("button");
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
  editBtn.className = "edit-btn";

  editBtn.addEventListener("click", () => {
    const newTask = prompt("Edit Task", span.innerText);

    if(newTask !== null && newTask.trim() !== ""){
      span.innerText = newTask;
    }
  });

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Append buttons
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  // Append elements
  li.appendChild(span);
  li.appendChild(actions);

  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}