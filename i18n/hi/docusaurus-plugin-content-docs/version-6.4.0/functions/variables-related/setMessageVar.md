---
title: '$setMessageVar'
description: '$setMessageVar will change the value of a given message variable.'
id: setMessageVar
---

`$setMessageVar` will change the value of a given message variable.

## प्रोयोग

```php
$setMessageVar[varname;value;messageID?;table?]
```

## पैरामीटर्स

| फील्ड      | टाइप     | डिस्क्रिप्शन        |    चाहिए     |
| ---------- | -------- | ------------------- |:------------:|
| varname    | स्ट्रिंग | Variable name.      |     true     |
| value      | स्ट्रिंग | New Variable value. |     true     |
| messageID? | integer  | Message ID.         | असत्य (नहीं) |
| table?     | स्ट्रिंग | Variable table.     | असत्य (नहीं) |

## ट्रू (हा)

This will change the value of "Example" to "This is a value":

```javascript
bot.command({
    name: "setMessageVar",
    code: `
    $setMessageVar[Example;This is a value;$messageID;main]
    `
});
```