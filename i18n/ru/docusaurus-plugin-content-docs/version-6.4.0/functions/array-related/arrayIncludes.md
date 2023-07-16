---
title: '$arrayIncludes'
description: '$arrayIncludes проверяет, существует ли в массиве конкретный элемент.'
id: arrayIncludes
---

`$arrayIncludes` проверит наличие конкретного элемента в массиве.

## Использование

```php
$arrayIncludes[name;query]
```

## Параметры

| Название | Nbg    | Описание                                                             | Нужно |
| -------- | ------ | -------------------------------------------------------------------- |:-----:|
| название | строка | Название массива.                                                    |  да   |
| запрос   | строка | Элемент, который мы будем ждать для каждого элемента внутри массива. |  да   |

## Пример(ы)

```javascript
bot.command({
    name: "array-includes",
    код: `
  $arrayIncludes[array;Leref]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
    // Он будет возвращать "false", поскольку он не содержит слова "Leref".
});
```

```javascript
bot.command({
    name: "array-includes",
    code: `
  $arrayIncludes[array;akarui]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
    // Возвращает "true", поскольку содержит слово "akarui".
});
```