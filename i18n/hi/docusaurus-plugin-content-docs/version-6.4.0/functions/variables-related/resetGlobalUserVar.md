---
title: '$resetGlobalUserVar'
description: '$resetGlobalUserVar will set a given global user variable to its default value.'
id: resetGlobalUserVar
---

`$resetGlobalUserVar` will set a given global user variable to its default value.

## प्रोयोग

```php
$resetGlobalUserVar[varname;table?]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन    |    चाहिए     |
| ------- | -------- | --------------- |:------------:|
| varname | स्ट्रिंग | Variable name.  |     true     |
| table?  | स्ट्रिंग | Variable table. | असत्य (नहीं) |

## ट्रू (हा)

This will reset a variable called "Example":

```javascript
bot.command({
    name: "resetGlobalUserVar",
    code: `
    $resetGlobalUserVar[Example;main]
    `
});
```