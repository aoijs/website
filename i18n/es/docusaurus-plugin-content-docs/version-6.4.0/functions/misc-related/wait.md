---
title: '$wait'
description: '$wait retrasará las funciones de ejecución durante un tiempo determinado.'
id: wait
---

`$wait` retrasará las funciones de ejecución durante un tiempo determinado.

## Uso

```php
$wait[tiempo]
```

## Parámetros

| Campo  | Tipo           | Parámetros                           | Requerido |
| ------ | -------------- | ------------------------------------ |:---------:|
| tiempo | cadena, número | Cuánto tiempo retrasar la ejecución. | verdadera |

## Ejemplo(s)

Esto enviará un incrustado retrasado:

```javascript
bot.command({
    name: "wait",
    code: `
    $description[Hola!]
    $wait[5s]
    $sendMessage[¿Oh, qué es eso?]
    `
});
```