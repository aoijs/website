---
title: '$onlyNSFW'
description: '$onlyNSFW will check if the command was executed in a NSFW channel and return a error message if not.'
id: onlyNSFW
---

`$onlyNSFW` will check if the command was executed in a NSFW channel and return a error message if not.

## Modo de uso

```php
$onlyNSFW[error?]
```

## Parámetros

| Campo | Tipo   | Parámetros                                                           | Requerido |
| ----- | ------ | -------------------------------------------------------------------- |:---------:|
| error | string | Error to return when the command was not executed in a NSFW channel. | verdadera |

## Ejemplo(s)

This will limit the command only to NSFW channels:

```javascript
bot.command({
    name: "onlyNSFW",
    code: `
    Ok.
    $onlyNSFW[You can't use that command here!]
    `
});
```