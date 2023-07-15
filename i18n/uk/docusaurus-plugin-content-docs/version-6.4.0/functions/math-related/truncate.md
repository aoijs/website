---
title: '$truncate'
description: '$truncate will remove all values after a decimal point.'
id: truncate
---

`$truncate` will remove all values after a decimal point.

## Використання

```php
$truncate[number]
```

## Параметри

| Поле   | Тип    | Опис                | Обов'язковий |
| ------ | ------ | ------------------- |:------------:|
| number | number | Number to truncate. |     так      |

## Приклад(и)

This will return `775` and remove `.9723` from the given value:

```javascript
bot.command({
    name: 'truncate',
    code: `
  $truncate[775.9723]
  `
});
```