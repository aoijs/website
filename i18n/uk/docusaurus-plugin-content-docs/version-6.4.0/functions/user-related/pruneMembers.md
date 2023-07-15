---
title: '$pruneMembers'
description: '$pruneMembers will kick all inactive users whose been inactive for a given amount of time.'
id: pruneMembers
---

`$pruneMembers` will kick all inactive users whose been inactive for a given amount of time.

## Використання

```php
$pruneMembers[days;guildID?;roleIDs?;dry?;reason?;returnCount?]
```

## Параметри

| Поле         | Тип             | Опис                                                                                         | Обов'язковий |
| ------------ | --------------- | -------------------------------------------------------------------------------------------- |:------------:|
| days         | number          | Number of days to count prune for (1-30, 7 default).                                         |     так      |
| guildID?     | integer         | Where members are going to be pruned.                                                        |      ні      |
| roleIDs?     | integer, string | Roles to include, splitted by commas.                                                        |      ні      |
| dry?         | boolean         | 1. **true** <br /> 2. **false** (default)                                              |      ні      |
| reason?      | рядок           | Reason to display in the guild's audit logs.                                                 |      ні      |
| returnCount? | boolean         | Return count of pruned members. <br /> 1. **true** <br /> 2. **false** (default) |      ні      |

## Приклад(и)

This will prune all members who have been inactive for 4 days and return the count of the pruned members that meet those requirements:

```javascript
bot.command({
    name: 'pruneMembers',
    code: `
   $pruneMembers[4;$guildID;$guildID;true;Pruning!;true]
  `
});
```