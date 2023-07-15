---
title: '$messageType'
description: '$messageType will return the type of a given message.'
id: messageType
---

`$messageType` will return the type of a given message.

## Використання

```php
$messageType[messageID?;channelID?]
```

## Параметри

| Поле       | Тип     | Опис                                               | Обов'язковий |
| ---------- | ------- | -------------------------------------------------- |:------------:|
| messageID? | integer | ID of the message.                                 |      ні      |
| channelID? | integer | ID of the channel where the message is located in. |      ні      |

## Приклад(и)

This will return the message type of the message which executed the command:

```javascript
bot.command({
    name: 'messageType',
    code: `
  $messageType[$messageID;$channelID]
  `
});
```
