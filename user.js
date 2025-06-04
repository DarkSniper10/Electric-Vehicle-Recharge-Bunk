
const list = document.getElementById('bunkList');
getBunks().forEach(bunk => {
  const div = document.createElement('div');
  div.innerHTML = `<h3>${bunk.bunkName}</h3><p>${bunk.address}</p><a href="${bunk.location}" target="_blank">View Map</a><hr>`;
  list.appendChild(div);
});
