---
title: '$joinSplitText'
description: '$joinSplitText will join all text split elements by a given separator.'
id: joinSplitText
---

`$joinSplitText` will join all text split elements by a given separator.

## Використання

```php
$joinSplitText[sep?]
```

## Параметри

| Поле | Тип     | Опис                                            | Обов'язковий |
| ---- | ------- | ----------------------------------------------- |:------------:|
| sep? | integer | Separator to separate multiple returned values. |      ні      |

## Приклад(и)

This will join all text split elements with a comma:

```javascript
bot.command({
    name: "joinSplitText",
    code: `
    $joinSplitText[, ]
    $textSplit[Hello:Bye:Leref;:]
    `
});
```