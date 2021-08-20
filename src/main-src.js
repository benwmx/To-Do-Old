import showList from './showList.js';
import './style-src.css';

const tasks = [
  {
    index: 0,
    description: 'First task',
    completed: true,
  },
  {
    index: 1,
    description: 'Second task',
    completed: false,
  },
  {
    index: 2,
    description: 'Third task',
    completed: true,
  },
];

showList(tasks);
const tasksCheck = document.querySelectorAll('.check');
tasksCheck.forEach((check)=>{
  check.addEventListener('change', () => {

  });
});
