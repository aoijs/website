---
title: '$arrayJoin'
description: '$arrayJoin will join the array with a given separator.'
id: arrayJoin
---

`$arrayJoin` will join the array with a given separator.

## Використання

```php
$arrayJoin[name;separator?]
```

## Параметри

| Поле        | Тип   | Опис          | Обов'язковий |
| ----------- | ----- | ------------- |:------------:|
| назва       | рядок | Назва масиву. |     так      |
| розділювач? | рядок | Роздільник.   |      ні      |

## Приклад(и)

```javascript
bot.command({
    name: "array-join",
    code: `
  $arrayJoin[array;, ]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```