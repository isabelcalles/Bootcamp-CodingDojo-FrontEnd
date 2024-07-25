document.addEventListener('DOMContentLoaded', () =>{
    const botonesLike = document.querySelectorAll('#boton-likes');

    botonesLike.forEach(boton =>{
        const seccionLike = boton.parentElement;
        const numeroLikes = seccionLike.querySelector('#numero-likes');
        let count = 0;

        boton.addEventListener('click', () =>{
            count++;
            numeroLikes.textContent = `${count} like(s)`;
        });
    }); 
});