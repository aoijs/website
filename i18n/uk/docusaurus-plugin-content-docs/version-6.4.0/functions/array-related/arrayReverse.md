---
title: '$arrayReverse'
description: '$arrayReverse will reverse the elements in the given array.'
id: arrayReverse
---

`$arrayReverse` will reverse the elements in the given array.

## Використання

```php
$arrayReverse[name]
```

## Параметри

| Поле  | Тип   | Опис         | Обов'язковий |
| ----- | ----- | ------------ |:------------:|
| назва | рядок | Ім'я масиву. |     так      |

## Приклад(и)

```javascript
bot.command({
    name: "array-reverse",
    code: `
  $arrayReverse[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```