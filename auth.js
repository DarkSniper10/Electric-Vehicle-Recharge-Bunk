
function login(role) {
  if (role === 'admin') {
    window.location.href = 'admin.html';
  } else {
    window.location.href = 'user.html';
  }
}
