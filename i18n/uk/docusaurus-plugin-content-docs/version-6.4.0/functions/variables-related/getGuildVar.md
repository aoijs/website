---
title: '$getGuildVar'
description: '$getGuildVar will return the value of a given guild variable.'
id: getGuildVar
---

`$getGuildVar` will return the value of a given guild variable.

## Використання

```php
$getGuildVar[varname;guildID?;table?]
```

## Параметри

| Поле     | Тип     | Опис            | Обов'язковий |
| -------- | ------- | --------------- |:------------:|
| varname  | рядок   | Variable name.  |     так      |
| guildID? | integer | Guild ID.       |      ні      |
| table?   | рядок   | Variable table. |      ні      |

## Приклад(и)

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getGuildVar",
    code: `
    $getGuildVar[Example;$guildID;main]
    `
});
```