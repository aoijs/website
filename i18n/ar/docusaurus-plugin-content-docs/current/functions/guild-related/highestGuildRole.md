---
title: '$guildHighestRole'
description: '$guildHighestRole will return the highest guild role of a specific guild.'
id: guildHighestRole
---

`$guildHighestRole` will return the highest guild role of a specific guild.

## الاستخدام

```php
$guildHighestRole[guildID?;option?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                                                                                               | مطلوب |
| -------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |:-----:|
| guildID? | Integer | The ID of the guild.                                                                                                       | false |
| option?  | string  | The option on how to return the role <br /> 1. **name** (default) <br /> 2. **id** <br /> 3. **mention** | false |

## مثال

This will return the name of the highest role of your guild:

```javascript
bot.command({
    name: 'guildHighestRole',
    code: `
  $guildHighestRole[$guildID;name]
  `
});
```
