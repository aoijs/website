---
title: $addCmdReactions
description: $addCmdReactions will react with given emojis to the author's message.
id: addCmdReactions
---

`$addCmdReactions` will react with given emojis to the author's message.

## Usage

```php
$addCmdReactions[...reactions]
```

## Parameters

| Field     | Type                                                                                              | Description       | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------- | :------: |
| reactions | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Reactions to add. |   true   |

## Example(s)

This will add the given emojis to the author's response ("Hello!"):

```javascript
client.command({
    name: "addCmdReactions",
    code: `
Hello!
$addCmdReactions[🧡;❤]
  `
});
```
