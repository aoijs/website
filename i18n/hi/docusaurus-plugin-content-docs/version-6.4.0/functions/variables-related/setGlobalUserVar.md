---
title: '$setGlobalUserVar'
description: '$setGlobalUserVar will change the value of a given global user variable.'
id: setGlobalUserVar
---

`$setGlobalUserVar` will change the value of a given global user variable.

## प्रोयोग

```php
$setGlobalUserVar[varname;value;userID?;table?]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन        |    चाहिए     |
| ------- | -------- | ------------------- |:------------:|
| varname | स्ट्रिंग | Variable name.      |     true     |
| value   | स्ट्रिंग | New Variable value. |     true     |
| userID? | integer  | User ID.            | असत्य (नहीं) |
| table?  | स्ट्रिंग | Variable table.     | असत्य (नहीं) |

## ट्रू (हा)

This will change the value of "Example" to "This is a value" for the command author:

```javascript
bot.command({
    name: "setGlobalUserVar",
    code: `
    $setGlobalUserVar[Example;This is a value;$authorID;main]
    `
});
```