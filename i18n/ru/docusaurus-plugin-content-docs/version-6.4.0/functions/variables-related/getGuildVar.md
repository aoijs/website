---
title: '$getGuildVar'
description: '$getGuildVar возвращает значение данной переменной гильдии.'
id: getGuildVar
---

`$getGuildVar` возвращает значение данной переменной гильдии.

## Использование

```php
$getGuildVar[varname;guildID?;table?]
```

## Параметры

| Название    | Nbg    | Описание            | Нужно |
| ----------- | ------ | ------------------- |:-----:|
| varname     | строка | Имя переменной.     |  да   |
| ID гильдии? | целое  | ID гильдии.         | false |
| таблица?    | строка | Таблица переменных. | false |

## Пример(ы)

Это возвращает значение переменной под названием "Пример":

```javascript
bot.command({
    name: "getGuildVar",
    code: `
    $getGuildVar[Example;$guildID;main]
    `
});
```