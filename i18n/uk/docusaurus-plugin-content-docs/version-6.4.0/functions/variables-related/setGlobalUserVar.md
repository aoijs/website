---
title: '$setGlobalUserVar'
description: '$setGlobalUserVar will change the value of a given global user variable.'
id: setGlobalUserVar
---

`$setGlobalUserVar` will change the value of a given global user variable.

## Використання

```php
$setGlobalUserVar[varname;value;userID?;table?]
```

## Параметри

| Поле    | Тип     | Опис                | Обов'язковий |
| ------- | ------- | ------------------- |:------------:|
| varname | рядок   | Variable name.      |     так      |
| value   | рядок   | New Variable value. |     так      |
| userID? | integer | User ID.            |      ні      |
| table?  | рядок   | Variable table.     |      ні      |

## Приклад(и)

This will change the value of "Example" to "This is a value" for the command author:

```javascript
bot.command({
    name: "setGlobalUserVar",
    code: `
    $setGlobalUserVar[Example;This is a value;$authorID;main]
    `
});
```