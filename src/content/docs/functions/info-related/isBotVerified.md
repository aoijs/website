---
title: $isBotVerified
description: $isBotVerified checks if the given bot is verified by Discord.
id: isBotVerified
---

`$isBotVerified` checks if the given bot is verified by Discord.

## Usage

```php
$isBotVerified[clientId?]
```

## Parameters

| Field     | Type                                                                                              | Description                                                  | Required |
| --------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | :------: |
| clientId? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The ID of the bot you want to check its verification status. |  false   |

## Example(s)

This will check if your bot is verified and return either `true` or `false`:

```javascript
client.command({
  name: "isBotVerified",
  code: `
  $isBotVerified[$clientId]
  `
});
```
