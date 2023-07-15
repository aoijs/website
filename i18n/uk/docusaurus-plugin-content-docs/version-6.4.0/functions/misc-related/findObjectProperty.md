---
title: '$findObjectProperty'
description: '$findObjectProperty will search for a given property of an object and return it.'
id: findObjectProperty
---

`$findObjectProperty` will search for a given property of an object and return it.

## Використання

```php
$findObjectProperty[property;object]
```

## Параметри

| Поле     | Тип    | Опис                  | Обов'язковий |
| -------- | ------ | --------------------- |:------------:|
| property | рядок  | Name of the property. |     так      |
| object   | object | The object to search. |     так      |

## Приклад(и)

This will return `{"object": "property"}` as it was able to find "object":

```javascript
bot.command({
    name: 'findObjectProperty',
    code: `
  $findObjectProperty[object;{"aoijs": "leref", "object": "property"}]
  `
});
```
