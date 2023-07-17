---
title: '$resetGlobalUserVar'
description: '$resetGlobalUserVar установит значение данной глобальной пользовательской переменной по умолчанию.'
id: resetGlobalUserVar
---

`$resetGlobalUserVar` установит значение данной глобальной пользовательской переменной по умолчанию.

## Использование

```php
$resetGlobalUserVar[varname;table?]
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
    name: "resetGlobalUserVar",
    code: `
    $resetGlobalUserVar[Example;main]
    `
});
```