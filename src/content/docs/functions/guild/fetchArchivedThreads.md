---
title: $fetchArchivedThreads
description: $fetchArchivedThreads will return all archived threads of a given channel.
id: fetchArchivedThreads
---

`$fetchArchivedThreads` will return all archived threads of a given channel.

## Usage

```php
$fetchArchivedThreads[channelID;option?]
```

## Parameters

| Field     | Type                                                                                              | Description                                                                       | Required |
| --------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | :------: |
| channelID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Channel ID of the channel of which you want to fetch the achived threads of.      |   true   |
| option?   | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | How to return the archived threads. <br /> 1. **name** (default) <br /> 2. **id** |  false   |

## Example(s)

This will return all archived threads, if any:

```javascript
client.command({
  name: "fetchArchivedThreads",
  code: `
  $fetchArchivedThreads[$channelID;name]
  `
});
```
