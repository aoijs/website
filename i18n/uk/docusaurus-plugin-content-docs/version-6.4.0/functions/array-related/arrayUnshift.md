---
title: '$arrayUnshift'
description: '$arrayUnshift will return the amount of elements of the given array.'
id: arrayUnshift
---

`$arrayUnshift` will return the amount of elements of the given array.

## Використання

```php
$arrayUnshift[name]
```

## Параметри

| Поле  | Тип   | Опис         | Обов'язковий |
| ----- | ----- | ------------ |:------------:|
| назва | рядок | Ім'я масиву. |     так      |

## Приклад(и)

```javascript
bot.command({
    name: "array-unshift",
    code: `
  $arrayUnshift[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```