---
title: '$noEscapingMessage'
description: '$noEscapingMessage devolverá el mensaje no escapado.'
id: noEscapingMessage
---

`$noEscapingMessage` devolverá el mensaje no escapado.

## Uso

```php
$noEscapingMessage[args]
```

## Parámetros

| Campo  | Tipo   | Parámetros            | Requerido |
| ------ | ------ | --------------------- |:---------:|
| ¿args? | string | Posición del mensaje. |   falso   |

## Ejemplo(s)

```javascript
bot.command({
    name: "noEscapingMessage",
    code: `
    $noEscapingMessage[1]
    `
});
```