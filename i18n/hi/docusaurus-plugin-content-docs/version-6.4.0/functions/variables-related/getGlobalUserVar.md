---
title: '$getGlobalUserVar'
description: '$getGlobalUserVar will return the value of a given global user variable.'
id: getGlobalUserVar
---

`$getGlobalUserVar` will return the value of a given global user variable.

## प्रोयोग

```php
$getGlobalUserVar[varname;userID?;table?]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन    |    चाहिए     |
| ------- | -------- | --------------- |:------------:|
| varname | स्ट्रिंग | Variable name.  |     true     |
| userID? | integer  | User ID.        | असत्य (नहीं) |
| table?  | स्ट्रिंग | Variable table. | असत्य (नहीं) |

## ट्रू (हा)

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getGlobalUserVar",
    code: `
    $getGlobalUserVar[Example;$authorID;main]
    `
});
```