---
title: '$authorID'
description: '$authorID devolverá el ID de usuario de quien ejecutó el comando.'
id: authorID
---

`$authorID` devolverá el ID de usuario de quien ejecutó el comando.

## Uso

```php
$authorID
```

## Ejemplo(s)

Esto devolverá tu ID de usuario:

```javascript
bot.command({
    name: 'authorID',
    code: `
  $authorID
  `
});
```