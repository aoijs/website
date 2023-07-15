---
title: '$digitalFormat'
description: '$digitalFormat will return a digital formatted time converted from ms.'
id: digitalFormat
---

`$digitalFormat` will convert ms to digital formatted, readable time.

## Використання

```php
$digitalFormat[ms]
```

## Параметри

| Поле | Тип    | Опис                                     | Обов'язковий |
| ---- | ------ | ---------------------------------------- |:------------:|
| ms   | number | Time in miliseconds you wish to convert. |     так      |

## Приклад(и)

This will return `00:04:00` as `240000ms` are four minutes:

```javascript
bot.command({
    name: 'digitalFormat',
    code: `
  $digitalFormat[240000]
  `
});
```
