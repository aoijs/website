---
title: $minute
description: '$minute вернет текущую минуту в CST.'
id: minute
---

`$minute` вернет текущую минуту в CST.

## Использование

```php
$minute
```

## Пример(ы)

Это возвращает текущую минуту:

```javascript
bot.command({
    name: "minute",
    code: `
    $minute
    `
});
```

Вы можете изменить часовой пояс используя `$timezone`:

```javascript
bot.command({
    name: "minute",
    code: `
    $minute 
    $timezone[America/New_York]
    ` // возвращает текущую минуту в Нью-Йорке
});
```