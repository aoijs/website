---
title: $rolePerms
description: $rolePerms will return all given permissions of a role.
id: rolePerms
---

`$rolePerms` will return all given permissions of a role.

## Usage

```php
$rolePerms[roleID;sep?;guildID?]
```

## Parameters

| Field    | Type    | Description                                     | Required |
| -------- | ------- | ----------------------------------------------- | :------: |
| roleID   | integer | The role ID.                                    |   true   |
| sep?     | integer | Separator to separate multiple returned values. |  false   |
| guildID? | integer | The guild ID.                                   |  false   |

## Example(s)

This will return the permissions for the `@everyone` role:

```javascript
bot.command({
    name: 'rolePerms',
    code: `
  $rolePerms[$guildID;, ;$guildID]
  `
});
```
