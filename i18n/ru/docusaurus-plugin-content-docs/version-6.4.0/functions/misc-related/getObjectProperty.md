---
title: '$getObjectProperty'
description: '$getObjectProperty возвращает свойство объекта данного объекта.'
id: getObjectProperty
---

`$getObjectProperty` возвращает свойство объекта данного объекта.

## Использование

```php
$getObjectProperty[name]
```

## Параметры

| Название | Nbg    | Описание              | Нужно |
| -------- | ------ | --------------------- |:-----:|
| название | строка | Имя свойства объекта. |  да   |

## Пример(ы)

Свойство объекта "hello", созданного в `$createObject`:

```javascript
bot.command({
    name: "getObjectProperty",
    code: `
    $getObjectProperty[hello]
    $createObject[{"hello": "bye"}]
    `
});
```