---
title: '$usersBanned'
description: '$usersBanned will return the banned users of a guild.'
id: usersBanned
---

`$usersBanned` will return the banned users of a guild.

## प्रोयोग

```php
$usersBanned[guildID?;force?;option?;sep?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                                                                                             |    चाहिए     |
| -------- | -------- | ------------------------------------------------------------------------------------------------------------------------ |:------------:|
| guildID? | integer  | The guild ID.                                                                                                            | असत्य (नहीं) |
| force?   | boolean  | 1. **true** <br /> 2. **false** (default)                                                                          | असत्य (नहीं) |
| option?  | स्ट्रिंग | How to return the banned users <br /> 1. **id** (default) <br /> 1. **username** <br /> 1. **mention** | असत्य (नहीं) |
| sep?     | स्ट्रिंग | Separator to separate multiple returned values.                                                                          | असत्य (नहीं) |

## ट्रू (हा)

This will return the banned users of your guild as mention in an embed:

```javascript
bot.command({
    name: 'usersBanned',
    code: `
$description[$usersBanned[$guildID;false;mention;, ]]
  `
});
```
