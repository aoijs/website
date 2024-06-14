---
title: $guildSystemChannelID
description: $guildSystemChannelID will return the ID of the guild's system channel.
id: guildSystemChannelID
---

`$guildSystemChannelID` will return the ID of the guild's system channel.

## Usage

```aoi
$guildSystemChannelID[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description   | Required |
| -------- | ------------------------------------------------------------------------------------------------- | ------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The guild ID. |  false   |

## Example(s)

This will return the guild's system channel ID:

```javascript
client.command({
    name: "guildSystemChannelID",
    code: `
  $guildSystemChannelID[$guildID]
  `
});
```
