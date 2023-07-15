---
title: '$addObjectProperty'
description: '$addObjectProperty will add a property to an existing object.'
id: addObjectProperty
---

`$addObjectProperty` will add a property to an existing object.

## Використання

```php
$addObjectProperty[name;value]
```

## Параметри

| Поле  | Тип   | Опис                   | Обов'язковий |
| ----- | ----- | ---------------------- |:------------:|
| назва | рядок | Name of the property.  |     так      |
| value | рядок | Value of the property. |     так      |

## Приклад(и)

This will return `Ferel` from the `Leref` Property:

```javascript
bot.command({
    name: 'addObjectProperty',
    code: `
  $getObjectProperty[Leref]
  $addObjectProperty[Leref;Ferel]
  $createObject[{}]
  `
});
```
