# Todo-List-Using-Html-Css-JavaScript

## 1. Selecting HTML Elements

```javascript
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
```

### Explanation

These lines select elements from HTML using their `id`.

| Variable    | Purpose                                      |
| ----------- | -------------------------------------------- |
| `taskInput` | Gets the input field                         |
| `addBtn`    | Gets the Add button                          |
| `taskList`  | Gets the `<ul>` list where tasks will appear |

---

# 2. Add Button Event

```javascript
addBtn.addEventListener("click", addTask);
```

### Explanation

* `addEventListener()` listens for an event.
* `"click"` means when the button is clicked.
* `addTask` function will run after clicking the button.

---

# 3. Creating `addTask()` Function

```javascript
function addTask() {
```

### Explanation

This function handles:

* Adding new tasks
* Creating buttons
* Showing tasks on screen

---

# 4. Getting Input Value

```javascript
const taskText = taskInput.value.trim();
```

### Explanation

* `taskInput.value` gets text from input box.
* `trim()` removes extra spaces.

Example:

```javascript
"   Study JS   "
```

becomes:

```javascript
"Study JS"
```

---

# 5. Empty Input Validation

```javascript
if(taskText === ""){
  alert("Please enter a task");
  return;
}
```

### Explanation

Checks if input is empty.

* `alert()` shows popup message.
* `return` stops function execution.

---

# 6. Creating `<li>` Element

```javascript
const li = document.createElement("li");
```

### Explanation

Creates a new list item dynamically.

Example:

```html
<li></li>
```

---

# 7. Creating Task Text

```javascript
const span = document.createElement("span");
span.className = "task-text";
span.innerText = taskText;
```

### Explanation

### `createElement("span")`

Creates:

```html
<span></span>
```

### `className`

Adds CSS class.

```html
<span class="task-text"></span>
```

### `innerText`

Adds user task text.

Example:

```html
<span class="task-text">Learn JavaScript</span>
```

---

# 8. Creating Actions Div

```javascript
const actions = document.createElement("div");
actions.className = "actions";
```

### Explanation

Creates a container for buttons.

Example:

```html
<div class="actions"></div>
```

---

# 9. Creating Edit Button

```javascript
const editBtn = document.createElement("button");
```

### Explanation

Creates edit button dynamically.

---

# 10. Adding Icon Inside Button

```javascript
editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
```

### Explanation

Adds Font Awesome edit icon.

Result:

```html
<button>
   <i class="fa-solid fa-pen"></i>
</button>
```

---

# 11. Adding Class to Edit Button

```javascript
editBtn.className = "edit-btn";
```

### Explanation

Adds CSS styling class.

---

# 12. Edit Button Click Event

```javascript
editBtn.addEventListener("click", () => {
```

### Explanation

Runs function when edit button is clicked.

---

# 13. Prompt for Editing

```javascript
const newTask = prompt("Edit Task", span.innerText);
```

### Explanation

Shows popup input box.

* `"Edit Task"` → title/message
* `span.innerText` → old task text

Example:

```javascript
prompt("Edit Task", "Learn JS");
```

---

# 14. Updating Edited Task

```javascript
if(newTask !== null && newTask.trim() !== ""){
  span.innerText = newTask;
}
```

### Explanation

Checks:

* User did not cancel
* Input is not empty

Then updates task text.

---

# 15. Creating Delete Button

```javascript
const deleteBtn = document.createElement("button");
```

### Explanation

Creates delete button.

---

# 16. Adding Delete Icon

```javascript
deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
```

### Explanation

Adds trash icon inside button.

---

# 17. Delete Button Class

```javascript
deleteBtn.className = "delete-btn";
```

### Explanation

Adds CSS class for styling.

---

# 18. Delete Button Event

```javascript
deleteBtn.addEventListener("click", () => {
  li.remove();
});
```

### Explanation

When clicked:

* Entire task (`li`) gets removed.

`remove()` deletes element from webpage.

---

# 19. Adding Buttons Inside Actions Div

```javascript
actions.appendChild(editBtn);
actions.appendChild(deleteBtn);
```

### Explanation

Adds edit and delete buttons inside actions container.

---

# 20. Adding Elements Inside `<li>`

```javascript
li.appendChild(span);
li.appendChild(actions);
```

### Explanation

Adds:

* Task text
* Buttons

inside list item.

---

# 21. Showing Task on Screen

```javascript
taskList.appendChild(li);
```

### Explanation

Adds completed task item into `<ul>`.

---

# 22. Clearing Input Field

```javascript
taskInput.value = "";
```

### Explanation

After adding task:

* Input field becomes empty.

---

# Final Flow of Program

```text
User types task
        ↓
Clicks Add Button
        ↓
JavaScript creates:
   - li
   - span
   - edit button
   - delete button
        ↓
Task displayed on screen
        ↓
User can Edit or Delete task
```
