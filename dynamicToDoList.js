const taskForm = document.getElementById('form');
const taskInput = document.getElementById('input');
const taskList = document.getElementById('list');

// Function to create new task item
const createTaskItem = (task_text) => {
  // Create list item
  const listItem = document.createElement('li');
  listItem.className = 'task-item';

  // Create checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      listItem.classList.add('completed');
    } else {
      listItem.classList.remove('completed');
    }
  });

  // Create label
  const label = document.createElement('label');
  label.textContent = task_text;

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(listItem);
  });

  // Append elements to list item
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(deleteBtn);

  // Append list item to task list
  taskList.appendChild(listItem);
};

// Event listener for form submission
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const task_text = input.value.trim();
  if (task_text !== '') {
    createTaskItem(task_text);
    input.value = '';
  }
});
