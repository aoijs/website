---
title: $roleId
description: $roleId will return the ID of a role.
id: roleId
---

`$roleId` will return the ID of a role.

## Usage

```aoi
$roleId[roleResolver;guildID?]
```

## Parameters

| Field        | Type                                                                                              | Description                                    | Required |
| ------------ | ------------------------------------------------------------------------------------------------- | ---------------------------------------------- | :------: |
| roleResolver | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Name of the role.                              |   true   |
| guildID?     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ID of the guild where the role was created in. |  false   |

## Example(s)

This will return the role ID of a role called `Owner` (this example won't work if you don't have that role):

```javascript
client.command({
    name: "roleId",
    code: `
  $roleId[Owner;$guildID]
  `
});
```
