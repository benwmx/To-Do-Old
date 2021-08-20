export default function updateStatus(list, id, completed) {
  list.forEach((task) => {
    if (task.index === id) task.completed = completed;
  });
}