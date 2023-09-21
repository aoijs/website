---
title: $isMentioned
description: $isMentioned checks if the query contains a mention.
id: isMentioned
---

`$isMentioned` checks if the query contains a mention.

## Usage

```php
$isMentioned[query]
```

## Parameters

| Field | Type   | Description                                                   | Required |
| ----- | ------ | ------------------------------------------------------------- | :------: |
| query | string | Where you want to check if a user/role/channel was mentioned. |   true   |

## Example(s)

This will return `true` as you were mentioned within the message:

```javascript
client.command({
  name: "isMentioned",
  code: `
  $isMentioned[<@$authorID>]
  `,
});
```
