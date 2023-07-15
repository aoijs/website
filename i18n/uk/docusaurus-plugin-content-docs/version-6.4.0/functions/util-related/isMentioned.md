---
title: '$isMentioned'
description: '$isMentioned checks if the query contains a mention.'
id: isMentioned
---

`$isMentioned` checks if the query contains a mention.

## Використання

```php
$isMentioned[query]
```

## Параметри

| Поле  | Тип   | Опис                                                          | Обов'язковий |
| ----- | ----- | ------------------------------------------------------------- |:------------:|
| запит | рядок | Where you want to check if a user/role/channel was mentioned. |     так      |

## Приклад(и)

This will return `true` as you were mentioned within the message:

```javascript
bot.command({
    name: 'isMentioned',
    code: `
  $isMentioned[<@$authorID>]
  `
});
```
