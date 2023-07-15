---
title: '$ordinal'
description: '$ordinal adds st, nd, rd, th to a number such as 1st, 2nd, 3rd, 4th.'
id: ordinal
---

`$ordinal` adds `st`, `nd`, `rd`, `th` to a number such as `1st`, `2nd`, `3rd`, `4th`.

## Використання

```php
$ordinal[number]
```

## Параметри

| Поле   | Тип    | Опис                                                | Обов'язковий |
| ------ | ------ | --------------------------------------------------- |:------------:|
| number | number | Number which will add `st`, `nd`, `rd`, `th` to it. |     так      |

## Приклад(и)

```javascript
bot.command({
    name: 'ordinal',
    code: `
  $ordinal[12] -> Returns 12nd 
  $ordinal[50] -> Returns 50th
  $ordinal[11] -> Returns 11st
  $ordinal[88] -> Returns 88th
  `
});
```
