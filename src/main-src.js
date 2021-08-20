/* eslint-disable prefer-arrow-callback */
import './style-src.css';
import showList from './showList.js';
import updateStatus from './updateStatus.js';
import updateStorage from './updateStorage.js';
import getStorage from './getStorage.js';

let tasks = [
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

if (getStorage().length === 0) updateStorage(tasks);
else tasks = getStorage();

showList(tasks);

const listDiv = document.getElementById('list');
listDiv.addEventListener('change', (event) => {
  if (event.target !== event.currentTarget) {
    updateStatus(tasks, parseInt(event.target.parentElement.parentElement.id, 10), true);
    showList(tasks);
    updateStorage(tasks);
  }
  event.stopPropagation();
});

listDiv.addEventListener('click', (event) => {
  if (event.target !== event.currentTarget && event.target.className === 'fas fa-check') {
    updateStatus(tasks, parseInt(event.target.parentElement.parentElement.id, 10), false);
    showList(tasks);
    updateStorage(tasks);
  }
  event.stopPropagation();
});
