---
title: $messageWebhookID
description: '$messageWebhookID вернёт ID вебхука, который отправил данное сообщение.'
id: messageWebhookID
---

`$messageWebhookID` вернет идентификатор вебхука, который отправил данное сообщение.

## Использование

```php
$messageWebhookID[messageID?;channelID?]
```

## Параметры

| Название      | Nbg   | Описание                                     | Нужно |
| ------------- | ----- | -------------------------------------------- |:-----:|
| ID сообщения? | целое | ID сообщения.                                | false |
| ID канала?    | целое | ID сообщения, в котором находится сообщение. | false |

## Пример(ы)

Это вернет ID вебхука, не забудьте заменить "messageID" идентификатором сообщения, отправленным с вебхука:

```javascript
bot.command({
    name: 'messageWebhookID',
    code: `
  $messageWebhookID[messageID;$channelID] //заменить messageID
  `
});
```
