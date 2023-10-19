---
title: $isBot
description: $isBot will check if the given user is a bot.
id: isBot
---

`$isBot` will check if the given user is a bot.

## Usage

```php
$isBot[userID?]
```

## Parameters

| Field   | Type                                                                                                | Description                        | Required |
| ------- | --------------------------------------------------------------------------------------------------- | ---------------------------------- | :------: |
| userID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | User id to check if they're a bot. |  false   |

## Example(s)

This will return `true` as your bot is, obviously, a bot:

```javascript
client.command({
  name: "isBot",
  code: `
  $isBot[$clientID]
  `,
});
```
