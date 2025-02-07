---
title: $rolePerms
description: $rolePerms will return all permissions of a given role.
id: rolePerms
---

`$rolePerms` will return all permissions of a given role.

## Usage

```aoi
$rolePerms[roleID;sep?;guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description                                     | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------- | :------: |
| roleID   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The role ID.                                    |   true   |
| sep?     | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Separator to separate multiple returned values. |  false   |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The guild ID.                                   |  false   |

## Example(s)

This will return the permissions for the `@everyone` role:

```javascript
client.command({
    name: "rolePerms",
    code: `
  $rolePerms[$guildID;, ;$guildID]
  `
});
```
