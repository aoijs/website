---
title: '$arrayShuffle'
description: '$arrayShuffle перемешивает элементы данного массива.'
id: arrayShuffle
---

`$arrayShuffle` перетасует элементы из данного массива.

## Использование

```php
$arrayShuffle[name]
```

## Параметры

| Название | Nbg    | Описание          | Нужно |
| -------- | ------ | ----------------- |:-----:|
| название | строка | Название массива. |  да   |

## Пример(ы)

```javascript
bot.command({
    name: "array-shuffle",
    code: `
  $arrayJoin[array;, ]
  $arrayShuffle[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```