---
title: '$awaitMessageReactions'
description: '$awaitMessageReactions will reply when a user reacts with a specific emoji.'
id: awaitMessageReactions
---

`$awaitMessageReactions` will reply when a user reacts with a specific emoji.

## प्रोयोग

```php
$awaitMessageReactions[channelID;messageID;userFilter;time;reactions;commands;errorMessage?;awaitData?]
```

## पैरामीटर्स

| फील्ड         | टाइप     | डिस्क्रिप्शन                                                                                               |    चाहिए     |
| ------------- | -------- | ---------------------------------------------------------------------------------------------------------- |:------------:|
| channelID     | integer  | Channel ID.                                                                                                |     true     |
| messageID     | integer  | Message ID.                                                                                                |     true     |
| userFilter    | स्ट्रिंग | To what the bot will reply <br /> 1. **everyone** <br /> 2. **specific user ID** - any user ID |     true     |
| time          | स्ट्रिंग | How long the command will last / when the command expires.                                                 |     true     |
| reactions     | स्ट्रिंग | Reactions, you can add multiple by separating them with commas ( `,` )                                     |     true     |
| commands      | स्ट्रिंग | Commands that will be executed, you can separate multiple emojis with a comma ( `,` )                      |     true     |
| errorMessage? | स्ट्रिंग | Error message when command expires.                                                                        | असत्य (नहीं) |
| awaitData?    | स्ट्रिंग | Awaited Data.                                                                                              | असत्य (नहीं) |

**Make sure you have `GuildMessageReactions` as intent in your main file.**

## ट्रू (हा)

This will reply to you when you react with the "❤️" emoji to the bot's message:

```js
bot.command({
    name: "awaitMessageReactions",
    code: `
  React with "❤️" for a surprise! 
  $awaitMessageReactions[$channelID;$messageID;$authorID;10s;❤️;awaitedcommandexample;Whoops! You didn't react in time..]
  `
});

bot.awaitedCommand({
    name: "awaitedcommandexample",
    code: `
  Nice, you reacted with ❤️.
  `
});
```
