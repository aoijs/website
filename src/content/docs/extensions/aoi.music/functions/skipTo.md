---
title: $skipTo
description: $skipTo will skip to a specific song in the queue.
id: skipTo
---

`$skipTo` will skip to a specific song in the queue.

## Usage

```php
$skipTo[index]
```

## Parameters

| Field | Type   | Description    | Required |
|-------|--------|----------------|:--------:|
| index | number | track position |   true   |

## Example(s)

This will skip to the third song in the queue:

```javascript
bot.command({
    name: 'skipTo',
    code: `
    $skipTo[3]
  `
});
```