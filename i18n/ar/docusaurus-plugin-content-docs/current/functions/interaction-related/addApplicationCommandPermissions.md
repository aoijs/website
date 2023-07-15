---
title: '$addApplicationCommandPermissions'
description: '$addApplicationCommandPermissions will change permissions of a slash command.'
id: addApplicationCommandPermissions
---

## الاستخدام

```php
$addApplicationCommandPermissions[guildID/global?;id;...perms]
```

## البارامترات

| Field          | النوع           | الديسكبربشين                                                                            | مطلوب |
| -------------- | --------------- | --------------------------------------------------------------------------------------- |:-----:|
| guildID/global | string, integer | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** | true  |
| id             | Integer         | Application command ID.                                                                 | true  |
| ...perms       | string          | Permissions.                                                                            | true  |

## مثال

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
