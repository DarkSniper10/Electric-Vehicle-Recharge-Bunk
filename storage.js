
function saveBunk(data) {
  const bunks = JSON.parse(localStorage.getItem('bunks') || '[]');
  bunks.push(data);
  localStorage.setItem('bunks', JSON.stringify(bunks));
}

function getBunks() {
  return JSON.parse(localStorage.getItem('bunks') || '[]');
}
