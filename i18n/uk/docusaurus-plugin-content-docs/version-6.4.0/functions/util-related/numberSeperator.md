---
title: '$numberSeparator'
description: '$numberSeparator will separate numbers and make them readable.'
id: numberSeparator
---

`$numberSeparator` will separate numbers and make them readable.

## Використання

```php
$numberSeparator[num;sep?]
```

## Параметри

| Поле | Тип    | Опис                                                                | Обов'язковий |
| ---- | ------ | ------------------------------------------------------------------- |:------------:|
| num  | number | Number you want to separate.                                        |     так      |
| sep? | рядок  | Separator which will be used to separate the numbers, default: `,`. |      ні      |

## Приклад(и)

This will return `1,000,000`:

```javascript
bot.command({
    name: 'numberSeparator',
    code: `
  $numberSeparator[1000000;,]
  `
});
```
