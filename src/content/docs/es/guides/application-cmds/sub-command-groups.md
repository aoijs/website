---
title: Grupos de Subcomandos
description: Esta página cubre todo sobre los Grupos de Subcomandos de Comandos de Aplicación.
id: interaction-subcommandgroups
og_image: https://raw.githubusercontent.com/aoijs/website/main/src/images/og/3.png
sidebar:
  order: 3
---

<!-- omit from toc -->
## Tabla de Contenidos

- [Grupos de Subcomandos](#grupos-de-subcomandos)
- [Creación de Comandos de Aplicación](#creación-de-comandos-de-aplicación)
  - [Ejemplos de creación de Comandos de Aplicación con grupos de subcomandos](#ejemplos-de-creación-de-comandos-de-aplicación-con-grupos-de-subcomandos)
- [Responder a Subcomandos/Grupos](#responder-a-subcomandosgrupos)

---

## Grupos de Subcomandos

Los subcomandos forman parte de los comandos de barra inclinada y se utilizan para agregar, como su nombre sugiere, subcomandos al comando de barra inclinada regular. Esto no solo "bypass" el límite de comandos de barra inclinada, sino que también te permite estructurar adecuadamente tus comandos de aplicación.

## Creación de Comandos de Aplicación

```js
$createApplicationCommand[guildID/global;name;description;defaultPermission(true/false);type(slash/user/message);allowDm;options?]
```

| Campo             | Tipo                                                                                                                                                                                                 | Descripción                                                                                                    | Requerido |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | :------: |
| guildID/global    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)  | El tipo de comando de aplicación, ya sea para cada servidor (global) o para un servidor específico (guildID). |   true   |
| name              | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | El nombre real del comando de barra inclinada que será visible para el usuario.                                  |   true   |
| description       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | La descripción del comando de barra inclinada que será visible para el usuario.                                  |   true   |
| defaultPermission | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Si el comando de aplicación debe sincronizarse con los permisos por defecto.                                     |   true   |
| type              | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | El tipo de comando de aplicación (explicado a continuación)                                                        |   true   |
| options?          | [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)                                                                                                    | Opciones de comandos de barra inclinada.                                                                         |   true   |

### Ejemplos de creación de Comandos de Aplicación con grupos de subcomandos

La documentación oficial se puede encontrar [aquí](https://discord.com/developers/docs/interactions/application-commands#subcommands-and-subcommand-groups)

```js
client.command({
  name: "createApplicationCommand",
  code: `
  $createApplicationCommand[guildID/global;moderacion;Comandos de Moderación;true;true;slash;[{
            "name": "usuario",
            "description": "Obtener o editar permisos para un usuario",
            "type": 2, // 2 es el tipo SUB_COMMAND_GROUP
            "options": [
                {
                    "name": "obtener",
                    "description": "Obtener permisos para un usuario",
                    "type": 1 // 1 es el tipo SUB_COMMAND
                },
                {
                    "name": "editar",
                    "description": "Editar permisos para un usuario",
                    "type": 1
                }
            ]
        },
        {
            "name": "rol",
            "description": "Obtener o editar permisos para un rol",
            "type": 2,
            "options": [
                {
                    "name": "obtener",
                    "description": "Obtener permisos para un rol",
                    "type": 1
                },
                {
                    "name": "editar",
                    "description": "Editar permisos para un rol",
                    "type": 1
                }
            ]
        }
    ]
}]`
});
```

## Responder a Subcomandos/Grupos

Para interactuar con ellos, necesitamos filtrar las diferentes opciones de los comandos de barra inclinada "moderacion". Podemos hacerlo con `$onlyIf` y algunas funciones avanzadas.

```js
$onlyIf[$interactionData[options._subcommand]==nombre_subcomando;]
```

`$interactionData` contiene información sobre la interacción, y usamos `$onlyIf` para verificar si el subcomando coincide con el nuestro.

Esto básicamente verificará el nombre del subcomando y, si no coincide, bloqueará el comando, así que para nuestro caso se vería algo así..