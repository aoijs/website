---
title: '$resetUserVar'
description: '$resetUserVar will set a given user variable to its default value of a given guild.'
id: resetUserVar
---

`$resetUserVar` will set a given user variable to its default value of a given guild.

## प्रोयोग

```php
$resetUserVar[varname;guildID?;table?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन    |    चाहिए     |
| -------- | -------- | --------------- |:------------:|
| varname  | स्ट्रिंग | Variable name.  |     true     |
| guildID? | integer  | Guild ID.       | असत्य (नहीं) |
| table?   | स्ट्रिंग | Variable table. | असत्य (नहीं) |

## ट्रू (हा)

This will reset a variable called "Example":

```javascript
bot.command({
    name: "resetUserVar",
    code: `
    $resetUserVar[Example;$guildID;main]
    `
});
```