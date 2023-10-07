---
title: $awaitCmdReactions
description: $awaitCmdReactions will respond when a user reacts to the initial command message with a specific emoji.
id: awaitCmdReactions
---

`$awaitCmdReactions` will respond when a user reacts to the initial command message with a specific emoji.

## Usage

```php
$awaitCmdReactions[userFilter;time;reactions;commands;errorMsg?;awaitData?]
```

## Parameters

| Field      | Type   | Description                                                                                    | Required |
| ---------- | ------ | ---------------------------------------------------------------------------------------------- | :------: |
| userFilter | string | To what the bot will reply <br /> 1. **everyone** <br /> 2. **specific user ID** - any user ID |   true   |
| time       | string | How long the command will last / when the command expires.                                     |   true   |
| reactions  | string | Reactions the bot will be listening to, you can separate multiple emojis with a comma ( `,` )  |   true   |
| commands   | string | Commands that will be executed, you can separate multiple emojis with a comma ( `,` )          |   true   |
| errorMsg?  | string | Error message when command expires.                                                            |  false   |
| awaitData? | string | Awaited Data.                                                                                  |  false   |

**Make sure you have `GuildMessageReactions` as intent in your main file.**

## Example(s)

This will reply to you when you react with the "❤️" emoji to your initial command message:

```js
client.command({
  name: "awaitCmdReaction",
  code: `
  React with "❤️" for a surprise! 
  $awaitCmdReactions[$authorID;10s;❤️;awaitedCommandExample;Whoops! You didn't react in time..]
  `
});

client.awaitedCommand({
  name: "awaitedCommandExample",
  code: `
  Nice, you reacted with ❤️.
  `
});
```
