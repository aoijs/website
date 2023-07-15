---
title: '$killClient'
description: '$killClient will forcefully shutdown your bot.'
id: killClient
---

`$killClient` will forcefully shutdown your bot.

## Використання

```php
$killClient
```

## Приклад(и)

This will forcefully shutdown your bot:

```javascript
bot.command({
    name: "killClient",
    code: `
    $killClient
    `
});
```