const formulario_login = document.getElementById('formulario');
const inputs_login = document.querySelectorAll('#formulario input');

formulario_login.addEventListener('submit', (e) => {
    e.preventDefault();

    const correo = document.getElementById('correo_login').value;
    const password = document.getElementById('password_login').value;

    const storedUser = JSON.parse(localStorage.getItem('usuario'));

    if (storedUser && storedUser.correo === correo && storedUser.password === password) {
        alert('Inicio de sesión exitoso!');
        window.location.href = 'index.html';
    } else {
        alert('Usuario y/o contraseña incorrectos.');
    }
});