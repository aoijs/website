---
title: '$allEmojisCount'
description: '$allEmojisCount devolverá la cantidad de emojis de un tipo determinado.'
id: allEmojisCount
---

`$allEmojisCount` devolverá la cantidad de emojis de un tipo determinado.

## Uso

```php
$allEmojisCount[tipo?]
```

## Parámetros

| Campo | Tipo   | Descripción                                     | Requerido |
| ----- | ------ | ----------------------------------------------- | --------- |
| tipo? | string | Tipo del que desea que se devuelva la cantidad. | no        |

| Tipo de emoji   |          |
| --------------- | -------- |
| Emojis animados | animated |
| Emojis estables | normal   |

## Ejemplo(s)

Esto devolverá la cantidad de emojis en su servidor:

```javascript
bot.command({
    name: 'allEmojisCount',
    code: `
  $allEmojisCount
  `
});
```