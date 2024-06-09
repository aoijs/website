---
title: $ordinal
description: $ordinal adds st, nd, rd, th to a number such as 1st, 2nd, 3rd, 4th.
id: ordinal
---

`$ordinal` adds `st` `nd` `rd` `th` to a number such as `1st` `2nd` `3rd` `4th`.

## Usage

```aoi
$ordinal[number]
```

## Parameters

| Field  | Type                                                                                              | Description                                      | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------ | :------: |
| number | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | Number which will add `st` `nd` `rd` `th` to it. |   true   |

## Example(s)

```javascript
client.command({
    name: "ordinal",
    code: `
  $ordinal[12] -> Returns 12th
  $ordinal[50] -> Returns 50th
  $ordinal[11] -> Returns 11th
  $ordinal[88] -> Returns 88th
  `
});
```
