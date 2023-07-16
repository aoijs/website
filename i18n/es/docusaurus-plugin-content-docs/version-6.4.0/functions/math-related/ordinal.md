---
title: '$ordinal'
description: '$ordinal añade st, nd, rd, th a un número como 1st, 2nd, 3rd, 4th.'
id: ordinal
---

`$ordinal` añade `st`, `nd`, `rd`, `th` a un número como `1st`, `2nd`, `3rd`, `4th`.

## Uso

```php
$ordinal[número]
```

## Parámetros

| Campo  | Tipo   | Parámetros                                        | Requerido |
| ------ | ------ | ------------------------------------------------- |:---------:|
| número | número | Número que desea añadirle `st`, `nd`, `rd`, `th`. | verdadera |

## Ejemplo(s)

```javascript
bot.command({
    name: 'ordinal',
    code: `
  $ordinal[12] -> devuelve 12nd 
  $ordinal[50] -> devuelve 50th
  $ordinal[11] -> devuelve 11st
  $ordinal[88] -> devuelve 88th
  `
});
```
