export default function updateStatus(list, id, complted) {
  list.foreach((task) => {
    if (task.index === id) task.complted = complted;
  });
}