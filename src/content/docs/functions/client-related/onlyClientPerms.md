---
title: $onlyClientPerms
description: $onlyClientPerms will check if the bot has the listed permission and return a error message if not.
id: onlyClientPerms
---

`$onlyClientPerms` will check if the bot has the listed permission and return a error message if not.

## Usage

```php
$onlyClientPerms[...perms;error]
```

## Parameters

| Field    | Type   | Description                                                  | Required |
| -------- | ------ | ------------------------------------------------------------ | :------: |
| ...perms | string | Permission that the bot requires.                            |   true   |
| error    | string | Error to return when the bot has not the listed permissions. |   true   |

You can find all permissions **[here](../../guides/client/clientpermissions.md)**.

## Example(s)

This will limit the command to work only when the Bot has administrator permissions:

```javascript
client.command({
  name: "onlyClientPerms",
  code: `
    Ok.
    $onlyClientPerms[administrator;I don't have administrator permissions!]
    `
});
```
