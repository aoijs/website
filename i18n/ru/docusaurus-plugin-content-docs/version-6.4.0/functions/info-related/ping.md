---
title: $ping
description: '$ping вернет задержку бота.'
id: ping
---

`$ping` вернет задержку бота.

## Использование

```php
$ping
```

## Пример(ы)

Это возвратит задержку вашего бота в MS:

```javascript
bot.command({
    name: 'ping',
    code: `
  Мой пинг: $pingMS!
  «
});
```
