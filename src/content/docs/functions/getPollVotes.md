---
title: $getPollVotes
description: $getPollVotes will return the users that voted for the answer.
id: getPollVotes
---

`$getPollVotes` will return the users that voted for the answer.

## Usage

```aoi
$getPollVotes[channelID?;messageID?;pollId;format?;sep?]
```

## Parameters

| Field      | Type                                                                                                | Description                                                        | Required |
| ---------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | :------: |
| channelID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The channel ID where the poll was created.                         |  false   |
| messageID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | The message ID of the poll.                                        |  false   |
| pollId     | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)   | ID of the poll answer where the votes will be retrieved from.      |  true    |
| format?    | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Format for the list.<br>1. **username**<br>2. **tag**<br>3. **id** |  false   |
| sep?       | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   | Separator for each entry (default `,`). |  false   |

## Example(s)

This will return the username of the usernames that voted for the first answer on the poll, separated by a comma. Replace the `channelID` and `messageID` with actual IDs:

```js
client.command({
  name: "getPollVotes",
  code: `$getPollVotes[channelID;messageID;1;{username};, ]`
});
```
