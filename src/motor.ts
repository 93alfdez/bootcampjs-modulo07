import { partida } from "./model";
import { elementoPuntuacion, elementoMensaje, elementoImagenCarta, botonDarCarta, botonPlantarse } from "./ui";

// Pedir carta
export const dameCarta = () => {

    partida.carta.valor = Math.floor(Math.random() * 10 + 1);

    if (partida.carta.valor > 7) {
        partida.carta.valor = partida.carta.valor + 2;
    };

    // Cartas Mostradas
    if (partida.cartasMostradas.includes(partida.carta.valor)) {
        dameCarta();
        return
    };

    partida.cartasMostradas.push(partida.carta.valor);

};

// Actualiza la puntuación
export const actualizaPuntuacion = () => {
    let valorCarta: number = partida.carta.valor;

    if (partida.carta.valor >= 10) {
        valorCarta = 0.5;
    };

    partida.puntuacionUsuario = partida.puntuacionUsuario + valorCarta;
}

//Reset
export const iniciarPartida = () => {
    partida.puntuacionUsuario = 0;
    elementoImagenCarta.src = '/src/images/back.png';
    partida.cartasMostradas = [];
}

// Mostrar Puntuacion
export const muestraPuntuacion = () => {
    if (elementoPuntuacion && elementoPuntuacion instanceof HTMLElement) {
        elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
    };

    if (elementoMensaje && elementoMensaje instanceof HTMLElement) {
        elementoMensaje.innerHTML = '';
    };

    if (partida.puntuacionUsuario >= 7.5) {
        gameOver();
    };
}


// Plantarse
export const compruebaPuntuacion = () => {

    if (elementoPuntuacion && elementoMensaje &&
        elementoPuntuacion instanceof HTMLElement && elementoMensaje instanceof HTMLElement) {

        if (partida.puntuacionUsuario >= 0.5 && partida.puntuacionUsuario <= 4) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
            elementoMensaje.innerHTML = `Has sido muy conservador`;
        }
        if (partida.puntuacionUsuario === 5) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
            elementoMensaje.innerHTML = `Te ha entrado el canguelo eh?`;
        }
        if (partida.puntuacionUsuario >= 6 || partida.puntuacionUsuario === 7) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
            elementoMensaje.innerHTML = `Casi casi...`;
        };
        if (partida.puntuacionUsuario === 7.5) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
            elementoMensaje.innerHTML = `¡Lo has clavado! ¡Enhorabuena!`;
        };
        if (partida.puntuacionUsuario > 7.5) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
            elementoMensaje.innerHTML = 'Game over';
        };
    };
};

// Game Over
export const gameOver = () => {
    if (botonDarCarta && botonDarCarta instanceof HTMLButtonElement) {
        if (partida.puntuacionUsuario === 7.5) {
            botonDarCarta.disabled = true;
        }
    };

    if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
        if (partida.puntuacionUsuario === 7.5) {
            botonPlantarse.disabled = true;
        }
    };
}