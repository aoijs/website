---
title: $mentionedChannelsCount
description: $mentionedChannelsCount will return the amount of channel mentions within a message.
id: mentionedChannelsCount
---

`$mentionedChannelsCount` will return the amount of channel mentions within a message.

## Usage

```aoi
$mentionedChannelsCount
```

## Example(s)

This will return the amount of channel mentions in the given text:

```javascript
client.command({
    name: "mentionedChannelsCount",
    code: `
  $mentionedChannelsCount
  <#837531672341381190> <#869210515065426012> <#805852932938661900>
  `
});
```
