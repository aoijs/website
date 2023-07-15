---
title: '$isValidObject'
description: '$isValidObject checks if the given json is a valid object.'
id: isValidObject
---

`$isValidObject` checks if the given json is a valid object.

## Використання

```php
$isValidObject[object]
```

## Параметри

| Поле   | Тип    | Опис         | Обов'язковий |
| ------ | ------ | ------------ |:------------:|
| object | object | JSON object. |     так      |

## Приклад(и)

This will return `true` as the given object is a valid JSON object:

```javascript
bot.command({
    name: 'isValidObject',
    code: `
  $isValidObject[{"name":"Leref", "aoijs":"nice"}]
  `
});
```
