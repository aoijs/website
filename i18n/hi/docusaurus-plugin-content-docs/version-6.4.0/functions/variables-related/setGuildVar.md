---
title: '$setGuildVar'
description: '$setGuildVar will change the value of a given guild variable.'
id: setGuildVar
---

`$setGuildVar` will change the value of a given guild variable.

## प्रोयोग

```php
$setGuildVar[varname;value;guildID?;table?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन        |    चाहिए     |
| -------- | -------- | ------------------- |:------------:|
| varname  | स्ट्रिंग | Variable name.      |     true     |
| value    | स्ट्रिंग | New Variable value. |     true     |
| guildID? | integer  | Guild ID.           | असत्य (नहीं) |
| table?   | स्ट्रिंग | Variable table.     | असत्य (नहीं) |

## ट्रू (हा)

This will change the value of "Example" to "This is a value":

```javascript
bot.command({
    name: "setGuildVar",
    code: `
    $setGuildVar[Example;This is a value;$guildID;main]
    `
});
```