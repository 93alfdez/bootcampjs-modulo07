import { partida, Estado } from "./model";
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
export const compruebaPuntuacion = (puntuacion: number): Estado => {

    puntuacion = partida.puntuacionUsuario;

    if (elementoPuntuacion && elementoMensaje &&
        elementoPuntuacion instanceof HTMLElement && elementoMensaje instanceof HTMLElement) {

        if (puntuacion >= 0.5 && puntuacion <= 4) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${puntuacion}`;
            elementoMensaje.innerHTML = `Has sido muy conservador`;
            return "HAS_SIDO_MUY_CONSERVADOR"
        }
        if (puntuacion === 5) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${puntuacion}`;
            elementoMensaje.innerHTML = `Te ha entrado el canguelo eh?`;
            return "TE_HA_ENTRADO_CANGUELO"
        }
        if (puntuacion >= 6 || puntuacion === 7) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${puntuacion}`;
            elementoMensaje.innerHTML = `Casi casi...`;
            return "CASI_CASI"

        };
        if (puntuacion === 7.5) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${puntuacion}`;
            elementoMensaje.innerHTML = `¡Lo has clavado! ¡Enhorabuena!`;
            return "HAS_GANADO"
        };
        if (puntuacion > 7.5) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${puntuacion}`;
            elementoMensaje.innerHTML = 'Game over';
            return "GAME_OVER"
        };
    };
    return puntuacion === 0 ? "INICIAR_PARTIDA" : "JUGANDO";

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



/* if (elementoPuntuacion && elementoMensaje &&
    elementoPuntuacion instanceof HTMLElement && elementoMensaje instanceof HTMLElement) {

    switch (partida.estado) {
        case "HAS_SIDO_MUY_CONSERVADOR":
            if (partida.puntuacionUsuario >= 0.5 && partida.puntuacionUsuario <= 4) {
                elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
                elementoMensaje.innerHTML = `Has sido muy conservador`;
            }
            break;
        case "TE_HA_ENTRADO_CANGUELO":
            if (partida.puntuacionUsuario === 5) {
                elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
                elementoMensaje.innerHTML = `Te ha entrado el canguelo eh?`;
            }
            break;
        case "CASI_CASI":
            if (partida.puntuacionUsuario >= 6 || partida.puntuacionUsuario === 7) {
                elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
                elementoMensaje.innerHTML = `Casi casi...`;
            };
            break;
        case "HAS_GANADO":
            if (partida.puntuacionUsuario === 7.5) {
                elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
                elementoMensaje.innerHTML = `¡Lo has clavado! ¡Enhorabuena!`;
            };
            break;
        case "HAS_PERDIDO":
            if (partida.puntuacionUsuario > 7.5) {
                elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
                elementoMensaje.innerHTML = 'Game over';
            };
            break;
        default:
            elementoMensaje.innerHTML = '';
            elementoPuntuacion.innerHTML = '';
            break;
    };
}; */