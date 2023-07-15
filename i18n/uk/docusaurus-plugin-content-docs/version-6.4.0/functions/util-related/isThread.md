---
title: '$isThread'
description: '$isThread will check if the given channel is a thread or not.'
id: isThread
---

`$isThread` will check if the given channel is a thread or not.

## Використання

```php
$isThread[channelID?]
```

## Параметри

| Поле       | Тип     | Опис                                      | Обов'язковий |
| ---------- | ------- | ----------------------------------------- |:------------:|
| channelID? | integer | ID of the channel that you want to check. |      ні      |

## Приклад(и)

This will return either `true` or `false` depending on if you're executing the command in a thread:

```javascript
bot.command({
    name: 'isThread',
    code: `
  $isThread[$channelID]
  `
});
```