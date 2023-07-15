---
title: '$deleteMessage'
description: '$deleteMessage will delete a specific message.'
id: deleteMessage
---

`$deleteMessage` will delete a specific message.

## Використання

```php
$deleteMessage[messageID;channelID]
```

## Параметри

| Поле      | Тип     | Опис                                                 | Обов'язковий |
| --------- | ------- | ---------------------------------------------------- |:------------:|
| messageID | integer | The message ID of the channel which will be deleted. |     так      |
| channelID | integer | The channel ID of where the message is located in.   |      ні      |

## Приклад(и)

This will send and delete the sent message after 15 seconds ( we are using $let and $get to temporary store the message ID ):

```javascript
bot.command({
    name: 'deleteMessage',
    code: `
  $deleteMessage[$get[id];$channelID]
  $let[id;$sendMessage[Hello!;true]]
  `
});
```