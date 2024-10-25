console.warn("Cuidado, ¡no ingreses aquí!");

const frases = [
    "¡Buenos días estrellita, la tierra te dice hola!",
    "¡Me caes mal!",
    "¡Siempre serás una chica ESPECIAL!",
    "¡Espero que te diviertas!",
    "¡Sigue soñando por un regalo!",
    "¡Rota tu código!",
    "¡Un año más, y sigues igual de curiosa!",
    "¡Nunca cambies, a menos que sea para mejor!",
    "¡Recuerda, siempre hay espacio para la mejora!",
    "¡Hoy es tu día, así que se una nube gris con todas tus fuerzas!",
    "¡Haz que este año cuente, aunque sea un poco desordenado!",
    "¡Los errores son solo pasos hacia el éxito!",
    "¡Sé única, aunque a veces no lo parezcas!",
    "¡Aprende CSS no seas como yo!",
    "¡Feliz cumpleaños, sigue creando tu propio destino!",
    "¡Nunca subestimes el poder de tus ideas, por locas que parezcan!"
];

function crearNube() {
    const nube = document.createElement('div');
    nube.className = 'cloud';
    nube.style.left = Math.random() * 100 + 'vw';
    nube.style.bottom = Math.random() * 100 + 'vh';

    nube.addEventListener('click', () => {
        nube.style.transform = "scale(0)";
        nube.style.opacity = "0";

        const frase = obtenerFraseAleatoria();
        mostrarFrase(frase, nube);

        setTimeout(() => {
            nube.remove();
        }, 500);

        crearConfeti(nube);
    });

    document.querySelector('.cloud-container').appendChild(nube);
}

function obtenerFraseAleatoria() {
    return frases[Math.floor(Math.random() * frases.length)];
}

function mostrarFrase(frase, nube) {
    const elementoFrase = document.createElement('div');
    elementoFrase.textContent = frase;
    elementoFrase.className = 'phrase';
    elementoFrase.style.left = nube.style.left;
    elementoFrase.style.bottom = nube.style.bottom;

    document.body.appendChild(elementoFrase);

    setTimeout(() => {
        elementoFrase.style.opacity = '1';
        setTimeout(() => {
            elementoFrase.remove();
        }, 5000);
    }, 100);
}

function crearConfeti(nube) {
    confetti({
        origin: { x: nube.offsetLeft / window.innerWidth, y: nube.offsetTop / window.innerHeight },
        particleCount: 100,
        spread: 70,
        startVelocity: 30,
        colors: ['#ff0', '#0f0', '#00f', '#f00', '#ff69b4'],
    });
}

function crearRayo() {
    const rayo = document.createElement('div');
    rayo.className = 'lightning';
    rayo.style.left = Math.random() * 100 + 'vw';
    rayo.style.top = Math.random() * 100 + 'vh';

    document.body.appendChild(rayo);

    setTimeout(() => {
        rayo.remove();
    }, 200);
}

function crearLluvia() {
    const gota = document.createElement('div');
    gota.className = 'rain';
    gota.style.left = Math.random() * 100 + 'vw';
    gota.style.animationDuration = (Math.random() * 1 + 0.5) + 's';

    document.body.appendChild(gota);

    setTimeout(() => {
        gota.remove();
    }, 1000);
}
function mostrarMensajeDeAdvertencia() {
    console.log("%cNO VEAS MI CODIGOOOOO....!!! YA NO HAY PRIVACIDAD POR AQUI", "font-size: 30px; color: red; background-color: black; padding: 20px; text-align: center;");
}
setInterval(crearNube, 2000);
setInterval(crearRayo, 1500);
setInterval(crearLluvia, 100);

mostrarMensajeDeAdvertencia();