---
title: '$arrayLastIndexOf'
description: '$arrayLastIndexOf will return the index of the last found item of the query.'
id: arrayLastIndexOf
---

`$arrayLastIndexOf` will return the index of the last found item of the query.

## Використання

```php
$arrayLastIndexOf[name;query]
```

## Параметри

| Поле  | Тип   | Опис                                                                  | Обов'язковий |
| ----- | ----- | --------------------------------------------------------------------- |:------------:|
| назва | рядок | Назва масиву.                                                         |     так      |
| запит | рядок | Елемент, який ми будемо шукати для кожного елемента всередині масиву. |     так      |

## Приклад(и)

```javascript
bot.command({
    name: "array-indexof",
    code: `
  $arrayLastIndexOf[array;akarui]
  $createArray[array;aoi.js;akarui;akarui;documents;bot]
  `
    // It will return "3" as the word "akarui" is in the 3rd position of the array.
});
```