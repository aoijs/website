---
title: '$stopTimeout'
description: '$stopTimeout will end/stop a timeout created by $setTimeout.'
id: stopTimeout
---

`$stopTimeout` will end/stop a timeout created by `$setTimeout`.

## Uso

```php
$stopTimeout[id]
```

## Parámetros

| Campo | Tipo   | Parámetros  | Requerido |
| ----- | ------ | ----------- |:---------:|
| id    | string | Timeout ID. | verdadera |

## Ejemplo(s)

This will end a `$setTimeout` timeout:

```javascript
bot.command({
    name: "stopTimeout",
    code: `
    $stopTimeout[10029]
    `
});
```