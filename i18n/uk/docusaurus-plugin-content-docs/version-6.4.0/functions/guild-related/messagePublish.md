---
title: '$messagePublish'
description: '$messagePublish will publish a message in an announcement channel.'
id: messagePublish
---

`$messagePublish` will publish a message in an announcement channel.

## Використання

```php
$messagePublish[messageID;channelID?]
```

## Параметри

| Поле       | Тип     | Опис                                                         | Обов'язковий |
| ---------- | ------- | ------------------------------------------------------------ |:------------:|
| messageID  | integer | The ID of the message which should be published.             |     так      |
| channelID? | integer | The ID of the channel where the given message is located in. |      ні      |

## Приклад(и)

This will publish a message ( will only work in announcement channels ):

```javascript
bot.command({
    name: 'messagePublish',
    code: `
  $messagePublish[$get[msgID];$channelID]
  $let[msgID;$sendMessage[Hello!;true]]
  `
});
```
