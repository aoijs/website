---
title: $removeTextSplitElement
description: '$removeTextSplitElement удалит разделенный текст элемента.'
id: removeTextSplitElement
---

`$removeTextSplitElement` удалит отдельный разделенный текст.

## Использование

```php
$removeTextSplitElement[element]
```

## Параметры

| Название | Nbg    | Описание                        | Нужно |
| -------- | ------ | ------------------------------- |:-----:|
| элемент  | строка | Разделенный текст для удаления. |  да   |

## Пример(ы)

Это удалит слово "bye" из массива:

```javascript
bot.command({
    name: "removeTextSplitElement",
    code: `
    $removeTextSplitElement[bye]
    $textSplit[hello, bye, aoi.js;, ]
    `
});
```