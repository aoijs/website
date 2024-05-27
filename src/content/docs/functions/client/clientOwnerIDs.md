---
title: $clientOwnerIDs
description: $clientOwnerIDs will return the user IDs of the bot owner (or of multiple people if you have a team).
id: clientOwnerIDs
---

`$clientOwnerIDs` will return the user IDs of the bot owner (or of multiple people if you have a team).

## Usage

```aoi
$clientOwnerIDs[separator?]
```

## Parameters

| Field      | Type                                                                                              | Description                                | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------ | :------: |
| separator? | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Separator to split user IDs. (default: ``) |  false   |

## Example(s)

This will return your user ID most likely:

```javascript
client.command({
    name: "clientOwnerIDs",
    code: `
  $clientOwnerIDs
  `
});
```
