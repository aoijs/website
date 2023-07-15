---
title: '$arraySplice'
description: '$arraySplice will splice elements from the array.'
id: arraySplice
---

`$arraySplice` will splice elements from the array.

## Використання

```php
$arraySplice[name;index;amount;...elements]
```

## Параметри

| Поле        | Тип    | Опис                  | Обов'язковий |
| ----------- | ------ | --------------------- |:------------:|
| назва       | рядок  | Назва масиву.         |     так      |
| індекс      | number | Index of the element. |     так      |
| amount      | number | Amount to splice.     |     так      |
| ...elements | рядок  | Elements to splice.   |     так      |

## Приклад(и)

```javascript
bot.command({
    name: "array-splice",
    code: `
  $arraySplice[array;2;3]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```