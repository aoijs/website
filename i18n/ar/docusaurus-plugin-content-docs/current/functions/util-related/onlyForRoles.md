---
title: '$onlyForRoles'
description: '$onlyForRoles will check if the user who executed the command has any of the listed roles and return a error message if not.'
id: onlyForRoles
---

`$onlyForRoles` will check if the user who executed the command has any of the listed roles and return a error message if not.

## Usage

```php
$onlyForRoles[...roleIds;error]
```

## Parameters

| Field      | Type            | Description                                                                          | Required |
| ---------- | --------------- | ------------------------------------------------------------------------------------ |:--------:|
| ...roleIds | string, integer | Roles you want to limit the command to.                                              |   true   |
| error      | string          | Error to return when the command was not executed by any user with the listed roles. |  false   |

## Example(s)

This will limit the command only to the listed channels:

```javascript
bot.command({
    name: "onlyForRoles",
    code: `
    Ok.
    $onlyForRoles[roleID;roleID;You can't use that command!]
    `
});
```