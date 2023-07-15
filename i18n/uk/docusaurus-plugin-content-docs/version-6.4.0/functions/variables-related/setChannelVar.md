---
title: '$setChannelVar'
description: '$setChannelVar will change the value of a given channel variable.'
id: setChannelVar
---

`$setChannelVar` will change the value of a given channel variable.

## Використання

```php
$setChannelVar[varname;value;channelID?;table?]
```

## Параметри

| Поле       | Тип     | Опис                | Обов'язковий |
| ---------- | ------- | ------------------- |:------------:|
| varname    | рядок   | Variable name.      |     так      |
| value      | рядок   | New Variable value. |     так      |
| channelID? | integer | Channel ID.         |      ні      |
| table?     | рядок   | Variable table.     |      ні      |

## Приклад(и)

This will change the value of "Example" to "This is a value":

```javascript
bot.command({
    name: "setChannelVar",
    code: `
    $setChannelVar[Example;This is a value;$channelID;main]
    `
});
```