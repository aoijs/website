---
title: $setChannelTopic
description: $setChannelTopic will modify a channel's topic.
id: setChannelTopic
---

`$setChannelTopic` will modify a channel's topic.

## Usage

```php
$setChannelTopic[channelID;topic]
```

## Parameters

| Field     | Type                                                                                              | Description                                         | Required |
| --------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------- | :------: |
| channelID | integer                                                                                           | The ID of the channel whose topic will be modified. |   true   |
| topic     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Content of the new channel topic.                   |   true   |

## Example(s)

This will change the topic of the channel where the command is executed in:

```javascript
client.command({
  name: "setChannelTopic",
  code: `
   $setChannelTopic[$channelID;Hello! This is the new channel topic!]`,
});
```
