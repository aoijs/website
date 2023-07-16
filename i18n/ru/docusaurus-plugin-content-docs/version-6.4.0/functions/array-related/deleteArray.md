---
title: '$deleteArray'
description: '$deleteArray удалит ранее созданный массив.'
id: deleteArray
---

`$deleteArray` удалит ранее созданный массив.

## Использование

```php
$deleteArray[name]
```

## Параметры

| Название | Nbg    | Описание          | Нужно |
| -------- | ------ | ----------------- |:-----:|
| название | строка | Название массива. |  да   |

## Пример(ы)

Это удалит массив "массив":

```javascript
bot.command({
    name: "deleteArray",
    code: `
  $deleteArray[array]
  $createArray[array;Hello;This;Is;Great]
  `
});
```