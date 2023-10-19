---
title: $isChannelManageable
description: $isChannelManageable will check if the channel is manageable or not.
id: isChannelManageable
---

`$isChannelManageable` will check if the channel is manageable or not.

## Usage

```php
$isChannelManageable[channelID?]
```

## Parameters

| Field      | Type                                                                                                | Description                                                     | Required |
| ---------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | :------: |
| channelID? | [integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Integer) | ID of the channel to check if the channel is manageable or not. |  false   |

## Example(s)

This will return `true` or `false` depending on if the channel you're executing the command in is manageable:

```javascript
client.command({
  name: "isChannelManageable",
  code: `
  $isChannelManageable[$channelID]
  `,
});
```
