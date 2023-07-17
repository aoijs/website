---
title: '$getChannelVar'
description: '$getChannelVar возвращает значение данной переменной канала.'
id: getChannelVar
---

`$getChannelVar` возвращает значение данной переменной канала.

## Использование

```php
$getChannelVar[varname;channelID?;table?]
```

## Параметры

| Название   | Nbg    | Описание            | Нужно |
| ---------- | ------ | ------------------- |:-----:|
| varname    | строка | Имя переменной.     |  да   |
| ID канала? | целое  | ID канала.          | false |
| таблица?   | строка | Таблица переменных. | false |

## Пример(ы)

Это возвращает значение переменной под названием "Пример":

```javascript
bot.command({
    name: "getChannelVar",
    code: `
    $getChannelVar[Example;$channelID;main]
    `
});
```