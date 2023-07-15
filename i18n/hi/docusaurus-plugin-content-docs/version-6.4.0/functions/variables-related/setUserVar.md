---
title: '$setUserVar'
description: '$setUserVar will change the value of a given user variable.'
id: setUserVar
---

`$setUserVar` will change the value of a given user variable.

## प्रोयोग

```php
$setUserVar[varname;value;userID?;id?;table?]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                                    |    चाहिए     |
| ------- | -------- | ----------------------------------------------- |:------------:|
| varname | स्ट्रिंग | Variable name.                                  |     true     |
| value   | स्ट्रिंग | New Variable value.                             |     true     |
| userID? | integer  | User ID.                                        | असत्य (नहीं) |
| id?     | स्ट्रिंग | 1. **specific guild id** <br /> 2. **dm** | असत्य (नहीं) |
| table?  | स्ट्रिंग | Variable table.                                 | असत्य (नहीं) |

## ट्रू (हा)

This will change the value of "Example" to "This is a value":

```javascript
bot.command({
    name: "setUserVar",
    code: `
    $setUserVar[Example;This is a value;$authorID;$guildID;main]
    `
});
```