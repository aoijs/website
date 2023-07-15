---
title: '$setRoles'
description: '$setRoles will set a member''s roles.'
id: setRoles
---

`$setRoles` will set a member's roles.

## प्रोयोग

```php
$setRoles[guildID;memberID;reason?;...roleIDs]
```

## पैरामीटर्स

| फील्ड      | टाइप     | डिस्क्रिप्शन                                                        |    चाहिए     |
| ---------- | -------- | ------------------------------------------------------------------- |:------------:|
| guildID    | integer  | The ID of the guild where the users roles will be removed or added. |     true     |
| memberID   | integer  | The user ID of the guild member.                                    |     true     |
| reason?    | स्ट्रिंग | The reason that will be displayed in the guild's audit logs.        | असत्य (नहीं) |
| ...roleIDs | integer  | The Ids of the roles.                                               |     true     |

## ट्रू (हा)

This will either remove or add specific roles from you:

```javascript
bot.command({
    name: 'setRoles',
    code: `
   $setRoles[$guildID;$authorID;Some reason.;roleID1;roleID2;roleID3;....]`
});
```