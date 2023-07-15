---
title: '$multi'
description: '$multi operation / multiplication.'
id: multi
---

`$multi` will multiplicate given numbers.

## Modo de uso

```php
$multi[num;num]
```

## Parámetros

| Campo | Tipo   | Parámetros                    | Requerido |
| ----- | ------ | ----------------------------- |:---------:|
| num   | número | Numbers you want to multiply. | verdadera |

## Ejemplo(s)

This will return `72` as `8*9` equals that:

```javascript
bot.command({
    name: 'multi',
    code: `
  $multi[8;9]
  `
});
```
