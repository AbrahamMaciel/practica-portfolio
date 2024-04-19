//Haz tú validación en javascript acá
let mensajes = [];

// Con el trim() puedo validar si es que solo se agregaron espacios.
function validarCampoVacio(idTarget) {
  let target = document.getElementById(idTarget);
  
  if (target.value.trim() === "" || target.value === null) {
    mostrarError(`error__${idTarget}`, `Se requiere un ${idTarget} valido.`);
    return true;
  } 

  return false;  
}

// Aca no estoy seguro si deberia permitir nombres que empiezen con numeros porque cambian el tipo de dato.
function validarMaxCaracteres(idTarget, limiteChar) {
  let target = document.getElementById(idTarget);

  if (String(target.value.length) > limiteChar) {
    mostrarError(
      `error__${idTarget}`,
      `Solo se permiten ${limiteChar} caracteres`
    );
    return true;
  } else {
    ocultarError(idTarget);
    return false;
  }
}

function ocultarError(inputId) {
  let pTarget = document.getElementById(`error__${inputId}`);

  pTarget.classList.remove("show");
}

function mostrarError(idTarget, mensaje) {
  let errorParagraph = document.getElementById(idTarget);

  errorParagraph.innerHTML = mensaje;
  errorParagraph.classList.add("show");
}

function validarFormatoEmail(idTarget) {
  let reEmail =
    /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
  let target = document.getElementById(idTarget);

  if (reEmail.test(target.value) == false) {
    mostrarError(`error__${idTarget}`, "Se requiere un email valido");
    return false;
  } else {
    ocultarError(idTarget);
    return true;
  }
}

// Esto Valida que:
// - El campo nombre no este vacio o en blanco
// - Que tenga como maximo 50 caracteres
// Si el nombre no esta vacio procede a validar length
function validarNombre() {
  if (validarCampoVacio("nombre") == false) {
    if (validarMaxCaracteres("nombre", 4) == false) {
      return true;
    }
  }
  return false;
}

// Esto Valida que:
// - El campo no este vacio o en blanco
// - Deber estar en formato e-mail conteniendo el caracter especial @ seguido de un dominio o proveedor seguido de un punto(.)
function validarEmail() {
  if (validarCampoVacio("email") == false) {
    if (validarFormatoEmail("email") == true) {
      return true;
    }
  }
  return false;
}

// Esto Valida que:
// - El campo nombre no este vacio o en blanco
// - Que tenga como maximo 50 caracteres
function validarAsunto() {
  if (validarCampoVacio("asunto") == false) {
    if (validarMaxCaracteres("asunto", 50) == false) {
      return true;
    }
  }
  return false;
}

// Esto Valida que:
// - El campo nombre no este vacio o en blanco
// - Que tenga como maximo 300 caracteres
function validarMensaje() {
  console.log('damnnnn');
  if (validarCampoVacio("mensaje") == false) {
    if (validarMaxCaracteres("mensaje", 300) == false) {
      return true;
    }
  }
  return false;
}

function validarForm() {
  let botonEnviar = document.querySelector(".formcontacto__boton");

  // Esto quedo masomenos idealmente no tendria que hacer las validaciones 2 veces pero sin hacerlo de esta forma solo valida 1 campo a la vez.../
  // Parece que cuando js evalua el if si el primero no pasa la prueba directamente asume que lo que queda no importa porque el AND nunca se va a cumplir, haciendo que las validaciones sean secuenciales.
  validarNombre();
  validarEmail();
  validarAsunto();
  validarMensaje();

  if (
    validarNombre() &&
    validarEmail() &&
    validarAsunto() &&
    validarMensaje()
  ) {
    botonEnviar.classList.remove("disabled");
  } else {
    botonEnviar.classList.add("disabled");
  }
}