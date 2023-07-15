---
title: '$removeRole'
description: '$removeRole will remove a given role from a given member.'
id: removeRole
---

`$removeRole` will remove a given role from a given member.

## प्रोयोग

```php
$removeRole[guildID;userID;roleID;reason?]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                                                 |    चाहिए     |
| ------- | -------- | ------------------------------------------------------------ |:------------:|
| guildID | integer  | The guild ID of where the user and role is located in.       |     true     |
| userID  | integer  | The ID of the user whose role will be removed.               |     true     |
| roleID  | integer  | The ID of the role that will be removed.                     |     true     |
| reason? | स्ट्रिंग | The reason that will be displayed in the guild's audit logs. | असत्य (नहीं) |

## ट्रू (हा)

This will remove a given role from yourself (the role must be below the bot's highest role):

```javascript
bot.command({
    name: 'removeRole',
    code: `
   $removeRole[$guildID;$authorID;roleID;Some reason.]`
});
```