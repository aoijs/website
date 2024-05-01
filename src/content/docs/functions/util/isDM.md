---
title: $isDM
description: $isDM will check if the given channel is a DM or not.
id: isDM
---

`$isDM` will check if the given channel is a DM or not.

## Usage

```php
$isDM[channelID?]
```

## Parameters

| Field      | Type                                                                                              | Description                               | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------- | :------: |
| channelID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of the channel that you want to check. |  false   |

## Example(s)

This will return either `true` or `false` depending on if you're executing the command in a DM or not:

```javascript
client.command({
    name: "isDM",
    code: `
  $isDM[$channelID]
  `
});
```
