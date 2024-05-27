---
title: $channelLastPinTimestamp
description: $channelLastPinTimestamp will return the timestamp when the last pinned message was pinned, if there was one.
id: channelLastPinTimestamp
---

`$channelLastPinTimestamp` will return the timestamp when the last pinned message was pinned, if there was one.

## Usage

```aoi
$channelLastPinTimestamp[channelID?]
```

## Parameters

| Field      | Type                                                                                              | Description            | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ---------------------- | :------: |
| channelID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the channel. |  false   |

## Example(s)

This will return the timestamp when the last pinned message was pinned on the current channel, if there was one:

```js
client.command({
    name: "channelLastPinTimestamp",
    code: `$channelLastPinTimestamp[$channelID]`
});
```
