---
title: '$isValidLink'
description: '$isValidLink will check if the given link is valid.'
id: isValidLink
---

`$isValidLink` will check if the given link is valid.

## Використання

```php
$isValidLink[URL]
```

## Параметри

| Поле | Тип   | Опис             | Обов'язковий |
| ---- | ----- | ---------------- |:------------:|
| URL  | рядок | Any kind of URL. |     так      |

## Приклад(и)

This will return `true` as the given link is valid:

```javascript
bot.command({
    name: 'isValidLink',
    code: `
  $isValidLink[https://aoi.js.org/docs/]
  `
});
```
