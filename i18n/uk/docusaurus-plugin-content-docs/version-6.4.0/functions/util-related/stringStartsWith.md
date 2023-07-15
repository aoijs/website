---
title: '$stringStartsWith'
description: '$stringStartsWith will check if the given argument starts with something specific.'
id: stringStartsWith
---

`$stringStartsWith` will check if the given argument starts with something specific.

## Використання

```php
$stringStartsWith[text;check]
```

## Параметри

| Поле  | Тип   | Опис                                                                     | Обов'язковий |
| ----- | ----- | ------------------------------------------------------------------------ |:------------:|
| text  | рядок | The text that will be checked.                                           |     так      |
| check | рядок | The argument that will check if the text starts with something specific. |     так      |

## Приклад(и)

This will return `true` as `aoi.js` starts with `aoi`:

```javascript
bot.command({
    name: 'stringStartsWith',
    code: `
  $stringStartsWith[aoi.js;aoi]
  `
});
```