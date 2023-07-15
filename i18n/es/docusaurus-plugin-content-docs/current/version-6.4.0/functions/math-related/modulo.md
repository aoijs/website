---
title: '$modulo'
description: '$modulo operation / the remainder when dividing.'
id: modulo
---

`$modulo` operation / the remainder when dividing.

## Modo de uso

```php
$modulo[num;num]
```

## Parámetros

| Campo | Tipo   | Parámetros                           | Requerido |
| ----- | ------ | ------------------------------------ |:---------:|
| num   | número | Numbers to return the raimainder of. | verdadera |

## Ejemplo(s)

This will return `2` as it's the remainder of `5 % 3`:

```javascript
bot.command({
    name: 'modulo',
    code: `
  $modulo[5;3]
  `
});
```
