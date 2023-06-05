---
title: $setRoles
description: $setRoles will set a member's roles.
id: setRoles
---

`$setRoles` will set a member's roles.

## Usage

```php
$setRoles[guildID;memberID;...roleIDs]
```

## Parameters

| Field      | Type    | Description                                                         | Required |
| ---------- | ------- | ------------------------------------------------------------------- | :------: |
| guildID    | integer | The ID of the guild where the users roles will be removed or added. |   true   |
| memberID   | integer | The user ID of the guild member.                                    |   true   |
| ...roleIDs | integer | The Ids of the roles.                                               |
## Example(s)

This will either remove or add specific roles from you:

```javascript
bot.command({
    name: 'setRoles',
    code: `
   $setRoles[$guildID;$authorID;roleID1;roleID2;roleID3;....]`
});
```