---
title: '$abbreviate'
description: '$abbreviate will allow you to abbreviate large numbers.'
id: abbreviate
---

`$abbreviate` will allow you to abbreviate large numbers.

## Modo de uso

```php
$abbreviate[num;dec?]
```

## Parámetros

| Campo | Tipo   | Parámetros                      | Requerido |
| ----- | ------ | ------------------------------- |:---------:|
| num   | entero | Number to abbreviate.           | verdadero |
| dec?  | entero | Decimal between the abbreviate. |    no     |

## Ejemplo(s)

This returns: `20k`

```javascript
bot.command({
    name: 'abbreviate',
    code: `
  $abbreviate[20000]
  `
});
```

This returns: `20.0k`

```javascript
bot.command({
    name: 'abbreviate',
    code: `
  $abbreviate[20000;1]
  `
});
```
