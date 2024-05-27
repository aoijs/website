---
title: $guildMaxVideoChannelUsers
description: $guildMaxVideoChannelUsers will return the guild's max video channel users.
id: guildMaxVideoChannelUsers
---

`$guildMaxVideoChannelUsers` will return the guild's max video channel users.

## Usage

```aoi
$guildMaxVideoChannelUsers[guildID?]
```

## Parameters

| Field    | Type                                                                                              | Description          | Required |
| -------- | ------------------------------------------------------------------------------------------------- | -------------------- | :------: |
| guildID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the guild. |  false   |

## Example(s)

This will return the max amount of video channel users of the current guild (if any):

```javascript
client.command({
    name: "guildMaxVideoChannelUsers",
    code: `
  $guildMaxVideoChannelUsers[$guildID]
  `
});
```
