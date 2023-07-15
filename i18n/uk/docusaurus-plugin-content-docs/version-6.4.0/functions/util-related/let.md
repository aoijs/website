---
title: '$let'
description: '$let is used for storing temporary variables.'
id: let
---

`$let` will store temporary variables which can be retrieved by `$get`.

## Використання

```php
$let[varname;value]
```

## Параметри

| Поле    | Тип   | Опис                                              | Обов'язковий |
| ------- | ----- | ------------------------------------------------- |:------------:|
| varname | рядок | Name of the temporary variable.                   |     так      |
| value   | рядок | Value of the temporary variable you want to save. |     так      |

## Приклад(и)

This will return `Ayaka` from `$get`:

```javascript
bot.command({
    name: 'let',
    code: `
$get[genius]
$let[genius;Ayaka]
`
});
```
