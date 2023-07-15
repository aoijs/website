---
title: '$expandNumber'
description: '$expandNumber expandirá cualquier número dado.'
id: expandNumber
---

`$expandNumber` expandirá cualquier número dado.

## Modo de uso

```php
$expandNumber[númeroAbreviado]
```

## Parámetros

| Campo           | Tipo   | Parámetros                 | Requerido |
| --------------- | ------ | -------------------------- |:---------:|
| númeroAbreviado | string | Número que desea expandir. | verdadera |

## Ejemplo(s)

Esto devolverá `1300000`:

```javascript
bot.command({
    name: 'expandNumber',
    code: `
  $expandNumber[1.3m]`
});
```
