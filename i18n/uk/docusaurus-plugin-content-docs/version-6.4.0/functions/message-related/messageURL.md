---
title: '$messageURL'
description: '$messageURL will return the URL of a given message.'
id: messageURL
---

`$messageURL` will return the URL of a given message.

## Використання

```php
$messageURL[messageID?;channelID?]
```

## Параметри

| Поле       | Тип     | Опис                                               | Обов'язковий |
| ---------- | ------- | -------------------------------------------------- |:------------:|
| messageID? | integer | ID of the message.                                 |      ні      |
| channelID? | integer | ID of the message where the message is located in. |      ні      |

## Приклад(и)

This will return the message URL of the message which executed the command:

```javascript
bot.command({
    name: 'messageURL',
    code: `
  $messageURL[$messageID;$channelID]
  `
});
```
