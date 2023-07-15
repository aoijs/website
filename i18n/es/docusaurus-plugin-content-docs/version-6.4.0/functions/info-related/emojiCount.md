---
title: '$emojiCount'
description: '$emojiCount devolverá el recuento de emojis de un servidor.'
id: emojiCount
---

`$emojiCount` devolverá el recuento de emojis de un servidor.

## Modo de uso

```php
$emojiCount[servidorID?]
```

## Parámetros

| Campo       | Tipo    | Parámetros                                       | Requerido |
| ----------- | ------- | ------------------------------------------------ |:---------:|
| servidorID? | integer | Desde donde se contarán y devolverán los emojis. |    no     |

## Ejemplo(s)

Esto devolverá el recuento de emoji de su servidor:

```javascript
bot.command({
    name: 'emojiCount',
    code: `
  ¡Tienes $emojiCount emojis en tu servidor!
  `
});
```