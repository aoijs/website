---
title: $clearReactions
description: $clearReactions will remove a given or all reactions of a message.
id: clearReactions
---

`$clearReactions` will remove a given or all reactions of a message.

## Usage

```php
$clearReactions[channelID;messageID;emoji]
```

## Parameters

| Field     | Type                                                                                              | Description                                                                      | Required |
| --------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | :------: |
| channelID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The channel ID of where the message is located in.                               |   true   |
| messageID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The message ID.                                                                  |   true   |
| emoji     | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The emoji to remove. <br /> 1. **all** (default) <br /> 2. **emoji** - any emoji |   true   |

## Example(s)

This will add two emojis and remove one completely:

```javascript
client.command({
  name: "clearReactions",
  code: `
  $clearReactions[$channelID;$messageID;🥱]
  $wait[2s]
  $addCmdReactions[🥱;😩]
  `
});
```
