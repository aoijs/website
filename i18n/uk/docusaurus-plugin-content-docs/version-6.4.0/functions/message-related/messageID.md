---
title: $messageID
description: '$messageID поверне ID повідомлення.'
id: messageID
---

`$messageID` поверне ID повідомлення.

## Використання

```php
$messageID
```

## Приклад(и)

Це поверне ID повідомлення, з яким ви виконували команду:

```javascript
bot.command({
    name: 'ID повідомлення',
    код:`
  ID повідомлення повідомлення, яке ви щойно надіслали: "$messageID"
  `
});
```
