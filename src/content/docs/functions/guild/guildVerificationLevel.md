---
title: $guildVerificationLevel
description: $guildVerificationLevel will return the guild's verification level.
id: guildVerificationLevel
---

`$guildVerificationLevel` will return the guild's verification level.

## Usage

```aoi
$guildVerificationLevel[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description          | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild. |  false   |

| Type |         |
| ---- | ------- |
| 0    | None    |
| 1    | Low     |
| 2    | Medium  |
| 3    | High    |
| 4    | Highest |

## Example(s)

This will return the guild's verification Level:

```javascript
client.command({
    name: "guildVerificationLevel",
    code: `
  $guildVerificationLevel[$guildID]
  `
});
```
