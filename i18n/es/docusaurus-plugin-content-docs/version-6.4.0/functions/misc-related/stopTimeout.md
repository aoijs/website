---
title: '$stopTimeout'
description: '$stopTimeout finalizará/detener un tiempo de espera creado por $setTimeout.'
id: stopTimeout
---

`$stopTimeout` eliminará un ticket creado por `$setTimeout`.

## Uso

```php
$stopTimeout[id]
```

## Parámetros

| Campo | Tipo   | Parámetros         | Requerido |
| ----- | ------ | ------------------ |:---------:|
| id    | string | Tiempo agotado ID. | verdadera |

## Ejemplo(s)

Esto finalizará un tiempo de espera de `$setTimeout`:

```javascript
bot.command({
    name: "stopTimeout",
    code: `
    $stopTimeout[10029]
    `
});
```