---
title: '$getMessageVar'
description: '$getMessageVar will return the value of a given message variable.'
id: getMessageVar
---

`$getMessageVar` will return the value of a given message variable.

## Використання

```php
$getMessageVar[varname;guildID?;table?]
```

## Параметри

| Поле       | Тип     | Опис            | Обов'язковий |
| ---------- | ------- | --------------- |:------------:|
| varname    | рядок   | Variable name.  |     так      |
| messageID? | integer | message ID      |      ні      |
| table?     | рядок   | Variable table. |      ні      |

## Приклад(и)

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getMessageVar",
    code: `
    $getMessageVar[Example;$messageID;main]
    `
});
```