document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadPDF');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            // Ejecuta el comando de impresión del navegador
            // Gracias al CSS @media print, se verá como un CV profesional
            window.print();
        });
    }

    console.log("Sistema de descarga listo.");
});