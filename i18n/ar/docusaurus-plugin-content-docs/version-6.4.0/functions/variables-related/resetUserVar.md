---
title: '$resetUserVar'
description: '$resetUserVar will set a given user variable to its default value of a given guild.'
id: resetUserVar
---

`$resetUserVar` will set a given user variable to its default value of a given guild.

## الاستخدام

```php
$resetUserVar[varname;guildID?;table?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين    | مطلوب |
| -------- | ------- | --------------- |:-----:|
| varname  | string  | Variable name.  | true  |
| guildID? | Integer | Guild ID.       | false |
| table?   | string  | Variable table. | false |

## مثال

This will reset a variable called "Example":

```javascript
bot.command({
    name: "resetUserVar",
    code: `
    $resetUserVar[Example;$guildID;main]
    `
});
```