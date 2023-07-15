---
title: '$roleMembersCount'
description: '$roleMembersCount will return the amount of members who have a specific role.'
id: roleMembersCount
---

`$roleMembersCount` will return the amount of members who have a specific role.

## प्रोयोग

```php
$roleMembersCount[roleID;guildID?]
```

## पैरामीटर्स

| फील्ड    | टाइप    | डिस्क्रिप्शन  |    चाहिए     |
| -------- | ------- | ------------- |:------------:|
| roleID   | integer | The role ID.  |     true     |
| guildID? | integer | The guild ID. | असत्य (नहीं) |

## ट्रू (हा)

This will return the amount of users who have a specific role:

```javascript
bot.command({
    name: 'roleMembersCount',
    code: `
  $roleMembersCount[$guildID;$guildID]
  `
});
```