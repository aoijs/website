---
title: $sum
description: $sum will sum-up two given numbers.
id: sum
---

`$sum` will sum-up two given numbers.

## Usage

```php
$sum[num;num]
```

## Parameters

| Field | Type                                                                                              | Description                          | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ------------------------------------ | :------: |
| num   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Numbers to perform calculation with. |   true   |

## Example(s)

This will return `75` as `70+5` equals `75`:

```javascript
client.command({
  name: "sum",
  code: `
  $sum[70;5]
  `
});
```
