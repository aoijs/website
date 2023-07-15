---
title: '$awaitMessages'
description: '$awaitMessages will reply once a given message has been sent by the given user.'
id: awaitMessages
---

`$awaitMessages` will reply once a given message has been sent by the given user.

## Використання

```php
$awaitMessages[channelID;userFilter;time;replies;cmds;errorMessage?;awaitData?;dm?]
```

## Параметри

| Поле          | Тип     | Опис                                                                                                                                | Обов'язковий |
| ------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |:------------:|
| channelID     | integer | Channel ID.                                                                                                                         |     так      |
| userFilter    | integer | User filter <br /> 1. **everyone** <br /> 2. **specific user** - any user ID                                            |     так      |
| time          | рядок   | How long the command lasts / when it expires.                                                                                       |     так      |
| replies       | рядок   | To what the bot will be responding to, multiple words can be separated with a comma  (or use "everything" to respond to everything) |     так      |
| cmds          | рядок   | Commands that will be executed, multiple commands can be separated with a comma.                                                    |     так      |
| errorMessage? | рядок   | Error message when the command expires.                                                                                             |      ні      |
| awaitData?    | рядок   | Очікувані Дані.                                                                                                                     |      ні      |
| dm?           | integer | User ID of where the command may be executed.                                                                                       |      ні      |

## Приклад(и)

This will reply to any message you send after executing the command:

```js
bot.command({
    name: "awaitMessages",
    code: `
  $awaitMessages[$channelID;$authorID;15s;everything;awaitedcommandexample;Oh? You don't want to talk to me..?] 
  What's your name?
  `
    // Please make sure that the awaitedCommand name is ALL lowercase or else it won't work.
});

bot.awaitedCommand({
    name: "awaitedcommandexample",
    code: `
  Nice to meet you, $message!
  `
});
```
