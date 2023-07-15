---
title: '$reactionCount'
description: '$reactionCount will return the amount of users who reacted to a specific emoji.'
id: reactionCount
---

`$reactionCount` will return the amount of users who reacted to a specific emoji.

## Використання

```php
$reactionCount[channelID;messageID;emoji]
```

## Параметри

| Поле      | Тип     | Опис                                                   | Обов'язковий |
| --------- | ------- | ------------------------------------------------------ |:------------:|
| channelID | integer | The ID of the channel where the message is located in. |     так      |
| messageID | integer | The ID of the message.                                 |     так      |
| emoji     | рядок   | The emoji its reaction count will be returned of.      |     так      |

## Приклад(и)

This will return the amount of reactions on your message with which you executed the command, will most likely return `1` due to the bot being the only one who reacted to it:

```javascript
bot.command({
    name: 'reactionCount',
    code: `
There are: $reactionCount[$channelID;$messageID;😫] reactions!
$addCmdReactions[😫]
`
});
```
