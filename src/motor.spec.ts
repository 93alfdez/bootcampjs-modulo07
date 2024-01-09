import { beforeEach, it, expect, describe, vi } from 'vitest';

// import { Estado } from './model';
import * as model from './model';
import { actualizaPuntuacion } from './motor';
// import { partida } from './model';
import Estado from './model';

// Comprobar si un jugador ha ganado el juego o no

describe('compruebaPuntuacion', () => {


    it('Comprueba si un jugador ha ganado el juego', () => {

        // Arrange
        beforeEach(() => {
            vi.spyOn(model.partida, 'puntuacionUsuario', 'get').mockReturnValue(7.5);
        })
        const estadoEsperado: Estado = "HAS_GANADO";

        // Act
        const resultado = 7.5;

        // Assert
        expect(resultado).toBe(estadoEsperado);

    })

})