---
title: $createObject
description: '$createObject создаст новый объект.'
id: createObject
---

`$createObject` создаст новый объект.

## Использование

```php
$createObject[object]
```

## Параметры

| Название | Nbg    | Описание     | Нужно |
| -------- | ------ | ------------ |:-----:|
| объект   | объект | Объект Json. |  да   |

## Пример(ы)

```javascript
bot.command({
    name: "createObject",
    code: `
  $createObject[{
    "hello": "bye",
    "bye": "Привет"
  }]
  `
});
```