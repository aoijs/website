---
title: $removeContains
description: '$removeContains удалит отдельный текст из предложенного текста.'
id: removeContains
---

`$removeContains` удалит отдельный текст из предложенного текста.

## Использование

```php
$removeContains[content;...words]
```

## Параметры

| Название | Nbg    | Описание                      | Нужно |
| -------- | ------ | ----------------------------- |:-----:|
| контент  | строка | Текст для удаления слов.      |  да   |
| ...слова | строка | Текст для удаления из текста. |  да   |

## Пример(ы)

Это удалит слово "aoi.js из указанного текста:

```javascript
bot.command({
    name: "removeContains",
    code: `
    $removeContains[Hello, aoi.js!;, ;aoi.js]
    `
});
```