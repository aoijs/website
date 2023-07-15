---
title: '$createArray'
description: '$createArray will create a new array with given elements.'
id: createArray
---

`$createArray` will create a new array with given elements.

## Використання

```php
$createArray[name;...elements]
```

## Параметри

| Поле        | Тип   | Опис             | Обов'язковий |
| ----------- | ----- | ---------------- |:------------:|
| назва       | рядок | Назва масиву.    |     так      |
| ...elements | рядок | Elements to add. |     так      |

## Приклад(и)

```javascript
bot.command({
    name: "array-create",
    code: `
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```