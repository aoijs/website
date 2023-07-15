---
title: '$get'
description: '$get is used for retrieving temporary variables.'
id: get
---

`$get` will retrieve temporary variables stored by `$let`.

## Використання

```php
$get[var]
```

## Параметри

| Поле | Тип   | Опис                                     | Обов'язковий |
| ---- | ----- | ---------------------------------------- |:------------:|
| var  | рядок | Temporary variable you want to retrieve. |     так      |

## Приклад(и)

This will return `Leref` from `$let`:

```javascript
bot.command({
    name: 'get',
    code: `
Aoi.js developer: $get[developer]
$let[developer;Leref]
`
});
```
