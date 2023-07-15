---
title: '$awaitCmdReactions'
description: '$awaitCmdReactions responderá cuando un usuario reaccione al mensaje de comando inicial con un emoji específico.'
id: awaitCmdReactions
---

`$awaitCmdReactions` responderá cuando un usuario reaccione al mensaje de comando inicial con un emoji específico.

## Uso

```php
$awaitCmdReactions[filtro de usuario;tiempo;reacciones;comandos;mensaje de error?;esperar datos?]
```

## Parámetros

| Campo             | Tipo   | Descripción                                                                                                                  | Requerido |
| ----------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |:---------:|
| filtro de usuario | cadena | A lo que el bot responderá <br /> 1. **todos ** <br /> 2. **ID de usuario específico** - cualquier ID de usuario | verdadero |
| tiempo            | cadena | Cuánto tiempo durará el comando / cuándo caduca el comando.                                                                  | verdadero |
| reacciones        | cadena | Reacciones que escuchará el bot, puede separar varios emojis con una coma ( `,` )                                            | verdadero |
| comandos          | cadena | Comandos que se ejecutarán, puedes separar múltiples emojis con una coma (`,`)                                               | verdadero |
| mensaje de error? | cadena | Mensaje de error cuando caduca el comando.                                                                                   |   falso   |
| esperar datos?    | cadena | Datos esperados.                                                                                                             |   falso   |

**Asegúrate de tener `GuildMessageReactions` como intención en tu archivo principal. **

## Ejemplo(s)

Esto le responderá cuando reaccione con el emoji "❤️" a su mensaje de comando inicial:

```js
bot.command({
    name: "awaitCmdReaction",
    code: `
  ¡Reacciona con "❤️" para una sorpresa! 
  $awaitCmdReactions[$authorID;10s;❤️;awaitedCommandExample;Ups! No reaccionaste a tiempo..]

  bot.awaitedCommand({
    name: "awaitedCommandExample",
    code: `
  Genial, reaccionaste con ❤️.
  });
```