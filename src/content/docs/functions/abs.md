---
title: $abs
description: $abs returns the absolute value of the number.
id: abs
---

`$abs` returns the absolute value of the number.

## Usage

```aoi
$abs[number]
```

## Parameters

| Field  | Type                                                                                              | Description | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ----------- | :------: |
| number | [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The number. |   true   |

## Example(s)

This will return the absolute value of `-151.5`:

```js
client.command({
    name: "abs",
    code: `$abs[-151.5]`
});
```
