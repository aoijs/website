---
title: '$argsSlice'
description: '$argsSlice will slice the given argument depending on the users input.'
id: argsSlice
---

`$argsSlice` will slice the given argument depending on the users input.

## Використання

```php
$argsSlice[text;from?;to] 
```

## Параметри

| Поле  | Тип    | Опис                                      | Обов'язковий |
| ----- | ------ | ----------------------------------------- |:------------:|
| text  | рядок  | Text you want to slice                    |     так      |
| from? | number | Starting point where to slice the message |      ні      |
| to    | number | Ending point where slicing ends           |     так      |

## Приклад(и)

This will return `Bye` and remove `Hello` from the given text:

```javascript
bot.command({
    name: 'slice',
    code: `
  $argsSlice[Hello Bye;1;5]
  `
});
```
