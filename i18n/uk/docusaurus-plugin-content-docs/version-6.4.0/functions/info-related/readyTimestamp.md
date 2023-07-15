---
title: '$readyTimestamp'
description: '$readyTimestamp will return the timestamp of when the bot was ready.'
id: readyTimestamp
---

`$readyTimestamp` will return the timestamp of when the bot was ready.

## Використання

```php
$readyTimestamp
```

## Приклад(и)

This will return the last time your bot started/was ready:

```javascript
bot.command({
    name: 'readyTimestamp',
    code: `
  $readyTimestamp
  `
});
```
