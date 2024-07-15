const formulario_signup = document.getElementById('formulario');
const inputs_signup = document.querySelectorAll('#formulario input');
const expresiones = {
    correo: '',
    password: '',
    usuario: '',
    nombre: '',
    telefono: '',
    fechaNacimiento: '',
    nombres: '',
    direccion: '',
    edad: '',
    codigo_producto: '',
    color_hexadecimal: '',
    formato_decimal: '',
};
const campos = {
    correo: false,
    password: false,
    usuario: false,
    nombre: false,
    telefono: false,
    fechaNacimiento: false,
    nombres: false,
    direccion: false,
    edad: false,
    codigo_producto: false,
    color_hexadecimal: false,
    formato_decimal: false,
};

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            break;
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
            break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
            break;
        case "fechaNacimiento":
            validarCampo(expresiones.fechaNacimiento, e.target, 'fechaNacimiento');
            break;
        case "nombres":
            validarCampo(expresiones.nombres, e.target, 'nombres');
        case "direccion":
            validarCampo(expresiones.direccion, e.target, 'direccion');
            break;
        case "edad":
            validarCampo(expresiones.edad, e.target, 'edad');
            break;
        case "codigo_producto":
            validarCampo(expresiones.codigo_producto, e.target, 'codigo_producto');
            break;
        case "color_hexadecimal":
            validarCampo(expresiones.color_hexadecimal, e.target, 'color_hexadecimal');
            break;
        case "formato_decimal":
            validarCampo(expresiones.formato_decimal, e.target, 'formato_decimal');
            break;
    }
};

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
};

inputs_signup.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario_signup.addEventListener('submit', (e) => {
    e.preventDefault();
    if (campos.correo && campos.password && campos.usuario && campos.nombre && campos.telefono && campos.fechaNacimiento) {
        const usuario = document.getElementById('usuario').value;
        const nombre = document.getElementById('nombre').value;
        const password = document.getElementById('password').value;
        const fechaNacimiento = document.getElementById('fechaNacimiento').value;
        const correo = document.getElementById('correo').value;
        const telefono = document.getElementById('telefono').value;

        const newUser = {
            usuario,
            nombre,
            password,
            fechaNacimiento,
            correo,
            telefono,
        };

        localStorage.setItem('usuario', JSON.stringify(newUser));

        window.location.href = 'login.html';
    } else {
        alert('Por favor completa correctamente todos los campos.');
    }
});

function cerrarSesion() {
    console.log('Sesión cerrada');
    window.location.href = 'login.html';
}