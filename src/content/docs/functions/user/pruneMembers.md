---
title: $pruneMembers
description: $pruneMembers will kick all inactive users whose been inactive for a given amount of time.
id: pruneMembers
---

`$pruneMembers` will kick all inactive users whose been inactive for a given amount of time.

## Usage

```php
$pruneMembers[days;guildID?;roleIDs?;dry?;reason?;returnCount?]
```

## Parameters

| Field                                                                                                                                         | Type                                                                                                                                                                                                 | Description                                                                       | Required |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | :------: |
| days                                                                                                                                          | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                    | Number of days to count prune for (1-30, 7 default).                              |   true   |
| guildID?                                                                                                                                      | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                    | Where members are going to be pruned.                                             |   false  |
| roleIDs?                                                                                                                                      | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Roles to include, splitted by commas.                                             |   false  |
| dry?                                                                                                                                          | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                  | 1. **true** <br /> 2. **false** (default)                                         |   false  |
| reason?                                                                                                                                       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Reason to display in the guild's audit logs.                                      |   false  |
| returnCount?                                                                                                                                  | [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)                                                                                                  | Return count of pruned members. <br /> 1. **true** <br /> 2. **false** (default)  |   false  |

## Example(s)

This will prune all members who have been inactive for 4 days and return the count of the pruned members that meet those
requirements:

```javascript
client.command({
  name: "pruneMembers",
  code: `
   $pruneMembers[4;$guildID;$guildID;true;Pruning!;true]
  `
});
```
