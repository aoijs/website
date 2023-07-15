---
title: '$getVar'
description: '$getVar will return the value of a global variable.'
id: getVar
---

`$getVar` will return the value of a global variable

## प्रोयोग

```php
$getVar[varname;table?]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन    |    चाहिए     |
| ------- | -------- | --------------- |:------------:|
| varname | स्ट्रिंग | Variable name.  |     true     |
| table?  | स्ट्रिंग | Variable table. | असत्य (नहीं) |

## ट्रू (हा)

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getVar",
    code: `
    $getVar[Example;main]
    `
});
```