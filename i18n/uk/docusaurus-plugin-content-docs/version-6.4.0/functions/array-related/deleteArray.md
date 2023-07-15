---
title: '$deleteArray'
description: '$deleteArray will delete a previously created array.'
id: deleteArray
---

`$deleteArray` will delete a previously created array.

## Використання

```php
$deleteArray[name]
```

## Параметри

| Поле  | Тип   | Опис         | Обов'язковий |
| ----- | ----- | ------------ |:------------:|
| назва | рядок | Ім'я масиву. |     так      |

## Приклад(и)

This will delete the array "array":

```javascript
bot.command({
    name: "deleteArray",
    code: `
  $deleteArray[array]
  $createArray[array;Hello;This;Is;Great]
  `
});
```