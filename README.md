# BootcampJS - Módulo 6

He separado el proyecto en cuatro archivos distintos:

**main** => En el cual llamo al objeto iniciarPartida.

**model** => Aquí he creado una interface de Partida y luego defino el modelo, dándole los valores correspondientes a las propiedades.

**motor** => He importado partida de model y me he llevado de main la función dameCarta

**ui** => El resto del código que había en main, lo he llevado a ui porque tiraba del HTML en algún punto.

# Objeto partida

En **ui** he creado iniciarPartida:

    export const iniciarPartida = () => {
        partida.puntuacionUsuario = 0;
        elementoImagenCarta.src = '/src/images/back.png';
        partida.cartasMostradas = [];
    }

Lo he importado en **main** y lo he llamado con document.addEventListener para poder iniciar una Partida:

    document.addEventListener('DOMContentLoaded', iniciarPartida);

# Extra

He modificado el código, arreglando lo que me faltaba del módulo anterior, como es evitar null y undefined o que saliese el mensaje de _¡Lo has clavado! ¡Enhorabuena!_.
