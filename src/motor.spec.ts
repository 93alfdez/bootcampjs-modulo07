import { beforeEach, it, expect, describe, vi } from 'vitest';

import { Estado } from './model';
import { compruebaPuntuacion } from './motor';
import * as model from './model';

// Comprobar si un jugador ha ganado el juego o no

describe('compruebaPuntuacion', () => {


    it('Comprueba si un jugador ha ganado el juego', () => {

        beforeEach(() => {
            vi.spyOn(model.partida, 'puntuacionUsuario', 'get').mockReturnValue(7.5);
        })

        // Arrange
        const puntuacion = "HAS_GANADO";

        // Act
        const resultado: Estado = "HAS_GANADO";

        // Assert
        expect(resultado).toBe(puntuacion);

    })

})