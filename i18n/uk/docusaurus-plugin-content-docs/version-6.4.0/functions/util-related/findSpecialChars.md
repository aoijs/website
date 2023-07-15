---
title: '$findSpecialChars'
description: '$findSpecialChars will return all special characters of the given argument.'
id: findSpecialChars
---

`$findSpecialChars` will return all special characters of the given argument.

## Використання

```php
$findSpecialChars[text]
```

## Параметри

| Поле | Тип   | Опис                                            | Обов'язковий |
| ---- | ----- | ----------------------------------------------- |:------------:|
| text | рядок | Text where you want to find special characters. |     так      |

## Приклад(и)

This will return `######`:

```javascript
bot.command({
    name: 'findSpecialChars',
    code: `
  $findSpecialChars[Aoi.js is ###### great]
  `
});
```
