---
title: '$digitalFormat'
description: '$digitalFormat devolverá un formato digital de tiempo convertido desde ms.'
id: digitalFormat
---

`$digitalFormat` convertirá ms a tiempo legible con formato digital.

## Uso

```php
$digitalFormat[ms]
```

## Parámetros

| Campo | Tipo   | Parámetros                                  | Requerido |
| ----- | ------ | ------------------------------------------- |:---------:|
| ms    | número | Tiempo en milisegundos que desea convertir. | verdadera |

## Ejemplo(s)

Esto devolverá `00:04:00` como `240000ms` son cuatro minutos:

```javascript
bot.command({
    name: 'digitalFormat',
    code: `
  $digitalFormat[240000]
  `
});
```
