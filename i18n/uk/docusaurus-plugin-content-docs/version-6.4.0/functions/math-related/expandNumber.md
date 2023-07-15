---
title: '$expandNumber'
description: '$expandNumber will expand any given number.'
id: expandNumber
---

`$expandNumber` will expand any given number.

## Використання

```php
$expandNumber[abbrNumber]
```

## Параметри

| Поле       | Тип   | Опис                       | Обов'язковий |
| ---------- | ----- | -------------------------- |:------------:|
| abbrNumber | рядок | Number you want to expand. |     так      |

## Приклад(и)

This will return `1300000`:

```javascript
bot.command({
    name: 'expandNumber',
    code: `
  $expandNumber[1.3m]`
});
```
