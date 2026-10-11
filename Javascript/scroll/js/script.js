let ampliar = document.querySelector('#modal');

function grande() {
    ampliar.classList.add('active');
}

function cerrarGrande() {
    modal.classList.remove('active');
}


window.onscroll = function() { cabecera() }

let midocumento = document.querySelector('html');
let micabecera = document.querySelector('header');
function cabecera() {
    
    if (midocumento.scrollTop > 50) {
        micabecera.classList.add('cabecera');
    }
    else {
        micabecera.classList.remove('cabecera');
    }
}


