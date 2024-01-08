import { beforeEach, it, expect, describe, vi } from 'vitest';

import { partida, Estado } from './model';
import { compruebaPuntuacion } from './motor';


// Comprobar si un jugador ha ganado el juego o no

describe('actualizaPuntuacion', () => {


    it('Comprueba si un jugador ha ganado el juego', () => {

        beforeEach(() => {
            vi.spyOn(partida, 'puntuacionUsuario', 'get').mockReturnValue(7.5);
        })

        // Arrange
        const puntuacion: number = 7.5;
        const estadoEsperado: Estado = "HAS_GANADO";

        // Act
        const resultado: Estado = compruebaPuntuacion(puntuacion);

        // Assert
        expect(resultado).toBe(estadoEsperado);

    })

})