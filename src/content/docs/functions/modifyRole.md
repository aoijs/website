---
title: $modifyRole
description: $modifyRole will modify a given role.
id: modifyRole
---

`$modifyRole` will modify a given role.

## Usage

```aoi
$modifyRole[guildID;roleID;...data]
```

## Parameters

| Field   | Type                                                                                                                                                                                                 | Description                                   | Required |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | :------: |
| guildID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                    | The guild ID of where the role is located in. |   true   |
| roleID  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                    | The role ID to modify.                        |   true   |
| ...data | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | New role data.                                |   true   |

## Example(s)

This will edit an existing role / change its name to "Awesome!":

```javascript
client.command({
    name: "modifyRole",
    code: `
  $modifyRole[$guildID;roleID;{
    "name": "Awesome!"
  }]
  `
});
```
