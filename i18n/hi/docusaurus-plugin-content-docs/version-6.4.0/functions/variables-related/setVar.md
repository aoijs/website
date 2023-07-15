---
title: '$setVar'
description: '$setVar will change the value of a given global variable.'
id: setVar
---

`$setVar` will change the value of a given global variable.

## प्रोयोग

```php
$setVar[varname;value;table?]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन        |    चाहिए     |
| ------- | -------- | ------------------- |:------------:|
| Varname | स्ट्रिंग | Variable name.      |     true     |
| Value   | स्ट्रिंग | New Variable value. |     true     |
| Table?  | स्ट्रिंग | Variable table.     | असत्य (नहीं) |

## ट्रू (हा)

This will change the value of "Example" to "This is a value":

```javascript
bot.command({
    name: "setVar",
    code: `
    $setVar[Example;This is a value;main]
    `
});
```