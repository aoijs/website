---
title: '$clientToken'
description: '$clientToken will return the client''s token.'
id: clientToken
---

`$clientToken` will return the client's token.

## प्रोयोग

```php
$clientToken
```

> ** ⚠ You should never share your Discord Bot Token with anyone.**

## उदाहरण

This will return the client's Token:

```javascript
bot.command({
    name: 'clientToken',
    code: `
  $clientToken
  `
});
```