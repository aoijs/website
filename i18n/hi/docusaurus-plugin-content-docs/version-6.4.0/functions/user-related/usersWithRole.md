---
title: '$usersWithRole'
description: '$usersWithRole will return the users who have a specific role.'
id: usersWithRole
---

`$usersWithRole` will return the users who have a specific role.

## प्रोयोग

```php
$usersWithRole[roleID;guildID?;option?;sep?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                                                         |    चाहिए     |
| -------- | -------- | ------------------------------------------------------------------------------------ |:------------:|
| roleID   | integer  | The role ID.                                                                         |     true     |
| guildID? | integer  | The guild ID.                                                                        | असत्य (नहीं) |
| option?  | स्ट्रिंग | How to return the users <br /> 1. **id** (default) <br /> 2. **mention** | असत्य (नहीं) |
| sep?     | स्ट्रिंग | Separator to separate multiple returned values.                                      | असत्य (नहीं) |

## ट्रू (हा)

This will return the users of a specific role, make sure to replace roleID:

```javascript
bot.command({
    name: 'usersWithRole',
    code: `
  $usersWithRole[roleID;$guildID;id;, ]
  `
});
```
