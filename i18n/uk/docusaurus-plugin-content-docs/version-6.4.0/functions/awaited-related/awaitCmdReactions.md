---
title: '$awaitCmdReactions'
description: '$awaitCmdReactions will respond when a user reacts to the initial command message with a specific emoji.'
id: awaitCmdReactions
---

`$awaitCmdReactions` will respond when a user reacts to the initial command message with a specific emoji.

## Використання

```php
$awaitCmdReactions[userFilter;time;reactions;commands;errorMsg?;awaitData?]
```

## Параметри

| Поле       | Тип   | Опис                                                                                                       | Обов'язковий |
| ---------- | ----- | ---------------------------------------------------------------------------------------------------------- |:------------:|
| userFilter | рядок | To what the bot will reply <br /> 1. **everyone** <br /> 2. **specific user ID** - any user ID |     так      |
| time       | рядок | How long the command will last / when the command expires.                                                 |     так      |
| reactions  | рядок | Reactions the bot will be listening to, you can separate multiple emojis with a comma ( `,` )              |     так      |
| commands   | рядок | Commands that will be executed, you can separate multiple emojis with a comma ( `,` )                      |     так      |
| errorMsg?  | рядок | Error message when command expires.                                                                        |      ні      |
| awaitData? | рядок | Очікувані Дані.                                                                                            |      ні      |

**Make sure you have `GuildMessageReactions` as intent in your main file.**

## Приклад(и)

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