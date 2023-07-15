---
title: '$addTimestamp'
description: '$addTimestamp will add a timestamp to an embed.'
id: addTimestamp
---

`$addTimestamp` will add a timestamp to an embed.

## Використання

```php
$addTimestamp[ms?]
```

## Параметри

| Поле | Тип     | Опис        | Обов'язковий |
| ---- | ------- | ----------- |:------------:|
| ms   | integer | Epoch Time. |      ні      |

## Приклад(и)

This will create a embed with timestamp and description:

```javascript
bot.command({
    name: 'addTimestamp',
    code: `
  $description[Hello!]
  $addTimestamp
  `
});
```
