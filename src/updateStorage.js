export default function updateStorage(storage) {
  localStorage.setItem('storage', JSON.stringify(storage));
}