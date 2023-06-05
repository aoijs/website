---
title: $roleIconURL
description: $roleIconURL will retrieve the imagine URL of the role icon.
id: roleIconURL
---

`$roleIconURL` will retrieve the imagine URL of the role icon.

## Usage

```php
$roleIconURL[guildId?;roleId]
```

## Parameters

| Field    | Type    | Description                                    | Required |
| -------- | ------- | ---------------------------------------------- | :------: |
| guildId? | integer | ID of the guild where the role exists.         |  false   |
| roleId   | integer | ID of the role you want to check if it exists. |   true   |

## Example(s)

This will return the image URL of the role icon:

```javascript
bot.command({
    name: 'roleIconURL',
    code: `
  $roleIconURL[$guildID;900004369355931729]
  `
});
```