// 1. Navegación fluida con Scroll Suave
// Seleccionamos todos los botones que tienen la clase 'btn-nav'
const botonesNav = document.querySelectorAll('.btn-nav');

botonesNav.forEach(boton => {
    boton.addEventListener('click', () => {
        // Obtenemos el ID de la sección desde el atributo data-seccion
        const seccionId = boton.getAttribute('data-seccion');
        const seccionDestino = document.getElementById(seccionId);

        // Si la sección existe, hacemos el scroll suave
        if (seccionDestino) {
            seccionDestino.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start' 
            });
        }
    });
});

// 2. Función Save as PDF (Acción visible requerida por el TP)
const btnPDF = document.getElementById('btnPDF');

if (btnPDF) {
    btnPDF.addEventListener('click', () => {
        // Esta función nativa abre el menú de impresión/guardado de macOS
        window.print();
        console.log("Elisa: Se activó la exportación a PDF.");
    });
}

// 3. Pequeña validación del formulario (Interactividad extra)
const formulario = document.querySelector('.formulario-contacto-vibrante');
if (formulario) {
    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue
        alert("¡Merci! Tu mensaje ha sido enviado correctamente (simulado).");
        formulario.reset();
    });
}