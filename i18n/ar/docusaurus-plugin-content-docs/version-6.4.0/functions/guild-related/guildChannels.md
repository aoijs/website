---
title: '$guildChannels'
description: '$guildChannels will return all channels of a specific guild.'
id: guildChannels
---

`$guildChannels` will return all channels of a specific guild.

## الاستخدام

```php
$guildChannels[guildID?;option?;sep?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                                                                                                  | مطلوب |
| -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |:-----:|
| guildID? | Integer | The ID of the guild.                                                                                                          | false |
| option?  | string  | The option on how to return the channel <br /> 1. **name** (default) <br /> 2. **id** <br /> 3. **mention** | false |
| sep?     | string  | Separator to separate multiple returned values.                                                                               | false |

## مثال

This will return all channels of your guild:

```javascript
bot.command({
    name: 'guildChannels',
    code: `
  $guildChannels[$guildID;mention;, ]
  `
});
```
