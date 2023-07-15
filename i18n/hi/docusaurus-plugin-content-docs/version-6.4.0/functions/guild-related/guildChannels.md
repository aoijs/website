---
title: '$guildChannels'
description: '$guildChannels will return all channels of a specific guild.'
id: guildChannels
---

`$guildChannels` will return all channels of a specific guild.

## प्रोयोग

```php
$guildChannels[guildID?;option?;sep?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                                                                                                  |    चाहिए     |
| -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------- |:------------:|
| guildID? | integer  | The ID of the guild.                                                                                                          | असत्य (नहीं) |
| option?  | स्ट्रिंग | The option on how to return the channel <br /> 1. **name** (default) <br /> 2. **id** <br /> 3. **mention** | असत्य (नहीं) |
| sep?     | स्ट्रिंग | Separator to separate multiple returned values.                                                                               | असत्य (नहीं) |

## ट्रू (हा)

This will return all channels of your guild:

```javascript
bot.command({
    name: 'guildChannels',
    code: `
  $guildChannels[$guildID;mention;, ]
  `
});
```
