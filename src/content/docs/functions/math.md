---
title: $math
description: $math will return a calculated result of the given argument.
id: math
---

`$math` will return a calculated result of the given argument.

## Usage

```aoi
$math[equation]
```

## Parameters

| Field    | Type                                                                                              |      Description      | Required |
| -------- | ------------------------------------------------------------------------------------------------- | :-------------------: | :------: |
| equation | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | Calculation (/\*-+()) |   true   |

## Example(s)

This will return `205` as `15+5/2*26+(5+120)` equals it:

```javascript
client.command({
    name: "math",
    code: `
  $math[15+5/2*26+(5+120)]
  `
});
```
