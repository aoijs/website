---
title: $arrayLength
description: '$arrayLength поверне довжину заданого масиву.'
id: arrayLength
---

`$arrayLength` поверне довжину заданого масиву.

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