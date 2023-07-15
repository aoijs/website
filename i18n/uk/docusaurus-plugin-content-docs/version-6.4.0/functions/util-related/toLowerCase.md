---
title: '$toLowerCase'
description: '$toLowerCase will change the given text from uppercase to lowercase.'
id: toLowerCase
---

`$toLowerCase` will change the given text from uppercase to lowercase.

## Використання

```php
$toLowerCase[text]
```

## Параметри

| Поле | Тип   | Опис                             | Обов'язковий |
| ---- | ----- | -------------------------------- |:------------:|
| text | рядок | The text to change to lowercase. |     так      |

## Приклад(и)

This will everything given to lowercase, in this case it would return `aoi.js is great.`:

```javascript
bot.command({
    name: "toLowerCase",
    code: `
    $toLowerCase[AOI.JS IS GREAT.]
    `
});
```