---
title: '$sum'
description: '$sum will sum-up two given numbers.'
id: sum
---

`$sum` will sum-up two given numbers.

## Використання

```php
$sum[num;num]
```

## Параметри

| Поле | Тип    | Опис                                 | Обов'язковий |
| ---- | ------ | ------------------------------------ |:------------:|
| num  | number | Numbers to perform calculation with. |     так      |

## Приклад(и)

This will return `75` as `70+5` equals `75`:

```javascript
bot.command({
    name: 'sum',
    code: `
  $sum[70;5]
  `
});
```