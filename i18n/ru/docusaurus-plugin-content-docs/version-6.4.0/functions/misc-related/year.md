---
title: $year
description: '$year вернет текущий год в CST.'
id: year
---

`$year` вернет текущий год в CST.

## Использование

```php
$year
```

## Пример(ы)

Текущий год будет возвращен:

```javascript
bot.command({
    name: "year",
    code: `
    $year
    `
});
```

Вы можете изменить часовой пояс используя `$timezone`:

```javascript
bot.command({
    name: "year",
    code: `
    $year 
    $timezone[America/New_York]
    ` // возвращает текущий год в Нью-Йорке
});
```