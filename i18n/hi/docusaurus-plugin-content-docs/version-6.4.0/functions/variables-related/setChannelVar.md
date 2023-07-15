---
title: '$setChannelVar'
description: '$setChannelVar will change the value of a given channel variable.'
id: setChannelVar
---

`$setChannelVar` will change the value of a given channel variable.

## प्रोयोग

```php
$setChannelVar[varname;value;channelID?;table?]
```

## पैरामीटर्स

| फील्ड      | टाइप     | डिस्क्रिप्शन        |    चाहिए     |
| ---------- | -------- | ------------------- |:------------:|
| varname    | स्ट्रिंग | Variable name.      |     true     |
| value      | स्ट्रिंग | New Variable value. |     true     |
| channelID? | integer  | Channel ID.         | असत्य (नहीं) |
| table?     | स्ट्रिंग | Variable table.     | असत्य (नहीं) |

## ट्रू (हा)

This will change the value of "Example" to "This is a value":

```javascript
bot.command({
    name: "setChannelVar",
    code: `
    $setChannelVar[Example;This is a value;$channelID;main]
    `
});
```