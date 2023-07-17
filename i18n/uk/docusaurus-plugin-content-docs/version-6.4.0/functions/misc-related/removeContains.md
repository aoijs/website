---
title: $removeContains
description: '$removeContains видалить певний текст із наданого тексту.'
id: removeContains
---

`$removeContains` видалить текст, що містить текст.

## Використання

```php
$removeContains[content;...words]
```

## Параметри

| Поле     | Тип   | Опис                                    | Обов'язковий |
| -------- | ----- | --------------------------------------- |:------------:|
| зміст    | рядок | Текст, з якого потрібно видалити слова. |     так      |
| ...слова | рядок | Текст для видалення з тексту.           |     так      |

## Приклад(и)

Це дозволить видалити слово "aoi.js з заданого тексту:

```javascript
bot.command({
    name: "removeContains",
    код: `
    $removeContains[Hello, aoi.js!;, ;aoi.js]
    `
});
```