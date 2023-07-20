---
title: '$arraySort'
description: '$arraySort будет сортировать данный массив.'
id: arraySort
---

`$arraySort` будет сортировать заданный массив.

## Использование

```php
$arraySort[name;type?]
```

## Параметры

| Название | Nbg    | Описание                                                                                  | Нужно |
| -------- | ------ | ----------------------------------------------------------------------------------------- |:-----:|
| название | строка | Название массива.                                                                         |  да   |
| nbg      | строка | Введите сортировку после <br /> 1. **asc** (по возрастанию) 2. **dsc** (descending) |  да   |

## Пример(ы)

```javascript
bot.command({
    name: "array-sort",
    code: `
  $arrayJoin[array;, ]
  $arraySort[array;asc]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```