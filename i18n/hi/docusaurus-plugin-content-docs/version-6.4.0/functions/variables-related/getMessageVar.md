---
title: '$getMessageVar'
description: '$getMessageVar will return the value of a given message variable.'
id: getMessageVar
---

`$getMessageVar` will return the value of a given message variable.

## प्रोयोग

```php
$getMessageVar[varname;guildID?;table?]
```

## पैरामीटर्स

| फील्ड      | टाइप     | डिस्क्रिप्शन    |    चाहिए     |
| ---------- | -------- | --------------- |:------------:|
| varname    | स्ट्रिंग | Variable name.  |     true     |
| messageID? | integer  | message ID      | असत्य (नहीं) |
| table?     | स्ट्रिंग | Variable table. | असत्य (नहीं) |

## ट्रू (हा)

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getMessageVar",
    code: `
    $getMessageVar[Example;$messageID;main]
    `
});
```