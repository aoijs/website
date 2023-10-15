---
title: $roleName
description: $roleName will return the name of a specific role.
id: roleName
---

`$roleName` will return the name of a specific role.

## Usage

```php
$roleName[roleID;guildID?]
```

## Parameters

| Field    | Type    | Description                                                    | Required |
| -------- | ------- | -------------------------------------------------------------- | :------: |
| roleID   | integer | The role ID of which you want the role name to be returned of. |   true   |
| guildID? | integer | The guild ID.                                                  |  false   |

## Example(s)

This will return the role name of any role you may like, in this case, It would return `@everyone`:

```javascript
client.command({
  name: "roleName",
  code: `
  \`$roleName[$guildID]\`
  `,
});
```
