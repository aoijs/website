---
title: '$arrayIndexOf'
description: '$arrayIndexOf поверне індекс першого знайденого елемента запиту.'
id: arrayIndexOf
---

`$arrayIndexOf` поверне індекс першого знайденого елемента запиту.

## Використання

```php
$arrayIndexOf[назва;запит]
```

## Параметри

| Поле  | Тип   | Опис                                                                      | Необхідно |
| ----- | ----- | ------------------------------------------------------------------------- |:---------:|
| назва | рядок | Ім'я масиву.                                                              |    так    |
| запит | рядок | Елемент, який ми будемо запитувати для кожного елемента всередині масиву. |    так    |

## Приклад(и)

```javascript
bot.command({
    name: "array-indexof",
    code: `
  $arrayIndexOf[array;akarui]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
    // It will return "2" as the word "akarui" is in the 2nd position of the array.
});
```