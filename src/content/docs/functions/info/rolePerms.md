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
