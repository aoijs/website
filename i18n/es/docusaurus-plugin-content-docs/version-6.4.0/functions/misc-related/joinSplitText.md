---
title: '$joinSplitText'
description: '$joinSplitText se unirá a todos los elementos separados por un separador determinado.'
id: joinSplitText
---

`$joinSplitText` se unirá a todos los elementos separados por un separador determinado.

## Uso

```php
$joinSplitText[sep?]
```

## Parámetros

| Campo | Tipo   | Parámetros                                       | Requerido |
| ----- | ------ | ------------------------------------------------ |:---------:|
| sep?  | entero | El separador para separar los valores devueltos. |   falso   |

## Ejemplo(s)

Esto se unirá a todos los elementos de texto divididos con una coma:

```javascript
bot.command({
    name: "joinSplitText",
    code: `
    $joinSplitText[, ]
    $textSplit[Hello:Bye:Leref;:]
    `
});
```