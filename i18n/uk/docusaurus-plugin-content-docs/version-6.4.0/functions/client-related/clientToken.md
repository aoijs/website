---
title: '$clientToken'
description: '$clientToken will return the client''s token.'
id: clientToken
---

`$clientToken` will return the client's token.

## Використання

```php
$clientToken
```

> ** ⚠ You should never share your Discord Bot Token with anyone.**

## Приклад(и)

This will return the client's Token:

```javascript
bot.command({
    name: 'clientToken',
    code: `
  $clientToken
  `
});
```