---
title: Comandos del Cliente
description: Esta guía cubrirá cómo empezar a crear comandos, cómo utilizar manejadores de comandos, cómo crear múltiples comandos en un solo archivo y cómo actualizar comandos sin reiniciar tu bot de Discord.
id: commands
og_image: https://raw.githubusercontent.com/aoijs/website/main/src/images/og/4.png
---

<!-- omit from toc -->
## Tabla de Contenidos
- [Creación de Comandos](#creación-de-comandos)
  - [Opciones de Comandos](#opciones-de-comandos)
    - [Comandos Base](#comandos-base)
    - [Comandos de Eventos](#comandos-de-eventos)
    - [Comandos de Interacción](#comandos-de-interacción)
    - [Comandos de Bucle](#comandos-de-bucle)
  - [Manejador de Comandos](#manejador-de-comandos)

---

Antes de empezar, cubramos lo básico.

- aoi.js lee de **abajo** hacia **arriba**, lo que significa que el código comienza desde abajo y avanza hacia arriba.

Un ejemplo de eso es el siguiente:

```js
client.command({
  name: "example",
  code: `
  $sendMessage[¡Adiós!]
  $sendMessage[¡Hola!]
  `
});
```

En este caso, el código enviará `¡Hola!` primero y luego `¡Adiós!`. Esto se aplica a todos los comandos dentro de aoi.js.

## Creación de Comandos

Crear comandos aporta funcionalidad a tu bot, esta estructura se utilizará para todos los comandos, incluidos los eventos. Los eventos se cubrirán más adelante.

La estructura es la siguiente, (si no estás utilizando un manejador de comandos):

```js
<cliente>.command({ ... });
```

`<cliente>` representa al AoiClient que definiste en tu archivo `index.js` en la parte superior.

Los comandos tienen una variedad de propiedades, que se cubrirán en la siguiente sección.

Por ahora, solo necesitas conocer `name` y `code`.

---

El `name` define el nombre del comando y también cómo ejecutarlo. Es decir, podrías usar `[prefijo]nombre` para ejecutar el comando.

```js
<cliente>.command({ 
  name: "ping" 
});
```

Esto no hace nada, por ahora. Es solo un comando llamado `ping`. Para darle funcionalidad, usamos la propiedad `code`.

La propiedad code define la **funcionalidad** del comando, su núcleo.

```js
<cliente>.command({ 
  name: "ping",
  code: `Mi ping es: $ping MS!`
});
```

Esto se ejecutaría al usar `[prefijo]ping` en tu servidor de Discord, y devolvería la latencia actual del bot.

### Opciones de Comandos

Hay una variedad de comandos, comandos de eventos, comandos base, comandos de interacción y muchos más.

#### Comandos Base

El comando base, también conocido como comando de prefijo, tiene algunas propiedades.

```js
<cliente>.command({ 
    name: string,
    aliases? : string,
    nonPrefixed? : boolean,
    executeAt? : string,
    code: string
});
```

Un ejemplo de uso de todas las propiedades sería el siguiente:

```js
<cliente>.command({ 
    name: "ping",
    aliases: ["pong"],
    nonPrefixed: false,
    executeAt: "both",
    code: `Mi ping es $ping MS!`
});
```

| OPCIÓN        | ENTRADA  | EXPLICACIÓN                                                                                            |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------ |
| `name`        | string   | Nombre del comando.                                                                                    |
| `aliases`     | string   | Alias, funciona de la misma manera que `name`.                                                        |
| `nonPrefixed` | boolean  | Configura tu comando como no prefijado, lo que significa que se puede ejecutar sin el prefijo real.  |
| `dmOnly`      | boolean  | Establece el comando para ser utilizable solo en gremios o mensajes directos.                         |
| `executeAt`   | string   | Define dónde puede ejecutarse. <br /> 1. **gremio** <br /> 2. **dm** <br /> 3. **groupDM** <br /> 4. **ambos** |
| `code`        | string   | Tu código de comando.                                                                                 |

#### Comandos de Eventos

Los comandos de eventos tienen la siguiente estructura:

```js
<cliente>.<evento>Command({
    name? : string,
    channel? : string,
    code: string,
})
```

`<cliente>` representa -una vez más- al AoiClient que definiste en tu archivo `index.js` en la parte superior.

`<evento>` representa el evento que deseas usar, por ejemplo, `onBanAdd` se convertiría en `<cliente>.banAddCommand()`. esto se aplica a todos los comandos.

Un ejemplo de uso de todas las propiedades sería el siguiente:

```js
<cliente>.banAddCommand({ 
    name: "Ejemplo de Comando de Evento",
    channel: "123456789012345", // **debe** ser un ID de canal válido
    code: `
    <@$authorID> acaba de ser baneado!
    `
});
```


| OPCIÓN    | ENTRADA  | EXPLICACIÓN                                                                |
| --------- | -------- | -------------------------------------------------------------------------- |
| `name`    | string   | Nombre del comando.                                                      |
| `type`    | string   | Define el tipo de comando, cualquier evento, por ejemplo: `interaction` o `loop`. |
| `channel` | string   | Dónde puede ir la salida.                                                |
| `code`    | string   | Tu código de comando.                                                     |

#### Comandos de Interacción

```js
<cliente>.interactionCommand({
    name: string,
    type: string,
    prototype: string,
    code: string,
});
```

| OPCIÓN      | ENTRADA  | EXPLICACIÓN                                                                                                                          |
| ----------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `name`      | string   | Nombre del comando.                                                                                                                  |
| `type`      | string   | Define el tipo de comando.                                                                                                           |
| `prototype` | string   | Define cómo se activará el comando. <br /> 1. **button** <br /> 2. **selectMenu** <br /> 4. **slash** <br /> 5. **modal**            |
| `code`      | string   | Tu código de comando.                                                                                                                |

#### Comandos de Bucle

```js
<cliente>.loopCommand({
    name: string,
    type: string,
    channel? : string,


    executeOnStartup? : boolean,
    every: number,
    code: string
});
```

| OPCIÓN             | ENTRADA   | EXPLICACIÓN                                                   |
| ------------------ | --------- | ------------------------------------------------------------- |
| `name`             | string    | Nombre del comando.                                           |
| `type`             | string    | Define el tipo de comando, cualquier evento, `interaction` o `loop`. |
| `channel`          | string    | Dónde puede ir la salida.                                      |
| `executeOnStartup` | boolean   | Si el comando se ejecutará después de que el bot se reinicie.  |
| `every`            | number    | Intervalo del comando de bucle.                                |
| `code`             | string    | Tu código de comando.                                          |

---

### Manejador de Comandos

También puedes mantener tu `index.js` - o como sea que se llame el archivo para ti - limpio y ordenado, utilizando manejadores de comandos.

Al usar manejadores de comandos, creas un archivo para cada comando en lugar de ponerlos todos en el mismo archivo.

```diff lang="js" title="index.js"
const { AoiClient } = require("aoi.js");

const client = new AoiClient({
  // nuestra configuración
});

+ client.loadCommands("./commands/", true); // Esto será tu carpeta de comandos, puedes darle el nombre que desees. El true habilita el registro, puedes deshabilitarlo reemplazando true con false.
```

Asegúrate de crear una carpeta de comandos en el directorio raíz, es decir, donde se encuentra tu archivo index.js.

---

Una vez hecho esto, comenzamos a crear archivos dentro de esa carpeta.

Estos archivos pueden tener el nombre que desees, sin embargo, debes agregar la sintaxis `.js` después del nombre para convertirlo en un archivo Javascript.

Vamos, una vez más, a crear un comando de ping. Es básicamente lo mismo, solo cambia una línea.

```diff lang="js" title="commands/index.js"
- <cliente>.command({
+ module.exports = ({
    name: "ping",
    code: `Mi ping es $ping MS!` // La función de ping devuelve el ping actual.
});
```

Asegúrate de crear una carpeta de comandos en el directorio raíz, es decir, donde se encuentra tu archivo index.js.

---

Una vez hecho esto, comenzamos a crear archivos dentro de esa carpeta.

Estos archivos pueden tener el nombre que desees, sin embargo, debes agregar la sintaxis `.js` después del nombre para convertirlo en un archivo Javascript.

Vamos, una vez más, a crear un comando de ping. Es básicamente lo mismo, solo cambia una línea.

```diff lang="js" title="commands/ping.js"
module.exports = ({
    name: "ping",
    code: `Mi ping es $ping MS!` // La función de ping devuelve el ping actual.
});
```

---

Entonces, veamos cómo agregar **múltiples** comandos al mismo archivo, ¡sí, múltiples!

Nuevamente, cambiamos prácticamente solo la primera y última línea.

```diff lang="js" title="commands/ping.js"
- module.exports = ({
+ module.exports = [{
    name: "ping",
    code: `Mi ping es $ping MS!` // La función de ping devuelve el ping actual.
- });
+ }, {
+   name: "uptime",
+   code: `Estoy en línea por $uptime!` // La función de uptime devuelve el tiempo de actividad actual en horas, minutos y segundos.
+ }];
```

Esto es básicamente un array pero con un poco de sabor extra.

Tu comando debería verse así al final,

```js title="commands/ping.js"
module.exports = [{
  name: "ping",
  code: `Mi ping es $ping MS!` // La función de ping devuelve el ping actual.
}, {
  name: "uptime",
  code: `Estoy en línea por $uptime!` // La función de uptime devuelve el tiempo de actividad actual en horas, minutos y segundos.
}];
```

