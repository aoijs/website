---
title: '$guildHighestRole'
description: '$guildHighestRole will return the highest guild role of a specific guild.'
id: guildHighestRole
---

`$guildHighestRole` will return the highest guild role of a specific guild.

## प्रोयोग

```php
$guildHighestRole[guildID?;option?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                                                                                               |    चाहिए     |
| -------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |:------------:|
| guildID? | integer  | The ID of the guild.                                                                                                       | असत्य (नहीं) |
| option?  | स्ट्रिंग | The option on how to return the role <br /> 1. **name** (default) <br /> 2. **id** <br /> 3. **mention** | असत्य (नहीं) |

## ट्रू (हा)

This will return the name of the highest role of your guild:

```javascript
bot.command({
    name: 'guildHighestRole',
    code: `
  $guildHighestRole[$guildID;name]
  `
});
```
