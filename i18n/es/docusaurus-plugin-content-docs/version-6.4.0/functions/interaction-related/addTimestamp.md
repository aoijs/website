---
title: '$addTimestamp'
description: '$addTimestamp añadirá una marca de tiempo a un incrustado.'
id: addTimestamp
---

$addTimestamp añadirá una marca de tiempo a un incrustado.

## Modo de uso

```php
$addTimestamp[ms?]
```

## Parámetros

| Campo | Tipo    | Parámetros       | Requerido |
| ----- | ------- | ---------------- |:---------:|
| ms    | integer | Tiempo de Epoch. |    no     |

## Ejemplo(s)

Esto creará un embebido con marca de tiempo y descripción:

```javascript
bot.command({
    name: 'addTimestamp',
    code: `
  $description[Hola!]
  $addTimestamp
  `
});
```
