---
title: $mentionedChannels
description: '$mentionedChannels devolverá el ID de un canal recuperado de la mención.'
id: mentionedChannels
---

`$mentionedChannels` devolverá el ID de un canal recuperado de la mención.

## Uso

```php
$mentionedChannels[index;returnSelf?]
```

## Parámetros

| Campo         | Tipo    | Parámetros                                                                              | Requerido |
| ------------- | ------- | --------------------------------------------------------------------------------------- |:---------:|
| índice        | número  | El índice del argumento.                                                                | verdadero |
| ¿volver a Sí? | boolean | Devuelve el ID del canal donde el comando fue ejecutado cuando no se encontró el canal. |    no     |

## Ejemplo(s)

Esto devolverá el ID de la **primera** mención si intenta mencionar cualquier canal en este comando, o devolverá el ID del canal en el que se ejecutó el comando:

```javascript
bot.command({
    name: 'mentionedChannels',
    code: `
  $mentionedChannels[1;true]
  `
});
```
