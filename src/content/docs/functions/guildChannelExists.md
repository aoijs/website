---
title: $guildChannelExists
description: $guildChannelExists will check if a given guild channel exists.
id: guildChannelExists
---

`$guildChannelExists` will check if a given guild channel exists.

## Usage

```aoi
$guildChannelExists[guildID;channelResolver]
```

## Parameters

| Field           | Type                                                                                                                                                                                                 | Description                                        | Required |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | :------: |
| guildID         | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)                                                                                                    | ID of the guild where the guild channel exists in. |   true   |
| channelResolver | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | ID or name of the channel.                         |   true   |

## Example(s)

This will check if a guild channel with the name `rules` exists, alternatively, you could use the channel ID instead:

```javascript
client.command({
    name: "guildChannelExists",
    code: `
  $guildChannelExists[$guildID;rules]
  `
});
```
