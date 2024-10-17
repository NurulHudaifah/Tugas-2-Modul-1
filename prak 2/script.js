const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
  const taskText = taskInput.value;
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task');

    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      const inputField = document.createElement('input');
      inputField.value = taskTextElement.textContent;
      inputField.addEventListener('blur', () => {
        taskTextElement.textContent = inputField.value;
        taskList.removeChild(inputField);
        taskList.appendChild(editButton);
      });
      taskList.removeChild(taskTextElement);
      taskList.appendChild(inputField);
      taskList.removeChild(editButton);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    deleteButton.addEventListener('click', () => {
      taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
});