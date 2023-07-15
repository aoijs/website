---
title: '$arrayPop'
description: '$arrayPop поверне останній елемент заданого масиву.'
id: arrayPop
---

`$arrayPop` поверне останній елемент заданого масиву.

## Використання

```php
$arrayPop[назва]
```

## Параметри

| Поле  | Тип   | Опис         | Обов'язковий |
| ----- | ----- | ------------ |:------------:|
| назва | рядок | Ім'я масиву. |     так      |

## Приклад(и)

```javascript
bot.command({
    name: "array-pop",
    code: `
  $arrayPop[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```