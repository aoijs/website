---
title: '$log'
description: '$log will log a given message in your bot''s console.'
id: log
---

`$log` will log a given message in your bot's console.

## Використання

```php
$log[content]
```

## Параметри

| Поле    | Тип            | Опис                           | Обов'язковий |
| ------- | -------------- | ------------------------------ |:------------:|
| content | string, number | Content of the message to log. |     так      |

## Приклад(и)

This will log "Aoi.js is great!" in your bot's console:

```javascript
bot.command({
    name: "log",
    code: `
    $log[Aoi.js is great!]
    `
});
```