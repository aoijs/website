---
title: $shuffleQueue
description: $shuffleQueue will shuffle the current queue.
id: shuffleQueue
---

`$shuffleQueue` will shuffle the current queue.

## Usage

```php
$shuffleQueue
```

## Example(s)

This will shuffle the current queue:

```javascript
client.command({
  name: "shuffleQueue",
  code: `
    $shuffleQueue
  `,
});
```
