---
title: '$reactionCollector'
description: '$reactionCollector will create a reaction collector on a given message.'
id: reactionCollector
---

`$reactionCollector` will create a reaction collector on a given message.

## Використання

```php
$reactionCollector[channelID;messageID;userFilters;time;reactions;awaitedCommands;removeReaction?;awaitData?;endAwait?]
```

## Параметри

| Поле            | Тип     | Опис                                                                                                       | Обов'язковий |
| --------------- | ------- | ---------------------------------------------------------------------------------------------------------- |:------------:|
| channelID       | integer | channel ID                                                                                                 |     так      |
| messageID       | integer | message ID                                                                                                 |     так      |
| userFilter      | рядок   | to what the bot will reply <br /> 1. **everyone** <br /> 2. **specific user ID** - any user ID |     так      |
| time            | рядок   | when the command expires                                                                                   |     так      |
| reactions       | рядок   | reactions, you can separate multiple emojis with a comma ( `,` )                                           |     так      |
| awaitedCommands | рядок   | commands to execute, you can separate multiple emojis with a comma ( `,` )                                 |     так      |
| removeReaction? | рядок   | remove the reactions after the commands executed                                                           |      ні      |
| awaitData?      | рядок   | awaited data                                                                                               |      ні      |
| endAwait?       | рядок   | end awaited command / awaited command to execute when timer ends                                           |      ні      |

## Приклад(и)

This will send a message when you add a reaction:

```js
bot.command({
    name: "reactionCollector",
    code: `
  $reactionCollector[$channelID;$splitText[1];$authorID;10m;👀;awaitReaction;;true]
  $textSplit[$sendMessage[React with "👀" for something special!;true]; ]
  `
});

bot.awaitedCommand({
    name: "awaitReaction",
    code: `
  $sendMessage[👀 what's this?]
  `
});
```

