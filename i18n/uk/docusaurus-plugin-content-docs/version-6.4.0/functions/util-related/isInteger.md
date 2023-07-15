---
title: '$isInteger'
description: '$isInteger will check if the given number is an integer or not.'
id: isInteger
---

`$isInteger` will check if the given number is an integer or not.

## Використання

```php
$isInteger[number]
```

## Параметри

| Поле   | Тип    | Опис                                               | Обов'язковий |
| ------ | ------ | -------------------------------------------------- |:------------:|
| number | number | Number you want to check if its an integer or not. |     так      |

## Приклад(и)

This checks if your message contains an integer and returns `true` or `false`:

```javascript
bot.command({
    name: 'isInteger',
    code: `
  $isInteger[$message]
  `
});
```
