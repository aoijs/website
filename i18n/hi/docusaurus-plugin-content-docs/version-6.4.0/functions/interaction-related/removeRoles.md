---
title: '$removeRoles'
description: '$removeRoles will remove one or multiple roles from a given member.'
id: removeRoles
---

`$removeRoles` will remove one or multiple roles from a given member.

## प्रोयोग

```php
$removeRoles[guildID;userID;reason?;...roleIDs]
```

## पैरामीटर्स

| फील्ड      | टाइप     | डिस्क्रिप्शन                                                 |    चाहिए     |
| ---------- | -------- | ------------------------------------------------------------ |:------------:|
| guildID    | integer  | The guild ID of where the user and role is located in.       |     true     |
| userID     | integer  | The ID of the user whose role will be removed.               |     true     |
| reason?    | स्ट्रिंग | The reason that will be displayed in the guild's audit logs. | असत्य (नहीं) |
| ...roleIDs | integer  | The IDs of the roles that will be removed.                   |     true     |

## ट्रू (हा)

This will remove given roles from yourself (the roles must be below the bot's highest role):

```javascript
bot.command({
    name: 'removeRoles',
    code: `
   $removeRoles[$guildID;$authorID;Some reason..;roleID;roleID;...]`
});
```