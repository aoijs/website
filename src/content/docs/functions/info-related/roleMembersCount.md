---
title: $roleMembersCount
description: $roleMembersCount will return the amount of members who have a specific role.
id: roleMembersCount
---

`$roleMembersCount` will return the amount of members who have a specific role.

## Usage

```php
$roleMembersCount[roleID;guildID?]
```

## Parameters

| Field    | Type    | Description   | Required |
| -------- | ------- | ------------- | :------: |
| roleID   | integer | The role ID.  |   true   |
| guildID? | integer | The guild ID. |  false   |

## Example(s)

This will return the amount of users who have a specific role:

```javascript
client.command({
  name: "roleMembersCount",
  code: `
  $roleMembersCount[$guildID;$guildID]
  `,
});
```
