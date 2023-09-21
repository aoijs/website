---
title: $usersWithRole
description: $usersWithRole will return the users who have a specific role.
id: usersWithRole
---

`$usersWithRole` will return the users who have a specific role.

## Usage

```php
$usersWithRole[roleID;guildID?;option?;sep?]
```

## Parameters

| Field    | Type    | Description                                                              | Required |
| -------- | ------- | ------------------------------------------------------------------------ | :------: |
| roleID   | integer | The role ID.                                                             |   true   |
| guildID? | integer | The guild ID.                                                            |  false   |
| option?  | string  | How to return the users <br /> 1. **id** (default) <br /> 2. **mention** |  false   |
| sep?     | string  | Separator to separate multiple returned values.                          |  false   |

## Example(s)

This will return the users of a specific role, make sure to replace roleID:

```javascript
client.command({
  name: "usersWithRole",
  code: `
  $usersWithRole[roleID;$guildID;id;, ]
  `,
});
```
