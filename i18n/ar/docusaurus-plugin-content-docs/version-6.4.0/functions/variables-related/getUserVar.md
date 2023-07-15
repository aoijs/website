---
title: '$getUserVar'
description: '$getUserVar will return the value of a given user variable.'
id: getUserVar
---

`$getUserVar` will return the value of a given user variable.

## الاستخدام

```php
$getUserVar[varname;userID?;id?;table?]
```

## البارامترات

| Field   | النوع           | الديسكبربشين                                    | مطلوب |
| ------- | --------------- | ----------------------------------------------- |:-----:|
| varname | string          | Variable name.                                  | true  |
| userID? | Integer         | User ID.                                        | false |
| id?     | string, integer | 1. **specific guild id** <br /> 2. **dm** | false |
| table?  | string          | Variable table.                                 | false |

## مثال

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getUserVar",
    code: `
    $getUserVar[Example;$authorID;$guildID;main]
    `
});
```