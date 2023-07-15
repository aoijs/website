---
title: '$editMessage'
description: '$editMessage will edit a given message.'
id: editMessage
---

`$editMessage` will edit a given message.

## Використання

```php
$editMessage[messageID;content;channelID?]
```

## Параметри

| Поле       | Тип     | Опис                                               | Обов'язковий |
| ---------- | ------- | -------------------------------------------------- |:------------:|
| messageID  | integer | The message that should be edited.                 |     так      |
| content    | рядок   | The content of the new message.                    |     так      |
| channelID? | integer | The channel ID of where the message is located in. |      ні      |

You can only edit messages that were sent by the bot itself.

## Приклад(и)

This will edit the sent message after five seconds: ( works the same way as `$editIn` )

```javascript
bot.command({
    name: 'editMessage',
    code: `
  $editMessage[$get[id];Bye!]
  $wait[5s]
  $let[id;$sendMessage[Hello!;true]]
  `
});
```