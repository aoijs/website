---
title: '$getObjectProperty'
description: '$getObjectProperty will return a object property of a given object.'
id: getObjectProperty
---

`$getObjectProperty` will return a object property of a given object.

## Використання

```php
$getObjectProperty[name]
```

## Параметри

| Поле  | Тип   | Опис                         | Обов'язковий |
| ----- | ----- | ---------------------------- |:------------:|
| назва | рядок | Name of the object property. |     так      |

## Приклад(и)

This will return the object property of "hello" created in `$createObject`:

```javascript
bot.command({
    name: "getObjectProperty",
    code: `
    $getObjectProperty[hello]
    $createObject[{"hello": "bye"}]
    `
});
```