---
title: '$giveRoles'
description: '$giveRoles will give an specific user multiple or one specific role(s).'
id: giveRoles
---

`$giveRoles` will give an specific user multiple or one specific role(s).

## الاستخدام

```php
$giveRoles[guildID;userID;reason?;...roles]
```

## البارامترات

| Field   | النوع   | الديسكبربشين                                                 | مطلوب |
| ------- | ------- | ------------------------------------------------------------ |:-----:|
| guildID | Integer | Of which guild the member should receive roles of.           | true  |
| userID  | Integer | The user ID of the guild member.                             | true  |
| reason? | string  | The reason that will be displayed in the guild's audit logs. | false |
| roles   | Integer | The IDs of the roles to give.                                | true  |

Please note that the bots **highest** role must be above the role you're trying to assign.

## مثال

This will assign you two role called "Admin" and "Moderator" (if present):

```javascript
bot.command({
    name: 'giveRoles',
    code: `
  $giveRoles[$guildID;$authorID;Some reason.;$findRole[Admin];$findRole[Moderator]]
  `
});
```