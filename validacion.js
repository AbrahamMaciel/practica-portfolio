//Haz tú validación en javascript acá
let mensajes = [];

function validarCampoVacio(idTarget, mensajes) {
  let target = document.getElementById(idTarget);

  if (target.value === "" || target.value === null) {
    mensajes.push(`Se requiere un ${idTarget}.`);
    
    mostrarError(`error__${idTarget}`, mensajes.pop());
  }
}

function mostrarError(idTarget, mensaje){
    let errorParagraph = document.getElementById(idTarget);
    errorParagraph.innerHTML = mensaje;
    errorParagraph.classList.add('show');
}

function validarNombre() {
  validarCampoVacio('nombre', mensajes);
}

function validarForm() {
  console.log("proximamente... una validacion que las dominara a todas!.");

  validarNombre();
}

// let formcontacto = document.querySelector('.formcontacto__form');

// formcontacto.addEventListener('submit' , (e) => {
//     let mensajes = [];

//     e.preventDefault();
//     validarNombre(mensajes);
//     validarEmail(mensajes);
//     // validarAsunto();
//     // validarMensaje();

// });

// // Esto Valida que:
// // - El campo nombre no este vacio o en blanco
// // - Que tenga como maximo 50 caracteres

// function validarNombre(mensajes){
//     let nombre = document.getElementById('nombre');

//     validarCampoVacio('nombre', mensajes);

//     if(nombre.value.length >= 50){
//         mensajes.push('El nombre debe tener como maximo 50 caracteres.');
//         mostrarError(mensajes.pop());
//     }
// }

// // Esto Valida que:
// // - El campo nombre no este vacio o en blanco
// // - Deber estar en formato e-mail conteniendo el caracter especial @ seguido de un dominio o proveedor seguido de un punto(.)
// function validarEmail(mensajes){
//     validarCampoVacio('email', mensajes);
// }

// // Esto deberia agregar un paragrafo con mensaje en el bloque de error
// function mostrarError(mensaje){
//     let errorContainer = document.querySelector('.formcontacto__error__message');
//     let errorParagraph = document.createElement('p');
//     errorParagraph.classList.add('error__message__item');
//     errorParagraph.innerHTML = mensaje;
//     errorContainer.append(errorParagraph);

//     errorContainer.classList.add('show');
//     errorContainer.scrollIntoView({behavior: 'smooth'});
// }
