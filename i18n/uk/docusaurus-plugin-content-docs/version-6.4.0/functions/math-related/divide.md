---
title: '$divide'
description: '$divide will divide two given numbers.'
id: divide
---

`$divide` will divide two given numbers.

## Використання

```php
$divide[...numbers;...numbers]
```

## Параметри

| Поле    | Тип    | Опис                                       | Обов'язковий |
| ------- | ------ | ------------------------------------------ |:------------:|
| numbers | number | Numbers you want to divide with eachother. |     так      |

## Приклад(и)

This will return `23` as `69/3` equals it.

```javascript
bot.command({
    name: 'divide',
    code: `
  $divide[69;3]
  `
});
```
