---
title: '$multi'
description: '$multi operation / multiplication.'
id: multi
---

`$multi` will multiplicate given numbers.

## Використання

```php
$multi[num;num]
```

## Параметри

| Поле | Тип    | Опис                          | Обов'язковий |
| ---- | ------ | ----------------------------- |:------------:|
| num  | number | Numbers you want to multiply. |     так      |

## Приклад(и)

This will return `72` as `8*9` equals that:

```javascript
bot.command({
    name: 'multi',
    code: `
  $multi[8;9]
  `
});
```
