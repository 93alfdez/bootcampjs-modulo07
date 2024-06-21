import {
    partida
} from "./model";

import * as Mensaje from "./model";

import { botonDarCarta, botonPlantarse } from "./ui";

export const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 10 + 1);
}
// Pedir carta
export const dameCarta = () => {
    const numeroAleatorio = generarNumeroAleatorio();
    actualizaValorCartaActual(numeroAleatorio);
    partida.carta.valor = actualizaValorCartaActual(numeroAleatorio);
    const valorCarta = partida.carta.valor
    actualizaCartasMostradas(valorCarta);

};

export const actualizaValorCartaActual = (numero: number) => {

    if (numero > 7) {
        numero = numero + 2;
    };
    return numero;
}

export const actualizaCartasMostradas = (carta: number) => {

    // Cartas Mostradas
    if (partida.cartasMostradas.includes(carta)) {
        dameCarta();
        return
    };

    partida.cartasMostradas.push(partida.carta.valor);
}


// Actualiza la puntuación
export const actualizaPuntuacion = () => {
    let valorCarta: number = partida.carta.valor;

    if (partida.carta.valor >= 10) {
        valorCarta = 0.5;
    }

    partida.puntuacionUsuario = partida.puntuacionUsuario + valorCarta;

}


export const actualizarEstado = () => {
    if (partida.puntuacionUsuario === 0) {
        partida.estado = Mensaje.NO_INICIADA;
    }
    if (partida.puntuacionUsuario >= 0.5 && partida.puntuacionUsuario <= 7) {
        partida.estado = Mensaje.JUGANDO_PARTIDA;
    }
    if (partida.puntuacionUsuario >= 7.5) {
        partida.estado = Mensaje.PARTIDA_TERMINADA;
    };
}


export const compruebaPuntuacion = () => {
    if (partida.puntuacionUsuario >= 0.5 && partida.puntuacionUsuario <= 4) {
        partida.mensaje = Mensaje.MENSAJE_CONSERVADOR;
    }
    if (partida.puntuacionUsuario === 5) {
        partida.mensaje = Mensaje.MENSAJE_CANGUELO;
    }
    if (partida.puntuacionUsuario >= 6 || partida.puntuacionUsuario === 7) {
        partida.mensaje = Mensaje.MENSAJE_CASI;
    };
    if (partida.puntuacionUsuario === 7.5) {
        partida.mensaje = Mensaje.MENSAJE_ENHORABUENA;
    };
    if (partida.puntuacionUsuario > 7.5) {
        partida.mensaje = Mensaje.MENSAJE_GAMEOVER;
    };
}


//Reset
export const iniciarPartida = () => {
    partida.puntuacionUsuario = 0;
    partida.carta.valor = 0;
    partida.carta.url = '/src/images/back.png';
    partida.cartasMostradas = [];
}


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
