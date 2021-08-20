export default function showList(tasksList) {
  const listDiv = document.getElementById('list');
  for (let index = 0; index < tasksList.length; index += 1) {
    const check = document.createElement('input');
    const task = document.createElement('li');
    const remove = document.createElement('i');
    const description = document.createElement('p');
    task.id = tasksList[index].index;
    check.type = 'checkbox';
    check.className = 'check';
    check.checked = tasksList[index].completed;
    remove.className = 'fas fa-ellipsis-v';
    description.className = 'description';
    description.appendChild(check);
    description.innerHTML += ` ${tasksList[index].description}`;
    task.appendChild(description);
    task.appendChild(remove);
    listDiv.appendChild(task);
  }
}
