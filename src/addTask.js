const addTask = (tasks) => {
  const description = document.getElementById('task-desc').value;
  const index = (tasks.length === 0) ? 1 : tasks[tasks.length - 1].index + 1;
  const completed = false;
  tasks.push({ description, index, completed });
};

export { addTask as default };