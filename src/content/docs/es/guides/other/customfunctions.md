---
title: Funciones Personalizadas
description: Esta guía cubre las funciones personalizadas, su uso y algunos ejemplos útiles.
id: funciones-personalizadas
og_image: https://raw.githubusercontent.com/aoijs/website/main/src/images/og/14.png
---

<!-- omitir del índice -->
### Tabla de Contenido

- [Empezando con Funciones Personalizadas](#empezando-con-funciones-personalizadas)
  - [Funciones Personalizadas de Aoi.js](#funciones-personalizadas-de-aoijs)
  - [Funciones Personalizadas de Discord.js](#funciones-personalizadas-de-discordjs)
- [Ejemplos de Funciones Personalizadas](#ejemplos-de-funciones-personalizadas)
  - [Ejemplos de Funciones Personalizadas de Aoi.js](#ejemplos-de-funciones-personalizadas-de-aoijs)
  - [Ejemplos de Funciones Personalizadas de Discord.js](#ejemplos-de-funciones-personalizadas-de-discordjs)

---

## Empezando con Funciones Personalizadas

:::tip[Usuarios Experimentados]
Ten en cuenta que esto probablemente solo sea útil para usuarios avanzados de aoi.js o usuarios con algún conocimiento de JavaScript.
:::

Para empezar, hay dos tipos de funciones personalizadas.

Funciones personalizadas de `aoi.js` y funciones personalizadas de `djs`.

Como puedes inferir por el nombre, las funciones personalizadas de `aoi.js` incluyen funciones de aoi.js, mientras que `djs` se refiere a `discord.js`, lo que significa que creará una función personalizada de discord.**js** utilizando funciones/sintaxis de discord.**js**.

### Funciones Personalizadas de Aoi.js

```js
client.functionManager.createFunction({
    name: "$funcion", // nombre de la función personalizada, puede ser cualquier cosa.
    params: [ "parámetro", ... ], // parámetros de la función, $funcion[parámetro;parámetro]
    type: "aoi.js", // tipo de función personalizada
    code: "..." // el código que se ejecutará
});
```

Ejemplo y uso bastante sencillos.

- Para devolver cualquier parámetro de `params: [...]`, puedes usar `{nombre}` (nombre representa el nombre del parámetro).

---

### Funciones Personalizadas de Discord.js

```js
client.functionManager.createFunction({
    name: "$funcion", // nombre de la función personalizada, puede ser cualquier cosa.
    type: "djs", // tipo de función personalizada
    code: ... // el código que se ejecutará
});
```

```js {10-13}
client.functionManager.createFunction({
  name: "$funcion",
  type: "djs",
  code: async d => { // obteniendo datos
    const data = d.util.aoiFunc(d);
    const [parámetro, ...] = data.inside.splits; // parámetros del comando

    ... // tu código

    data.result = ... // necesario para que la función funcione correctamente, establecerá la "salida" de la función
    return {
      code: d.util.setCode(data) // devolverá la salida de data.result
    };
  }
});
```

Puedes crear mensajes de error como los siguientes;

Para errores de mensaje:

```js
aoiError.fnError(d, tipo, datos, mensaje);
```

Para errores de consola:

```js
aoiError.consoleError(nombre, e);
```

| TIPO    | DEVOLUCIONES                                 |
| ------- | ------------------------------------------- |
| miembro | ID de Miembro Inválido Proporcionada En ...  |
| mensaje | ID de Mensaje Inválido Proporcionada En ...  |
| canal   | ID de Canal Inválido Proporcionada En ...    |
| usuario  | ID de Usuario Inválido Proporcionada En ...  |
| rol     | ID de Rol Inválido Proporcionada En ...      |
| servidor | ID de Servidor Inválido Proporcionada En ... |
| emoji   | ID de Emoji Inválido Proporcionada En ...     |
| opción  | ID de Opción Inválido Proporcionada En ...    |
| personalizado  | [mensaje personalizado] Inválido            |

```js
if (!parámetro)
  return d.aoiError.fnError(d, "personalizado", {}, "Mensaje de Error Personalizado");
// devolverá un mensaje de error cuando el parámetro "parámetro" no tenga argumentos.
```

## Ejemplos de Funciones Personalizadas

Puedes encontrar Ejemplos Avanzados de Funciones Personalizadas aquí, algunos son útiles y otros son más bien diversos.

### Ejemplos de Funciones Personalizadas de Aoi.js

En este ejemplo, estamos creando una función `$decir` simple, que agregará el usuario y el mensaje al texto proporcionado.

"**{usuario}** dice: **{mensaje}**" También desactivamos las menciones para evitar abusos.

```ts
$decir[IDdeUsuario?;mensaje]
```

```js
client.functionManager.createFunction({
  name: "$decir", // nuestro nombre de función
  params: ["IDdeUsuario", "mensaje"], // nuestros parámetros, para usarlos más tarde
  type: "aoi.js",
  code: ` 
    **$userTag[$replaceText[$replaceText[$checkCondition[{IDdeUsuario}==||{IDdeUsuario}==undefined];true;$authorID];false;{IDdeUsuario}]]** dice: **{mensaje}**
    $disableMentionType[everyone]
  `
});
```

### Ejemplos de Funciones Personalizadas de Discord.js

En este ejemplo, crearemos una función personalizada que envía una imagen como adjunto. El uso es el siguiente:

```ts
$enviarImagen[URL];
```

```js
client.functionManager.createFunction({
  name: "$enviarImagen", // nuestro nombre de función
  type: "djs", // nota cómo no necesitamos ningún parámetro, eso es magia de JavaScript
  code: async (d) => {
    const data = d.util.aoiFunc(d);
    const [URL] = data.inside.splits; // nuestro parámetro de la función

    let imagen = URL;
    const a = await d.message.channel.send({
      // enviar el adjunto en el canal actual
      files: [
        {
          attachment: imagen, // establecer la URL dada como adjunto
        },
      ],
    });

    data.result = a; // establecer el "mensaje" como resultado, para que aoi.js lo reconozca
    return {
      code: d.util.setCode(data),
    };
  },
});
```