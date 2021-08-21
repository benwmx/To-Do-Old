/* eslint-disable prefer-arrow-callback */
import './style-src.css';
import showList from './showList.js';
import updateStatus from './updateStatus.js';
import updateStorage from './updateStorage.js';
import getStorage from './getStorage.js';
import addTask from './addTask.js';
import removeTask from './removeTask.js';

let tasks = getStorage();

showList(tasks);

// update the task status && remove a task --------------------------------------------------

const listDiv = document.getElementById('list');
listDiv.addEventListener('click', (event) => {
  if (event.target !== event.currentTarget) {
    if (event.target.className === 'check') {
      updateStatus(tasks, parseInt(event.target.parentElement.parentElement.id, 10), true);
      showList(tasks);
      updateStorage(tasks);
    }
    if (event.target.className === 'fas fa-check') {
      updateStatus(tasks, parseInt(event.target.parentElement.parentElement.id, 10), false);
      showList(tasks);
      updateStorage(tasks);
    }
    if (event.target.className === 'fas fa-trash') {
      tasks = removeTask(tasks, parseInt(event.target.parentElement.id, 10));
    }
  }
  event.stopPropagation();
});

// add a task ----------------------------------------------------------------
const addTaskButton = document.getElementById('add');
addTaskButton.addEventListener('click', () => {
  addTask(tasks);
  updateStorage(tasks);
  showList(tasks);
});
