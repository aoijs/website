---
title: $modifyRole
description: $modifyRole will modify a given role.
id: modifyRole
---

`$modifyRole` will modify a given role.

## Usage

```php
$modifyRole[guildID;roleID;...data]
```

## Parameters

| Field                                       | Type                                                                                                                                                      | Description                                   | Required |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | :------: |
| guildID                                     | integer                                                                                                                                                   | The guild ID of where the role is located in. |   true   |
| roleID                                      | integer                                                                                                                                                   | The role ID to modify.                        |   true   |
| ...data                                     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [object](https://developer.mozilla.org/en-US/docs/Web/ |
| JavaScript/Reference/Global_Objects/Object) | New Role Data.                                                                                                                                            | true                                          |

## Example(s)

This will edit a existing role / change its name to "Awesome!":

```javascript
client.command({
  name: "modifyRole",
  code: `
  $modifyRole[$guildID;roleID;{
    "name": "Awesome!"
  }]
  `,
});
```
