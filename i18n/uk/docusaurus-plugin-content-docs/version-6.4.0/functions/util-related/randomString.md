---
title: '$randomString'
description: '$randomString will generate a random string.'
id: randomString
---

`$randomString` will generate a random string.

## Використання

```php
$randomString[range;diffExec?]
```

## Параметри

| Поле      | Тип     | Опис                                  | Обов'язковий |
| --------- | ------- | ------------------------------------- |:------------:|
| range     | number  | Range of the random generated string. |     так      |
| diffExec? | boolean |                                       |      ні      |

## Приклад(и)

This will return a random string of twenty characters:

```javascript
bot.command({
    name: 'randomString',
    code: `
  $randomString[20]
  `
});
```
