export default function getStorage() {
  const storage = JSON.parse(localStorage.getItem('storage'));
  return (storage !== null || storage !== undefined) ? storage : [];
}