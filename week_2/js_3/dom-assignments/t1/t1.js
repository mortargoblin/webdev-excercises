// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

const list = document.querySelector('ul');

// add your code here
for (let item of todoList) {
  list.insertAdjacentHTML(
    'beforeend',
    `<li>
   <input type="checkbox" id="todo-1" checked>
   <label for="todo-1">Buy milk</label>
    </li>`
  )
}
