---
title: '$cropText'
description: '$cropText will crop given text.'
id: cropText
---

`$cropText` is used to crop given text.

## Використання

```php
$cropText[text;limit;start?]
```

## Параметри

| Поле   | Тип    | Опис                                                                     | Обов'язковий |
| ------ | ------ | ------------------------------------------------------------------------ |:------------:|
| text   | рядок  | Text you want to slice.                                                  |     так      |
| limit  | number | Limit of the cropped text/will start to crop any text coming after that. |     так      |
| start? | number | Where cropping should start.                                             |      ні      |

## Приклад(и)

This will return `bye` and remove `hello and` from the given text:

```javascript
bot.command({
    name: 'cropText',
    code: `
$cropText[hello and bye;20;9]
  `
});
```
