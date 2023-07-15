---
title: '$setGuildVar'
description: '$setGuildVar will change the value of a given guild variable.'
id: setGuildVar
---

`$setGuildVar` will change the value of a given guild variable.

## Використання

```php
$setGuildVar[varname;value;guildID?;table?]
```

## Параметри

| Поле     | Тип     | Опис                | Обов'язковий |
| -------- | ------- | ------------------- |:------------:|
| varname  | рядок   | Variable name.      |     так      |
| value    | рядок   | New Variable value. |     так      |
| guildID? | integer | Guild ID.           |      ні      |
| table?   | рядок   | Variable table.     |      ні      |

## Приклад(и)

This will change the value of "Example" to "This is a value":

```javascript
bot.command({
    name: "setGuildVar",
    code: `
    $setGuildVar[Example;This is a value;$guildID;main]
    `
});
```