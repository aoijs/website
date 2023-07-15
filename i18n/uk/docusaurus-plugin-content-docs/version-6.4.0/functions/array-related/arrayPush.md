---
title: '$arrayPush'
description: '$arrayPush will add given elements to the array.'
id: arrayPush
---

`$arrayPush` will add given elements to the array.

## Використання

```php
$arrayPush[...elements]
```

## Параметри

| Поле        | Тип   | Опис             | Обов'язковий |
| ----------- | ----- | ---------------- |:------------:|
| ...elements | рядок | Elements to add. |     так      |

## Приклад(и)

```javascript
bot.command({
    name: "array-push",
    code: `
  $arrayPush[array;Leref;Ayaka;Ferel]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```