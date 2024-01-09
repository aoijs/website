---
title: $setRoleIcon
description: $setRoleIcon will set the icon of a specific role.
id: setRoleIcon
---

`$setRoleIcon` will set the icon of a specific role.

## Usage

```php
$setRoleIcon[guildID;roleID;icon]
```

## Parameters

| Field   | Type                                                                                              | Description                                | Required |
| ------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------ | -------- |
| guildID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild where the role exists. | false    |
| roleID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The role ID.                               | false    |
| icon    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The URL of the icon.                       | false    |

## Example(s)

This will change the icon of a given role to the specified icon:

```javascript
client.command({
  name: "setRoleIcon",
  code: `
  $setRoleIcon[$guildID;roleID;iconURL]
  `
});
```
