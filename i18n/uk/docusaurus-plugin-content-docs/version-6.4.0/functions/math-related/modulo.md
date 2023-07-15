---
title: '$modulo'
description: '$modulo operation / the remainder when dividing.'
id: modulo
---

`$modulo` operation / the remainder when dividing.

## Використання

```php
$modulo[num;num]
```

## Параметри

| Поле | Тип    | Опис                                 | Обов'язковий |
| ---- | ------ | ------------------------------------ |:------------:|
| num  | number | Numbers to return the raimainder of. |     так      |

## Приклад(и)

This will return `2` as it's the remainder of `5 % 3`:

```javascript
bot.command({
    name: 'modulo',
    code: `
  $modulo[5;3]
  `
});
```
