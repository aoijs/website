---
title: '$sendCrosspostingMessage'
description: '$sendCrosspostingMessage will crosspost a given message to the given channels.'
id: sendCrosspostingMessage
---

`$sendCrosspostingMessage` will crosspost a given message to the given channels.

## Використання

```php
$sendCrosspostingMessage[content;...channelIDs]
```

## Параметри

| Поле          | Тип     | Опис                             | Обов'язковий |
| ------------- | ------- | -------------------------------- |:------------:|
| content       | рядок   | The message to send.             |     так      |
| ...channelIDs | integer | Where to send the given message. |     так      |

## Приклад(и)

This will crosspost a message to multiple channels in your server:

```javascript
bot.command({
    name: 'sendCrosspostingMessage',
    code: `
   $sendCrosspostingMessage[Hello!;$channelID;$randomChannelID]
  `
});
```
