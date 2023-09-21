---
title: $awaitData
description: $awaitData will return awaited data given in awaited commands.
id: awaitData
---

`$awaitData` will return awaited data given in awaited commands.

## Usage

```php
$awaitData[name]
```

## Parameters

| Field | Type   | Description        | Required |
| ----- | ------ | ------------------ | :------: |
| name  | string | Awaited Data Name. |   true   |

## Example(s)

This will return the ID of every server member and log it in your console:

```javascript
client.command({
  name: "awaitData",
  code: `
  $forEachMember[1s;{ "members": "$membersCount" };returnMembers;]
  `,
});

client.awaitedCommand({
  name: "returnMembers",
  code: `
  $log[ $authorID , is one out of $awaitData[members] members ]
  `,
});
```
