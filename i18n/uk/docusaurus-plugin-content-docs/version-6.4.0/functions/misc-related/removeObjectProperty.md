---
title: '$removeObjectProperty'
description: '$removeObjectProperty will remove a property of an object.'
id: removeObjectProperty
---

`$removeObjectProperty` will remove a property of an given object.

## Використання

```php
$removeObjectProperty[property;object]
```

## Параметри

| Поле     | Тип    | Опис                  | Обов'язковий |
| -------- | ------ | --------------------- |:------------:|
| property | рядок  | Name of the property. |     так      |
| object   | object | The object.           |     так      |

## Приклад(и)

This will remove `Ferel` from the given object:

```javascript
bot.command({
    name: 'removeObjectProperty',
    code: `
  $removeObjectProperty[Ferel;{"aoimusic": "ayaka", "leref": "ferel"}]
  `
});
```
