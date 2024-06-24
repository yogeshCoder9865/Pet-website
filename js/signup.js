const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");



sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document.addEventListener('DOMContentLoaded', () => {
  const signUpForm = document.querySelector('.sign-up-form');
  const signInForm = document.querySelector('.sign-in-form');

  signUpForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = signUpForm.querySelector('input[type="text"]').value;
      const email = signUpForm.querySelector('input[type="email"]').value;
      const password = signUpForm.querySelector('input[type="password"]').value;

      if (username && email && password) {
          const user = { username, email, password };
          localStorage.setItem('user', JSON.stringify(user));
          alert('Sign up successful! Redirecting to profile...');
          window.location.href = 'profile.html';
      } else {
          alert('Please fill in all fields.');
      }
  });

  signInForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = signInForm.querySelector('input[type="text"]').value;
      const password = signInForm.querySelector('input[type="password"]').value;

      const storedUser = JSON.parse(localStorage.getItem('user'));

      if (storedUser && storedUser.username === username && storedUser.password === password) {
          alert('Sign in successful! Redirecting to profile...');
          window.location.href = './profile.html';
      } else {
          alert('Invalid username or password.');
      }
  });

  if (window.location.pathname.endsWith('./profile.html')) {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
          document.getElementById('username').textContent = storedUser.username;
          document.getElementById('email').textContent = storedUser.email;
      } else {
          window.location.href = './signup.html';
      }

      document.getElementById('sign-out-btn').addEventListener('click', () => {
          localStorage.removeItem('user');
          window.location.href = './signup.html';
      });
  }
});


