/*OPCION 1 - La menos eficiente
let kallak = document.querySelector('#kallak');
let escalada = document.querySelector('#escalada');
let senderismo = querySelector('#senderismo');

function mostrarInfo1() {
    kallak.classList.toggle('ver');

}
function mostrarInfo2() {
    escalada.classList.toggle('ver');
}
function mostrarInfo3() {
    senderismo.classList.toggle('ver');
} */

/*OPCION 2*/
/* 
let kallak = document.querySelector('#kallak');
let escalada = document.querySelector('#escalada');
let senderismo = document.querySelector('#senderismo');

function mostrarInfo1() {
    if (kallak.classList.contains('ver')) {
        kallak.classList.remove('ver');
    }
    else {
        kallak.classList.add('ver');
        escalada.classList.remove('ver');
        senderismo.classList.remove('ver');
    }
}
function mostrarInfo2() {
    if (escalada.classList.contains('ver')) {
        escalada.classList.remove('ver');
    }
    else {
        escalada.classList.add('ver');
        kallak.classList.remove('ver');
        senderismo.classList.remove('ver');
    }
}
function mostrarInfo3() {
    if (senderismo.classList.contains('ver')) {
        senderismo.classList.remove('ver');
    }
    else {
        senderismo.classList.add('ver');
        kallak.classList.remove('ver');
        escalada.classList.remove('ver');
    }
} */
/*OPCION 3*/
let kallak = document.querySelector('#kallak');
let escalada = document.querySelector('#escalada');
let senderismo = document.querySelector('#senderismo');
function mostrarInfo1() {
    senderismo.classList.remove('ver');
    escalada.classList.remove('ver');
    kallak.classList.toggle('ver');
}
function mostrarInfo2() {
    kallak.classList.remove('ver');
    senderismo.classList.remove('ver');
    escalada.classList.toggle('ver');
}
function mostrarInfo3() {
    escalada.classList.remove('ver');
    kallak.classList.remove('ver');
    senderismo.classList.toggle('ver');
}

/*OPCION 4 - La más compleja
function mostrarInfo1() {
      toggleConValidacion(kallak, [escalada, senderismo]);
  }
  function mostrarInfo2() {
      toggleConValidacion(escalada, [kallak, senderismo]);
  }
  function mostrarInfo3() {
      toggleConValidacion(senderismo, [kallak, escalada]);
  }
  
  // Función auxiliar reutilizable
  function toggleConValidacion(elementoActivo, elementos) {
      elementos.forEach(elemento => {
          if (elemento.classList.contains('ver')) {
              elemento.classList.remove('ver');
          }
      });
      elementoActivo.classList.toggle('ver');
  } */



















/* function mostrarInfo(elementoActivo) {
    elementos.forEach(elemento => {
        if (elemento !== elementoActivo) {
            elemento.classList.remove('ver');
        }
    });
    elementoActivo.classList.toggle('ver'); // Alterna en lugar de forzar
} */






/* PARA NOTA
document.querySelectorAll('[data-info]').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.dataset.info;
        const target = document.getElementById(targetId);
        
        target.classList.toggle('ver');
        button.setAttribute('aria-expanded', target.classList.contains('ver'));
    });
}); */
