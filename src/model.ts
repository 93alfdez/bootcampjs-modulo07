export interface Partida {
    puntuacionUsuario: number,
    carta: Carta,
    cartasMostradas: number[],
    mensaje: string,
    estado: string,
}

export interface Carta {
    valor: number,
    url: string,
}

export type Estado =
    | "HAS_SIDO_MUY_CONSERVADOR"
    | "TE_HA_ENTRADO_CANGUELO"
    | "CASI_CASI"
    | "HAS_GANADO"
    | "GAME_OVER";

export const partida: Partida = {
    puntuacionUsuario: 0,
    carta: { valor: 0, url: '/src/images/back.png' },
    cartasMostradas: [],
    mensaje: "",
    estado: ""
}