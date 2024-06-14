---
title: $multi
description: $multi operation / multiplication.
id: multi
---

`$multi` will multiplicate given numbers.

## Usage

```aoi
$multi[num;num]
```

## Parameters

| Field | Type                                                                                              | Description                   | Required |
| ----- | ------------------------------------------------------------------------------------------------- | ----------------------------- | :------: |
| num   | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Numbers you want to multiply. |   true   |

## Example(s)

This will return `72` as `8*9` equals that:

```javascript
client.command({
    name: "multi",
    code: `
  $multi[8;9]
  `
});
```
