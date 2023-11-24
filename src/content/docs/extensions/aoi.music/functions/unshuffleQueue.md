---
title: $unshuffleQueue
description: $unshuffleQueue will unshuffle the current queue.
id: unshuffleQueue
---

`$unshuffleQueue` will unshuffle the current queue.

## Usage

```php
$unshuffleQueue
```

## Example(s)

This will unshuffle the current queue:

```javascript
client.command({
  name: "unshuffleQueue",
  code: `
    $unshuffleQueue
  `
});
```
