---
title: '$pruneMembers'
description: '$pruneMembers will kick all inactive users whose been inactive for a given amount of time.'
id: pruneMembers
---

`$pruneMembers` will kick all inactive users whose been inactive for a given amount of time.

## प्रोयोग

```php
$pruneMembers[days;guildID?;roleIDs?;dry?;reason?;returnCount?]
```

## पैरामीटर्स

| फील्ड        | टाइप            | डिस्क्रिप्शन                                                                                 |    चाहिए     |
| ------------ | --------------- | -------------------------------------------------------------------------------------------- |:------------:|
| days         | number          | Number of days to count prune for (1-30, 7 default).                                         |     true     |
| guildID?     | integer         | Where members are going to be pruned.                                                        | असत्य (नहीं) |
| roleIDs?     | integer, string | Roles to include, splitted by commas.                                                        | असत्य (नहीं) |
| dry?         | boolean         | 1. **true** <br /> 2. **false** (default)                                              | असत्य (नहीं) |
| reason?      | स्ट्रिंग        | Reason to display in the guild's audit logs.                                                 | असत्य (नहीं) |
| returnCount? | boolean         | Return count of pruned members. <br /> 1. **true** <br /> 2. **false** (default) | असत्य (नहीं) |

## ट्रू (हा)

This will prune all members who have been inactive for 4 days and return the count of the pruned members that meet those requirements:

```javascript
bot.command({
    name: 'pruneMembers',
    code: `
   $pruneMembers[4;$guildID;$guildID;true;Pruning!;true]
  `
});
```