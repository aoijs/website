---
title: '$getGuildVar'
description: '$getGuildVar will return the value of a given guild variable.'
id: getGuildVar
---

`$getGuildVar` will return the value of a given guild variable.

## الاستخدام

```php
$getGuildVar[varname;guildID?;table?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين    | مطلوب |
| -------- | ------- | --------------- |:-----:|
| varname  | string  | Variable name.  | true  |
| guildID? | Integer | Guild ID.       | false |
| table?   | string  | Variable table. | false |

## مثال

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getGuildVar",
    code: `
    $getGuildVar[Example;$guildID;main]
    `
});
```