---
title: '$stringEndsWith'
description: '$stringEndsWith will check if the given argument ends with something specific.'
id: stringEndsWith
---

`$stringEndsWith` will check if the given argument ends with something specific.

## Використання

```php
$stringEndsWith[text;check]
```

## Параметри

| Поле  | Тип   | Опис                                                                   | Обов'язковий |
| ----- | ----- | ---------------------------------------------------------------------- |:------------:|
| text  | рядок | The text that will be checked.                                         |     так      |
| check | рядок | The argument that will check if the text ends with something specific. |     так      |

## Приклад(и)

This will return `true` as `aoi.js` ends with `js`:

```javascript
bot.command({
    name: 'stringEndsWith',
    code: `
  $stringEndsWith[aoi.js;js]
  `
});
```