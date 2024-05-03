---
title: $randomRoleID
description: $randomRoleID will return a random role ID of a given guild.
id: randomRoleID
---

`$randomRoleID` will return a random role ID of a given guild.

## Usage

```php
$randomRoleID[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description                                   | Required |
| -------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Where it will return the random role ID from. |   true   |

## Example(s)

This will return a random role ID of your guild:

```javascript
client.command({
    name: "randomRoleID",
    code: `
  $randomRoleID[$guildID]
  `
});
```
