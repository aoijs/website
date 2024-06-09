---
title: $guildContentFilter
description: $guildContentFilter will return the guild's content filter level.
id: guildContentFilter
---

`$guildContentFilter` will return the guild's content filter level.

## Usage

```aoi
$guildContentFilter[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description          | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild. |   true   |

| Type |          |
| ---- | -------- |
| 0    | Disabled |
| 1    | Medium   |
| 2    | High     |

## Example(s)

This will return the content filter level of a specific guild:

```javascript
client.command({
    name: "guildContentFilter",
    code: `
  $guildContentFilter[$guildID]
  `
});
```
