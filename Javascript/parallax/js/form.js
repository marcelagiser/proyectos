//Esta primera función es para hacer que al hacer click se nos muestre la contraseña
function verPass() {
    let passwordInput = document.querySelector('#contrasena');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";  // Muestra el texto
    } else {
        passwordInput.type = "password";  // Oculta el texto
    }
}










// A partir de aquí iría la validación del formulario
function validarForm() {
    // Obtener los elementos
    let nombre = document.getElementById('nombre');
    let email = document.getElementById('email');
    let nombreError = document.getElementById('nombreError');
    let emailError = document.getElementById('emailError');
    let mensajeExito = document.getElementById('mensajeExito');

    // Limpiar mensajes de error previos
    //Esto es por si validamos varias veces seguidas, para que nos elimine los mensajes que ya no nos hacen falta
    nombreError.textContent = '';
    emailError.textContent = '';
    //Si las variables son validadas, esValido estará en true. 
    let esValido = true;

    // Validar campo "nombre"
    //.trim ayuda a eliminar los espacios en blanco que puedan existir dentro del input
    if (nombre.value.trim() === "") {
        nombreError.textContent = 'Por favor, rellena este campo';
        //Si las variables NO son validas, esValido estará en false.
        esValido = false;
    }

    // Validar campo "email"
    //.trim ayuda a eliminar los espacios en blanco que puedan existir dentro del input
    if (email.value.trim() === "") {
        emailError.textContent = 'Por favor, rellena este campo';
        //Si las variables NO son validas, esValido estará en false.
        esValido = false;
    }

    // Prevenir el envío del formulario si hay errores
    return esValido;
}