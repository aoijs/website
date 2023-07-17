---
title: $arrayLength
description: '$arrayLength возвращает длину заданного массива.'
id: arrayLength
---

`$arrayLength` возвращает длину заданного массива.

## Использование

```php
$arrayLength[name]
```

## Параметры

| Название | Nbg    | Описание          | Нужно |
| -------- | ------ | ----------------- |:-----:|
| название | строка | Название массива. |  да   |

## Пример(ы)

```javascript
bot.command({
    name: "длина массива",
    code: `
  $arrayLength[array]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```