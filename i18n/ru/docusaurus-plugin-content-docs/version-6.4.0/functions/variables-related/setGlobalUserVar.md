---
title: '$setGlobalUserVar'
description: '$setGlobalUserVar изменит значение данной глобальной пользовательской переменной.'
id: setGlobalUserVar
---

`$setGlobalUserVar` изменит значение данной глобальной пользовательской переменной.

## Использование

```php
$setGlobalUserVar[varname;value;userID?;table?]
```

## Параметры

| Название         | Nbg    | Описание                   | Нужно |
| ---------------- | ------ | -------------------------- |:-----:|
| varname          | строка | Имя переменной.            |  да   |
| значение         | строка | Новое значение переменной. |  да   |
| ID пользователя? | целое  | ID пользователя.           | ложь  |
| таблица?         | строка | Таблица переменных.        | ложь  |

## Пример(ы)

Это изменит значение «Пример» на «Это значение» для автора команды:

```javascript
bot.command({
    name: "setGlobalUserVar",
    code: `
    $setGlobalUserVar[Example;This is a value;$authorID;main]
    `
});
```