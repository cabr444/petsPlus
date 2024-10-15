const container = document.querySelector(".container")
const btnIn = document.getElementById("btn-in")
const btnUp = document.getElementById("btn-up")

btnIn.addEventListener("click",()=>{
  container.classList.remove("toggle");
});
btnUp.addEventListener("click",()=>{
  container.classList.add("toggle");
});

// function
function darClick(){
  
}

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

