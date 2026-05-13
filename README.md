# Todo-List-Using-Html-Css-JavaScript

---

# 1. Creating the Class

```javascript
class AdvancedTodo {
```

* A **class** is used to organize all todo functionalities in one place.
* `AdvancedTodo` contains methods like:

  * Add Task
  * Edit Task
  * Delete Task
  * Filter Tasks
  * Sort Tasks
  * Save Data

---

# 2. Constructor Method

```javascript
constructor() {
  this.tasks = this.loadTasks();
  this.currentFilter = 'all';
  this.currentSort = 'newest';
  this.init();
}
```

### Purpose:

The constructor runs automatically when the app starts.

### What it does:

| Code            | Meaning                             |
| --------------- | ----------------------------------- |
| `this.tasks`    | Stores all tasks                    |
| `loadTasks()`   | Loads saved tasks from localStorage |
| `currentFilter` | Stores active filter                |
| `currentSort`   | Stores current sorting method       |
| `init()`        | Starts the application              |

---

# 3. Initialize Application

```javascript
init() {
  this.renderTasks();
  this.setupEventListeners();
  this.updateStats();
}
```

### Purpose:

Starts the app.

### Functions:

* Displays tasks
* Adds button click events
* Updates statistics

---

# 4. Load Tasks from localStorage

```javascript
loadTasks() {
  const saved = localStorage.getItem('advanced-todo-tasks');
  return saved ? JSON.parse(saved) : [];
}
```

### Purpose:

Gets saved tasks from browser storage.

### Explanation:

| Function                 | Work                              |
| ------------------------ | --------------------------------- |
| `localStorage.getItem()` | Reads saved data                  |
| `JSON.parse()`           | Converts string into array/object |

### Example:

```javascript
"[{title:'Task'}]"
```

becomes:

```javascript
[{title:'Task'}]
```

---

# 5. Save Tasks

```javascript
saveTasks() {
  localStorage.setItem('advanced-todo-tasks', JSON.stringify(this.tasks));
}
```

### Purpose:

Stores tasks permanently in browser storage.

### Explanation:

| Function                 | Work                      |
| ------------------------ | ------------------------- |
| `JSON.stringify()`       | Converts object to string |
| `localStorage.setItem()` | Saves data                |

---

# 6. Event Listeners

```javascript
setupEventListeners()
```

This function handles all button clicks and keyboard events.

---

## Add Task Button

```javascript
document.getElementById('addBtn')
.addEventListener('click', () => this.addTask());
```

### Meaning:

When user clicks **Add Task**, `addTask()` runs.

---

## Enter Key Support

```javascript
document.getElementById('taskInput')
.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') this.addTask();
});
```

### Meaning:

Pressing **Enter key** also adds task.

---

## Filter Buttons

```javascript
document.querySelectorAll('.filter-btn')
```

Selects all filter buttons.

### Example:

* All
* Active
* Completed
* High Priority

---

### Filter Click

```javascript
btn.addEventListener('click', (e) => {
```

When user clicks filter:

```javascript
this.currentFilter = e.target.dataset.filter;
```

Changes current filter.

---

# 7. Add Task Function

```javascript
addTask()
```

### Purpose:

Creates a new task.

---

## Get Input Values

```javascript
const title = input.value.trim();
```

Gets task text.

---

## Validation

```javascript
if (title === '')
```

Checks if input is empty.

---

## Create Task Object

```javascript
const newTask = {
  id: Date.now(),
  title: title,
  category: category,
  priority: priority,
  completed: false,
  createdAt: new Date().toISOString(),
  completedAt: null
};
```

### Task Properties:

| Property    | Meaning           |
| ----------- | ----------------- |
| `id`        | Unique task ID    |
| `title`     | Task name         |
| `category`  | Work/Personal/etc |
| `priority`  | High/Medium/Low   |
| `completed` | Task status       |
| `createdAt` | Date created      |

---

## Add Task to Array

```javascript
this.tasks.unshift(newTask);
```

Adds task at beginning of array.

---

## Save + Render

```javascript
this.saveTasks();
this.renderTasks();
this.updateStats();
```

Updates UI and saves data.

---

# 8. Toggle Task Complete

```javascript
toggleTask(id)
```

### Purpose:

Marks task completed or incomplete.

---

## Find Task

```javascript
const task = this.tasks.find(t => t.id === id);
```

Searches task by ID.

---

## Toggle Boolean

```javascript
task.completed = !task.completed;
```

### Example:

| Before  | After   |
| ------- | ------- |
| `false` | `true`  |
| `true`  | `false` |

---

# 9. Edit Task

```javascript
editTask(id)
```

### Purpose:

Updates task title.

---

## Prompt Box

```javascript
const newTitle = prompt('Edit task:', task.title);
```

Shows popup input box.

---

## Update Task

```javascript
task.title = newTitle.trim();
```

Changes task text.

---

# 10. Delete Task

```javascript
deleteTask(id)
```

### Purpose:

Removes task.

---

## Confirmation Box

```javascript
confirm('Are you sure?')
```

Asks user before deleting.

---

## Remove Task

```javascript
this.tasks = this.tasks.filter(t => t.id !== id);
```

Creates new array excluding selected task.

---

# 11. Filter Tasks

```javascript
getFilteredTasks()
```

### Purpose:

Shows tasks based on selected filter.

---

## Active Tasks

```javascript
filtered.filter(t => !t.completed)
```

Shows incomplete tasks.

---

## Completed Tasks

```javascript
filtered.filter(t => t.completed)
```

Shows completed tasks.

---

## High Priority

```javascript
filtered.filter(t => t.priority === 'high')
```

Shows only high priority tasks.

---

# 12. Sorting Tasks

### Newest First

```javascript
new Date(b.createdAt) - new Date(a.createdAt)
```

Latest tasks first.

---

### Oldest First

```javascript
new Date(a.createdAt) - new Date(b.createdAt)
```

Old tasks first.

---

### Priority Sort

```javascript
const priorityOrder = {
  high: 3,
  medium: 2,
  low: 1
};
```

High priority shown first.

---

### Alphabetical

```javascript
a.title.localeCompare(b.title)
```

Sorts task names A-Z.

---

# 13. Render Tasks

```javascript
renderTasks()
```

### Purpose:

Displays tasks on webpage.

---

## Select Container

```javascript
const tasksList = document.getElementById('tasksList');
```

Gets task container.

---

## Dynamic HTML

```javascript
tasksList.innerHTML = filteredTasks.map(task => `
```

Creates HTML dynamically.

---

## Template Literals

```javascript
`${task.title}`
```

Inserts JavaScript values inside HTML.

---

## Completed Task Styling

```javascript
${task.completed ? 'completed' : ''}
```

Adds completed class conditionally.

---

# 14. Update Statistics

```javascript
updateStats()
```

### Purpose:

Updates dashboard numbers.

---

## Total Tasks

```javascript
const total = this.tasks.length;
```

---

## Completed Tasks

```javascript
const completed =
this.tasks.filter(t => t.completed).length;
```

---

## Completion Rate

```javascript
Math.round((completed / total) * 100)
```

Calculates percentage.

---

# 15. Format Date

```javascript
formatDate(dateString)
```

### Purpose:

Converts ISO date into readable format.

---

## Example Output

```javascript
13/5/2026 10:30 AM
```

---

# 16. Escape HTML

```javascript
escapeHtml(text)
```

### Purpose:

Protects against HTML injection.

---

## Example

User enters:

```html
<script>alert("hack")</script>
```

This function prevents script execution.

---

# 17. Notifications

```javascript
showNotification(message, type)
```

Currently only logs message in console.

Example:

```javascript
console.log("success: Task added");
```

---

# 18. Create App Object

```javascript
const todo = new AdvancedTodo();
```

Starts the application.

---

# 19. Make Global Object

```javascript
window.todo = todo;
```

Allows HTML buttons to call functions:

```html
onclick="todo.deleteTask(1)"
```

---

# Main Concepts Used

| Concept               | Used For                |
| --------------------- | ----------------------- |
| Class                 | Organizing code         |
| Constructor           | Initial setup           |
| Array Methods         | filter, find, map, sort |
| DOM Manipulation      | Updating webpage        |
| Event Listeners       | Button clicks           |
| localStorage          | Save data               |
| Template Literals     | Dynamic HTML            |
| Objects               | Store task data         |
| JSON                  | Save/load data          |
| Conditional Rendering | Show dynamic classes    |
