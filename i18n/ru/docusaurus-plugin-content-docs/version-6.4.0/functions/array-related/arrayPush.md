---
title: '$arrayPush'
description: '$arrayPush добавит заданные элементы в массив.'
id: arrayPush
---

`$arrayPush` добавит заданные элементы в массив.

## Использование

```php
$arrayPush[...elements]
```

## Параметры

| Название    | Nbg    | Описание                 | Нужно |
| ----------- | ------ | ------------------------ |:-----:|
| ...элементы | строка | Элементы для добавления. |  да   |

## Пример(ы)

```javascript
bot.command({
    name: "array-push",
    code: `
  $arrayPush[array;Leref;Ayaka;Ferel]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```