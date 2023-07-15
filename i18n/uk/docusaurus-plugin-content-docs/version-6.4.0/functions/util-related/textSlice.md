---
title: '$textSlice'
description: '$textSlice will slice a message depending on the given arguments.'
id: textSlice
---

`$textSlice` will slice a message depending on the given arguments.

## Використання

```php
$textSlice[text;from?;to]
```

## Параметри

| Поле  | Тип    | Опис                                       | Обов'язковий |
| ----- | ------ | ------------------------------------------ |:------------:|
| text  | рядок  | Text you want to slice.                    |     так      |
| from? | number | Starting point where to slice the message. |      ні      |
| to    | number | Ending point where slicing ends.           |     так      |

## Приклад(и)

This will return `Hello` and remove `Bye` from the given text:

```javascript
bot.command({
    name: 'textSlice',
    code: `
  $textSlice[Hello Bye;0;5]
  `
});
```