---
title: '$messageWebhookID'
description: '$messageWebhookID will return the ID of the webhook which sent the given message.'
id: messageWebhookID
---

`$messageWebhookID` will return the ID of the webhook which sent the given message.

## Використання

```php
$messageWebhookID[messageID?;channelID?]
```

## Параметри

| Поле       | Тип     | Опис                                               | Обов'язковий |
| ---------- | ------- | -------------------------------------------------- |:------------:|
| messageID? | integer | ID of the message.                                 |      ні      |
| channelID? | integer | ID of the message where the message is located in. |      ні      |

## Приклад(и)

This will return the ID of a webhook, make sure to replace "messageID" with an actual message ID sent from a webhook:

```javascript
bot.command({
    name: 'messageWebhookID',
    code: `
  $messageWebhookID[messageID;$channelID] //replace messageID
  `
});
```
