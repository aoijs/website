---
title: Subcomandos
description: Esta página cubre todo sobre los Subcomandos de Comandos de Aplicación.
id: interaction-subcommands
og_image: https://raw.githubusercontent.com/aoijs/website/main/src/images/og/3.png
sidebar:
  order: 2
---

<!-- omit from toc -->
## Tabla de Contenidos

- [Subcomandos](#subcomandos)
- [Creación de Comandos de Aplicación](#creación-de-comandos-de-aplicación)
  - [Ejemplos de creación de Comandos de Aplicación con subcomandos](#ejemplos-de-creación-de-comandos-de-aplicación-con-subcomandos)
    - [Creación de Subcomandos con opciones](#creación-de-subcomandos-con-opciones)
- [Responder a Subcomandos](#responder-a-subcomandos)

---

## Subcomandos

Los subcomandos forman parte de los comandos de barra inclinada y se utilizan para agregar, como su nombre sugiere, subcomandos al comando de barra inclinada regular. Esto no solo "bypass" el límite de comandos de barra inclinada, sino que también te permite estructurar adecuadamente tus comandos de aplicación.

## Creación de Comandos de Aplicación

```js
$createApplicationCommand[guildID/global;name;description;defaultPermission(true/false);type(slash/user/message);options?]
```

| Campo             | Tipo                                                                                                                                                                                                 | Descripción                                                                                                    | Requerido |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | :------: |
| guildID/global    | [string](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number) | El tipo de comando de aplicación, ya sea para cada servidor (global) o para un servidor específico (guildID). |   true   |
| name              | [string](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number) | El nombre real del comando de barra inclinada que será visible para el usuario.                                  |   true   |
| description       | [string](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number) | La descripción del comando de barra inclinada que será visible para el usuario.                                  |   true   |
| defaultPermission | [string](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Si el comando de aplicación debe sincronizarse con los permisos por defecto.                                     |   true   |
| type              | [string](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | El tipo de comando de aplicación (explicado a continuación)                                                        |   true   |
| options?          | [object](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object)                                                                                                    | Opciones de comandos de barra inclinada.                                                                         |   true   |

### Ejemplos de creación de Comandos de Aplicación con subcomandos

```js
client.command({
  name: "createApplicationCommand",
  code: `
  $createApplicationCommand[guildID/global;moderacion;¡Comandos de Moderación!;true;slash;[
{
  "name": "expulsar",
  "description": "¡Expulsa a alguien de tu servidor!",
  "type": 1 
},
{
  "name": "banear",
  "description": "¡Prohíbe a alguien de tu servidor!",
  "type": 1 
}
]]`
});
```

#### Creación de Subcomandos con opciones

Crear subcomandos con opciones o selecciones funciona básicamente de la misma manera que cualquier otro.

```js
client.command({
  name: "createApplicationCommand",
  code: `
  $createApplicationCommand[guildID/global;moderacion;¡Comandos de Moderación!;true;slash;[
  {
    name: "expulsar",
    description: "¡Expulsa a alguien de tu servidor!",
    type: 1,
    options: [
      {
        name: "usuario",
        description: "Menciona al usuario que deseas expulsar",
        required: true,
        type: 6,
      },
      {
        name: "razon",
        description: "Razón",
        required: true,
        type: 3,
      },
    ],
  },
  {
    name: "banear",
    description: "¡Prohíbe a alguien de tu servidor!",
    type: 1,
  },
];`
});
```

Eso añadiría, por ejemplo, dos opciones llamadas "usuario" y "razon", donde la razón es de tipo 3, cadena y el usuario de tipo 6, mención (usuario).

## Responder a Subcomandos

Para interactuar con ellos, necesitamos filtrar las diferentes opciones de los comandos de barra inclinada "moderacion". Podemos hacerlo con `$onlyIf` y algunas funciones avanzadas.

```js
$onlyIf[$interactionData[options._subcommand]==nombre_subcomando;]
```

`$interactionData` contiene información sobre la interacción, y usamos `$onlyIf` para verificar si el subcomando coincide con el nuestro.

Esto básicamente verificará el nombre del subcomando y, si no coincide, bloqueará el comando, así que para nuestro caso se vería algo así...

```js
module.exports = [
  {
    name: "moderacion",
    prototype: "slash",
    type: "interaction",
    code: `
    $interactionReply[Elegiste el subcomando **banear**.]
    $onlyIf[$interactionData[options._subcommand]==banear;]`
  },
  {
    name: "moderacion",
    prototype: "slash",
    type: "interaction",
    code: `
    $interactionReply[Elegiste el subcomando **expulsar**.]
    $onlyIf[$interactionData[options._subcommand]==expulsar;]`
  },
];
```
