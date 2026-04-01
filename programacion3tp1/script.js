// 1. Smooth Navigation
const navButtons = document.querySelectorAll('.nav-btn');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.getAttribute('data-section');
        const targetSection = document.getElementById(sectionId);

        if (targetSection) {
            targetSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start' 
            });
        }
    });
});

// 2. Save as PDF
const pdfBtn = document.getElementById('pdfBtn');

if (pdfBtn) {
    pdfBtn.addEventListener('click', () => {
        window.print();
        console.log("PDF Export triggered.");
    });
}

// 3. Simple Form Validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("¡Merci! Tu mensaje ha sido enviado correctamente.");
        contactForm.reset();
    });
}