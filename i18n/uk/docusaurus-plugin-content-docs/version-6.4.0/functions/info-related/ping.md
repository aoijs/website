---
title: '$ping'
description: '$ping will return the bot''s latency.'
id: ping
---

`$ping` will return the bot's latency.

## Використання

```php
$ping
```

## Приклад(и)

This will return your bot's latency in MS:

```javascript
bot.command({
    name: 'ping',
    code: `
  My ping is: $pingMS!
  `
});
```
