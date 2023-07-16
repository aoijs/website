---
title: '$log'
description: '$log registrará un mensaje dado en la consola de tu bot.'
id: log
---

`$log` registrará un mensaje determinado en la consola de su bot.

## Uso

```php
$log[content]
```

## Parámetros

| Campo     | Tipo           | Parámetros                         | Requerido |
| --------- | -------------- | ---------------------------------- |:---------:|
| contenido | cadena, número | Contenido del mensaje a registrar. | verdadera |

## Ejemplo(s)

Esto registrará "¡Aoi.js es genial!" en la consola de tu bot:

```javascript
bot.command({
    name: "log",
    code: `
    $log[Aoi.js is great!]
    `
});
```