---
title: '$checkContains'
description: '$checkContains will check if the given arguments are present within a text.'
id: checkContains
---

`$checkContains` will check if the given arguments are present within the text.

## Використання

```php
$checkContains[text;...chars]
```

## Параметри

| Поле  | Тип   | Опис                        | Обов'язковий |
| ----- | ----- | --------------------------- |:------------:|
| text  | рядок | Text you want to check.     |     так      |
| chars | рядок | Text you want to check for. |     так      |

## Приклад(и)

This will return `true` as `easy` and/or `simple` are present in the given text:

```javascript
bot.command({
    name: 'checkContains',
    code: `
  $checkContains[aoi.js is easy and simple to use for beginners;easy;simple]
  `
});
```
