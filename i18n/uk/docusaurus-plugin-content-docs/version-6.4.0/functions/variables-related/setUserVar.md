---
title: '$setUserVar'
description: '$setUserVar will change the value of a given user variable.'
id: setUserVar
---

`$setUserVar` will change the value of a given user variable.

## Використання

```php
$setUserVar[varname;value;userID?;id?;table?]
```

## Параметри

| Поле    | Тип     | Опис                                            | Обов'язковий |
| ------- | ------- | ----------------------------------------------- |:------------:|
| varname | рядок   | Variable name.                                  |     так      |
| value   | рядок   | New Variable value.                             |     так      |
| userID? | integer | User ID.                                        |      ні      |
| id?     | рядок   | 1. **specific guild id** <br /> 2. **dm** |      ні      |
| table?  | рядок   | Variable table.                                 |      ні      |

## Приклад(и)

This will change the value of "Example" to "This is a value":

```javascript
bot.command({
    name: "setUserVar",
    code: `
    $setUserVar[Example;This is a value;$authorID;$guildID;main]
    `
});
```