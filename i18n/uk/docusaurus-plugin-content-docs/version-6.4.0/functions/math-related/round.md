---
title: '$round'
description: '$round will round to the next whole number.'
id: round
---

`$round` will round to the next whole number.

## Використання

```php
$round[number]
```

## Параметри

| Поле   | Тип    | Опис             | Обов'язковий |
| ------ | ------ | ---------------- |:------------:|
| number | number | Number to round. |     так      |

## Приклад(и)

This will return `555` as it's the next number to `555.78`:

```javascript
bot.command({
    name: 'round',
    code: `
  $round[555.78]
  `
});
```