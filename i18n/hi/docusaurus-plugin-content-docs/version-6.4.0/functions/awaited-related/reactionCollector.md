---
title: '$reactionCollector'
description: '$reactionCollector will create a reaction collector on a given message.'
id: reactionCollector
---

`$reactionCollector` will create a reaction collector on a given message.

## प्रोयोग

```php
$reactionCollector[channelID;messageID;userFilters;time;reactions;awaitedCommands;removeReaction?;awaitData?;endAwait?]
```

## पैरामीटर्स

| फील्ड           | टाइप     | डिस्क्रिप्शन                                                                                               |    चाहिए     |
| --------------- | -------- | ---------------------------------------------------------------------------------------------------------- |:------------:|
| channelID       | integer  | channel ID                                                                                                 |     true     |
| messageID       | integer  | message ID                                                                                                 |     true     |
| userFilter      | स्ट्रिंग | to what the bot will reply <br /> 1. **everyone** <br /> 2. **specific user ID** - any user ID |     true     |
| time            | स्ट्रिंग | when the command expires                                                                                   |     true     |
| reactions       | स्ट्रिंग | reactions, you can separate multiple emojis with a comma ( `,` )                                           |     true     |
| awaitedCommands | स्ट्रिंग | commands to execute, you can separate multiple emojis with a comma ( `,` )                                 |     true     |
| removeReaction? | स्ट्रिंग | remove the reactions after the commands executed                                                           | असत्य (नहीं) |
| awaitData?      | स्ट्रिंग | awaited data                                                                                               | असत्य (नहीं) |
| endAwait?       | स्ट्रिंग | end awaited command / awaited command to execute when timer ends                                           | असत्य (नहीं) |

## ट्रू (हा)

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

