---
title: $isMentioned
description: $isMentioned checks if the query contains a mention.
id: isMentioned
---

`$isMentioned` checks if the query contains a mention.

## Usage

```aoi
$isMentioned[query]
```

## Parameters

| Field | Type                                                                                              | Description                                                   | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | :------: |
| query | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Where you want to check if a user/role/channel was mentioned. |   true   |

## Example(s)

This will return `true` as you were mentioned within the message:

```javascript
client.command({
    name: "isMentioned",
    code: `
  $isMentioned[<@$authorID>]
  `
});
```
