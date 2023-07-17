---
title: '$setChannelVar'
description: '$setChannelVar изменит значение данной переменной канала.'
id: setChannelVar
---

`$setChannelVar` изменит значение данной переменной канала.

## Использование

```php
$setChannelVar[varname;value;channelID?;table?]
```

## Параметры

| Название   | Nbg    | Описание                   | Нужно |
| ---------- | ------ | -------------------------- |:-----:|
| varname    | строка | Имя переменной.            |  да   |
| значение   | строка | Новое значение переменной. |  да   |
| ID канала? | целое  | ID канала.                 | false |
| таблица?   | строка | Таблица переменных.        | false |

## Пример(ы)

Это изменит значение "Пример" на "Это значение":

```javascript
bot.command({
    name: "setChannelVar",
    code: `
    $setChannelVar[Example;This is a value;$channelID;main]
    `
});
```