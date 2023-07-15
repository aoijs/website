---
title: '$log'
description: '$log will log a given message in your bot''s console.'
id: log
---

`$log` will log a given message in your bot's console.

## Modo de uso

```php
$log[content]
```

## Parámetros

| Campo     | Tipo           | Parámetros                     | Requerido |
| --------- | -------------- | ------------------------------ |:---------:|
| contenido | cadena, número | Content of the message to log. | verdadera |

## Ejemplo(s)

This will log "Aoi.js is great!" in your bot's console:

```javascript
bot.command({
    name: "log",
    code: `
    $log[Aoi.js is great!]
    `
});
```