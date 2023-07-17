---
title: '$setMessageVar'
description: '$setMessageVar изменит значение данной переменной сообщения.'
id: setMessageVar
---

`$setMessageVar` изменит значение данной переменной сообщения.

## Использование

```php
$setMessageVar[varname;value;messageID?;table?]
```

## Параметры

| Название      | Nbg    | Описание                   | Нужно |
| ------------- | ------ | -------------------------- |:-----:|
| varname       | строка | Имя переменной.            |  да   |
| значение      | строка | Новое значение переменной. |  да   |
| ID сообщения? | целое  | ID сообщения.              | false |
| таблица?      | строка | Таблица переменных.        | false |

## Пример(ы)

Это изменит значение "Пример" на "Это значение":

```javascript
bot.command({
    name: "setMessageVar",
    code: `
    $setMessageVar[Example;This is a value;$messageID;main]
    `
});
```