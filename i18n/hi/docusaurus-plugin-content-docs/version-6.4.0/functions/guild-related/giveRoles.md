---
title: '$giveRoles'
description: '$giveRoles will give an specific user multiple or one specific role(s).'
id: giveRoles
---

`$giveRoles` will give an specific user multiple or one specific role(s).

## प्रोयोग

```php
$giveRoles[guildID;userID;reason?;...roles]
```

## पैरामीटर्स

| फील्ड   | टाइप     | डिस्क्रिप्शन                                                 |    चाहिए     |
| ------- | -------- | ------------------------------------------------------------ |:------------:|
| guildID | integer  | Of which guild the member should receive roles of.           |     true     |
| userID  | integer  | The user ID of the guild member.                             |     true     |
| reason? | स्ट्रिंग | The reason that will be displayed in the guild's audit logs. | असत्य (नहीं) |
| roles   | integer  | The IDs of the roles to give.                                |     true     |

Please note that the bots **highest** role must be above the role you're trying to assign.

## ट्रू (हा)

This will assign you two role called "Admin" and "Moderator" (if present):

```javascript
bot.command({
    name: 'giveRoles',
    code: `
  $giveRoles[$guildID;$authorID;Some reason.;$findRole[Admin];$findRole[Moderator]]
  `
});
```