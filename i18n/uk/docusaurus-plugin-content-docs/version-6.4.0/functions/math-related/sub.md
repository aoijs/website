---
title: '$sub'
description: '$sub will substract two given numbers.'
id: sub
---

`$sub` will substract two given numbers.

## Використання

```php
$sub[num;num]
```

## Параметри

| Поле | Тип    | Опис                                 | Обов'язковий |
| ---- | ------ | ------------------------------------ |:------------:|
| num  | number | Numbers to perform calculation with. |     так      |

## Приклад(и)

This will return `65` as `70-5` equals `65`:

```javascript
bot.command({
    name: 'sub',
    code: `
  $sub[70;5]
  `
});
```