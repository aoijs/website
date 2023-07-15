---
title: '$addApplicationCommandPermissions'
description: '$addApplicationCommandPermissions will change permissions of a slash command.'
id: addApplicationCommandPermissions
---

## प्रोयोग

```php
$addApplicationCommandPermissions[guildID/global?;id;...perms]
```

## पैरामीटर्स

| फील्ड          | टाइप            | डिस्क्रिप्शन                                                                            | चाहिए |
| -------------- | --------------- | --------------------------------------------------------------------------------------- |:-----:|
| guildID/global | string, integer | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** | true  |
| id             | integer         | Application command ID.                                                                 | true  |
| ...perms       | स्ट्रिंग        | Permissions.                                                                            | true  |

## ट्रू (हा)

This will disable the slash command for everyone in the guild ( make sure to replace "ID" with the actual slash command ID ):

```javascript
bot.command({
    name: 'addApplicationCommandPermissions',
    code: `
    $addApplicationCommandPermissions[$guildID;ID;[
  {
    id: '$guildID',
    type: 'ROLE',
    permission: false
  }
]]`
});
```
