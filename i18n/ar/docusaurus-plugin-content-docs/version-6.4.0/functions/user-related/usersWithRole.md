---
title: '$usersWithRole'
description: '$usersWithRole will return the users who have a specific role.'
id: usersWithRole
---

`$usersWithRole` will return the users who have a specific role.

## الاستخدام

```php
$usersWithRole[roleID;guildID?;option?;sep?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين                                                                         | مطلوب |
| -------- | ------- | ------------------------------------------------------------------------------------ |:-----:|
| roleID   | Integer | The role ID.                                                                         | true  |
| guildID? | Integer | The guild ID.                                                                        | false |
| option?  | string  | How to return the users <br /> 1. **id** (default) <br /> 2. **mention** | false |
| sep?     | string  | Separator to separate multiple returned values.                                      | false |

## مثال

This will return the users of a specific role, make sure to replace roleID:

```javascript
bot.command({
    name: 'usersWithRole',
    code: `
  $usersWithRole[roleID;$guildID;id;, ]
  `
});
```
