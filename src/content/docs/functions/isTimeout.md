---
title: $isTimeout
description: $isTimeout will check if the user is timed out with Discord's built-in timeout feature.
id: isTimeout
---

`$isTimeout` will check if the user is timed out with Discord's built-in timeout feature.

## Usage

```aoi
$isTimeout[guildID?;userID?]
```

## Parameters

| Field    | Type                                                                                              | Description                                     | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild where they're timeouted in. |  false   |
| userID?  | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the user that's timeouted.            |  false   |

## Example(s)

This will check if you're timed out and either return `true` or `false`:

```javascript
client.command({
    name: "isTimeout",
    code: `
  $isTimeout[$guildID;$authorID]
  `
});
```
