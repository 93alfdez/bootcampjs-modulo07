import { beforeEach, it, expect, describe, vi } from 'vitest';

import { Estado } from './model';
import * as model from './model';
import { compruebaPuntuacion } from './motor';

// Comprobar si un jugador ha ganado el juego o no

describe('compruebaPuntuacion', () => {


    it('Comprueba si un jugador ha ganado el juego', () => {

        beforeEach(() => {
            vi.spyOn(model.partida, 'puntuacionUsuario', 'get').mockReturnValue(7.5);
        })

        // Arrange
        const estadoEsperado = "HAS GANADO";

        // Act
        const resultado: Estado = compruebaPuntuacion();

        // Assert
        expect(estadoEsperado).toBe(resultado);

    })

})