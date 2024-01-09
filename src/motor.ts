import { partida } from "./model";
import { elementoImagenCarta, } from "./ui";

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


// Plantarse
export const mostrarMensajePuntuacion = () => {
    if (partida.puntuacionUsuario >= 0.5 && partida.puntuacionUsuario <= 4) {
        partida.mensaje = `Has sido muy conservador`;
        partida.estado = 'HAS_SIDO_MUY_CONSERVADOR';
    }
    if (partida.puntuacionUsuario === 5) {
        partida.mensaje = `Te ha entrado el canguelo eh?`;
        partida.estado = 'TE_HA_ENTRADO_CANGUELO';
    }
    if (partida.puntuacionUsuario >= 6 || partida.puntuacionUsuario === 7) {
        partida.mensaje = `Casi casi...`;
        partida.estado = 'CASI_CASI';
    };
    if (partida.puntuacionUsuario === 7.5) {
        partida.mensaje = `¡Lo has clavado! ¡Enhorabuena!`;
        partida.estado = 'HAS_GANADO';
    };
    if (partida.puntuacionUsuario > 7.5) {
        partida.mensaje = 'Game over';
        partida.estado = 'GAME_OVER';
    };
};