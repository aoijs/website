---
title: '$clientID'
description: '$clientID will return the client''s Discord User ID.'
id: clientID
---

`$clientID` will return the client's Discord User ID.

## Використання

```php
$clientID
```

## Приклад(и)

This will return the client's ID:

```javascript
bot.command({
    name: 'clientID',
    code: `
  $clientID
  `
});
```