---
title: '$clientToken'
description: '$clientToken devolverá el token del cliente.'
id: clientToken
---

`$clientToken` devolverá el token del cliente.

## Uso

```php
$clientToken
```

> ** ⚠ Nunca debes compartir tu Discord Bot Token con nadie.**

## Ejemplo(s)

Esto devolverá el Token del cliente:

```javascript
bot.command({
    name: 'clientToken',
    code: `
  $clientToken
  `
});
```