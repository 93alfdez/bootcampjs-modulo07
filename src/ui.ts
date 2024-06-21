import {
    partida,
    // JUGANDO_PARTIDA,
    // MENSAJE_CANGUELO,
    // MENSAJE_CASI,
    // MENSAJE_CONSERVADOR,
    // MENSAJE_ENHORABUENA,
    // MENSAJE_GAMEOVER,
    // NO_INICIADA,
    // PARTIDA_TERMINADA,
} from "./model";

import { actualizaPuntuacion, dameCarta, iniciarPartida, compruebaPuntuacion } from "./motor";

export const elementoPuntuacion = document.getElementById('puntuacion');
export const elementoMensaje = document.getElementById('mensaje');
export const elementoImagenCarta = document.getElementById('imagen') as HTMLImageElement;

// Botón 'Pide Carta'
export const botonDarCarta = document.getElementById('pideCarta');

const pideCarta = () => {
    dameCarta();
    actualizaPuntuacion();
    compruebaPuntuacion();
    mostrarCarta();
    mostrarMensaje();
    mostrarPuntuacion();
    if (partida.puntuacionUsuario >= 7.5) {
        gameOver();
    };
}

botonDarCarta?.addEventListener('click', pideCarta);

// Botón 'Plantarse'
export const botonPlantarse = document.getElementById('mePlanto');

const mePlanto = () => {
    quePasaria();
    mostrarMensaje();
}

botonPlantarse?.addEventListener('click', mePlanto);

// Botón 'Volver a jugar'
const botonReset = document.getElementById('reset');

const reset = () => {
    iniciarPartida();
    resetUI();
}

botonReset?.addEventListener('click', reset);

// Botón 'Que pasaría'
const botonQuePasaria = document.getElementById('quePasaria');

const quePasariaSi = () => {
    dameCarta();
    actualizaPuntuacion();
    mostrarCarta();
    if (elementoPuntuacion && elementoPuntuacion instanceof HTMLElement) {
        elementoPuntuacion.innerHTML = `Tu puntuación hubiese sido de ${partida.puntuacionUsuario}`;
    };
    if (elementoMensaje && elementoMensaje instanceof HTMLElement) {
        elementoMensaje.innerHTML = '';
    };
    if (botonQuePasaria && botonQuePasaria instanceof HTMLButtonElement) {
        botonQuePasaria.disabled = true;
    };
};

botonQuePasaria?.addEventListener('click', quePasariaSi);


// Muestra mensaje
const mostrarMensaje = () => {

    if (elementoPuntuacion && elementoMensaje &&
        elementoPuntuacion instanceof HTMLElement && elementoMensaje instanceof HTMLElement) {

        if (partida.puntuacionUsuario >= 0.5 && partida.puntuacionUsuario <= 4) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
            elementoMensaje.innerHTML = partida.mensaje;
        }
        if (partida.puntuacionUsuario === 5) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
            elementoMensaje.innerHTML = partida.mensaje;

        }
        if (partida.puntuacionUsuario >= 6 || partida.puntuacionUsuario === 7) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
            elementoMensaje.innerHTML = partida.mensaje;

        };
        if (partida.puntuacionUsuario === 7.5) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
            elementoMensaje.innerHTML = partida.mensaje;

        };
        if (partida.puntuacionUsuario > 7.5) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
            elementoMensaje.innerHTML = partida.mensaje;
            console.log(partida.mensaje);
        };
    };
};

// Mostrar Puntuacion
export const mostrarPuntuacion = () => {
    if (elementoPuntuacion && elementoPuntuacion instanceof HTMLElement) {
        elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
    };

    if (elementoMensaje && elementoMensaje instanceof HTMLElement) {
        elementoMensaje.innerHTML = '';
    };

}

// Mostrar Carta
export const mostrarCarta = () => {

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

    if (elementoImagenCarta && elementoImagenCarta instanceof HTMLElement) {
        elementoImagenCarta.src = '/src/images/back.png';
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
        compruebaPuntuacion();
    }
};

// Game Over
export const gameOver = () => {
    if (partida.puntuacionUsuario >= 7.5) {
        if (botonDarCarta && botonDarCarta instanceof HTMLButtonElement) {
            botonDarCarta.disabled = true;
        }
        if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
            botonPlantarse.disabled = true;
        };
        mostrarMensaje();
    };
}