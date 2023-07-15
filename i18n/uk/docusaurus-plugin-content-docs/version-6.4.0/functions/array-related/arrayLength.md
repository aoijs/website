---
title: '$arrayLength'
description: '$arrayLength will return the length of a given array.'
id: arrayLength
---

`$arrayLength` will return the length of a given array.

## Використання

```php
$arrayLength[назва]
```

## Параметри

| Поле  | Тип   | Опис         | Необхідно |
| ----- | ----- | ------------ |:---------:|
| назва | рядок | Ім'я масиву. |    так    |

## Приклад(и)

```javascript
bot.command({
    name: "array-length",
    code: `
  $arrayLength[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```