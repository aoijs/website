---
title: '$awaitMessages'
description: '$awaitMessages responderá una vez que el mensaje dado haya sido enviado por el usuario dado.'
id: awaitMessages
---

`$awaitMessages` responderá una vez que el mensaje dado haya sido enviado por el usuario dado.

## Uso

```php
$awaitMessages[CanalID;filtro de usuario;tiempo;respuestas;comandos;mensaje de error?;esperar datos?;mensaje directo?]
```

## Parámetros

| Campo              | Tipo   | Descripción                                                                                                         | Requerido |
| ------------------ | ------ | ------------------------------------------------------------------------------------------------------------------- |:---------:|
| canalID            | entero | ID del canal.                                                                                                       | verdadero |
| filtro de usuario  | entero | Filtro de usuario <br /> 1. **todos ** <br /> 2. **ID de usuario específico** - cualquier ID de usuario | verdadero |
| tiempo             | cadena | Cuánto tiempo durará el comando / cuándo caduca el comando.                                                         | verdadero |
| respuestas         | cadena | A lo que responderá el bot, múltiples palabras pueden separarse con una coma (o usar "todo" para responder a todo)  | verdadero |
| comandos           | cadena | Comandos que serán ejecutados, múltiples comandos pueden ser separados con una coma.                                | verdadero |
| ¿Mensaje de error? | cadena | Mensaje de error cuando caduca el comando.                                                                          |   falso   |
| esperar datos?     | cadena | Datos esperados.                                                                                                    |   falso   |
| mensaje directo?   | entero | ID de usuario de donde se puede ejecutar el comando.                                                                |   falso   |

## Ejemplo(s)

Esto responderá a cualquier mensaje que envíe después de ejecutar el comando:

```js
bot.command({
    name: "awaitMessages",
    code: `
  $awaitMessages[$channelID;$authorID;15s;everything;awaitedcommandexample;Oh? ¿No quieres hablar conmigo...?]
 
  ¿Cómo te llamas?

  `
    // Asegúrese de que el nombre del comando esperado esté TODO en minúsculas o, de lo contrario, no funcionará.
});

bot.awaitedCommand({
    name: "awaitedcommandexample",
    code: `
  Encantado de conocerte, $message!
  `
});
```
