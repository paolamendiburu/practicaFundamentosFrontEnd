var form = document.getElementsByName("contacto")[0];

/* Inputs del formulario */
var nombreInput = document.getElementById("nombre");
var emailInput = document.getElementById("email");
var telefonoInput = document.getElementById("telefono");

var conocidoInput = {
  option1: document.getElementById("option1"),
  option2: document.getElementById("option2"),
  option3: document.getElementById("option3")
}

var otroMensajeInput = document.getElementById("otro");
var mensajeInput = document.getElementById("mensaje");
var submitButton = document.getElementById("enviar");


/* Funciones de validación del formulario */

form.addEventListener("submit", function (event) {
  if (nombreInput.checkValidity() === false) {
    alert("Tienes que escribir tu nombre");
    nombreInput.focus();
    event.preventDefault();
    return false;
  }

  var regexEmail = /[A-Za-z0-9\.\+]+@[A-Za-z0-9]+\.[A-Za-z0-9\.]+/;
  var resultEmailValidation = regexEmail.test(emailInput.value);

  if (resultEmailValidation === false) {
    alert("Tienes que escribir un email de la forma correcta");
    emailInput.focus();
    event.preventDefault();
    return false;
  }


  if (mensajeInput.value.match(/\S+/g).length == null) {
    alert("Por favor rellena el mensaje que se va a escribir");

    mensajeInput.focus();
    event.preventDefault();
    return false;
  }


  if (mensajeInput.value.match(/\S+/g).length > 150) {

    alert("El limite son 150 palabras");
    mensajeInput.focus();
    event.preventDefault();
    return false;
  }

  submitButton.setAttribute("disabled", "");
  event.preventDefault();

  setTimeout(function () {
    form.reset();
    sendNotification("Formulario recibido", "Gracias por participar");
    submitButton.removeAttribute("disabled");
  }, 1000);
});


