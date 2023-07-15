---
title: '$roleMembersCount'
description: '$roleMembersCount will return the amount of members who have a specific role.'
id: roleMembersCount
---

`$roleMembersCount` will return the amount of members who have a specific role.

## الاستخدام

```php
$roleMembersCount[roleID;guildID?]
```

## البارامترات

| Field    | النوع   | الديسكبربشين  | مطلوب |
| -------- | ------- | ------------- |:-----:|
| roleID   | Integer | The role ID.  | true  |
| guildID? | Integer | The guild ID. | false |

## مثال

This will return the amount of users who have a specific role:

```javascript
bot.command({
    name: 'roleMembersCount',
    code: `
  $roleMembersCount[$guildID;$guildID]
  `
});
```