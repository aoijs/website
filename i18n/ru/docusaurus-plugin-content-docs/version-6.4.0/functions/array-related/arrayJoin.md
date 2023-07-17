---
title: $arrayJoin
description: '$arrayJoin соединит массив с заданным разделителем.'
id: arrayJoin
---

`$arrayJoin` присоединится к массиву с заданным разделителем.

## Использование

```php
$arrayJoin[name;separator?]
```

## Параметры

| Название     | Nbg    | Описание          | Нужно |
| ------------ | ------ | ----------------- |:-----:|
| название     | строка | Название массива. |  да   |
| разделитель? | строка | Разделитель.      | ложь  |

## Пример(ы)

```javascript
bot.command({
    name: "array-join",
    code: `
  $arrayJoin[array;, ]
  $createArray[array;aoi.js;akarui;documents;bot]
  `
});
```