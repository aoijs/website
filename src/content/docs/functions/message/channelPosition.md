---
title: $channelPosition
description: $channelPosition will return the position of the channel on the guild.
id: channelPosition
---

`$channelPosition` will return the position of the channel on the guild.

## Usage

```php
$channelPosition[channelID?]
```

## Parameters

| Field      | Type                                                                                              | Description            | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ---------------------- | :------: |
| channelID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the channel. |  false   |

## Example(s)

This will return the position of the current channel on the guild:

```js
client.command({
    name: "channelPosition",
    code: `$channelPosition[$channelID]`
});
```
