---
title: '$awaitMessageReactions'
description: '$awaitMessageReactions responderá cuando un usuario reaccione con un emoji específico.'
id: awaitMessageReactions
---

`$awaitMessageReactions` responderá cuando un usuario reaccione con un emoji específico.

## Uso

```php
$awaitMessageReactions[Canal ID;ID de mensaje;filtro de usuario
;tiempo;reacciones;comandos;mensaje de error?;esperar datos?]
```

## Parámetros

| Campo              | Tipo   | Descripción                                                                                                                  | Requerido |
| ------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------- |:---------:|
| canalID            | entero | ID del canal.                                                                                                                | verdadero |
| ID de mensaje      | entero | Mensaje ID.                                                                                                                  | verdadero |
| filtro de usuario  | cadena | A lo que el bot responderá <br /> 1. **todos ** <br /> 2. **ID de usuario específico** - cualquier ID de usuario | verdadero |
| tiempo             | cadena | Cuánto tiempo durará el comando / cuándo caduca el comando.                                                                  | verdadero |
| reacciones         | cadena | Reacciones, puedes añadir múltiples separándolos con comas ( `,`)                                                            | verdadero |
| comandos           | cadena | Comandos que se ejecutarán, puedes separar múltiples emojis con una coma (`,`)                                               | verdadero |
| ¿Mensaje de error? | cadena | Mensaje de error cuando caduca el comando.                                                                                   |   falso   |
| esperar datos?     | cadena | Datos esperados.                                                                                                             |   falso   |

**Asegúrate de tener `GuildMessageReactions` como intención en tu archivo principal. **

## Ejemplo(s)

Esto le responderá cuando reaccione con el emoji "❤️" al mensaje del bot:

```js
bot.command({
    name: "awaitMessageReactions",
    code: `
¡Reacciona con "❤️" para una sorpresa!
 
  $awaitMessageReactions[$channelID;$messageID;$authorID;10s;❤️;awaitedcommandexample;Ups!
 No reaccionaste a tiempo..]

  `
});

bot.awaitedCommand({
    name: "awaitedcommandexample",
    code: `
Bonito, reaccionaste con ❤️.
  `
});
```
