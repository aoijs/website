---
title: '$clearReactions'
description: '$clearReactions will remove a given or all reactions of a message.'
id: clearReactions
---

`$clearReactions` will remove a given or all reactions of a message.

## Використання

```php
$clearReactions[channelID;messageID;emoji]
```

## Параметри

| Поле      | Тип     | Опис                                                                                         | Обов'язковий |
| --------- | ------- | -------------------------------------------------------------------------------------------- |:------------:|
| channelID | integer | The channel ID of where the message is located in.                                           |     так      |
| messageID | integer | The message ID.                                                                              |     так      |
| emoji     | рядок   | The emoji to remove. <br /> 1. **all** (default) <br /> 2. **emoji** - any emoji |     так      |

## Приклад(и)

This will add two emojis and remove one completely:

```javascript
bot.command({
    name: 'clearReactions',
    code: `
  $clearReactions[$channelID;$messageID;🥱]
  $wait[2s]
  $addCmdReactions[🥱;😩]
  `
});
```
