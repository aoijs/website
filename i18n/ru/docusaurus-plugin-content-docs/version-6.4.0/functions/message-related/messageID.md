---
title: $messageID
description: '$messageID вернет ID сообщения.'
id: messageID
---

`$messageID` вернет идентификатор сообщения.

## Использование

```php
$messageID
```

## Пример(ы)

Это вернёт ID сообщения сообщения, с которым вы выполнили команду:

```javascript
bot.command({
    имя: 'messageID',
    код: `
  ID сообщения вашего сообщения, которое вы только что отправили: "$messageID"
  `
});
```
