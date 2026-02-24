/*
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
*/
document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadPDF');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', async () => {
            const elementoParaConvertir = document.body; 
            downloadBtn.textContent = 'Generando...';
            downloadBtn.disabled = true;

            try {
                const { jsPDF } = window.jspdf;
                const canvas = await html2canvas(elementoParaConvertir, {
                    scale: 2,
                    useCORS: true, 
                    logging: false,
                    backgroundColor: "#ffffff" 
                });
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

                pdf.save('documento-descargado.pdf');

            } catch (error) {
                console.error('Error al generar el PDF:', error);
                alert('Hubo un error al generar el archivo.');
            } finally {
                downloadBtn.textContent = 'Descargar PDF';
                downloadBtn.disabled = false;
            }
        });
    }
});
