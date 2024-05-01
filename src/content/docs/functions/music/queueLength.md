---
title: $queueLength
description: $queueLength will return the queue length.
id: queueLength
---

`$queueLength` will return the queue length.

## Usage

```php
$queueLength
```

## Example(s)

This will return the current queue length:

```javascript
client.command({
    name: "queueLength",
    code: `
    $queueLength
  `
});
```
