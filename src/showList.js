const showList = (tasksList) => {
  const listDiv = document.getElementById('list');
  listDiv.innerHTML = '';
  for (let index = 0; index < tasksList.length; index += 1) {
    const task = document.createElement('li');
    const remove = document.createElement('i');
    const description = document.createElement('p');
    if (tasksList[index].completed) {
      const checked = document.createElement('i');
      checked.className = 'fas fa-check';
      description.appendChild(checked);
      description.className = 'completed';
    } else {
      const check = document.createElement('input');
      check.type = 'checkbox';
      check.className = 'check';
      description.appendChild(check);
    }
    task.id = tasksList[index].index;
    remove.className = 'fas fa-trash';
    description.className += ' description';
    description.innerHTML += ` ${tasksList[index].description}`;
    task.appendChild(description);
    task.appendChild(remove);
    listDiv.appendChild(task);
  }
};

export { showList as default };
