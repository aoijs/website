---
title: $loop
description: '$loop будет выполнять ожидаемые команды, заданное количество раз.'
id: loop
---

`$loop` будет выполнять ожидаемые команды в определенное количество раз.

## Использование

```php
$loop[time;awaitData;...awaitedCmds]
```

## Параметры

| Название          | Nbg    | Описание                     | Нужно |
| ----------------- | ------ | ---------------------------- |:-----:|
| время             | строка | Как часто запускать цикл.    |  да   |
| ожидать данных    | объект | Ожидаемые данные.            |  да   |
| ...ожидаемые Cmds | строка | Ожидающие выполнения команд. |  да   |

## Пример(ы)

Это выполнит цикл, который будет редактировать отправленное сообщение 5 раз с данным содержанием в `awaitData`:

```javascript
bot.command({
    name: "loop",
    code: `
    $loop[5;{ "message": "$get[messageID]", "channel": "$channelID" };editMessage]
    $let[messageID;$sendMessage[My ping is: $pingMS;true]]
    `
});
```

Мы используем `$awaitData` для получения заданных свойств в поле `awaitData` , расположенном в команде цикла.

```javascript
bot.awaitedCommand({
    name: "editMessage",
    code: `
    $editMessage[$awaitData[message];$pingMS;$awaitData[channel]]
    $wait[5s]
    `
});
```