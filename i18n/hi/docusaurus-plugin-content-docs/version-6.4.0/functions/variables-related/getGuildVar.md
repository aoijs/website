---
title: '$getGuildVar'
description: '$getGuildVar will return the value of a given guild variable.'
id: getGuildVar
---

`$getGuildVar` will return the value of a given guild variable.

## प्रोयोग

```php
$getGuildVar[varname;guildID?;table?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन    |    चाहिए     |
| -------- | -------- | --------------- |:------------:|
| varname  | स्ट्रिंग | Variable name.  |     true     |
| guildID? | integer  | Guild ID.       | असत्य (नहीं) |
| table?   | स्ट्रिंग | Variable table. | असत्य (नहीं) |

## ट्रू (हा)

This will return the value of a variable called "Example":

```javascript
bot.command({
    name: "getGuildVar",
    code: `
    $getGuildVar[Example;$guildID;main]
    `
});
```