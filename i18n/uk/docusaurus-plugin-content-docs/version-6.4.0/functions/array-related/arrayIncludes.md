---
title: '$arrayIncludes'
description: '$arrayIncludes перевірить, чи існує певний елемент у масиві.'
id: arrayIncludes
---

`$arrayIncludes` перевірить, чи існує певний елемент у масиві.

## Використання

```php
$arrayIncludes[назва;запит]
```

## Параметри

| Поле  | Тип   | Опис                                                                      | Необхідно |
| ----- | ----- | ------------------------------------------------------------------------- |:---------:|
| назва | рядок | Ім'я масиву.                                                              |    так    |
| запит | рядок | Елемент, який ми будемо запитувати для кожного елемента всередині масиву. |    так    |

## Приклад(и)

```javascript
bot.command({
    name: "array-includes",
    code: `
  $arrayIncludes[array;Leref]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
    // Це поверне "false", оскільки масив не містить слова "Leref".
});
```

```javascript
bot.command({
    name: "array-includes",
    code: `
  $arrayIncludes[array;akarui]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
    // Це поверне "true", оскільки масив містить слово "akarui".
});
```