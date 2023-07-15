---
title: '$getGlobalUserVar'
description: '$getGlobalUserVar will return the value of a given global user variable.'
id: getGlobalUserVar
---

`$getGlobalUserVar` will return the value of a given global user variable.

## Використання

```php
$getGlobalUserVar[varname;userID?;table?]
```

## Параметри

| Поле    | Тип     | Опис            | Обов'язковий |
| ------- | ------- | --------------- |:------------:|
| varname | рядок   | Variable name.  |     так      |
| userID? | integer | User ID.        |      ні      |
| table?  | рядок   | Variable table. |      ні      |

## Приклад(и)

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getGlobalUserVar",
    code: `
    $getGlobalUserVar[Example;$authorID;main]
    `
});
```