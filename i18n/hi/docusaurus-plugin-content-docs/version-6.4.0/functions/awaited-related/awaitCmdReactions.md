---
title: '$awaitCmdReactions'
description: '$awaitCmdReactions will respond when a user reacts to the initial command message with a specific emoji.'
id: awaitCmdReactions
---

`$awaitCmdReactions` will respond when a user reacts to the initial command message with a specific emoji.

## प्रोयोग

```php
$awaitCmdReactions[userFilter;time;reactions;commands;errorMsg?;awaitData?]
```

## पैरामीटर्स

| फील्ड      | टाइप     | डिस्क्रिप्शन                                                                                               |    चाहिए     |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------- |:------------:|
| userFilter | स्ट्रिंग | To what the bot will reply <br /> 1. **everyone** <br /> 2. **specific user ID** - any user ID |     true     |
| time       | स्ट्रिंग | How long the command will last / when the command expires.                                                 |     true     |
| reactions  | स्ट्रिंग | Reactions the bot will be listening to, you can separate multiple emojis with a comma ( `,` )              |     true     |
| commands   | स्ट्रिंग | Commands that will be executed, you can separate multiple emojis with a comma ( `,` )                      |     true     |
| errorMsg?  | स्ट्रिंग | Error message when command expires.                                                                        | असत्य (नहीं) |
| awaitData? | स्ट्रिंग | Awaited Data.                                                                                              | असत्य (नहीं) |

**Make sure you have `GuildMessageReactions` as intent in your main file.**

## ट्रू (हा)

This will reply to you when you react with the "❤️" emoji to your initial command message:

```js
bot.command({
    name: "awaitCmdReaction",
    code: `
  React with "❤️" for a surprise! 
  $awaitCmdReactions[$authorID;10s;❤️;awaitedCommandExample;Whoops! You didn't react in time..]
  `
});

bot.awaitedCommand({
    name: "awaitedCommandExample",
    code: `
  Nice, you reacted with ❤️.
  `
});
```