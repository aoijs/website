---
title: $arrayReverse
description: '$arrayReverse повернет элементы в заданном массиве.'
id: arrayReverse
---

`$arrayReverse` изменит вспять последний предметы из массива.

## Использование

```php
$arrayReverse[name]
```

## Параметры

| Название | Nbg    | Описание          | Нужно |
| -------- | ------ | ----------------- |:-----:|
| название | строка | Название массива. |  да   |

## Пример(ы)

```javascript
bot.command({
    name: "array-reverse",
    code: `
  $arrayReverse[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```