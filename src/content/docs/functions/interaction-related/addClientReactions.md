---
title: $addClientReactions
description: $addClientReactions will add a reaction to the bot's message.
id: addClientReactions
---

`$addClientReactions` will add a reaction to the bot's message.

## Usage

```php
$addClientReactions[...reactions]
```

## Parameters

| Field     | Type                                                                                              | Description       | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------- | :------: |
| reactions | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Reactions to add. |   true   |

## Example(s)

This will add the given emojis to the bot's response ("Hello!"):

```javascript
client.command({
  name: "addClientReactions",
  code: `
    Hello!
    $addClientReactions[🧡;❤]
  `,
});
```
