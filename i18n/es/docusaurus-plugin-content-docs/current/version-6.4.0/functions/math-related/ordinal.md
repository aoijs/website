---
title: '$ordinal'
description: '$ordinal adds st, nd, rd, th to a number such as 1st, 2nd, 3rd, 4th.'
id: ordinal
---

`$ordinal` adds `st`, `nd`, `rd`, `th` to a number such as `1st`, `2nd`, `3rd`, `4th`.

## Modo de uso

```php
$ordinal[number]
```

## Parámetros

| Campo  | Tipo   | Parámetros                                          | Requerido |
| ------ | ------ | --------------------------------------------------- |:---------:|
| número | número | Number which will add `st`, `nd`, `rd`, `th` to it. | verdadera |

## Ejemplo(s)

```javascript
bot.command({
    name: 'ordinal',
    code: `
  $ordinal[12] -> Returns 12nd 
  $ordinal[50] -> Returns 50th
  $ordinal[11] -> Returns 11st
  $ordinal[88] -> Returns 88th
  `
});
```
