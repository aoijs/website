---
title: $hour
description: '$hour вернет текущий час в CST.'
id: hour
---

`$hour` вернет текущий час в CST.

## Использование

```php
$hour
```

## Пример(ы)

Текущие часы:

```javascript
bot.command({
    name: "hour",
    code: `
    $hour
    `
});
```

Вы можете изменить часовой пояс используя `$timezone`:

```javascript
bot.command({
    name: "hour",
    code: `
    $hour 
    $timezone[America/New_York]
    ` // возвращает текущий час в Нью-Йорке
});
```