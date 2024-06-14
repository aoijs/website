---
title: $endPoll
description: $endPoll will close the poll.
id: endPoll
---

`$endPoll` will close the poll.

## Usage

```aoi
$endPoll[channelID?;messageID?]
```

## Parameters

| Field      | Type                                                                                                | Description                                     | Required |
| ---------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------- | :------: |
| channelID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The channel ID where the poll is located        |  false   |
| messageID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The message ID of the poll that will be closed. |  false   |

## Example(s)

This will close the chosen poll, replace the `channelID` and `messageID` with actual IDs:

```js
client.command({
  name: "endPoll",
  code: `$endPoll[channelID;messageID]`
});
```
