---
title: '$getObject'
description: '$getObject will return the previously created object.'
id: getObject
---

`$getObject` will return the previously created object.

## Використання

```php
$getObject[format?]
```

## Параметри

| Поле    | Тип     | Опис                                                               | Обов'язковий |
| ------- | ------- | ------------------------------------------------------------------ |:------------:|
| format? | boolean | Format the output? <br /> 1. **true** (default) 2. **false** |      ні      |

## Приклад(и)

This will return the object created in `$createObject`:

```javascript
bot.command({
    name: "getObject",
    code: `
    $getObject[true]
    $createObject[{"hello": "bye"}]
    `
});
```