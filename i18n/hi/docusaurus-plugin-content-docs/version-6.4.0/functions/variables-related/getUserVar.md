---
title: '$getUserVar'
description: '$getUserVar will return the value of a given user variable.'
id: getUserVar
---

`$getUserVar` will return the value of a given user variable.

## प्रोयोग

```php
$getUserVar[varname;userID?;id?;table?]
```

## पैरामीटर्स

| फील्ड   | टाइप            | डिस्क्रिप्शन                                    |    चाहिए     |
| ------- | --------------- | ----------------------------------------------- |:------------:|
| varname | स्ट्रिंग        | Variable name.                                  |     true     |
| userID? | integer         | User ID.                                        | असत्य (नहीं) |
| id?     | string, integer | 1. **specific guild id** <br /> 2. **dm** | असत्य (नहीं) |
| table?  | स्ट्रिंग        | Variable table.                                 | असत्य (नहीं) |

## ट्रू (हा)

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getUserVar",
    code: `
    $getUserVar[Example;$authorID;$guildID;main]
    `
});
```