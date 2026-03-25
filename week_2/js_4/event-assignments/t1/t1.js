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

// add your code here
const add = document.querySelector('.add-btn');
const ul = document.querySelector('ul');
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');

function updateUl() {
  ul.innerHTML = '';
  for (let item of todoList) {
    ul.insertAdjacentHTML('beforeend',
      `<li>
      <div>${item.task}</div>
      <input type="checkbox" id="checkbox-${item.id}">
      <button id="del-${item.id}">X</button>
      </li>`
    );
    const checkbox = document.querySelector(`#checkbox-${item.id}`)
    checkbox.addEventListener('change', handleCheckBox);
    if (item.completed)
      checkbox.checked = true;
    document.querySelector(`#del-${item.id}`).addEventListener('click', handleDel);
  }
}

function handleCheckBox(e) {
  console.log(e.target.id);
  for (let item of todoList) {
    // astaghfirullah
    if (e.target.id === ('checkbox-' + item.id))
      item.completed = !item.completed;
  }
  console.log(todoList);
};

function handleDel(e) {
  for (let item of todoList) {
    if (e.target.id === ('del-' + item.id))
      todoList.pop(item);
  }
  updateUl();
  console.log(todoList);
}

add.addEventListener('click', () => {
  dialog.showModal();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let item = {};

  item.task = document.querySelector('input[type="text"]')
    .value;

  const usedIds = new Set(todoList.map(item => item.id));

  let id = 1;
  while (usedIds.has(id)) {
    id++;
  }

  item.id = id;

  todoList.push(item);
  console.log(todoList);

  dialog.close();
  updateUl();
});


updateUl();

