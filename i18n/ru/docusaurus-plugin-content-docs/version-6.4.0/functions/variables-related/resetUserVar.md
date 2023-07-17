---
title: '$resetUserVar'
description: '$resetUserVar установит значение данной пользовательской переменной по умолчанию для данной гильдии.'
id: resetUserVar
---

`$resetUserVar` установит указанную пользовательскую переменную по умолчанию для данной гильдии.

## Использование

```php
$resetUserVar[varname;guildID?;table?]
```

## Параметры

| Название    | Nbg    | Описание            | Нужно |
| ----------- | ------ | ------------------- |:-----:|
| varname     | строка | Имя переменной.     |  да   |
| ID гильдии? | целое  | ID гильдии.         | false |
| таблица?    | строка | Таблица переменных. | false |

## Пример(ы)

Это сбросит переменную под названием "Пример":

```javascript
bot.command({
    name: "resetUserVar",
    code: `
    $resetUserVar[Example;$guildID;main]
    `
});
```