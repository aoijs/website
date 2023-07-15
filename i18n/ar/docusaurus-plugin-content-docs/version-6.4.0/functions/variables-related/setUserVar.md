---
title: '$setUserVar'
description: '$setUserVar will change the value of a given user variable.'
id: setUserVar
---

`$setUserVar` will change the value of a given user variable.

## الاستخدام

```php
$setUserVar[varname;value;userID?;id?;table?]
```

## البارامترات

| Field   | النوع   | الديسكبربشين                                    | مطلوب |
| ------- | ------- | ----------------------------------------------- |:-----:|
| varname | string  | Variable name.                                  | true  |
| value   | string  | New Variable value.                             | true  |
| userID? | Integer | User ID.                                        | false |
| id?     | string  | 1. **specific guild id** <br /> 2. **dm** | false |
| table?  | string  | Variable table.                                 | false |

## مثال

This will change the value of "Example" to "This is a value":

```javascript
bot.command({
    name: "setUserVar",
    code: `
    $setUserVar[Example;This is a value;$authorID;$guildID;main]
    `
});
```