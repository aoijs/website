---
title: $arrayPop
description: '$arrayPop вернет последний элемент данного массива.'
id: arrayPop
---

`$arrayPop` выведет последний предмент из массива.

## Использование

```php
$arrayPop[name]
```

## Параметры

| Название | Nbg    | Описание          | Нужно |
| -------- | ------ | ----------------- |:-----:|
| название | строка | Название массива. |  да   |

## Пример(ы)

```javascript
bot.command({
    name: "array-pop",
    code: `
  $arrayPop[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```