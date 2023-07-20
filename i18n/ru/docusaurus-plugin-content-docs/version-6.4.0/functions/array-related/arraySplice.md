---
title: '$arraySplice'
description: '$arraySplice будет вырезать элементы из массива.'
id: arraySplice
---

`$arraySplice` соединит предметы из данного массива.

## Использование

```php
$arraySplice[name;index;amount;...elements]
```

## Параметры

| Название    | Nbg    | Описание                  | Нужно |
| ----------- | ------ | ------------------------- |:-----:|
| название    | строка | Название массива.         |  да   |
| индекс      | число  | Индекс элемента.          |  да   |
| сумма       | число  | Сумма для копирования.    |  да   |
| ...элементы | строка | Элементы для копирования. |  да   |

## Пример(ы)

```javascript
bot.command({
    name: "array-splice",
    code: `
  $arraySplice[array;2;3]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```