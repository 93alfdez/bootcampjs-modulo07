import { it, expect, describe, vi } from 'vitest';

import { MENSAJE_CANGUELO, MENSAJE_CASI, MENSAJE_CONSERVADOR, MENSAJE_ENHORABUENA, MENSAJE_GAMEOVER, partida } from './model';
import * as motor from './motor';
import { compruebaPuntuacion, actualizaValorCartaActual } from './motor';

// Comprobar si un jugador ha ganado el juego o no

describe('motor', () => {

    describe('compruebaPuntuacion', () => {
        it('Comprueba si un jugador ha obtenido una puntuación de 7.5', () => {
            // Arrange
            partida.puntuacionUsuario = 7.5;

            // Act
            compruebaPuntuacion();
            const resultadoEsperado = MENSAJE_ENHORABUENA;

            // Assert
            expect(resultadoEsperado).toBe(partida.mensaje);

        });

        it('Comprueba si un jugador ha obtenido una puntuación de más de 0.5 y menos de 4', () => {
            // Arrange
            partida.puntuacionUsuario = 3;

            // Act
            compruebaPuntuacion();
            const resultadoEsperado = MENSAJE_CONSERVADOR;

            // Assert
            expect(resultadoEsperado).toBe(partida.mensaje);

        });

        it('Comprueba si un jugador ha obtenido una puntuación de 5', () => {
            // Arrange
            partida.puntuacionUsuario = 5;

            // Act
            compruebaPuntuacion();
            const resultadoEsperado = MENSAJE_CANGUELO;

            // Assert
            expect(resultadoEsperado).toBe(partida.mensaje);

        });

        it('Comprueba si un jugador ha obtenido una puntuación entre 6 y 7', () => {
            // Arrange
            partida.puntuacionUsuario = 6.5;

            // Act
            compruebaPuntuacion();
            const resultadoEsperado = MENSAJE_CASI;

            // Assert
            expect(resultadoEsperado).toBe(partida.mensaje);

        });

        it('Comprueba si un jugador ha obtenido una puntuación mayor de 7.5', () => {
            // Arrange
            partida.puntuacionUsuario = 8;

            // Act
            compruebaPuntuacion();
            const resultadoEsperado = MENSAJE_GAMEOVER;

            // Assert
            expect(resultadoEsperado).toBe(partida.mensaje);

        });
    })

    describe('actualizaValorCartaActual', () => {
        it('Si el número es mayor de 7 le suma 2', () => {
            // Arrange
            const numeroGenerado = 8;
            vi.spyOn(motor, "generarNumeroAleatorio").mockReturnValue(numeroGenerado);

            // Act
            actualizaValorCartaActual(10);

            // Assert
            expect(partida.carta.valor).toBe(numeroGenerado);

        })
    })

})