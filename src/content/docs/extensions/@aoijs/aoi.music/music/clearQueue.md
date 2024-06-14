---
title: $clearQueue
description: $clearQueue will clear the current player's queue.
id: clearQueue
---

:::tip[Extension]

This requires aoi.music installed.

:::

`$clearQueue` will clear the current player's queue.

## Usage

```aoi
$clearQueue
```

## Example(s)

This will clear the current queue:

```javascript
client.command({
    name: "clearQueue",
    code: `
    $clearQueue
  `
});
```
