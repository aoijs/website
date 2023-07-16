---
title: '$pruneMembers'
description: '$pruneMembers will kick all inactive users whose been inactive for a given amount of time.'
id: pruneMembers
---

`$pruneMembers` will kick all inactive users whose been inactive for a given amount of time.

## Uso

```php
$pruneMembers[days;guildID?;roleIDs?;dry?;reason?;returnCount?]
```

## Parámetros

| Campo        | Tipo            | Parámetros                                                                                            | Requerido |
| ------------ | --------------- | ----------------------------------------------------------------------------------------------------- |:---------:|
| days         | número          | Number of days to count prune for (1-30, 7 default).                                                  | verdadero |
| servidorID?  | entero          | Where members are going to be pruned.                                                                 |    no     |
| roleIDs?     | integer, string | Roles to include, splitted by commas.                                                                 |   falso   |
| dry?         | boolean         | 1. **true** <br /> 2. **false** (por defecto)                                                   |   falso   |
| ¿razón?      | cadena          | Reason to display in the guild's audit logs.                                                          |    no     |
| returnCount? | booleano        | Return count of pruned members. <br /> 1. **Verdadero** <br /> 2. **falso** (por defecto) |   falso   |

## Ejemplo(s)

This will prune all members who have been inactive for 4 days and return the count of the pruned members that meet those requirements:

```javascript
bot.command({
    name: 'pruneMembers',
    code: `
   $pruneMembers[4;$guildID;$guildID;true;Pruning!;true]
  `
});
```