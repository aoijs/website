---
title: '$repeatMessage'
description: '$repeatMessage will repeat the given text for given amount of times.'
id: repeatMessage
---

`$repeatMessage` will repeat the given text for given amount of times.

## Використання

```php
$repeatMessage[time;text]
```

## Параметри

| Поле | Тип     | Опис                                        | Обов'язковий |
| ---- | ------- | ------------------------------------------- |:------------:|
| time | integer | The amount of times the text gets repeated. |     так      |
| text | рядок   | The text that will get repeated.            |     так      |

## Приклад(и)

This will return `Hello` twenty times:

```javascript
bot.command({
    name: 'repeatMessage',
    code: `
  $repeatMessage[20;Hello ]
  `
});
```
