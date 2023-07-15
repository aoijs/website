---
title: '$isNumber'
description: '$isNumber will check if the given argument is a number.'
id: isNumber
---

`$isNumber` will check if the given argument is a number.

## Використання

```php
$isNumber[num]
```

## Параметри

| Поле | Тип    | Опис                                        | Обов'язковий |
| ---- | ------ | ------------------------------------------- |:------------:|
| num  | number | Argument you want to check if its a number. |     так      |

## Приклад(и)

This will return `true` as `255` is a valid number:

```javascript
bot.command({
    name: 'isNumber',
    code: `
  $isNumber[255]
  `
});
```
