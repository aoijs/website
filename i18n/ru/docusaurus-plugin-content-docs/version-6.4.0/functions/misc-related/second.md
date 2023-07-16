---
title: $second
description: '$second вернёт текущую секунду в CST.'
id: second
---

`$second` вернет текущую секунду в CST.

## Использование

```php
$second
```

## Пример(ы)

Это возвращает текущую секунду:

```javascript
bot.command({
    name: "second",
    code: `
    $second
    `
});
```

Вы можете изменить часовой пояс используя `$timezone`:

```javascript
bot.command({
    name: "second",
    code: `
    $second 
    $timezone[America/New_York]
    ` // возвращает текущую вторую в Нью-Йорке
});
```