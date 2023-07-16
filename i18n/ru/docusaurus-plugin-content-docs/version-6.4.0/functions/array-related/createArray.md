---
title: '$createArray'
description: '$createArray создаст новый массив с заданными элементами.'
id: createArray
---

`$createArray` создаст новый массив с заданными элементами.

## Использование

```php
$createArray[name;...elements]
```

## Параметры

| Название    | Nbg    | Описание                 | Нужно |
| ----------- | ------ | ------------------------ |:-----:|
| название    | строка | Название массива.        |  да   |
| ...элементы | строка | Элементы для добавления. |  да   |

## Пример(ы)

```javascript
bot.command({
    name: "array-create",
    code: `
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```