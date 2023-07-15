---
title: '$userRoles'
description: '$userRoles will return the roles of a specific user.'
id: userRoles
---

`$userRoles` will return the roles of a specific user.

## प्रोयोग

```php
$userRoles[userID?;guildID?;option?;sep?]
```

## पैरामीटर्स

| फील्ड    | टाइप     | डिस्क्रिप्शन                                                                                                  |    चाहिए     |
| -------- | -------- | ------------------------------------------------------------------------------------------------------------- |:------------:|
| userID?  | integer  | The user ID.                                                                                                  | असत्य (नहीं) |
| guildID? | integer  | The guild ID.                                                                                                 | असत्य (नहीं) |
| option?  | स्ट्रिंग | How to return the roles <br /> 1. **name** (default) <br /> 2. **id** <br /> 3. **mention** | असत्य (नहीं) |
| sep?     | स्ट्रिंग | Separator to separate multiple returned values.                                                               | असत्य (नहीं) |

## ट्रू (हा)

This will return your roles:

```javascript
bot.command({
    name: 'userRoles',
    code: `
  $userRoles[$authorID;$guildID;id;, ]
  `
});
```
