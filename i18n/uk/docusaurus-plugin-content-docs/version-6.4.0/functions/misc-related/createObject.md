---
title: '$createObject'
description: '$createObject створить новий об''єкт.'
id: createObject
---

`$createObject` створить новий об'єкт.

## Використання

```php
$createObject[object]
```

## Параметри

| Поле   | Тип    | Опис         | Обов'язковий |
| ------ | ------ | ------------ |:------------:|
| об'єкт | об'єкт | Json об'єкт. |     так      |

## Приклад(и)

```javascript
bot.command({
    name: "createObject",
    код: `
  $createObject[{
    "hello": "bye",
    "bye": "hello"
  }]
  `
});
```