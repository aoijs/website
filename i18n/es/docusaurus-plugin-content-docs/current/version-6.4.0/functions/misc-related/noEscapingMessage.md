---
title: '$noEscapingMessage'
description: '$noEscapingMessage will return the non escaped message.'
id: noEscapingMessage
---

`$noEscapingMessage` will return the non escaped message.

## Modo de uso

```php
$noEscapingMessage[args]
```

## Parámetros

| Campo | Tipo   | Parámetros        | Requerido |
| ----- | ------ | ----------------- |:---------:|
| args? | string | Message position. |    no     |

## Ejemplo(s)

```javascript
bot.command({
    name: "noEscapingMessage",
    code: `
    $noEscapingMessage[1]
    `
});
```