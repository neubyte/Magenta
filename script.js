document.addEventListener('DOMContentLoaded', () => {
    const dniInput = document.getElementById('dniInput');
    const searchButton = document.getElementById('searchButton');
    const displayDNI = document.getElementById('displayDNI');
    const displayLocalidad = document.getElementById('displayLocalidad');
    const displayURNA = document.getElementById('displayURNA');
    const errorMessage = document.getElementById('errorMessage');

    // Aquí pegarás tu padrón como una cadena de texto
    // Cada línea es un registro, y los campos están separados por comas
    const padronData = `
        12345678,Buenos Aires,101
        87654321,Cordoba,202
        11223344,Rosario,303
        55667788,Mendoza,404
        99887766,Salta,505
        10203040,Tucuman,606
        40302010,La Plata,707
    `;

    // Procesar los datos del padrón en un formato fácil de buscar
    const padron = padronData.trim().split('\n').map(line => {
        const parts = line.split(',');
        return {
            dni: parts[0].trim(),
            localidad: parts[1].trim(),
            urna: parts[2].trim()
        };
    });

    const searchDNI = () => {
        const dniToSearch = dniInput.value.trim();

        // Limpiar resultados anteriores y mensajes de error
        displayDNI.textContent = '';
        displayLocalidad.textContent = '';
        displayURNA.textContent = '';
        errorMessage.textContent = '';

        if (!dniToSearch) {
            errorMessage.textContent = 'Por favor, ingresa un DNI.';
            return;
        }

        const foundEntry = padron.find(entry => entry.dni === dniToSearch);

        if (foundEntry) {
            displayDNI.textContent = foundEntry.dni;
            displayLocalidad.textContent = foundEntry.localidad;
            displayURNA.textContent = foundEntry.urna;
        } else {
            errorMessage.textContent = 'DNI no encontrado en el padrón.';
        }
    };

    searchButton.addEventListener('click', searchDNI);

    dniInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchDNI();
        }
    });
});