---
title: '$giveRole'
description: '$giveRole will give an specific user a specific role.'
id: giveRole
---

`$giveRole` will give an specific user a specific role.

## प्रोयोग

```php
$giveRole[guildID;userID;roleID;reason?]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                                                 |    चाहिए     |
| ------- | -------- | ------------------------------------------------------------ |:------------:|
| guildID | integer  | Of which guild the member should receive roles of.           |     true     |
| userID  | integer  | The user ID of the guild member.                             |     true     |
| roleID  | integer  | The ID of the role to give.                                  |     true     |
| reason? | स्ट्रिंग | The reason that will be displayed in the guild's audit logs. | असत्य (नहीं) |

Please note that the bots **highest** role must be above the role you're trying to assign.

## ट्रू (हा)

This will assign you a role called "Admin" (if present):

```javascript
bot.command({
    name: 'giveRole',
    code: `
  $giveRole[$guildID;$authorID;$findRole[Admin];Some reason.]
  `
});
```