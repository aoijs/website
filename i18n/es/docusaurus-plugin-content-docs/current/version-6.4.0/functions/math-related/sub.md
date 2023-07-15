---
title: '$sub'
description: '$sub will substract two given numbers.'
id: sub
---

`$sub` will substract two given numbers.

## Modo de uso

```php
$sub[num;num]
```

## Parámetros

| Campo | Tipo   | Parámetros                           | Requerido |
| ----- | ------ | ------------------------------------ |:---------:|
| num   | número | Numbers to perform calculation with. | verdadera |

## Ejemplo(s)

This will return `65` as `70-5` equals `65`:

```javascript
bot.command({
    name: 'sub',
    code: `
  $sub[70;5]
  `
});
```