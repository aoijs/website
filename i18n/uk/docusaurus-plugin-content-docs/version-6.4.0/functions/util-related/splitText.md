---
title: '$splitText'
description: '$splitText will return a value of $textSplit depending on the given index.'
id: splitText
---

`$splitText` will return a value of $textSplit depending on the given index.

## Використання

```php
$splitText[index]
```

## Параметри

| Поле   | Тип     | Опис                           | Обов'язковий |
| ------ | ------- | ------------------------------ |:------------:|
| індекс | integer | Index of `$textSplit` content. |     так      |

## Приклад(и)

This will return `aoi.js` as it's the second argument of `$textSplit`:

```javascript
bot.command({
    name: 'splitText',
    code: `
  $splitText[2]
  $textSplit[@akarui/aoi.db//aoi.js;//]
  `
});
```