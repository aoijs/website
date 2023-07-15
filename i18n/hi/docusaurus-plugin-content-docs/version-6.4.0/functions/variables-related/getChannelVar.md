---
title: '$getChannelVar'
description: '$getChannelVar will return the value of a given channel variable.'
id: getChannelVar
---

`$getChannelVar` will return the value of a given channel variable.

## प्रोयोग

```php
$getChannelVar[varname;channelID?;table?]
```

## पैरामीटर्स

| फील्ड      | टाइप     | डिस्क्रिप्शन    |    चाहिए     |
| ---------- | -------- | --------------- |:------------:|
| varname    | स्ट्रिंग | Variable name.  |     true     |
| channelID? | integer  | Channel ID.     | असत्य (नहीं) |
| table?     | स्ट्रिंग | Variable table. | असत्य (नहीं) |

## ट्रू (हा)

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getChannelVar",
    code: `
    $getChannelVar[Example;$channelID;main]
    `
});
```