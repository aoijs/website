---
title: '$setGuildVar'
description: '$setGuildVar изменит значение данной переменной гильдии.'
id: setGuildVar
---

`$setGuildVar` изменит значение данной переменной гильдии.

## Использование

```php
$setGuildVar[varname;value;guildID?;table?]
```

## Параметры

| Название    | Nbg    | Описание                   | Нужно |
| ----------- | ------ | -------------------------- |:-----:|
| varname     | строка | Имя переменной.            |  да   |
| значение    | строка | Новое значение переменной. |  да   |
| ID гильдии? | целое  | ID гильдии.                | false |
| таблица?    | строка | Таблица переменных.        | false |

## Пример(ы)

Это изменит значение "Пример" на "Это значение":

```javascript
bot.command({
    name: "setGuildVar",
    code: `
    $setGuildVar[Example;This is a value;$guildID;main]
    `
});
```