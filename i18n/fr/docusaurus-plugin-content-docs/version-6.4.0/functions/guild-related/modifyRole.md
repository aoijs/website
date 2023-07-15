---
title: '$modifyRole'
description: '$modifyRole will modify a given role.'
id: modifyRole
---

`$modifyRole` will modify a given role.

## Usage

```php
$modifyRole[guildID;roleID;...data]
```

## Parameters

| Field   | Type           | Description                                   | Required |
| ------- | -------------- | --------------------------------------------- |:--------:|
| guildID | integer        | The guild ID of where the role is located in. |   true   |
| roleID  | integer        | The role ID to modify.                        |   true   |
| ...data | string, object | New Role Data.                                |   true   |

## Example(s)

This will edit a existing role / change its name to "Awesome!":

```javascript
bot.command({
    name: 'modifyRole',
    code: `
  $modifyRole[$guildID;roleID;{
    "name": "Awesome!"
  }]
  `
});
```