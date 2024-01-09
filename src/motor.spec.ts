import { beforeEach, it, expect, describe, vi } from 'vitest';

// import { Estado } from './model';
// import * as model from './model';
import { actualizaPuntuacion } from './motor';
import { partida } from './model';

// Comprobar si un jugador ha ganado el juego o no

describe('compruebaPuntuacion', () => {


    it('Comprueba si un jugador ha ganado el juego', () => {

        beforeEach(() => {
            vi.spyOn(partida, 'puntuacionUsuario', 'get').mockReturnValue(7.5);
        })

        // Arrange
        const puntuacionPartida = 7.5;

        // Act
        const resultado = actualizaPuntuacion();

        // Assert
        expect(puntuacionPartida).toBe(resultado);

    })

})