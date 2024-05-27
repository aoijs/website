---
title: $fetchActiveThreads
description: $fetchActiveThreads will return all active threads of a given channel.
id: fetchActiveThreads
---

`$fetchActiveThreads` will return all active threads of a given channel.

## Usage

```aoi
$fetchActiveThreads[channelID;option?]
```

## Parameters

| Field     | Type                                                                                              | Description                                                                     | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | :------: |
| channelID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Channel ID of the channel of which you want to fetch the active threads of.     |   true   |
| option?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | How to return the active threads. <br /> 1. **name** (default) <br /> 2. **id** |  false   |

## Example(s)

This will return all active threads, if any:

```javascript
client.command({
    name: "fetchActiveThreads",
    code: `
  $fetchActiveThreads[$channelID;name]
  `
});
```
