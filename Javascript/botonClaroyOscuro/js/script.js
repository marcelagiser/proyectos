/*OPCION 1
 function cambioModo() {
    let proyecto = document.querySelector('html');
    proyecto.classList.toggle('oscuro');
} */

/*OPCION 2*/
function cambioModo() {
    let proyecto = document.querySelector('html');
    if (proyecto.classList.contains('oscuro')) {
        proyecto.classList.remove('oscuro');
    }
    else {
        proyecto.classList.add('oscuro');
    }
}