
document.getElementById('bunkForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const bunkName = document.getElementById('bunkName').value;
  const address = document.getElementById('address').value;
  const location = document.getElementById('location').value;

  const bunk = { bunkName, address, location };
  saveBunk(bunk);
  alert("Bunk added!");
  location.reload();
});

const list = document.getElementById('bunkList');
getBunks().forEach(bunk => {
  const div = document.createElement('div');
  div.innerHTML = `<h3>${bunk.bunkName}</h3><p>${bunk.address}</p><a href="${bunk.location}" target="_blank">View Map</a><hr>`;
  list.appendChild(div);
});
