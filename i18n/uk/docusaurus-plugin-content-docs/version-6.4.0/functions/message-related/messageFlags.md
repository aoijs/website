---
title: '$messageFlags'
description: '$messageFlags will return a message''s flags.'
id: messageFlags
---

`$messageFlags` will return a message's flags.

## Використання

```php
$messageFlags[messageID;sep?;channelID?]
```

## Параметри

| Поле       | Тип     | Опис                                               | Обов'язковий |
| ---------- | ------- | -------------------------------------------------- |:------------:|
| messageID  | integer | The ID of the message.                             |     так      |
| sep?       | рядок   | Separator to separate returned values.             |      ні      |
| channelID? | integer | ID of the channel where the message is located in. |      ні      |

## Приклад(и)

This will the message flags of your initial command message:

```javascript
bot.command({
    name: 'messageFlags',
    code: `
  $messageFlags[$messageID;, ;$channelID]
  `
});
```
