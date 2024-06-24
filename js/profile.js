document.addEventListener('DOMContentLoaded', function() {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if (storedUser && storedUser.username && storedUser.email) {
    document.getElementById('username').textContent = storedUser.username;
    document.getElementById('email').textContent = storedUser.email;
  } else {
    window.location.href = './signup.html';
  }

  document.getElementById('sign-out-btn').addEventListener('click', function() {
    localStorage.removeItem('user');
    window.location.href = './signup.html';
  });
});