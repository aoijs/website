---
title: '$arrayShift'
description: '$arrayShift will return the first item of the given array.'
id: arrayShift
---

`$arrayShift` will return the first item of the given array.

## Використання

```php
$arrayShift[name]
```

## Параметри

| Поле  | Тип   | Опис         | Обов'язковий |
| ----- | ----- | ------------ |:------------:|
| назва | рядок | Ім'я масиву. |     так      |

## Приклад(и)

```javascript
bot.command({
    name: "array-shift",
    code: `
  $arrayShift[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```