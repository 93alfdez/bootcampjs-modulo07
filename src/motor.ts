import {
    JUGANDO_PARTIDA,
    MENSAJE_CANGUELO,
    MENSAJE_CASI,
    MENSAJE_CONSERVADOR,
    MENSAJE_ENHORABUENA,
    MENSAJE_GAMEOVER,
    NO_INICIADA,
    PARTIDA_TERMINADA,
    partida
} from "./model";

import { botonDarCarta, botonPlantarse } from "./ui";

export const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 10 + 1);
}

export const actualizaValorCartaActual = (numero: number) => {
    if (numero > 7) {
        partida.carta.valor = numero + 2;
    };
}

export const actualizaCartasMostradas = (carta: number) => {
    // Cartas Mostradas
    if (partida.cartasMostradas.includes(carta)) {
        dameCarta();
        return
    };

    partida.cartasMostradas.push(carta);
}

// Pedir carta
export const dameCarta = () => {
    const numeroAleatorio = generarNumeroAleatorio();
    actualizaValorCartaActual(numeroAleatorio);
    actualizaCartasMostradas(numeroAleatorio);

};


export const actualizarEstado = () => {
    if (partida.puntuacionUsuario === 0) {
        partida.estado = NO_INICIADA;
    }
    if (partida.puntuacionUsuario >= 0.5 && partida.puntuacionUsuario <= 7) {
        partida.estado = JUGANDO_PARTIDA;
    }
    if (partida.puntuacionUsuario >= 7.5) {
        partida.estado = PARTIDA_TERMINADA;
    };
}


export const compruebaPuntuacion = () => {
    if (partida.puntuacionUsuario >= 0.5 && partida.puntuacionUsuario <= 4) {
        partida.mensaje = MENSAJE_CONSERVADOR;
    }
    if (partida.puntuacionUsuario === 5) {
        partida.mensaje = MENSAJE_CANGUELO;
    }
    if (partida.puntuacionUsuario >= 6 || partida.puntuacionUsuario === 7) {
        partida.mensaje = MENSAJE_CASI;
    };
    if (partida.puntuacionUsuario === 7.5) {
        partida.mensaje = MENSAJE_ENHORABUENA;
    };
    if (partida.puntuacionUsuario > 7.5) {
        partida.mensaje = MENSAJE_GAMEOVER;
    };
}

// Actualiza la puntuación
export const actualizaPuntuacion = () => {
    let valorCarta: number = partida.carta.valor;

    if (partida.carta.valor >= 10) {
        valorCarta = 0.5;
    };

    if (partida.puntuacionUsuario >= 7.5) {
        gameOver();
    };

    partida.puntuacionUsuario = partida.puntuacionUsuario + valorCarta;
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
