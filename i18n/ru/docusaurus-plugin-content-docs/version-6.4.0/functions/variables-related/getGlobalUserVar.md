---
title: '$getGlobalUserVar'
description: '$getGlobalUserVar возвращает значение данной глобальной пользовательской переменной.'
id: getGlobalUserVar
---

`$getGlobalUserVar` возвращает значение данной глобальной пользовательской переменной.

## Использование

```php
$getGlobalUserVar[varname;userID?;table?]
```

## Параметры

| Название         | Nbg    | Описание            | Нужно |
| ---------------- | ------ | ------------------- |:-----:|
| varname          | строка | Имя переменной.     |  да   |
| ID пользователя? | целое  | ID пользователя.    | false |
| таблица?         | строка | Таблица переменных. | false |

## Пример(ы)

Это возвращает значение переменной под названием "Пример":

```javascript
bot.command({
    name: "getGlobalUserVar",
    code: `
    $getGlobalUserVar[Example;$authorID;main]
    `
});
```