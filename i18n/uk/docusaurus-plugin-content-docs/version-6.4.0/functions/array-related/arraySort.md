---
title: '$arraySort'
description: '$arraySort will sort a given array.'
id: arraySort
---

`$arraySort` will sort a given array.

## Використання

```php
$arraySort[name;type?]
```

## Параметри

| Поле  | Тип   | Опис                                                                           | Обов'язковий |
| ----- | ----- | ------------------------------------------------------------------------------ |:------------:|
| назва | рядок | Назва масиву.                                                                  |     так      |
| тип   | рядок | Type to sort after <br /> 1. **asc** (ascending) 2. **dsc** (descending) |     так      |

## Приклад(и)

```javascript
bot.command({
    name: "array-sort",
    code: `
  $arrayJoin[array;, ]
  $arraySort[array;asc]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```