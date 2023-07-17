---
title: '$resetGuildVar'
description: '$resetGuildVar установит значение данной гильдии в значение по умолчанию.'
id: resetGuildVar
---

`$resetGuildVar` установит значение данной переменной гильдии в значение по умолчанию.

## Использование

```php
$resetGuildVar[varname;table?]
```

## Параметры

| Название | Nbg    | Описание            | Нужно |
| -------- | ------ | ------------------- |:-----:|
| varname  | строка | Имя переменной.     |  да   |
| таблица? | строка | Таблица переменных. | false |

## Пример(ы)

Это сбросит переменную под названием "Пример":

```javascript
bot.command({
    name: "resetGuildVar",
    code: `
    $resetGuildVar[Example;main]
    `
});
```