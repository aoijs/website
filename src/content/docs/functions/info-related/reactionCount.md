---
title: $reactionCount
description: $reactionCount will return the amount of users who reacted to a specific emoji.
id: reactionCount
---

`$reactionCount` will return the amount of users who reacted to a specific emoji.

## Usage

```php
$reactionCount[channelID;messageID;emoji]
```

## Parameters

| Field     | Type                                                                                              | Description                                            | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | :------: |
| channelID | integer                                                                                           | The ID of the channel where the message is located in. |   true   |
| messageID | integer                                                                                           | The ID of the message.                                 |   true   |
| emoji     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The emoji its reaction count will be returned of.      |   true   |

## Example(s)

This will return the amount of reactions on your message with which you executed the command, will most likely
return `1` due to the bot being the only one who reacted to it:

```javascript
client.command({
  name: "reactionCount",
  code: `
There are: $reactionCount[$channelID;$messageID;😫] reactions!
$addCmdReactions[😫]
`,
});
```
