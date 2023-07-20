---
title: '$arrayShift'
description: '$arrayShift вернет первый элемент из данного массива.'
id: arrayShift
---

`$arrayShift` выведет первый предмет из данного массива.

## Использование

```php
$arrayShift[name]
```

## Параметры

| Название | Nbg    | Описание          | Нужно |
| -------- | ------ | ----------------- |:-----:|
| название | строка | Название массива. |  да   |

## Пример(ы)

```javascript
bot.command({
    name: "array-shift",
    code: `
  $arrayShift[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```