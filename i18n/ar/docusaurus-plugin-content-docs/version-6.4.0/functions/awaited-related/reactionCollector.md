---
title: '$reactionCollector'
description: '$reactionCollector will create a reaction collector on a given message.'
id: reactionCollector
---

`$reactionCollector` will create a reaction collector on a given message.

## الاستخدام

```php
$reactionCollector[channelID;messageID;userFilters;time;reactions;awaitedCommands;removeReaction?;awaitData?;endAwait?]
```

## البارامترات

| Field           | النوع   | الديسكبربشين                                                                                               | مطلوب |
| --------------- | ------- | ---------------------------------------------------------------------------------------------------------- |:-----:|
| channelID       | Integer | channel ID                                                                                                 | true  |
| messageID       | Integer | message ID                                                                                                 | true  |
| userFilter      | string  | to what the bot will reply <br /> 1. **everyone** <br /> 2. **specific user ID** - any user ID | true  |
| time            | string  | when the command expires                                                                                   | true  |
| reactions       | string  | reactions, you can separate multiple emojis with a comma ( `,` )                                           | true  |
| awaitedCommands | string  | commands to execute, you can separate multiple emojis with a comma ( `,` )                                 | true  |
| removeReaction? | string  | remove the reactions after the commands executed                                                           | false |
| awaitData?      | string  | awaited data                                                                                               | false |
| endAwait?       | string  | end awaited command / awaited command to execute when timer ends                                           | false |

## مثال

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

