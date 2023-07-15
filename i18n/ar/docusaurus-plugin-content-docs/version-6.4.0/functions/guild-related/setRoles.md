---
title: '$setRoles'
description: '$setRoles will set a member''s roles.'
id: setRoles
---

`$setRoles` will set a member's roles.

## الاستخدام

```php
$setRoles[guildID;memberID;reason?;...roleIDs]
```

## البارامترات

| Field      | النوع   | الديسكبربشين                                                        | مطلوب |
| ---------- | ------- | ------------------------------------------------------------------- |:-----:|
| guildID    | Integer | The ID of the guild where the users roles will be removed or added. | true  |
| memberID   | Integer | The user ID of the guild member.                                    | true  |
| reason?    | string  | The reason that will be displayed in the guild's audit logs.        | false |
| ...roleIDs | Integer | The Ids of the roles.                                               | true  |

## مثال

This will either remove or add specific roles from you:

```javascript
bot.command({
    name: 'setRoles',
    code: `
   $setRoles[$guildID;$authorID;Some reason.;roleID1;roleID2;roleID3;....]`
});
```