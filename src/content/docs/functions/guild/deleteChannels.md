---
title: $deleteChannels
description: $deleteChannels will delete multiple channels.
id: deleteChannels
---

`$deleteChannels` will delete multiple channels.

## Usage

```php
$deleteChannels[...channels]
```

## Parameters

| Field       | Type                                                                                              | Description                                            | Required |
| ----------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | :------: |
| ...channels | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The channel Ids of the channels which will be deleted. |   true   |

## Example(s)

This will delete multiple channels, make sure to replace the arguments:

```javascript
client.command({
  name: "deleteChannels",
  code: `
  $deleteChannels[channelID1;channelID2;channelID3;channelID4]
  `
});
```
