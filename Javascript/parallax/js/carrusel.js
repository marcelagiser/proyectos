//Carrusel testimonios desde aquí
let carruselTestimonios = document.querySelector('.testimonios');
let testimonio = document.querySelectorAll('.testimonio');
let totalTestimonios = testimonio.length;
let contador = 0;

function adelante() {
    if (contador < totalTestimonios - 1) {
        contador++;
        carruselTestimonios.style.transform = `translateX(-${contador * 100}%)`;
    }
}

function atras() {
    if (contador > 0 ) {
        contador--;
        carruselTestimonios.style.transform = `translateX(-${contador * 100}%)`;
    }
}


//Hasta aquí carrusel testimonios

//OPCION 2
// Carrusel testimonios desde aquí
/* document.addEventListener('DOMContentLoaded', () => {
    let carruselTestimonios = document.querySelector('.testimonios');
    let testimonio = document.querySelectorAll('.testimonio');
    let totalTestimonios = testimonio.length;
    let contador = 0;
    //Para ir hacia 'adelante', sumamos en el contador de la condicional
    document.querySelector('.siguiente').addEventListener('click', () => {
        if (contador < totalTestimonios - 1) {
            contador++;
            updateCarrusel();
        }
    });
    //Para ir hacia 'atrás', restamos en el contador de la condicional
    document.querySelector('.anterior').addEventListener('click', () => {
        if (contador > 0) {
            contador--;
            updateCarrusel();
        }
    });

    function updateCarrusel() {
        const offset = -contador * 100;
        carruselTestimonios.style.transform = `translateX(${offset}%)`;
    }
}); */
//Hasta aquí carrusel testimonios