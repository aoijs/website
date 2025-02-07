---
title: $onlyForRoles
description: $onlyForRoles will check if the user who executed the command has any of the listed roles and return a error message if not.
id: onlyForRoles
---

`$onlyForRoles` will check if the user who executed the command has any of the listed roles and return a error message
if not.

## Usage

```aoi
$onlyForRoles[...roleIDs;error]
```

## Parameters

| Field      | Type                                                                                                                                                                                                 | Description                                                                          | Required |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | :------: |
| ...roleIDs | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [number](https://developer.mozilla.org/en-us/docs/web/javascript/reference/global_objects/number) | Roles you want to limit the command to.                                              |   true   |
| error      | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)                                                                                                    | Error to return when the command was not executed by any user with the listed roles. |  false   |

## Example(s)

This will limit the command only to the listed roles:

```javascript
client.command({
    name: "onlyForRoles",
    code: `
    Ok.
    $onlyForRoles[roleID;roleID;You can't use that command!]
    `
});
```
