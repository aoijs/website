---
title: '$pinMessage'
description: '$pinMessage will pin a given message.'
id: pinMessage
---

`$pinMessage` will pin a given message.

## Використання

```php
$pinMessage[messageID?;channelID?]
```

## Параметри

| Поле      | Тип     | Опис                                               | Обов'язковий |
| --------- | ------- | -------------------------------------------------- |:------------:|
| messageID | integer | The ID of the message that will be pinned.         |      ні      |
| channelID | integer | The channel ID of where the message is located in. |      ні      |

## Приклад(и)

This will pin the bot's message:

```javascript
bot.command({
    name: 'pinMessage',
    code: `
  $pinMessage[$get[id]]
  $let[id;$sendMessage[Hello!;true]
  ` // using $let & $get to save the message ID
});
```