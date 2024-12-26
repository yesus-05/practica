// Obtén una referencia al botón
const boton = document.querySelector('#miBoton');

// Agrega un evento de clic al botón
boton.addEventListener('click', () => {
    // Aquí puedes agregar el código para mover el botón
    // Por ejemplo, puedes cambiar su posición usando CSS
    boton.style.transform = 'translateX(100px)';
});