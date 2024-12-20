---
title: $channelName
description: $channelName will return the given channel's name.
id: channelName
---

`$channelName` will return the name of the given channel.

## Usage

```aoi
$channelName[channelID?]
```

## Parameters

| Field      | Type                                                                                              | Description                                             | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | :------: |
| channelID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Channel ID of the channel you want the channel name of. |  false   |

## Example(s)

This will return the channel name of the channel where you executed the command in:

```javascript
client.command({
    name: "channelName",
    code: `
  $channelName[$channelID]
  `
});
```
