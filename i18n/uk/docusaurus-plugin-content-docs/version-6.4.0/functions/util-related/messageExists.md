---
title: '$messageExists'
description: '$messageExists will check if a specific message exists.'
id: messageExists
---

`$messageExists` will check if a specific message exists.

## Використання

```php
$messageExists[messageID;channelID?]
```

## Параметри

| Поле       | Тип     | Опис                                        | Обов'язковий |
| ---------- | ------- | ------------------------------------------- | ------------ |
| messageID  | integer | the id of the message                       | так          |
| channelID? | integer | the channel id where the message is located | ні           |

## Приклад(и)

This will return `false` as the message doesn't exist in the given channel:

```javascript
bot.command({
    name: 'messageExists',
    code: `
  $messageExists[1058998634823299143;$channelID]
  `
});
```
