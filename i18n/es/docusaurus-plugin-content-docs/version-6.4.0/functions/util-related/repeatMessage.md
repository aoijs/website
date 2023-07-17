---
title: '$repeatMessage'
description: '$repeatMessage repetirá el texto dado por una cantidad de veces.'
id: repeatMessage
---

`$repeatMessage` repetirá el texto dado por una cantidad de veces.

## Uso

```php
$repeatMessage[time;text]
```

## Parámetros

| Campo  | Tipo     | Parámetros                                   | Requerido |
| ------ | -------- | -------------------------------------------- |:---------:|
| tiempo | entero   | La cantidad de veces que se repite el texto. | verdadero |
| text   | consulta | El texto que se repetirá.                    | verdadero |

## Ejemplo(s)

Esto devolverá `Hola` veinte veces:

```javascript
bot.command({
    name: 'repeatMessage',
    code: `
  $repeatMessage[20;Hello ]
  `
});
```
