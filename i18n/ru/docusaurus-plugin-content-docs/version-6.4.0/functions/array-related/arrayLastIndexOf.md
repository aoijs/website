---
title: '$arrayLastIndexOf'
description: '$arrayLastIndexOf вернет индекс последнего найденного элемента запроса.'
id: arrayLastIndexOf
---

`$arrayLastIndexOf` вернет индекс последнего найденного элемента запроса.

## Использование

```php
$arrayLastIndexOf[name;query]
```

## Параметры

| Название | Nbg    | Описание                                                             | Нужно |
| -------- | ------ | -------------------------------------------------------------------- |:-----:|
| название | строка | Название массива.                                                    |  да   |
| запрос   | строка | Элемент, который мы будем ждать для каждого элемента внутри массива. |  да   |

## Пример(ы)

```javascript
bot.command({
    name: "array-indexof",
    код: `
  $arrayLastIndexOf[array;akarui]
  $createArray[array;aoi.js;akarui;akarui;documents;bot]
  `
    // Он будет возвращать "3" как слово "akarui" в 3-й позиции массива.
});
```