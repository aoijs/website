---
title: '$arrayShuffle'
description: '$arrayShuffle will shuffle the elements of the given array.'
id: arrayShuffle
---

`$arrayShuffle` will shuffle the elements of the given array.

## Використання

```php
$arrayShuffle[name]
```

## Параметри

| Поле  | Тип   | Опис         | Обов'язковий |
| ----- | ----- | ------------ |:------------:|
| назва | рядок | Ім'я масиву. |     так      |

## Приклад(и)

```javascript
bot.command({
    name: "array-shuffle",
    code: `
  $arrayJoin[array;, ]
  $arrayShuffle[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```