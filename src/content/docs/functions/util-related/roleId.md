---
title: $roleId
description: $roleId will return the ID of a role.
id: roleId
---

`$roleId` will return the ID of a role.

## Usage

```php
$roleId[roleResolver;guildID?]
```

## Parameters

| Field        | Type   | Description                                    | Required |
| ------------ | ------ | ---------------------------------------------- | :------: |
| roleResolver | string | Name of the role.                              |   true   |
| guildID?     | string | ID of the guild where the role was created in. |  false   |

## Example(s)

This will return the role ID of a role called `Owner` (this example won't work if you dont have that role):

```javascript
client.command({
  name: "roleId",
  code: `
  $roleId[Owner;$guildID]
  `
});
```
