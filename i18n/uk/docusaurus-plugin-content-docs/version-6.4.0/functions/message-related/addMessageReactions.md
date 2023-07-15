---
title: '$addMessageReactions'
description: '$addMessageReactions will add a reaction to a specific message.'
id: addMessageReactions
---

`$addMessageReactions` will add a reaction to a specific message.

## Використання

```php
$addMessageReactions[channelID;messageID;...reactions]
```

## Параметри

| Поле      | Тип     | Опис                                        | Обов'язковий |
| --------- | ------- | ------------------------------------------- |:------------:|
| channelID | integer | Channel ID of where the message is located. |     так      |
| messageID | integer | Message ID.                                 |     так      |
| reactions | рядок   | Reactions to add.                           |     так      |

## Приклад(и)

This will add the given reactions to your message:

```javascript
bot.command({
    name: 'addMessageReactions',
    code: `
 $addMessageReactions[$channelID;$messageID;✅;❌]
  `
});
```
