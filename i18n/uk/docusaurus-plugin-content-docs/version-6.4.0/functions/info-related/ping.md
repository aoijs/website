---
title: $ping
description: '$ping поверне запізнення бота.'
id: ping
---

`$ping` поверне запізнення бота.

## Використання

```php
$ping
```

## Приклад(и)

Це поверне затримку вашого бота в МС:

```javascript
bot.command({
    name: 'ping',
    код: `
  Мій пінг: $pingMS!
  `
});
```
