---
title: '$indexOfArg'
description: '$indexOfArg вернет индекс запроса.'
id: indexOfArg
---

`$indexOfArg` возвращает индекс запроса.

## Использование

```php
$indexOfArg[string;query]
```

## Параметры

| Название | Nbg    | Описание                                  | Нужно |
| -------- | ------ | ----------------------------------------- |:-----:|
| строка   | строка | Текст, на который будет проверяться бот.  |  да   |
| запрос   | строка | Запрос, на который будет проверяться бот. |  да   |

## Пример(ы)

Это вернет `3` как `great` является третьим аргументом в запросе:

```javascript
bot.command({
    name: 'indexOfArgs',
    code: `
  $indexOfArgs[aoi.js is great for users who are new to Discord's API!;great]
  `
});
```
