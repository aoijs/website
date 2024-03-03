---
title: $addMessageReactions
description: $addMessageReactions will add a reaction to a specific message.
id: addMessageReactions
---

`$addMessageReactions` will add a reaction to a specific message.

## Usage

```php
$addMessageReactions[channelID;messageID;...reactions]
```

## Parameters

| Field     | Type                                                                                              | Description                                 | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------- | :------: |
| channelID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Channel ID of where the message is located. |   true   |
| messageID | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Message ID.                                 |   true   |
| reactions | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Reactions to add.                           |   true   |

## Example(s)

This will add the given reactions to your message:

```javascript
client.command({
  name: "addMessageReactions",
  code: `
 $addMessageReactions[$channelID;$messageID;✅;❌]
  `
});
```
