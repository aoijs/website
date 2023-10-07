---
title: $clientOwnerIDs
description: $clientOwnerIDs will return the user IDs of the bot owner (or of multiple people if you have a team).
id: clientOwnerIDs
---

`$clientOwnerIDs` will return the user IDs of the bot owner (or of multiple people if you have a team).

## Usage

```php
$clientOwnerIDs[separator?]
```

## Parameters

| Field      | Type   | Description                                 | Required |
| ---------- | ------ | ------------------------------------------- | :------: |
| separator? | string | Separator to split user IDs. (default: `,`) |  false   |

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
