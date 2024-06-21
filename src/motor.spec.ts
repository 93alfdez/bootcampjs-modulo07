import { it, expect, describe } from 'vitest';

import { MENSAJE_CANGUELO, MENSAJE_CASI, MENSAJE_CONSERVADOR, MENSAJE_ENHORABUENA, MENSAJE_GAMEOVER, partida } from './model';
// import * as motor from './motor';
import { compruebaPuntuacion, actualizaValorCartaActual, actualizaPuntuacion } from './motor';


describe('motor', () => {

    // Comprobar si un jugador ha ganado el juego o no
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

    // Comprobar si el número es mayor que 7, suma 2 al resultado final
    describe('actualizaValorCartaActual', () => {
        it('Si el número es mayor de 7 le suma 2', () => {
            // Arrange
            const numeroGenerado = 8;
            // Act

            const resultado = actualizaValorCartaActual(8);
            const resultadoEsperado = numeroGenerado + 2;

            // Assert
            expect(resultado).toEqual(resultadoEsperado);

        })
    })



    // Comprobar el valor de una carta
    describe('actualizaPuntuacion', () => {
        it('Si la carta es menor o igual que 7 da su valor normal', () => {
            // Arrange
            partida.puntuacionUsuario = 0;
            partida.carta.valor = 6;

            // Act
            actualizaPuntuacion()

            // Assert
            expect(partida.puntuacionUsuario).toBe(6);

        })

        it('Si la carta es mayor que 10 la carta tiene un valor de 0.5', () => {
            // Arrange
            partida.puntuacionUsuario = 0;
            partida.carta.valor = 10;

            // Act
            actualizaPuntuacion()

            // Assert
            expect(partida.puntuacionUsuario).toBe(0.5);
        })
    })
})