---
title: $timeoutData
description: '$timeoutData содержит данные для параметров данных $setTimeout , это будет пустым, если используется вне кодов timeoutCommand.'
id: timeoutData
---

`$timeoutData` содержит данные для параметров данных $setTimeout , они будут пустыми, если используются вне кодов timeoutCommand.

## Использование

```php
$timeoutData[option]
```

## Параметры

| Название | Nbg    | Описание                                 | Нужно |
| -------- | ------ | ---------------------------------------- |:-----:|
| опция    | строка | Имя параметра параметра тайм-аут данных. |  да   |

## Пример(ы)

Это отправит «Привет!» через 10 секунд в канале исполнения команды:

```javascript
bot.command({
    name: "setTimeout",
    код: `
    $setTimeout[timeoutCommand;10s;{"channelID": "$channelID", "authorID": "$authorID"};false]
    `
});

бот. imeoutCommand({
    имя: "timeoutCommand",
    код: `
    $channelSendMessage[$timeoutData[channelID]; элло, <@$timeoutData[authorID]>!]
    «
});
```