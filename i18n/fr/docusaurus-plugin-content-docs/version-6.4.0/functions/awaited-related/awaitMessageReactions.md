---
title: '$awaitMessageReactions'
description: '$awaitMessageReactions will reply when a user reacts with a specific emoji.'
id: awaitMessageReactions
---

`$awaitMessageReactions` will reply when a user reacts with a specific emoji.

## Usage

```php
$awaitMessageReactions[channelID;messageID;userFilter;time;reactions;commands;errorMessage?;awaitData?]
```

## Parameters

| Field         | Type    | Description                                                                                                | Required |
| ------------- | ------- | ---------------------------------------------------------------------------------------------------------- |:--------:|
| channelID     | integer | Channel ID.                                                                                                |   true   |
| messageID     | integer | Message ID.                                                                                                |   true   |
| userFilter    | string  | To what the bot will reply <br /> 1. **everyone** <br /> 2. **specific user ID** - any user ID |   true   |
| time          | string  | How long the command will last / when the command expires.                                                 |   true   |
| reactions     | string  | Reactions, you can add multiple by separating them with commas ( `,` )                                     |   true   |
| commands      | string  | Commands that will be executed, you can separate multiple emojis with a comma ( `,` )                      |   true   |
| errorMessage? | string  | Error message when command expires.                                                                        |  false   |
| awaitData?    | string  | Awaited Data.                                                                                              |  false   |

**Make sure you have `GuildMessageReactions` as intent in your main file.**

## Example(s)

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
