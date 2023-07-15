---
title: '$numberSeparator'
description: '$numberSeparator will separate numbers and make them readable.'
id: numberSeparator
---

`$numberSeparator` will separate numbers and make them readable.

## Modo de uso

```php
$numberSeparator[num;sep?]
```

## Parámetros

| Campo | Tipo     | Parámetros                                                          | Requerido |
| ----- | -------- | ------------------------------------------------------------------- |:---------:|
| num   | número   | Number you want to separate.                                        | verdadero |
| sep?  | consulta | Separator which will be used to separate the numbers, default: `,`. |    no     |

## Ejemplo(s)

This will return `1,000,000`:

```javascript
bot.command({
    name: 'numberSeparator',
    code: `
  $numberSeparator[1000000;,]
  `
});
```
