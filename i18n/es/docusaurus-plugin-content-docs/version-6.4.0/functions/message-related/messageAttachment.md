---
title: '$messageAttachment'
description: '$messageAttachment devolverá un archivo adjunto de mensajes dependiendo del índice dado.'
id: messageAttachment
---

`$messageAttachment` devolverá un mensaje adjunto dependiendo del índice dado.

## Uso

```php
$messageAttachment[indice?]
```

## Parámetros

| Campo   | Tipo   | Parámetros                                               | Requerido |
| ------- | ------ | -------------------------------------------------------- |:---------:|
| índice? | entero | El índice del archivo adjunto de mensajes será devuelto. |   falso   |

## Ejemplo(s)

Esto devolverá el archivo adjunto:

```javascript
bot.command({
    name: 'messageAttachment',
    code: `
Tenía el siguiente archivo adjunto en su mensaje: $messageAttachment
  `
});
```
