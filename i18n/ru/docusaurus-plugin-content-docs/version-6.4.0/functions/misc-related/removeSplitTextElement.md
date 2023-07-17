---
title: $removeSplitTextElement
description: '$removeSplitTextElement удалит отдельный текстовый элемент.'
id: removeSplitTextElement
---

`$removeSplitTextElement` удалит отдельный текстовый элемент.

## Использование

```php
$removeSplitTextElement[...elements]
```

## Параметры

| Название    | Nbg    | Описание                                | Нужно |
| ----------- | ------ | --------------------------------------- |:-----:|
| ...элементы | строка | Разделить элементы текста для удаления. |  да   |

## Пример(ы)

Это удалит слово "bye" из массива:

```javascript
bot.command({
    name: "removeSplitTextElement",
    code: `
    $removeSplitTextElement[bye]
    $textSplit[hello, bye, aoi.js;, ]
    `
});
```