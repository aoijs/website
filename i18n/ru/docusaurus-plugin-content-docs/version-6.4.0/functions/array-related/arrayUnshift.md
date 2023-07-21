---
title: '$arrayUnshift'
description: '$arrayUnshift возвращает количество элементов из заданного массива.'
id: arrayUnshift
---

`$arrayUnshift` выведет количество предметов из данного массива.

## Использование

```php
$arrayUnshift[name]
```

## Параметры

| Название | Nbg    | Описание          | Нужно |
| -------- | ------ | ----------------- |:-----:|
| название | строка | Название массива. |  да   |

## Пример(ы)

```javascript
bot.command({
    name: "array-unshift",
    code: `
  $arrayUnshift[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```