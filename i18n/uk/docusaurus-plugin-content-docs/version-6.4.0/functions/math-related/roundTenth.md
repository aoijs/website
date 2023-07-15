---
title: '$roundTenth'
description: '$roundTenth will round to the next tenth.'
id: roundTenth
---

`$roundTenth` will round to the next tenth.

## Використання

```php
$roundTenth[number;decimalPosition]
```

## Параметри

| Поле            | Тип     | Опис                                               | Обов'язковий |
| --------------- | ------- | -------------------------------------------------- |:------------:|
| number          | number  | Number to round.                                   |     так      |
| decimalPosition | integer | How many numbers after the comma will be returned. |     так      |

## Приклад(и)

This will return `503.70` as it's the nearest number to `503.6972`:

```javascript
bot.command({
    name: 'roundTenth',
    code: `
  $roundTenth[503.6972]
  `
});
```