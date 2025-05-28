const areas = {
    'lengua': [
        { nombre: 'LIC 1', texto: 'Aguirre Asanza Delicia Mireya.' },
        { nombre: 'LIC 2', texto: 'Anatoa Caedenas Veronica Alexandra.' },
        { nombre: 'LIC 3', texto: 'Bunce Jimenez Karen Lizbeth.' }
    ],
    'matematicas': [
        { nombre: 'LIC 4', texto: 'Carpio Maria Dolores.' },
        { nombre: 'LIC 5', texto: 'Cazar Valencia Maria del Carmen.' },
        { nombre: 'LIC 6', texto: 'Cevallos Cadena Carina Elizabeth.' }
    ],
    'sociales': [
        { nombre: 'LIC 7', texto: 'Gavilanes Pachamama Maria Marlene.' },
        { nombre: 'LIC 8', texto: 'Gomez Cabezas Gabriela Cristina.' },
        { nombre: 'LIC 9', texto: 'Jacome Quinluisa Deysi Paola.' }
    ],
    'naturales': [
        { nombre: 'LIC 10', texto: 'Samueza Garzon Evelyn Gabriela.' },
        { nombre: 'LIC 11', texto: 'Toledo Tapia Rosa Maria.' },
        { nombre: 'LIC 12', texto: 'Verdezoto Cepeda Jackeline del Carmen.' }
    ],
    'fisica': [
        { nombre: 'LIC 13', texto: 'Vela Romo Gloria Rebeca.' },
        { nombre: 'LIC 14', texto: 'Yaguana Luzon Nalda.' },
        { nombre: 'LIC 15', texto: 'NOMBRE' }
    ],
    'ingles': [
        { nombre: 'LIC 16', texto: 'NOMBRE' },
        { nombre: 'LIC 17', texto: 'NOMBRE' },
        { nombre: 'LIC 18', texto: 'NOMBRE' }
    ],
    'eca': [
        { nombre: 'LIC 19', texto: 'NOMBRE' },
        { nombre: 'LIC 20', texto: 'NOMBRE' },
        { nombre: 'LIC 21', texto: 'NOMBRE' }
    ]
};
document.querySelectorAll('.areas li').forEach(item => {
    item.addEventListener('click', event => {
        const area = event.target.id;
        const galeriaContainer = document.getElementById('galeria-container');
        const galeria = galeriaContainer.querySelector('.galeria');
        galeria.innerHTML = ''; 
        areas[area].forEach((imagen, index) => {
            const contenedor = document.createElement('div');
            contenedor.classList.add('foto-container');
            const imagenElemento = document.createElement('img');
            imagenElemento.src = `imagenes/${area}/${index + 1}.jpg`; 
            imagenElemento.alt = imagen.nombre;
            imagenElemento.classList.add('foto');
            contenedor.appendChild(imagenElemento);
            const textoElemento = document.createElement('p');
            textoElemento.textContent = imagen.texto;
            contenedor.appendChild(textoElemento);
            galeria.appendChild(contenedor);
        });
        galeriaContainer.style.display = 'block';
    });
});