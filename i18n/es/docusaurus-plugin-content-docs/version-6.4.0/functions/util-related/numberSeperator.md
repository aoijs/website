---
title: $numberSeperator
description: '$numberSeparator separará los números y los hará legibles.'
id: numberSeperator
---

`$numberSeparator` separará los números y los hará legibles.

## Uso

```php
$numberSeparator[num;sep?]
```

## Parámetros

| Campo | Tipo     | Parámetros                                                             | Requerido |
| ----- | -------- | ---------------------------------------------------------------------- |:---------:|
| num   | número   | Número que desea separar.                                              | verdadero |
| sep?  | consulta | Separador que se utilizará para separar los números, por defecto: `,`. |    no     |

## Ejemplo(s)

Esto devolverá `1.000.000`:

```javascript
bot.command({
    name: 'numberSeparator',
    code: `
  $numberSeparator[1000000;,]
  `
});
```
