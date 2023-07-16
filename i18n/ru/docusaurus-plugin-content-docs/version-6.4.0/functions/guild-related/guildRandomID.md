---
title: $guildRandomID
description: '$guildRandomID вернет случайный ID гильдии.'
id: guildRandomID
---

`$guildRandomID` возвращает случайный ID гильдии.

## Использование

```php
$guildRandomID
```

## Пример(ы)

Это вернет случайную гильдию, если ваш бот является участником:

```javascript
bot.command({
    name: 'guildRandomID',
    code: `
  $guildRandomID
  `
});
```
