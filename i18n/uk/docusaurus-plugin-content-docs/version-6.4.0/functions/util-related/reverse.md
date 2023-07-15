---
title: '$reverse'
description: '$reverse will reverse given text.'
id: reverse
---

`$reverse` will reverse given text.

## Використання

```php
$reverse[text]
```

## Параметри

| Поле | Тип   | Опис                      | Обов'язковий |
| ---- | ----- | ------------------------- |:------------:|
| text | рядок | Text you want to reverse. |     так      |

## Приклад(и)

This will the following text readable:

```javascript
bot.command({
    name: 'reverse',
    code: `
  $reverse[!snoitalutargnoc neht ,siht daer ot elba er'uoy fi ,desrever si txet sihT]
  `
});
```