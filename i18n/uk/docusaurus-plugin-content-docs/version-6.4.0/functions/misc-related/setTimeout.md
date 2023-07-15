---
title: '$setTimeout'
description: '$setTimeout will set a timeout for a given action (which will even continue to run after bot restart).'
id: setTimeout
---

`$setTimeout` will set a timeout for a given action (which will even continue to run after bot restart).

## Використання

```php
$setTimeout[awaitedCmd;duration;timeoutData;returnId?;pulse?]
```

## Параметри

| Поле        | Тип            | Опис                                                                   | Обов'язковий |
| ----------- | -------------- | ---------------------------------------------------------------------- |:------------:|
| awaitedCmd  | рядок          | Awaited command to execute after duration ends.                        |     так      |
| duration    | string, number | After how much time it will execute / this cannot go over **21 days**. |     так      |
| timeoutData | object         | Timeout data.                                                          |     так      |
| returnId?   | boolean        | Return timeout ID.                                                     |      ні      |
| pulse?      | number         | Pulse.                                                                 |      ні      |

- You can retrieve timeout data using `$timeoutData[name]`.
- Note that the duration may not go over **21 days**.

## Приклад(и)

This will send "Hello!" after 10 seconds in the command execution channel:

```javascript
bot.command({
    name: "setTimeout",
    code: `
    $setTimeout[timeoutCommand;10s;{"channelID": "$channelID", "authorID": "$authorID"};false]
    `
});

bot.timeoutCommand({
    name: "timeoutCommand",
    code: `
    $channelSendMessage[$timeoutData[channelID];Hello, <@$timeoutData[authorID]>!]
    `
});
```