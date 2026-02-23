document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadPDF');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            const pdfUrl = 'https://raw.githubusercontent.com/FrGp-dev/Hoja-de-Vida/5adf91437f10774ea64e2c190fd132c86512c0e6/Pdf.pdf';
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'Hoja_de_Vida.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    console.log("Sistema de descarga de archivo PDF listo.");
});
