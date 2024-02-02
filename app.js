let progreso = 0;
const barraDeProgreso = document.getElementById("miBarraDeProgreso");

function cargar() {
    if (progreso < 70) {
        progreso += 7; // Aumenta el progreso en incrementos de 7%
        barraDeProgreso.style.width = progreso + "%";
        barraDeProgreso.innerHTML = progreso + "%";
        setTimeout(cargar, 500); // Simula el tiempo de carga
    }
}

// Detectar cuando el usuario llega a la sección de ejemplo
window.addEventListener('scroll', function() {
    const seccionEjemplo = document.querySelector('.section2');
    const seccionPosicion = seccionEjemplo.getBoundingClientRect().top;

    // Si la sección está en el viewport, inicia la carga
    if (seccionPosicion < window.innerHeight) {
        cargar();
        // Elimina el listener para que la carga no se reinicie si el usuario sigue haciendo scroll
        window.removeEventListener('scroll', arguments.callee);
    }
});
