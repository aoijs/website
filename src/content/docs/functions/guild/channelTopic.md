---
title: $channelTopic
description: $channelTopic will return the given channel's topic.
id: channelTopic
---

`$channelTopic` will return the given channel's topic.

## Usage

```php
$channelTopic[channelID?]
```

## Parameters

| Field      | Type                                                                                              | Description                                                   | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | :------: |
| channelID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of the channel you want it to return the channel topic of. |  false   |

## Example(s)

This will return the channel topic of the channel where you execute the command in:

```javascript
client.command({
    name: "channelTopic",
    code: `
  $channelTopic[$channelID]
  `
});
```
