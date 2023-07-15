---
title: '$loop'
description: '$loop will execute awaited commands a given amount of times.'
id: loop
---

`$loop` will execute awaited commands a given amount of times.

## Використання

```php
$loop[time;awaitData;...awaitedCmds]
```

## Параметри

| Поле           | Тип    | Опис                           | Обов'язковий |
| -------------- | ------ | ------------------------------ |:------------:|
| time           | рядок  | How often to execute the loop. |     так      |
| awaitData      | object | Очікувані Дані.                |     так      |
| ...awaitedCmds | рядок  | Awaited Commands to execute.   |     так      |

## Приклад(и)

This will execute a loop which will edit the sent message 5 times with the given content in `awaitData`:

```javascript
bot.command({
    name: "loop",
    code: `
    $loop[5;{ "message": "$get[messageID]", "channel": "$channelID" };editMessage]
    $let[messageID;$sendMessage[My ping is: $pingMS;true]]
    `
});
```

We use `$awaitData` to retrieve the given properties in the `awaitData` field which is located in the loop command.

```javascript
bot.awaitedCommand({
    name: "editMessage",
    code: `
    $editMessage[$awaitData[message];$pingMS;$awaitData[channel]]
    $wait[5s]
    `
});
```