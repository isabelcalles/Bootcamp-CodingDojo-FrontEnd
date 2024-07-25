console.log("Conectado, OK!!!")
let iniciaSesion = document.querySelector("#toggleInOut");
let removerBoton = document.querySelector("#definicionBtn");
let megustaGato = document.querySelector("#megusta_gato")
let numeroGato = document.querySelector("#numero_gato")
let megustaPerro = document.querySelector("#megusta_perro")
let numeroPerro = document.querySelector("#numero_perro");
// Toggle Inicio de Sesion
iniciaSesion.addEventListener('click', (evento) => {
    if(evento.target.innerText === "Iniciar Sesion"){
        evento.target.innerText = "Cerrar Sesion";
    }else{
        evento.target.innerText = "Iniciar Sesion";
    }
})
// Remover Boton
removerBoton.addEventListener('click', function(evento){
    removerBoton.remove()
})
// Incrementar likes
megustaGato.addEventListener("click",  function(evento){
    numeroGato.innerText ++;
    window.alert("Gato atigrado was liked")
})
megustaPerro.addEventListener('click', function(evento){
    numeroPerro.innerText ++;
    window.alert("Golden Retriever was liked")
})
