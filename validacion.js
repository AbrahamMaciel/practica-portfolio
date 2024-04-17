 //Haz tú validación en javascript acá
let formcontacto = document.querySelector('.formcontacto__form');

formcontacto.addEventListener('submit' , (e) => {
    let mensajes = [];
    
    e.preventDefault();
    validarNombre(mensajes);
    // validarEmail();
    // validarAsunto();
    // validarMensaje();

});

// Esto Valida que: 
// - El campo nombre no este vacio o en blanco
// - Que tenga como maximo 50 caracteres

function validarNombre(mensajes){
    let nombre = document.getElementById('nombre');

    if (nombre.value === '' || nombre.value === null){
        mensajes.push('Se requiere un nombre pue');
        console.log(mensajes.pop());
    }

    if(nombre.value.length >= 5){
        mensajes.push('El nombre debe ser de menos de 40 caracteres');
        console.log(mensajes.pop());
    }
}

// Esto deberia agregar un mensaje en el bloque de error
function mostrarError(){

}

