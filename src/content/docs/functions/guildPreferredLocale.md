---
title: $guildPreferredLocale
description: $guildPreferredLocale will return a guild's set locale.
id: guildPreferredLocale
---

`$guildPreferredLocale` will return a guild's set locale.

## Usage

```aoi
$guildPreferredLocale[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description          | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild. |  false   |

## Example(s)

This will return the guild's preferred locale:

```javascript
client.command({
    name: "guildPreferredLocale",
    code: `
  $guildPreferredLocale[$guildID]
  `
});
```
