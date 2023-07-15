---
title: '$resetUserVar'
description: '$resetUserVar will set a given user variable to its default value of a given guild.'
id: resetUserVar
---

`$resetUserVar` will set a given user variable to its default value of a given guild.

## Використання

```php
$resetUserVar[varname;guildID?;table?]
```

## Параметри

| Поле     | Тип     | Опис            | Обов'язковий |
| -------- | ------- | --------------- |:------------:|
| varname  | рядок   | Variable name.  |     так      |
| guildID? | integer | Guild ID.       |      ні      |
| table?   | рядок   | Variable table. |      ні      |

## Приклад(и)

This will reset a variable called "Example":

```javascript
bot.command({
    name: "resetUserVar",
    code: `
    $resetUserVar[Example;$guildID;main]
    `
});
```