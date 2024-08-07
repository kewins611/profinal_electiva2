const fs = require('fs');
const path = require('path');

test('HTML file contains "Hola Mundo"', () => {
    const htmlPath = path.join(__dirname, 'holamundo.html'); // La ruta se ajusta a la ubicación actual
    const html = fs.readFileSync(htmlPath, 'utf8');
    expect(html).toMatch(/Hola mundo/); // Asegúrate de que la prueba coincida con el contenido del archivo HTML
});
