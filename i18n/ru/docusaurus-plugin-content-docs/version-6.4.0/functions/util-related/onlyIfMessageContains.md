---
title: $onlyIfMessageContains
description: '$onlyIfMessageContains проверит содержит ли сообщение заданный текст и если не вернет сообщение об ошибке.'
id: onlyIfMessageContains
---

`$onlyIfMessageContains` проверит, содержит ли сообщение заданный текст и если не возвращает сообщение об ошибке.

## Использование

```php
$onlyIfMessageContains[content;...text;error]
```

## Параметры

| Название | Nbg    | Описание                                             | Нужно |
| -------- | ------ | ---------------------------------------------------- |:-----:|
| контент  | строка | Сообщение, которое должно содержать указанный текст. |  да   |
| текст    | строка | Текст для проверки в сообщении.                      |  да   |
| ошибка   | строка | Ошибка возврата.                                     |  да   |

## Пример(ы)

Это вернет сообщение об ошибке как "aoi.js" не появляется в "Привет!":

```javascript
bot.command({
    name: "onlyIfMessageContains",
    code: `
    Ok.
    $onlyIfMessageContains[Hello!;aoi.js;Couldn't find that word!]
    «
});
```