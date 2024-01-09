export interface Partida {
    puntuacionUsuario: number,
    carta: Carta,
    cartasMostradas: number[],
    mensaje: string,
    estado: number,
}

export interface Carta {
    valor: number,
    url: string,
}


export const partida: Partida = {
    puntuacionUsuario: 0,
    carta: { valor: 0, url: '/src/images/back.png' },
    cartasMostradas: [],
    mensaje: "",
    estado: 0
}