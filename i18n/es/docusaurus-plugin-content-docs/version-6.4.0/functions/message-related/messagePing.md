---
title: '$messagePing'
description: '$messagePing devolverá la latencia del mensaje.'
id: messagePing
---

`$messagePing` devolverá la latencia del mensaje.

## Uso

```php
$messagePing
```

## Ejemplo(s)

Esto devolverá la latencia de una interacción:

```javascript
bot.command({
    name: 'messagePing',
    code: `
  $messagePing
  `
});
```
