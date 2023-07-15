---
title: '$createObject'
description: '$createObject will create a new object.'
id: createObject
---

`$createObject` will create a new object.

## Використання

```php
$createObject[object]
```

## Параметри

| Поле   | Тип    | Опис         | Обов'язковий |
| ------ | ------ | ------------ |:------------:|
| object | object | Json object. |     так      |

## Приклад(и)

```javascript
bot.command({
    name: "createObject",
    code: `
  $createObject[{
    "hello": "bye",
    "bye": "hello"
  }]
  `
});
```