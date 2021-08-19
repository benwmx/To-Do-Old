// import showList from './showList.js';
import './style-src.css';

const tasks = [
  {
    index: 0,
    description: 'First task',
    completed: false,
  },
  {
    index: 1,
    description: 'Second task',
    completed: false,
  },
  {
    index: 2,
    description: 'Third task',
    completed: false,
  },
];

function showList(tasksList) {
  const listDiv = document.getElementById('list');
  for (let i = 0; i < tasksList.length; i += 1) {
    const check = document.createElement('input');
    const task = document.createElement('li');
    const i = document.createElement('i');
    const description = document.createElement('p');
    check.type = 'checkbox';
    console.log( tasksList[i]);
    check.checked = tasksList[i].completed;
    i.className = 'fas fa-ellipsis-v';
    description.className = 'description';
    description.appendChild(check);
    // description.innerHTML += ` ${tasksList[i].description}`;
    task.appendChild(description);
    task.appendChild(i);
    listDiv.appendChild(task);
  }
}

showList([{nam : 'task', description:'fsss',}, {name : 'task', description : 'task description'}]);
