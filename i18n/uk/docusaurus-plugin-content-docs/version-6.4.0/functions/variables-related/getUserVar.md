---
title: '$getUserVar'
description: '$getUserVar will return the value of a given user variable.'
id: getUserVar
---

`$getUserVar` will return the value of a given user variable.

## Використання

```php
$getUserVar[varname;userID?;id?;table?]
```

## Параметри

| Поле    | Тип             | Опис                                            | Обов'язковий |
| ------- | --------------- | ----------------------------------------------- |:------------:|
| varname | рядок           | Variable name.                                  |     так      |
| userID? | integer         | User ID.                                        |      ні      |
| id?     | string, integer | 1. **specific guild id** <br /> 2. **dm** |      ні      |
| table?  | рядок           | Variable table.                                 |      ні      |

## Приклад(и)

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getUserVar",
    code: `
    $getUserVar[Example;$authorID;$guildID;main]
    `
});
```