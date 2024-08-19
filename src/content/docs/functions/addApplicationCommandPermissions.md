---
title: $addApplicationCommandPermissions
description: $addApplicationCommandPermissions will change the permissions of an application command.
id: addApplicationCommandPermissions
---

`$addApplicationCommandPermissions` will change the permissions of an application command.

## Usage

```aoi
$addApplicationCommandPermissions[guildID/global?;id;...perms]
```

## Parameters

| Field          | Type                                                                                                                                                                                                 | Description                                                                 | Required |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | :------: |
| guildID/global | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/number) | Application command type. <br/> 1. **global** <br/> 2. **specific guildID** |   true   |
| id             | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                    | Application command ID.                                                     |   true   |
| ...perms       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Permissions.                                                                |   true   |

## Example(s)

This will disable the application command for everyone in the guild ( make sure to replace "ID" with the actual slash command
ID ):

```javascript
client.command({
    name: "addApplicationCommandPermissions",
    code: `
    $addApplicationCommandPermissions[$guildID;ID;[
  {
    id: '$guildID',
    type: 'ROLE',
    permission: false
  }
]]`
});
```
