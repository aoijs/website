---
title: $channelLastMessageID
description: $channelLastMessageID will return the last message ID sent in the channel, if one was sent.
id: channelLastMessageId
---

`$channelLastMessageID` will return the last message ID sent in the channel, if one was sent.

## Usage

```php
$channelLastMessageID[channelID?]
```

## Parameters

| Field      | Type                                                                                              | Descript               | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ---------------------- | :------: |
| channelID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the channel. |  false   |

## Example(s)

This will return the last message ID sent in the channel, if one was sent:

```js
client.command({
  name: "channelLastMessageID",
  code: `$channelLastMessageID[$channelID]`
});
```