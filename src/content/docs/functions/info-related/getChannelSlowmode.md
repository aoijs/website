---
title: $getChannelSlowmode
description: $getChannelSlowmode will return a channel's slowmode in seconds.
id: getChannelSlowmode
---

`$getChannelSlowmode` will return a channel's slowmode in seconds.

## Usage

```php
$getChannelSlowmode[channelID?]
```

## Parameters

| Field      | Type    | Description                                                              | Required |
| ---------- | ------- | ------------------------------------------------------------------------ | :------: |
| channelID? | integer | ID of the channel where you want the channel slowmode to be returned of. |  false   |

## Example(s)

This will return the slowmode of the channel where you execute the command in:

```javascript
client.command({
  name: "getChannelSlowmode",
  code: `
  The current channel slowmode is: $getChannelSlowmode[$channelID] seconds!
  `,
});
```
