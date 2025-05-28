document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const validUser = "admin";
    const validPass = "1234";
  
    if (username === validUser && password === validPass) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').textContent = "Login bem-sucedido!";
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').textContent = "Usuário ou senha inválidos!";
    }
});