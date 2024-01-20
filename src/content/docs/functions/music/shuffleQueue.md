---
title: $shuffleQueue
description: $shuffleQueue will shuffle the current queue.
id: shuffleQueue
sidebar: 
  badge:
    text: New
    variant: tip
---

:::tip[Extension]

This requires aoi.music installed.

:::

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
