---
title: $isThread
description: $isThread will check if the given channel is a thread or not.
id: isThread
---

`$isThread` will check if the given channel is a thread or not.

## Usage

```php
$isThread[channelID?]
```

## Parameters

| Field      | Type                                                                                              | Description                               | Required |
| ---------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------- | :------: |
| channelID? | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | ID of the channel that you want to check. |  false   |

## Example(s)

This will return either `true` or `false` depending on if you're executing the command in a thread:

```javascript
client.command({
    name: "isThread",
    code: `
  $isThread[$channelID]
  `
});
```
