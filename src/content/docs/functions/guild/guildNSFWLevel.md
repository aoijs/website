---
title: $guildNSFWLevel
description: $guildNSFWLevel will return the guild's NSFW level.
id: guildNSFWLevel
---

`$guildNSFWLevel` will return the guild's NSFW level.

## Usage

```aoi
$guildNSFWLevel[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description          | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild. |   true   |

## Example(s)

This will return the guild's NSFW level:

```javascript
client.command({
    name: "guildNSFWLevel",
    code: `
  $guildNSFWLevel[$guildID]
  `
});
```
