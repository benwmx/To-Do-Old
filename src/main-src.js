/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
import showList from './showList.js';
import updateStatus from './updateStatus.js';
import './style-src.css';
import updateStorage from './updateStorage.js';

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
