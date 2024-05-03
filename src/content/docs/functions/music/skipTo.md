---
title: $skipTo
description: $skipTo will skip to a specific song in the queue.
id: skipTo
---

:::tip[Extension]

This requires aoi.music installed.

:::

`$skipTo` will skip to a specific song in the queue.

## Usage

```php
$skipTo[index]
```

## Parameters

| Field | Type                                                                                              | Description    | Required |
| ----- | ------------------------------------------------------------------------------------------------- | -------------- | :------: |
| index | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | track position |   true   |

## Example(s)

This will skip to the third song in the queue:

```javascript
client.command({
    name: "skipTo",
    code: `
    $skipTo[3]
  `
});
```
