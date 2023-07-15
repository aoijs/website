---
title: '$isDM'
description: '$isDM will check if the given channel is a DM or not.'
id: isDM
---

`$isDM` will check if the given channel is a DM or not.

## Використання

```php
$isDM[channelID?]
```

## Параметри

| Поле       | Тип     | Опис                                      | Обов'язковий |
| ---------- | ------- | ----------------------------------------- |:------------:|
| channelID? | integer | ID of the channel that you want to check. |      ні      |

## Приклад(и)

This will return either `true` or `false` depending on if you're executing the command in a DM or not:

```javascript
bot.command({
    name: 'isDM',
    code: `
  $isDM[$channelID]
  `
});
```