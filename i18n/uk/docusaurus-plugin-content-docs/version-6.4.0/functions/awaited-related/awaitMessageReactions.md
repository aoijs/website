---
title: '$awaitMessageReactions'
description: '$awaitMessageReactions will reply when a user reacts with a specific emoji.'
id: awaitMessageReactions
---

`$awaitMessageReactions` will reply when a user reacts with a specific emoji.

## Використання

```php
$awaitMessageReactions[channelID;messageID;userFilter;time;reactions;commands;errorMessage?;awaitData?]
```

## Параметри

| Поле          | Тип     | Опис                                                                                                       | Обов'язковий |
| ------------- | ------- | ---------------------------------------------------------------------------------------------------------- |:------------:|
| channelID     | integer | Channel ID.                                                                                                |     так      |
| messageID     | integer | Message ID.                                                                                                |     так      |
| userFilter    | рядок   | To what the bot will reply <br /> 1. **everyone** <br /> 2. **specific user ID** - any user ID |     так      |
| time          | рядок   | How long the command will last / when the command expires.                                                 |     так      |
| reactions     | рядок   | Reactions, you can add multiple by separating them with commas ( `,` )                                     |     так      |
| commands      | рядок   | Commands that will be executed, you can separate multiple emojis with a comma ( `,` )                      |     так      |
| errorMessage? | рядок   | Error message when command expires.                                                                        |      ні      |
| awaitData?    | рядок   | Очікувані Дані.                                                                                            |      ні      |

**Make sure you have `GuildMessageReactions` as intent in your main file.**

## Приклад(и)

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
