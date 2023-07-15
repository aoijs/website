---
title: '$abbreviate'
description: '$abbreviate will allow you to abbreviate large numbers.'
id: abbreviate
---

`$abbreviate` will allow you to abbreviate large numbers.

## Використання

```php
$abbreviate[num;dec?]
```

## Параметри

| Поле | Тип     | Опис                            | Обов'язковий |
| ---- | ------- | ------------------------------- |:------------:|
| num  | integer | Number to abbreviate.           |     так      |
| dec? | integer | Decimal between the abbreviate. |      ні      |

## Приклад(и)

This returns: `20k`

```javascript
bot.command({
    name: 'abbreviate',
    code: `
  $abbreviate[20000]
  `
});
```

This returns: `20.0k`

```javascript
bot.command({
    name: 'abbreviate',
    code: `
  $abbreviate[20000;1]
  `
});
```
