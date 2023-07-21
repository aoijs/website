---
title: '$getMessageVar'
description: '$getMessageVar возвращает значение данной переменной сообщения.'
id: getMessageVar
---

`$getMessageVar` возвращает значение данной переменной сообщения.

## Использование

```php
$getMessageVar[varname;guildID?;table?]
```

## Параметры

| Название      | Nbg    | Описание            | Нужно |
| ------------- | ------ | ------------------- |:-----:|
| varname       | строка | Имя переменной.     |  да   |
| ID сообщения? | целое  | ID сообщения        | ложь  |
| таблица?      | строка | Таблица переменных. | ложь  |

## Пример(ы)

Это возвращает значение переменной под названием "Пример":

```javascript
bot.command({
    name: "getMessageVar",
    code: `
    $getMessageVar[Example;$messageID;main]
    `
});
```