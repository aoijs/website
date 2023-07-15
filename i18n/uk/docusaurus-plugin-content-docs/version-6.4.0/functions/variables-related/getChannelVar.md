---
title: '$getChannelVar'
description: '$getChannelVar will return the value of a given channel variable.'
id: getChannelVar
---

`$getChannelVar` will return the value of a given channel variable.

## Використання

```php
$getChannelVar[varname;channelID?;table?]
```

## Параметри

| Поле       | Тип     | Опис            | Обов'язковий |
| ---------- | ------- | --------------- |:------------:|
| varname    | рядок   | Variable name.  |     так      |
| channelID? | integer | Channel ID.     |      ні      |
| table?     | рядок   | Variable table. |      ні      |

## Приклад(и)

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getChannelVar",
    code: `
    $getChannelVar[Example;$channelID;main]
    `
});
```