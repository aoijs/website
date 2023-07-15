---
title: '$guildRoles'
description: '$guildRoles will return all roles of a specific guild.'
id: guildRoles
---

`$guildRoles` will return all roles of a specific guild.

## الاستخدام

```php
$guildRoles[guildID?;option?;sep?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                                                                                                | مطلوب |
| -------- | ------- | --------------------------------------------------------------------------------------------------------------------------- |:-----:|
| guildID? | Integer | The ID of the guild.                                                                                                        | false |
| option?  | string  | The option on how to return the roles <br /> 1. **name** (default) <br /> 2. **id** <br /> 3. **mention** | false |
| sep?     | string  | Separator to separate multiple returned values.                                                                             | false |

## مثال

This will return all roles of your guild:

```javascript
bot.command({
    name: 'guildRoles',
    code: `
  $description[$guildRoles[$guildID;name;, ]]
  `
});
```
