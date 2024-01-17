export interface Partida {
    puntuacionUsuario: number,
    carta: Carta,
    cartasMostradas: number[],
    mensaje: Mensaje | "",
    estado: Estado
}

// Mensaje
export type Mensaje =
    | "Has sido muy conservador"
    | "Te ha entrado el canguelo eh?"
    | "Casi casi..."
    | "¡Lo has clavado! ¡Enhorabuena!"
    | "Game Over"

export const MENSAJE_CONSERVADOR = "Has sido muy conservador";
export const MENSAJE_CANGUELO = "Te ha entrado el canguelo eh?";
export const MENSAJE_CASI = "Casi casi...";
export const MENSAJE_ENHORABUENA = "¡Lo has clavado! ¡Enhorabuena!";
export const MENSAJE_GAMEOVER = "Game Over";

// Estado
export type Estado =
    | "No inicializada"
    | "Jugando"
    | "Partida terminada"

export const NO_INICIADA = "No inicializada";
export const JUGANDO_PARTIDA = "Jugando";
export const PARTIDA_TERMINADA = "Partida terminada";

export interface Carta {
    valor: number,
    url: string,
}

export const partida: Partida = {
    puntuacionUsuario: 0,
    carta: { valor: 0, url: '/src/images/back.png' },
    cartasMostradas: [],
    mensaje: "",
    estado: "No inicializada"
}