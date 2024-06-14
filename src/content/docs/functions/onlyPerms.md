---
title: $onlyPerms
description: $onlyPerms will check if the user has the listed permission and return a error message if not.
id: onlyPerms
---

`$onlyPerms` will check if the user has the listed permission and return a error message if not.

## Usage

```aoi
$onlyPerms[...perms;error]
```

## Parameters

| Field    | Type                                                                                              | Description                                                   | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | :------: |
| ...perms | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Permission the user requires.                                 |   true   |
| error    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Error to return when the user has not the listed permissions. |   true   |

You can find all permissions **[here](/guides/client/permissions/)**.

## Example(s)

This will limit the command to work only when the user has administrator permissions:

```javascript
client.command({
    name: "onlyPerms",
    code: `
    Ok.
    $onlyPerms[administrator;You don't have administrator permissions!]
    `
});
```
