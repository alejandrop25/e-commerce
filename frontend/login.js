document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const validUser = "admin";
    const validPass = "1234";
  
    if (username === validUser && password === validPass) {
      document.getElementById('login-message').style.color = 'green';
      document.getElementById('login-message').textContent = "Login successful!";
      setTimeout(() => window.location.replace("./index.html"), 2000);
    } else {
      document.getElementById('login-message').style.color = 'red';
      document.getElementById('login-message').textContent = "Invalid user/password.";
    }
});