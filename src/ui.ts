import { partida } from "./model";
import { actualizaPuntuacion, dameCarta, iniciarPartida, muestraPuntuacion, compruebaPuntuacion } from "./motor";

export const elementoPuntuacion = document.getElementById('puntuacion');
export const elementoMensaje = document.getElementById('mensaje');
export const elementoImagenCarta = document.getElementById('imagen') as HTMLImageElement;

// Botón 'Pide Carta'
export const botonDarCarta = document.getElementById('pideCarta');

botonDarCarta?.addEventListener('click', () => {
    dameCarta();
    actualizaPuntuacion();
    muestraCarta();
    muestraPuntuacion();
});

// Botón 'Plantarse'
export const botonPlantarse = document.getElementById('mePlanto');

botonPlantarse?.addEventListener('click', () => {
    compruebaPuntuacion();
    quePasaria();
});

// Botón 'Volver a jugar'
const botonReset = document.getElementById('reset');
botonReset?.addEventListener('click', () => {
    iniciarPartida();
    resetUI();
});

// Botón 'Que pasaría'
const botonQuePasaria = document.getElementById('quePasaria');
botonQuePasaria?.addEventListener('click', () => {
    dameCarta();
    actualizaPuntuacion();
    muestraCarta();
    if (elementoPuntuacion && elementoPuntuacion instanceof HTMLElement) {
        elementoPuntuacion.innerHTML = `Tu puntuación hubiese sido de ${partida.puntuacionUsuario}`;
    };
    if (elementoMensaje && elementoMensaje instanceof HTMLElement) {
        elementoMensaje.innerHTML = '';
    };
    if (botonQuePasaria && botonQuePasaria instanceof HTMLButtonElement) {
        botonQuePasaria.disabled = true;
    };
});

// Mostrar Carta
export const muestraCarta = () => {

    elementoImagenCarta.src = partida.carta.url

    if (elementoImagenCarta && elementoImagenCarta instanceof HTMLImageElement) {
        switch (partida.carta.valor) {
            case 1:
                elementoImagenCarta.src = '/src/images/1_as-copas.png';
                break;
            case 2:
                elementoImagenCarta.src = '/src/images/2_dos-copas.png';
                break;
            case 3:
                elementoImagenCarta.src = '/src/images/3_tres-copas.png';
                break;
            case 4:
                elementoImagenCarta.src = '/src/images/4_cuatro-copas.png';
                break;
            case 5:
                elementoImagenCarta.src = '/src/images/5_cinco-copas.png';
                break;
            case 6:
                elementoImagenCarta.src = '/src/images/6_seis-copas.png';
                break;
            case 7:
                elementoImagenCarta.src = '/src/images/7_siete-copas.png';
                break;
            case 10:
                elementoImagenCarta.src = '/src/images/10_sota-copas.png';
                break;
            case 11:
                elementoImagenCarta.src = '/src/images/11_caballo-copas.png';
                break;
            case 12:
                elementoImagenCarta.src = '/src/images/12_rey-copas.png';
                break;
        };
    }
};


// Nueva Partida
const resetUI = () => {

    if (botonDarCarta && botonDarCarta instanceof HTMLButtonElement) {
        botonDarCarta.disabled = false;
    };

    if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
        botonPlantarse.disabled = false;
    };

    if (botonQuePasaria && botonQuePasaria instanceof HTMLButtonElement) {
        botonQuePasaria.classList.remove('mostrar');
        botonQuePasaria.disabled = false;
    };

    if (elementoPuntuacion &&
        elementoPuntuacion instanceof HTMLElement) {
        elementoPuntuacion.innerHTML = '';
    };

    if (elementoMensaje &&
        elementoMensaje instanceof HTMLElement) {
        elementoMensaje.innerHTML = '';
    };
};

// Que pasaría
const quePasaria = () => {
    if (partida.puntuacionUsuario >= 0.5 && partida.puntuacionUsuario <= 7) {
        if (botonDarCarta && botonDarCarta instanceof HTMLButtonElement) {
            botonDarCarta.disabled = true;
        };

        if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
            botonPlantarse.disabled = true;
        };

        if (botonQuePasaria && botonQuePasaria instanceof HTMLButtonElement) {
            botonQuePasaria.className = 'mostrar';
        }
    }
};

