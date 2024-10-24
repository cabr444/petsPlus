const container = document.querySelector(".container")
const btnIn = document.getElementById("btn-in")
const btnUp = document.getElementById("btn-up")

btnIn.addEventListener("click",()=>{
  container.classList.remove("toggle");
});
btnUp.addEventListener("click",()=>{
  container.classList.add("toggle");
});

document.querySelector('.sign').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.querySelector('.sign input[type="text"]').value;
  const password = document.querySelector('.sign input[type="password"]').value;
  
  // Guardar los datos en localStorage
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  
  // Redirigir al perfil del usuario
  window.location.href = './user.html';
});

document.querySelector('.sign-up').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.querySelector('.sign-up input[placeholder="Nombre"]').value;
  const email = document.querySelector('.sign-up input[placeholder="Email"]').value;
  const password = document.querySelector('.sign-up input[placeholder="Password"]').value;
  
  // Guardar los datos en localStorage
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  
  // Redirigir al perfil del usuario
  window.location.href = './user.html';
});

// Cel
// Función para mostrar/ocultar el menú
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("show");
}

// Validacion formularios espacios vacios, consult

document.querySelector('form').addEventListener('submit', function(event) {
  // Obtener los valores de los campos del formulario
  const nameD = document.getElementById('nameD').value.trim();
  const petName = document.getElementById('petName').value.trim();
  const day = document.getElementById('day').value.trim();

  // Verificar si algún campo está vacío
  if (!nameD || !petName || !day) {
    // Prevenir el envío del formulario
    event.preventDefault();
    // Mostrar la alerta
    alert('Por favor, completa todos los campos antes de enviar.');
  }
});

// asdasd
document.addEventListener('DOMContentLoaded', function() {
  // Selección de los formularios
  const signInForm = document.querySelector('.sign');
  const signUpForm = document.querySelector('.sign-up');

  // Función para validar campos vacíos
  function validateForm(event, form) {
    // Obtener todos los campos de entrada
    const inputs = form.querySelectorAll('input');
    let isValid = true;

    // Verificar si algún campo está vacío
    inputs.forEach(input => {
      if (input.value.trim() === '') {
        isValid = false;
      }
    });

    if (!isValid) {
      // Prevenir el envío del formulario
      event.preventDefault();
      // Mostrar la alerta
      alert('Por favor, completa todos los campos antes de continuar.');
    }
  }

  // Añadir eventos de validación al intentar enviar los formularios
  signInForm.addEventListener('submit', function(event) {
    validateForm(event, signInForm);
  });

  signUpForm.addEventListener('submit', function(event) {
    validateForm(event, signUpForm);
  });
});
